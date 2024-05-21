# @osdk/shared.client

This is a special package whose purpose is to ensure that we do not end up with duplicated execution of a common and shared symbol.
This is especially important for environments that use PNPM and may end up with multiple copies of child libraries. We do not want this. It will break many assumptions our codebase has.

One of the best ways to ensure that continues to be the case is to ship a hand coded v1.0.0 that does not change. Then, even if multiple packages get consumed that depend on this package, they will all get the same one.
