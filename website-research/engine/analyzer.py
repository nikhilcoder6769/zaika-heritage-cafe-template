"""
Design Analysis Engine
Evaluates structural components and visual design tokens.
"""

class DesignAnalyzer:
    COMPONENT_TYPES = [
        "hero",
        "navigation",
        "header",
        "footer",
        "services",
        "products",
        "pricing_table",
        "testimonials",
        "contact_form",
        "gallery",
        "cta_section",
        "cards_and_grids",
        "mobile_navigation",
        "responsive_layout"
    ]
    
    ANALYSIS_CRITERIA = [
        "typography",
        "font_hierarchy",
        "color_palette",
        "whitespace_and_spacing",
        "alignment_and_grid",
        "visual_hierarchy",
        "border_radius_and_shadows",
        "component_consistency",
        "animations_and_motion",
        "interaction_patterns",
        "accessibility_a11y"
    ]

    def create_analysis_template(self, ref_name):
        return {
            "reference_name": ref_name,
            "components_detected": {comp: {"present": False, "notes": "", "pattern": ""} for comp in self.COMPONENT_TYPES},
            "design_tokens": {
                "typography": {
                    "primary_heading_font": "",
                    "body_font": "",
                    "accent_font": "",
                    "scale_ratio": "1.25 (Major Third) or 1.333 (Perfect Fourth)",
                    "weights_used": ["400", "600", "700"]
                },
                "colors": {
                    "primary_hex": "",
                    "secondary_hex": "",
                    "accent_hex": "",
                    "background_hex": "",
                    "surface_hex": "",
                    "text_primary_hex": "",
                    "text_muted_hex": "",
                    "color_contrast_notes": ""
                },
                "spatial_system": {
                    "base_unit": "8px (8pt grid system)",
                    "container_max_width": "1280px",
                    "padding_mobile": "16px or 20px",
                    "padding_desktop": "64px to 96px",
                    "whitespace_density": "High / Airy / Compact"
                },
                "shape_and_depth": {
                    "border_radius_style": "Sharp (0px) / Subtle (4-8px) / Modern Curved (12-16px) / Pill (9999px)",
                    "shadow_style": "Flat / Soft Glow / Diffused Elevation / Brutalist Solid",
                    "border_accents": "Subtle 1px border or borderless"
                },
                "motion": {
                    "transition_timing": "200ms - 300ms ease-out",
                    "scroll_reveal": "Fade-up / None / Parallax / Micro-stagger",
                    "hover_effects": "Subtle scale / underline animation / card elevation"
                },
                "accessibility": {
                    "wcag_compliance_target": "AA",
                    "tap_target_sizes": "Min 44x44 CSS px for touch",
                    "semantic_structure": "Valid header, nav, main, section, footer tags",
                    "focus_indicators": "Visible outline on tab navigation"
                }
            },
            "ux_strengths": [],
            "ux_weaknesses": [],
            "applicable_takeaways": []
        }

    def evaluate_palette_contrast(self, bg_hex, text_hex):
        def parse_hex(h):
            h = h.lstrip("#")
            if len(h) == 3:
                h = "".join(c * 2 for c in h)
            return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))
            
        def luminance(r, g, b):
            a = [x / 255.0 for x in (r, g, b)]
            a = [x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4 for x in a]
            return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
            
        try:
            rgb1 = parse_hex(bg_hex)
            rgb2 = parse_hex(text_hex)
            l1 = luminance(*rgb1)
            l2 = luminance(*rgb2)
            ratio = (max(l1, l2) + 0.05) / (min(l1, l2) + 0.05)
            passes_aa = ratio >= 4.5
            passes_aaa = ratio >= 7.0
            return {
                "contrast_ratio": round(ratio, 2),
                "passes_aa_normal": passes_aa,
                "passes_aaa_normal": passes_aaa,
                "passes_aa_large": ratio >= 3.0
            }
        except Exception:
            return {"contrast_ratio": None, "error": "Invalid hex format"}
