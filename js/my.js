function sendMessage() {
	var name = $("#name").val();
	var email = $("#email").val();
	var messageText = $("#message").val();
	$.ajax({
	 type: 'POST',
     url:"http://sandbox-heyferh.rhcloud.com/sandbox/message",
     data: {"name":name, "email":email, "messageText":messageText},
     success:function(json){
     	Materialize.toast('Thank you for your message!', 4000)
     },
     error:function(){
         
     }      
});
}