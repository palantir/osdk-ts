export function now() {
    // @ts-expect-error
    return %DateCurrentTime(); //process.hrtime.bigint();
}
