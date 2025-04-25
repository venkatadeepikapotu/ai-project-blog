import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./index.css";

const projects = [
  {
    id: "semantic-search",
    title: "🔍 AI-Powered Semantic Search & Product Ranking System for E-commerce",
    date: "April 16, 2025",
    description: `In a world of millions of product listings, relevance is everything. Traditional keyword-based search often fails to deliver the kind of accuracy and context users expect. That’s where semantic search comes into play. I developed a system that goes beyond keywords and retrieves results based on meaning—exactly how humans think.

🔧 What I Built
This project is an AI-driven search and ranking system that interprets the semantic meaning of user queries to retrieve and rank the most relevant products in an e-commerce catalog.

How It Works
User inputs a natural language query.
BERT-based embedding model converts query and product data to dense vectors.
PineCone performs a vector similarity search to retrieve the top matches.
A custom ranking algorithm considers similarity, popularity, and relevance to sort final results.

🛠️ Technologies Used
Python, FastAPI (Backend APIs)
BERT / Sentence Transformers (Semantic Embeddings)
FAISS (Vector Similarity Search)
HTML/CSS/JavaScript (Frontend)

Results
Reduced irrelevant results and enhanced UX.
Scalable to support thousands of products.`,
    tags: ["AI", "Search", "NLP", "BERT", "FastAPI"]
  },
  {
    id: "rag-gpt",
    title: "🤖 RAG-Based Emerald GPT – Answering Questions from Your Documents Using AI",
    date: "April 16, 2025",
    description: `Imagine asking questions to your internal company documents and getting accurate, human-like responses instantly—without having to read through dozens of PDFs. That’s exactly what I built with Emerald GPT, a RAG (Retrieval-Augmented Generation) based AI assistant.

🔧 Project Overview
This application uses vector embeddings + LLMs to retrieve the most relevant parts of a dataset and generate grounded responses using OpenAI’s GPT model. It’s tailored for organizations looking to enable conversational access to private, document-heavy datasets.

How It Works
PDFs are uploaded and parsed into chunks.
Chunks are embedded using Sentence Transformers.
Stored in Pinecone vector database.
User queries are transformed into vectors.
Pinecone retrieves the most relevant chunks.
The top-k chunks are passed to GPT with the query.
The LLM returns a context-aware, accurate response.

🛠️ Tech Stack
Python, FastAPI
OpenAI GPT-4 / HuggingFace Transformers
Sentence Transformers for Embeddings
Pinecone for vector database
PyMuPDF for PDF parsing
Optional Streamlit / HTML UI

📈 Use Cases
Legal and compliance document search
HR policy Q&A bots
Internal company knowledge retrieval
Research paper assistants`,
    tags: ["GPT", "Pinecone", "RAG", "Embeddings", "LLM"]
  }
];

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo"> AI Project Blog</h1>
        <Link to="/" className="home-link">Home</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © 2025 Deepika's AI Blog. All rights reserved.
    </footer>
  );
}

function Home() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <h2 className="section-title">Latest AI Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-card">
              <div className="card-body">
                <p className="project-date">{project.date}</p>
                <h3 className="project-title">{project.title}</h3>
                <div className="tag-container">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="not-found">Project not found</p>;

  return (
    <div className="page">
      <Header />
      <main className="main">
        <h1 className="project-heading">{project.title}</h1>
        <p className="project-date">{project.date}</p>
        <p className="project-description" style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
        <div className="tag-container">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}
