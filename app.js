
var products = [{'id': '293', 'uri': 'https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2fsauder%2fcolor%2fheritage%20hill_102792-b.jpg?width=878&height=600&scale=both&trim.threshold=20&trim.percentpadding=0.5'}, {'id': '555', 'uri': 'https://cdn.machineseeker.com/data/listing/img_400x300/22/7294122.1658051881__.jpg'}, {'id': '163', 'uri': 'https://m.media-amazon.com/images/I/71USZcDffLL._AC_SS450_.jpg'}, {'id': '296', 'uri': 'https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/B02C6PS-back/c6-recycled-fleck-kraft-peel-and-seal-envelopes.jpg'}, {'id': '431', 'uri': 'https://images-eu.ssl-images-amazon.com/images/I/31EbWUscBBL._SX300_SY300_QL70_ML2_.jpg'}, {'id': '70', 'uri': 'https://i.ebayimg.com/images/g/0y8AAOSwWHZa9LZW/s-l500.jpg'}, {'id': '23', 'uri': 'https://i.ebayimg.com/thumbs/images/g/DwsAAOSwuvBgSsEP/s-l300.jpg'}, {'id': '16', 'uri': 'https://m.media-amazon.com/images/I/51VXqD4HF2L._SX679_.jpg'}, {'id': '1089', 'uri': 'https://cdn.shopify.com/s/files/1/1034/1611/products/cisco_cp_8845_k9_8845_ip_phone_charcoal_1455652041000_1225633_800x.jpg?v=1575986778'}, {'id': '464', 'uri': 'https://m.media-amazon.com/images/I/71hHzTcjQAL._SL1500_.jpg'}, {'id': '145', 'uri': 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/462654/462654_p_cardinal_holdit_business_card_pockets/462654'}, {'id': '589', 'uri': 'https://i.ebayimg.com/images/g/qHwAAAzykWJSrs3V/s-l600.jpg'}, {'id': '198', 'uri': 'https://images-na.ssl-images-amazon.com/images/I/31WshFTgW5L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg'}, {'id': '165', 'uri': 'https://wskart.in/wp-content/uploads/2022/03/ss-Square-Door-Stopper.jpg'}, {'id': '380', 'uri': 'https://i.ebayimg.com/thumbs/images/g/H8IAAOSwO~JhVTRL/s-l1600.jpg'}, {'id': '50', 'uri': 'https://m.media-amazon.com/images/I/91BEmCzs1ZL._SX679_.jpg'}, {'id': '288', 'uri': 'https://5.imimg.com/data5/SELLER/Default/2020/10/PN/JB/UM/71415398/2e07cb93-915a-4b28-b3ab-c90b5d349d73-500-500-500x500.jpg'}, {'id': '474', 'uri': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/og-airpods-max-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1603996970000'}, {'id': '47', 'uri': 'https://i.ebayimg.com/images/g/WmIAAOSwYvNf6c7f/s-l640.jpg'}, {'id': '527', 'uri': 'https://m.media-amazon.com/images/I/7180ZAZmERL._SL1500_.jpg'}, {'id': '593', 'uri': 'https://5.imimg.com/data5/HW/RO/MY-7745226/untitled-1-500x500.jpg'}, {'id': '318', 'uri': 'https://m.media-amazon.com/images/I/41Js3KiNGdL._SX522_.jpg'}, {'id': '260', 'uri': 'https://www.solutionstrauma.com/images/Image/Marqueur-Stanley-Mini-Ref-AC-MK1.jpg'}, {'id': '110', 'uri': 'https://m.media-amazon.com/images/I/81haOj7k8lL._AC_SX569_.jpg'}, {'id': '858', 'uri': 'https://m.media-amazon.com/images/I/71QL7ndiC6L._AC_SL1500_.jpg'}, {'id': '778', 'uri': 'https://www.stockwell.com/wp-content/uploads/2018/06/custom-gaskets-fabricated.jpg'}, {'id': '608', 'uri': 'https://www.apple.com/newsroom/images/product/homepod/standard/Apple_homepod-mini-white-10132020.jpg.landing-big_2x.jpg'}, {'id': '356', 'uri': 'https://m.media-amazon.com/images/I/71F-QFuGLtL._SX679_.jpg'}, {'id': '1210', 'uri': 'https://dylbs6e8mhm2w.cloudfront.net/productimages/300x300/DELD2275.JPG'}, {'id': '104', 'uri': 'https://5.imimg.com/data5/SELLER/Default/2021/9/PG/BE/IS/42883368/library-books-almirah-500x500.jpg'}, {'id': '457', 'uri': 'http://atlas-content-cdn.pixelsquid.com/stock-images/thumbtack-0MLWLK9-600.jpg'}, {'id': '1', 'uri': 'https://5.imimg.com/data5/CL/KC/ZE/SELLER-81572744/cash-drawers-500x500.jpg'}, {'id': '58', 'uri': 'https://www.goldengate.com.mt/Public/Handlers/ImageHandler.ashx?company=001&id=_3F30Q4TVI&thumbnail=False&width=0&height=0&AspxAutoDetectCookieSupport=1'}, {'id': '2959', 'uri': 'https://m.media-amazon.com/images/I/61YqFCqqmCL._SL1500_.jpg'}]
var recommendArray = []

var ids = ['293', '555', '163', '296', '431', '70', '23', '16', '1089', '464', '145', '589', '198', '165', '380', '50', '288', '474', '47', '527', '593', '318', '260', '110', '858', '778', '608', '356', '1210', '104', '457', '1', '58', '2959']

var productsInCart = []
var productsInCartByID = []
var YOUR_CLIENT_ID = '92755349225-vvqkfe4teu01oc252simva5gqpoo4av3.apps.googleusercontent.com';
var YOUR_REDIRECT_URI = 'https://exceptionxd.github.io/gcpTek/index.html';
var fragmentString = location.hash.substring(1);
var params = {};
let counter = 0;

document.addEventListener("input",function(){
  // alert(document.getElementById('inputBar').value);
  let suggestionList = ``
  var query = document.getElementById('inputBar').value;
  var accessToken = sessionStorage.getItem('authToken')
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      var suggestions = JSON.parse(this.responseText).completionResults;
      console.log(suggestions)
      for(let i =0 ; suggestions!=null && i<suggestions.length; i++){
        suggestionList += `
          <li class = "list-group-item" onClick = "suggestionTaken('${suggestions[i].suggestion}')" > ${suggestions[i].suggestion}</li>
        `
      }

      document.getElementById('suggestion-list').innerHTML = suggestionList;
    }
  });

  xhr.open("GET", `https://retail.googleapis.com/v2/projects/92755349225/locations/global/catalogs/default_catalog:completeQuery?query=${query}&dataset=user-data&maxSuggestions=5`);
  xhr.setRequestHeader("Authorization", "Bearer "+`${accessToken}`);

  xhr.send();
  })


