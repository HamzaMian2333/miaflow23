create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'miaflow_landing_page',
  created_at timestamp with time zone not null default now()
);

alter table public.waitlist enable row level security;

-- No public insert policy is needed because the Next.js API route uses the
-- Supabase service role key on the server. Do not expose the service role key
-- in client-side code.
