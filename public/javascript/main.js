$(function(){
   // console.log("success");
    
})

function testing(inppt){

        addItemsToPage(inppt)
        return true;
    
}
function addItemsToPage(inppt2){
    $('#changer').empty();
    if( inppt2 != "toilet" && inppt2 != "cafe"){
        $('#changer').append(' <%- include("winterhouse_Pages/'+inppt2+'.ejs") %>')
        try{
            $('#changer').append("<img src='images/"+inppt2+".png'>")
        }catch{
            
        }
    }
    
    
    else if(inppt2=="toilet")
    {
        $('#changer').append("<p>"+inppt2+"</p>")
    }

}

