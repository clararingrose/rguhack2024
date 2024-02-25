$(function(){
   // console.log("success");
    
})

function testing(inppt){

        addItemsToPage(inppt)
        return true;
    
}
function addItemsToPage(inppt2){
    $('#changer').empty();
    
        try{
            $('#changer').append("<img src='images/"+inppt2+".png'>")
        }catch{
            
        }
    if( inppt2 == "toilet"){
        $('#changer').append(' <h2>Toilet</h2> <p> Toilet is... toilet.')
    }
    else if(inppt2 == "cafe"){
        $('#changer').append('<h2>Cafe</h2><p>A place to rest and enjoy a nice cup of tea with cheese cake')
    }
    else if(inppt2==24){
        $('#changer').append("<h2>The David Welch Winter Gardens </h2> <p>These are one of Europe’s largest indoor botanical gardens containing many rare and exotic plants on show from all around the world. Free admission, see first page for opening times. On entering, the visitor is greeted by a host of tropical wonders, colourful display beds and important economic crop plants including banana, coffee, cocoa and tea. The hibiscus with its large colourful trumpet shaped flowers has a truly stunning appearance. The Tropical House contains plants mainly from the moist forests of tropical South America, giving the feeling of being in a tropical jungle. It contains plants such as bromeliads and orchids plus gingers and aroids from Asia. The character of the vegetation is dominated by the versatile Bromeliaceae pineapple family. Plants from dry lands throughout the world – from Central America to Southern Africa, from Arabia to Madagascar can be found in the Arid House. This has one of the largest collections of cacti and succulents in Britain. The oldest specimen is the Echinocactus grusonnii or barrel cactus at more than 100 years old.The sight of more than 30 hanging baskets in their full glory in the Victorian Corridor is a must for any visitor over summer months. The magnificent Temperate House with its cascading water feature contains plants from warm temperate regions of the world, especially Australia, New Zealand, South Africa and the Mediterranean. Ferns were among the first land plants 400 million years ago and the Fern House display is captivating with the natural setting beside water and the exhibitions of foliage and leaf texture. </p>")
    }else if(inppt2==25){
        $('#changer').append("<h2> Aberdeen City Coat of Arms</h2> <p>The right to bear a set of arms is a privilege granted by the sovereign through the Lord Lion King of Arms. Few burghs in Scotland have been permitted to adopt supporters, and Aberdeen’s leopards are a mark of royal favour. The city’s motto ‘Bon-Accord’ (good fellowship), has remained unchanged since at least 1430. In local legend it dates back to the Wars of Independence. ‘Bon-Accord’ being the townsfolk’s watchword in 1308 during the successful assault on Aberdeen’s castle, then in English hands. </p>")
    }else if(inppt2==26){
        $('#changer').append("<h2>Mount Cottage Fountain </h2> <p> This fountain came from Mount Cottage which still stands at 45 Mount Street next to Westburn Road in Rosemount.</p>")
    }else if(inppt2==27){
        $('#changer').append("<h2>Spike the Talking Cactus </h2> <p> Spike first appeared at the Glasgow Garden Festival in 1988 and was refurbished in 2010 by the Friends of Duthie Park.</p>")
    }else if(inppt2==28){
        $('#changer').append("<h2>The Japanese Garden </h2> <p> The Japanaese Garden at Duthie Park was designed by the Japanese-born landscape architect Takashi Sawano. It was officially opened by His Excellency Toshio Yamazaki the Japanese Ambassador to Britain in June 1987.</p>")
    }else if(inppt2==29){
        $('#changer').append("<h2>Glass Mosaic </h2> <p>Fused glass mosaic (above) by 2017 Artist in Residence Shelagh Swanson in collaboration with the local community. </p>")
    }else if(inppt2==30){
        $('#changer').append("<h2>Regensburg Männchen </h2> <p>Richard Ross Robertson, Aberdeen, 1914-2007. Student and tutor at Gray’s School of Art. Replica of the Regensburger Brückenmännchen – Bridge Man of Regensburg – which stands on the bridge over the Danube at Regensburg. Presented by the Scottish/German Association in 1973 in recognition of Aberdeen’s twinned city link.  </p>")
    }else if(inppt2==31){
        $('#changer').append("<h2>Gargoyle </h2> <p>Artist unknown. This water spouting gargoyle was formerly sited in the Victoria Park, Rosemount in a section known locally as Tom’s Castle. A miniature castle once stood on the summit of a small knoll and children believed that it was inhabited by little Tom Thumb himself! The gargoyle was part of a well at the base of the knoll. </p>")
    }else if(inppt2==32){
        $('#changer').append("<h2>Trade and Finance </h2> <p> Sydney Boyes 1878-1931, Southampton, England. This bronze panel in high relief, was designed by Boyes and cast in Burton on Trent between 1905-1908. Originally set into the cast iron parapet or balustrade, formerly on the south side of Union Bridge. This side was removed when shops were built in 1962. The figures represent: trade, finance, fishing, shipbuilding, engineering and agriculture. The original balustrade is in the park at the Linked Lakes (see entry 15), as are the Kelly’s Cats (36) which were arranged along the top.</p>")
    }else if(inppt2==33){
        $('#changer').append("<h2>McPuddock </h2> <p>The mechanical diving frog in the Fern House pond is a constant source of delight for all ages. He was presented to the Winter Gardens by the North East of Scotland Federation of Towns Woman’s Guild. </p>")
    }else if(inppt2==34){
        $('#changer').append("<h2>Peace </h2> <p>Presented by the family of James Dougall Rust, granite merchant it was bequeathed to the city by Muriel Rust on behalf of her late husband in 1991. The seven foot high sculpture of a liberty figure dressed in classical robes and holding a torch is thought to have been sculpted around 1930 by James Philip, who was responsible for parts of the work on the King Edward VII statue at Union Street and the war memorial lion next to Aberdeen Art Gallery. It is of particular interest because of the skill and time involved in fashioning granite. Originally sited in the Sensory Garden at Victoria Park, Rosemount it was relocated here in May 2005. </p>")
    }else if(inppt2==35){
        $('#changer').append("<h2>Multi-Facetted Sundial </h2> <p>This 1707 sundial pre-dates both the park and Arthurseat House. As well as a sundial for telling the time, there are dials which could be used to make astronomical observations of the earth’s orbit and movement in the solar system. They had to be specifically made to match the latitude of their location, and hence angle of sun, in Aberdeen’s case, 57° North. </p>")
    }else if(inppt2==36){
        $('#changer').append("<h2>Kelly’s Cats< </h2> <p>Sydney Boyes (1878-1931), Southampton, England, 1910, cast iron painted black, Known locally as ‘Kelly’s Cats’, they are in fact leopards from the city coat of arms and were once ranged along the two parapets of Union Bridge (see enty 16). The name ‘Kelly’s Cats’ is actually a misnomer, as only the bronze panels from the bridge were designed by Aberdeen architect William Kelly. The cast iron leopard finials were actually designed by Sidney Boyes, who taught at Grays School of Art, Aberdeen. </p>")
    }else if(inppt2==37){
        $('#changer').append("<h2> Wooden Figures</h2> <p>  These wood carvings were originally situated in the park specifically for children to play on. They were carved by students of Aberdeen Gray’s School of Art in Garthdee, who were employed by the Parks Department during the summers of 1971, 1972, and 1973.</p>")
    }else if(inppt2==38){
        $('#changer').append("<h2> Oak Wheelbarrow</h2> <p> This is the original used by Miss Duthie and the Earl of Aberdeen during the cutting of the first turf on 27th August 1881. It is of finely polished oak with the Duthie arms and the family motto ‘Data Fata Sectus’. It was made by Mr T Baird Cabinet maker of Aberdeen.</p>")
    }else if(inppt2==39){
        $('#changer').append("<h2>Provost’s Lamps </h2> <p>  These are placed on either side of the doorway of Aberdeen Provost’s houses. The tradition comes from an old English custom of marking the Chief Magistrate’s house. The first Scottish ones were in Edinburgh, then later other cities with the first pair set up in Aberdeen in 1838.</p>")
    }else if(inppt2==40){
        $('#changer').append("<h2>Stained Glass Windows </h2> <p> These are the original windows from the public toilets on the lower Promenade near the Beach Ballroom. To mark their Golden Jubilee in 1971, the Soroptimist International Society paid for their restoration. Two windows hang together and the third is by the café.</p>")
    }


}

