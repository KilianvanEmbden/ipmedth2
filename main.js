const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const location1 = '<img src="img/aleppo_bazaar.jpg" alt="Ja zo werkt het niet">';
const location1_now = '<iframe src="https://www.google.com/maps/embed?pb=!4v1636477612142!6m8!1m7!1sCAoSLEFGMVFpcE9hTElKb21RU1NTZ1NBQWFXOUFNTWpTcjB4NEJQNnh2REJzMUtX!2m2!1d36.1990241!2d37.1553991!3f87.78865308271607!4f2.5427527478630765!5f0.7820865974627469" width="100%" height="100%" style="border:0;" loading="lazy"></iframe>';

const location2 = '<img src="img/aleppo_alley.jpg" alt="Ja zo werkt het niet">';
const location2_now = '<iframe id="maps_image" src="https://www.google.com/maps/embed?pb=!4v1636477821670!6m8!1m7!1sCAoSLEFGMVFpcE1FbEpqOTRGQ0E5blZSOWFKVWExbi11T1RzaFJ4T0w2cE5UWlAy!2m2!1d36.1997509!2d37.1554446!3f347.51607975480334!4f4.003654735640197!5f0.7820865974627469" width="100%" height="100%" style="border:0;" loading="lazy"></iframe>';

const location3 = '<img src="img/aleppo_hotel.jpg" alt="Ja zo werkt het niet">';
const location3_now = '<iframe src="https://www.google.com/maps/embed?pb=!4v1636477485293!6m8!1m7!1sCAoSLEFGMVFpcE5WYUNKNlBUVFU3TnZ2VUdWVEE2ekNrVkFQSTNIdWFwV0pxa2hv!2m2!1d36.19943253354922!2d37.15604440646581!3f179.8855895586535!4f2.540210612629764!5f0.7820865974627469" width="100%" height="100%" style="border:0;" loading="lazy"></iframe>'

const location4 = '<img src="img/aleppocastle.jpg" alt="Ja zo werkt het niet">';
const location4_now = '<iframe src="https://www.google.com/maps/embed?pb=!4v1636478165021!6m8!1m7!1sCAoSLEFGMVFpcFBKRkpEa3ppMG9pSXFVRVRSMllIaXlmOFlWa29GRWRFNDB5bTJj!2m2!1d36.1980571!2d37.1617434!3f229.42019062868306!4f-11.528123613091907!5f0.7820865974627469" width="100%" height="100%" style="border:0;" loading="lazy"></iframe>'

const location5 = '<img src="img/great_mosque_of_aleppo.jpg" alt="Ja zo werkt het niet">';
const location5_now = '<iframe src="https://www.google.com/maps/embed?pb=!4v1636478411077!6m8!1m7!1sCAoSLEFGMVFpcE1iNkc0TXR4YWtNNTB4TVd4TDNtamJSXzJ6OGtyZG9YajBwZW5o!2m2!1d36.1997221!2d37.1638606!3f200.69872616975684!4f-23.515257967737966!5f0.7820865974627469" width="100%" height="100%" style="border:0;" loading="lazy"></iframe>'


//on scroll load nav title
window.onscroll = function(event){
    if(window.scrollY < 0.7 * vh){
        document.getElementById("nav_location").innerHTML = "Home";
      }
    if(window.scrollY >= 0.7 * vh){
      document.getElementById("nav_location").innerHTML = "About";
    }
    if(window.scrollY >= 14.7 * vh){
      document.getElementById("nav_location").innerHTML = "Map";
    }
  };

  //music player spinning 
  document.getElementById("radio_player_iframe").addEventListener("mouseover", function(){
      console.log("if teogevoegd");
    setInterval
      if(window.event === 0){
        console.log("Nu draaien bitch");
        document.getElementById("radio_player_img").style.animation = "rotate360 4s linear infinite";
    }
});

  //horizontal scroll script
  //alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/
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

    //How much does user need to scroll
    function setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach(function(container){
            const stikyContainerHeight = (container.querySelector('.vertical-main').offsetWidth * 2.5 +  window.innerHeight);
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }

    function isElementInViewport (el) {
        //Returns scroll position of user on screen
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

        //compares scroll and size of containers to show current element
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        var isPlaceHolderBelowTop = + containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if(g_canScrollHorizontally){
            containerInViewPort.querySelector('.vertical-main').scrollLeft += ( evt.deltaY);
        }
    }
})();


