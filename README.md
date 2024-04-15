# nextjs_gallery (WIP)

pnpm dev - for nextjs dev server
git add -p - to preview changes before commit

corepack enable pnpm
pnpm create t3-app@latest

push repo to github
add the project to vercel
goto uploadthing.com and create a project, and upload dummy image files to it

-   nextjs_gallery
-   TypeScript
-   Yes for Tailwind
-   No for tRPC
-   None for authentication provider
-   Drizzle ORM
-   Yes for Next.js App Router
-   PostgreSQL
-   Yes to initialize git repo
-   Yes to pnpm install
-   ~/ as the import alias

## TODO

-   [x] Make it deploy (vercel)
-   [x] Scaffold basic ui with mock data
-   [ ] Tidy up build process
-   [ ] Set up database (vercel postgres)
-   [ ] Attach database to ui
-   [ ] Add authentication (w/ clerk)
-   [ ] Add image upload
-   [ ] Error management (w/ Sentry)
-   [ ] Routing/image page (parallel route)
-   [ ] Delete button (w/ Server actions
-   [ ] Analytics (posthog)
-   [ ] Ratelimiting (upstash)
