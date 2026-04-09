// @ts-check
const { mergeConfig } = require("metro-config");
const { getDefaultConfig } = require("expo/metro-config");
const dotenv = require("dotenv");

// Load environment variables from .env.development
dotenv.config({ path: ".env.development" });

const defaultConfig = getDefaultConfig(__dirname);

module.exports = mergeConfig(defaultConfig, {
  transformer: {
    ...defaultConfig.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    unstable_enablePackageExports: true,
    assetExts: (defaultConfig.resolver?.assetExts ?? []).filter(ext =>
      ext !== "svg"
    ),
    sourceExts: [...(defaultConfig.resolver?.sourceExts ?? []), "svg"],

    resolveRequest: function(context, moduleName, platform) {
      if (moduleName.includes("@osdk")) {
        context = {
          ...context,
          unstable_conditionNames: ["browser", "require", "import"],
        };
      }
      return context.resolveRequest(context, moduleName, platform);
    },
  },
});
