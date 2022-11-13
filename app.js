const containers = [...document.querySelectorAll('.card-container')]

for (let container of containers) {
    let card = container.querySelector('.card')

    // Moving animation event
    container.addEventListener('mousemove', (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const offsetX = e.clientX - rect.left
        const offsetY = e.clientY - rect.top
        let xAxis = (((container.offsetWidth / 2) - offsetX) / 20) * -1;
        let yAxis = ((container.offsetHeight / 2) - offsetY) / 20;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })
    
    // animate In
    container.addEventListener('mouseenter', (e) => {
        card.style.transition = '.3s ease-out'
    })
    
    // animate Out
    container.addEventListener('mouseleave', (e) => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)'
        card.style.transition = '.6s ease'
    })
}

document.querySelector('#cards').addEventListener('mousemove', () => {
    document.querySelector('#cards').scrollIntoView()
}, {once: true})
