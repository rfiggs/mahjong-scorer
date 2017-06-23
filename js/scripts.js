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

for(x of arr){
    card = `<div class='col-xs-2 tile'>${x}</div>`;
    $("div#tileChoices").append(card);
}