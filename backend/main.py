from fastapi import FastAPI
from config import APP_NAME, VERSION
from routes import templates_router, projects_router

app = FastAPI(title=APP_NAME, version=VERSION)

app.include_router(templates_router)
app.include_router(projects_router)


@app.get("/")
def root():
    return {"status": "Backend running successfully"}
