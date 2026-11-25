import type { APIRoute } from 'astro';
import { renderLlmsTxt } from '../data/llms';

export const GET: APIRoute = () =>
  new Response(renderLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
