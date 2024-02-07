// create map
const map = L.map('mapid').setView([-36.9443557,174.7625083], 16); 

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker; 

// create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// add photo field
function addPhotoField() {
    // catch the photos container click #images
    const container = document.querySelector('#images')
    // catch the container to duplicate
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realize the clone of the last add photo
    const clonedFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    // verify if its empty. if it is, do not add to photos container
    const input = clonedFieldContainer.children[0]

    if(input.value == "") {
       return
    }
    //clean the field before adding at container
    input.value = ""
    // add clone to the #images container
    container.appendChild(clonedFieldContainer)
} 

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
  
    if(fieldsContainer.length <= 2) {
        //clean field
        span.parentNode.children[0].value = ""
        return
    }

    // delete field
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {

    //take off the class .active (of both buttons)
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active') //it can be like this IF ONLY HAVE ONE LINE: (button => button.classList.remove('active') ) 
    })
    //put the class .active on the clicked button
    // get the clicked button 
    const button = event.currentTarget
    button.classList.add('active')

    //upload my input hidden with the selected value
    const input = document.querySelector('[name="open_on_weekends"]')
    
    // verify if its yes or no
    input.value = button.dataset.value
}
