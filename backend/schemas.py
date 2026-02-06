from pydantic import BaseModel
from typing import Optional

class TemplateCreate(BaseModel):
    niche: str
    name: str
    description: str
    cut_duration: float
    text: str
    text_position: str


class ProjectCreate(BaseModel):
    template_id: str
    user_id: str
    video_path: Optional[str] = None
