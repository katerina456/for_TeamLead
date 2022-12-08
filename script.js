document.addEventListener('DOMContentLoaded', initSlider)
document.addEventListener('DOMContentLoaded', initTimer)

function initSlider() {
    let comments = document.querySelectorAll('.feedback-item')

    for(let i = 0; i < comments.length; i++) {
        let comment = comments[i]
        comment.dataset.index = i
    }

    let left = document.querySelector('.left')
    let right = document.querySelector('.right')

    left.addEventListener('click', changeComment)
    right.addEventListener('click', changeComment)

    function changeComment(event) {
        let btn = event.target
        let number
        comments.forEach(comment => {
            if (comment.classList.contains('active')) {
                number = +comment.dataset.index
                comment.classList.toggle('active')
            }
        })

        if (btn.classList.contains('left')) {
            number --
        } else {
            number ++
        }

        if (number < 0) {
            number = comments.length - 1
        }
        if (number >= comments.length) {
            number = 0
        }

        comments[number].classList.toggle('active')
    }
}


let inputs = document.querySelectorAll('.input')

inputs.forEach(input => {
    input.addEventListener('focus', toggleInfo)
})

inputs.forEach(input => {
    input.addEventListener('change', toggleInfo)
})

function toggleInfo(event) {
    let child = event.target
    let parent = child.parentElement
    let info = parent.querySelector('.info-form')
    info.classList.toggle('active')
}

function initTimer() {
    let hour = document.getElementById('hour')
    let hourValue = +hour.textContent
    
    let minit = document.getElementById('minit')
    let minitValue = +minit.textContent

    const myTymer = setInterval(function() {
        minitValue = minitValue - 1;
        if (minitValue < 0) {
            minitValue = 59;
            hourValue = hourValue - 1;
        }
    
        hour.innerText = hourValue
        minit.innerText = minitValue

        if (minitValue < 10) {
            minit.innerText = '0' + minitValue
        }
         
        console.log('tick')

        if (hourValue == 0 && minitValue == 00) {
            clearInterval(myTymer);
          }
    }, 1000);

}
