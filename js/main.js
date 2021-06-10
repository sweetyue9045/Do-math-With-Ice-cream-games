var txtId = 0; //新增表單
$(function () {
    //新增地點
    $("#addItem_1").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/0_1.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#addItem_1").attr("disabled", true);
        $("#addItem_2").attr("disabled", true);
        $("#add-1").attr("disabled", false);
        $("#add-2").attr("disabled", false);
        $("#add-3").attr("disabled", false);
        $("#add-4").attr("disabled", false);
        $("#add-5").attr("disabled", false);
        $("#add-6").attr("disabled", false);
        $("#add-7").attr("disabled", false);
        $("#add-8").attr("disabled", false);
        $("#add-9").attr("disabled", false);
    });
    $("#addItem_2").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/0_2.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId}; margin-top:-30px">`
        $("#showBlock").prepend(div);
        $("#addItem_1").attr("disabled", true);
        $("#addItem_2").attr("disabled", true);
        $("#add-1").attr("disabled", false);
        $("#add-2").attr("disabled", false);
        $("#add-3").attr("disabled", false);
        $("#add-4").attr("disabled", false);
        $("#add-5").attr("disabled", false);
        $("#add-6").attr("disabled", false);
        $("#add-7").attr("disabled", false);
        $("#add-8").attr("disabled", false);
        $("#add-9").attr("disabled", false);
    });
    $("#add-1").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/1.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#del").attr("disabled", false);
    });
    $("#add-2").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/2.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#del").attr("disabled", false);
    });
    $("#add-3").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/3.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#del").attr("disabled", false);
    });
    $("#add-4").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/4.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#del").attr("disabled", false);
    });
    $("#add-5").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/5.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#del").attr("disabled", false);
    });
    $("#add-6").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/6.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#del").attr("disabled", false);
    });
    $("#add-7").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/7.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#del").attr("disabled", false);
    });
    $("#add-8").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/8.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#del").attr("disabled", false);
    });
    $("#add-9").click(function () {
        txtId++;
        let div = `<img src="https://raw.githubusercontent.com/sweetyue9045/little_game/main/img/9.png" class="key key${txtId}" id="key${txtId}" style="z-index:${txtId};">`
        $("#showBlock").prepend(div);
        $("#del").attr("disabled", false);
    });
    //remove 最新加入的input
    $("#del").click(function () {
        $(".key" + txtId).remove();
        txtId--;
        if (txtId <= 1) {
            $("#del").attr("disabled", true);
        }
        else $("#del").attr("disabled", false);
    })
});
//remove函式
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
}
