
var canSubmit=true;
var dropdown=$('#dog-breeds')
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data,status,xhr) {
    let breedsList=data.message;
    for(let breed in breedsList){
        dropdown.append('<option value="'+breed+'">'+breed+'</option>')
    }
})

dropdown.change(function(){
    canSubmit=true;
})

$('#submit').click(function(e){
    e.preventDefault();
    if(canSubmit){
        breed=dropdown.val();
        getImage(breed);
        canSubmit=false;
    }
})

$('#next').click(function(e){
    e.preventDefault();
    if(breed!=undefined){
        getImage(breed);
    }
})

function getImage(breed){
    var url= "https://dog.ceo/api/breed/" + breed + "/images/random";
    $('#image-container img').remove();

    $.get(url,function(data,status,xhr) {
        let imageUrl=data.message;
        $('#image-container').append('<img src="'+imageUrl+'" class="photo">')
    })
    
}