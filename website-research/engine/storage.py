import os
import json
import hashlib
import datetime
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
REFERENCES_DIR = BASE_DIR / "references"
WEBSITE_REFS_DIR = REFERENCES_DIR / "website-references"
INDEX_FILE = REFERENCES_DIR / "source-index.json"
SCREENSHOTS_DIR = BASE_DIR / "screenshots"
DESKTOP_DIR = SCREENSHOTS_DIR / "desktop"
MOBILE_DIR = SCREENSHOTS_DIR / "mobile"
DESIGN_SYSTEMS_DIR = BASE_DIR / "design-systems"
COMPONENTS_DIR = BASE_DIR / "components"
REPORTS_DIR = BASE_DIR / "reports"
CLIENT_PROJECTS_DIR = BASE_DIR / "client-projects"
CONFIG_DIR = BASE_DIR / "configuration"

class StorageManager:
    def __init__(self):
        for d in [WEBSITE_REFS_DIR, DESKTOP_DIR, MOBILE_DIR, DESIGN_SYSTEMS_DIR, COMPONENTS_DIR, REPORTS_DIR, CLIENT_PROJECTS_DIR, CONFIG_DIR]:
            d.mkdir(parents=True, exist_ok=True)
            
    def load_index(self):
        if INDEX_FILE.exists():
            try:
                with open(INDEX_FILE, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception:
                pass
        return {
            "system": "Unified Design Intelligence System",
            "version": "1.0.0",
            "updated_at": datetime.datetime.now().isoformat(),
            "total_indexed": 0,
            "sources_active": ["siteinspire", "onepagelove", "lapaninja", "awwwards", "landbook", "godly", "refero"],
            "references": []
        }

    def save_index(self, index_data):
        index_data["updated_at"] = datetime.datetime.now().isoformat()
        index_data["total_indexed"] = len(index_data.get("references", []))
        with open(INDEX_FILE, "w", encoding="utf-8") as f:
            json.dump(index_data, f, indent=2, ensure_ascii=False)

    def slugify(self, text):
        return "".join(c.lower() if c.isalnum() else "-" for c in text).strip("-")

    def save_reference(self, ref_data):
        slug = ref_data.get("id") or self.slugify(ref_data.get("name", "unknown"))
        ref_data["id"] = slug
        ref_data["saved_at"] = ref_data.get("saved_at") or datetime.datetime.now().isoformat()
        
        filepath = WEBSITE_REFS_DIR / f"{slug}.json"
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(ref_data, f, indent=2, ensure_ascii=False)
            
        index = self.load_index()
        existing_idx = next((i for i, r in enumerate(index["references"]) if r["id"] == slug), None)
        
        summary = {
            "id": slug,
            "name": ref_data.get("name"),
            "source_platform": ref_data.get("source_platform"),
            "source_url": ref_data.get("source_url"),
            "live_url": ref_data.get("live_url"),
            "industry": ref_data.get("industry", []),
            "styles": ref_data.get("styles", []),
            "tech": ref_data.get("tech", []),
            "rank_score": ref_data.get("rank_score", 0),
            "screenshots": ref_data.get("screenshots", {}),
            "updated_at": ref_data["saved_at"]
        }
        
        if existing_idx is not None:
            index["references"][existing_idx] = summary
        else:
            index["references"].append(summary)
            
        self.save_index(index)
        return filepath

    def get_reference(self, ref_id):
        filepath = WEBSITE_REFS_DIR / f"{ref_id}.json"
        if filepath.exists():
            with open(filepath, "r", encoding="utf-8") as f:
                return json.load(f)
        return None

    def list_references(self, industry=None, style=None, min_score=0):
        index = self.load_index()
        results = index.get("references", [])
        if industry:
            ind_lower = industry.lower()
            results = [r for r in results if any(ind_lower in i.lower() for i in r.get("industry", []))]
        if style:
            style_lower = style.lower()
            results = [r for r in results if any(style_lower in s.lower() for s in r.get("styles", []))]
        if min_score > 0:
            results = [r for r in results if r.get("rank_score", 0) >= min_score]
        return results

    def save_client_project(self, project_id, project_data):
        proj_dir = CLIENT_PROJECTS_DIR / project_id
        proj_dir.mkdir(parents=True, exist_ok=True)
        file_path = proj_dir / "project.json"
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(project_data, f, indent=2, ensure_ascii=False)
        return file_path

    def save_design_system(self, project_id, system_data):
        file_path = DESIGN_SYSTEMS_DIR / f"{project_id}-design-system.json"
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(system_data, f, indent=2, ensure_ascii=False)
        return file_path

    def save_spec_report(self, project_id, spec_markdown):
        file_path = REPORTS_DIR / f"{project_id}-design-spec.md"
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(spec_markdown)
        return file_path
