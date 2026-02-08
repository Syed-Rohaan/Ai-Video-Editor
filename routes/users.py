from fastapi import APIRouter

router = APIRouter(prefix="/users", tags=["Users"])

users_db = []

@router.get("/")
def get_users():
    return {"users": users_db}

@router.post("/")
def create_user(name: str):
    users_db.append(name)
    return {"message": "User added", "users": users_db}