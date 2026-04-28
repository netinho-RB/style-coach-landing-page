---
name: Executive Core
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e0bfb9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a78a85'
  outline-variant: '#58413d'
  surface-tint: '#ffb4a5'
  primary: '#ffb4a5'
  on-primary: '#650a00'
  primary-container: '#f86d53'
  on-primary-container: '#660a00'
  inverse-primary: '#aa3520'
  secondary: '#57dacd'
  on-secondary: '#003733'
  secondary-container: '#00a89c'
  on-secondary-container: '#003531'
  tertiary: '#57dacd'
  on-tertiary: '#003733'
  tertiary-container: '#00ab9f'
  on-tertiary-container: '#003833'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a5'
  on-primary-fixed: '#3f0400'
  on-primary-fixed-variant: '#891d0b'
  secondary-fixed: '#77f7e9'
  secondary-fixed-dim: '#57dacd'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#00504a'
  tertiary-fixed: '#77f7e9'
  tertiary-fixed-dim: '#57dacd'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#00504a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-2xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 104px
---

## Brand & Style

Executive Core embodies a high-stakes, "Elite Performance" aesthetic tailored for tech founders and executive leadership. The brand personality is authoritative, precise, and premium, utilizing a "Dark Mode First" philosophy that minimizes visual noise to focus on clarity and impact.

The design style is a sophisticated blend of **Minimalism** and **Vercel-inspired Modernism**. It relies on high-contrast typography, a strict monochromatic base with a singular high-energy accent, and structural integrity through subtle borders and tonal layering rather than heavy shadows. The emotional response is one of trust, exclusivity, and technical mastery.

## Colors

The palette is anchored by a deep obsidian background (`#0A0A0A`), creating a canvas for high-contrast content. 

- **Primary Accent:** `#F86D53` (Cinnabar) is used sparingly for critical actions and brand markers to signal energy and urgency.
- **Secondary Accent:** `#57DACD` (Tiffany Blue) acts as a high-fidelity secondary or success indicator.
- **Surface Strategy:** We use a monochromatic stack of neutrals. Surfaces are defined by their borders (`#262626`) and background blurs rather than drastic shifts in hex value.
- **Typography Colors:** Pure white is reserved for headings to maximize readability, while body text uses a slightly desaturated off-white (`#E2E2E2`) or a warm-tinted variant (`#E0BFB9`) to reduce eye strain and add a premium feel.

## Typography

The system exclusively utilizes **Inter** to maintain a systematic, utilitarian, and corporate-modern feel. 

Hierarchy is established through aggressive negative letter-spacing in larger displays (`-0.04em`) to create a "tight," editorial look common in high-end tech branding. Headlines should remain medium to semi-bold, avoiding ultra-heavy weights to keep the aesthetic refined. Labels are capitalized and tracked out significantly to act as navigational markers or category tags.

## Layout & Spacing

The layout utilizes a **fixed-width container strategy** (max 1200px) centered within the viewport. 

- **Vertical Rhythm:** Large section spacing (`3xl` / 104px) is used to create distinct breaks between the hero and subsequent content, emphasizing whitespace as a luxury design element.
- **Internal Spacing:** Components use a baseline 8px (sm) grid. Buttons and inputs use `md` (16px) for horizontal padding and `xs` (4px) or `sm` (8px) for vertical padding depending on their prominence.
- **Grid:** A standard 12-column logic applies, though the hero section favors a 1:1 or 2:1 split for dramatic visual storytelling.

## Elevation & Depth

This system rejects traditional box shadows in favor of **Tonal Layers and Glassmorphism**.

1.  **Surfaces:** The base layer is the deepest black. Secondary layers (like the Navigation Bar) use a `neutral-950/80` background with a `backdrop-blur-md` and a 1px bottom border.
2.  **Borders:** Depth is primarily defined by 1px solid borders (`#262626`). These act as "ghost borders" that structure the layout without adding visual weight.
3.  **Accent Glows:** Depth is occasionally supplemented by low-opacity radial gradients (e.g., `primary-container/10`) to highlight interactive areas or visual containers.
4.  **Floating Elements:** Special utility cards use a slightly higher tonal contrast and a delicate border to appear "above" the main content stack.

## Shapes

The shape language is consistently **Rounded**, using a geometric logic to soften the intensity of the dark theme.

- **Standard Buttons & Cards:** 0.5rem (rounded-xl) is the default to provide a modern, accessible feel.
- **Interactive Tags/Badges:** Full rounding (pill-shaped) is used for labels to distinguish them from actionable buttons.
- **Media Containers:** Images and visual blocks follow the card rounding (0.75rem to 1rem) to maintain a cohesive framing strategy.

## Components

### Buttons
- **Primary:** Solid `#F86D53` with black text. Bold weight. Hover state: 90% opacity.
- **Secondary/Outline:** Transparent background with `#58413D` border. Transitions to `on-surface` border on hover.
- **Ghost:** Text-only with neutral-400 coloring, transitioning to white on hover with a slight scale effect (`active:scale-95`).

### Cards & Containers
- Containers must have a 1px border (`neutral-800`). 
- Media within cards should use a grayscale filter by default, transitioning to full color on group hover to emphasize the "discovery" of the leader within.

### Navigation
- Top-fixed, blur-enabled bar. 16px height. Links are `neutral-400` with a 200ms transition to white.

### Badges
- Small, uppercase, pill-shaped tags. Used for category labels. Background should be a 5% opacity version of the accent color with a 20% opacity border of the same hue.

### Inputs
- Should follow the outline button style: subtle borders, `Inter` medium text, and minimal internal padding.