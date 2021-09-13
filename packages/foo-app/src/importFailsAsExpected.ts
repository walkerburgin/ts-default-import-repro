// Fails as expected with the following error:
// error TS1192: Module '"packages/foo-app/src/foobar"' has no default export.
import foobar from "./foobar";

console.log(foobar.foo());