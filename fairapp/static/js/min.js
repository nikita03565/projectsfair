/**
 * Created by urazoff on 21.08.2018.
 */
! function (t) {
	function e() {
		var e = t("#spbgu-pages-documents-search-form");
		if (e.length) {
			var o = t("#spbgu-pages-documents-search-form #edit-struct1"),
				s = t("#spbgu-pages-documents-search-form #edit-fields"),
				a = t("#spbgu-pages-documents-search-form #edit-struct2"),
				l = t("#spbgu-pages-documents-search-form #edit-type"),
				r = t("#spbgu-pages-documents-search-form #edit-author");
			n(o, s, a, r, l), i(o, s, a), t(l).on("change", function (t) {
				n(o, s, a, r, l)
			}), t(o).on("change", function (e) {
				t(o).val();
				t(s).val(""), t(s).trigger("chosen:updated"), i(o, s, a)
			}), t(s).on("change", function (e) {
				t(s).val();
				t(o).val(""), t(o).trigger("chosen:updated"), i(o, s, a)
			})
		}
	}

	function i(e, i, n) {
		var o = "";
		t(e).val() ? o = t(e).val() : t(i).val() && (o = t(i).val());
		var s = t(n).val();
		t.getJSON("/openuniversity/documents/structures", {
			parent: o,
			selected: s
		}, function (e) {
			e.total > 1 ? (t(n).html(e.html), t(n).trigger("chosen:updated"), t("#section-department").show()) : t("#section-department").hide()
		})
	}

	function n(e, i, n, o, s) {
		var a = t('#spbgu-pages-documents-search-form [name="doc_struct"]').val().split(","),
			l = t('#spbgu-pages-documents-search-form [name="doc_author"]').val().split(","),
			r = t(s).val();
		r ? (t.inArray(r, a) != -1 ? (t("#section-structures").show(), t("#section-fields").show()) : (t("#section-structures").hide(), t("#section-fields").hide(), t("#section-department").hide(), t(e).val(""), t(i).val(""), t(n).val("")), t.inArray(r, l) != -1 ? t("#section-author").show() : (t("#section-author").hide(), t(o).val(""))) : (t("#section-structures").hide(), t("#section-fields").hide(), t("#section-department").hide(), t(e).val(""), t(i).val(""), t(n).val(""), t("#section-author").hide(), t(o).val(""))
	}

	function o() {
		document.documentElement.clientWidth != x && (x = document.documentElement.clientWidth, C.trigger("destroy.dot"), adaptiveMedia.update(), P.reload(), p(), u(), E.onResize(), C.dotdotdot(), H.update())
	}

	function s(e, i) {
		this.section = e, this.$body = t("body"), this.$html = t("html"), this.$page = t("." + e), this.$input = this.$page.find(".form-search__input"), this.hideScroll = i, this.scrollPosition = 0, this.scrollPositionIE = 0, this.$openBt = t(".js-open-" + e), this.$closeBt = t(".js-close-" + e);
		var n = this;
		this.$openBt.on("click", function () {
			n.openPage()
		}), this.$closeBt.on("click", function () {
			n.closePage()
		}), t(document).keyup(function (t) {
			27 == t.keyCode && n.closePage()
		}), this.overflow = !1, this.$pSearch = t(".page-search"), t(window).on("resize", function () {
			n.overflow = t(".page-search > div").innerHeight() - n.$pSearch.height()
		})
	}

	function a() {
		h(), E.initSlider(), f(), P.inti(), l()
	}

	function l() {
		T = [];
		var e = t(".js-gallery");
		e.length && e.each(function (e) {
			var i = t(this),
				n = r(i);
			t(".gallery__wrap").css("height", "auto"), c(i, n), i.bxSlider({
				controls: !0,
				pager: !0,
				pagerType: "short",
				pagerShortSeparator: " из ",
				nextText: "",
				prevText: "",
				adaptiveHeight: !0,
				oneToOneTouch: !1,
				preventDefaultSwipeX: !0,
				mode: "fade",
				speed: 50,
				adaptiveHeightSpeed: 0
			}), T[e] = i, d(i, n)
		})
	}

	function r(t) {
		return t.width() / 1.5
	}

	function c(t, e) {
		t.find(".gallery-item__media").css("height", e), t.find(".gallery-item__bt-download").css("top", e + 20)
	}

	function d(t, e) {
		var i = t.closest(".gallery__wrap");
		i.find(".bx-controls-direction").css("height", e), i.find(".bx-pager").css("top", e + 15)
	}

	function u() {
		T.forEach(function (t) {
			t.destroySlider()
		}), l()
	}

	function h() {
		k = [];
		var e = t(".js-slider");
		e.length && e.each(function (e) {
			var i = t(this),
				n = i.find(".slider__item").innerWidth();
			i.bxSlider({
				controls: !0,
				pager: !1,
				infiniteLoop: !1,
				hideControlOnEnd: !0,
				nextText: "",
				prevText: "",
				adaptiveHeight: !0,
				adaptiveHeightSpeed: 0,
				oneToOneTouch: !1,
				preventDefaultSwipeX: !0,
				minSlides: 1,
				maxSlides: 4,
				slideWidth: n,
				onSliderLoad: function () {
					n = i.find(".slider__item").width(), i.find(".js-adaptive-media").css("height", n / (16 / 9))
				}
			}), k[e] = i
		})
	}

	function p() {
		k.forEach(function (t) {
			t.destroySlider()
		}), h()
	}

	function f() {
		var e = t(".js-headline-slider");
		e.length && e.bxSlider({
			controls: !0,
			nextText: "",
			prevText: "",
			pager: !0,
			pagerType: "short",
			oneToOneTouch: !1,
			preventDefaultSwipeX: !0,
			auto: !0,
			autoControls: !0,
			startText: "",
			stopText: "",
			autoControlsCombine: !0,
			adaptiveHeight: !0,
			mode: "fade",
			speed: 0,
			pause: 8e3,
			adaptiveHeightSpeed: 0,
			onSlideBefore: function (e, i) {
				var n = t(".slider-headline__item");
				n.eq(i).removeClass("slider-anim"), t(e).addClass("slider-anim")
			}
		})
	}

	function m() {
		var e = t(".js-hint");
		e.length && (e.on("click", function (t) {
			v(this, t)
		}), t(".hint-content__bt-close").on("click", function () {
			g()
		}), t(".hint-content__wrap").on("click", function (t) {
			t.stopPropagation()
		}), t("body").on("click", function () {
			g()
		}))
	}

	function v(e, i) {
		i.stopPropagation();
		var n = t(e),
			o = n.hasClass("hint--show");
		g(), o || n.addClass("hint--show")
	}

	function g() {
		t(".hint").removeClass("hint--show")
	}

	function b() {
		t(".editor table").wrap('<div class="table-wrap"></div>')
	}

	function w() {
		var e = t(".js-datepicker-inline");
		e.length && t.getJSON("/news-events/calendar/dates", function (i) {
			var n = I("date"),
				o = i;
			e.datepicker({
				showOtherMonths: !0,
				selectOtherMonths: !0,
				dateFormat: "yy-mm-dd",
				defaultDate: n,
				beforeShowDay: function (e) {
					var i = t.datepicker.formatDate("yy-mm-dd", e);
					return t.inArray(i, o) !== -1 ? [!0, "ui-datapicker-data"] : [!1, ""]
				},
				onSelect: function (t, e) {
					window.location.href = "/topics/" + t
				}
			})
		});
		var i = t(".js-datepicker");
		i.length && i.datepicker()
	}

	function $() {
		var e = t(".section-selector select");
		if (e.length) {
			var i = t("#" + e.attr("data-section"));
			i.addClass("section--show"), e.on("change", function () {
				var e = t(this),
					i = e.val(),
					n = t("#" + i),
					o = t("#" + e.attr("data-section"));
				o.removeClass("section--show"), n.addClass("section--show"), e.attr("data-section", i)
			})
		}
	}

	function y() {
		var e = t(".collapse__bt");
		e.length && e.on("click", function () {
			var e = t(this).parent();
			e.toggleClass("collapse--open")
		})
	}
	var C;
	t("document").ready(function () {
		_.init(), a(), m(), W.inti(), $();
		new s("page-search", (!0)), new s("search-context");
		y(), adaptiveMedia.init(), H.init(), w(), V.init(), j.init(), C = t(".js-crop-text"), C.dotdotdot(), b(), e()
	}), t(window).load(function () {
		C.trigger("destroy.dot"), C.dotdotdot()
	});
	var S, x = document.documentElement.clientWidth;
	window.onresize = function () {
		clearTimeout(S), S = setTimeout(o, 160)
	};
	var _ = function () {
		function e(e, i) {
			n(i), t(e).parent().addClass(i)
		}

		function i(t) {
			a(), e(t, "menu--show")
		}

		function n(e) {
			t("." + e).removeClass(e)
		}

		function o() {
			n("menu--show"), n("menu--open"), n("menu-mobile--show"), document.body.clientWidth > 992 && n("menu-selector--open"), m.removeClass("no-scroll")
		}

		function s() {
			f = window.setTimeout(n.bind(null, "menu--show"), p)
		}

		function a() {
			f && (window.clearTimeout(f), f = null)
		}

		function l() {
			var e = t(".page-header__menu-bt");
			e.length && (e.on("click", function (e) {
				e.stopPropagation();
				var i = t(".menu-mobile");
				i.hasClass("menu-mobile--show") ? o() : (o(), i.addClass("menu-mobile--show"), i.scrollTop(0), m.addClass("no-scroll"))
			}), e.on("touchend", function (t) {
				t.stopPropagation()
			}))
		}

		function r() {
			var e = t(".menu-main > .menu-item > a:not([class])");
			e.length && e.mouseover(function () {
				a(), n("menu--show")
			})
		}

		function c() {
			var o = t(".menu-bt");
			if (o.length) {
				var l = t(".js-sub-menu");
				o.on("click", function (i) {
					i.stopPropagation();
					var o = t(this).parent();
					o.hasClass("menu--open") ? n("menu--open") : e(this, "menu--open"), t(".menu-mobile").hasClass("menu-mobile--show") && i.preventDefault()
				}), o.mouseover(function () {
					i(this)
				}).mouseout(function () {
					s()
				}), l.mouseover(function () {
					a()
				}).mouseout(function () {
					s()
				}), l.on("click", function (t) {
					t.stopPropagation()
				})
			}
		}

		function d() {
			var e = t(".menu-selector");
			e.length && (e.on("click", function (e) {
				e.stopPropagation();
				var i = t(this);
				i.hasClass("menu-selector--open") ? (o(), i.removeClass("menu-selector--open")) : (o(), i.addClass("menu-selector--open"))
			}), e.on("touchend", function (t) {
				t.stopPropagation()
			}))
		}

		function u() {
			var i = t(".menu-sub-bt");
			i.length && i.on("click", function (i) {
				i.preventDefault(), i.stopPropagation();
				var o = t(this).parent();
				o.hasClass("menu-sub--open") ? n("menu-sub--open") : e(this, "menu-sub--open")
			})
		}

		function h() {
			var e = t(".menu-item  a");
			e.on("click touchend", function (t) {
				t.stopPropagation()
			}), t(".menu-mobile").on("click touchend", function (t) {
				t.stopPropagation()
			})
		}
		var p = 400,
			f = 0,
			m = t("body");
		return {
			init: function () {
				l(), r(), c(), d(), u(), h(), m.on("click", function (t) {
					o()
				}), m.on("touchend", function (t) {
					o()
				})
			}
		}
	}();
	s.prototype.openPage = function () {
		var e = this;
		this.$page.addClass(this.section + "--show"), this.hideScroll && (e.scrollPosition = e.$body.scrollTop(), e.scrollPositionIE = e.$html.scrollTop(), e.$body.scrollTop(0), e.$html.scrollTop(0), e.$html.addClass("g-no-scroll")), window.innerWidth > 1024 ? this.$input.focus() : setTimeout(function () {
			t(".page-search .form-search__input")[0].focus()
		}, 700)
	}, s.prototype.closePage = function () {
		this.hideScroll && (this.$html.removeClass("g-no-scroll"), this.$body.scrollTop(this.scrollPosition), this.scrollPosition = 0, this.scrollPositionIE && (this.$html.scrollTop(this.scrollPositionIE), this.scrollPositionIE = 0)), this.$page.removeClass(this.section + "--show")
	};
	var T = [],
		k = [],
		E = {
			init: function () {
				this.isSliderInit = !1, this.$sliderPage = t(".js-slider-page"), this.$slideMedia = this.$sliderPage.find(".page-headline__media"), this.$sliderWrap = t(".slider-page-wrap"), this.slideMediaHeight = this.getSlideMediaHeight();
				var e = this;
				this.$sliderWrap.on("click", ".bx-next", function () {
					j.pauseVideo(e.$sliderWrap.find(".js-video iframe"))
				}), t("body").append("<!-- <ostenvind/>  -->")
			},
			initSlider: function () {
				var e = this;
				if (this.init(), this.$sliderPage.length) {
					var i = this.$sliderWrap.find(".slider-page__item").innerHeight();
					this.$sliderWrap.css("height", i), this.$sliderPage.bxSlider({
						controls: !0,
						pager: !1,
						nextText: "",
						prevText: "",
						adaptiveHeight: !0,
						adaptiveHeightSpeed: 400,
						mode: "fade",
						speed: 0,
						easing: "ease-in",
						onSlideBefore: function (e, i) {
							var n = t(".slider-page__item");
							n.eq(i).removeClass("slider-anim"), t(e).addClass("slider-anim")
						},
						onSliderLoad: function () {
							e.$bxViewport || (e.$bxViewport = e.$sliderWrap.find(".bx-viewport"), e.$updateBt = e.$sliderWrap.find(".bx-next")), e.$sliderWrap.css("height", "auto"), e.$bxViewport.css("min-height", "auto"), e.slideMediaHeight = e.getSlideMediaHeight(), e.setUpdateButtonPosition(), e.isSliderInit = !0
						}
					}), this.isSliderInit || (this.$bxViewport = this.$sliderWrap.find(".bx-viewport"), this.$updateBt = this.$sliderWrap.find(".bx-next"), this.$bxViewport.css("min-height", i), this.setUpdateButtonPosition())
				}
			},
			getSlideMediaHeight: function () {
				return this.$slideMedia.innerHeight()
			},
			setUpdateButtonPosition: function () {
				window.innerWidth < 992 ? this.$updateBt.css("top", this.slideMediaHeight) : this.$updateBt.css("top", 0)
			},
			onResize: function () {
				this.$sliderPage.length && this.$updateBt && (this.slideMediaHeight = this.getSlideMediaHeight(), this.setUpdateButtonPosition())
			}
		},
		P = function () {
			function e() {
				var t = n.find(".slider__item").innerWidth() - 1;
				return {
					controls: !0,
					pager: !1,
					infiniteLoop: !1,
					hideControlOnEnd: !0,
					nextText: "",
					prevText: "",
					oneToOneTouch: !1,
					preventDefaultSwipeX: !0,
					minSlides: 1,
					maxSlides: 4,
					slideWidth: t
				}
			}

			function i() {
				n.bxSlider(e())
			}
			var n;
			return {
				inti: function () {
					n = t(".js-slider-promo"), n.length && i()
				},
				reload: function () {
					n.length && (n.destroySlider(), i())
				}
			}
		}(),
		W = function () {
			function e() {
				b = t(".js-filter-bt"), w = t(".js-toggle-filter-form"), c(n), b.length && b.on("click", function () {
					p(this)
				}), w.length && w.on("click", function () {
					f()
				})
			}

			function i() {
				y = t(".js-filter-selector"), y.length && y.on("change", function () {
					var e = t(this),
						i = e.find("option:first-child");
					"filter-clear" === e.val() ? (v.removeClass("form-filter--show"), i.html(i.attr("data-open-text")), i.css("display", "none")) : (v.addClass("form-filter--show"), i.html(i.attr("data-close-text")), i.css("display", "block"))
				})
			}

			function n(t) {
				b.removeClass("filter-bt--selected"), (t.activeInputs >= 3 || t.specialFields.filterLitValid && t.specialFields.filterRusValid) && o(1), t.activeCheckbox && o(2)
			}

			function o(e) {
				for (var i = 0; i < b.length; i++) {
					var n = t(b[i]);
					n.attr("data-filter") == e && n.addClass("filter-bt--selected")
				}
			}

			function s() {
				var e = t(".js-filter-item");
				if (e.length)
					for (var i = 0; i < e.length; i++) T[i] = new h(e[i])
			}

			function a() {
				S = t("#filter-ege-rus"), x = t("#filter-ege-lit"), C = v.find(".input"), _ = v.find(".checkbox-bt__input"), C.on("keyup", function () {
					r()
				}), _.on("change", function () {
					r()
				})
			}

			function l() {
				var e = 0,
					i = 0;
				C.each(function () {
					t(this).val() && !t(this).is(":disabled") && e++
				}), _.each(function () {
					t(this).is(":checked") && i++
				});
				var n = !!(e >= 3 || S.val() && !S.is(":disabled") && x.val() && !x.is(":disabled"));
				return {
					inputValidation: n,
					formValidation: !!(i && 0 == e || n),
					activeInputs: e,
					activeCheckbox: i,
					specialFields: {
						filterRusValid: !(!S.val() || S.is(":disabled")),
						filterLitValid: !(!x.val() || x.is(":disabled"))
					}
				}
			}

			function r() {
				for (var t = l(), e = 0; e < k.length; e++) k[e](t)
			}

			function c(t) {
				k.push(t)
			}

			function d() {
				c(u)
			}

			function u(t) {
				t.formValidation ? g.prop("disabled", !1) : g.prop("disabled", !0)
			}

			function h(e) {
				var i = this;
				this.$layoutEl = t(e), this.$inputEl = this.$layoutEl.find(".input"), this.$layoutEl.on("click", function (t) {
					"LABEL" === t.target.nodeName ? i.toggleInput() : i.enableInput()
				}), this.$inputEl.on("keyup", function () {
					i.$inputEl.val() > 100 && i.$inputEl.val(100), 0 == i.$inputEl.val() && i.$inputEl.val("")
				}), this.$inputEl.on("blur", function () {
					i.$inputEl.val() || i.disableInput()
				})
			}

			function p(e) {
				var i = t(e),
					n = i.hasClass("filter-bt--act");
				if (m(), n) v.removeClass("form-filter--show");
				else {
					var o = t("#filter-content-" + i.attr("data-filter"));
					i.addClass("filter-bt--act"), o.addClass("section--show"), v.addClass("form-filter--show")
				}
			}

			function f() {
				v.toggleClass("form-filter--show")
			}

			function m() {
				b.removeClass("filter-bt--act"), $.removeClass("section--show")
			}
			var v, g, b, w, $, y, C, S, x, _, T = [],
				k = [];
			return h.prototype.enableInput = function () {
				this.$inputEl.prop("disabled", !1), this.$layoutEl.removeClass("input-layout--disabled"), this.$inputEl.focus(), r()
			}, h.prototype.disableInput = function () {
				this.$inputEl.prop("disabled", !0), this.$layoutEl.addClass("input-layout--disabled"), r()
			}, h.prototype.toggleInput = function () {
				!this.$inputEl.val() || this.$inputEl.val() && this.$layoutEl.hasClass("input-layout--disabled") ? this.enableInput() : this.disableInput()
			}, {
				inti: function () {
					v = t("#form-filter"), $ = t(".filter-content"), g = t(".form-filter__bt-submit"), e(), i(), s(), a(), d(), r()
				}
			}
		}(),
		j = function () {
			function e(e) {
				e.each(function () {
					t(this)[0].contentWindow.postMessage('{"method":"pause", "event":"command","func":"pauseVideo"}', n)
				})
			}

			function i(e) {
				e.each(function () {
					t(this)[0].contentWindow.postMessage('{"method":"play", "event":"command","func":"playVideo"}', n)
				})
			}
			var n = "*";
			return {
				init: function () {
					var e = t(".js-video");
					e.length && e.find(".video__cover").on("click", function () {
						var e = t(this),
							n = e.parent();
						n.addClass("video--show"), i(n.find("iframe"))
					})
				},
				playVideo: e,
				pauseVideo: e
			}
		}(),
		H = function () {
			function t(t) {
				var e = t || window.event,
					i = this,
					n = e.deltaY || e.detail || -e.wheelDelta;
				n < 0 && 0 == i.scrollTop && e.preventDefault(), n > 0 && i.scrollHeight - i.clientHeight - i.scrollTop <= 1 && e.preventDefault()
			}
			var e, i = "onwheel" in document ? "wheel" : "mousewheel";
			return {
				init: function () {
					e = document.querySelectorAll(".js-scroll-viewport"), this.update()
				},
				update: function () {
					for (var n = 0; n < e.length; n++) document.body.clientWidth < 992 ? e[n].removeEventListener(i, t) : e[n].addEventListener(i, t)
				}
			}
		}(),
		I = function (t) {
			var e, i, n = decodeURIComponent(window.location.search.substring(1)),
				o = n.split("&");
			for (i = 0; i < o.length; i++)
				if (e = o[i].split("="), e[0] === t) return void 0 === e[1] || e[1]
		},
		V = function () {
			return {
				init: function () {
					$formSelectors = t(".js-selector"), screen.width <= 1048 || !$formSelectors.length || $formSelectors.chosen({
						disable_search: !0,
						width: "100%"
					})
				},
				update: function () {
					$formSelectors.trigger("chosen:updated")
				},
				destroy: function () {
					$formSelectors.chosen("destroy")
				}
			}
		}()
}(jQuery);