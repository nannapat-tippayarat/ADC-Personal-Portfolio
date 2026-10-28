from fastapi import FastAPI
from pydantic import BaseModel, Field
from fastapi import HTTPException
app = FastAPI()

class Project(BaseModel):
    id: int
    title: str = Field(min_length=1)
    category: str
    description: str
    url: str

projects = [
    Project(
        id=1,
        title="Waddle We Go?",
        category="Data Visualization",
        description="An interactive emperor penguin tracking visualization.",
        url="https://devpost.com/software/penguin-wrapped"
    ),
    Project(
        id=2,
        title="Diabuddy",
        category="Health Technology",
        description="A gamified health diary application for children.",
        url="https://devpost.com/software/diabuddy-oqa67v"
    )
]

class ContactSubmission(BaseModel):
    name: str = Field(min_length=1)
    email: str = Field(min_length=3)
    message: str = Field(min_length=1)

messages = []

@app.get("/api/projects")
def get_projects():
    return projects

@app.get("/api/projects/{project_id}")
def get_project(project_id: int):
    for project in projects:
        if project.id == project_id:
            return project

    raise HTTPException(
        status_code=404,
        detail="Project not found"
    )

@app.post("/api/messages", status_code=201)
def submit_message(submission: ContactSubmission):
    messages.append(submission)

    return {
        "message": "Message received!",
        "total_messages": len(messages)
    }

