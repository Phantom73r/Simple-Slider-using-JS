var imgList=document.querySelectorAll(".item img")
var lightBoxContainer=document.querySelector('.lightBoxContainer')
var closeBtn=document.querySelector('#closeBtn')
var imgArr=Array.from(imgList);
var currentIndex;

// console.log(imgArr);


for(var i=0;i<imgArr.length;i++){
    imgArr[i].addEventListener('click', function(e){
        lightBoxContainer.classList.remove('d-none')
       var imgSrc=e.target.getAttribute('src')
       currentIndex=imgArr.indexOf(e.target)
      lightBoxContainer.firstElementChild.style.backgroundImage= `url(${imgSrc})`
        
    }  )
}



closeBtn.addEventListener('click', function(e){
    lightBoxContainer.classList.add('d-none')
})

closeBtn.nextElementSibling.addEventListener('click',function(e){
    slide()
})
closeBtn.previousElementSibling.addEventListener('click',function(e){
    slide()
})

function slide(){
    currentIndex+=1
    if(currentIndex==imgArr.length){
        currentIndex=0
    }else if(currentIndex<0){
        currentIndex=imgArr.length-1
    }
 
    var imgSrc=imgArr[currentIndex].getAttribute('src')

    lightBoxContainer.firstElementChild.style.backgroundImage=`url(${imgSrc})`
}
lightBoxContainer.firstElementChild.addEventListener('click',function(e){
    e.stopPropagation()
    // lightBoxContainer.classList.add('d-none')
})

lightBoxContainer.addEventListener('click',function(e){
    // e.stopPropagation()
    lightBoxContainer.classList.add('d-none')
})
