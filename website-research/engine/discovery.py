import urllib.parse
from pathlib import Path

class DiscoveryEngine:
    def __init__(self, storage_manager):
        self.storage = storage_manager

    def build_search_targets(self, query=None, industry=None, style=None, section=None):
        search_terms = []
        if industry:
            search_terms.append(industry)
        if style:
            search_terms.append(style)
        if section:
            search_terms.append(section)
        if query and query not in search_terms:
            search_terms.append(query)
            
        combined_query = " ".join(search_terms).strip()
        encoded = urllib.parse.quote_plus(combined_query) if combined_query else ""
        
        targets = []
        
        # 1. Siteinspire
        if encoded:
            targets.append({
                "source": "siteinspire",
                "name": "SiteInspire",
                "search_url": f"https://www.siteinspire.com/search?query={encoded}",
                "query_used": combined_query,
                "type": "gallery_search"
            })
            
        # 2. One Page Love
        if industry:
            # Check direct genre path
            ind_slug = industry.lower().replace(" ", "-")
            targets.append({
                "source": "onepagelove",
                "name": "One Page Love",
                "search_url": f"https://onepagelove.com/genre/{ind_slug}",
                "query_used": industry,
                "type": "genre_archive"
            })
        elif section:
            sec_slug = section.lower().replace(" ", "-")
            targets.append({
                "source": "onepagelove",
                "name": "One Page Love",
                "search_url": f"https://onepagelove.com/section/{sec_slug}",
                "query_used": section,
                "type": "section_archive"
            })
        if encoded:
            targets.append({
                "source": "onepagelove",
                "name": "One Page Love (Live Search)",
                "search_url": f"https://onepagelove.com/?s={encoded}",
                "query_used": combined_query,
                "type": "keyword_search"
            })
            
        # 3. Lapa Ninja
        if encoded:
            targets.append({
                "source": "lapa_ninja",
                "name": "Lapa Ninja",
                "search_url": f"https://www.lapa.ninja/search/?q={encoded}",
                "query_used": combined_query,
                "type": "landing_page_search"
            })
            
        # 4. Awwwards
        if encoded:
            targets.append({
                "source": "awwwards",
                "name": "Awwwards",
                "search_url": f"https://www.awwwards.com/websites/?search={encoded}",
                "query_used": combined_query,
                "type": "award_winning_search"
            })
            
        # 5. Land-book
        if encoded:
            targets.append({
                "source": "land_book",
                "name": "Land-book",
                "search_url": f"https://land-book.com/websites?query={encoded}",
                "query_used": combined_query,
                "type": "curated_search"
            })
        if section:
            targets.append({
                "source": "land_book",
                "name": "Land-book Sections",
                "search_url": "https://land-book.com/sections",
                "query_used": section,
                "type": "section_catalog"
            })
            
        # 6. Godly (Recent)
        targets.append({
            "source": "godly",
            "name": "Godly (Recent)",
            "search_url": "https://recent.design/?ref=godly",
            "query_used": combined_query or "all",
            "type": "aesthetic_curated_feed"
        })
        
        # 7. Refero
        targets.append({
            "source": "refero",
            "name": "Refero (Public Screens)",
            "search_url": "https://refero.design",
            "query_used": combined_query or "patterns",
            "type": "ux_pattern_library"
        })
        
        return targets

    def register_reference(self, name, source_platform, source_url, live_url=None, industry=None, styles=None, tech=None, screenshots=None, notes=""):
        ref_data = {
            "name": name,
            "source_platform": source_platform,
            "source_url": source_url,
            "live_url": live_url or source_url,
            "industry": industry if isinstance(industry, list) else ([industry] if industry else []),
            "styles": styles if isinstance(styles, list) else ([styles] if styles else []),
            "tech": tech if isinstance(tech, list) else ([tech] if tech else []),
            "screenshots": screenshots or {},
            "notes": notes,
            "rank_score": 0
        }
        return self.storage.save_reference(ref_data)
