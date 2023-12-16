$(function(){
    appendExampleIcon();
    bindClickHandlerExample();
})


function appendExampleIcon(){
    const $exampleIcon = `
    <div class="example-icon">
        <i class="fa-regular fa-image"></i>
    </div>`

    console.log($('.body-content'));
    $('.body-content').prepend($exampleIcon);

    console.log($('.example-icon'));
}


function bindClickHandlerExample(){
    $('.example-icon').on('click', onClickExample);
}

function onClickExample(){
    var examplePath = `${window.location.href}/example.png`;

    var $example = $('.example');
    if($example.length > 0) return

    $example = `
    <div class="example">
        <img src="${examplePath}" alt="example">
        <div class="close-icon">
            <i class="fa-solid fa-x"></i>
        </div>
    <div>` 

    $('.body-content').prepend($example);

    bindClickHandlerCloseExample()
}

function bindClickHandlerCloseExample(){
    $('.close-icon').on('click', onClickCloseExample);

}

function onClickCloseExample(){
    var $example = $('.example');
    if($example.length = 0) return
    
    $example.remove();
}