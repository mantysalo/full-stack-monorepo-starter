# Full stack monorepo starter

Boilerplate for all your full stack TypeScript needs!

- React
- Koa
  - Bodyparser
  - Router
  - Pino
- Postgres
- Docker
- Nginx
- TypeScript
- Lerna
- Jest & Supertest
- ESLint
- Prettier

All configured and ready to go! Editor config for VSCode is included as well.

**Note: This setup has only been tested on OS X, but should also work on Linux distros. However, it won't work out of the box on Windows, due to the way environment variables are used in some package.json scripts.**

## Why?

I found myself repeating all the same steps when starting a new project so I decided to create a boilerplate project which has everything configured and ready to go. Less time spent on googling how to configure something, and more time spent on coding!

## How to use?

1. Clone this repository
2. Delete the .git folder
3. Run `git init`
4. Create an initial commit
5. Start coding!

```bash
git clone <repo_url> <your_desired_folder_name>
cd <your_desired_folder_name>
rm -r .git
git init
git add .
git commit -m "Initial commit"
```

## How to run

Make sure you're running Node 12 or later. You can check this with

```bash
node --version
```

Copy the `.env.example` inside `packages/backend` and rename it as `.env` and change the values if needed.

After that:

```bash
npm install
npm run bootstrap
npm start
```

and you're good to go!

### Postgres

To get started with postgres, refer to the [backend README](packages/backend/README.md) and the [node-postgres documentation](https://node-postgres.com/)

### Production

The [docker-compose-full.yaml](./docker-compose-full.yaml) gives some direction in to how you would run this setup in production. It runs the front end on nginx which is configured to be a reverse proxy for the API.
