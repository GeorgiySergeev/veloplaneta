// ES Module
export default {
  // Другие настройки Webpack...
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Другие правила...
    ],
  },
}
