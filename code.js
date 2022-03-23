     
    function loadXMLDoc() {
        
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {

            // Request finished and response 
            // is ready and Status is "OK"
            //console.log("ready status is ok");
            if (this.readyState == 4 && this.status == 200) {
                SmpDetails(this);
                //console.log("this is done");
               
            }
           
        };

        // employee.xml is the external xml file
        xmlhttp.open("GET", "Election_V.xml", true);
        xmlhttp.send();
    }

    function SmpDetails(xml) {
        var i,r,k,y,z,ca='',ha='';
        var ins=0,si=0,con=0,hco=0;
        var xmlDoc = xml.responseXML;
        var match=0;
       let a=document.getElementById("na").value;
     
        //console.log("this is ="+a);

        var table =
            `<tr>
                <th align='center'>विधान सभा</th>
                <th align='center'>केन्द्र संख्या</th>
                <th align='center'>नाम अधिकारी/कर्मचारी</th>
                <th align='center'>पी0एन0ओ0</th>
                <th align='center'>मोबाइल नम्बर</th>
                <th align='center'>होमगार्ड का नाम</th>
                <th align='center'>मोबाइल नम्बर</th>
                <th align='center'>बस संख्या</th>
                <th align='center'>सी0ए0पी0एफ0</th>
            </tr>`;
        var x = xmlDoc.getElementsByTagName("VElec");

        // Start to fetch the data by using TagName 
        for (i = 0; i < x.length; i++) {
         
        
           let k=x[i].getElementsByTagName("comob")[0].childNodes[0].nodeValue;
            let y=x[i].getElementsByTagName("copno")[0].childNodes[0].nodeValue;
            let z=x[i].getElementsByTagName("hgmob")[0].childNodes[0].nodeValue;
           // console.log("this is new"+z+"Second-"+y);

            if(a===z||a===k|a===y)
            {match=1;
                 //console.log("Compare");
            var co=x[i].getElementsByTagName('code')[0].childNodes[0].nodeValue;
            var ce=x[i].getElementsByTagName('center')[0].childNodes[0].nodeValue;
            var tha=x[i].getElementsByTagName('thana')[0].childNodes[0].nodeValue;
            var pn=x[i].getElementsByTagName('pname')[0].childNodes[0].nodeValue+"<br\><br\>( "+x[i].getElementsByTagName('boothno')[0].childNodes[0].nodeValue+" )";
            var capf=x[i].getElementsByTagName('capf')[0].childNodes[0].nodeValue;
            var bus=x[i].getElementsByTagName('bus')[0].childNodes[0].nodeValue;
            var cname=x[i].getElementsByTagName('coname')[0].childNodes[0].nodeValue+" "+
                      x[i].getElementsByTagName('cooffice')[0].childNodes[0].nodeValue+" "+
                      x[i].getElementsByTagName('codis')[0].childNodes[0].nodeValue+" पी0एन0ओ0 "+
                      x[i].getElementsByTagName('copno')[0].childNodes[0].nodeValue+ " मो0 "+
                      x[i].getElementsByTagName('comob')[0].childNodes[0].nodeValue+" "+
                      x[i].getElementsByTagName('coduty')[0].childNodes[0].nodeValue;
            
            
            
            r=x[i].getElementsByTagName('center') [0].childNodes[0].nodeValue;
            
            
            }
           
            
            }
            for(i=0; i<x.length;i++)
            {
                if(a===z||a===y|a===k)
                {
                    
                    console.log(match);
                    //console.log(x[i].getElementsByTagName('code')[0].childNodes[0].nodeValue);
                }
                if(r===x[i].getElementsByTagName('center')[0].childNodes[0].nodeValue)
                {
                        var l=x[i].getElementsByTagName('coname')[0].childNodes[0].nodeValue;
                        if(l.substring(0,5)==="निरी0")
                        ins++;
                        else if(l.substring(0,5)==="उ0नि0")
                        si++;
                        else if(l.substring(0,6)==="हे0का0")
                        hco++;
                        else if(l.substring(0,3)==="का0")
                        con++;

                      //console.log("ins "+ins+" si "+si+" hco "+hco+" co "+con+" "+l.substring(0,3))  


                    if(x[i].getElementsByTagName('coname')[0].childNodes[0].nodeValue!='?')
                    ca+=x[i].getElementsByTagName('coname')[0].childNodes[0].nodeValue+" "+
                    x[i].getElementsByTagName('cooffice')[0].childNodes[0].nodeValue+" "+
                    x[i].getElementsByTagName('codis')[0].childNodes[0].nodeValue+" पी0एन0ओ0 "+
                    x[i].getElementsByTagName('copno')[0].childNodes[0].nodeValue+ " मो0 "+
                    x[i].getElementsByTagName('comob')[0].childNodes[0].nodeValue+" "+
                    x[i].getElementsByTagName('coduty')[0].childNodes[0].nodeValue+"<br/><br/>";
          

                    ha+=x[i].getElementsByTagName('hgname')[0].childNodes[0].nodeValue+" "+
                    x[i].getElementsByTagName('hgoffice')[0].childNodes[0].nodeValue+" "+
                    x[i].getElementsByTagName('hgdis')[0].childNodes[0].nodeValue+" मो0 "+
                    x[i].getElementsByTagName('hgmob')[0].childNodes[0].nodeValue+ " <br/> <br/>";
                    
          

                table += "<tr><td>" +
                x[i].getElementsByTagName("code")[0]
                .childNodes[0].nodeValue + "</td><td align='center'>" +
                x[i].getElementsByTagName("center")[0]
                .childNodes[0].nodeValue + "</td><td align='center'>" +
                x[i].getElementsByTagName("coname")[0]
                .childNodes[0].nodeValue + "</td><td align='center'>" +
                x[i].getElementsByTagName("copno")[0]
                .childNodes[0].nodeValue + "</td><td align='center'>" +
                x[i].getElementsByTagName("comob")[0]
                .childNodes[0].nodeValue + "</td><td align='center'>" +
                x[i].getElementsByTagName("hgname")[0]
                .childNodes[0].nodeValue + "</td><td align='center'>" +
                x[i].getElementsByTagName("hgmob")[0]
                .childNodes[0].nodeValue + "</td><td align='center'>" +
                x[i].getElementsByTagName("bus")[0]
                .childNodes[0].nodeValue + "</td><td align='center'>" +
                x[i].getElementsByTagName("capf")[0]
                .childNodes[0].nodeValue + "</td></tr align='center'>";
                }
    }

        // Print the xml data in table form
        //document.getElementById("ElID").innerHTML = table;
            var tab=document.getElementById('tab') ;
            var cells= tab.getElementsByTagName('td');
        if(match==1)
        {
        
            cells[0].innerHTML=co;
            cells[1].innerHTML=cname;
            cells[2].innerHTML=ce;
            cells[3].innerHTML=tha;
            cells[4].innerHTML=pn;
            cells[5].innerHTML=ca;
            cells[6].innerHTML=ha;
            cells[7].innerHTML=capf;
            cells[8].innerHTML=bus;
            cells[10].innerHTML="निरी0-"+ins;
            cells[11].innerHTML="उ0नि0-"+si;
            cells[12].innerHTML="हे0का0-"+hco;
            cells[13].innerHTML="का0-"+con;
            //var tab=document.getElementById('tab');
            tab.style['display']="table";
            document.getElementById('y').innerHTML="";
        }
        else
        {
            tab.style['display']="none";
            document.getElementById('y').innerHTML="कोई डाटा उपलब्ध नहीं है";
            console.log(match);
        }
    }

