"""Generate compact website previews; keep original downloads unchanged. Requires Pillow."""
from pathlib import Path
from PIL import Image, ImageOps
import json

root = Path(__file__).resolve().parents[1] / "public"
output = root / "optimized"
output.mkdir(exist_ok=True)
files = [(root / "aa-logo.png", 96), (root / "ProfilePic.jpg", 600)]
files += [(root / name, 400) for name in (
    "GroupSaintPat.jpg", "TreeHug.jpg", "CaskeSmash.jpg", "TobermoryLakeside.jpg", "anufish.jpg", "GroupBirthday.jpg"
)]
files += [(path, 1100) for path in (root / "projects").iterdir() if path.suffix.lower() in (".png", ".jpg")]
report = []
for path, size in files:
    with Image.open(path) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        image.thumbnail((size, size), Image.Resampling.LANCZOS)
        target = output / (path.stem + ".webp")
        image.save(target, "WEBP", quality=85, method=6)
        report.append({"file": path.name, "before": path.stat().st_size, "after": target.stat().st_size})
with Image.open(root / "aa-logo.png") as icon:
    icon.thumbnail((64, 64), Image.Resampling.LANCZOS)
    icon.save(output / "aa-icon.png", optimize=True)
print(json.dumps(report, indent=2))
