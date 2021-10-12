const location1 = "https://www.google.com/maps/embed?pb=!4v1634037219498!6m8!1m7!1si_KCZULFOFPktBAvTske2A!2m2!1d52.31940201776736!2d4.574023403533804!3f115.06077041181338!4f17.26147147122458!5f0.6706194944150499"
const location1_now = "https://www.google.com/maps/embed?pb=!4v1634035228278!6m8!1m7!1sD8dy7MUPHSVNfeNGrHR_jg!2m2!1d37.01071479227894!2d37.79717804131948!3f70.45209929645083!4f0.6096125392529359!5f0.7820865974627469"
const location2 = "https://www.google.com/maps/embed?pb=!4v1634044176161!6m8!1m7!1sCAoSLEFGMVFpcFBGNGFkMWhBRTVjVGZITlBBLUJfaFl2TFpsQ0RPYWQ3M3hHN0ta!2m2!1d52.36394530063137!2d4.896167760495587!3f336.17892797128!4f-11.54856712527409!5f0.7820865974627469"
const location2_now = "https://www.google.com/maps/embed?pb=!4v1634035228278!6m8!1m7!1sD8dy7MUPHSVNfeNGrHR_jg!2m2!1d37.01071479227894!2d37.79717804131948!3f70.45209929645083!4f0.6096125392529359!5f0.7820865974627469"
const location3 = "https://www.google.com/maps/embed?pb=!4v1634044330846!6m8!1m7!1sxCVfqyN-Y_SZ7KRKshsoGg!2m2!1d52.36826091287725!2d4.897546028032399!3f25.093862902312566!4f-22.02420906433352!5f1.1924812503605782"
const location3_now = "https://www.google.com/maps/embed?pb=!4v1634035228278!6m8!1m7!1sD8dy7MUPHSVNfeNGrHR_jg!2m2!1d37.01071479227894!2d37.79717804131948!3f70.45209929645083!4f0.6096125392529359!5f0.7820865974627469"
const location4 = "https://www.google.com/maps/embed?pb=!4v1634044366387!6m8!1m7!1sSR955aJXM4ILbPL7Te59Aw!2m2!1d52.36935847723119!2d4.901749024372501!3f120.29985002870198!4f-7.934748951861167!5f0.7820865974627469"
const location4_now = "https://www.google.com/maps/embed?pb=!4v1634035228278!6m8!1m7!1sD8dy7MUPHSVNfeNGrHR_jg!2m2!1d37.01071479227894!2d37.79717804131948!3f70.45209929645083!4f0.6096125392529359!5f0.7820865974627469"

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