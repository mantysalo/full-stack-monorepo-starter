# Backend

Basic Koa-based backend with Postgres with router and body parsing middleware.

## Scripts

| Name         | Description                                  |
| ------------ | -------------------------------------------- |
| `start`      | Starts the server and postgres in watch mode |
| `build`      | Builds the project                           |
| `db:migrate` | Runs database migrations                     |

## Migrations

Migrations are handled with [postgres-migrations](https://www.npmjs.com/package/postgres-migrations).

### Make migrations idempotent
Migrations should only be run once, but this is a good principle to follow regardless.

### Migrations are immutable
Once applied (to production), a migration cannot be changed.

This is enforced by storing a hash of the file contents for each migration in the migrations table.

These hashes are checked when running migrations.

### Migrations should be backwards compatible
Backwards incompatible changes can usually be made in a few stages.

For an example, see [this blog post](http://www.brunton-spall.co.uk/post/2014/05/06/database-migrations-done-right/).

### File name

A migration file must match the following pattern:

`[id][separator][name][extension]`

Example:

```
migrations
├ 00001-create-initial-tables.sql
├ 00002-alter-initial-tables.sql
└ 00003-alter-initial-tables-again.sql
```

Migrations will be performed in the order of the ids. If ids are not consecutive or if multiple migrations have the same id, the migration run will fail.

Note that file names cannot be changed later.
