"""
Unified Design Intelligence System - CLI & Controller
Provides callable operations for agents and developers.
"""

import sys
import os
import json
import argparse
from pathlib import Path

# Ensure engine package is importable
current_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(current_dir.parent))

from engine.storage import StorageManager
from engine.discovery import DiscoveryEngine
from engine.analyzer import DesignAnalyzer
from engine.ranking import ReferenceRanker
from engine.spec_generator import SpecGenerator

def main():
    parser = argparse.ArgumentParser(description="Unified Design Intelligence System")
    subparsers = parser.add_subparsers(dest="command", help="Command to execute")

    # discover
    p_disc = subparsers.add_parser("discover", help="Discover references across design platforms")
    p_disc.add_argument("--industry", type=str, help="Industry sector (e.g. restaurant, saas, fintech)")
    p_disc.add_argument("--style", type=str, help="Style (e.g. minimal, editorial, brutalist)")
    p_disc.add_argument("--section", type=str, help="Section (e.g. hero, pricing, testimonials)")
    p_disc.add_argument("--query", type=str, help="Free-form search term")

    # index-add
    p_add = subparsers.add_parser("register-reference", help="Register a verified reference")
    p_add.add_argument("--name", required=True, help="Website Name")
    p_add.add_argument("--source", required=True, help="Source platform (e.g. Siteinspire, OnePageLove)")
    p_add.add_argument("--source-url", required=True, help="Source platform URL")
    p_add.add_argument("--live-url", help="Live website URL")
    p_add.add_argument("--industry", nargs="+", help="Industries")
    p_add.add_argument("--styles", nargs="+", help="Styles")
    p_add.add_argument("--tech", nargs="+", help="Tech stack")
    p_add.add_argument("--desktop-screenshot", help="Desktop screenshot path")
    p_add.add_argument("--mobile-screenshot", help="Mobile screenshot path")
    p_add.add_argument("--notes", default="", help="Design notes")

    # rank
    p_rank = subparsers.add_parser("rank", help="Rank indexed references for a project")
    p_rank.add_argument("--industry", type=str, help="Target industry")
    p_rank.add_argument("--style", type=str, help="Target style")

    # analyze
    p_ana = subparsers.add_parser("analyze", help="Generate design analysis template for a reference")
    p_ana.add_argument("--name", required=True, help="Reference name")

    # spec
    p_spec = subparsers.add_parser("generate-spec", help="Generate full 16-part design specification")
    p_spec.add_argument("--project-id", required=True, help="Unique project ID")
    p_spec.add_argument("--name", required=True, help="Project / Client Name")
    p_spec.add_argument("--industry", required=True, help="Target industry")
    p_spec.add_argument("--audience", default="Prospective Customers", help="Target audience")
    p_spec.add_argument("--goals", default="Modern, high-converting digital presence", help="Project goals")

    # status
    p_stat = subparsers.add_parser("status", help="Show system status and indexed counts")

    args = parser.parse_args()
    storage = StorageManager()
    discovery = DiscoveryEngine(storage)
    analyzer = DesignAnalyzer()
    ranker = ReferenceRanker()
    spec_gen = SpecGenerator(storage)

    if args.command == "discover":
        targets = discovery.build_search_targets(
            query=args.query,
            industry=args.industry,
            style=args.style,
            section=args.section
        )
        print(json.dumps({
            "operation": "discover_references",
            "search_targets": targets,
            "total_targets": len(targets)
        }, indent=2))

    elif args.command == "register-reference":
        screenshots = {}
        if args.desktop_screenshot:
            screenshots["desktop"] = args.desktop_screenshot
        if args.mobile_screenshot:
            screenshots["mobile"] = args.mobile_screenshot
            
        file_path = discovery.register_reference(
            name=args.name,
            source_platform=args.source,
            source_url=args.source_url,
            live_url=args.live_url,
            industry=args.industry,
            styles=args.styles,
            tech=args.tech,
            screenshots=screenshots,
            notes=args.notes
        )
        print(json.dumps({
            "operation": "register_reference",
            "status": "success",
            "file": str(file_path)
        }, indent=2))

    elif args.command == "rank":
        all_refs = storage.list_references(industry=args.industry, style=args.style)
        ranked = ranker.rank_references(all_refs, target_industry=args.industry)
        print(json.dumps({
            "operation": "rank_references",
            "ranked_count": len(ranked),
            "results": ranked
        }, indent=2))

    elif args.command == "analyze":
        template = analyzer.create_analysis_template(args.name)
        print(json.dumps(template, indent=2))

    elif args.command == "generate-spec":
        all_refs = storage.list_references(industry=args.industry)
        ranked = ranker.rank_references(all_refs, target_industry=args.industry)
        
        project_data = {
            "id": args.project_id,
            "name": args.name,
            "industry": args.industry,
            "target_audience": args.audience,
            "goals": args.goals
        }
        storage.save_client_project(args.project_id, project_data)
        
        spec_md = spec_gen.generate_specification(project_data, ranked[:5])
        spec_path = storage.save_spec_report(args.project_id, spec_md)
        
        print(json.dumps({
            "operation": "generate_design_specification",
            "status": "success",
            "project_id": args.project_id,
            "specification_path": str(spec_path),
            "selected_references_count": len(ranked[:5])
        }, indent=2))

    elif args.command == "status":
        idx = storage.load_index()
        print(json.dumps({
            "system": "Unified Design Intelligence System",
            "status": "operational",
            "active_sources": idx.get("sources_active", []),
            "total_indexed_references": len(idx.get("references", []))
        }, indent=2))
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
