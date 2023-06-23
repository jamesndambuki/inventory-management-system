// Creating a Product

const sellers = [];

function createSeller(name, userName, emailAddress, phoneNumber, address, otherServicesOffered) {
  return {
    name, userName, emailAddress, phoneNumber, address, otherServicesOffered,
  };
}

const james = createSeller(
  'james ndambuki',
  'jamesbruen',
  'jamesbruen17@gmail.com',
  254702249512,
  'oasis, juja, kiambu',
  ['free delivery', 'free mounting of tv'],
);

const cecy = createSeller(
  'cecilia',
  'cecy',
  'cecybruen@gmail.com',
  254714524686,
  'oasis, juja, kiambu',
  ['free delivery', 'free mounting of tv'],
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
const createASeller = function () {
  const name = prompt('enter Your name');
  const userName = prompt('enter user Name');

  const emailAddress = prompt('enter email Address');
  const phoneNumber = prompt('enter your phone Number');
  const address = prompt('enter address');
  const otherServicesOffered = prompt('enter any other Services you offer ');

  if (name === '' || null || userName === '' || null || emailAddress === '' || null || phoneNumber === '' || null || address === '' || null || otherServicesOffered === '' || null) {
    alert('invalid seller details');
  }

  const sellerDetails = {
    name, userName, emailAddress, phoneNumber, address, otherServicesOffered,
  };
  alert(`Seller details ${JSON.stringify(sellerDetails)}`);
  sellers.push(sellerDetails);
  return sellerDetails;
};

createSeller();

sellers.push(james, cecy);

// Listing available products

document.write(`Sellers\n${JSON.stringify(sellers)}\n`);

// Delete a product

const deleteASeller = confirm('Do you want to delete a seller or your details?');

if (deleteASeller === true) {
  const deleteSellerProfile = prompt('Enter username of the seller you want to delete');

  for (let seller of sellers) {
    if (deleteSellerProfile === seller.userName) {
      alert(`Seller found \n${JSON.stringify(seller)}`);
      const proceedDelete = confirm('do you want to delete the seller?');
      if (proceedDelete === true) {
        seller.delete;
        alert('Seller profile deleted successfully');
        document.write('seller deleted successfully');
      }
      break;
    } else {
      alert('seller does not exist');
      document.write(' seller does not already exist');
      console.log('seller does not exist');
    }
    break;
  }
}

// Edit / Update the product details

const editSellerDetails = confirm('Do you want to edit or update seller details?');

if (editSellerDetails === true) {
  const editProfile = prompt('Enter userName for the seller you want to Edit or update');

  for (let seller of sellers) {
    if (editProfile === seller.userName) {
      alert(`seller found \n${JSON.stringify(seller)}`);

      const proceedEdit = confirm('do you want to edit the Seller details?');

      if (proceedEdit === true) {
        const detailEdit = prompt('Enter the detail you want to change to update');
        if (detailEdit === seller.name || seller.userName || seller.emailAddress || seller.address || seller.otherServicesOffered || seller.phoneNumber) {
          let updatedEdit = prompt(`You entered ${detailEdit}. Enter the new detail you want to change to update to`);

          switch (detailEdit) {
            case 'seller.name':
              updatedEdit = name;
              break;

            case 'seller.userName':
              updatedEdit = userName;
              break;

            case 'seller.emailAddress':
              updatedEdit = emailAddress;
              break;

            case 'product.seller.address':
              updatedEdit = address;
              break;

            case 'seller.otherServicesOffered':
              updatedEdit = otherServicesOffered;
              break;

            case 'seller.phoneNumber':
              updatedEdit = phoneNumber;
              break;
          }
        }
        alert('Seller profile updated successfully');
        document.write('seller profile updated successfully');
      }
      break;
    } else {
      alert('seller does not exist');
      document.write(' seller does not already exist');
      console.log('seller does not exist');
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
const search = confirm('Search for a seller?');

if (search === true) {
  for (let seller of sellers) {
    const sellerSearch = prompt('Enter seller\'s username');

    if (sellerSearch === seller.name || seller.userName || seller.emailAddress || seller.address || seller.otherServicesOffered || seller.phoneNumber) {
      alert(`${JSON.stringify(seller)}`);
      console.log(`${sellers}`);
    } else {
      alert('No such seller');
    }
    break;
  }
  alert('No such seller');
  console.log('No such seller');
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

console.log(sellers);
