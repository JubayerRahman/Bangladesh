
    const anthem = new Audio('music/anthem.mp3');
    const icon = document.getElementById('icon');
    const icon2 = document.getElementById('icon2');
document.getElementById('nationalAnthem').addEventListener('click',()=>{
    if(anthem.paused || anthem.currentTime <= 0){
        anthem.currentTime = 0
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        console.log("play")
        anthem.play();
    }
    else{
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        anthem.pause();
        console.log("pause")
    }
})

const ronosongit = new Audio('music/ronosongit.mp3');

document.getElementById('ronrdongit').addEventListener('click',()=>{
    if(ronosongit.paused || ronosongit.currentTime <= 0){
        ronosongit.currentTime = 0
        icon2.classList.remove('fa-play');
        icon2.classList.add('fa-pause');
        console.log("play")
        ronosongit.play();
    }
    else{
        icon2.classList.remove('fa-pause');
        icon2.classList.add('fa-play');
        ronosongit.pause();
        console.log("pause")
    }
})