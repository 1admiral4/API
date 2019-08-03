var btn = document.getElementById('btn');

// var output = document.getElementById('output');


    var xhr = new XMLHttpRequest();
    var url = 'https://restcountries.eu/rest/v2/all';



    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.response);
             for (var x = 0;x<data.length;x++){
                 var opt = document.createElement("option");
                 opt.innerText = data[x].name;
               document.querySelector("#clist").appendChild(opt);
             }
       
        }

    }

    xhr.open('GET',url);
    xhr.send();


    <div class="container">
    <label for="">Input number of persons</label>
    <input type="text" style="margin:0px auto; display:block;" />
    <button type="button" style="background-color:skyblue;margin-left:auto;margin-right:auto;display:block;max-resolution: top 0;%;margin-bottom:0%">
         Generate
      </button> 