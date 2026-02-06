import os
import subprocess
from uuid import uuid4

OUTPUT_DIR = "outputs"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def process_video(
    input_video: str,
    cut_duration: float,
    text: str,
    text_position: str
):
    output_path = f"{OUTPUT_DIR}/{uuid4()}.mp4"

    # Text position mapping
    y_pos = {
        "top": "10",
        "center": "(h-text_h)/2",
        "bottom": "h-text_h-10"
    }.get(text_position, "10")

    cmd = [
        "ffmpeg",
        "-i", input_video,
        "-t", str(cut_duration),
        "-vf", f"drawtext=text='{text}':x=(w-text_w)/2:y={y_pos}:fontsize=32:fontcolor=white",
        "-y",
        output_path
    ]

    subprocess.run(cmd, check=True)
    return output_path
