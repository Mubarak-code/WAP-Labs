// alert("Welcome!");

function timer() {
    setInterval(ftn1, 500);
}

var limit = 3;

function ftn1() {
    if (limit > 0) {
        var text1 = document.getElementById("text1");
        // text1.style.fontSize = "24pt";
        text1.style.textAlign = "right";
        // var size = 12;
        // console.log(size);
        var size = window.getComputedStyle(text1, null).getPropertyValue("font-size");
        size = parseInt(size) + 2;
        text1.style.fontSize = size + "pt";
        limit--;
    } else {
        clearInterval(timer);
    }

    //console.log(size);

}

function ftn4() {
    var textArea = document.getElementById("text1");
    var str = textArea.value.split(" ");
    var txtValue = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            str[i] = "Malkovich";
            txtValue = str.join(" ");
        }
    }
    document.getElementById("text1").value = txtValue;
    // console.log("read value " + txtValue);
}

function ftn3() {
    var txtArea = document.getElementById("text1");
    var str = txtArea.value.toLowerCase();
    var st = "";
    for (var j = 0; j < str.length; j++) {
        if ("aeiouAEIOU".indexOf(str.charAt(j)) !== -1) {
            st = st + str.substr(j, str.length);
            st = st + str.substr(0, j) + "ay";
            break;
        }
    }
    document.getElementById('text1').value = st;

}

function ftn2() {
    // alert("Checkbox has been changed");
    var weight = document.getElementById("text1");
    weight.style.fontWeight = "bold";
    weight.style.color = "green";
    weight.style.textDecoration = "underline";
    var page = document.getElementById("lay");


    page
        .style
        .backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";


    if (document.getElementById("check1").checked == false) {
        weight.style.fontWeight = "normal";
        weight.style.color = "black";
        weight.style.textDecoration = "none";
        page.style.backgroundImage = "";
    }
}