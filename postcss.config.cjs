module.exports = ({ env }) => ({
  plugins: [
    require('postcss-pxtorem'),
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('postcss-simple-extend'),
    require('autoprefixer'),
    env === 'production' ? require('cssnano')({ preset: 'default' }) : undefined,
  ],
})
