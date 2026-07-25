#!/usr/bin/env python3
"""Generate placeholder avatar + OG image for the portfolio.

Run with: npm run gen:assets  (requires Pillow)
Replace static/avatar.png and static/og-image.png with your real assets later.
"""
import os

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    raise SystemExit("Pillow is required: pip install pillow")

STATIC = os.path.join(os.path.dirname(__file__), "..", "static")
os.makedirs(STATIC, exist_ok=True)

BG = (10, 10, 15)
ACCENT = (138, 155, 255)
INK = (195, 200, 212)


def _font(size: int):
    candidates = [
        "C:/Windows/Fonts/consolab.ttf",   # Consolas Bold (Windows)
        "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def make_avatar():
    size = 256
    img = Image.new("RGB", (size, size), BG)
    d = ImageDraw.Draw(img)
    d.ellipse([0, 0, size, size], outline=ACCENT, width=4)
    # simple monogram circle
    d.ellipse([48, 48, size - 48, size - 48], fill=(18, 18, 25))
    f = _font(96)
    d.text((size / 2, size / 2), "YN", font=f, fill=INK, anchor="mm")
    out = os.path.join(STATIC, "avatar.png")
    img.save(out)
    print("wrote", out)


def make_og():
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), BG)
    d = ImageDraw.Draw(img)
    d.line([(0, 0), (w, 0)], fill=ACCENT, width=0)  # placeholder
    # accent rule
    d.rectangle([80, 250, 140, 380], fill=ACCENT)
    f1 = _font(72)
    d.text((170, 250), "Your Name", font=f1, fill=INK)
    f2 = _font(34)
    d.text((170, 340), "Network Systems Engineering Student", font=f2, fill=ACCENT)
    f3 = _font(26)
    d.text((80, 430), "Portfolio — automation, observability, developer tooling", font=f3, fill=(138, 144, 160))
    out = os.path.join(STATIC, "og-image.png")
    img.save(out)
    print("wrote", out)


if __name__ == "__main__":
    make_avatar()
    make_og()
