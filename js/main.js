(function() {
  var frameApp = new FrameApp({
    hash: "DG50d9jQ",
  });

  gapi.load('auth2', function(){
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({ client_id: '410954743206-l702bc4kgdogqrlrugct6h5rdlf59ntp.apps.googleusercontent.com' });
    auth2.attachClickHandler('signInBtn', {},
      // Success
      function(user) {
        var profile = user.getBasicProfile();
        var name = profile.getName();
        var email = profile.getEmail();

        $('#authModal').modal('hide');
        var firstName = name.split(' ').slice(0, -1).join(' ');
        var lastName = name.split(' ').slice(-1).join(' ');
        $.ajax({
          type: "POST",
          url: "sub.php",
          data: {
            email: email,
            fname: firstName,
            lname: lastName,
          },
          success: function(response) {
            $("#loading-background").show();
            frameApp.startSession()
            .catch(function(errorEvent) {
              $('#error-modal').modal('show');
              if (errorEvent.code == 20) {
                $('#error-title').html("ALL SERVERS ARE BUSY");
                $('#error-message').html("The system is running at a maximum capacity. Please try to connect again later.");
              } else {
                $('#error-title').html("ERROR");
                $('#error-message').html(errorEvent.message);
              }
            })
            .then(function() {
              $("#loading-background").hide();
            });
          },
          error: function(response) {
            alert('Server error, please try again later'); 
          }
        });
      },
      // Failure
      function(error) {
        console.log(error);
      });
  });
})();

