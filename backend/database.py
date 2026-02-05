from pymongo import MongoClient

# MongoDB connection URL
MONGO_URL = "mongodb://localhost:27017"

# Create MongoDB client
client = MongoClient(MONGO_URL)

# Select database
db = client["video_editor_db"]

# Collections
templates_collection = db["templates"]
projects_collection = db["projects"]




