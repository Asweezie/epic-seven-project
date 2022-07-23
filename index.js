document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
    try {
        const keyword = document.querySelector('input').value
        const response = await fetch(`https://epic-seven-api.herokuapp.com/api/${keyword}`)
        const data = await response.json()
        
        if (data != 'sucks to suck') {
                    // Clears previous elements
        document.querySelectorAll("img").forEach(img => img.remove());

        previousText = document.querySelectorAll('h3')
        previousText.forEach(item => {
            item.textContent = '';
        })

    // Adds content to elements
        for (property in data) {
        const newHeader = document.createElement('h3')
        newHeader.textContent = property
        document.body.appendChild(newHeader)
        const newImage = document.createElement('img')
        newImage.src = data[property].img
        document.body.appendChild(newImage)
        }
        } else {
           let invalidHeader = document.createElement('h3')
           invalidHeader.textContent = 'Invalid Entry'
           document.body.appendChild(invalidHeader)
        }


    } catch (error) {
        console.error(error)
    }
    
}