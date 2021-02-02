let button1 = document.querySelector('#id1')

let button2= document.querySelector('#id2')

let cat=[ 'https://www.twitch.tv',
            'https://www.youtube.com/',
            'https://www.hltv.org',
            'https://www.faceit.com/ru/pubg'

]

function random(a,b){
    return Math.floor(Math.random()*(a-b)+a)
}

button1.addEventListener('click',function(){
    window.location.href = cat[random(0,4)]
})

button2.addEventListener('click', function(){ 
document.body.style.backgroundColor = '#800080'
})