function suggestionTaken(val){
  console.log("Suggestion Clicked")
  document.getElementById('inputBar').value = val;
  document.getElementById('suggestion-list').innerHTML = ''
}

function getDummy()
{
  sessionStorage.clear()
  var url = window.location.href
  var data = url.split("&")
  var token = data[1].split("=")
  var accessToken = token[1]
  sessionStorage.setItem('authToken', JSON.stringify(accessToken));
  let output = ''

  products.forEach(function(products){
    output += `
    <br>
    <div class="col-md-4">
    <div class="card shadow" style="width: 18rem; max-height:70vh">
      <img class="card-img-top zoom" src="${products.uri}" alt="Poster" style="max-height:40vh; min-height:40vh">
      </div>
      <div class = "card-body">
        <button class="btn btn-danger shadow" id="${products.id}" onClick = addToCart("${products.id}","${products.uri}") >Add &#128722</button>
        <button class="btn btn-info shadow" id="addToWishlist" style="margin-left:2%"> &#128151 Wishlist</button>
      </div>
      <br>
  </div>
    `
  })

  document.getElementById('response').innerHTML = output;

}

function getResponse()
{
  sessionStorage.clear()
  var url = window.location.href
  var data = url.split("&")
  var token = data[1].split("=")
  var accessToken = token[1]
  sessionStorage.setItem('authToken', JSON.stringify(accessToken));
  var search = document.getElementById('inputBar').value;
  
  var data = JSON.stringify({"branch":"projects/tgs-internal-saige-sandbox-001/locations/global/catalogs/default_catalog/branches/0","visitorId":"101","query":search});
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.open("POST", "https://retail.googleapis.com/v2alpha/projects/tgs-internal-saige-sandbox-001/locations/global/catalogs/default_catalog/servingConfigs/sample-retail-search:search",true);
  xhr.setRequestHeader("Authorization", "Bearer "+`${accessToken}`);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      let output ='';
      var responseFromBackend = JSON.parse(this.responseText);
      console.log(responseFromBackend,"This is from backend")
      if(responseFromBackend.results != undefined){
        var response = responseFromBackend.results

        products = response;

        for(let i = 0; i<response.length; i++){
          products[i].isAddedToCart = "false"
        }

        products.forEach(function(products){
          output += `
          <br>
          <div class="col-md-4">
          <div class="card shadow" style="width: 18rem; max-height:70vh">
            <img class="card-img-top zoom" src="${products.product.images[0].uri}" alt="Poster" style="max-height:50vh; min-height:50vh">
            </div>
            <div class = "card-body">
              <button class="btn btn-danger shadow" id="${products.id}" onClick = addToCart("${products.id}","${products.product.images[0].uri}") >Add &#128722</button>
              <button class="btn btn-info shadow" id="addToWishlist" style="margin-left:2%"> &#128151 Wishlist</button>
            </div>
            <br>
        </div>
          `
        })

        document.getElementById('response').innerHTML = output;
      }
      else if(responseFromBackend.redirectUri != undefined){
        output ='';
        document.getElementById('response').innerHTML = output;
        var redirectLink = responseFromBackend.redirectUri.split("/")
        var link = redirectLink[0]
        // const url = new URL(link)
        // console.log(url)
        window.open(`https://${link}`, '_blank');
        getDummy();
      }else{
      output += `
      <div>
      <h2>Sorry Data Doesn't Exists</h2>
    </div> `

    document.getElementById('response').innerHTML = output;
    }

    }
  });

  xhr.send(data);

}

