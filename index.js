function clock(){

    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am=document.getElementById("am");

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

    var d;
    if(hours <= 12) {
        d="AM";
    } else{
        d="PM";
    } 
    a = ((a + 11) % 12 + 1);

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    am.innerHTML=d;
}
setInterval(clock, 1000);

function Makeupper(){
    var container=document.createElement("div");
    container.className="grid-item";
    container.id="dynamic-block-1";

    document.getElementById("grid-container1").appendChild(container);


    var i=document.getElementById("wakeUpTimeSelector").value;
    var hour=new Date().getHours();

    if(i==hour){
        document.getElementById('dynamic-block-1').innerHTML="Good Morning! Wake Up!";
    }

    i=document.getElementById("lunchTimeSelector").value;
    if(i==hour){
        document.getElementById('dynamic-block-1').innerHTML="Good Afternoon! Take Some Sleep";
    }

    i=document.getElementById("napTimeSelector").value;
    if(i==hour){
        document.getElementById('dynamic-block-1').innerHTML="Good Evening!";
    }

    i=document.getElementById("nightTimeSelector").value;
    if(i==hour){
        document.getElementById('dynamic-block-1').innerHTML="Good Night!";
    }
}

function Makediv(){
    var container=document.createElement("div");
    container.className="grid-item";
    container.id="dynamic-block";

    document.getElementById("grid-container1").appendChild(container);

    var invalue=document.getElementById("wakeUpTimeSelector");
    var value=invalue.options[invalue.selectedIndex].text;
    var lunch=document.getElementById("lunchTimeSelector");
    var lunchval=lunch.options[lunch.selectedIndex].text;
    var nap=document.getElementById("napTimeSelector");
    var napvalue=nap.options[nap.selectedIndex].text;
    var night=document.getElementById("nightTimeSelector");
    var nightvalue=night.options[night.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="Wake up time : "+value+"<br>Lunch time : "+lunchval+"<br>Nap time : "+napvalue+"<br>Night time : "+nightvalue;

    // Makeupper();
}

function settime(){

    var i=document.getElementById("wakeUpTimeSelector").value;
    var hour=new Date().getHours();

    if(i==hour){
        document.getElementById('img-container').style.backgroundImage="url(./assests/Component30–1.svg)";
        document.getElementById('text-container').innerHTML="Grab some healthy breakfast!";
    }

    i=document.getElementById("lunchTimeSelector").value;
    if(i==hour){
        document.getElementById('img-container').style.backgroundImage="url(./assests/Component31–1.svg)";
        document.getElementById('text-container').innerHTML="Let's have some lunch!";
    }

    i=document.getElementById("napTimeSelector").value;
    if(i==hour){
        document.getElementById('img-container').style.backgroundImage="url(./assests/lunch_image.png)";
        document.getElementById('text-container').innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }

    i=document.getElementById("nightTimeSelector").value;
    if(i==hour){
        document.getElementById('img-container').style.backgroundImage="url(./assests/GroupNight.svg)";
        document.getElementById('text-container').innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
    }
    Makediv();
    Makeupper();
}