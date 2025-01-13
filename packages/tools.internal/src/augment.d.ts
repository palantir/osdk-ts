declare module "esbuild-plugin-babel" {
  const p = (config: {}) => {
    name: "babel";
    setup: Function;
  };
  export default p;
}
