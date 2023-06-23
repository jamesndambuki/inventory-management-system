/* eslint-disable no-restricted-syntax */
// Creating a Product

const deliverypoints = [];

function createADeliveryLocation(country, county, subCounty, town, street, building) {
  return {
    country, county, subCounty, town, street, building,
  };
}

const juja = createADeliveryLocation(
  'Kenya',
  'kiambu',
  'juja',
  'juja',
  'juja-gatundu road',
  'freemark flats',
);

const thika = createADeliveryLocation(
  'kenya',
  'kiambu',
  'thika',
  'thika',
  'Thika-makongeni road',
  'sebourne plaza',
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
const createADeliveryPoint = function () {
  const country = prompt('enter Your country name');
  const county = prompt('enter county Name');

  const subCounty = prompt('enter subcounty name');
  const town = prompt('enter town name');
  const street = prompt('enter street address');
  const building = prompt('enter shop name ');

  if (country === '' || null || county === '' || null || subCounty === '' || null || town === '' || null || street === '' || null || building === '' || null) {
    alert('invalid delivery location details');
  }

  const deliveryPointDetails = {
    country, county, subCounty, town, street, building,
  };
  alert(`Delivery point details ${JSON.stringify(deliveryPointDetails)}`);
  deliverypoints.push(deliveryPointDetails);
  return deliverypoints;
};

createADeliveryPoint();

deliverypoints.push(juja, thika);

// Listing available products

document.write(`Delivery points\n${JSON.stringify(deliverypoints)}\n`);

// Delete a product

const deleteADeliveryPoint = confirm('Do you want to delete a delivery point?');

if (deleteADeliveryPoint === true) {
  const deleteDeliveryPoint = prompt('Enter shop name of the delivery location you want to delete');

  for (let deliveryPoint of deliverypoints) {
    if (deleteDeliveryPoint === deliveryPoint.building) {
      alert(`Delivery point found \n${JSON.stringify(deliveryPoint)}`);
      const proceedDelete = confirm('do you want to delete the delivery location?');
      if (proceedDelete === true) {
        deliveryPoint.delete;
        alert('Delivery point deleted successfully');
        document.write('Delivery point  deleted successfully');
      }
      break;
    } else {
      alert('Delivery point  does not exist');
      document.write(' Delivery point  does not already exist');
      console.log('Delivery point  does not exist');
    }
    break;
  }
}

// Edit / Update the product details

const editDeliveryPoint = confirm('Do you want to edit or update delivery point details?');

if (editDeliveryPoint === true) {
  const editPoint = prompt('Enter userName for the seller you want to Edit or update');

  for (let deliveryPoint of deliverypoints) {
    if (editPoint === deliveryPoint.building) {
      alert(`delivery location found \n${JSON.stringify(deliveryPoint)}`);

      const proceedEdit = confirm('do you want to edit the delivery point details?');

      if (proceedEdit === true) {
        const detailEdit = prompt('Enter the detail you want to change to update');
        if (detailEdit === deliveryPoint.country || deliveryPoint.county || deliveryPoint.subCounty || deliveryPoint.town || deliveryPoint.street || deliveryPoint.building) {
          let updatedEdit = prompt(`You entered ${detailEdit}. Enter the new detail you want to change to update to`);

          switch (detailEdit) {
            case 'deliveryPoint.country':
              updatedEdit = country;
              break;

            case 'deliveryPoint.county':
              updatedEdit = county;
              break;

            case 'deliveryPoint.subCounty':
              updatedEdit = subCounty;
              break;

            case 'deliveryPoint.town':
              updatedEdit = town;
              break;

            case 'deliveryPoint.street':
              updatedEdit = street;
              break;

            case 'deliveryPoint.building':
              updatedEdit = building;
              break;
          }
        }
        alert('Delivery point details updated successfully');
        document.write('Delivery point details updated successfully');
      }
      break;
    } else {
      alert('Delivery location does not exist');
      document.write(' Delivery location does not exist');
      console.log('Delivery location does not exist');
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
const search = confirm('Search for a delivery point?');

if (search === true) {
  for (let deliveryPoint of deliverypoints) {
    const deliveryPointSearch = prompt('Enter delivery point shop name');

    if (deliveryPointSearch === deliveryPoint.country || deliveryPoint.county || deliveryPoint.subCounty || deliveryPoint.town || deliveryPoint.street || deliveryPoint.building) {
      alert(`${JSON.stringify(deliveryPoint)}`);
      console.log(`${deliveryPoint}`);
    } else {
      alert('No such location');
    }
    break;
  }
  alert('No such location');
  console.log('No such location');
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

console.log(deliverypoints);
