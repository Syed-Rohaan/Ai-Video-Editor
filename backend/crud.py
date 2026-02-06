from bson import ObjectId
from database import templates_collection, projects_collection

# ---------------- Templates ----------------

def create_template(data: dict):
    result = templates_collection.insert_one(data)
    return str(result.inserted_id)


def get_all_templates():
    templates = []
    for t in templates_collection.find():
        t["_id"] = str(t["_id"])
        templates.append(t)
    return templates


# ---------------- Projects ----------------

def create_project(data: dict):
    result = projects_collection.insert_one(data)
    return str(result.inserted_id)


def get_user_projects(user_id: str):
    projects = []
    for p in projects_collection.find({"user_id": user_id}):
        p["_id"] = str(p["_id"])
        projects.append(p)
    return projects
