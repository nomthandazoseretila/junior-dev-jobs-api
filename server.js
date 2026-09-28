// Import Express
const express = require("express");

// Import our jobs data
const jobs = require("./data");

// Create the Express application
const app = express();

// Set the port
const PORT = process.env.PORT || 5000;


// ======================================================
// HOME / DOCUMENTATION ROUTE
// ======================================================

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Junior Dev Jobs API</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f4f7f6;
                    color: #222;
                    margin: 0;
                    padding: 40px;
                }

                .container {
                    max-width: 900px;
                    margin: auto;
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                }

                h1 {
                    color: #0d5c4d;
                }

                h2 {
                    margin-top: 35px;
                }

                .badge {
                    display: inline-block;
                    background: #0d5c4d;
                    color: white;
                    padding: 6px 12px;
                    border-radius: 20px;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }

                th,
                td {
                    padding: 14px;
                    border-bottom: 1px solid #ddd;
                    text-align: left;
                }

                th {
                    background: #0d5c4d;
                    color: white;
                }

                a {
                    color: #0d5c4d;
                    font-weight: bold;
                }

                footer {
                    margin-top: 40px;
                    border-top: 1px solid #ddd;
                    padding-top: 20px;
                }
            </style>
        </head>

        <body>

            <div class="container">

                <span class="badge">Version 1.0.0</span>

                <h1>Junior Dev Jobs API</h1>

                <p>
                    A beginner-friendly REST API containing junior and
                    graduate software development job data in South Africa.
                </p>

                <h2>Developers</h2>

                <p>
                    Nomthandazo Seretila 
                </p>

                <h2>API Endpoints</h2>

                <table>

                    <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Description</th>
                    </tr>

                    <tr>
                        <td>GET</td>
                        <td><a href="/api/about">/api/about</a></td>
                        <td>Project information</td>
                    </tr>

                    <tr>
                        <td>GET</td>
                        <td><a href="/api/jobs">/api/jobs</a></td>
                        <td>View all jobs</td>
                    </tr>

                    <tr>
                        <td>GET</td>
                        <td>
                            <a href="/api/jobs/random">
                                /api/jobs/random
                            </a>
                        </td>
                        <td>Get a random job</td>
                    </tr>

                    <tr>
                        <td>GET</td>
                        <td>
                            <a href="/api/jobs/3">
                                /api/jobs/3
                            </a>
                        </td>
                        <td>Find a job by ID</td>
                    </tr>

                    <tr>
                        <td>GET</td>
                        <td>
                            <a href="/api/jobs/city/johannesburg">
                                /api/jobs/city/johannesburg
                            </a>
                        </td>
                        <td>Filter jobs by city</td>
                    </tr>

                </table>

                <footer>
                    <p>
                        Built with Node.js and Express.
                    </p>

                    <p>
                        Developed by Nomthandazo Seretila © 2026
                    </p>
                </footer>

            </div>

        </body>

        </html>
    `);
});


// ======================================================
// ABOUT ROUTE
// ======================================================

app.get("/api/about", (req, res) => {

    res.json({
        project: "Junior Dev Jobs API",

        description:
            "An API containing junior available developer job data.",

        version: "1.0.0",

        developers: [
            {
                name: "Nomthandazo Seretila",
                role: "Backend Developer",
                github: "https://github.com/nomthandazoseretila"
            }
        
        ]
    });

});


// ======================================================
// GET ALL JOBS
// ======================================================

app.get("/api/jobs", (req, res) => {

    res.json(jobs);

});


// ======================================================
// GET RANDOM JOB
// IMPORTANT: THIS MUST BE ABOVE /api/jobs/:id
// ======================================================

app.get("/api/jobs/random", (req, res) => {

    const randomIndex =
        Math.floor(Math.random() * jobs.length);

    const randomJob = jobs[randomIndex];

    res.json(randomJob);

});


// ======================================================
// FILTER JOBS BY CITY
// ======================================================

app.get("/api/jobs/city/:city", (req, res) => {

    const requestedCity =
        req.params.city.toLowerCase();

    const results = jobs.filter((job) => {
        return job.city.toLowerCase() === requestedCity;
    });


    if (results.length === 0) {

        return res.status(404).json({
            error:
                `No jobs found for city '${req.params.city}'`
        });

    }


    res.json(results);

});


// ======================================================
// GET ONE JOB BY ID
// ======================================================

app.get("/api/jobs/:id", (req, res) => {

    // URL parameters arrive as strings,
    // so convert the ID to a number.

    const id = Number(req.params.id);


    const job = jobs.find((job) => {
        return job.id === id;
    });


    if (!job) {

        return res.status(404).json({
            error:
                `Job with id ${req.params.id} not found`
        });

    }


    res.json(job);

});


// ======================================================
// CATCH-ALL 404
// THIS MUST REMAIN AT THE BOTTOM
// ======================================================

app.use((req, res) => {

    res.status(404).json({
        error: "Route not found",
        hint: "Visit / to see all endpoints"
    });

});


// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}/`
    );

});