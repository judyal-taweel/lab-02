'use strict'

function Horns(nameAnimal){
    this.image_url = nameAnimal.image_url;
    this.title = nameAnimal.title;
    this.description = nameAnimal.description;
    this.keyword = nameAnimal.keyword;
    this.horns = nameAnimal.horns;

}

Horns.prototype.render=function(){
    let hornsSection = $('#dataSection').clone();
    $('main').append(hornsSection);

    hornsSection.find('h2').text(this.title);
    hornsSection.find('img').attr('src',this.image_url);
    hornsSection.find('p').text(this.description);
    // hornsSection.removeClass('dataSection');
    // hornsSection.attr('class', this.keyword);
    $('main').append(hornsSection);

console.log(this.title);
}


function getData(){
    const ajaxData={
        method: 'get',
        dataType: 'json'
    }

    $.ajax("../data/page-1.json", ajaxData).then(data=> {
       data.forEach(nameAnimal => {
           let newObj = new Horns(nameAnimal);
           newObj.render();
       });
    })
}

getData();

// function selects(){
//     let selectItems = $('#selectItem').clone();
//     selectItems.find('option').text(this.nameAnimal);





// }

