"""Remove the baked-in white/checkerboard background from character PNGs.

Flood-fills from the image borders, clearing only background pixels that
are connected to the edge, so white areas inside the character (shirt,
shoes) are preserved. Also downscales to MAX_SIZE for web delivery.

Usage: python scripts/remove-bg.py
Originals are backed up to character-originals/ (gitignored) first.
"""

from collections import deque
from pathlib import Path
import shutil

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "public" / "character"
BACKUP_DIR = ROOT / "character-originals"
MAX_SIZE = 800
# Background is white or light checkerboard gray; anything this bright
# and unsaturated counts as background when reachable from the border.
BRIGHTNESS_MIN = 225
CHANNEL_SPREAD_MAX = 14


def is_background(pixel):
    r, g, b = pixel[0], pixel[1], pixel[2]
    return (
        min(r, g, b) >= BRIGHTNESS_MIN
        and max(r, g, b) - min(r, g, b) <= CHANNEL_SPREAD_MAX
    )


def process(path: Path):
    img = Image.open(path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    visited = bytearray(width * height)
    queue = deque()
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        if x < 0 or y < 0 or x >= width or y >= height:
            continue
        idx = y * width + x
        if visited[idx]:
            continue
        visited[idx] = 1
        if not is_background(pixels[x, y]):
            continue
        pixels[x, y] = (0, 0, 0, 0)
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))

    # Feather: soften alpha on pixels adjacent to cleared background to
    # avoid a hard white fringe.
    cleared = {
        (x, y)
        for y in range(height)
        for x in range(width)
        if pixels[x, y][3] == 0
    }
    for x, y in list(cleared):
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in cleared:
                r, g, b, a = pixels[nx, ny]
                if a == 255 and is_background((r, g, b)):
                    pixels[nx, ny] = (r, g, b, 128)

    img.thumbnail((MAX_SIZE, MAX_SIZE), Image.LANCZOS)
    img.save(path, optimize=True)
    print(f"{path.name}: done, {path.stat().st_size // 1024}KB")


def main():
    BACKUP_DIR.mkdir(exist_ok=True)
    for path in sorted(SRC_DIR.glob("vinay*.png")):
        backup = BACKUP_DIR / path.name
        if not backup.exists():
            shutil.copy2(path, backup)
        process(path)


if __name__ == "__main__":
    main()
