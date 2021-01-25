var Images=["https://thumbs.dreamstime.com/z/kerala-indian-woman-cute-134899939.jpg",
             "https://lh3.googleusercontent.com/proxy/z6kBbKRyF1d8_C8zP1qkMXT1ERFjQ45csSCdCgq5nI_acYFY71Cjhr8rqn6h7jBgudiwOKbWeOQzVVMYGrQ9frST70ThDzFujq8slUuPnSkrpQUPLhIsmCFT3MIeS-wsO5fMABIMg6SXkZPd6y63Y6VHvlJFm25netIKeNluku3INmrVxgPIaY8V",
            
             "https://i.pinimg.com/236x/9c/89/db/9c89dbaab265183665fe0e9462531580.jpg",
            
             "https://thumbs.dreamstime.com/z/cartoon-vector-smiling-chinese-girl-overalls-cartoon-vector-smiling-chinese-girl-overalls-vector-illustration-isolated-192018628.jpg",
             ];
            
            var name=["Mommy",
                      "Sister",
                      "Father",
                        "Me!"
            ];
var i=0;
function Change(){
document.getElementById("m").src=Images[i];
document.getElementById("name").innerHTML=i;
i++;
if (i ==9)
  {
    i=0;
  }
}
