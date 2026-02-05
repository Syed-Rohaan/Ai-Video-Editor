from pydantic import BaseModel
from enum import Enum


class TextPosition(str, Enum):
    top = "top"
    center = "center"
    bottom = "bottom"


class Template(BaseModel):
    niche: str
    name: str
    description: str
    cut_duration: float
    text: str
    text_position: TextPosition

