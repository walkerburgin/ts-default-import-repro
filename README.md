# ts-default-import-repro

Demonstrate an issue with TypeScript's esModuleInterop configuration

## Repro
```bash
yarn
yarn run build
```

This should fail with the following error, as expected:

```
src/importFailsAsExpected.ts:3:8 - error TS1192: Module '"/Volumes/git/walkerburgin/ts-default-import-repro/packages/foo-app/src/foobar"' has no default export.

3 import foobar from "./foobar";
         ~~~~~~


Found 1 error.
```

In a perfect world, TypeScript would fail with a similar error for `src/importSucceedsWhenMaybeItShouldNot.ts`.