function oauth2SignIn() {
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);
  var params = {'client_id': YOUR_CLIENT_ID,
                'redirect_uri': YOUR_REDIRECT_URI,
                'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                'state': 'try_sample_request',
                'include_granted_scopes': 'true',
                'response_type': 'token'};

  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();

}

function getURL(){
  showSlides();
  var url = window.location.href
  var data = url.split("&")
  var token = data[1].split("=")
  getDummy();
  // location.replace("http://127.0.0.1:5500/index.html") try this out later
}

function addToCart(id,imgUrl){
    console.log(imgUrl)
    counter++;
    productsInCart.push(imgUrl)
    productsInCartByID.push({"id":id})
    document.getElementById(id).style.backgroundColor= '#FFB6C1'
    document.getElementById(id).innerText = "Added"
    document.getElementById("CartCount").innerText = counter
    console.log(productsInCart,"URI of Products")
    console.log(productsInCartByID,"ID of Products")
    sessionStorage.setItem('cartArray', JSON.stringify(productsInCart));
    sessionStorage.setItem('cartItemsID', JSON.stringify(productsInCartByID));
}

function checkout(){

  var sessionString = sessionStorage.getItem('cartArray');
  var finalItems = JSON.parse(sessionString)
  console.log(finalItems, "Current Items")
  let items = ''
  finalItems.forEach(function(finalItems){
    items += `
    <br>
    <div class="col-md-12">
    <div class="card shadow" style="width: 18rem; max-height:70vh">
      <img class="card-img-top zoom" src="${finalItems}" alt="Poster" style="max-height:30vh; min-height:40vh">
      
      </div>
      <br>
  </div>
    `
  })

  document.getElementById('cartItems').innerHTML = items;

  getFreq();

}

function getFreq(){
  let items = ''
  var apiToken = sessionStorage.getItem('authToken')
  var itemsByID = sessionStorage.getItem('cartItemsID');
  var products = JSON.parse(itemsByID)

  console.log(products)

  var myproductList = [];

  for(let i = 0; i<products.length; i++){
    myproductList.push({
      'product': products[i]})
  }

  var data = JSON.stringify({"pageSize":10,"params":{"returnProduct":true},"userEvent":{"eventType":"detail-page-view","visitorId":"101","productDetails":myproductList }});

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.open("POST", "https://retail.googleapis.com/v2/projects/tgs-internal-saige-sandbox-001/locations/global/catalogs/default_catalog/placements/retail-enhance-v1:predict");
  xhr.setRequestHeader("Authorization", "Bearer "+`${apiToken}`);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      var apiResult = JSON.parse(this.responseText)
      console.log(apiResult,"Resppp");

      for(let i = 0; i<apiResult.results.length; i++){
          if(ids.includes(apiResult.results[i].id)){
            recommendArray.push({"uri": apiResult.results[i].metadata.product.images[0].uri})
          }
      }

      recommendArray.forEach(function(recommendArray){
        items += `
        <br>
        <div class="col-md-4">
        <div class="card shadow" style="width: 18rem; max-height:70vh">
          <img class="card-img-top zoom" src="${recommendArray.uri}" alt="Poster" style="max-height:40vh; min-height:40vh">
          </div>
          <div class = "card-body">
                  <button class="btn btn-danger shadow">Add &#128722</button>
                  <button class="btn btn-info shadow" id="addToWishlist" style="margin-left:2%"> &#128151 Wishlist</button>
          </div>
          <br>
      </div>
        `
      })
    
      document.getElementById('freq').innerHTML = items;
      
    }

    });
  xhr.send(data);

}

let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
