'use strict';

// Creating a Product

const products = [];

function createProduct(name, category, SKUNumber, quantity, manufacturer, images, manufactureYear) {
  return {
    name,
    category,
    SKUNumber,
    quantity,
    manufacturer,
    images,
    manufactureYear,
  };
}

const woofer = createProduct(
  'sayonapps black subwoofer',
  'electronics',
  1757678778,
  234,
  'sayonapps ltd',
  ['img1.png', 'img2.png', 'img3.png'],
  2022,
);

const laptop = createProduct(
  'HP pavilion',
  'electronics',
  1757908778,
  24,
  'hp',
  ['img1.png', 'img2.png', 'img3.png'],
  2020,
);

// Adding products

// const product = {
//   name: 'name',
//   SKUNumber: 'SKUNumber',
//   price: 'price',
//   manufacturer: 'manufacturer',
//   description: 'description',
//   category: 'category',
// };
const createAProduct = function () {
  const name = prompt('enter the product name');
  let SKUNumber = prompt('enter the product SKU number');
  if (SKUNumber.length < 6) {
    alert('Invalid SKU number please enter a valid one');
    const validSKUNumber = prompt('enter the product SKU number');
    SKUNumber = validSKUNumber;
  }
  const price = prompt('enter the product price');
  const manufacturer = prompt('enter the product manufacturer');
  const description = prompt('enter the product description');
  const category = prompt('enter the product category name ');

  if (name === '' || null || SKUNumber === '' || null || price === '' || null || manufacturer === '' || null || description === '' || null) {
    alert('invalid product details');
  }

  const details = {
    name, SKUNumber, price, manufacturer, description, category,
  };
  alert(`product details ${JSON.stringify(details)}`);
  products.push(details);
  return details;
};

createAProduct();

products.push(woofer, laptop);

// Listing available products

document.write(`Products\n${JSON.stringify(products)}\n`);

// Delete a product

const deleteProduct = confirm('Do you want to delete a product?');

if (deleteProduct === true) {
  const deleteAProduct = prompt('Enter SKU number for product you want to delete');

  for (let product of products) {
    if (deleteAProduct === product.SKUNumber) {
      alert(`Product found \n${JSON.stringify(product)}`);
      const proceedDelete = confirm('do you want to delete the product?');
      if (proceedDelete === true) {
        product.delete;
        alert('Product deleted successfully');
        document.write('Product deleted successfully');
      }
      break;
    } else {
      alert('product does not exist');
      document.write(' product does not already exist');
      console.log('product does not exist');
    }
    break;
  }
}

// Edit / Update the product details

const edit = confirm('Do you want to edit or update a product?');

if (edit === true) {
  const editAProduct = prompt('Enter SKU number for product you want to Edit or update');

  for (let product of products) {
    if (editAProduct === product.SKUNumber) {
      alert(`Product found \n${JSON.stringify(product)}`);

      const proceedEdit = confirm('do you want to edit the product?');

      if (proceedEdit === true) {
        const detailEdit = prompt('Enter the detail you want to change to update');
        if (detailEdit === product.name || product.SKUNumber || product.price || product.manufacturer || product.description || product.category) {
          let updatedEdit = prompt(`You entered ${detailEdit}. Enter the new detail you want to change to update to`);

          switch (detailEdit) {
            case 'product.name':
              updatedEdit = name;
              break;

            case 'product.SKUNumber':
              updatedEdit = SKUNumber;
              break;

            case 'product.price':
              updatedEdit = price;
              break;

            case 'product.manufacturer':
              updatedEdit = manufacturer;
              break;

            case 'product.description':
              updatedEdit = description;
              break;

            case 'product.category':
              updatedEdit = category;
              break;
          }
        }
        alert('Product updated successfully');
        document.write('Product updated successfully');
      }
      break;
    } else {
      alert('product does not exist');
      document.write(' product does not already exist');
      console.log('product does not exist');
    }
    break;
  }
}

// Filter products by date,time, seller.

// function inArray(products) {
//     return function(date, time, seller) {
//         return products.includes(date, time, seller)
//     };
// };

// Searching for a product
const search = confirm('Search for a product?');

if (search === true) {
  for (let product of products) {
    const productSearch = prompt('Enter product name');

    if (productSearch === product.name || product.SKUNumber || product.price || product.manufacturer || product.description || product.category) {
      alert(`${JSON.stringify(product)}`);
      console.log(`${products}`);
    } else {
      alert('No such product');
    }
    break;
  }
  alert('No such product');
  console.log('No such product');
// Return 'No such product';
}

// sorting the products(by category, seler, time added, manufacturer)

/*
    function byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    };
    products.sort(byField('category'));
    products.forEach(product => document.write(product.category));

    products.sort(byField('seller'));
    products.forEach(product => document.write(product.seller));

    products.sort(byField('manufacturer'));
    products.forEach(product => document.write(product.manufacturer));

    products.sort(byField('price'));
    products.forEach(product => document.write(product.price));
*/

console.log(products);
