// Fill 'current inventory' card table with data
let curInvDate = moment().startOf('month').format('YYYYMMDD')
let curInvArr
let productArr

fetch(`/inventory/${curInvDate}-${curInvDate}`)
  .then(r => r.json())
  .then(currentInventory => {
    curInvArr = currentInventory
    document.getElementById('curInvTableBody').innerHTML = ''
    currentInventory.forEach(invItem => {
      let tableRow = document.createElement('tr')
      tableRow.innerHTML = `
        <td>${invItem.Product.name}</td><td>${invItem.inventory_kegs} Kegs</td>
      `
      document.getElementById('curInvTableBody').appendChild(tableRow)
    })
  })

// Get "Processing" products

fetch('/products')
  .then(r => r.json())
  .then(products => {
    productArr = products
    products.forEach(product => {
      if (product.status === 'Brewing'){
        let procTableRow = document.createElement('tr')
        procTableRow.innerHTML = `
        <td>${product.name}</td><td><a class="waves-effect waves-light btn-small" onclick="processingDone(${product.id})"><i class="material-icons">done</i></a></td>`
        document.getElementById('invProcessingTable').appendChild(procTableRow)
      }
    })
  })

// "Done" processing button
function processingDone(productId) {
  console.log('done processing #: ' + productId)
  }



function getInvName() {
  fetch('/products')
    .then(r => r.json())
    .then(r => {
      r.forEach(item => {
        switch (r.id) {
          case 1:
            document.getElementById("product1Name").innerHTML(item.name)
            break;
          case 2:
            document.getElementById("product2Name").innerHTML(item.name)
            break;
          case 3:
            document.getElementById("product3Name").innerHTML(item.name)
            break;
          case 4:
            document.getElementById("product4Name").innerHTML(item.name)
            break;
          case "5":
            document.getElementById("product5Name").innerHTML(item.name)
            break;
          case "6":
            document.getElementById("product6Name").innerHTML(item.name)
            break;
          case "7":
            document.getElementById("product7Name").innerHTML(item.name)
            break;
          case "8":
            document.getElementById("product8Name").innerHTML(item.name)
            break;
          case "9":
            document.getElementById("product9Name").innerHTML(item.name)
            break;
          case "10":
            document.getElementById("product10Name").innerHTML(item.name)
            break;
          case "11":
            document.getElementById("product11Name").innerHTML(item.name)
            break;
          case "12":
            document.getElementById("product12Name").innerHTML(item.name)
            break;
          case "13":
            document.getElementById("product13Name").innerHTML(item.name)
            break;
          case "14":
            document.getElementById("product14Name").innerHTML(item.name)
            break;
          case "15":
            document.getElementById("product15Name").innerHTML(item.name)
            break;
          case "16":
            document.getElementById("product16Name").innerHTML(item.name)
            break;

        }
      })
    })
    .catch(e => console.log(e))
}

function getCurrentInv() {
  fetch('/inventory')
    .then(r => r.json())
    .then(r => {
      r.forEach((item => {
        switch (r.id) {
          case "1":
            document.getElementById("product1Inv").innerHTML(item.inventory_kegs)
            break;
          case "2":
            document.getElementById("product2Inv").innerHTML(item.inventory_kegs)
            break;
          case "3":
            document.getElementById("product3Inv").innerHTML(item.inventory_kegs)
            break;
          case "4":
            document.getElementById("product4Inv").innerHTML(item.inventory_kegs)
            break;
          case "5":
            document.getElementById("product5Inv").innerHTML(item.inventory_kegs)
            break;
          case "6":
            document.getElementById("product6Inv").innerHTML(item.inventory_kegs)
            break;
          case "7":
            document.getElementById("product7Inv").innerHTML(item.inventory_kegs)
            break;
          case "8":
            document.getElementById("product8Inv").innerHTML(item.inventory_kegs)
            break;
          case "9":
            document.getElementById("product9Inv").innerHTML(item.inventory_kegs)
            break;
          case "10":
            document.getElementById("product10Inv").innerHTML(item.inventory_kegs)
            break;
          case "11":
            document.getElementById("product11Inv").innerHTML(item.inventory_kegs)
            break;
          case "12":
            document.getElementById("product12Inv").innerHTML(item.inventory_kegs)
            break;
          case "13":
            document.getElementById("product13Inv").innerHTML(item.inventory_kegs)
            break;
          case "14":
            document.getElementById("product14Inv").innerHTML(item.inventory_kegs)
            break;
          case "15":
            document.getElementById("product15Inv").innerHTML(item.inventory_kegs)
            break;
          case "16":
            document.getElementById("product16Inv").innerHTML(item.inventory_kegs)
            break;
        }
      }))
    })
}



window.onload = function() {
  getInvName()
  getCurrentInv()
};