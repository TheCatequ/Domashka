let button = document.querySelector('#id1')

let button1= document.querySelector('#id2')

let link=[ 'https://www.twitch.tv',
            'https://www.youtube.com/',
            'https://www.hltv.org',
            'https://www.faceit.com/ru/pubg'

]

function random(n,x){
    return Math.floor(Math.random()*(x-n)+n)
}

button.addEventListener('click',function(){
    window.location.href = link[random(0,4)]
})

button1.addEventListener('click', function(){ 
document.body.style.backgroundColor = '#800080'
})