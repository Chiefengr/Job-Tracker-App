'use client';

import { useEffect, useState } from 'react';

type Job = {
    id: string;
    title: string;
    company: string;
    link: string;
    status: string;
};

export default function DashboardPage() {
    const [jobs, setJobs] = useState<Job[]>([]);

    // Fetch jobs from backend
    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data);
    };

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm('Are you sure you want to delete this job?');
        if (!confirmed) return;

        const res = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
        } else {
            alert('Failed to delete job.');
        }
    };

    return (
        <div style={{ maxWidth: 800, margin: '2rem auto' }}>
            <h1>📋 Job Applications</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid #ccc' }}>Title</th>
                        <th style={{ borderBottom: '1px solid #ccc' }}>Company</th>
                        <th style={{ borderBottom: '1px solid #ccc' }}>Link</th>
                        <th style={{ borderBottom: '1px solid #ccc' }}>Status</th>
                        <th style={{ borderBottom: '1px solid #ccc' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id}>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td>
                                {job.link ? (
                                    <a href={job.link} target="_blank" rel="noopener noreferrer">
                                        View
                                    </a>
                                ) : (
                                    '—'
                                )}
                            </td>
                            <td>{job.status}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(job.id)}
                                    style={{
                                        background: 'red',
                                        color: 'white',
                                        border: 'none',
                                        padding: '5px 10px',
                                        marginRight: '10px',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Delete
                                </button>
                                <a href={`/edit-job/${job.id}`}>
                                    <button
                                        style={{
                                            background: 'blue',
                                            color: 'white',
                                            border: 'none',
                                            padding: '5px 10px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Edit
                                    </button>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
