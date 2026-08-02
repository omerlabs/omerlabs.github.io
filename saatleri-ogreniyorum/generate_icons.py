from PIL import Image, ImageDraw

def create_clock_icon(size, filename):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Outer background rounded rect
    margin = int(size * 0.05)
    rect = [margin, margin, size - margin, size - margin]
    draw.rounded_rectangle(rect, radius=int(size * 0.22), fill=(255, 159, 67, 255))

    # Clock outer rim
    center = (size / 2, size / 2)
    r_outer = int(size * 0.38)
    r_inner = int(size * 0.34)

    draw.ellipse([center[0] - r_outer, center[1] - r_outer, center[0] + r_outer, center[1] + r_outer], fill=(255, 234, 167, 255))
    draw.ellipse([center[0] - r_inner, center[1] - r_inner, center[0] + r_inner, center[1] + r_inner], fill=(255, 255, 255, 255))

    # Hour Ticks (4 main dots)
    dot_r = max(2, int(size * 0.03))
    tick_dist = int(size * 0.27)
    
    # 12 o'clock dot
    draw.ellipse([center[0] - dot_r, center[1] - tick_dist - dot_r, center[0] + dot_r, center[1] - tick_dist + dot_r], fill=(255, 118, 117, 255))
    # 3 o'clock dot
    draw.ellipse([center[0] + tick_dist - dot_r, center[1] - dot_r, center[0] + tick_dist + dot_r, center[1] + dot_r], fill=(116, 185, 255, 255))
    # 6 o'clock dot
    draw.ellipse([center[0] - dot_r, center[1] + tick_dist - dot_r, center[0] + dot_r, center[1] + tick_dist + dot_r], fill=(85, 230, 193, 255))
    # 9 o'clock dot
    draw.ellipse([center[0] - tick_dist - dot_r, center[1] - dot_r, center[0] - tick_dist + dot_r, center[1] + dot_r], fill=(248, 194, 145, 255))

    # Hands: Hour hand pointing up-ish, minute hand right-ish
    hour_hand_w = max(4, int(size * 0.04))
    min_hand_w = max(2, int(size * 0.025))

    # Hour hand (short, pink) to 10 o'clock
    draw.line([center[0], center[1], center[0] - int(size * 0.12), center[1] - int(size * 0.18)], fill=(232, 67, 147, 255), width=hour_hand_w)
    # Minute hand (long, blue) to 2 o'clock
    draw.line([center[0], center[1], center[0] + int(size * 0.22), center[1] - int(size * 0.12)], fill=(9, 132, 227, 255), width=min_hand_w)

    # Center pin
    pin_r = max(4, int(size * 0.04))
    draw.ellipse([center[0] - pin_r, center[1] - pin_r, center[0] + pin_r, center[1] + pin_r], fill=(253, 203, 110, 255))

    img.save(filename, "PNG")

create_clock_icon(192, "icon-192.png")
create_clock_icon(512, "icon-512.png")
print("Icons generated successfully!")
