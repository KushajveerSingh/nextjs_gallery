# nextjs_gallery (WIP)

pnpm dev - for nextjs dev server
git add -p - to preview changes before commit
pnpm run db:run - to push database changes to vercel
pnpm run db:studio - to open drizzle studio

corepack enable pnpm
pnpm create t3-app@latest

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

ignore typescript build errors, eslint build errors in next.config.js to make vercel build faster
push repo to github
add the project to vercel

goto uploadthing.com and create a project, and upload dummy image files to it

add storage to vercel by going to storage -> create a database -> postgres
(make sure vercel project deploy region (settings -> Functions) and postgres deploy region are the same)
copy .env.local from storage to your .env file
pnpm install @vercel/postgres
setup src/server/db/index.js for the drizzle integration

## TODO

-   [x] Make it deploy (vercel)
-   [x] Scaffold basic ui with mock data
-   [x] Tidy up build process
-   [x] Set up database (vercel postgres)
-   [ ] Attach database to ui
-   [ ] Add authentication (w/ clerk)
-   [ ] Add image upload
-   [ ] Error management (w/ Sentry)
-   [ ] Routing/image page (parallel route)
-   [ ] Delete button (w/ Server actions
-   [ ] Analytics (posthog)
-   [ ] Ratelimiting (upstash)
