function sendMessage() {
    var name = $("#name").val();
    var email = $("#email").val();
    var messageText = $("#message").val();
    $.ajax({
        type: 'POST',
        url: "http://diy-heyferh.rhcloud.com/heyferh/message",
        data: {"name": name, "email": email, "messageText": messageText},
        success: function () {
            $("#name").val('');
            $("#email").val('');
            $("#message").val('');
            Materialize.toast('Thank you for your message!', 4000)
        },
        error: function () {

        }
    });
}

function UserStats() {
    this.startDate = new Date();
    this.actions = [];

    this.addAction = function (action) {
        this.actions.push(action);
    };
}