const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const location1 = "https://www.google.com/maps/embed?pb=!4v1634037219498!6m8!1m7!1si_KCZULFOFPktBAvTske2A!2m2!1d52.31940201776736!2d4.574023403533804!3f115.06077041181338!4f17.26147147122458!5f0.6706194944150499"
const location1_now = "https://www.google.com/maps/embed?pb=!4v1634035228278!6m8!1m7!1sD8dy7MUPHSVNfeNGrHR_jg!2m2!1d37.01071479227894!2d37.79717804131948!3f70.45209929645083!4f0.6096125392529359!5f0.7820865974627469"
const location2 = "https://www.google.com/maps/embed?pb=!4v1634044176161!6m8!1m7!1sCAoSLEFGMVFpcFBGNGFkMWhBRTVjVGZITlBBLUJfaFl2TFpsQ0RPYWQ3M3hHN0ta!2m2!1d52.36394530063137!2d4.896167760495587!3f336.17892797128!4f-11.54856712527409!5f0.7820865974627469"
const location2_now = "https://www.google.com/maps/embed?pb=!4v1634035228278!6m8!1m7!1sD8dy7MUPHSVNfeNGrHR_jg!2m2!1d37.01071479227894!2d37.79717804131948!3f70.45209929645083!4f0.6096125392529359!5f0.7820865974627469"
const location3 = "https://www.google.com/maps/embed?pb=!4v1634044330846!6m8!1m7!1sxCVfqyN-Y_SZ7KRKshsoGg!2m2!1d52.36826091287725!2d4.897546028032399!3f25.093862902312566!4f-22.02420906433352!5f1.1924812503605782"
const location3_now = "https://www.google.com/maps/embed?pb=!4v1634035228278!6m8!1m7!1sD8dy7MUPHSVNfeNGrHR_jg!2m2!1d37.01071479227894!2d37.79717804131948!3f70.45209929645083!4f0.6096125392529359!5f0.7820865974627469"
const location4 = "https://www.google.com/maps/embed?pb=!4v1634044366387!6m8!1m7!1sSR955aJXM4ILbPL7Te59Aw!2m2!1d52.36935847723119!2d4.901749024372501!3f120.29985002870198!4f-7.934748951861167!5f0.7820865974627469"
const location4_now = "https://www.google.com/maps/embed?pb=!4v1634035228278!6m8!1m7!1sD8dy7MUPHSVNfeNGrHR_jg!2m2!1d37.01071479227894!2d37.79717804131948!3f70.45209929645083!4f0.6096125392529359!5f0.7820865974627469"

//on scroll load nav title
window.onscroll = function(event){
    if(window.scrollY < 0.7 * vh){
        document.getElementById("nav_location").innerHTML = "Home";
      }
    if(window.scrollY >= 0.7 * vh){
      document.getElementById("nav_location").innerHTML = "About";
    }
    if(window.scrollY >= 2 * 0.7 * vh){
      document.getElementById("nav_location").innerHTML = "Map";
    }
  };

  (function(){
    init();

    var g_containerInViewport;
    function init(){
        setStickyContainersSize();
        bindEvents();
    }

    function bindEvents(){
        window.addEventListener("wheel", wheelHandler);        
    }

    function setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach(function(container){
            const stikyContainerHeight = (container.querySelector('.vertical-main').offsetWidth * 2.5 + window.innerHeight);
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }

    function isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt){
        
        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
            return isElementInViewport(container);
        })[0];

        if(!containerInViewPort){
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if(g_canScrollHorizontally){
            containerInViewPort.querySelector('.vertical-main').scrollLeft += ( evt.deltaY);
        }
    }
})();


map_controlls = (pin) => {

    switch(pin){
        case "pin1":
            console.log("pin 1 clicked");
            document.getElementById("maps_image").src = location1;
            break;
        case "pin2":
            console.log("pin 2 clicked");
            document.getElementById("maps_image").src = location2;
            break;
        case "pin3":
            console.log("pin 3 clicked");
            document.getElementById("maps_image").src = location3;
            break;
        case "pin4":
            console.log("pin 4 clicked");
            document.getElementById("maps_image").src = location4;
            break;
    }
};

change_time = () => {

    switch(document.getElementById("maps_image").src){
        case location1:
            document.getElementById("maps_image").src = location1_now;
            change_time_button("then");
            break;
        case location1_now:
            document.getElementById("maps_image").src = location1;
            change_time_button("now");
            break;
        case location2:
            document.getElementById("maps_image").src = location2_now;
            change_time_button("then");
            break;
        case location2_now:
            document.getElementById("maps_image").src = location2;
            change_time_button("now");
            break;
        case location3:
            document.getElementById("maps_image").src = location3_now;
            change_time_button("then");
            break;
        case location3_now:
            document.getElementById("maps_image").src = location3;
            change_time_button("now");
            break;
        case location4:
            document.getElementById("maps_image").src = location4_now;
            change_time_button("then");
            break;
        case location4_now:
            document.getElementById("maps_image").src = location4;
            change_time_button("now");
            break;
    }
}

change_time_button = (text) => {
    document.getElementById("now_button").innerHTML = text;
}

//Map pins displaying after clicking
let pn = 0;
for(let i = 0; i < document.getElementsByClassName("pin").length; i++){
    document.getElementsByClassName("pin")[i].onclick = function() {
        document.getElementsByClassName("pin")[pn].style.opacity = "1";
        pn++;
    };
}


//info popup
var modalinfo = document.getElementById("popupModal");
var btninfo = document.getElementById("infoBtn");
var closepopup = document.getElementsByClassName("close_popup")[0];
btninfo.onclick = function() {
    modalinfo.style.display = "block";
}
closepopup.onclick = function() {
    modalinfo.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalinfo) {
    modalinfo.style.display = "none";
    }
}

//map popup
// Get the modal
var modalmap = document.getElementById("mapModal");

// Get the button that opens the modal
var btnmap = document.getElementById("mapBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_modal")[0];

// When the user clicks the button, open the modal 
btnmap.onclick = function() {
    modalmap.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalmap.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalmap) {
    modalmap.style.display = "none";
    }
}