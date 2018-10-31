/*! jquery-gi-thewall v1.0.2 || Goldinteractive <mail@goldinteractive.ch> (http://goldinteractive.ch) */ ! function(a, b, c, d, e, f) {
    "use strict";
    f.support.transition = function() {
        var b = function() {
            var b, c = a.createElement("GI"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (b in d)
                if (void 0 !== c.style[b]) return d[b]
        }();
        return b && {
            end: b
        }
    }();
    var g = 0,
        h = function(c, e) {
            var h = this,
                i = {
                    onBeforeInit: null,
                    onReady: null,
                    onViewPortUpdate: null,
                    onItemChange: null,
                    onDestroy: null,
                    onShow: null,
                    onHide: null,
                    onContentLoading: null,
                    onContentLoaded: null,
                    margin: {
                        top: 10,
                        bottom: 10
                    },
                    scrollerElm: null,
                    scrollOffset: 150,
                    arrows: !0,
                    closebutton: !0,
                    keyboardNavigation: !0,
                    animationSpeed: 300,
                   // autoscroll: !0,
                    responsive: !0,
                    initialWrapperHeight: 600,
                    dynamicHeight: !0,
                    nextButtonClass: "",
                    prevButtonClass: "",
                    closeButtonClass: ""
                },
                j = "ontouchstart" in b || b.DocumentTouch && a instanceof DocumentTouch,
                k = [33, 34, 35, 36, 37, 38, 39, 40, 27],
                l = !1,
                m = f.support.transition,
                n = !1,
                o = 0,
                p = ".GITheWall" + g,
                q = {
                    click: j ? "touchstart" : "click",
                    mousedown: j ? "touchstart" : "mousedown",
                    mouseup: j ? "touchend" : "mouseup",
                    mousemove: j ? "touchmove" : "mousemove",
                    mouseleave: j ? "touchleave" : "mouseleave"
                },
                r = f.extend(i, e);
            this.$el = c, this.$expanderWrapper = f('<div class="GI_TW_expander"></div>'), this.$contentPointer = f('<div class="GI_TW_pointer"></div>'), this.$expanderInner = f('<div class="GI_TW_expander-inner"></div>'), this.$list = f("> ul", this.$el).eq(0), this.$items = f("> li", this.$list), this.itemsLength = this.$items.length, this.currentIndex = null, this.currentRowIndex = null, this.$selectedli = null, this.selectedLiData = null, Function.prototype.debounce = function(a, b) {
                var c, d, e = this;
                return function() {
                    var f = this,
                        g = arguments,
                        h = function() {
                            c = null, b || (d = e.apply(f, g))
                        },
                        i = b && !c;
                    return clearTimeout(c), c = setTimeout(h, a), i && (d = e.apply(f, g)), d
                }
            };
            var s = function(a, b) {
                    "function" == typeof a && f.proxy(a, h, b)()
                },
                t = function() {
                    this.$expanderWrapper.append('<i class="GI_TW_arrow GI_TW_prev GI_TW_Controls"><span class="' + r.prevButtonClass + '"></span></i><i class="GI_TW_arrow GI_TW_next GI_TW_Controls"><span class="' + r.nextButtonClass + '"></span></i>'), this.$next = f(".GI_TW_next", this.$expanderWrapper), this.$prev = f(".GI_TW_prev", this.$expanderWrapper)
                },
                u = function() {
                    h.$prev.toggleClass("GI_TW_hidden", h.currentIndex <= 0), h.$next.toggleClass("GI_TW_hidden", h.currentIndex >= h.itemsLength - 1)
                },
                v = function(a) {
                    return r.autoscroll ? void f(r.scrollerElm || "html,body").animate({
                        scrollTop: a
                    }) : !1
                },
                w = function() {
                    h.$items.removeClass("GI_TW_Current"), "number" == typeof h.currentIndex && h.$items.eq(h.currentIndex).addClass("GI_TW_Current")
                },
                x = function() {
                    this.$contentPointer.css({
                        left: this.selectedLiData.offset.left + this.$selectedli.width() / 2
                    })
                },
                y = function(a) {
                    var b = new f.Deferred,
                        c = f(a).html();
                    if (!c.length) throw new Error('No element can be found using the "' + a + '" selector');
                    return h.$expanderInner.html(c), b.resolve(), b.promise()
                },
                z = function(a) {
                    var b = new f.Deferred,
                        c = new Image;
                    return c.onload = function() {
                        h.$expanderInner.html('<div class="GI_TW_fullimg"><img src="' + a + '" /></div>'), b.resolve(), c = null
                    }, c.src = a, b.promise()
                },
                A = function(a) {
                    var b = new f.Deferred;
                    return f.get(a, function(a) {
                        h.$expanderInner.html(a), b.resolve()
                    }), b.promise()
                },
                B = function(a) {
                    this.$expanderInner.css({
                        height: a
                    }), a !== o && (o = a, this.$expanderWrapper.stop(!0, !1).addClass(m ? "animating" : "")[m ? "css" : "animate"]({
                        height: a
                    }, r.animationSpeed), this.updateElementsPosition())
                },
                C = function() {
                    this.selectedLiData.index < 0 || this.selectedLiData.index >= this.itemsLength || (this.currentIndex = this.selectedLiData.index, this.loadInnerContents(), s(r.onItemChange, this.currentIndex))
                },
                D = function(a) {
                    this.isOpened() && void 0 === a.target.form && (a.target.isContentEditable || (f.inArray(a.keyCode, k) > -1 && a.preventDefault(), 39 === a.keyCode ? this.next() : 37 === a.keyCode ? this.prev() : 27 === a.keyCode && this.hideExpander()))
                },
                E = function(a) {
                    a.stopImmediatePropagation(), a.preventDefault();
                    var b = f(a.currentTarget);
                    b.hasClass("GI_TW_next") ? this.next() : this.prev()
                },
                F = function() {
                    s(r.onBeforeInit), r.arrows && (t.call(this), u()), r.closebutton && (this.$expanderWrapper.append('<div class="GI_TW_close GI_TW_Controls"><span class="' + r.closeButtonClass + '"></span></div>'), this.$closebutton = f(".GI_TW_items", this.$expanderWrapper)), this.$expanderWrapper.append(this.$contentPointer), this.$expanderWrapper.append(this.$expanderInner), this.$el.prepend(this.$expanderWrapper), this.bindAll(), s(r.onReady), g++
                };
            return this.setLisOffsets = function() {
                var a, b = 0,
                    c = 0;
                this.$items.each(f.proxy(function(d, e) {
                    var g = f(e),
                        h = g.data();
                    g.removeClass("GI_TW_First GI_TW_Last GI_TW_Index-" + h.index + " GI_TW_Row-" + h.rowIndex);
                    var i = !1,
                        j = g.position(),
                        k = {
                            top: ~~j.top,
                            left: ~~j.left
                        };
                    (k.top >= b + 3 || k.top <= b - 3) && (a && a.addClass("GI_TW_Last"), i = !0, c++), g.addClass((i ? "GI_TW_First " : " ") + "GI_TW_Index-" + d + " GI_TW_Row-" + c), g.data({
                        rowIndex: c,
                        offset: k,
                        index: d
                    }), a = g, b = k.top
                }, this))
            }, this.setViewport = function() {
                l && (this.setLisOffsets(), this.updateElementsPosition(), x.call(this), s(r.onViewPortUpdate))
            }, this.loadInnerContents = function() {
                var a, b = this.$selectedli.find("a"),
                    c = this.selectedLiData.href || b.attr("href");
                if (n = !0, this.$expanderInner.html('<div class="GI_TW_loading"></div>'), !c) return void console.warn("sorry.. it was not possible to load any content");
                switch (s(r.onContentLoading), this.selectedLiData.contenttype) {
                    case "ajax":
                        a = A(c);
                        break;
                    case "inline":
                        a = y(c);
                        break;
                    default:
                        a = z(c)
                }
                a.then(function() {
                    h.$expanderInner.css({
                        height: "auto",
						minHeight: "150px",
						padding: "30px"
                    });
                    var a = r.dynamicHeight ? h.$expanderInner.outerHeight() : r.initialWrapperHeight;
                    B.call(h, a), h.update(), v(h.$expanderWrapper.offset().top - r.scrollOffset), s(r.onContentLoaded), n = !1
                })
            }, this.showExpander = function(a) {
                return a.preventDefault(), this.$selectedli = f(a.currentTarget), this.$selectedli.length && this.$selectedli.hasClass("GI_TW_Current") ? void this.hideExpander() : (this.selectedLiData = this.$selectedli.data(), l ? void C.call(this) : (l = !0, this.$expanderWrapper.addClass("opened"), this.setViewport(), C.call(this), void s(r.onShow)))
            }, this.hideExpander = function() {
                this.$expanderWrapper.removeClass("opened").stop(!0, !1)[m ? "css" : "animate"]({
                    height: 0
                }, r.animationSpeed), this.$expanderInner.empty(), this.currentRowIndex = null, this.$selectedli = null, this.selectedLiData = null, this.currentIndex = null, o = 0, this.$items.removeClass("GI_TW_Selected_Row").animate({
					
                    marginBottom: 0
                }, r.animationSpeed), l = !1, w(), s(r.onHide)
            }, this.refresh = function() {
                this.$list = f("> ul", this.$el).eq(0), this.$items = f("> li", this.$list), this.$list.has(this.$selectedli).length || this.hideExpander(), this.itemsLength = this.$items.length, l && (this.setLisOffsets(), this.update())
            }, this.update = function() {
                this.selectedLiData = this.$selectedli.data(), x.call(this), this.selectedLiData.rowIndex !== this.currentRowIndex && this.updateElementsPosition(), r.arrows && u(), w.call(this), this.currentRowIndex = this.selectedLiData.rowIndex
            }, this.updateElementsPosition = function() {
                this.$items.each(function(a, b) {
					
////// responsive tables //////
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var maxwidth = $(window).width();
 $('table').each(function(){
	   if ( $(this).width() > maxwidth ) {
 var tableht = $(this).height();
 $(this).wrap('<div style="overflow:hidden"><div class="scrolltable"></div></div>');
 $('.scrolltable').height(tableht + 40);
 return false;
	   }
 });

}	
	  					
                    var c = f(b),
                        d = c.data(),
                        e = d && d.rowIndex === h.selectedLiData.rowIndex;
                    c.toggleClass("GI_TW_Selected_Row", e).stop(!0, !1)[m ? "css" : "animate"]({
                        marginBottom: e ? Number(o + r.margin.bottom) : 0
                    }, e ? r.animationSpeed : 0)
                }), this.setLisOffsets(), this.updateExpanderPosition()
            }, this.updateExpanderPosition = function() {
                if (l) {
                    var a = this.selectedLiData.offset.top + this.$selectedli.outerHeight() + r.margin.top;
                    this.$expanderWrapper.css({
                        top: a
                    })
                }
            }, this.resizeHeight = function(a) {
                B.call(this, a), this.setViewport()
            }, this.showItemByIndex = function(a) {
                var b = this.$items.eq(a);
                b.length && (this.$selectedli = b, this.selectedLiData = b.data(), C.call(this))
            }, this.isOpened = function() {
                return l
            }, this.next = function() {
                !n && l && this.currentIndex !== this.itemsLength - 1 && this.showItemByIndex(this.currentIndex + 1)
            }, this.prev = function() {
                !n && l && 0 !== this.currentIndex && this.showItemByIndex(this.currentIndex - 1)
            }, this.bindAll = function() {
                m && this.$expanderWrapper.on(m.end + p, function() {
                    f(this).removeClass("animating")
                }), r.arrows && this.$el.on(q.click + p, ".GI_TW_arrow", this.$expanderWrapper, f.proxy(E, this)), r.closebutton && this.$el.on(q.click + p, ".GI_TW_close", this.$expanderWrapper, f.proxy(this.hideExpander, this)), this.$el.on("click" + p, "> ul > li", f.proxy(this.showExpander, this)), r.responsive && d.on("resize" + p + " orientationchange" + p, f.proxy(this.setViewport.debounce(300), this)), r.keyboardNavigation && d.on("keydown" + p, f.proxy(D, this))
            }, this.unbindAll = function() {
                this.$el.off(p), this.$expanderWrapper.off(p)
            }, this.destroy = function(a) {
                a && (a.preventDefault(), a.stopImmediatePropagation()), this.hideExpander(), this.unbindAll(), this.$expanderWrapper.remove(), s(r.onDestroy)
            }, F.call(this), this
        };
    f.fn.GITheWall = function(a) {
        return this.length ? new h(this, a) : void 0
    }
}(document, window, $(document), $(window), $("body"), jQuery);