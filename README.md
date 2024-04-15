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

open a typescript file, and type Ctrl-Shift-P and select 'TypeScript: Select TypeScript Version' and select the one from your workspace, and this will provide all the nextjs bindings as well. (or add "typescript.tsdk": "node_modules/typescript/lib" to vscode settings.json)

ignore typescript build errors, eslint build errors in next.config.js to make vercel build faster
push repo to github
add the project to vercel

goto uploadthing.com and create a project, and upload dummy image files to it

add storage to vercel by going to storage -> create a database -> postgres
(make sure vercel project deploy region (settings -> Functions) and postgres deploy region are the same)
copy .env.local from storage to your .env file
pnpm install @vercel/postgres
setup src/server/db/index.js for the drizzle integration

Problem: When initally testing the database on the deployed url, you will notice that making changes to database are not reflected in the deployment. This is becauase vercel caches the page, and you need to tell vercel that the page is dynamic by adding `export const dynamic = 'force-dynamic';`.

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
