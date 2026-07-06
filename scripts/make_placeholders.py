from PIL import Image, ImageDraw
from pathlib import Path
out = Path(__file__).resolve().parents[1] / "public" / "work"
out.mkdir(parents=True, exist_ok=True)
names = [f"tile-{i:02d}" for i in range(1, 17)] + [
    f"{p}-{n}" for p in ("arafa", "instapay", "sparx") for n in (1, 2, 3)]
for i, name in enumerate(names):
    img = Image.new("RGB", (840, 540), (17, 19, 17))
    d = ImageDraw.Draw(img)
    d.text((30, 30), name.upper(), fill=(200, 255, 0))
    img.save(out / f"{name}.jpg", quality=80)
print(f"wrote {len(names)} placeholders to {out}")
