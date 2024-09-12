---
"@osdk/generator": patch
"@osdk/client": patch
---

Notable changes:
- `{{actionApiName}}$Params` is deprecated in favor of `ActionParams${{actionApiName}}`.
- All generated `{{actionApiName}}$Params` objects are now exported from generated code.
- All `{{actionApiName}}$Params` are marked as `readonly`.
- Some types that are now only needed in `@osdk/client` have been moved back out of `@osdk/client.api`.
- Generated `ActionParams${{actionApiName}}` are simpler and do not rely on type mapping for the keys, the array'ness, nor multiplicity.
- `AttachmentUpload.name` is now `readonly`.
