/*const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );

        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                }
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            } else {
                try {
                    const products = JSON.parse(fileContent);
                    cb(products);
                } catch (parseError) {
                    console.error('Error parsing JSON:', parseError);
                    cb([]);
                }
            }
        });
    }
};*/


//optimized code
const fs = require("fs");
const path = require("path");

// Using "__dirname" to get the current directory of the script
const p = path.join(__dirname, "..", "data", "products.json");

const getProductsFromFile = (cb) => {
  // Using "path.resolve" to ensure an absolute path
  const resolvedPath = path.resolve(p);
  
  fs.readFile(resolvedPath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      try {
        // Adding a try-catch block to handle JSON parsing errors
        const products = JSON.parse(fileContent);
        cb(products);
      } catch (parseError) {
        // If JSON parsing fails, call the callback with an empty array
        cb([]);
      }
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
