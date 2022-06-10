var ans;
var num=1;
function answer(){
    ans = document.getElementById("ans").value;
    if (ans=="Do you want to build a snowman?"&&num==1){
        alert("雪人:做得不錯...但下一題你肯定不會!");
        document.querySelector('.que').textContent="雪人:tI/os'ednt/evha/ot/be/a/smnawno/.";
        num++;
    }else if (ans=="It doesn't have to be a snowman."&&num==2){
        alert("雪人:我才不會輸給你!!");
        document.querySelector('.que').textContent="雪人:oeCm/no/e'lst/og/dna/ypal/.";
        num++;
    }else if (ans=="Come on let's go and play."&&num==3){
        alert("雪人:啊!我輸了!根據雪人的法律我必須被放逐到火山裡!");
        window.location.href="index_2.html";
    }else{
            alert("雪人:答錯了!!哈哈哈!!!\n*此輪遊戲將重新開始");
    }document.getElementById("ans").value="";
}