map_controlls = (pin) => {
    change_time_button("nu");

    switch(pin){
        case "pin1":
            console.log("pin 1 clicked");
            document.getElementById("iframe_img_container").innerHTML = location1;
            document.getElementById("pin2").style.display = "block";
            modalinfo.style.display = "block";
            document.getElementById("popupTitle").innerHTML = "De markt";
            document.getElementById("popupContent").innerHTML = "Eerst was dit een bruisende markt, echter is nu alleen nog maar een gang en een hoop puin over. De heropbouw is begonnen maar het zal nog een tijd duren voordat mensen hier weer hun spullen zullen verkopen.";
            break;
        case "pin2":
            console.log("pin 2 clicked");
            document.getElementById("iframe_img_container").innerHTML = location2;
            document.getElementById("pin3").style.display = "block";
            modalinfo.style.display = "block";
            document.getElementById("popupTitle").innerHTML = "Een woonwijk";
            document.getElementById("popupContent").innerHTML = "Vele straten zijn verwoest door de oorlog. Veel van het puin is al opgeruimd maar er moet nog veel gebeuren voordat alle straten weer bruikbaar zijn.";
            break;
        case "pin3":
            console.log("pin 3 clicked");
            document.getElementById("iframe_img_container").innerHTML = location3;
            document.getElementById("pin4").style.display = "block";
            modalinfo.style.display = "block";
            document.getElementById("popupTitle").innerHTML = "Het hotel";
            document.getElementById("popupContent").innerHTML = "Dit beeldschone hotel is met haast verlaten toen de oorlog begon. Ook al hebben de bommen dit gebouw voor het grootste deel gemist mist er toch een stok uit de muur, ook zitten de muren vol kogelgaten van gevechten die hier plaats hebben gevonden.";
            break;
        case "pin4":
            console.log("pin 4 clicked");
            document.getElementById("iframe_img_container").innerHTML = location4;
            document.getElementById("pin5").style.display = "block";
            modalinfo.style.display = "block";
            document.getElementById("popupTitle").innerHTML = "De poort";
            document.getElementById("popupContent").innerHTML = "Deze poort aan de rand van de stad is gepaard gebleven, hier werd niet veel gevochten. Ook al ziet dit deel van de stad er een stuk beter uit dan de rest van de stad, zien we nogsteeds ingestorte en verwoeste gebouwen op de achtergrond.";
            break;
        case "pin5":
            console.log("pin 4 clicked");
            document.getElementById("iframe_img_container").innerHTML = location5;
            modalinfo.style.display = "block";
            document.getElementById("popupTitle").innerHTML = "De citadel";
            document.getElementById("popupContent").innerHTML = "Ooit een van de grootste en oudste kastelen in de wereld en een plek voor de inwoners van Kobani om samen te komen is met de grond gelijk gemaakt. Een stuk geschsiedenis verloren gegaan aan de oorlog dat nooit meer terug zal keren naar de oude staat.";
            break;
    }
};

change_time = () => {

    switch(document.getElementById("iframe_img_container").innerHTML){
        case location1:
            document.getElementById("iframe_img_container").innerHTML = location1_now;
            change_time_button("toen");
            break;
        case location1_now:
            document.getElementById("iframe_img_container").innerHTML = location1;
            change_time_button("nu");
            break;
        case location2:
            document.getElementById("iframe_img_container").innerHTML = location2_now;
            change_time_button("toen");
            break;
        case location2_now:
            document.getElementById("iframe_img_container").innerHTML = location2;
            change_time_button("nu");
            break;
        case location3:
            document.getElementById("iframe_img_container").innerHTML = location3_now;
            change_time_button("toen");
            break;
        case location3_now:
            document.getElementById("iframe_img_container").innerHTML = location3;
            change_time_button("nu");
            break;
        case location4:
            document.getElementById("iframe_img_container").innerHTML = location4_now;
            change_time_button("toen");
            break;
        case location4_now:
            document.getElementById("iframe_img_container").innerHTML = location4;
            change_time_button("nu");
            break;
        case location5:
            document.getElementById("iframe_img_container").innerHTML = location5_now;
            change_time_button("toen");
            break;
        case location5_now:
            document.getElementById("iframe_img_container").innerHTML = location5;
            change_time_button("nu");
            break;
        default:
            console.log(document.getElementById("iframe_img_container").innerHTML);
            console.log(location1_now);
    }
}

change_time_button = (text) => {
    document.getElementById("now_button").innerHTML = text;
}   

//info popup
var modalinfo = document.getElementById("popupModal");
var btninfo = document.getElementById("pin1");
var closepopup = document.getElementsByClassName("close_popup")[0];

closepopup.onclick = function() {
    modalinfo.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalinfo) {
    modalinfo.style.display = "none";
    }
}

//foto, 360 popup
var modalmap = document.getElementById("mapModal");

var btnmap = document.getElementById("mapBtn");

var span = document.getElementsByClassName("close_modal")[0];

btnmap.onclick = function() {
    modalmap.style.display = "block";
}

span.onclick = function() {
    modalmap.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalmap) {
    modalmap.style.display = "none";
    }
}

//maak elements doe niet onder de scrollbar mogen verdwijnen kleiner als er een scrollbar is
window.onload = () =>{
    var scrollSize = window.innerWidth - document.documentElement.clientWidth;
    var newWidth = window.innerWidth - scrollSize  + "px";
    console.log(newWidth);
    document.getElementById("popupTitleContainer").style.width = newWidth;
    document.getElementById("mapModal").style.width = newWidth;
  }
