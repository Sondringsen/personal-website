# Kvasir: Automating Data Science with Multi-Agent AI

Most data science projects follow roughly the same steps: ingest raw data, clean it, explore it, build pipelines, train models, evaluate results. Each step demands context from the last. This is a process that is iterative — you will step back many times to get it right. Existing coding agents don't handle this well because the software engineering workflow more closely follows a straight line with no loops. More importantly, they lack a good representation of the data and the context of a data science project, which differs fundamentally from a software engineering one. You also need to be able to quickly iterate and test new hypotheses. We built [Kvasir](https://kvasirai.com/) to solve this problem. Kvasir uses a multi-agent AI system that maintains structured knowledge of your project as it works. New users get $20 in free credit on signup.

Data science has historically required specialised skills and significant time investment, putting advanced analysis out of reach for smaller teams. Kvasir changes that, small businesses and teams can now run complex data analysis, build predictive models, and extract actionable insights without dedicated data science expertise. The agents handle the technical heavy lifting.

## The Entity Graph

The central design decision in Kvasir is the **entity graph**. This is a five-node ontology that models a data science project as a directed graph with the following nodes:

- `Data Source`
- `Dataset`
- `Pipeline`
- `Model`
- `Analysis`

Each node stores structured metadata (schema, description, file paths, metrics) and edges encode data flow between them.

## The Agent Architecture

The **Kvasir orchestrator** sits at the top, reads the entity graph, and dispatches subagents based on what the user asks for:

- **Analysis** — runs exploratory data analysis via code execution in a sandboxed environment, produces structured insights, never writes production code
- **SWE** — builds pipelines and modules, handles data transformation and model training, has full code navigation and execution tools
- **Chart** — generates ECharts visualizations, produces reusable chart functions per entity group
- **Extraction** — the graph maintenance agent; runs async after each agent completes to parse outputs and update node state

When an agent completes a task, the Extraction agent parses its output and updates the graph asynchronously. Every subsequent agent reads the entity graph before acting: it tells the Analysis agent what raw data is available, tells the SWE agent which pipelines already exist and what they produce, and tells the orchestrator the overall state of the project. This means agents never start from scratch. They always have accurate, up-to-date context about what has been built and what the data looks like.

## Tech Stack

- **Backend**: Python, FastAPI, PostgreSQL with pgvector (vector search on entity embeddings), Redis, Taskiq (async agent dispatch)
- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS, SSE for streaming agent output
- **Agent sandboxes**: Docker bind-mount (local mode) or Modal (remote mode) — controlled by a single `SANDBOX_TYPE` env var
- **Infrastructure**: Docker Compose, Nginx, Logfire for tracing

## VS Code Extension

Kvasir is also available as a VS Code extension for technical users who want a local-first workflow. In this mode the API, Taskiq worker, and Redis all run on the host machine; the agent sandbox is a Docker container with `CODEBASE_HOST_DIR/{project_id}` bind-mounted to `/app`. Files the agent writes land directly on your filesystem, i.e. no sync step, no copy. VS Code's Source Control panel picks them up immediately, so you can review and commit agent-written code just like your own. The extension also ships an interactive entity graph view rendered with D3.js and a full chat interface backed by the same SSE stream as the web app.
