'use client';

import { useState } from 'react';

export default function AddJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    link: '',
    status: 'Applied',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Job added!');
      setFormData({ title: '', company: '', link: '', status: 'Applied' });
    } else {
      alert('Failed to add job');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h1>Add Job Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Application Link"
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        >
          <option>Applied</option>
          <option>Interviewing</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>
        <button type="submit" style={{ padding: '10px', width: '100%' }}>
          Add Job
        </button>
      </form>
    </div>
  );
}
