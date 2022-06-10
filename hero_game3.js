var flag1=0,flag2=0,flag3=0,flag4=0;
var a=0,b=0,c=0,d=0;

function change1(){
    flag1+=1;
    if (flag1==1){
        document.getElementById("card1").src="darcy.png";
        a=1;
    }else if (flag1==2){
        document.getElementById("card1").src="goat.png";
        a=0;
    }else if (flag1==3){
        document.getElementById("card1").src="rabbit.png";
        a=0;
    }else if (flag1==4){
        a=0;
        document.getElementById("card1").src="haha.png";
    }else if (flag1==5){
        a=0;
        document.getElementById("card1").src="cross.png";
    }else if (flag1==6){
        document.getElementById("card1").src="black.png";
        a=0;
        flag1=0;
    }test();
}function change2(){
    flag2+=1;
    if (flag2==1){
        document.getElementById("card2").src="darcy.png";
        b=0;
    }else if (flag2==2){
        document.getElementById("card2").src="goat.png";
        b=1;
    }else if (flag2==3){
        document.getElementById("card2").src="rabbit.png";
        b=0;
    }else if (flag2==4){
        b=0;
        document.getElementById("card2").src="haha.png";
    }else if (flag2==5){
        b=0;
        document.getElementById("card2").src="cross.png";
    }else if (flag2==6){
        document.getElementById("card2").src="black.png";
        b=0;
        flag2=0;
    }test();
}function change3(){
    flag3+=1;
    if (flag3==1){
        document.getElementById("card3").src="darcy.png";
        c=0
    }else if (flag3==2){
        document.getElementById("card3").src="goat.png";
        c=0;
    }else if (flag3==3){
        document.getElementById("card3").src="rabbit.png";
        c=0;
    }else if (flag3==4){
        c=0;
        document.getElementById("card3").src="haha.png";
    }else if (flag3==5){
        c=0;
        document.getElementById("card3").src="cross.png";
    }else if (flag3==6){
        document.getElementById("card3").src="black.png";
        c=1;
        flag3=0;
    }test();
}function change4(){
    flag4+=1;
    if (flag4==1){
        document.getElementById("card4").src="darcy.png";
        d=0
    }else if (flag4==2){
        document.getElementById("card4").src="goat.png";
        d=0;
    }else if (flag4==3){
        document.getElementById("card4").src="rabbit.png";
        d=0;
    }else if (flag4==4){
        d=1;
        document.getElementById("card4").src="haha.png";
    }else if (flag4==5){
        d=0;
        document.getElementById("card4").src="cross.png";
    }else if (flag4==6){
        document.getElementById("card4").src="black.png";
        d=0;
        flag4=0;
    }test();
}function test(){
    if (a==1&&b==1&&c==1&&d==1){
        alert("你打敗了把咖哩拌著吃的山羊!!");
         alert("世界終於恢復平靜，在這歷史性的一刻，咖哩飯是否要拌的爭議，得到了結果。\n咖哩飯不拌才是王道！其他邪門歪道注定都是失敗者！\nThe End.");
        window.location.href="https://nayudochesuliz.github.io/heronay/";
    }
}
