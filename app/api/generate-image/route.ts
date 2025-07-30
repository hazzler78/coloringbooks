import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured.' }, { status: 500 });
    }

    const response = await openai.images.generate({
      prompt: `${prompt}, high quality line art, black and white, coloring book page, clean simple lines, no shading, no background, white background, detailed outlines, suitable for children to color, minimalist design, clear boundaries`,
      size: '1024x1024',
      response_format: 'url',
      n: 1,
    });
    
    if (!response.data || response.data.length === 0) {
      return NextResponse.json({ error: 'No image generated.' }, { status: 500 });
    }
    
    return NextResponse.json({ imageUrl: response.data[0].url });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: 'Failed to generate image.' }, { status: 500 });
  }
}