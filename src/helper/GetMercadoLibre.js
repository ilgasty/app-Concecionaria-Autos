export const GetMercadoLibre = async() => {
    const url =`https://api.mercadolibre.com/sites/MLA/search?seller_id=773636527&q=automotores`;
    //const url ='https://api.mercadolibre.com/items/MLA925896402';
    const resp = await fetch(url);
    const {results}= await resp.json();
    const gifs = results.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.thumbnail
            //url:img.images?.downsized_medium.url
        }
    });
    //console.log(gifs);
    return gifs;
}
export const GetMercadoLibreitem = async(idprod) => {
    //const url =`https://api.mercadolibre.com/sites/MLA/search?seller_id=773636527&q=automotores`;
    const url ='https://api.mercadolibre.com/items/'+ idprod;
    const resp = await fetch(url);
    const {pictures}= await resp.json();
    //console.log(pictures);
    return pictures;
    //const gifs = results.map(img=>{
     //   return{
          //  id:img.id,
         //   title:img.title,
        //    url:img.pictures
            //url:img.images?.downsized_medium.url
      //  }
    //});
    //console.log(gifs);
    //return gifs;
}