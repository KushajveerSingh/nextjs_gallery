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

pnpm add @clerk/nextjs@beta (to get v5)
create src/middleware.ts
goto clerk website, create application (choose email, username, google), copy the env variables
add these env variables to vercel as well

goto uploadthing, copy api keys to env file and to vercel
pnpm add uploadthing @uploadthing/react
create src/app/api/uploadthing files

currently, all your queries are spread throughout the codebase, which can be a problem as you want experts to write those functions, and handle security. So create src/server/queries.ts and put all your queries in that. taint is a feature of react, where it gurantees that the data is not sent to the client. Like when you make a database call, and want to gurantee that the password is not sent to the client, use taint.
pnpm add server-only

for next/image add the hostname to next.config.js. This ensures that client cannot modify the code and use images from other sources, and we waste our resources optimizing them as well.

add sentry support. sentry currently does not support turbo, so remove --turbo from the dev command.
create account on sentry
create project -> next.js, I'll create my own alerts later
npx @sentry/wizard@latest -i nextjs

    - sentry saas (sentry.io)
    - Yes - route sentry requests in the browser through nextjs to avoid ad blockers
    - Yes - Do you want to create an example page to test your sentry setup
    - Yes - Are you using a CI/CD tool to build and deploy your application
    - copy the auth token to .env and vercel

npx shadcn-ui@latest init

Tip: For quickly testing out certain component things, you can move the logic to a separate component, and add it to window. Then you can call it from console as window.makeToast().

    ```tsx
    function makeUploadToast() {
        return toast(
            <div>
            <LoadingSpinnerSVG /> Uploading...
            </div>,
            { duration: 100000, id: 'upload-begin' },
        );
    }
    window.makeToast = makeUploadToast;
    ```

goto posthog and create an account
when creating a new account/organization, it would create a 'Default project'. Delete that from the settings.
Then create a new project.
Goto Product analytics -> Next.js
pnpm add posthog-js
copy env variables to .env and vercel
create src/app/\_analytics/providers.tsx
add it to app/src/layout.tsx, and then play around the site, and verify in posthog if the evenets are registerd. (I had to disable ad blocker for this to work).
in the posthog page, click skip for now on the payment page, and then finish (on invite teammates page)
Follow framework guide at posthog to setup analytics even with ad-blocker https://posthog.com/docs/libraries/next-js

Add analytics to delete button
pnpm add posthog-node
create src/server/analytics.ts

use upstash for rate limiting
create account -> reddis -> create database

    - select regional
    - enable eviction
    - Choose Node under connect to your database and then under REST API choose .env and copy these to vercel

pnpm add @upstash/ratelimit @upstash/redis
create src/server/ratelimit.ts

in clerk, select your user and add private data 'can-upload': true

## TODO

-   [x] Make it deploy (vercel)
-   [x] Scaffold basic ui with mock data
-   [x] Tidy up build process
-   [x] Set up database (vercel postgres)
-   [x] Attach database to ui
-   [x] Add authentication (w/ clerk)
-   [x] Add image upload
-   [x] 'taint' (server-only)
-   [x] Use Next/Image
-   [x] Error management (w/ Sentry)
-   [x] Routing/image page (parallel route)
-   [x] Add shadcn toast
-   [x] Analytics (posthog)
-   [x] Delete button (w/ Server actions)
-   [x] Ratelimiting (upstash)
-   [x] Restrict users that can upload
