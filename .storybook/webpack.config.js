const path = require('path');

module.exports = {
    "module": {
        "rules": [
          {
            "test": /\.pug$/,
            "loader": ['raw-loader', 'pug-html-loader']
          },
          {
            "exclude": [
              path.join(process.cwd(), "src/styles.css")
            ],
            "test": /\.scss$|\.sass$/,
            "use": [
              {
                "loader": "raw-loader"
              },
              {
                "loader": "sass-loader",
                "options": {
                  "sourceMap": true,
                  "precision": 8,
                  "includePaths": []
                }
              }
            ]
          },
        ]
    }
};