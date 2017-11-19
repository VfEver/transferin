function toActive(name) {

    var lyqLi = document.getElementById("lyqID");
    var lcjLi = document.getElementById("lcjID");
    var tipsDiv = document.getElementById("xjkTipsID");
    var tipsInfoID = document.getElementById("tipsInfoID");
    if ('lyq' == name) {

        lcjLi.classList.remove("active");
        lyqLi.className += " active";
        tipsDiv.classList.remove("xjk-tips-lcj")
        tipsDiv.className += " xjk-tips-lyq";
        tipsInfoID.innerHTML = "零用钱可以支持商城购物、还白条等，了解更多";
    } else {

        lyqLi.classList.remove("active");
        lcjLi.className += " active";
        tipsDiv.classList.remove("xjk-tips-lyq")
        tipsDiv.className += " xjk-tips-lcj";
        tipsInfoID.innerHTML = "理财金仅可购买理财产品，了解更多";
    }
}
function addEvent(event) {
    var comfirmBtnDiv = document.getElementById("comfirmBtnDiv");
    var inputID = document.getElementById("inputID");
    if (inputID.value != null && inputID.value != '') {
        comfirmBtnDiv.className += " btn-can-click";
    } else {
        comfirmBtnDiv.classList.remove("btn-can-click")
    }

}