const element = document.querySelectorAll('[data-anima]');
const clas = "animate";
var galeria = document.getElementById('galeria');
var imagens = [1,2,3,4, 'img1', 'img2', 'img3', 'img4',2];



if(element.length){
	window.addEventListener('scroll', ()=>{
		animaScroll();
	});

	window.addEventListener('load', ()=>{
		animaScroll();
	});
}


/*LYOUT AND FILES LOADER*/
function galleryLoader(){
	for(img of imagens){

		galeria.innerHTML+=`
		<div class="col-md-4 col-xs-6 py-1">
        <a href="" data-toggle="modal" data-target="#id${img}">
          <img src="${img}.jpg" class="img-fluid" >
        </a>
      </div>

      <div class="modal fade" id="id${img}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class=" p-2 ml-2 bg-light" aria-hidden="true">&times;</span>
          </button>
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <img src="${img}.jpg" alt="" class="img-fluid">
        </div>
      </div>
		`
	}
}


/*OWL CAROUSEL LOADER*/

function owlCarouseLoader(){

	$(".owl-carousel").owlCarousel({

			items: 2,
			loop: true,
			margin: 10,
			nav: true,
			navText:["Ant", "Prox"],
			autoplay: true
	});
}

 /* SCROLL ANIMATION */

 function animaScroll(){
	const topo = window.pageYOffset + ((window.innerHeight*3)/3.8);
	element.forEach((element)=>{
		if(topo > element.offsetTop){
			element.classList.add(clas);
		}else{
			element.classList.remove(clas);
		}
	})
}




class layoutContent{

	constructor(img, desc, title, layout){
		this.img = img;
		this.desc = desc;
		this.title = title;
		this.layout = layout;		
	}
}


window.addEventListener('load', ()=>{;
	animaScroll();
	owlCarouseLoader();
	galleryLoader();



	/*LAYOUT*/

})