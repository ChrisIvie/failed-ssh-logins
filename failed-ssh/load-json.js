
  // Author: Chris Ivie
  // Github: https://github.com/ChrisIvie
  // License: Apache 2.0


  //Loop through JSON files.. not the best way of doing this but it is what it is!
  for(var i=0;i<=1000;i++)
  {

// HTTP request to open CVE JSON files      



var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = $.parseJSON(this.response)
    //console.log(this.response)
    console.log(data)

    //////////////////////////Grabs Owner///////////////////////////////

    var node2 = document.createElement("div");  
    node2.className = "text-justify";
    owner = data.as_owner;
    //var textname = document.createTextNode("Positives: ");
    var textnode2 = document.createTextNode("Owner: " + owner);
    //node.appendChild(textname,textnode);
    node2.appendChild(textnode2);
    console.log(owner)
    document.getElementById("result").appendChild(node2)

  //////////////////////////Positives///////////////////////////////
  
    // Grabs the malware positives
    var node = document.createElement("div");  
    node.className = "badge badge-danger";
    positives = data.detected_urls[0].positives;
    //var textname = document.createTextNode(": ");
    
    var textnode = document.createTextNode("Positives: " + positives);
    //node.appendChild(textname,textnode);
    node.appendChild(textnode);

    console.log(positives)
    document.getElementById("result").appendChild(node)

//////////////////////////Hostname resolutions///////////////////////////////

for (i in data.resolutions) {
  x = data.resolutions[i].hostname;
  q = data.resolutions[i].last_resolved;


    var node3 = document.createElement("p");  
    node3.className = "badge badge-warning";
    //resolutions = data.resolutions[0].hostname;
    
      //for (j in myObj.cars[i].models) {
        //x += myObj.cars[i].models[j];
      //}
      console.log(data.resolutions[i].hostname)
      var textnode3 = document.createTextNode("Resolutions: " + x);
      var textnode5 = document.createTextNode(", Resolution dates: " + q);
    
    //var textname = document.createTextNode("Positives: ");
    //var textnode3 = document.createTextNode("Resolutions: " + x + ":");
    //node.appendChild(textname,textnode);
    node3.appendChild(textnode3);
    node3.appendChild(textnode5);

    //console.log(resolutions)
    document.getElementById("result").appendChild(node3)
  }

//////////////////////////Country///////////////////////////////

var node6 = document.createElement("div");  
node6.className = "badge badge-info";
country = data.country;
//var textname = document.createTextNode(": ");

var textnode6 = document.createTextNode("Country: " + country);
//node.appendChild(textname,textnode);
node6.appendChild(textnode6);

console.log(country)
document.getElementById("result").appendChild(node6)


//////////////////////////Detected URLs///////////////////////////////



for (i in data.detected_urls) {
  x = data.detected_urls[i].url;
  q = data.detected_urls[i].scan_date;

    var node7 = document.createElement("p");  
    node7.className = "badge badge-warning";
    //resolutions = data.resolutions[0].hostname;
    
    
      console.log(data.detected_urls[i].url)
      var textnode7 = document.createTextNode("URL: " + x);
      var textnode8 = document.createTextNode(", Scan date: " + q);
    
    
    node7.appendChild(textnode7);
    node7.appendChild(textnode8);

    //console.log(resolutions)
    document.getElementById("result").appendChild(node7)
  }

//////////////////////////Detected malware samples///////////////////////////////

  for (i in data.detected_downloaded_samples) {
    x = data.detected_downloaded_samples[i].sha256;
    q = data.detected_downloaded_samples[i].date;
  
  
      var node9 = document.createElement("p");  
      node9.className = "badge badge-warning";
      //resolutions = data.resolutions[0].hostname;
      
        //for (j in myObj.cars[i].models) {
          //x += myObj.cars[i].models[j];
        //}
        console.log(data.detected_downloaded_samples[i].sha256)
        var textnode9 = document.createTextNode("Detected malware hash: " + x);
        var textnode10 = document.createTextNode(", Scan dates: " + q);
      
      //var textname = document.createTextNode("Positives: ");
      //var textnode3 = document.createTextNode("Resolutions: " + x + ":");
      //node.appendChild(textname,textnode);
      node9.appendChild(textnode9);
      node9.appendChild(textnode10);
  
      //console.log(resolutions)
      document.getElementById("result").appendChild(node9)
    }

//////////////////////////spacer///////////////////////////////

    



    //sleep(10);

  }
};

// Getting current date and time.. not sure why this is here and I will remove it if need be!
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  

  // Getting the JSON folder
  xmlhttp.open("GET", "json/"+ i + ".json", true);
  sleep(15);
  
  xmlhttp.send();
  }




