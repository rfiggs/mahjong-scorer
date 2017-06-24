window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};
arr =[
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
];


/**
 * @function addToHand
 *
 * @description
 * adds the given card to the users hand
 *
 * @param i the index of the tile
 */
function addToHand(i){
    let x = tiles[i];
    let hand = $("div#hand");
    if(hand.children().length < 14){
        hand.append(tile(x,'hand'));
    }
}

function removeFromHand(i){
    $(i).parent().remove();
}

function tile(value, mod){
    let temp;
    switch (mod) {
        case 'tilePool':
            temp = `
                <div class='col-xs-1'>
                    <a href="#" onclick="javascript: addToHand('${value.index}');">
                        <img src="${value.img}" alt="${value.value} ${value.type}"/>
                    </a>
                </div>
                `;
        break;
        case 'hand':
            temp = `
                <div class='tile'>
                    <a href="#" onclick="javascript: removeFromHand(this);">
                        <img src="${value.img}" alt="${value.value} ${value.type}"/>
                    </a>
                </div>
                `;
            break;
        default:
            temp = `
                <div class='tile'>
                    <img src="${value.img}" alt="${value.value} ${value.type}"/>
                </div>
            `;
        break;

    }

    return temp;
}

/***************** Code starts execution here *****************/


for(let i = 0; i < 5; i++){
    $("div#tileChoices").append(`<div class="row" id="tileChoices${i}"></div>`);
}

for(x in tiles){
    let part;
    // arrange dragons and winds
    if(x < 7){
        part = 0;
    }
    // arrange flowers and seasons
    else if(x < 15){
        part = 1;
    }
    //set up the rest of the tiles
    else{
        part = Math.floor((x-15) / 9);
    }
    console.log(part);
    $('div#tileChoices'+part).append(tile(tiles[x],'tilePool'));
}
