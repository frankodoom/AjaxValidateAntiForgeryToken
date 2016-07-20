//Scripts For Leave Management Controller And views




function registerStudent() {

    var form = $('#__AjaxAntiForgeryForm');
    var token = $('input[name="__RequestVerificationToken"]').val();

    var student = {
       
        "FirstName": $('#fName').val(),
        "LastName": $('#lName').val(),
        "Email": $('#email').val(),
        "Phone": $('#phone').val(),

    };

   // var l = Ladda.create(this);
    //l.start();
    $.ajax({
        url: '/Student/RegisterStudent',
        type: 'POST',
        data: { __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val(),student: student,  },//JSON.stringify(student),
        dataType: 'JSON',
        //headers: {
        //  '__RequestVerificationToken': token,
        //},
        contentType:'application/x-www-form-urlencoded; charset=utf-8',
        success: function (response) {
            if (response.result == "Success") {
                alert('Student Registered Succesfully!')
                //$.notify("Your Leave Application Was sent Successful", "success")
                //l.stop();
            }

        },
        error: function (x,h,r) {
            alert('Something went wrong')
            //$.notify("Sorry!,Your Leave Application Was Not Successful", "error")
            //l.stop();
        }

    })
};

