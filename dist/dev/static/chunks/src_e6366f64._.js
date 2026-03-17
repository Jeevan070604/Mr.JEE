(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "21df96ab606c1789eb61129dc0b0a8e20181f8ca3fdb4c860403baec6f7758cd") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21df96ab606c1789eb61129dc0b0a8e20181f8ca3fdb4c860403baec6f7758cd";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "CartProvider[addToCart]": (item)=>{
                setItems({
                    "CartProvider[addToCart > setItems()]": (prev)=>{
                        const existing = prev.find({
                            "CartProvider[addToCart > setItems() > prev.find()]": (i)=>i.id === item.id
                        }["CartProvider[addToCart > setItems() > prev.find()]"]);
                        if (existing) {
                            return prev.map({
                                "CartProvider[addToCart > setItems() > prev.map()]": (i_0)=>i_0.id === item.id ? {
                                        ...i_0,
                                        quantity: i_0.quantity + 1
                                    } : i_0
                            }["CartProvider[addToCart > setItems() > prev.map()]"]);
                        }
                        return [
                            ...prev,
                            {
                                ...item,
                                quantity: 1
                            }
                        ];
                    }
                }["CartProvider[addToCart > setItems()]"]);
            }
        })["CartProvider[addToCart]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const addToCart = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "CartProvider[removeFromCart]": (itemId)=>{
                setItems({
                    "CartProvider[removeFromCart > setItems()]": (prev_0)=>prev_0.filter({
                            "CartProvider[removeFromCart > setItems() > prev_0.filter()]": (i_1)=>i_1.id !== itemId
                        }["CartProvider[removeFromCart > setItems() > prev_0.filter()]"])
                }["CartProvider[removeFromCart > setItems()]"]);
            }
        })["CartProvider[removeFromCart]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const removeFromCart = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "CartProvider[updateQuantity]": (itemId_0, quantity)=>{
                if (quantity <= 0) {
                    removeFromCart(itemId_0);
                    return;
                }
                setItems({
                    "CartProvider[updateQuantity > setItems()]": (prev_1)=>prev_1.map({
                            "CartProvider[updateQuantity > setItems() > prev_1.map()]": (i_2)=>i_2.id === itemId_0 ? {
                                    ...i_2,
                                    quantity
                                } : i_2
                        }["CartProvider[updateQuantity > setItems() > prev_1.map()]"])
                }["CartProvider[updateQuantity > setItems()]"]);
            }
        })["CartProvider[updateQuantity]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const updateQuantity = t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "CartProvider[clearCart]": ()=>{
                setItems([]);
            }
        })["CartProvider[clearCart]"];
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const clearCart = t5;
    let t6;
    if ($[6] !== items) {
        t6 = items.reduce(_CartProviderItemsReduce, 0);
        $[6] = items;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const totalItems = t6;
    let t7;
    if ($[8] !== items) {
        t7 = items.reduce(_CartProviderItemsReduce2, 0);
        $[8] = items;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const totalPrice = t7;
    let t8;
    if ($[10] !== isCartOpen || $[11] !== items || $[12] !== totalItems || $[13] !== totalPrice) {
        t8 = {
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice,
            isCartOpen,
            setIsCartOpen
        };
        $[10] = isCartOpen;
        $[11] = items;
        $[12] = totalItems;
        $[13] = totalPrice;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== children || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
            value: t8,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/CartContext.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[15] = children;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    return t9;
}
_s(CartProvider, "nAZSgmC3dQRHloYyInOA+A29kPc=");
_c = CartProvider;
function _CartProviderItemsReduce2(sum_0, item_1) {
    return sum_0 + item_1.price * item_1.quantity;
}
function _CartProviderItemsReduce(sum, item_0) {
    return sum + item_0.quantity;
}
function useCart() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "21df96ab606c1789eb61129dc0b0a8e20181f8ca3fdb4c860403baec6f7758cd") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21df96ab606c1789eb61129dc0b0a8e20181f8ca3fdb4c860403baec6f7758cd";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/PageLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PageLoader() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "1f1dafe6cb0b148106ed447c35161895085d4d3c4545450e7434a46ba7c6a2dc") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1f1dafe6cb0b148106ed447c35161895085d4d3c4545450e7434a46ba7c6a2dc";
    }
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "PageLoader[useEffect()]": ()=>{
                const interval = setInterval({
                    "PageLoader[useEffect() > setInterval()]": ()=>{
                        setProgress({
                            "PageLoader[useEffect() > setInterval() > setProgress()]": (prev)=>{
                                if (prev >= 100) {
                                    clearInterval(interval);
                                    setTimeout({
                                        "PageLoader[useEffect() > setInterval() > setProgress() > setTimeout()]": ()=>setIsLoading(false)
                                    }["PageLoader[useEffect() > setInterval() > setProgress() > setTimeout()]"], 500);
                                    return 100;
                                }
                                return prev + Math.random() * 15;
                            }
                        }["PageLoader[useEffect() > setInterval() > setProgress()]"]);
                    }
                }["PageLoader[useEffect() > setInterval()]"], 200);
                return ()=>clearInterval(interval);
            }
        })["PageLoader[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== isLoading || $[4] !== progress) {
        t2 = isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.5
            },
            className: "fixed inset-0 z-[200] bg-[#0B0B0B] flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    boxShadow: [
                                        "0 0 20px rgba(255, 77, 0, 0.3)",
                                        "0 0 40px rgba(255, 77, 0, 0.6)",
                                        "0 0 20px rgba(255, 77, 0, 0.3)"
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity
                                },
                                className: "w-16 h-16 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#cc3d00] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold text-2xl",
                                    children: "R"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/PageLoader.tsx",
                                    lineNumber: 69,
                                    columnNumber: 128
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/PageLoader.tsx",
                                lineNumber: 64,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold text-white",
                                        children: [
                                            "REST",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#FF4D00]",
                                                children: "ARNT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/PageLoader.tsx",
                                                lineNumber: 69,
                                                columnNumber: 254
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/PageLoader.tsx",
                                        lineNumber: 69,
                                        columnNumber: 202
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.3
                                        },
                                        className: "text-white/50 text-sm",
                                        children: "Premium Street Food"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/PageLoader.tsx",
                                        lineNumber: 69,
                                        columnNumber: 305
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/PageLoader.tsx",
                                lineNumber: 69,
                                columnNumber: 197
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/PageLoader.tsx",
                        lineNumber: 64,
                        columnNumber: 27
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PageLoader.tsx",
                    lineNumber: 56,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64 h-1 bg-white/10 rounded-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full bg-gradient-to-r from-[#FF4D00] to-[#FFD700]",
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: `${Math.min(progress, 100)}%`
                        },
                        transition: {
                            duration: 0.3
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/PageLoader.tsx",
                        lineNumber: 75,
                        columnNumber: 172
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PageLoader.tsx",
                    lineNumber: 75,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.5
                    },
                    className: "mt-4 text-white/40 text-sm",
                    children: [
                        "Loading experience... ",
                        Math.min(Math.round(progress), 100),
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/PageLoader.tsx",
                    lineNumber: 81,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 mt-6",
                    children: [
                        0,
                        1,
                        2
                    ].map(_PageLoaderAnonymous)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PageLoader.tsx",
                    lineNumber: 87,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/PageLoader.tsx",
            lineNumber: 50,
            columnNumber: 23
        }, this);
        $[3] = isLoading;
        $[4] = progress;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ui/PageLoader.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    return t3;
}
_s(PageLoader, "7Tu1FLaiJMfRGh4tkUqno3L8DdM=");
_c = PageLoader;
function _PageLoaderAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "w-2 h-2 rounded-full bg-[#FF4D00]",
        animate: {
            scale: [
                1,
                1.5,
                1
            ],
            opacity: [
                0.5,
                1,
                0.5
            ]
        },
        transition: {
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2
        }
    }, i, false, {
        fileName: "[project]/src/components/ui/PageLoader.tsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "PageLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ScrollProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ScrollProgress() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "c593e69276bbf6aa4add41768bc3d7b4fe71fb82e465152d820751140050dad2") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c593e69276bbf6aa4add41768bc3d7b4fe71fb82e465152d820751140050dad2";
    }
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, t0);
    let t1;
    if ($[2] !== scaleX) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4D00] to-[#FFD700] origin-left z-[100]",
            style: {
                scaleX
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ScrollProgress.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[2] = scaleX;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_s(ScrollProgress, "bkBmTaYBHe6KOhCXeohSImljGUw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = ScrollProgress;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const navLinks = [
    {
        name: 'Home',
        href: '#home'
    },
    {
        name: 'Menu',
        href: '#menu'
    },
    {
        name: 'Gallery',
        href: '#gallery'
    },
    {
        name: 'Reviews',
        href: '#reviews'
    },
    {
        name: 'Book Table',
        href: '#booking'
    },
    {
        name: 'Contact',
        href: '#contact'
    }
];
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "a1b1a7b8b69c4c9c3471cbed665c2b75b9eff990f520b02249f987019698cfff") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1b1a7b8b69c4c9c3471cbed665c2b75b9eff990f520b02249f987019698cfff";
    }
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { totalItems, setIsCartOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                const handleScroll = {
                    "Navbar[useEffect() > handleScroll]": ()=>{
                        setIsScrolled(window.scrollY > 50);
                    }
                }["Navbar[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Navbar[scrollToSection]": (href)=>{
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth"
                    });
                }
                setIsMobileMenuOpen(false);
            }
        })["Navbar[scrollToSection]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const scrollToSection = t2;
    let t3;
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            y: -100
        };
        t4 = {
            y: 0
        };
        t5 = {
            duration: 0.6
        };
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    const t6 = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Navbar[<motion.a>.onClick]": (e)=>{
                e.preventDefault();
                scrollToSection("#home");
            }
        })["Navbar[<motion.a>.onClick]"];
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            scale: 1.02
        };
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#cc3d00] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white font-bold text-lg",
                children: "R"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 126,
                columnNumber: 129
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            href: "#home",
            onClick: t7,
            className: "flex items-center gap-2",
            whileHover: t8,
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold text-white",
                    children: [
                        "REST",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#FF4D00]",
                            children: "ARNT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 133,
                            columnNumber: 154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 133,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center gap-8",
            children: navLinks.map({
                "Navbar[navLinks.map()]": (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                        href: link.href,
                        onClick: {
                            "Navbar[navLinks.map() > <motion.a>.onClick]": (e_0)=>{
                                e_0.preventDefault();
                                scrollToSection(link.href);
                            }
                        }["Navbar[navLinks.map() > <motion.a>.onClick]"],
                        className: "text-sm font-medium text-white/80 hover:text-[#FF4D00] transition-colors relative group",
                        whileHover: {
                            y: -2
                        },
                        children: [
                            link.name,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4D00] transition-all duration-300 group-hover:w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 148,
                                columnNumber: 23
                            }, this)
                        ]
                    }, link.name, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 141,
                        columnNumber: 43
                    }, this)
            }["Navbar[navLinks.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] !== setIsCartOpen) {
        t12 = ({
            "Navbar[<motion.button>.onClick]": ()=>setIsCartOpen(true)
        })["Navbar[<motion.button>.onClick]"];
        $[12] = setIsCartOpen;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    let t14;
    let t15;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            scale: 1.05
        };
        t14 = {
            scale: 0.95
        };
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[14] = t13;
        $[15] = t14;
        $[16] = t15;
    } else {
        t13 = $[14];
        t14 = $[15];
        t15 = $[16];
    }
    let t16;
    if ($[17] !== totalItems) {
        t16 = totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            initial: {
                scale: 0
            },
            animate: {
                scale: 1
            },
            className: "absolute -top-1 -right-1 w-5 h-5 bg-[#FF4D00] rounded-full text-xs flex items-center justify-center text-white font-bold",
            children: totalItems
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 185,
            columnNumber: 29
        }, this);
        $[17] = totalItems;
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] !== t12 || $[20] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t12,
            className: "relative p-2 rounded-full glass hover:bg-white/10 transition-colors",
            whileHover: t13,
            whileTap: t14,
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t16;
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    let t18;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            href: "https://wa.me/917639730715",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 transition-colors",
            whileHover: {
                scale: 1.02
            },
            whileTap: {
                scale: 0.98
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 210,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium",
                    children: "WhatsApp"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 210,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    if ($[23] !== isMobileMenuOpen) {
        t19 = ({
            "Navbar[<motion.button>.onClick]": ()=>setIsMobileMenuOpen(!isMobileMenuOpen)
        })["Navbar[<motion.button>.onClick]"];
        $[23] = isMobileMenuOpen;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    let t21;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            scale: 1.05
        };
        t21 = {
            scale: 0.95
        };
        $[25] = t20;
        $[26] = t21;
    } else {
        t20 = $[25];
        t21 = $[26];
    }
    let t22;
    if ($[27] !== isMobileMenuOpen) {
        t22 = isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 242,
            columnNumber: 30
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: "w-5 h-5 text-white"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 242,
            columnNumber: 69
        }, this);
        $[27] = isMobileMenuOpen;
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    let t23;
    if ($[29] !== t19 || $[30] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t19,
            className: "lg:hidden p-2 rounded-full glass",
            whileHover: t20,
            whileTap: t21,
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[29] = t19;
        $[30] = t22;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== t17 || $[33] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t10,
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            t17,
                            t18,
                            t23
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 259,
                        columnNumber: 128
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 259,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[32] = t17;
        $[33] = t23;
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    let t25;
    if ($[35] !== t24 || $[36] !== t6) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
            initial: t3,
            animate: t4,
            transition: t5,
            className: t6,
            children: t24
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[35] = t24;
        $[36] = t6;
        $[37] = t25;
    } else {
        t25 = $[37];
    }
    let t26;
    if ($[38] !== isMobileMenuOpen) {
        t26 = isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -20
            },
            transition: {
                duration: 0.3
            },
            className: "fixed inset-0 z-40 lg:hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
                    onClick: {
                        "Navbar[<div>.onClick]": ()=>setIsMobileMenuOpen(false)
                    }["Navbar[<div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 288,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        x: "100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: "100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 200
                    },
                    className: "absolute right-0 top-0 h-full w-72 glass-strong",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 pt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: navLinks.map({
                                    "Navbar[navLinks.map()]": (link_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                            href: link_0.href,
                                            onClick: {
                                                "Navbar[navLinks.map() > <motion.a>.onClick]": (e_1)=>{
                                                    e_1.preventDefault();
                                                    scrollToSection(link_0.href);
                                                }
                                            }["Navbar[navLinks.map() > <motion.a>.onClick]"],
                                            initial: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                delay: index * 0.1
                                            },
                                            className: "text-lg font-medium text-white/90 hover:text-[#FF4D00] transition-colors py-2 border-b border-white/10",
                                            children: link_0.name
                                        }, link_0.name, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 301,
                                            columnNumber: 60
                                        }, this)
                                }["Navbar[navLinks.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 300,
                                columnNumber: 97
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: "https://wa.me/917639730715",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.5
                                },
                                className: "mt-8 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full bg-green-600 text-white font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 321,
                                        columnNumber: 136
                                    }, this),
                                    "Order on WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 315,
                                columnNumber: 48
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 300,
                        columnNumber: 70
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 290,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 277,
            columnNumber: 31
        }, this);
        $[38] = isMobileMenuOpen;
        $[39] = t26;
    } else {
        t26 = $[39];
    }
    let t27;
    if ($[40] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[40] = t26;
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] !== t25 || $[43] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t25,
                t27
            ]
        }, void 0, true);
        $[42] = t25;
        $[43] = t27;
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    return t28;
}
_s(Navbar, "GCxJrBgrOTiNMWAE5UTTMVIdk/U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
'use client';
;
;
;
;
const footerLinks = {
    menu: [
        {
            name: 'Vegetarian',
            href: '#menu'
        },
        {
            name: 'Non-Vegetarian',
            href: '#menu'
        },
        {
            name: 'Fast Food',
            href: '#menu'
        },
        {
            name: 'Combos',
            href: '#menu'
        }
    ],
    company: [
        {
            name: 'About Us',
            href: '#'
        },
        {
            name: 'Careers',
            href: '#'
        },
        {
            name: 'Franchise',
            href: '#'
        },
        {
            name: 'Press',
            href: '#'
        }
    ],
    support: [
        {
            name: 'Contact Us',
            href: '#contact'
        },
        {
            name: 'FAQs',
            href: '#'
        },
        {
            name: 'Privacy Policy',
            href: '#'
        },
        {
            name: 'Terms of Service',
            href: '#'
        }
    ]
};
const socialLinks = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: '#',
        label: 'Instagram'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
        href: '#',
        label: 'Facebook'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        href: '#',
        label: 'Twitter'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
        href: '#',
        label: 'Youtube'
    }
];
function Footer() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "7770691443bc1cbe47af494e8e3f2c376a6f5c72d4b6c96823362e29e8d41c38") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7770691443bc1cbe47af494e8e3f2c376a6f5c72d4b6c96823362e29e8d41c38";
    }
    const scrollToTop = _FooterScrollToTop;
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 20
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            once: true
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#cc3d00] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white font-bold text-lg",
                children: "R"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 98,
                columnNumber: 129
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t0,
            whileInView: t1,
            viewport: t2,
            className: "mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-bold text-white",
                            children: [
                                "REST",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#FF4D00]",
                                    children: "ARNT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 105,
                                    columnNumber: 184
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 105,
                            columnNumber: 133
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 105,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/60 max-w-sm",
                    children: "Experience the finest street food with cinematic flavors. Where tradition meets innovation in every bite."
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 105,
                    columnNumber: 241
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#contact",
            className: "flex items-center gap-3 text-white/60 hover:text-[#FF4D00] transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 112,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: "123 Food Street, Mumbai"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 112,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "tel:+917639730715",
            className: "flex items-center gap-3 text-white/60 hover:text-[#FF4D00] transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 119,
                    columnNumber: 127
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: "+91 7639730715"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 119,
                    columnNumber: 156
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t5,
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:hello@restarnt.com",
                            className: "flex items-center gap-3 text-white/60 hover:text-[#FF4D00] transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 205
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: "hello@restarnt.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 233
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 126,
                            columnNumber: 80
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 126,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t10;
    let t11;
    let t12;
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            opacity: 0,
            y: 20
        };
        t9 = {
            opacity: 1,
            y: 0
        };
        t10 = {
            once: true
        };
        t11 = {
            delay: 0.1
        };
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-semibold mb-4",
            children: "Menu"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[9] = t10;
        $[10] = t11;
        $[11] = t12;
        $[12] = t8;
        $[13] = t9;
    } else {
        t10 = $[9];
        t11 = $[10];
        t12 = $[11];
        t8 = $[12];
        t9 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t8,
            whileInView: t9,
            viewport: t10,
            transition: t11,
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: footerLinks.menu.map(_FooterFooterLinksMenuMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 166,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            opacity: 0,
            y: 20
        };
        t15 = {
            opacity: 1,
            y: 0
        };
        t16 = {
            once: true
        };
        t17 = {
            delay: 0.2
        };
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-semibold mb-4",
            children: "Company"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[15] = t14;
        $[16] = t15;
        $[17] = t16;
        $[18] = t17;
        $[19] = t18;
    } else {
        t14 = $[15];
        t15 = $[16];
        t16 = $[17];
        t17 = $[18];
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t14,
            whileInView: t15,
            viewport: t16,
            transition: t17,
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: footerLinks.company.map(_FooterFooterLinksCompanyMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 206,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    let t21;
    let t22;
    let t23;
    let t24;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            opacity: 0,
            y: 20
        };
        t21 = {
            opacity: 1,
            y: 0
        };
        t22 = {
            once: true
        };
        t23 = {
            delay: 0.3
        };
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-semibold mb-4",
            children: "Support"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[21] = t20;
        $[22] = t21;
        $[23] = t22;
        $[24] = t23;
        $[25] = t24;
    } else {
        t20 = $[21];
        t21 = $[22];
        t22 = $[23];
        t23 = $[24];
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12",
            children: [
                t7,
                t13,
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t20,
                    whileInView: t21,
                    viewport: t22,
                    transition: t23,
                    children: [
                        t24,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-3",
                            children: footerLinks.support.map(_FooterFooterLinksSupportMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 246,
                            columnNumber: 177
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 246,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/40 text-sm",
            children: [
                "© ",
                new Date().getFullYear(),
                " RESTARNT. All rights reserved."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: socialLinks.map(_FooterSocialLinksMap)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    let t29;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            scale: 1.1,
            y: -2
        };
        t29 = {
            scale: 0.9
        };
        $[29] = t28;
        $[30] = t29;
    } else {
        t28 = $[29];
        t29 = $[30];
    }
    let t30;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-[#080808] border-t border-white/5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                children: [
                    t25,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4",
                        children: [
                            t26,
                            t27,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: scrollToTop,
                                whileHover: t28,
                                whileTap: t29,
                                className: "w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-[#FF4D00] hover:border-[#FF4D00]/30 transition-colors",
                                "aria-label": "Back to top",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 283,
                                    columnNumber: 505
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 283,
                                columnNumber: 258
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 283,
                        columnNumber: 135
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 283,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[31] = t30;
    } else {
        t30 = $[31];
    }
    return t30;
}
_c = Footer;
function _FooterSocialLinksMap(social) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        href: social.href,
        whileHover: {
            scale: 1.1,
            y: -2
        },
        whileTap: {
            scale: 0.9
        },
        className: "w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-[#FF4D00] hover:border-[#FF4D00]/30 transition-colors",
        "aria-label": social.label,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 296,
            columnNumber: 185
        }, this)
    }, social.label, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 291,
        columnNumber: 10
    }, this);
}
function _FooterFooterLinksSupportMap(link_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: link_1.href,
            className: "text-white/60 hover:text-[#FF4D00] transition-colors text-sm",
            children: link_1.name
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 299,
            columnNumber: 32
        }, this)
    }, link_1.name, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 299,
        columnNumber: 10
    }, this);
}
function _FooterFooterLinksCompanyMap(link_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: link_0.href,
            className: "text-white/60 hover:text-[#FF4D00] transition-colors text-sm",
            children: link_0.name
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 302,
            columnNumber: 32
        }, this)
    }, link_0.name, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 302,
        columnNumber: 10
    }, this);
}
function _FooterFooterLinksMenuMap(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: link.href,
            className: "text-white/60 hover:text-[#FF4D00] transition-colors text-sm",
            children: link.name
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 305,
            columnNumber: 30
        }, this)
    }, link.name, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 305,
        columnNumber: 10
    }, this);
}
function _FooterScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cart/Cart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Cart() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "ef7185a644a675f57cfd19813878fbaebbc92ee59ba64e5f8bcea7154be395f7") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ef7185a644a675f57cfd19813878fbaebbc92ee59ba64e5f8bcea7154be395f7";
    }
    const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    let t0;
    let t1;
    if ($[1] !== isCartOpen) {
        t0 = ({
            "Cart[useEffect()]": ()=>{
                if (isCartOpen) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "unset";
                }
                return _temp;
            }
        })["Cart[useEffect()]"];
        t1 = [
            isCartOpen
        ];
        $[1] = isCartOpen;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] !== items || $[5] !== totalPrice) {
        t2 = ({
            "Cart[generateWhatsAppMessage]": ()=>{
                const itemsList = items.map(_CartGenerateWhatsAppMessageItemsMap).join("\n");
                return encodeURIComponent(`Hello! I'd like to place an order:\n\n${itemsList}\n\nTotal: ₹${totalPrice}\n\nPlease confirm my order.`);
            }
        })["Cart[generateWhatsAppMessage]"];
        $[4] = items;
        $[5] = totalPrice;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const generateWhatsAppMessage = t2;
    let t3;
    if ($[7] !== clearCart || $[8] !== generateWhatsAppMessage || $[9] !== isCartOpen || $[10] !== items || $[11] !== removeFromCart || $[12] !== setIsCartOpen || $[13] !== totalItems || $[14] !== totalPrice || $[15] !== updateQuantity) {
        t3 = isCartOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: {
                        "Cart[<motion.div>.onClick]": ()=>setIsCartOpen(false)
                    }["Cart[<motion.div>.onClick]"],
                    className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/Cart.tsx",
                    lineNumber: 65,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        x: "100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: "100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 200
                    },
                    className: "fixed right-0 top-0 h-full w-full max-w-md glass-strong z-50 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-6 border-b border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "w-6 h-6 text-[#FF4D00]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 83,
                                            columnNumber: 218
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-white",
                                            children: "Your Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 83,
                                            columnNumber: 268
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-0.5 text-sm bg-[#FF4D00]/20 text-[#FF4D00] rounded-full",
                                            children: [
                                                totalItems,
                                                " items"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 83,
                                            columnNumber: 327
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 83,
                                    columnNumber: 177
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: {
                                        "Cart[<motion.button>.onClick]": ()=>setIsCartOpen(false)
                                    }["Cart[<motion.button>.onClick]"],
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    className: "p-2 rounded-full hover:bg-white/10 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                        lineNumber: 89,
                                        columnNumber: 79
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 83,
                                    columnNumber: 440
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/Cart.tsx",
                            lineNumber: 83,
                            columnNumber: 97
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6",
                            children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-full text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        className: "w-16 h-16 text-white/20 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                        lineNumber: 89,
                                        columnNumber: 281
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-white mb-2",
                                        children: "Your cart is empty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                        lineNumber: 89,
                                        columnNumber: 337
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 mb-6",
                                        children: "Add some delicious items to get started!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                        lineNumber: 89,
                                        columnNumber: 414
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Cart[<button>.onClick]": ()=>setIsCartOpen(false)
                                        }["Cart[<button>.onClick]"],
                                        className: "btn-primary",
                                        children: "Browse Menu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                        lineNumber: 89,
                                        columnNumber: 492
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/Cart.tsx",
                                lineNumber: 89,
                                columnNumber: 203
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: items.map({
                                    "Cart[items.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layout: true,
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: -100
                                            },
                                            className: "flex gap-4 p-4 rounded-xl bg-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-20 h-20 rounded-lg overflow-hidden flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item_0.image,
                                                        alt: item_0.name,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 135
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 67
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-white truncate",
                                                            children: item_0.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 256
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-white/60 mb-2",
                                                            children: [
                                                                "₹",
                                                                item_0.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 324
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                    onClick: {
                                                                        "Cart[items.map() > <motion.button>.onClick]": ()=>updateQuantity(item_0.id, item_0.quantity - 1)
                                                                    }["Cart[items.map() > <motion.button>.onClick]"],
                                                                    whileHover: {
                                                                        scale: 1.1
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.9
                                                                    },
                                                                    className: "w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FF4D00] transition-colors",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                                        lineNumber: 107,
                                                                        columnNumber: 150
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 426
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-medium w-6 text-center",
                                                                    children: item_0.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 195
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                    onClick: {
                                                                        "Cart[items.map() > <motion.button>.onClick]": ()=>updateQuantity(item_0.id, item_0.quantity + 1)
                                                                    }["Cart[items.map() > <motion.button>.onClick]"],
                                                                    whileHover: {
                                                                        scale: 1.1
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.9
                                                                    },
                                                                    className: "w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FF4D00] transition-colors",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/cart/Cart.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 150
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 276
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 385
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 224
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-end justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-[#FF4D00]",
                                                            children: [
                                                                "₹",
                                                                item_0.price * item_0.quantity
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 263
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                            onClick: {
                                                                "Cart[items.map() > <motion.button>.onClick]": ()=>removeFromCart(item_0.id)
                                                            }["Cart[items.map() > <motion.button>.onClick]"],
                                                            whileHover: {
                                                                scale: 1.1
                                                            },
                                                            whileTap: {
                                                                scale: 0.9
                                                            },
                                                            className: "p-2 text-white/40 hover:text-red-500 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cart/Cart.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 89
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 346
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 206
                                                }, this)
                                            ]
                                        }, item_0.id, true, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 92,
                                            columnNumber: 46
                                        }, this)
                                }["Cart[items.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/Cart.tsx",
                                lineNumber: 91,
                                columnNumber: 95
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/Cart.tsx",
                            lineNumber: 89,
                            columnNumber: 137
                        }, this),
                        items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-t border-white/10 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: clearCart,
                                    className: "text-sm text-white/40 hover:text-red-400 transition-colors flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 120,
                                            columnNumber: 250
                                        }, this),
                                        "Clear Cart"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 120,
                                    columnNumber: 127
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between py-3 border-t border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/60",
                                            children: "Subtotal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 120,
                                            columnNumber: 380
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold text-white",
                                            children: [
                                                "₹",
                                                totalPrice
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 120,
                                            columnNumber: 427
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 120,
                                    columnNumber: 299
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: `https://wa.me/917639730715?text=${generateWhatsAppMessage()}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    className: "w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center justify-center gap-3 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cart/Cart.tsx",
                                            lineNumber: 124,
                                            columnNumber: 163
                                        }, this),
                                        "Order on WhatsApp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 120,
                                    columnNumber: 501
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/40 text-center",
                                    children: "You'll be redirected to WhatsApp to complete your order"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/Cart.tsx",
                                    lineNumber: 124,
                                    columnNumber: 228
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cart/Cart.tsx",
                            lineNumber: 120,
                            columnNumber: 71
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cart/Cart.tsx",
                    lineNumber: 73,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true);
        $[7] = clearCart;
        $[8] = generateWhatsAppMessage;
        $[9] = isCartOpen;
        $[10] = items;
        $[11] = removeFromCart;
        $[12] = setIsCartOpen;
        $[13] = totalItems;
        $[14] = totalPrice;
        $[15] = updateQuantity;
        $[16] = t3;
    } else {
        t3 = $[16];
    }
    let t4;
    if ($[17] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/cart/Cart.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[17] = t3;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    return t4;
}
_s(Cart, "YEGvqx/6obRMWe9WrTxmPyVhtpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Cart;
function _CartGenerateWhatsAppMessageItemsMap(item) {
    return `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`;
}
function _temp() {
    document.body.style.overflow = "unset";
}
var _c;
__turbopack_context__.k.register(_c, "Cart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Hero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "0059f5c0c7e759b48c0ee19e6ce00116a36a4f2046aa02c7fe06d4d65c3c2227") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0059f5c0c7e759b48c0ee19e6ce00116a36a4f2046aa02c7fe06d4d65c3c2227";
    }
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            target: containerRef,
            offset: [
                "start start",
                "end start"
            ]
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])(t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            0,
            1
        ];
        t3 = [
            "0%",
            "50%"
        ];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, t2, t3);
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            0,
            0.5
        ];
        t5 = [
            1,
            0
        ];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, t4, t5);
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            0,
            1
        ];
        t7 = [
            1,
            1.1
        ];
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, t6, t7);
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "Hero[useEffect()]": ()=>{
                const newParticles = Array.from({
                    length: 30
                }, _HeroUseEffectArrayFrom);
                setParticles(newParticles);
            }
        })["Hero[useEffect()]"];
        t9 = [];
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    const scrollToMenu = _HeroScrollToMenu;
    const scrollToBooking = _HeroScrollToBooking;
    let t10;
    if ($[11] !== scale || $[12] !== y) {
        t10 = {
            y,
            scale
        };
        $[11] = scale;
        $[12] = y;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    let t12;
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
            style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80')"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/50 to-[#0B0B0B]"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-transparent to-[#0B0B0B]/70"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t12;
        $[16] = t13;
    } else {
        t11 = $[14];
        t12 = $[15];
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t10) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: t10,
            className: "absolute inset-0 z-0",
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== particles) {
        t15 = particles.map(_HeroParticlesMap);
        $[19] = particles;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-10 pointer-events-none overflow-hidden",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[21] = t15;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-5 pointer-events-none",
            children: [
                ...Array(5)
            ].map(_HeroAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] !== opacity) {
        t18 = {
            opacity
        };
        $[24] = opacity;
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    let t20;
    let t21;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            opacity: 0,
            y: 20
        };
        t20 = {
            opacity: 1,
            y: 0
        };
        t21 = {
            duration: 0.6,
            delay: 0.2
        };
        $[26] = t19;
        $[27] = t20;
        $[28] = t21;
    } else {
        t19 = $[26];
        t20 = $[27];
        t21 = $[28];
    }
    let t22;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t19,
            animate: t20,
            transition: t21,
            className: "inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                    className: "w-4 h-4 text-[#FF4D00]"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 198,
                    columnNumber: 145
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-white/90",
                    children: "Premium Street Food Experience"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 198,
                    columnNumber: 189
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "w-4 h-4 text-[#FFD700]"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 198,
                    columnNumber: 278
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    let t24;
    let t25;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            opacity: 0,
            y: 30
        };
        t24 = {
            opacity: 1,
            y: 0
        };
        t25 = {
            duration: 0.8,
            delay: 0.4
        };
        $[30] = t23;
        $[31] = t24;
        $[32] = t25;
    } else {
        t23 = $[30];
        t24 = $[31];
        t25 = $[32];
    }
    let t26;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            initial: t23,
            animate: t24,
            transition: t25,
            className: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-white mb-2",
                    children: "Taste the"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 229,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block gradient-text text-glow",
                    children: "Extraordinary"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 229,
                    columnNumber: 210
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[33] = t26;
    } else {
        t26 = $[33];
    }
    let t27;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.8,
                delay: 0.6
            },
            className: "text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed",
            children: "Where street food meets cinematic flavors. Experience the perfect blend of tradition and innovation in every bite."
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    let t28;
    let t29;
    let t30;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            opacity: 0,
            y: 30
        };
        t29 = {
            opacity: 1,
            y: 0
        };
        t30 = {
            duration: 0.8,
            delay: 0.8
        };
        $[35] = t28;
        $[36] = t29;
        $[37] = t30;
    } else {
        t28 = $[35];
        t29 = $[36];
        t30 = $[37];
    }
    let t31;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Order Now"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[38] = t31;
    } else {
        t31 = $[38];
    }
    let t32;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: scrollToMenu,
            className: "btn-primary flex items-center gap-2 text-lg px-8 py-4",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    animate: {
                        x: [
                            0,
                            5,
                            0
                        ]
                    },
                    transition: {
                        duration: 1.5,
                        repeat: Infinity
                    },
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 283,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[39] = t32;
    } else {
        t32 = $[39];
    }
    let t33;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t28,
            animate: t29,
            transition: t30,
            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: scrollToBooking,
                    className: "btn-secondary flex items-center gap-2 text-lg px-8 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Book a Table"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 295,
                        columnNumber: 247
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 295,
                    columnNumber: 145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[40] = t33;
    } else {
        t33 = $[40];
    }
    let t34;
    let t35;
    let t36;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            opacity: 0,
            y: 30
        };
        t35 = {
            opacity: 1,
            y: 0
        };
        t36 = {
            duration: 0.8,
            delay: 1
        };
        $[41] = t34;
        $[42] = t35;
        $[43] = t36;
    } else {
        t34 = $[41];
        t35 = $[42];
        t36 = $[43];
    }
    let t37;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto text-center",
            children: [
                t22,
                t26,
                t27,
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t34,
                    animate: t35,
                    transition: t36,
                    className: "mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto",
                    children: [
                        {
                            value: "4.9",
                            label: "Rating"
                        },
                        {
                            value: "10K+",
                            label: "Happy Customers"
                        },
                        {
                            value: "50+",
                            label: "Dishes"
                        }
                    ].map(_HeroAnonymous2)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 326,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[44] = t37;
    } else {
        t37 = $[44];
    }
    let t38;
    let t39;
    let t40;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            opacity: 0
        };
        t39 = {
            opacity: 1
        };
        t40 = {
            delay: 1.5
        };
        $[45] = t38;
        $[46] = t39;
        $[47] = t40;
    } else {
        t38 = $[45];
        t39 = $[46];
        t40 = $[47];
    }
    let t41;
    let t42;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = {
            y: [
                0,
                10,
                0
            ]
        };
        t42 = {
            duration: 2,
            repeat: Infinity
        };
        $[48] = t41;
        $[49] = t42;
    } else {
        t41 = $[48];
        t42 = $[49];
    }
    let t43;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t38,
            animate: t39,
            transition: t40,
            className: "absolute bottom-8 left-1/2 -translate-x-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: t41,
                transition: t42,
                className: "flex flex-col items-center gap-2 cursor-pointer",
                onClick: scrollToMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-white/50 uppercase tracking-widest",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 379,
                        columnNumber: 250
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-6 h-6 text-[#FF4D00]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 379,
                        columnNumber: 329
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 379,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[50] = t43;
    } else {
        t43 = $[50];
    }
    let t44;
    if ($[51] !== t18) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: t18,
            className: "relative z-20 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8",
            children: [
                t37,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[51] = t18;
        $[52] = t44;
    } else {
        t44 = $[52];
    }
    let t45;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent z-30"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[53] = t45;
    } else {
        t45 = $[53];
    }
    let t46;
    if ($[54] !== t14 || $[55] !== t16 || $[56] !== t44) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: containerRef,
            id: "home",
            className: "relative min-h-screen w-full overflow-hidden bg-[#0B0B0B]",
            children: [
                t14,
                t16,
                t17,
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[54] = t14;
        $[55] = t16;
        $[56] = t44;
        $[57] = t46;
    } else {
        t46 = $[57];
    }
    return t46;
}
_s(Hero, "1XH55wCMNI6xxK93nooWJIKghuY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Hero;
function _HeroAnonymous2(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl sm:text-3xl font-bold gradient-text",
                children: stat.value
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 412,
                columnNumber: 51
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-white/60 mt-1",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 412,
                columnNumber: 131
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 412,
        columnNumber: 10
    }, this);
}
function _HeroAnonymous(__0, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute rounded-full blur-3xl",
        style: {
            width: 300 + i_0 * 100,
            height: 300 + i_0 * 100,
            background: "radial-gradient(circle, rgba(255,77,0,0.1) 0%, transparent 70%)",
            left: `${20 + i_0 * 15}%`,
            bottom: "-10%"
        },
        animate: {
            y: [
                0,
                -200
            ],
            x: [
                0,
                i_0 % 2 === 0 ? 50 : -50
            ],
            opacity: [
                0.3,
                0
            ],
            scale: [
                1,
                2
            ]
        },
        transition: {
            duration: 6 + i_0,
            repeat: Infinity,
            delay: i_0 * 1.5,
            ease: "easeOut"
        }
    }, i_0, false, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 415,
        columnNumber: 10
    }, this);
}
function _HeroParticlesMap(particle) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute rounded-full",
        style: {
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: "radial-gradient(circle, rgba(255, 77, 0, 0.8) 0%, rgba(255, 215, 0, 0.4) 50%, transparent 70%)",
            boxShadow: `0 0 ${particle.size * 2}px rgba(255, 77, 0, 0.6)`
        },
        animate: {
            y: [
                -20,
                -100 - Math.random() * 100
            ],
            x: [
                0,
                (Math.random() - 0.5) * 50
            ],
            opacity: [
                0,
                1,
                0
            ],
            scale: [
                0.5,
                1,
                0.3
            ]
        },
        transition: {
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut"
        }
    }, particle.id, false, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 434,
        columnNumber: 10
    }, this);
}
function _HeroScrollToBooking() {
    document.getElementById("booking")?.scrollIntoView({
        behavior: "smooth"
    });
}
function _HeroScrollToMenu() {
    document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth"
    });
}
function _HeroUseEffectArrayFrom(_, i) {
    return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    };
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/menu.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryImages",
    ()=>galleryImages,
    "menuItems",
    ()=>menuItems,
    "occasions",
    ()=>occasions,
    "reviews",
    ()=>reviews,
    "timeSlots",
    ()=>timeSlots
]);
const menuItems = [
    // Veg Items
    {
        id: 'v1',
        name: 'Paneer Tikka',
        description: 'Cottage cheese marinated in yogurt and spices, grilled to perfection in tandoor',
        price: 320,
        category: 'veg',
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80',
        rating: 4.8,
        reviews: 245,
        isSpicy: true,
        isBestseller: true,
        prepTime: '20 min'
    },
    {
        id: 'v2',
        name: 'Veg Biryani',
        description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices',
        price: 280,
        category: 'veg',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80',
        rating: 4.6,
        reviews: 189,
        prepTime: '30 min'
    },
    {
        id: 'v3',
        name: 'Dal Makhani',
        description: 'Creamy black lentils slow-cooked overnight with butter and cream',
        price: 260,
        category: 'veg',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80',
        rating: 4.7,
        reviews: 312,
        isBestseller: true,
        prepTime: '25 min'
    },
    {
        id: 'v4',
        name: 'Palak Paneer',
        description: 'Fresh spinach puree with cottage cheese cubes and aromatic spices',
        price: 290,
        category: 'veg',
        image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?w=800&q=80',
        rating: 4.5,
        reviews: 156,
        prepTime: '20 min'
    },
    {
        id: 'v5',
        name: 'Veg Manchurian',
        description: 'Crispy vegetable balls tossed in spicy Indo-Chinese sauce',
        price: 240,
        category: 'veg',
        image: 'https://images.unsplash.com/photo-1625220194771-7eb586ea1937?w=800&q=80',
        rating: 4.4,
        reviews: 198,
        isSpicy: true,
        prepTime: '18 min'
    },
    {
        id: 'v6',
        name: 'Chole Bhature',
        description: 'Spicy chickpea curry served with deep-fried bread',
        price: 220,
        category: 'veg',
        image: 'https://images.unsplash.com/photo-1605493666574-2586d62f4175?w=800&q=80',
        rating: 4.7,
        reviews: 423,
        isBestseller: true,
        prepTime: '25 min'
    },
    // Non-Veg Items
    {
        id: 'nv1',
        name: 'Butter Chicken',
        description: 'Tender chicken in rich, creamy tomato gravy with butter and cream',
        price: 420,
        category: 'non-veg',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
        rating: 4.9,
        reviews: 567,
        isBestseller: true,
        prepTime: '30 min'
    },
    {
        id: 'nv2',
        name: 'Tandoori Chicken',
        description: 'Whole chicken marinated in yogurt and spices, roasted in clay oven',
        price: 480,
        category: 'non-veg',
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80',
        rating: 4.8,
        reviews: 445,
        isSpicy: true,
        prepTime: '35 min'
    },
    {
        id: 'nv3',
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice layered with spiced chicken and saffron',
        price: 380,
        category: 'non-veg',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
        rating: 4.9,
        reviews: 892,
        isBestseller: true,
        prepTime: '35 min'
    },
    {
        id: 'nv4',
        name: 'Mutton Rogan Josh',
        description: 'Kashmiri style lamb curry with aromatic spices and yogurt',
        price: 520,
        category: 'non-veg',
        image: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=800&q=80',
        rating: 4.7,
        reviews: 234,
        isSpicy: true,
        prepTime: '40 min'
    },
    {
        id: 'nv5',
        name: 'Fish Tikka',
        description: 'Boneless fish chunks marinated and grilled in tandoor',
        price: 450,
        category: 'non-veg',
        image: 'https://images.unsplash.com/photo-1626804475297-411dbe63c4aa?w=800&q=80',
        rating: 4.6,
        reviews: 178,
        prepTime: '25 min'
    },
    {
        id: 'nv6',
        name: 'Chicken 65',
        description: 'Spicy deep-fried chicken with South Indian spices',
        price: 340,
        category: 'non-veg',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
        rating: 4.5,
        reviews: 267,
        isSpicy: true,
        prepTime: '22 min'
    },
    // Fast Food Items
    {
        id: 'ff1',
        name: 'Veg Burger',
        description: 'Crispy vegetable patty with fresh veggies and special sauce',
        price: 180,
        category: 'fast-food',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
        rating: 4.3,
        reviews: 345,
        prepTime: '12 min'
    },
    {
        id: 'ff2',
        name: 'Chicken Burger',
        description: 'Grilled chicken patty with cheese, lettuce, and mayo',
        price: 220,
        category: 'fast-food',
        image: 'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?w=800&q=80',
        rating: 4.5,
        reviews: 423,
        isBestseller: true,
        prepTime: '15 min'
    },
    {
        id: 'ff3',
        name: 'French Fries',
        description: 'Crispy golden fries seasoned with peri-peri spice',
        price: 120,
        category: 'fast-food',
        image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80',
        rating: 4.4,
        reviews: 567,
        prepTime: '10 min'
    },
    {
        id: 'ff4',
        name: 'Veg Pizza',
        description: 'Wood-fired pizza topped with fresh vegetables and mozzarella',
        price: 280,
        category: 'fast-food',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        rating: 4.6,
        reviews: 289,
        prepTime: '20 min'
    },
    {
        id: 'ff5',
        name: 'Chicken Pizza',
        description: 'Wood-fired pizza with grilled chicken and BBQ sauce',
        price: 340,
        category: 'fast-food',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
        rating: 4.7,
        reviews: 412,
        isBestseller: true,
        prepTime: '22 min'
    },
    {
        id: 'ff6',
        name: 'Pasta Alfredo',
        description: 'Creamy pasta with parmesan cheese and herbs',
        price: 260,
        category: 'fast-food',
        image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&q=80',
        rating: 4.5,
        reviews: 234,
        prepTime: '18 min'
    },
    // Combos
    {
        id: 'c1',
        name: 'Veg Thali',
        description: 'Complete meal with dal, 2 veggies, rice, roti, salad, and dessert',
        price: 350,
        category: 'combos',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80',
        rating: 4.7,
        reviews: 234,
        prepTime: '25 min'
    },
    {
        id: 'c2',
        name: 'Non-Veg Thali',
        description: 'Complete meal with chicken curry, dal, rice, roti, salad, and dessert',
        price: 450,
        category: 'combos',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
        rating: 4.8,
        reviews: 345,
        isBestseller: true,
        prepTime: '28 min'
    },
    {
        id: 'c3',
        name: 'Family Feast',
        description: 'Serves 4: 2 starters, 3 mains, rice, breads, and desserts',
        price: 1299,
        category: 'combos',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        rating: 4.9,
        reviews: 156,
        prepTime: '35 min'
    },
    {
        id: 'c4',
        name: 'Couple Combo',
        description: 'Perfect for 2: 1 starter, 2 mains, rice, breads, and drinks',
        price: 799,
        category: 'combos',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
        rating: 4.6,
        reviews: 189,
        prepTime: '30 min'
    }
];
const reviews = [
    {
        id: 'r1',
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        rating: 5,
        comment: 'Absolutely incredible food! The butter chicken was the best I\'ve ever had. The ambiance is perfect for a date night.',
        date: '2 days ago'
    },
    {
        id: 'r2',
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        rating: 5,
        comment: 'The biryani here is legendary! Perfectly spiced and the portions are generous. Will definitely be coming back.',
        date: '1 week ago'
    },
    {
        id: 'r3',
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        rating: 4,
        comment: 'Great vegetarian options. The paneer tikka was perfectly grilled and the service was excellent.',
        date: '2 weeks ago'
    },
    {
        id: 'r4',
        name: 'David Miller',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        rating: 5,
        comment: 'The family feast combo is amazing value for money. Everything was fresh and delicious. Highly recommend!',
        date: '3 weeks ago'
    },
    {
        id: 'r5',
        name: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
        rating: 5,
        comment: 'Best street food experience in the city! The tandoori chicken was cooked to perfection. Love the modern vibe.',
        date: '1 month ago'
    }
];
const galleryImages = [
    {
        id: 'g1',
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
        alt: 'Gourmet dish presentation',
        category: 'food'
    },
    {
        id: 'g2',
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        alt: 'Restaurant interior',
        category: 'ambiance'
    },
    {
        id: 'g3',
        src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
        alt: 'Grilled meat platter',
        category: 'food'
    },
    {
        id: 'g4',
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
        alt: 'Dining area',
        category: 'ambiance'
    },
    {
        id: 'g5',
        src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        alt: 'Fresh pizza',
        category: 'food'
    },
    {
        id: 'g6',
        src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
        alt: 'Chef preparing food',
        category: 'kitchen'
    },
    {
        id: 'g7',
        src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
        alt: 'Fresh salad',
        category: 'food'
    },
    {
        id: 'g8',
        src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80',
        alt: 'Bar area',
        category: 'ambiance'
    }
];
const timeSlots = [
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM'
];
const occasions = [
    'Casual Dining',
    'Birthday',
    'Anniversary',
    'Business Meeting',
    'Date Night',
    'Family Gathering',
    'Other'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-client] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const categories = [
    {
        id: 'all',
        name: 'All Items',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"]
    },
    {
        id: 'veg',
        name: 'Vegetarian',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"]
    },
    {
        id: 'non-veg',
        name: 'Non-Veg',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"]
    },
    {
        id: 'fast-food',
        name: 'Fast Food',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
    },
    {
        id: 'combos',
        name: 'Combos',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
    }
];
function MenuCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    if ($[0] !== "a7ee0cb338a9b19e3ae0583028df717f192571520a38f06c3d8600df21d3edf1") {
        for(let $i = 0; $i < 74; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7ee0cb338a9b19e3ae0583028df717f192571520a38f06c3d8600df21d3edf1";
    }
    const { item, index } = t0;
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAdded, setShowAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== addToCart || $[2] !== item) {
        t1 = ({
            "MenuCard[handleAddToCart]": ()=>{
                addToCart(item);
                setShowAdded(true);
                setTimeout({
                    "MenuCard[handleAddToCart > setTimeout()]": ()=>setShowAdded(false)
                }["MenuCard[handleAddToCart > setTimeout()]"], 1500);
            }
        })["MenuCard[handleAddToCart]"];
        $[1] = addToCart;
        $[2] = item;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleAddToCart = t1;
    let t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 30
        };
        t3 = {
            opacity: 1,
            y: 0
        };
        t4 = {
            once: true
        };
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
    }
    const t5 = index * 0.05;
    let t6;
    if ($[7] !== t5) {
        t6 = {
            duration: 0.4,
            delay: t5
        };
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "MenuCard[<motion.div>.onMouseEnter]": ()=>setIsHovered(true)
        })["MenuCard[<motion.div>.onMouseEnter]"];
        t8 = ({
            "MenuCard[<motion.div>.onMouseLeave]": ()=>setIsHovered(false)
        })["MenuCard[<motion.div>.onMouseLeave]"];
        $[9] = t7;
        $[10] = t8;
    } else {
        t7 = $[9];
        t8 = $[10];
    }
    const t9 = isHovered ? 1.05 : 1;
    let t10;
    if ($[11] !== t9) {
        t10 = {
            scale: t9
        };
        $[11] = t9;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            duration: 0.4
        };
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== item.image || $[15] !== item.name || $[16] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
            src: item.image,
            alt: item.name,
            className: "w-full h-full object-cover",
            animate: t10,
            transition: t11,
            loading: "lazy"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[14] = item.image;
        $[15] = item.name;
        $[16] = t10;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== item.isBestseller) {
        t14 = item.isBestseller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-1.5 py-0.5 text-[10px] font-semibold bg-[#FFD700] text-black rounded-full",
            children: "Best"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 155,
            columnNumber: 32
        }, this);
        $[19] = item.isBestseller;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== item.isSpicy) {
        t15 = item.isSpicy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-1.5 py-0.5 text-[10px] font-semibold bg-[#FF4D00] text-white rounded-full flex items-center gap-0.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                    className: "w-2 h-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Menu.tsx",
                    lineNumber: 163,
                    columnNumber: 148
                }, this),
                " Spicy"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 163,
            columnNumber: 27
        }, this);
        $[21] = item.isSpicy;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== t14 || $[24] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-2 left-2 flex gap-1",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t15;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            opacity: 0,
            scale: 0.8
        };
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    const t18 = isHovered ? 1 : 0;
    const t19 = isHovered ? 1 : 0.8;
    let t20;
    if ($[27] !== t18 || $[28] !== t19) {
        t20 = {
            opacity: t18,
            scale: t19
        };
        $[27] = t18;
        $[28] = t19;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== handleAddToCart || $[32] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: handleAddToCart,
            initial: t17,
            animate: t20,
            className: "absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#FF4D00] flex items-center justify-center text-white shadow-lg hover:bg-[#cc3d00] transition-colors",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[31] = handleAddToCart;
        $[32] = t20;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    let t23;
    if ($[34] !== t12 || $[35] !== t16 || $[36] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-32 sm:h-36 overflow-hidden",
            children: [
                t12,
                t13,
                t16,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[34] = t12;
        $[35] = t16;
        $[36] = t22;
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    let t24;
    if ($[38] !== item.name) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-white group-hover:text-[#FF4D00] transition-colors line-clamp-1",
            children: item.name
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[38] = item.name;
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    let t25;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: "w-3 h-3 fill-current"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] !== item.rating) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-0.5 text-[#FFD700] flex-shrink-0",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-medium",
                    children: item.rating
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Menu.tsx",
                    lineNumber: 245,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[41] = item.rating;
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== t24 || $[44] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between mb-1",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[43] = t24;
        $[44] = t26;
        $[45] = t27;
    } else {
        t27 = $[45];
    }
    let t28;
    if ($[46] !== item.description) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-white/60 mb-2 line-clamp-1",
            children: item.description
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[46] = item.description;
        $[47] = t28;
    } else {
        t28 = $[47];
    }
    let t29;
    if ($[48] !== item.price) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-base font-bold text-[#FF4D00]",
            children: [
                "₹",
                item.price
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[48] = item.price;
        $[49] = t29;
    } else {
        t29 = $[49];
    }
    let t30;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "w-2.5 h-2.5"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] !== item.prepTime) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] text-white/40 flex items-center gap-0.5",
            children: [
                t30,
                " ",
                item.prepTime
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[51] = item.prepTime;
        $[52] = t31;
    } else {
        t31 = $[52];
    }
    let t32;
    if ($[53] !== t29 || $[54] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-2",
            children: [
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[53] = t29;
        $[54] = t31;
        $[55] = t32;
    } else {
        t32 = $[55];
    }
    let t33;
    let t34;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            scale: 1.02
        };
        t34 = {
            scale: 0.98
        };
        $[56] = t33;
        $[57] = t34;
    } else {
        t33 = $[56];
        t34 = $[57];
    }
    let t35;
    if ($[58] !== showAdded) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: showAdded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -10
                },
                className: "text-green-400 text-xs",
                children: "Added! ✓"
            }, "added", false, {
                fileName: "[project]/src/components/sections/Menu.tsx",
                lineNumber: 317,
                columnNumber: 53
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -10
                },
                className: "flex items-center gap-1.5 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Menu.tsx",
                        lineNumber: 335,
                        columnNumber: 56
                    }, this),
                    "Add"
                ]
            }, "add", true, {
                fileName: "[project]/src/components/sections/Menu.tsx",
                lineNumber: 326,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[58] = showAdded;
        $[59] = t35;
    } else {
        t35 = $[59];
    }
    let t36;
    if ($[60] !== handleAddToCart || $[61] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: handleAddToCart,
            className: "w-full py-2 rounded-lg bg-white/5 hover:bg-[#FF4D00] text-white text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1.5 group/btn",
            whileHover: t33,
            whileTap: t34,
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[60] = handleAddToCart;
        $[61] = t35;
        $[62] = t36;
    } else {
        t36 = $[62];
    }
    let t37;
    if ($[63] !== t27 || $[64] !== t28 || $[65] !== t32 || $[66] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3",
            children: [
                t27,
                t28,
                t32,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[63] = t27;
        $[64] = t28;
        $[65] = t32;
        $[66] = t36;
        $[67] = t37;
    } else {
        t37 = $[67];
    }
    let t38;
    if ($[68] !== t23 || $[69] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-xl bg-[#1a1a1a] card-hover",
            children: [
                t23,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[68] = t23;
        $[69] = t37;
        $[70] = t38;
    } else {
        t38 = $[70];
    }
    let t39;
    if ($[71] !== t38 || $[72] !== t6) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t2,
            whileInView: t3,
            viewport: t4,
            transition: t6,
            className: "group relative",
            onMouseEnter: t7,
            onMouseLeave: t8,
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[71] = t38;
        $[72] = t6;
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    return t39;
}
_s(MenuCard, "pdFXWVPA/F9RI4PS8O5ZYGhw4JE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = MenuCard;
function Menu() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(77);
    if ($[0] !== "a7ee0cb338a9b19e3ae0583028df717f192571520a38f06c3d8600df21d3edf1") {
        for(let $i = 0; $i < 77; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7ee0cb338a9b19e3ae0583028df717f192571520a38f06c3d8600df21d3edf1";
    }
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t0);
    let T0;
    let T1;
    let t1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[2] !== activeCategory || $[3] !== isInView) {
        const filteredItems = activeCategory === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuItems"].filter({
            "Menu[menuItems.filter()]": (item)=>item.category === activeCategory
        }["Menu[menuItems.filter()]"]);
        t12 = "menu";
        t13 = "py-24 bg-[#0B0B0B] relative overflow-hidden";
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-96 h-96 bg-[#FF4D00]/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Menu.tsx",
                        lineNumber: 425,
                        columnNumber: 67
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Menu.tsx",
                        lineNumber: 425,
                        columnNumber: 157
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Menu.tsx",
                lineNumber: 425,
                columnNumber: 13
            }, this);
            $[20] = t14;
        } else {
            t14 = $[20];
        }
        t9 = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10";
        let t15;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = {
                opacity: 0,
                y: 30
            };
            $[21] = t15;
        } else {
            t15 = $[21];
        }
        let t16;
        if ($[22] !== isInView) {
            t16 = isInView ? {
                opacity: 1,
                y: 0
            } : {};
            $[22] = isInView;
            $[23] = t16;
        } else {
            t16 = $[23];
        }
        let t17;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = {
                duration: 0.6
            };
            $[24] = t17;
        } else {
            t17 = $[24];
        }
        let t18;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = {
                opacity: 0,
                scale: 0.9
            };
            $[25] = t18;
        } else {
            t18 = $[25];
        }
        let t19;
        if ($[26] !== isInView) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: t18,
                animate: isInView ? {
                    opacity: 1,
                    scale: 1
                } : {},
                className: "inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full",
                children: "Our Menu"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Menu.tsx",
                lineNumber: 473,
                columnNumber: 13
            }, this);
            $[26] = isInView;
            $[27] = t19;
        } else {
            t19 = $[27];
        }
        let t20;
        let t21;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl sm:text-5xl md:text-6xl font-bold mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: "Delicious "
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Menu.tsx",
                        lineNumber: 485,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "gradient-text",
                        children: "Dishes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Menu.tsx",
                        lineNumber: 485,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Menu.tsx",
                lineNumber: 485,
                columnNumber: 13
            }, this);
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/60 max-w-2xl mx-auto text-lg",
                children: "Explore our carefully curated selection of authentic street food, crafted with passion and the finest ingredients."
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Menu.tsx",
                lineNumber: 486,
                columnNumber: 13
            }, this);
            $[28] = t20;
            $[29] = t21;
        } else {
            t20 = $[28];
            t21 = $[29];
        }
        if ($[30] !== t16 || $[31] !== t19) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: ref,
                initial: t15,
                animate: t16,
                transition: t17,
                className: "text-center mb-16",
                children: [
                    t19,
                    t20,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Menu.tsx",
                lineNumber: 494,
                columnNumber: 13
            }, this);
            $[30] = t16;
            $[31] = t19;
            $[32] = t10;
        } else {
            t10 = $[32];
        }
        let t22;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = {
                opacity: 0,
                y: 20
            };
            $[33] = t22;
        } else {
            t22 = $[33];
        }
        let t23;
        if ($[34] !== isInView) {
            t23 = isInView ? {
                opacity: 1,
                y: 0
            } : {};
            $[34] = isInView;
            $[35] = t23;
        } else {
            t23 = $[35];
        }
        let t24;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = {
                duration: 0.6,
                delay: 0.2
            };
            $[36] = t24;
        } else {
            t24 = $[36];
        }
        let t25;
        if ($[37] !== activeCategory) {
            t25 = categories.map({
                "Menu[categories.map()]": (category)=>{
                    const Icon = category.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: {
                            "Menu[categories.map() > <motion.button>.onClick]": ()=>setActiveCategory(category.id)
                        }["Menu[categories.map() > <motion.button>.onClick]"],
                        className: `flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? "bg-[#FF4D00] text-white shadow-lg shadow-[#FF4D00]/30" : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"}`,
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Menu.tsx",
                                lineNumber: 543,
                                columnNumber: 14
                            }, this),
                            category.name
                        ]
                    }, category.id, true, {
                        fileName: "[project]/src/components/sections/Menu.tsx",
                        lineNumber: 537,
                        columnNumber: 18
                    }, this);
                }
            }["Menu[categories.map()]"]);
            $[37] = activeCategory;
            $[38] = t25;
        } else {
            t25 = $[38];
        }
        if ($[39] !== t23 || $[40] !== t25) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t22,
                animate: t23,
                transition: t24,
                className: "flex flex-wrap justify-center gap-3 mb-12",
                children: t25
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Menu.tsx",
                lineNumber: 552,
                columnNumber: 13
            }, this);
            $[39] = t23;
            $[40] = t25;
            $[41] = t11;
        } else {
            t11 = $[41];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"];
        t8 = "wait";
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        t1 = activeCategory;
        if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = {
                opacity: 0,
                y: 20
            };
            t3 = {
                opacity: 1,
                y: 0
            };
            t4 = {
                opacity: 0,
                y: -20
            };
            t5 = {
                duration: 0.4
            };
            $[42] = t2;
            $[43] = t3;
            $[44] = t4;
            $[45] = t5;
        } else {
            t2 = $[42];
            t3 = $[43];
            t4 = $[44];
            t5 = $[45];
        }
        t6 = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5";
        t7 = filteredItems.map(_MenuFilteredItemsMap);
        $[2] = activeCategory;
        $[3] = isInView;
        $[4] = T0;
        $[5] = T1;
        $[6] = t1;
        $[7] = t10;
        $[8] = t11;
        $[9] = t12;
        $[10] = t13;
        $[11] = t14;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        T0 = $[4];
        T1 = $[5];
        t1 = $[6];
        t10 = $[7];
        t11 = $[8];
        t12 = $[9];
        t13 = $[10];
        t14 = $[11];
        t2 = $[12];
        t3 = $[13];
        t4 = $[14];
        t5 = $[15];
        t6 = $[16];
        t7 = $[17];
        t8 = $[18];
        t9 = $[19];
    }
    let t15;
    if ($[46] !== T0 || $[47] !== t1 || $[48] !== t2 || $[49] !== t3 || $[50] !== t4 || $[51] !== t5 || $[52] !== t6 || $[53] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            initial: t2,
            animate: t3,
            exit: t4,
            transition: t5,
            className: t6,
            children: t7
        }, t1, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, this);
        $[46] = T0;
        $[47] = t1;
        $[48] = t2;
        $[49] = t3;
        $[50] = t4;
        $[51] = t5;
        $[52] = t6;
        $[53] = t7;
        $[54] = t15;
    } else {
        t15 = $[54];
    }
    let t16;
    if ($[55] !== T1 || $[56] !== t15 || $[57] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            mode: t8,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 644,
            columnNumber: 11
        }, this);
        $[55] = T1;
        $[56] = t15;
        $[57] = t8;
        $[58] = t16;
    } else {
        t16 = $[58];
    }
    let t17;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            opacity: 0
        };
        $[59] = t17;
    } else {
        t17 = $[59];
    }
    let t18;
    if ($[60] !== isInView) {
        t18 = isInView ? {
            opacity: 1
        } : {};
        $[60] = isInView;
        $[61] = t18;
    } else {
        t18 = $[61];
    }
    let t19;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            duration: 0.6,
            delay: 0.6
        };
        $[62] = t19;
    } else {
        t19 = $[62];
    }
    let t20;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn-secondary",
            children: "View Full Menu"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 683,
            columnNumber: 11
        }, this);
        $[63] = t20;
    } else {
        t20 = $[63];
    }
    let t21;
    if ($[64] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t17,
            animate: t18,
            transition: t19,
            className: "text-center mt-12",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 690,
            columnNumber: 11
        }, this);
        $[64] = t18;
        $[65] = t21;
    } else {
        t21 = $[65];
    }
    let t22;
    if ($[66] !== t10 || $[67] !== t11 || $[68] !== t16 || $[69] !== t21 || $[70] !== t9) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t11,
                t16,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 698,
            columnNumber: 11
        }, this);
        $[66] = t10;
        $[67] = t11;
        $[68] = t16;
        $[69] = t21;
        $[70] = t9;
        $[71] = t22;
    } else {
        t22 = $[71];
    }
    let t23;
    if ($[72] !== t12 || $[73] !== t13 || $[74] !== t14 || $[75] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t12,
            className: t13,
            children: [
                t14,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Menu.tsx",
            lineNumber: 710,
            columnNumber: 11
        }, this);
        $[72] = t12;
        $[73] = t13;
        $[74] = t14;
        $[75] = t22;
        $[76] = t23;
    } else {
        t23 = $[76];
    }
    return t23;
}
_s1(Menu, "2OnecdInTyGWvE5dbaYt6b5E74o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = Menu;
function _MenuFilteredItemsMap(item_0, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuCard, {
        item: item_0,
        index: index
    }, item_0.id, false, {
        fileName: "[project]/src/components/sections/Menu.tsx",
        lineNumber: 722,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "MenuCard");
__turbopack_context__.k.register(_c1, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Gallery() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "129b81560a99a4a3e14344a77f4769451786e5c14bc5171a4ace4ef239a9a045") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "129b81560a99a4a3e14344a77f4769451786e5c14bc5171a4ace4ef239a9a045";
    }
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t0);
    let t1;
    let t10;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[2] !== isInView) {
        const leftColumn = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"].filter(_GalleryGalleryImagesFilter);
        const middleColumn = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"].filter(_GalleryGalleryImagesFilter2);
        const rightColumn = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"].filter(_GalleryGalleryImagesFilter3);
        t8 = "gallery";
        t9 = "py-24 bg-[#0B0B0B] relative overflow-hidden";
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4D00]/5 rounded-full blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Gallery.tsx",
                    lineNumber: 46,
                    columnNumber: 67
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this);
            $[13] = t10;
        } else {
            t10 = $[13];
        }
        t6 = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10";
        let t11;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = {
                opacity: 0,
                y: 30
            };
            $[14] = t11;
        } else {
            t11 = $[14];
        }
        const t12 = isInView ? {
            opacity: 1,
            y: 0
        } : {};
        let t13;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = {
                duration: 0.6
            };
            $[15] = t13;
        } else {
            t13 = $[15];
        }
        let t14;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = {
                opacity: 0,
                scale: 0.9
            };
            $[16] = t14;
        } else {
            t14 = $[16];
        }
        const t15 = isInView ? {
            opacity: 1,
            scale: 1
        } : {};
        let t16;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this);
            $[17] = t16;
        } else {
            t16 = $[17];
        }
        let t17;
        if ($[18] !== t15) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: t14,
                animate: t15,
                className: "inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full",
                children: [
                    t16,
                    "Visual Journey"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this);
            $[18] = t15;
            $[19] = t17;
        } else {
            t17 = $[19];
        }
        let t18;
        let t19;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-4xl sm:text-5xl md:text-6xl font-bold mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: "Our "
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Gallery.tsx",
                        lineNumber: 107,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "gradient-text",
                        children: "Gallery"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Gallery.tsx",
                        lineNumber: 107,
                        columnNumber: 117
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this);
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/60 max-w-2xl mx-auto text-lg",
                children: "A glimpse into our culinary world. From kitchen to table, experience the artistry behind every dish."
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this);
            $[20] = t18;
            $[21] = t19;
        } else {
            t18 = $[20];
            t19 = $[21];
        }
        if ($[22] !== t12 || $[23] !== t17) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: ref,
                initial: t11,
                animate: t12,
                transition: t13,
                className: "text-center mb-16",
                children: [
                    t17,
                    t18,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 116,
                columnNumber: 12
            }, this);
            $[22] = t12;
            $[23] = t17;
            $[24] = t7;
        } else {
            t7 = $[24];
        }
        t3 = "grid grid-cols-1 md:grid-cols-3 gap-4";
        let t20;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = ({
                "Gallery[leftColumn.map()]": (image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryImage, {
                        image: image,
                        index: index,
                        onClick: {
                            "Gallery[leftColumn.map() > <GalleryImage>.onClick]": ()=>setSelectedImage(image.src)
                        }["Gallery[leftColumn.map() > <GalleryImage>.onClick]"]
                    }, image.id, false, {
                        fileName: "[project]/src/components/sections/Gallery.tsx",
                        lineNumber: 127,
                        columnNumber: 56
                    }, this)
            })["Gallery[leftColumn.map()]"];
            $[25] = t20;
        } else {
            t20 = $[25];
        }
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: leftColumn.map(t20)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 136,
                columnNumber: 12
            }, this);
            $[26] = t4;
        } else {
            t4 = $[26];
        }
        let t21;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = ({
                "Gallery[middleColumn.map()]": (image_0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryImage, {
                        image: image_0,
                        index: index_0 + leftColumn.length,
                        onClick: {
                            "Gallery[middleColumn.map() > <GalleryImage>.onClick]": ()=>setSelectedImage(image_0.src)
                        }["Gallery[middleColumn.map() > <GalleryImage>.onClick]"]
                    }, image_0.id, false, {
                        fileName: "[project]/src/components/sections/Gallery.tsx",
                        lineNumber: 144,
                        columnNumber: 62
                    }, this)
            })["Gallery[middleColumn.map()]"];
            $[27] = t21;
        } else {
            t21 = $[27];
        }
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 md:mt-12",
                children: middleColumn.map(t21)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 153,
                columnNumber: 12
            }, this);
            $[28] = t5;
        } else {
            t5 = $[28];
        }
        t1 = "space-y-4";
        let t22;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = ({
                "Gallery[rightColumn.map()]": (image_1, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryImage, {
                        image: image_1,
                        index: index_1 + leftColumn.length + middleColumn.length,
                        onClick: {
                            "Gallery[rightColumn.map() > <GalleryImage>.onClick]": ()=>setSelectedImage(image_1.src)
                        }["Gallery[rightColumn.map() > <GalleryImage>.onClick]"]
                    }, image_1.id, false, {
                        fileName: "[project]/src/components/sections/Gallery.tsx",
                        lineNumber: 162,
                        columnNumber: 61
                    }, this)
            })["Gallery[rightColumn.map()]"];
            $[29] = t22;
        } else {
            t22 = $[29];
        }
        t2 = rightColumn.map(t22);
        $[2] = isInView;
        $[3] = t1;
        $[4] = t10;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t1 = $[3];
        t10 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t11;
    if ($[30] !== t1 || $[31] !== t2) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[30] = t1;
        $[31] = t2;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== t11 || $[34] !== t3 || $[35] !== t4 || $[36] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[33] = t11;
        $[34] = t3;
        $[35] = t4;
        $[36] = t5;
        $[37] = t12;
    } else {
        t12 = $[37];
    }
    let t13;
    if ($[38] !== t12 || $[39] !== t6 || $[40] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[38] = t12;
        $[39] = t6;
        $[40] = t7;
        $[41] = t13;
    } else {
        t13 = $[41];
    }
    let t14;
    if ($[42] !== selectedImage) {
        t14 = selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            onClick: {
                "Gallery[<motion.div>.onClick]": ()=>setSelectedImage(null)
            }["Gallery[<motion.div>.onClick]"],
            className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    onClick: {
                        "Gallery[<motion.button>.onClick]": ()=>setSelectedImage(null)
                    }["Gallery[<motion.button>.onClick]"],
                    className: "absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-6 h-6 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Gallery.tsx",
                        lineNumber: 245,
                        columnNumber: 146
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Gallery.tsx",
                    lineNumber: 234,
                    columnNumber: 138
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9
                    },
                    transition: {
                        type: "spring",
                        damping: 25
                    },
                    src: selectedImage,
                    alt: "Gallery preview",
                    className: "max-w-full max-h-[90vh] object-contain rounded-lg",
                    onClick: _GalleryMotionImgOnClick
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Gallery.tsx",
                    lineNumber: 245,
                    columnNumber: 198
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 226,
            columnNumber: 28
        }, this);
        $[42] = selectedImage;
        $[43] = t14;
    } else {
        t14 = $[43];
    }
    let t15;
    if ($[44] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[44] = t14;
        $[45] = t15;
    } else {
        t15 = $[45];
    }
    let t16;
    if ($[46] !== t10 || $[47] !== t13 || $[48] !== t15 || $[49] !== t8 || $[50] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t8,
            className: t9,
            children: [
                t10,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[46] = t10;
        $[47] = t13;
        $[48] = t15;
        $[49] = t8;
        $[50] = t9;
        $[51] = t16;
    } else {
        t16 = $[51];
    }
    return t16;
}
_s(Gallery, "NqdNox8jiQa7o472IilNgAu+p+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Gallery;
function _GalleryMotionImgOnClick(e) {
    return e.stopPropagation();
}
function _GalleryGalleryImagesFilter3(__1, i_1) {
    return i_1 % 3 === 2;
}
function _GalleryGalleryImagesFilter2(__0, i_0) {
    return i_0 % 3 === 1;
}
function _GalleryGalleryImagesFilter(_, i) {
    return i % 3 === 0;
}
function GalleryImage(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "129b81560a99a4a3e14344a77f4769451786e5c14bc5171a4ace4ef239a9a045") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "129b81560a99a4a3e14344a77f4769451786e5c14bc5171a4ace4ef239a9a045";
    }
    const { image, index, onClick } = t0;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            once: true,
            margin: "-50px"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 50
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== isInView) {
        t3 = isInView ? {
            opacity: 1,
            y: 0
        } : {};
        $[3] = isInView;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = index * 0.1;
    let t5;
    if ($[5] !== t4) {
        t5 = {
            duration: 0.6,
            delay: t4
        };
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            scale: 1.05
        };
        t7 = {
            duration: 0.4
        };
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] !== image.alt || $[10] !== image.src) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: image.src,
            alt: image.alt,
            className: "w-full h-full object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 372,
            columnNumber: 10
        }, this);
        $[9] = image.alt;
        $[10] = image.src;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 381,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== image.category) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs uppercase tracking-wider text-[#FF4D00] mb-1",
            children: image.category
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[13] = image.category;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== image.alt) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-semibold",
            children: image.alt
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[15] = image.alt;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10 || $[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                className: "w-5 h-5 text-white"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Gallery.tsx",
                lineNumber: 413,
                columnNumber: 202
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t12 || $[22] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t6,
            transition: t7,
            className: "relative aspect-[4/3]",
            children: [
                t8,
                t9,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t8;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== onClick || $[25] !== t14 || $[26] !== t3 || $[27] !== t5) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            initial: t2,
            animate: t3,
            transition: t5,
            onClick: onClick,
            className: "group relative overflow-hidden rounded-2xl cursor-pointer",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Gallery.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[24] = onClick;
        $[25] = t14;
        $[26] = t3;
        $[27] = t5;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    return t15;
}
_s1(GalleryImage, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = GalleryImage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Gallery");
__turbopack_context__.k.register(_c1, "GalleryImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Reviews() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(83);
    if ($[0] !== "6129dadf8c0f196b4c564fe8f3c996eb93a6f169195c401e4108a39459f66425") {
        for(let $i = 0; $i < 83; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6129dadf8c0f196b4c564fe8f3c996eb93a6f169195c401e4108a39459f66425";
    }
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Reviews[useEffect()]": ()=>{
                const timer = setInterval({
                    "Reviews[useEffect() > setInterval()]": ()=>{
                        setDirection(1);
                        setCurrentIndex(_ReviewsUseEffectSetIntervalSetCurrentIndex);
                    }
                }["Reviews[useEffect() > setInterval()]"], 5000);
                return ()=>clearInterval(timer);
            }
        })["Reviews[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Reviews[nextSlide]": ()=>{
                setDirection(1);
                setCurrentIndex(_ReviewsNextSlideSetCurrentIndex);
            }
        })["Reviews[nextSlide]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const nextSlide = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Reviews[prevSlide]": ()=>{
                setDirection(-1);
                setCurrentIndex(_ReviewsPrevSlideSetCurrentIndex);
            }
        })["Reviews[prevSlide]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const prevSlide = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            enter: _temp,
            center: {
                x: 0,
                opacity: 1,
                scale: 1
            },
            exit: _temp2
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const variants = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4D00]/5 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Reviews.tsx",
                lineNumber: 96,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            opacity: 0,
            y: 30
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== isInView) {
        t8 = isInView ? {
            opacity: 1,
            y: 0
        } : {};
        $[9] = isInView;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            duration: 0.6
        };
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            opacity: 0,
            scale: 0.9
        };
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== isInView) {
        t11 = isInView ? {
            opacity: 1,
            scale: 1
        } : {};
        $[13] = isInView;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            initial: t10,
            animate: t11,
            className: "inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full",
            children: [
                t12,
                "Testimonials"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl sm:text-5xl md:text-6xl font-bold mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white",
                    children: "What Our "
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Reviews.tsx",
                    lineNumber: 170,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "gradient-text",
                    children: "Guests Say"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Reviews.tsx",
                    lineNumber: 170,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/60 max-w-2xl mx-auto text-lg",
            children: "Don't just take our word for it. Here's what our customers have to say about their dining experience."
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[18] = t14;
        $[19] = t15;
    } else {
        t14 = $[18];
        t15 = $[19];
    }
    let t16;
    if ($[20] !== t13 || $[21] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            initial: t7,
            animate: t8,
            transition: t9,
            className: "text-center mb-16",
            children: [
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[20] = t13;
        $[21] = t8;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            type: "spring",
            stiffness: 300,
            damping: 30
        };
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                className: "w-6 h-6 text-[#FF4D00]"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Reviews.tsx",
                lineNumber: 200,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = [
            ...Array(5)
        ];
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== currentIndex) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1 mb-6",
            children: t19.map({
                "Reviews[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: `w-5 h-5 ${i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][currentIndex].rating ? "text-[#FFD700] fill-[#FFD700]" : "text-white/20"}`
                    }, i, false, {
                        fileName: "[project]/src/components/sections/Reviews.tsx",
                        lineNumber: 215,
                        columnNumber: 45
                    }, this)
            }["Reviews[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[26] = currentIndex;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    const t21 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][currentIndex];
    let t22;
    if ($[28] !== t21.comment) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg sm:text-xl text-white/90 leading-relaxed mb-8 flex-1",
            children: [
                '"',
                t21.comment,
                '"'
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[28] = t21.comment;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    const t23 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][currentIndex];
    const t24 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][currentIndex];
    let t25;
    if ($[30] !== t23.avatar || $[31] !== t24.name) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t23.avatar,
            alt: t24.name,
            className: "w-14 h-14 rounded-full object-cover border-2 border-[#FF4D00]/30"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[30] = t23.avatar;
        $[31] = t24.name;
        $[32] = t25;
    } else {
        t25 = $[32];
    }
    const t26 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][currentIndex];
    let t27;
    if ($[33] !== t26.name) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-white",
            children: t26.name
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[33] = t26.name;
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    const t28 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][currentIndex];
    let t29;
    if ($[35] !== t28.date) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-white/50",
            children: t28.date
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[35] = t28.date;
        $[36] = t29;
    } else {
        t29 = $[36];
    }
    let t30;
    if ($[37] !== t27 || $[38] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-left",
            children: [
                t27,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[37] = t27;
        $[38] = t29;
        $[39] = t30;
    } else {
        t30 = $[39];
    }
    let t31;
    if ($[40] !== t25 || $[41] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t25,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[40] = t25;
        $[41] = t30;
        $[42] = t31;
    } else {
        t31 = $[42];
    }
    let t32;
    if ($[43] !== t20 || $[44] !== t22 || $[45] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full p-8 sm:p-12 rounded-3xl glass flex flex-col items-center text-center",
            children: [
                t18,
                t20,
                t22,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[43] = t20;
        $[44] = t22;
        $[45] = t31;
        $[46] = t32;
    } else {
        t32 = $[46];
    }
    let t33;
    if ($[47] !== currentIndex || $[48] !== direction || $[49] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            custom: direction,
            variants: variants,
            initial: "enter",
            animate: "center",
            exit: "exit",
            transition: t17,
            className: "absolute inset-0",
            children: t32
        }, currentIndex, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[47] = currentIndex;
        $[48] = direction;
        $[49] = t32;
        $[50] = t33;
    } else {
        t33 = $[50];
    }
    let t34;
    if ($[51] !== direction || $[52] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[400px] sm:h-[350px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                custom: direction,
                children: t33
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Reviews.tsx",
                lineNumber: 300,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[51] = direction;
        $[52] = t33;
        $[53] = t34;
    } else {
        t34 = $[53];
    }
    let t35;
    let t36;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = {
            scale: 1.1
        };
        t36 = {
            scale: 0.9
        };
        $[54] = t35;
        $[55] = t36;
    } else {
        t35 = $[54];
        t36 = $[55];
    }
    let t37;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: prevSlide,
            whileHover: t35,
            whileTap: t36,
            className: "w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[#FF4D00]/20 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Reviews.tsx",
                lineNumber: 324,
                columnNumber: 203
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[56] = t37;
    } else {
        t37 = $[56];
    }
    let t38;
    if ($[57] !== currentIndex) {
        t38 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].map({
            "Reviews[reviews.map()]": (__0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Reviews[reviews.map() > <button>.onClick]": ()=>{
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }
                    }["Reviews[reviews.map() > <button>.onClick]"],
                    className: `w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-[#FF4D00]" : "bg-white/30 hover:bg-white/50"}`
                }, index, false, {
                    fileName: "[project]/src/components/sections/Reviews.tsx",
                    lineNumber: 332,
                    columnNumber: 49
                }, this)
        }["Reviews[reviews.map()]"]);
        $[57] = currentIndex;
        $[58] = t38;
    } else {
        t38 = $[58];
    }
    let t39;
    if ($[59] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[59] = t38;
        $[60] = t39;
    } else {
        t39 = $[60];
    }
    let t40;
    let t41;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = {
            scale: 1.1
        };
        t41 = {
            scale: 0.9
        };
        $[61] = t40;
        $[62] = t41;
    } else {
        t40 = $[61];
        t41 = $[62];
    }
    let t42;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: nextSlide,
            whileHover: t40,
            whileTap: t41,
            className: "w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[#FF4D00]/20 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Reviews.tsx",
                lineNumber: 369,
                columnNumber: 203
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[63] = t42;
    } else {
        t42 = $[63];
    }
    let t43;
    if ($[64] !== t39) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-4 mt-8",
            children: [
                t37,
                t39,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[64] = t39;
        $[65] = t43;
    } else {
        t43 = $[65];
    }
    let t44;
    if ($[66] !== t34 || $[67] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-4xl mx-auto",
            children: [
                t34,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[66] = t34;
        $[67] = t43;
        $[68] = t44;
    } else {
        t44 = $[68];
    }
    let t45;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = {
            opacity: 0,
            y: 30
        };
        $[69] = t45;
    } else {
        t45 = $[69];
    }
    let t46;
    if ($[70] !== isInView) {
        t46 = isInView ? {
            opacity: 1,
            y: 0
        } : {};
        $[70] = isInView;
        $[71] = t46;
    } else {
        t46 = $[71];
    }
    let t47;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = {
            duration: 0.6,
            delay: 0.4
        };
        $[72] = t47;
    } else {
        t47 = $[72];
    }
    let t48;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = [
            {
                value: "4.9",
                label: "Average Rating"
            },
            {
                value: "10K+",
                label: "Reviews"
            },
            {
                value: "95%",
                label: "Recommend Us"
            },
            {
                value: "4.8",
                label: "Food Quality"
            }
        ];
        $[73] = t48;
    } else {
        t48 = $[73];
    }
    let t49;
    if ($[74] !== isInView) {
        t49 = t48.map({
            "Reviews[(anonymous)()]": (stat, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    animate: isInView ? {
                        opacity: 1,
                        scale: 1
                    } : {},
                    transition: {
                        delay: 0.5 + index_0 * 0.1
                    },
                    className: "text-center p-6 rounded-2xl glass",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-3xl sm:text-4xl font-bold gradient-text mb-1",
                            children: stat.value
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Reviews.tsx",
                            lineNumber: 452,
                            columnNumber: 56
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-white/60",
                            children: stat.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Reviews.tsx",
                            lineNumber: 452,
                            columnNumber: 141
                        }, this)
                    ]
                }, index_0, true, {
                    fileName: "[project]/src/components/sections/Reviews.tsx",
                    lineNumber: 444,
                    columnNumber: 52
                }, this)
        }["Reviews[(anonymous)()]"]);
        $[74] = isInView;
        $[75] = t49;
    } else {
        t49 = $[75];
    }
    let t50;
    if ($[76] !== t46 || $[77] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t45,
            animate: t46,
            transition: t47,
            className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-6",
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[76] = t46;
        $[77] = t49;
        $[78] = t50;
    } else {
        t50 = $[78];
    }
    let t51;
    if ($[79] !== t16 || $[80] !== t44 || $[81] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "reviews",
            className: "py-24 bg-[#0B0B0B] relative overflow-hidden",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                    children: [
                        t16,
                        t44,
                        t50
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Reviews.tsx",
                    lineNumber: 470,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Reviews.tsx",
            lineNumber: 470,
            columnNumber: 11
        }, this);
        $[79] = t16;
        $[80] = t44;
        $[81] = t50;
        $[82] = t51;
    } else {
        t51 = $[82];
    }
    return t51;
}
_s(Reviews, "Z0gRjRiPONEGclgvTMoqWeUEfoI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Reviews;
function _temp2(direction_1) {
    return {
        x: direction_1 < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.9
    };
}
function _temp(direction_0) {
    return {
        x: direction_0 > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.9
    };
}
function _ReviewsPrevSlideSetCurrentIndex(prev_1) {
    return (prev_1 - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length;
}
function _ReviewsNextSlideSetCurrentIndex(prev_0) {
    return (prev_0 + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length;
}
function _ReviewsUseEffectSetIntervalSetCurrentIndex(prev) {
    return (prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length;
}
var _c;
__turbopack_context__.k.register(_c, "Reviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Booking.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Booking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Booking() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "e47c22654caedddb43e5fb588fb76ed0f81cc25d48f6d24ca51995f02ce42a6b") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e47c22654caedddb43e5fb588fb76ed0f81cc25d48f6d24ca51995f02ce42a6b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: 2,
            occasion: "",
            specialRequests: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            once: true,
            margin: "-100px"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Booking[handleSubmit]": async (e)=>{
                e.preventDefault();
                setIsLoading(true);
                await new Promise(_temp);
                setIsLoading(false);
                setIsSubmitted(true);
            }
        })["Booking[handleSubmit]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleSubmit = t2;
    let t3;
    if ($[4] !== formData) {
        t3 = ({
            "Booking[handleChange]": (e_0)=>{
                setFormData({
                    ...formData,
                    [e_0.target.name]: e_0.target.value
                });
            }
        })["Booking[handleChange]"];
        $[4] = formData;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleChange = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FF4D00]/5 rounded-full blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Booking.tsx",
                    lineNumber: 81,
                    columnNumber: 64
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Booking.tsx",
                    lineNumber: 81,
                    columnNumber: 165
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0,
            x: -50
        };
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== isInView) {
        t6 = isInView ? {
            opacity: 1,
            x: 0
        } : {};
        $[8] = isInView;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            duration: 0.6
        };
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            opacity: 0,
            scale: 0.9
        };
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== isInView) {
        t9 = isInView ? {
            opacity: 1,
            scale: 1
        } : {};
        $[12] = isInView;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            initial: t8,
            animate: t9,
            className: "inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full",
            children: [
                t10,
                "Reserve Your Table"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[15] = t9;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl sm:text-5xl font-bold mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white",
                    children: "Book Your "
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Booking.tsx",
                    lineNumber: 155,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "gradient-text",
                    children: "Dining Experience"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Booking.tsx",
                    lineNumber: 155,
                    columnNumber: 109
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/60 text-lg mb-8 leading-relaxed",
            children: "Whether it's a romantic dinner, family celebration, or business meeting, we'll make it unforgettable. Reserve your table now and let us take care of the rest."
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[17] = t12;
        $[18] = t13;
    } else {
        t12 = $[17];
        t13 = $[18];
    }
    let t14;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                text: "Priority seating for reservations"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                text: "Accommodates groups of any size"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                text: "Special arrangements for occasions"
            }
        ];
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== isInView) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: t14.map({
                "Booking[(anonymous)()]": (feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: isInView ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            delay: 0.2 + index * 0.1
                        },
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-[#FF4D00]/10 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                    className: "w-5 h-5 text-[#FF4D00]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Booking.tsx",
                                    lineNumber: 190,
                                    columnNumber: 137
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 190,
                                columnNumber: 48
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/80",
                                children: feature.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 190,
                                columnNumber: 194
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 182,
                        columnNumber: 55
                    }, this)
            }["Booking[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[20] = isInView;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-10 p-6 rounded-2xl glass",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/60 text-sm mb-2",
                    children: "Need help with your reservation?"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Booking.tsx",
                    lineNumber: 199,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white font-semibold text-lg",
                    children: "Call us: +91 7639730715"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Booking.tsx",
                    lineNumber: 199,
                    columnNumber: 134
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/40 text-sm mt-1",
                    children: "Available 10 AM - 11 PM"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Booking.tsx",
                    lineNumber: 199,
                    columnNumber: 209
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== t11 || $[24] !== t15 || $[25] !== t6) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            initial: t5,
            animate: t6,
            transition: t7,
            children: [
                t11,
                t12,
                t13,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t15;
        $[25] = t6;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            opacity: 0,
            x: 50
        };
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== isInView) {
        t19 = isInView ? {
            opacity: 1,
            x: 0
        } : {};
        $[28] = isInView;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            duration: 0.6,
            delay: 0.2
        };
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== formData || $[32] !== handleChange || $[33] !== isLoading || $[34] !== isSubmitted) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: isSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: 0.9
                },
                className: "p-8 rounded-3xl glass text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            type: "spring",
                            damping: 10
                        },
                        className: "w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-10 h-10 text-green-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Booking.tsx",
                            lineNumber: 263,
                            columnNumber: 109
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 256,
                        columnNumber: 56
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "Booking Confirmed!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 263,
                        columnNumber: 168
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/60 mb-6",
                        children: "Thank you for your reservation. We've sent a confirmation to your email."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 263,
                        columnNumber: 242
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Booking[<button>.onClick]": ()=>{
                                setIsSubmitted(false);
                                setFormData({
                                    name: "",
                                    email: "",
                                    phone: "",
                                    date: "",
                                    time: "",
                                    guests: 2,
                                    occasion: "",
                                    specialRequests: ""
                                });
                            }
                        }["Booking[<button>.onClick]"],
                        className: "btn-primary",
                        children: "Make Another Booking"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 263,
                        columnNumber: 352
                    }, this)
                ]
            }, "success", true, {
                fileName: "[project]/src/components/sections/Booking.tsx",
                lineNumber: 247,
                columnNumber: 55
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                onSubmit: handleSubmit,
                className: "p-8 rounded-3xl glass space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 126
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        value: formData.name,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4D00] transition-colors",
                                        placeholder: "John Doe"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 207
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 121
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: "Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 502
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        name: "phone",
                                        value: formData.phone,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4D00] transition-colors",
                                        placeholder: "+91 7639730715"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 586
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 497
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 283,
                        columnNumber: 78
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Email Address"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 894
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                value: formData.email,
                                onChange: handleChange,
                                required: true,
                                className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4D00] transition-colors",
                                placeholder: "john@example.com"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 979
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 283,
                        columnNumber: 889
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4 inline mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Booking.tsx",
                                                lineNumber: 283,
                                                columnNumber: 1392
                                            }, this),
                                            " Date"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 1328
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        name: "date",
                                        value: formData.date,
                                        onChange: handleChange,
                                        required: true,
                                        min: new Date().toISOString().split("T")[0],
                                        className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 1449
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 1323
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-4 h-4 inline mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Booking.tsx",
                                                lineNumber: 283,
                                                columnNumber: 1809
                                            }, this),
                                            " Time"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 1745
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "time",
                                        value: formData.time,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FF4D00] transition-colors appearance-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                className: "bg-[#1a1a1a]",
                                                children: "Select time"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Booking.tsx",
                                                lineNumber: 283,
                                                columnNumber: 2121
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeSlots"].map(_BookingTimeSlotsMap)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 1863
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 1740
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-4 h-4 inline mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Booking.tsx",
                                                lineNumber: 283,
                                                columnNumber: 2304
                                            }, this),
                                            " Guests"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 2240
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "guests",
                                        value: formData.guests,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FF4D00] transition-colors appearance-none cursor-pointer",
                                        children: [
                                            [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6,
                                                7,
                                                8
                                            ].map(_BookingAnonymous),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "9",
                                                className: "bg-[#1a1a1a]",
                                                children: "9+ People"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Booking.tsx",
                                                lineNumber: 283,
                                                columnNumber: 2671
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 2360
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 2235
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 283,
                        columnNumber: 1280
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Occasion"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 2758
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "occasion",
                                value: formData.occasion,
                                onChange: handleChange,
                                className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FF4D00] transition-colors appearance-none cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        className: "bg-[#1a1a1a]",
                                        children: "Select occasion (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Booking.tsx",
                                        lineNumber: 283,
                                        columnNumber: 3088
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["occasions"].map(_BookingOccasionsMap)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 2838
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 283,
                        columnNumber: 2753
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Special Requests"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 3222
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                name: "specialRequests",
                                value: formData.specialRequests,
                                onChange: handleChange,
                                rows: 3,
                                className: "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4D00] transition-colors resize-none",
                                placeholder: "Any dietary restrictions or special requests..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Booking.tsx",
                                lineNumber: 283,
                                columnNumber: 3310
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 283,
                        columnNumber: 3217
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        type: "submit",
                        disabled: isLoading,
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        className: "w-full py-4 rounded-xl bg-gradient-to-r from-[#FF4D00] to-[#cc3d00] text-white font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Booking.tsx",
                            lineNumber: 287,
                            columnNumber: 197
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Booking.tsx",
                                    lineNumber: 293,
                                    columnNumber: 94
                                }, this),
                                "Confirm Reservation"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 283,
                        columnNumber: 3657
                    }, this)
                ]
            }, "form", true, {
                fileName: "[project]/src/components/sections/Booking.tsx",
                lineNumber: 277,
                columnNumber: 110
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[31] = formData;
        $[32] = handleChange;
        $[33] = isLoading;
        $[34] = isSubmitted;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== t19 || $[37] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t18,
            animate: t19,
            transition: t20,
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[36] = t19;
        $[37] = t21;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== t17 || $[40] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "booking",
            className: "py-24 bg-[#0B0B0B] relative overflow-hidden",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-12 items-center",
                        children: [
                            t17,
                            t22
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Booking.tsx",
                        lineNumber: 313,
                        columnNumber: 163
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Booking.tsx",
                    lineNumber: 313,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Booking.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[39] = t17;
        $[40] = t22;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    return t23;
}
_s(Booking, "XR/aCOfPHkr09JnEsijxNPtlk1Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Booking;
function _BookingOccasionsMap(occasion) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: occasion,
        className: "bg-[#1a1a1a]",
        children: occasion
    }, occasion, false, {
        fileName: "[project]/src/components/sections/Booking.tsx",
        lineNumber: 323,
        columnNumber: 10
    }, this);
}
function _BookingAnonymous(num) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: num,
        className: "bg-[#1a1a1a]",
        children: [
            num,
            " ",
            num === 1 ? "Person" : "People"
        ]
    }, num, true, {
        fileName: "[project]/src/components/sections/Booking.tsx",
        lineNumber: 326,
        columnNumber: 10
    }, this);
}
function _BookingTimeSlotsMap(time) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: time,
        className: "bg-[#1a1a1a]",
        children: time
    }, time, false, {
        fileName: "[project]/src/components/sections/Booking.tsx",
        lineNumber: 329,
        columnNumber: 10
    }, this);
}
function _temp(resolve) {
    return setTimeout(resolve, 1500);
}
var _c;
__turbopack_context__.k.register(_c, "Booking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const contactInfo = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        title: 'Visit Us',
        content: '123 Food Street, Culinary District',
        subContent: 'Mumbai, Maharashtra 400001',
        action: 'Get Directions',
        href: 'https://maps.google.com'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
        title: 'Call Us',
        content: '+91 7639730715',
        subContent: 'Mon-Sun: 10 AM - 11 PM',
        action: 'Call Now',
        href: 'tel:+917639730715'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        title: 'Email Us',
        content: 'hello@restarnt.com',
        subContent: 'We reply within 24 hours',
        action: 'Send Email',
        href: 'mailto:hello@restarnt.com'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        title: 'Opening Hours',
        content: 'Mon - Sun: 10 AM - 11 PM',
        subContent: 'Kitchen closes at 10:30 PM',
        action: null,
        href: null
    }
];
function Contact() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "f130cb14058473b0cff91ba16246857690ce7bddbdbce69e2b4866918a755889") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f130cb14058473b0cff91ba16246857690ce7bddbdbce69e2b4866918a755889";
    }
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF4D00]/5 rounded-full blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 58,
                    columnNumber: 64
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-3xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 58,
                    columnNumber: 165
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 30
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== isInView) {
        t3 = isInView ? {
            opacity: 1,
            y: 0
        } : {};
        $[4] = isInView;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            duration: 0.6
        };
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0,
            scale: 0.9
        };
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== isInView) {
        t6 = isInView ? {
            opacity: 1,
            scale: 1
        } : {};
        $[8] = isInView;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            initial: t5,
            animate: t6,
            className: "inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full",
            children: [
                t7,
                "Get In Touch"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 123,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t10;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl sm:text-5xl md:text-6xl font-bold mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white",
                    children: "Contact "
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 132,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "gradient-text",
                    children: "Us"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 132,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/60 max-w-2xl mx-auto text-lg",
            children: "Have questions or want to make a reservation? We're here to help. Reach out to us through any of the channels below."
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t9;
    } else {
        t10 = $[13];
        t9 = $[14];
    }
    let t11;
    if ($[15] !== t3 || $[16] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            initial: t2,
            animate: t3,
            transition: t4,
            className: "text-center mb-16",
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[15] = t3;
        $[16] = t8;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== isInView) {
        t12 = contactInfo.map({
            "Contact[contactInfo.map()]": (info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: isInView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.5,
                        delay: index * 0.1
                    },
                    className: "p-6 rounded-2xl glass card-hover group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-[#FF4D00]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF4D00]/20 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(info.icon, {
                                className: "w-6 h-6 text-[#FF4D00]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 161,
                                columnNumber: 199
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 161,
                            columnNumber: 61
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-white mb-2",
                            children: info.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 161,
                            columnNumber: 253
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/80",
                            children: info.content
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 161,
                            columnNumber: 324
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/50 mt-1",
                            children: info.subContent
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 161,
                            columnNumber: 371
                        }, this),
                        info.action && info.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: info.href,
                            target: info.href.startsWith("http") ? "_blank" : undefined,
                            rel: info.href.startsWith("http") ? "noopener noreferrer" : undefined,
                            className: "inline-flex items-center gap-1 mt-4 text-sm text-[#FF4D00] hover:text-[#FFD700] transition-colors",
                            children: [
                                info.action,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 161,
                                    columnNumber: 738
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 161,
                            columnNumber: 463
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 152,
                    columnNumber: 54
                }, this)
        }["Contact[contactInfo.map()]"]);
        $[18] = isInView;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid sm:grid-cols-2 gap-6",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            opacity: 0,
            x: 50
        };
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== isInView) {
        t15 = isInView ? {
            opacity: 1,
            x: 0
        } : {};
        $[23] = isInView;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            duration: 0.6,
            delay: 0.3
        };
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984904!2d72.74109905234374!3d19.0821978394271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin",
            width: "100%",
            height: "100%",
            style: {
                border: 0,
                filter: "grayscale(100%) invert(92%) contrast(83%)"
            },
            allowFullScreen: true,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            className: "absolute inset-0"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[26] = t17;
        $[27] = t18;
    } else {
        t17 = $[26];
        t18 = $[27];
    }
    let t19;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl overflow-hidden h-[300px] sm:h-[400px]",
            children: [
                t17,
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-4 left-4 right-4 p-4 rounded-xl glass",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-[#FF4D00] flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 223,
                                    columnNumber: 310
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 223,
                                columnNumber: 210
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-white",
                                        children: "RESTARNT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 223,
                                        columnNumber: 362
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-white/60",
                                        children: "123 Food Street, Mumbai"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 223,
                                        columnNumber: 416
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 223,
                                columnNumber: 357
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 223,
                        columnNumber: 169
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 223,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    let t20;
    let t21;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            scale: 1.02
        };
        t21 = {
            scale: 0.98
        };
        $[29] = t20;
        $[30] = t21;
    } else {
        t20 = $[29];
        t21 = $[30];
    }
    let t22;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            href: "https://wa.me/917639730715",
            target: "_blank",
            rel: "noopener noreferrer",
            whileHover: t20,
            whileTap: t21,
            className: "flex items-center justify-center gap-2 p-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 245,
                    columnNumber: 268
                }, this),
                "WhatsApp"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    let t24;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            scale: 1.02
        };
        t24 = {
            scale: 0.98
        };
        $[32] = t23;
        $[33] = t24;
    } else {
        t23 = $[32];
        t24 = $[33];
    }
    let t25;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                    href: "tel:+919876543210",
                    whileHover: t23,
                    whileTap: t24,
                    className: "flex items-center justify-center gap-2 p-4 rounded-xl bg-[#FF4D00] hover:bg-[#cc3d00] text-white font-medium transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 267,
                            columnNumber: 262
                        }, this),
                        "Call Now"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 267,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[34] = t25;
    } else {
        t25 = $[34];
    }
    let t26;
    if ($[35] !== t15) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t14,
            animate: t15,
            transition: t16,
            className: "space-y-6",
            children: [
                t19,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] !== t13 || $[38] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid lg:grid-cols-2 gap-12",
            children: [
                t13,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[37] = t13;
        $[38] = t26;
        $[39] = t27;
    } else {
        t27 = $[39];
    }
    let t28;
    if ($[40] !== t11 || $[41] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "py-24 bg-[#0B0B0B] relative overflow-hidden",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                    children: [
                        t11,
                        t27
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 291,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[40] = t11;
        $[41] = t27;
        $[42] = t28;
    } else {
        t28 = $[42];
    }
    return t28;
}
_s(Contact, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e6366f64._.js.map