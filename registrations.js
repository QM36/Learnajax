(function (){
    var xmlhttp;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest ();
    }
    else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(JSON.parse(xmlhttp.responseText));
        var info = JSON.parse(xmlhttp.responseText);
        var html = '';
        var element = document.getElementById('for');
        info.data.forEach(function(argument,index){
              html += '<tr><td>' + (index + 1) + '</td>'+
            '<td>' + argument.name + '</td>'+
            '<td>' + argument.institute + '</td>'+
            '<td>' + argument.major + '</td>'+
            '<td>' + argument.stuId + '</td>'+
            '<td>' + argument.email + '</td>'+
            '<td>' + argument.sex + '</td>'+
            '<td>' + argument.phone + '</td>'+
            '<td>' + argument.positionCode + '</td>'+
            '<td>' + argument.registrationTime + '</td>'+
            '<td>' + argument.subject + '</td></tr>';
        });
        element.innerHTML = html;
      }
    }
    xmlhttp.open("GET","http://tomcat.nu.shunzi.tech/recruit/api/admin/registrations",true);
    xmlhttp.send();
})();