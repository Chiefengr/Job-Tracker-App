import { NextRequest, NextResponse } from 'next/server';

type Job = {
    id: string;
    title: string;
    company: string;
    link: string;
    status: string;
};

let jobs: Job[] = [];

export async function GET() {
    return NextResponse.json(jobs);
}

export async function POST(req: Request) {
    const newJob = await req.json();
    const jobWithId = { ...newJob, id: Date.now().toString() };
    jobs.push(jobWithId);
    return NextResponse.json(jobWithId, { status: 201 });
}

// DELETE handler for /api/jobs/[id]
export async function DELETE(req: NextRequest) {
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();

    jobs = jobs.filter((job) => job.id !== id);
    return NextResponse.json({ message: 'Deleted' });
}
