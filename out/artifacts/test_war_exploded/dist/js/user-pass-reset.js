webpackJsonp([9], {
    0: function (e, r, t) {
        e.exports = t(54)
    },
    2: function (e, r, t) {
        "use strict";
        var s = t(1),
            o = {
                login: function (e, r, t) {
                    s.request({
                        url: s.getServerUrl("/user/login.do"),
                        data: e,
                        method: "POST",
                        success: r,
                        error: t
                    })
                },
                checkUsername: function (e, r, t) {
                    s.request({
                        url: s.getServerUrl("/user/check_valid.do"),
                        data: {
                            type: "username",
                            str: e
                        },
                        method: "POST",
                        success: r,
                        error: t
                    })
                },
                register: function (e, r, t) {
                    s.request({
                        url: s.getServerUrl("/user/register.do"),
                        data: e,
                        method: "POST",
                        success: r,
                        error: t
                    })
                },
                checkLogin: function (e, r) {
                    s.request({
                        url: s.getServerUrl("/user/get_user_info.do"),
                        method: "POST",
                        success: e,
                        error: r
                    })
                },
                getQuestion: function (e, r, t) {
                    s.request({
                        url: s.getServerUrl("/user/forget_get_question.do"),
                        data: {
                            username: e
                        },
                        method: "POST",
                        success: r,
                        error: t
                    })
                },
                checkAnswer: function (e, r, t) {
                    s.request({
                        url: s.getServerUrl("/user/forget_check_answer.do"),
                        data: e,
                        method: "POST",
                        success: r,
                        error: t
                    })
                },
                resetPassword: function (e, r, t) {
                    s.request({
                        url: s.getServerUrl("/user/forget_reset_password.do"),
                        data: e,
                        method: "POST",
                        success: r,
                        error: t
                    })
                },
                getUserInfo: function (e, r) {
                    s.request({
                        url: s.getServerUrl("/user/get_information.do"),
                        method: "POST",
                        success: e,
                        error: r
                    })
                },
                updateUserInfo: function (e, r, t) {
                    s.request({
                        url: s.getServerUrl("/user/update_information.do"),
                        data: e,
                        method: "POST",
                        success: r,
                        error: t
                    })
                },
                updatePassword: function (e, r, t) {
                    s.request({
                        url: s.getServerUrl("/user/reset_password.do"),
                        data: e,
                        method: "POST",
                        success: r,
                        error: t
                    })
                },
                logout: function (e, r) {
                    s.request({
                        url: s.getServerUrl("/user/logout.do"),
                        method: "POST",
                        success: e,
                        error: r
                    })
                }
            };
        e.exports = o
    },
    9: function (e, r) {},
    12: function (e, r, t) {
        "use strict";
        t(9)
    },
    25: function (e, r) {},
    54: function (e, r, t) {
        "use strict";
        t(25), t(12);
        var s = t(2),
            o = (t(1), {
                show: function (e) {
                    $(".error-item").show().find(".err-msg").text(e)
                },
                hide: function () {
                    $(".error-item").hide().find(".err-msg").text("")
                }
            }),
            n = {
                data: {
                    username: "",
                    question: "",
                    answer: "",
                    token: ""
                },
                init: function () {
                    this.onLoad(), this.bindEvent()
                },
                onLoad: function () {
                    this.loadStepUsername()
                },
                bindEvent: function () {
                    var e = this;
                    $("#submit-username").click(function () {
                        var r = $.trim($("#username").val());
                        r ? s.getQuestion(r, function (t) {
                            e.data.username = r, e.data.question = t, e.loadStepQuestion()
                        }, function (e) {
                            o.show(e)
                        }) : o.show("请输入用户名")
                    }), $("#submit-question").click(function () {
                        var r = $.trim($("#answer").val());
                        r ? s.checkAnswer({
                            username: e.data.username,
                            question: e.data.question,
                            answer: r
                        }, function (t) {
                            e.data.answer = r, e.data.token = t, e.loadStepPassword()
                        }, function (e) {
                            o.show(e)
                        }) : o.show("请输入密码提示问题答案")
                    }), $("#submit-password").click(function () {
                        var r = $.trim($("#password").val());
                        r && r.length >= 6 ? s.resetPassword({
                            username: e.data.username,
                            passwordNew: r,
                            forgetToken: e.data.token
                        }, function (e) {
                            window.location.href = "./result.html?type=pass-reset"
                        }, function (e) {
                            o.show(e)
                        }) : o.show("请输入不少于6位的新密码")
                    })
                },
                loadStepUsername: function () {
                    $(".step-username").show()
                },
                loadStepQuestion: function () {
                    o.hide(), $(".step-username").hide().siblings(".step-question").show().find(".question").text(this.data.question)
                },
                loadStepPassword: function () {
                    o.hide(), $(".step-question").hide().siblings(".step-password").show()
                }
            };
        $(function () {
            n.init()
        })
    }
});