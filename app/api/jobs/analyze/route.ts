import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { description } = await req.json();

    if (!description) {
        return NextResponse.json({ error: 'Missing description' }, { status: 400 });
    }

    const prompt = `
You are a helpful AI resume assistant.
Analyze the following job description and return:
1. A short summary (2–3 sentences)
2. A bullet list of 3 key skills a candidate should highlight in their resume.

Job description:
${description}

Respond in this JSON format:
{
  "summary": "...",
  "skills": ["...", "...", "..."]
}
`;

    try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
            }),
        });

        const data = await res.json();
        const content = data.choices?.[0]?.message?.content;

        const result = JSON.parse(content);
        return NextResponse.json(result);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch AI response' }, { status: 500 });
    }
}
