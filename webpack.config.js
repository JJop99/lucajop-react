const path = require('path');

module.exports = {
  // ... altre configurazioni
  resolve: {
    fallback: {
      "crypto": false,
      "util": require.resolve("util/"),
      // Aggiungi altri fallback se necessario
    }
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // crea i nodi <style> nella pagina
          'css-loader',   // interpreta @import e url() come require()
          'sass-loader',  // compila Sass in CSS
        ],
      },
    ],
  },
};
  