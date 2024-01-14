$(document).ready(function(){
   
    // new DataTable('#example', {
    //     buttons: [
    //         'excel'
    //     ]
    // });

    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );

    // Adding member
    $('#save').click(function(e){
        e.preventDefault();
      
        const name = $('#name').val()
        const school = $('#school').val()
        const email = $('#email').val()
        
        if(!name || !email || !school){
            $('#errMsg').addClass('alert alert-danger')
            $('#errMsg').html("You have not fill all the required fields");
           
            return false;
        }
        else{

            $.ajax({
                method: 'POST',
                url: './controller/member.controller.php',
                data: {
                    action:'addMember',
                    name,
                    email,
                    school
                },
                beforeSend: function(){
                    $('#msg').addClass('alert alert-success');
                    $('#save').html('<i class="fa fa-spinner fa-spin"></i> Saving...');
                },
                success: function(data){
                    setTimeout(() => {
                        $('#msg').addClass('alert alert-success');
                        $('#msg').html(data);
                        console.log(data);
                    }, 1500);
                }

            });
        }
    });


     // Adding school
     $('#addSchool').click(function(e){
        e.preventDefault();
      
        const name = $('#name').val()
        const country = $('#country').val()
       console.log(name, country);
        
        if(!name || !country){
            $('#errMsg').addClass('alert alert-danger')
            $('#errMsg').html("You have not fill all the required fields");
           
            return false;
        }
        else{

            $.ajax({
                method: 'POST',
                url: './controller/school.controller.php',
                data: {
                    action:'addSchool',
                    name,
                    country
                },
                beforeSend: function(){
                    $('#msg').addClass('alert alert-success');
                    $('#save').html('<i class="fa fa-spinner fa-spin"></i> Saving...');
                },
                success: function(data){
                    setTimeout(() => {
                        $('#msg').addClass('alert alert-success');
                        $('#msg').html(data);
                        console.log(data);
                    }, 1500);
                }

            });
        }
    });

    // Getting all members

    $.ajax({
        method: 'GET',
        url: './controller/member.controller.php',
        dataType: 'json',
        action: 'loadAll',
        data: { action:'loadAll'},
        success: function (resp) {

            console.log(resp);
            // if (data) {
            //     console.log(data);
            // } else {
            //     console.error('Empty or invalid data received');
            // }
        },
        fail: function () {
            console.error('Error fetching data');
        }
    });




})