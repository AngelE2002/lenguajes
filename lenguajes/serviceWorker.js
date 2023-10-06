const staticFunkos = "dev-funko-site-v1"


const assets = [

    "/",
    "/index.html",
    "/css/styles.css",
    "/js/app.js",
    "/images/Python.png",
    "/images/c.png",
    "/images/css.png",
    "/images/Java2.jpg",
    "/images/Flutter.png",
    "/images/py.webp",
    "/images/go.png"

];

async function preCache(){

    const cache = await caches.open(staticFunkos)
    return cache.addAll(assets);


}




self.addEventListener("install",installEvent => {
    installEvent.waitUntil(preCache());
})


async function cacheFirst(request){

const cacheResponse = await caches.match(request);

if(cacheResponse){
    return cacheResponse
}

try {
 const networkResponse = await fetch(request);

 if(networkResponse.ok){

const cache= await caches.open(staticFunkos);
cache.put(request, networkResponse.clone());

 }

 return networkResponse;
}
catch( error ){
    return Response.error();
}



}

/////

self.addEventListener("fetch", fetchEvent =>{
fetchEvent.respondWith(cacheFirst(fetchEvent.request))
})

///

if("serviceWorker" in navigator){

   // console.log("Si soporta SW")

   window.addEventListener("load", function(){

    this.navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("Se registro satisfactoriamente"))
        .catch(err => console.log("No se registro el service Worker"))
   })

}

