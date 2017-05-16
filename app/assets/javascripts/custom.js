$(document).ready(function () {
    $("#newEventModel").click(function (event) {
        event.stopPropagation();
        $("#myModal").modal('show');
        return false;
    });
});