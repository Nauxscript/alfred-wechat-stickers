import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index',
  ],
  hooks: {
    'rollup:options': (ctx, option) => {
      (option.output instanceof Array) && option.output.push(
        {
          name: 'run',
          dir: ctx.options.outDir,
          format: 'iife',
          exports: 'auto',
          generatedCode: {
            constBindings: true,
          },
          externalLiveBindings: false,
          freeze: false,
        },
      )
    },
  },
})