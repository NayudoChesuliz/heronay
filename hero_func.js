var character;
var text;
var num=0;//文本記數
var namee, dialogue;
var cname=[

    "octopus",
    "hi",
    "you"

    ];//名

var dtext=[

    "hi",
    "iam",
    "you"
    
    ];//對話
var iimage=[
        "octopus"
    ]//這裡根據需要輸入圖片名稱,如果空則不要輸入

function rpgs(character,text,image){
    namee = document.querySelector('.name');
    dialogue = document.querySelector('.dialogue');
    document.getElementById("name").style.opacity  = 1;
    document.getElementById("dialogue").style.opacity  = 1;
    namee.textContent = character;
    if (namee.textContent == "")
        namee.textContent = "旁白";
    namee.textContent += ":";
    dialogue.textContent = text;
    if(image==""||image==null)
        image="empty";
    document.getElementById("image").src=image+".png";
    if (image=="octopus")
        document.getElementById("image").style.width="1000px";
}
function Next(){//文本切換
    document.getElementById("name").style.opacity  = 0;
    document.getElementById("dialogue").style.opacity  = 0;
    if (cname[num]!=null&&dtext[num]!=null){
        rpgs(cname[num],dtext[num],iimage[num]);
    }num++;
  
}
