$(document).ready(function() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("footer small").innerHTML = "Copyright &copy; " + currentYear + " Tom Fouxman";
});