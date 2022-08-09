To reproduce the issue:

run:

- pnpm i
- pnpm build

Expected error:

```
graphql-server:build: webpack 5.74.0 compiled with 1 error in 2833 ms
graphql-server:build: D:\00 SOFTWARE\TEMP\turborepo-nestjs\packages\nest-config\src\index.ts:1
graphql-server:build: export * from "./config.service";
graphql-server:build: ^^^^^^
graphql-server:build:
graphql-server:build: SyntaxError: Unexpected token 'export'
graphql-server:build:     at Object.compileFunction (node:vm:352:18)
```
