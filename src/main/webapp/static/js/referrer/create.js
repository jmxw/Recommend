var categories = [
    {
        id: "8a2cdd9b5b779fc3015b9d93e87f0003",
        name: "家电清洗",
        types: [
            "清洗油烟机（原价138,现价118元/台，佣金=8元×3倍）",
            "清洗洗衣机（原价138,现价68元/台，佣金=5元×3倍）",
            "清洗空调挂机（原价138,现价68元/台，佣金=5元×3倍）",
            "清洗空调柜机（原价138,现价118元/台，佣金=8元×3倍）",
            "清洗空调天花机（原价138,现价138元/台，佣金=10元×3倍）",
            "清洗中央空调（原价138,现价278元/台，佣金=30元×3倍）",
            "清洗热水器（原价138,现价68元/台，佣金=5元×3倍）",
            "清洗单开门冰箱（原价138,现价88元/台，佣金=8元×3倍）",
            "清洗多开门冰箱（原价138,现价138元/台，佣金=10元×3倍）",
            "清洗灶台（原价138,现价48元/台，佣金=5元×3倍）",
            "清洗微波炉（原价138,现价48元/台，佣金=5元×3倍）",
            "清洗消毒柜（原价138,现价48元/台，佣金=5元×3倍）"
        ]
    },{
        id: "8a2cdd9b5b779fc3015b9d9f28170004",
        name: "家电维修与安装",
        types: [
            "维修与安装油烟机（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装洗衣机（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装空调挂机（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装空调柜机（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装中央空调（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装热水器（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装单开门冰箱（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装多开门冰箱（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装灶台（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装微波炉（上门检测费30元，佣金=维修费5%×3倍）",
            "维修与安装消毒柜（上门检测费30元，佣金=维修费5%×3倍）"
        ]
    },{
        id: "8a2cdd9b5b9dee03015bc83f9e940003",
        name: "家庭保洁",
        types: [
            "厨房保洁",
            "卫生间保洁",
            "玻璃清洗",
            "地板打蜡",
            "家庭开荒保洁"
        ]
    }
];


$(document).ready(function () {

    $(document).ready(function () {

        checkReferrerSession(function () {
            for (var i in categories) {
                var category = categories[i];
                $("<span>").addClass(i == 0 ? "active": "").text(category.name).appendTo("#type-category");
                for (var i in category.types) {
                    $("#create-type-list").mengular(".type-list-template", {
                        type: category.types[i],
                        category: category.id
                    });
                }


            }

            console.log("#create-type-list ." + categories[0].id);
            $("#create-type-list .type-list-template").hide();
            $("#create-type-list ." + categories[0].id).show();

            $("#type-category span").click(function () {
                var index = $(this).index();
                $("#type-category span").removeClass("active");
                $("#type-category span").eq(index).addClass("active");
                $("#create-type-list .type-list-template").hide();
                $("#create-type-list ." + categories[index].id).show();
            });
        });

    });


    $("#create-submit").click(function () {
        var name = $("#create-name").val();
        var telephone = $("#create-telephone").val();
        var address = $("#create-address").val();
        var type = ""
        $("input[name='create-type']:checkbox:checked").each(function(){
            type += $(this).val() + " ";
        });
        var remark = $("#create-remark").val();
        if (name == "" || telephone == "" || address == "" || type == "") {
            weui.alert("请完整填写顾客姓名、顾客电话、顾客地址和项目！");
            return;
        }
        OrderManager.create(name, telephone, address, type, remark, function (number) {
            if (number == null) {
                weui.alert("订单创建失败，请重新登录后重试！", function () {
                    location.href = "index.html";
                });
            } else {
                weui.alert("订单" + number + "创建成功！", function(){
                    location.href = "orders.html";
                });
            }
        });
    });

});