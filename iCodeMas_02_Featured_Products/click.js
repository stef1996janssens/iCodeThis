async function GetData(){
    var response = await fetch("data.json");
    const data = await response.json();
    return data;
}

$(async function(){
   var data = await GetData();
   for (var product of data){
    createFeaturedProductSelection(product);
   };
})

function createFeaturedProductSelection(product){
    const $container = $('#product-container');

    const $productDiv = $(`
    <div class="product" id="product_${product.id}">
        <a><img src="resources/img/${product.image}" alt="${product.name}"></img></a>
    </div>
    `);

    $container.append($productDiv);

    if(product.label !== ""){
        addProductLabel(product);
    }

    addClickHandler(product);
}


function addProductLabel(product){

    $productDiv = $(`#product_${product.id}`);
    $productDiv.attr('data-before', product.label);

    if(product.label === 'NEW'){
        $productDiv.addClass('new');
    }
    else{
        $productDiv.addClass('sale');
    }
}

function addProductLabelBig(product){
    $productDiv = $(`.product.big`);
    $productDiv.attr('data-before', product.label);

    if(product.label === 'NEW'){
        $productDiv.addClass('new');
    }
    else{
        $productDiv.addClass('sale');
    }

}

function addClickHandler(product){
    var $productDiv = $(`#product_${product.id}`);
    $productDiv.on('click', function() {showProductDetails(product)});
}

function showProductDetails(product){
    $container = $('#product-detail');

    const $detail = $(`
    <div>
        <div class="product big" id="product_${product.id}">
            <img src="resources/img/${product.image}" alt="${product.name}"></img>
        </div>
    </div>
    <div class="flex between column">
        <div>
            <h2>${product.name}</h2>
            <p class="price">${product.price}</p>
            <div class="score flex"></div>
            <p class="description">${product.description}</p>
        </div>
        <a class="call-to-action">Add to cart <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12.5 17h-6.5v-14h-2" /><path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg></a>
    </div>
    `);



    $container.html($detail);

    if(product.label !== ""){
        addProductLabelBig(product);
    }

    $score = $('.score');
    console.log($score);

    for(var i = 0; i <= Math.floor(product.score); i++) {
        $score.append('<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor" /></svg>')
    }

}
