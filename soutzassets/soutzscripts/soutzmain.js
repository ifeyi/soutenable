let soutzNavButton = document.querySelector("#soutzNavButton");
let soutzMenuOpened = document.querySelector("#soutzMenuOpened");
let soutzX = document.querySelector("#soutzX");
let soutzY = document.querySelector("#soutzY");
let soutzZ = document.querySelector("#soutzZ");

let soutzLoading = document.querySelectorAll('.soutzLoading');

let ii = 100;

soutzLoading.forEach((elt) => {

    ii += 100;
    
    setTimeout(() => {
      elt.classList.remove("soutzDisplayNone");
    }, ii);
});

addEventListener("load", () => {
    soutzLoadingDiv.classList.add("soutzDisplayNone");
});

soutzNavButton.addEventListener("click", () => {

    soutzMenuOpened.classList.toggle("soutzNavShown");

    soutzX.classList.toggle("collapse");
    soutzY.classList.toggle("collapse");
    soutzZ.classList.toggle("collapse"); 
    
    setTimeout(() => {
        soutzY.classList.toggle("soutzDisplayNone");
        soutzX.classList.toggle("rotate30");
        soutzZ.classList.toggle("rotate150");
      }, 70);
    
    setTimeout(() => {
      soutzX.classList.toggle("rotate45");
      soutzX.classList.toggle("xhover");
      soutzZ.classList.toggle("rotate135"); 
    }, 120);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function(){
    let header = document.querySelector('#soutzHeader');
    let soutzToTopBtn = document.querySelector('#soutzToTopBtn');
    let soutzObservatoire = document.querySelector('#soutzObservatoire');
    let soutzFresque = document.querySelector('#soutzFresque');

    if(soutzObservatoire && soutzFresque){
        let soutzDistanceFresque = soutzObservatoire.offsetTop + soutzFresque.offsetHeight;
        soutzIconFresque.classList.toggle("soutzJoined", window.scrollY > soutzDistanceFresque);
    }
    header.classList.toggle("soutzFixed", window.scrollY > 100);
    soutzToTopBtn.classList.toggle("soutzOnSight", window.scrollY > 600);
});


let soutzAccordionWrapper = document.querySelectorAll('.soutzAccordionWrapper');

soutzAccordionWrapper.forEach((element) => {

    element.addEventListener("click", () => {

        soutzAccordionWrapper.forEach((elt) => {
            
            if(!elt.querySelector('.soutzAccordionText').classList.contains("soutzAccordionTextClose")){
                elt.querySelector('.soutzAccordionText').classList.add("soutzAccordionTextClose");
            }
        });

        element.querySelector('.soutzAccordionText').classList.remove("soutzAccordionTextClose");
        
    });
});