

function fetchPhotos(completion) {
    let photos = [] 

    // fetching photos from the web
    window.setTimeout(() => {
        photos = ["photo1","photo2"] // 100% sure we got the pictures
        completion(photos)  // send the pictures back using callback
    },2000)
}

function photosFetched(pictures) {
    console.log("Apply Pictures")
    console.log(pictures)
}

function photosFetchedApplySizing(pictures) {
    console.log("Apply Pictures")
    console.log(pictures)
}

fetchPhotos((pictures) => {
    // apply size 
})

fetchPhotos((pictures) => {
    // apply filters 
})



