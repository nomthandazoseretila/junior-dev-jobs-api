# Junior Dev Jobs API

Junior Dev Jobs API is a Node.js and Express backend project
that provides sample junior and graduate software development
job data through a REST-style API.

The project was created as part of the TechCareers Backend
Essentials one person project.

## Developers

### Nomthandazo Seretila
Backend Developer

GitHub:
https://github.com/nomthandazoseretila



## Tech Stack

- Node.js
- Express.js
- JavaScript
- Nodemon
- Git
- GitHub

## Installation

Clone the repository:

git clone YOUR-REPOSITORY-URL

Enter the project:

cd junior-dev-jobs-api

Install dependencies:

npm install

Start the development server:

npm run dev

Open:

http://localhost:5000

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | / | API documentation |
| GET | /api/about | Project information |
| GET | /api/jobs | Get all jobs |
| GET | /api/jobs/random | Get a random job |
| GET | /api/jobs/:id | Get a job by ID |
| GET | /api/jobs/city/:city | Filter jobs by city |

## Example

GET /api/jobs/2

Example response:

{
    "id": 2,
    "title": "Junior Backend Developer",
    "company": "ByteWorks",
    "city": "Cape Town",
    "salary": 28000,
    "skills": [
        "JavaScript",
        "Node.js",
        "Express"
    ],
    "remote": true
}

## What We Learned

- How to create API routes using Express.
- How to store API data in a separate JavaScript module.
- How to use find() and filter() to retrieve data.
- How to use route parameters.
- How to return HTTP 404 responses.
- How to collaborate using Git and GitHub.

## What We Would Add Next

- POST requests for adding jobs.
- A real database such as MongoDB.
- Job search and sorting.
- Authentication for employers.
- A frontend application consuming the API.

## Version

1.0.0