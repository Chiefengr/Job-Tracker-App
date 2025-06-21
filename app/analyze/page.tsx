'use client';

import { useState } from 'react';

export default function AnalyzePage() {
    const [description, setDescription] = useState('');
    const [result, setResult] = useState<null | { summary: string; skills: string[] }>(null);
    const [loading, setLoading] = useState(false);

    // Toggle this to switch between manual and real API
    const USE_MANUAL = true; // set to false to use OpenAI API

    const handleAnalyze = async () => {
        if (!description.trim()) return;
        setLoading(true);

        if (USE_MANUAL) {
            // ✅ Manual mock result
            setTimeout(() => {
                setResult({
                    summary:
                        'This role involves frontend development using React and requires collaboration with backend teams.',
                    skills: ['React.js', 'REST APIs', 'Team collaboration'],
                });
                setLoading(false);
            }, 1000);
        } else {
            // 🔁 Real API call to your backend
            try {
                const res = await fetch('/api/analyze', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ description }),
                });

                const data = await res.json();
                setResult(data);
            } catch (err) {
                console.error('Error fetching from API:', err);
                alert('Failed to analyze job description.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div style={{ maxWidth: 700, margin: '2rem auto' }}>
            <h1>🤖 Job Description Analyzer</h1>
            <textarea
                placeholder="Paste job description here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={10}
                style={{
                    width: '100%',
                    marginBottom: '1rem',
                    padding: '1rem',
                    fontFamily: 'monospace',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                }}
            />
            <button
                onClick={handleAnalyze}
                disabled={loading}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                {loading ? 'Analyzing...' : 'Analyze'}
            </button>

            {result && (
                <div style={{ marginTop: '2rem' }}>
                    <h2>📝 Summary</h2>
                    <p>{result.summary}</p>

                    <h2>📌 Top 3 Resume Skills</h2>
                    <ul>
                        {result.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
