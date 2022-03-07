const button = document.querySelectorAll('.ripple')

button.forEach(button => {
    button.addEventListener('click', function(e) {
        //Finding out where clicked on the viewspace 
        const x = e.clientX
        const y = e.clientY

        //Finding out the boundary of the button
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        //Finding out where in the button clicked, top left 
        //is 0,0
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        //Removes the element from the DOM
        setTimeout(() => circle.remove(), 500)
    })
})