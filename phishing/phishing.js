 const galleryItems=document.querySelector(".gallery-items").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const page=document.querySelector(".page-num");
 const maxItem=1;
 let index=1;
  
  const pagination=(galleryItems.length/maxItem);
  console.log(pagination)

  prev.addEventListener("click",function(){
    index--;
    check();
    showItems();
})
  next.addEventListener("click",function(){
  	index++;
  	check();
    showItems();  
})

  function check(){
  	 if(index==pagination){
  	 	next.classList.add("disabled");
  	 }
  	 else{
  	   next.classList.remove("disabled");	
  	 }

  	 if(index==1){
  	 	prev.classList.add("disabled");
  	 }
  	 else{
  	   prev.classList.remove("disabled");	
  	 }
  }

  function showItems() {
  	 for(let i=0;i<galleryItems.length; i++){
  	 	galleryItems[i].classList.remove("show");
  	 	galleryItems[i].classList.add("hide");

  	    if(i>=(index*maxItem)-maxItem && i<index*maxItem){
          galleryItems[i].classList.remove("hide");
          galleryItems[i].classList.add("show");
  	    }
  	    page.innerHTML = `${index}/${pagination}`;
  	 }
	 	
}

  window.onload=function(){
  	showItems();
  	check();
}

// pop up
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

function legit(){
  console.log("legit clicked");
console.log("legit index: " + index)
if (index == 2 || index == 4 || index == 5){
  openModal(document.getElementById('wrong-modal'));
}
else{
  openModal(document.getElementById('correct-modal'));
}
}

function phish(){
  console.log("phish clicked")
console.log("phishing index: " + index)
if (index == 1 || index == 3){
  // openModal(modal)
  openModal(document.getElementById('wrong-modal'));

}
else{
  openModal(document.getElementById('correct-modal'));
}

}

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
	
 	 scrollTop =  window.pageYOffset || document.documentElement.scrollTop;
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;	
	window.onscroll = function () {
		window.scrollTo(scrollLeft, scrollTop);
	};
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  window.onscroll = null;
}