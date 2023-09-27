import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // ...
  resolve: {
    alias: {
      Emitter: path.resolve(__dirname, "node_modules/component-emitter"),
    },
  },
  commonjsOptions: {
    transformMixedEsModules: true, // https://github.com/chnejohnson/vue-dapp/issues/20
  },
});
