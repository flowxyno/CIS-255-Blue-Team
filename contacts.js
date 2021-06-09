function req() {
    var empty = document.getElementById("cmail").value;

    if(empty == "") {
        alert("Please input a valid Email Address");
        return false;
    } else {
        return true;
    }
}