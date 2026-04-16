# Typescript OSDK 2.0 Design Rationale

## Primary considerations

The v1 of the OSDK demonstrated a significant amount of value for statically accessing a foundry ontology. The v2 builds upon the lessons learned and supports current and future ontology features.

### Build size

The original OSDK involved generating full implementations of code for each object/link/property etc. This meant the size of the OSDK scaled linearly with the size of the ontology, which could get quite large. Further, the design meant that the entirety of the generated OSDK had to be loaded into the browser/javascript engine's memory for usage.

v2 improves upon this by linearly scaling the SDK size with the metadata, not with duplicated implementations. It is also structured in a way that allows all of metadata to be lazily loaded letting applications only pay for what they use, when they use it.

### Code re-use

As a consumer, reusing ontology code from v1 was tricky and would require either typescript gymnastics, duplication of ontology types/code, and/or mega ontologies that slowed page loads. Depending on your solution, this also meant loading more code into memory that was nearly identical but couldn't be deduplicated by the browser.

In v2, we have separated the code that "does the work" from the code that "knows your ontology". This means including multiple generated OSDKs only incurs the cost of the extra metadata and not paying for duplicated business logic.

### Code generation cost

The original OSDK relied heavily on the typescript compiler to generate an SDK. This had large benefits to ensuring correctness of generated code at the expense of requiring a lot of memory/time to create an SDK. In v2 all of the code generation happens as fast string concatenations (at the time of writing this, only one vestige of requiring the typescript compiler remains).

### Rapid hotfix potential

In the v1 design of OSDK, shipping a fix to internal logic around the SDK involved shipping an update to the code generator AND requiring that all consumers were to regenerate their OSDK. This meant a significant increase in time to ship a hotfix and making it very costly to test a fix in a single environment. In v2, the client code is separate from the generation code, allowing for updates that just require bumping library dependencies. This also allows for a pre-existing generation of an OSDK to be run against a beta of the hotfix to ensure the fix is correct before sending to everyone.

## Side effects of design choices

Software engineering is always about trade-offs and we had to make hard choices along the way.

### Date and time handling

In the v1 of the OSDK, we provided custom types for handling dates and times. To implement those types, we had to bundle a dependency on Luxon. Luxon is a great library for date/time math that uses immutable objects. However, there is also Momentjs for date/time math. Both of these libraries are massive in order to include all the possible timezone data across all time. This is problematic if you are already using one of those libraries and then are forced to include the other as you're paying for quite a lot of javascript to be loaded.

There is also a javascript standard ([TC39 Temporal](https://github.com/tc39/proposal-temporal)) in the works that would remove the need for either of these libraries. That would mean that the user does not have to download large datetime libraries for every website they visit and the browser would keep the timezone information up to date.

If the Temporal proposal was slightly further along, we would have shipped the SDK with a dependency on those type definitions and asked our consumers to polyfill for older browsers. This would mean that the SDK is quite future proof. However we are not quite there.

Finally, there is a cost (albeit small) to parsing strings. It feels wrong to parse all of the date time data that is returned from the server into javascript objects if you may not even use it!

Therefore, we made the choice to not provide concrete types for date/time in the v2 of the OSDK and instead provide the raw strings in the international standard of [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). This format is human readable allowing for simple inclusion in applications that do not need to process the data itself while being trivial to use with libraries like Luxon and Moment, ensuring there are not duplicative libraries that end-users need to pay the download/memory price for.

Additional reading:

- [MomentJS project status (momentjs.com)](https://momentjs.com/docs/#/-project-status/) outlining why you shouldn't use moment.
- [You Don't Need Momentjs](https://github.com/you-dont-need/You-Dont-Need-Momentjs/blob/master/README.md)

### Discoverability

In v1, you might take a constructed client and say `client.ontology.objects.Car`, getting intellisense along the way. This style of discovery breaks tree shaking though so in v2, you get the discoverability from the import `import * as MyOSDK from "@my/osdk"`. Decent tree shaking tools will convert this to only importing what is needed while the IDE will present you with all the information.
