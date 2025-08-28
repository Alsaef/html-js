let coinsText=document.getElementById('coins')

let callBtn=document.querySelectorAll('.callBtn')

let coins=parseInt(coinsText.innerText)
// let cardTarget=document.querySelectorAll('card')




callBtn.forEach(btn=>{
console.log(btn);
  btn.addEventListener('click',function(){
    console.log('dddd');

      let conisSet= coinsText

     conisSet.innerText =coins-=3

       alert('history counted')


       
      
  })

})


