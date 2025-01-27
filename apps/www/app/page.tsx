/** Add your relevant code here for the issue to reproduce */
import { test } from "test-pkg"

// I also tried using `bun link` and update the package.json to use `link:test-pkg` but it didn't work.

export default function Home() {
  test();
  return null;
}
