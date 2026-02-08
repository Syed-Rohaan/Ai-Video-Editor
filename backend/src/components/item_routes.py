from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_items():
    return {"items": ["Item A", "Item B", "Item C"]}

@router.get("/{item_id}")
def get_item(item_id: int):
    return {"item_id": item_id, "name": f"Item {item_id}"}