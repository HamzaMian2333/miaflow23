# MiaFlow Landing Page with Functional Waitlist

This is a Next.js + Vercel landing page for MiaFlow. The waitlist form saves emails into a Supabase `waitlist` table.

## Files

- `app/page.tsx` — landing page UI
- `app/api/waitlist/route.ts` — API route that saves waitlist emails
- `supabase.sql` — SQL table setup for Supabase
- `.env.example` — environment variable template

## Setup

1. Create a Supabase project.
2. In Supabase, go to SQL Editor and run the SQL from `supabase.sql`.
3. Copy `.env.example` to `.env.local`.
4. Fill in:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

5. Install dependencies:

```bash
npm install
```

6. Run locally:

```bash
npm run dev
```

7. Test the waitlist form.

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the GitHub repo into Vercel.
3. Add the same environment variables in Vercel:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy.

## View waitlist signups

Open Supabase → Table Editor → `waitlist`.

## Important Safety Note

Never put `SUPABASE_SERVICE_ROLE_KEY` in frontend/client code. It is only used inside the server-side API route.
