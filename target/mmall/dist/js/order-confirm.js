webpackJsonp([3], {
    0: function (e, t, r) {
        e.exports = r(71)
    },
    2: function (e, t, r) {
        var s = r(1),
            i = {
                register: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/user/register.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                login: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/user/login.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                getUserInfo: function (e, t) {
                    s.request({
                        url: s.getServerUrl("/user/get_information.do"),
                        method: "POST",
                        success: e,
                        error: t
                    })
                },
                updateUserInfo: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/user/update_information.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                updatePassword: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/user/reset_password.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                checkUsername: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/user/check_valid.do"),
                        data: {
                            type: "username",
                            str: e
                        },
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                checkLogin: function (e, t) {
                    s.request({
                        url: s.getServerUrl("/user/get_user_info.do"),
                        method: "POST",
                        success: e,
                        error: t
                    })
                },
                getQuestion: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/user/forget_get_question.do"),
                        data: {
                            username: e
                        },
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                checkAnswer: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/user/forget_check_answer.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                resetPassword: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/user/forget_reset_password.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                logout: function (e, t) {
                    s.request({
                        url: s.getServerUrl("/user/logout.do"),
                        method: "POST",
                        success: e,
                        error: t
                    })
                }
            };
        e.exports = i
    },
    3: function (e, t, r) {
        var s = r(1),
            i = {
                getCartCount: function (e, t) {
                    s.request({
                        url: s.getServerUrl("/cart/get_cart_product_count.do"),
                        success: e,
                        error: t
                    })
                },
                addToCart: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/cart/add.do"),
                        data: e,
                        success: t,
                        error: r
                    })
                },
                getCartList: function (e, t) {
                    s.request({
                        url: s.getServerUrl("/cart/list.do"),
                        success: e,
                        error: t
                    })
                },
                selectProduct: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/cart/select.do"),
                        data: {
                            productId: e
                        },
                        success: t,
                        error: r
                    })
                },
                unselectProduct: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/cart/un_select.do"),
                        data: {
                            productId: e
                        },
                        success: t,
                        error: r
                    })
                },
                selectAllProduct: function (e, t) {
                    s.request({
                        url: s.getServerUrl("/cart/select_all.do"),
                        success: e,
                        error: t
                    })
                },
                unselectAllProduct: function (e, t) {
                    s.request({
                        url: s.getServerUrl("/cart/un_select_all.do"),
                        success: e,
                        error: t
                    })
                },
                updateProduct: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/cart/update.do"),
                        data: e,
                        success: t,
                        error: r
                    })
                },
                deleteCartProduct: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/cart/delete_product.do"),
                        data: {
                            productIds: e
                        },
                        success: t,
                        error: r
                    })
                }
            };
        e.exports = i
    },
    4: function (e, t) {},
    5: function (e, t) {},
    6: function (e, t) {},
    7: function (e, t) {
        e.exports = '<div class="sticky-search-wrap"> <div class="sticky-search-con"> <span class="sticky-logo">Raymall</span> <input type="text" class="sticky-input" id="sticky-input" placeholder="{{tips}}"/> <span class="sticky-btn" id="sticky-btn">搜索</span> </div> </div>'
    },
    8: function (e, t, r) {
        r(4);
        var s = r(10),
            i = r(1),
            o = {
                init: function () {
                    this.bindEvent(), this.onload()
                },
                onload: function () {
                    var e = i.getUrlParam("keyword");
                    e && $("#search-input").val(e)
                },
                bindEvent: function () {
                    var e = this;
                    $("#search-btn").click(function () {
                        var t = $.trim($("#search-input").val());
                        e.searhSubmit(t)
                    }), $("#search-input").keyup(function (t) {
                        if (13 === t.keyCode) {
                            var r = $.trim($("#search-input").val());
                            e.searhSubmit(r)
                        }
                    }), s.initSticky("请输入要商品名称", i.getUrlParam("keyword"), ".header", function (t) {
                        e.searhSubmit(t)
                    })
                },
                searhSubmit: function (e) {
                    e ? window.location.href = "./list.html?keyword=" + e : i.goHome()
                }
            };
        o.init()
    },
    9: function (e, t, r) {
        r(5);
        var s = r(1),
            i = r(2),
            o = r(3),
            a = {
                init: function () {
                    return this.bindEvent(), this.loadUserInfo(), this.loadCartCount(), this
                },
                bindEvent: function () {
                    $(".js-login").click(function () {
                        s.doLogin()
                    }), $(".js-logout").click(function () {
                        i.logout(function (e) {
                            window.location.href = "./index.html"
                        }, function (e) {
                            s.errorTips(e)
                        })
                    }), $(".js-register").click(function () {
                        window.location.href = "./user-register.html"
                    })
                },
                loadUserInfo: function () {
                    i.checkLogin(function (e) {
                        $(".user.no-login").hide().siblings(".user.login").show().find(".username").text(e.username)
                    }, function (e) {})
                },
                loadCartCount: function () {
                    o.getCartCount(function (e) {
                        $(".nav .cart-count").text(e || 0)
                    }, function (e) {
                        $(".nav .cart-count").text(0)
                    })
                }
            };
        e.exports = a.init()
    },
    10: function (e, t, r) {
        r(6);
        var s = r(11),
            i = r(7),
            o = {
                data: {
                    tips: "请输入...",
                    key: ""
                },
                initSticky: function (e, t, r, s) {
                    var i = this;
                    $(document).on("click", "#sticky-btn", function () {
                        var e = $.trim($("#sticky-input").val());
                        "function" == typeof s && s(e)
                    }), $(document).on("keyup", "#sticky-input", function (e) {
                        if (13 === e.keyCode) {
                            var t = $.trim($("#sticky-input").val());
                            "function" == typeof s && s(t)
                        }
                    }), $(document).on("click", ".sticky-logo", function () {
                        window.location.href = "./index.html"
                    }), $(window).scroll(function (s) {
                        var o = $(document).scrollTop();
                        if (r instanceof jQuery) var a = r.offset().top,
                            n = r.outerHeight(!0);
                        else var a = $(r).offset().top,
                            n = $(r).outerHeight(!0);
                        o >= a + n ? i.show(e, "body", t || "") : i.hide()
                    })
                },
                show: function (e, t, r) {
                    this.data.tips = e, this.data.key = r, this.$target = $(t), this.loadStickySearch()
                },
                hide: function () {
                    $(".sticky-search-con").animate({
                        opacity: "0",
                        margin: "0"
                    }, 200, "swing", function () {
                        $("div").remove(".sticky-search-wrap")
                    })
                },
                loadStickySearch: function () {
                    if ($(".sticky-search-wrap").length && $(".sticky-search-wrap").length > 0);
                    else {
                        var e = this.renderHtml(i, {
                            tips: this.data.tips
                        });
                        this.$target.append(e), $(".sticky-search-con").animate({
                            opacity: "1",
                            margin: "10px 0"
                        }, 500, "swing")
                    }
                    $("#sticky-input").val() || $("#sticky-input").val(this.data.key || "")
                },
                renderHtml: function (e, t) {
                    var r = s.compile(e),
                        i = r.render(t);
                    return i
                }
            };
        e.exports = o
    },
    17: function (e, t, r) {
        var s = r(1),
            i = {
                getProductList: function (e, t) {
                    s.request({
                        url: s.getServerUrl("/order/get_order_cart_product.do"),
                        method: "POST",
                        success: e,
                        error: t
                    })
                },
                create: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/order/create.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                getOrderList: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/order/list.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                getOrderDetail: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/order/detail.do"),
                        data: {
                            orderNo: e
                        },
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                cancelOrder: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/order/cancel.do"),
                        data: {
                            orderNo: e
                        },
                        method: "POST",
                        success: t,
                        error: r
                    })
                }
            };
        e.exports = i
    },
    22: function (e, t, r) {
        var s = r(1),
            i = {
                getAddressList: function (e, t) {
                    s.request({
                        url: s.getServerUrl("/shipping/list.do"),
                        data: {
                            pageSize: 50,
                            pageNum: 1
                        },
                        method: "POST",
                        success: e,
                        error: t
                    })
                },
                save: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/shipping/add.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                getAddress: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/shipping/select.do"),
                        data: {
                            shippingId: e
                        },
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                update: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/shipping/update.do"),
                        data: e,
                        method: "POST",
                        success: t,
                        error: r
                    })
                },
                deleteAddress: function (e, t, r) {
                    s.request({
                        url: s.getServerUrl("/shipping/del.do"),
                        data: {
                            shippingId: e
                        },
                        method: "POST",
                        success: t,
                        error: r
                    })
                }
            };
        e.exports = i
    },
    31: function (e, t) {},
    50: function (e, t) {
        e.exports = '{{#list}} {{#isActive}} <div class="address-item active" data-id="{{id}}"> {{/isActive}} {{^isActive}} <div class="address-item" data-id="{{id}}"> {{/isActive}} <div class="address-title"> {{receiverCity}} {{receiverProvince}} （ {{receiverName}} 收 ） </div> <div class="address-detail"> {{receiverAddress}} {{receiverPhone}} </div> <div class="address-opera"> <span class="link address-update">编辑</span> <span class="link address-delete">删除</span> </div> </div> {{/list}} <div class="address-add"> <div class="address-new"> <i class="fa fa-plus"></i> <div class="text">使用新地址</div> </div> </div></div>'
    },
    51: function (e, t) {
        e.exports = '<div class="modal close"> <div class="modal-container"> <div class="modal-header"> {{#isUpdate}} <h1 class="modal-title">更新地址</h1> {{/isUpdate}} {{^isUpdate}} <h1 class="modal-title">使用新地址</h1> {{/isUpdate}} <i class="fa fa-close close"></i> </div> <div class="modal-body"> <div class="form"> <div class="form-line"> <label class="label" for="receiver-name"> <span class="required">*</span>收件人姓名： </label> <input class="form-item" id="receiver-name" placeholder="请输入收件人姓名" value="{{data.receiverName}}"/> </div> <div class="form-line"> <label class="label" for="receiver-province"> <span class="required">*</span> 所在城市： </label> <select class="form-item" id="receiver-province"> <option value="">请选择</option> </select> <select class="form-item" id="receiver-city"> <option value="">请选择</option> </select> </div> <div class="form-line"> <label class="label" for="receiver-address"> <span class="required">*</span> 详细地址： </label> <input class="form-item" id="receiver-address" placeholder="请精确到门牌号" value="{{data.receiverAddress}}"/> </div> <div class="form-line"> <label class="label" for="receiver-phone"> <span class="required">*</span> 收件人手机： </label> <input class="form-item" id="receiver-phone" placeholder="请输入11位手机号" value="{{data.receiverPhone}}"/> </div> <div class="form-line"> <label class="label" for="receiver-zip">邮政编码：</label> <input class="form-item" id="receiver-zip" placeholder="如：100000" value="{{data.receiverZip}}"/> </div> <div class="form-line"> <input type="hidden" id="receiver-id" value="{{data.id}}"/> <a class="btn address-btn">保存收货地址</a> </div> </div> </div> </div> </div>'
    },
    52: function (e, t) {
        e.exports = '<table class="product-table"> <tr> <th class="cell-img">&nbsp;</th> <th class="cell-info">商品描述</th> <th class="cell-price">价格</th> <th class="cell-count">数量</th> <th class="cell-total">小计</th> </tr> {{#orderItemVoList}} <tr> <td class="cell-img"> <a href="./detail.html?productId={{productId}}" target="_blank"> <img class="p-img" src="{{imageHost}}{{productImage}}" alt="{{productName}}"/> </a> </td> <td class="cell-info"> <a class="link" href="./detail.html?productId={{productId}}" target="_blank">{{productName}}</a> </td> <td class="cell-price">￥{{currentUnitPrice}}</td> <td class="cell-count">{{quantity}}</td> <td class="cell-total">￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> <div class="submit-con"> <span>订单总价:</span> <span class="submit-total">￥{{productTotalPrice}}</span> <span class="btn order-submit">提交订单</span> </div>'
    },
    70: function (e, t, r) {
        var s = r(1),
            i = r(83),
            o = r(22),
            a = r(51),
            n = {
                show: function (e) {
                    this.option = e, this.option.data = e.data || {}, this.$modalWrap = $(".modal-wrap"), this.loadModal(), this.bindEvent()
                },
                hide: function () {
                    this.$modalWrap.empty()
                },
                loadModal: function () {
                    var e = s.renderHtml(a, {
                        isUpdate: this.option.isUpdate,
                        data: this.option.data
                    });
                    this.$modalWrap.html(e), this.loadProvince()
                },
                bindEvent: function () {
                    var e = this;
                    this.$modalWrap.find("#receiver-province").change(function () {
                        var t = $(this).val();
                        e.loadCities(t)
                    }), this.$modalWrap.find(".address-btn").click(function () {
                        var t = e.getReceiverInfo(),
                            r = e.option.isUpdate;
                        !r && t.status ? o.save(t.data, function (t) {
                            s.successTips("地址添加成功"), e.hide(), "function" == typeof e.option.onSuccess && e.option.onSuccess(t)
                        }, function (e) {
                            s.errorTips(e)
                        }) : r && t.status ? o.update(t.data, function (t) {
                            s.successTips("更新地址成功"), e.hide(), "function" == typeof e.option.onSuccess && e.option.onSuccess(t)
                        }, function (e) {
                            s.errorTips(e)
                        }) : s.errorTips(t.errMsg || "好像哪里不对了~~>_<~~")
                    }), this.$modalWrap.find(".modal-container").click(function (e) {
                        e.stopPropagation()
                    }), this.$modalWrap.find(".close").click(function () {
                        e.hide()
                    })
                },
                loadProvince: function () {
                    var e = i.getProvinces() || [],
                        t = this.$modalWrap.find("#receiver-province"),
                        r = this.getSelectOption(e);
                    t.html(r), this.option.isUpdate && this.option.data.receiverProvince && (t.val(this.option.data.receiverProvince), this.loadCities(this.option.data.receiverProvince))
                },
                loadCities: function (e) {
                    var t = i.getCities(e) || [],
                        r = this.$modalWrap.find("#receiver-city");
                    r.html(this.getSelectOption(t)), this.option.isUpdate && this.option.data.receiverCity && r.val(this.option.data.receiverCity)
                },
                getSelectOption: function (e) {
                    for (var t = '<option value="">请选择</option>', r = 0, s = e.length; r < s; r++) t += '<option value="' + e[r] + '">' + e[r] + "</option>";
                    return t
                },
                getReceiverInfo: function () {
                    var e = {},
                        t = {
                            status: !1
                        };
                    return e.receiverName = $.trim(this.$modalWrap.find("#receiver-name").val()), e.receiverProvince = this.$modalWrap.find("#receiver-province").val(), e.receiverCity = this.$modalWrap.find("#receiver-city").val(), e.receiverAddress = $.trim(this.$modalWrap.find("#receiver-address").val()), e.receiverPhone = $.trim(this.$modalWrap.find("#receiver-phone").val()), e.receiverZip = $.trim(this.$modalWrap.find("#receiver-zip").val()), this.option.isUpdate && (e.id = this.$modalWrap.find("#receiver-id").val()), e.receiverName ? e.receiverProvince ? e.receiverCity ? e.receiverAddress ? e.receiverPhone ? (t.status = !0, t.data = e) : t.errMsg = "请输入收件人手机号" : t.errMsg = "请输入收件人详细地址" : t.errMsg = "请选择收件人所在城市" : t.errMsg = "请选择收件人所在省份" : t.errMsg = "请输入收件人姓名", t
                }
            };
        e.exports = n
    },
    71: function (e, t, r) {
        r(31), r(8), r(9);
        var s = r(1),
            i = r(17),
            o = r(22),
            a = r(50),
            n = r(52),
            c = r(70),
            d = {
                data: {
                    selectedAddressId: null
                },
                init: function () {
                    this.onLoad(), this.bindEvent()
                },
                onLoad: function () {
                    this.loadAddressList(), this.loadProductList()
                },
                bindEvent: function () {
                    var e = this;
                    $(document).on("click", ".address-item", function () {
                        $(this).addClass("active").siblings(".address-item").removeClass("active"), e.data.selectedAddressId = $(this).data("id")
                    }), $(document).on("click", ".order-submit", function () {
                        var t = e.data.selectedAddressId;
                        t ? i.create({
                            shippingId: t
                        }, function (e) {
                            window.location.href = "./payment.html?orderNumber=" + e.orderNo
                        }, function (e) {
                            s.errorTips(e)
                        }) : s.errorTips("请选择一个收货地址")
                    }), $(document).on("click", ".address-add", function () {
                        c.show({
                            isUpdate: !1,
                            onSuccess: function () {
                                e.loadAddressList()
                            }
                        })
                    }), $(document).on("click", ".address-update", function (t) {
                        t.stopPropagation();
                        var r = $(this).parents(".address-item").data("id");
                        o.getAddress(r, function (t) {
                            c.show({
                                isUpdate: !0,
                                data: t,
                                onSuccess: function () {
                                    e.loadAddressList()
                                }
                            })
                        }, function (e) {
                            s.errorTips("打开失败咯~~>_<~~，刷新试试？")
                        })
                    }), $(document).on("click", ".address-delete", function (t) {
                        t.stopPropagation();
                        var r = $(this).parents(".address-item").data("id");
                        s.confirmTips("确认要删除该地址？", function () {
                            o.deleteAddress(r, function (t) {
                                e.loadAddressList()
                            }, function (e) {
                                s.errorTips(e)
                            })
                        })
                    })
                },
                loadAddressList: function () {
                    var e = this;
                    s.showLoading(".address-con"), o.getAddressList(function (t) {
                        e.filterAddress(t);
                        var r = s.renderHtml(a, t);
                        $(".address-con").html(r)
                    }, function (e) {
                        s.showErrorMessage(".address-con", "地址加载失败，请刷新后重试~~~>_<~~")
                    })
                },
                loadProductList: function () {
                    s.showLoading(".product-con"), i.getProductList(function (e) {
                        var t = s.renderHtml(n, e);
                        $(".product-con").html(t)
                    }, function (e) {
                        s.showErrorMessage(".product-con", "商品清单加载失败，请刷新后重试~~~>_<~~")
                    })
                },
                filterAddress: function (e) {
                    if (this.data.selectedAddressId) {
                        for (var t = !1, r = 0, s = e.list.length; r < s; r++) e.list[r].id === this.data.selectedAddressId && (e.list[r].isActive = !0, t = !0);
                        t || (this.data.selectedAddressId = null)
                    }
                }
            };
        $(function () {
            d.init()
        })
    },
    83: function (e, t) {
        var r = {
            cityInfo: {
                "北京": ["北京"],
                "上海": ["上海"],
                "天津": ["天津"],
                "重庆": ["重庆"],
                "河北省": ["石家庄", "张家口", "承德", "秦皇岛", "唐山", "廊坊", "保定", "沧州", "衡水", "邢台", "邯郸"],
                "山西省": ["太原", "大同", "朔州", "阳泉", "长治", "晋城", "忻州", "吕梁", "晋中", "临汾", "运城"],
                "辽宁省": ["沈阳", "朝阳", "阜新", "铁岭", "抚顺", "本溪", "辽阳", "鞍山", "丹东", "大连", "营口", "盘锦", "锦州", "葫芦岛"],
                "吉林省": ["长春", "白城", "松原", "吉林", "四平", "辽源", "通化", "白山", "延边"],
                "黑龙江省": ["哈尔滨", "齐齐哈尔", "黑河", "大庆", "伊春", "鹤岗", "佳木斯", "双鸭山", "七台河", "鸡西", "牡丹江", "绥化", "大兴安"],
                "江苏省": ["南京", "徐州", "连云港", "宿迁", "淮阴", "盐城", "扬州", "泰州", "南通", "镇江", "常州", "无锡", "苏州"],
                "浙江省": ["杭州", "湖州", "嘉兴", "舟山", "宁波", "绍兴", "金华", "台州", "温州", "丽水"],
                "安徽省": ["合肥", "宿州", "淮北", "阜阳", "蚌埠", "淮南", "滁州", "马鞍山", "芜湖", "铜陵", "安庆", "黄山", "六安", "巢湖", "池州", "宣城"],
                "福建省": ["福州", "南平", "三明", "莆田", "泉州", "厦门", "漳州", "龙岩", "宁德"],
                "江西省": ["南昌", "九江", "景德镇", "鹰潭", "新余", "萍乡", "赣州", "上饶", "抚州", "宜春", "吉安"],
                "山东省": ["济南", "聊城", "德州", "东营", "淄博", "潍坊", "烟台", "威海", "青岛", "日照", "临沂", "枣庄", "济宁", "泰安", "莱芜", "滨州", "菏泽"],
                "河南省": ["郑州", "三门峡", "洛阳", "焦作", "新乡", "鹤壁", "安阳", "濮阳", "开封", "商丘", "许昌", "漯河", "平顶山", "南阳", "信阳", "周口", "驻马店"],
                "湖北省": ["武汉", "十堰", "襄攀", "荆门", "孝感", "黄冈", "鄂州", "黄石", "咸宁", "荆州", "宜昌", "恩施", "襄樊"],
                "湖南省": ["长沙", "张家界", "常德", "益阳", "岳阳", "株洲", "湘潭", "衡阳", "郴州", "永州", "邵阳", "怀化", "娄底", "湘西"],
                "广东省": ["广州", "清远", "韶关", "河源", "梅州", "潮州", "汕头", "揭阳", "汕尾", "惠州", "东莞", "深圳", "珠海", "江门", "佛山", "肇庆", "云浮", "阳江", "茂名", "湛江"],
                "海南省": ["海口", "三亚"],
                "四川省": ["成都", "广元", "绵阳", "德阳", "南充", "广安", "遂宁", "内江", "乐山", "自贡", "泸州", "宜宾", "攀枝花", "巴中", "达川", "资阳", "眉山", "雅安", "阿坝", "甘孜", "凉山"],
                "贵州省": ["贵阳", "六盘水", "遵义", "毕节", "铜仁", "安顺", "黔东南", "黔南", "黔西南"],
                "云南省": ["昆明", "曲靖", "玉溪", "丽江", "昭通", "思茅", "临沧", "保山", "德宏", "怒江", "迪庆", "大理", "楚雄", "红河", "文山", "西双版纳"],
                "陕西省": ["西安", "延安", "铜川", "渭南", "咸阳", "宝鸡", "汉中", "榆林", "商洛", "安康"],
                "甘肃省": ["兰州", "嘉峪关", "金昌", "白银", "天水", "酒泉", "张掖", "武威", "庆阳", "平凉", "定西", "陇南", "临夏", "甘南"],
                "青海省": ["西宁", "海东", "西宁", "海北", "海南", "黄南", "果洛", "玉树", "海西"],
                "内蒙古": ["呼和浩特", "包头", "乌海", "赤峰", "呼伦贝尔盟", "兴安盟", "哲里木盟", "锡林郭勒盟", "乌兰察布盟", "鄂尔多斯", "巴彦淖尔盟", "阿拉善盟"],
                "广西": ["南宁", "桂林", "柳州", "梧州", "贵港", "玉林", "钦州", "北海", "防城港", "南宁", "百色", "河池", "柳州", "贺州"],
                "西藏": ["拉萨", "那曲", "昌都", "林芝", "山南", "日喀则", "阿里"],
                "宁夏": ["银川", "石嘴山", "吴忠", "固原"],
                "新疆": ["乌鲁木齐", "克拉玛依", "喀什", "阿克苏", "和田", "吐鲁番", "哈密", "博尔塔拉", "昌吉", "巴音郭楞", "伊犁", "塔城", "阿勒泰"],
                "香港": ["香港"],
                "澳门": ["澳门"],
                "台湾": ["台北", "台南", "其他"]
            },
            getProvinces: function () {
                var e = [];
                for (var t in this.cityInfo) e.push(t);
                return e
            },
            getCities: function (e) {
                return this.cityInfo[e] || []
            }
        };
        e.exports = r
    }
});