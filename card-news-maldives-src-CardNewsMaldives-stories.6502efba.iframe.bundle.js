"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[8666],{"./node_modules/@mui/joy/Button/buttonClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>getButtonUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getButtonUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiButton",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiButton",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","focusVisible","disabled","sizeSm","sizeMd","sizeLg","fullWidth","startDecorator","endDecorator","loading","loadingIndicatorCenter"])},"./node_modules/@mui/joy/CardOverflow/CardOverflow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_base__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),_styles__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),_styles_ColorInversion__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),_cardOverflowClasses__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),_utils_useSlot__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),_Button_buttonClasses__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Button/buttonClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","color","variant","slots","slotProps"],CardOverflowRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__.Z)("div",{name:"JoyCardOverflow",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$variants;const childRadius="calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))";return(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({alignSelf:"stretch",borderRadius:"var(--CardOverflow-radius)",position:"relative"},"Card-horizontal"===ownerState["data-parent"]&&(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--AspectRatio-margin":"calc(-1 * var(--Card-padding)) 0px",marginTop:"var(--CardOverflow-offset)",marginBottom:"var(--CardOverflow-offset)",padding:"var(--Card-padding) 0px"},void 0!==ownerState["data-first-child"]&&{"--AspectRatio-radius":`${childRadius} 0 0 ${childRadius}`,borderTopRightRadius:0,borderBottomRightRadius:0,marginLeft:"var(--CardOverflow-offset)"},void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":`0 ${childRadius} ${childRadius} 0`,borderTopLeftRadius:0,borderBottomLeftRadius:0,marginRight:"var(--CardOverflow-offset)"},void 0!==ownerState["data-first-child"]&&void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":childRadius},{[`& > .${_Button_buttonClasses__WEBPACK_IMPORTED_MODULE_7__.Z.root}:only-child`]:{height:"calc(100% + -2 * var(--CardOverflow-offset))","--Button-margin":"var(--CardOverflow-offset) 0","--Button-radius":"0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0"}}),"Card-vertical"===ownerState["data-parent"]&&(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--AspectRatio-margin":"0px calc(-1 * var(--Card-padding))",marginLeft:"var(--CardOverflow-offset)",marginRight:"var(--CardOverflow-offset)",padding:"0px var(--Card-padding)"},void 0!==ownerState["data-first-child"]&&{"--AspectRatio-radius":`${childRadius} ${childRadius} 0 0`,borderBottomLeftRadius:0,borderBottomRightRadius:0,marginTop:"var(--CardOverflow-offset)"},void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":`0 0 ${childRadius} ${childRadius}`,borderTopLeftRadius:0,borderTopRightRadius:0,marginBottom:"var(--CardOverflow-offset)"},void 0!==ownerState["data-first-child"]&&void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":childRadius},{[`& > .${_Button_buttonClasses__WEBPACK_IMPORTED_MODULE_7__.Z.root}:only-child`]:{zIndex:1,width:"calc(100% + -2 * var(--CardOverflow-offset))","--Button-margin":"0 var(--CardOverflow-offset)","--Button-radius":"0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)"}}),null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color])})),CardOverflow=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function CardOverflow(inProps,ref){const props=(0,_styles__WEBPACK_IMPORTED_MODULE_8__.Z)({props:inProps,name:"JoyCardOverflow"}),{className,component="div",children,color:colorProp="neutral",variant="plain",slots={},slotProps={}}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(props,_excluded),{getColor}=(0,_styles_ColorInversion__WEBPACK_IMPORTED_MODULE_10__.VT)(variant),color=getColor(inProps.color,colorProp),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{component,color,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root",variant&&`variant${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(variant)}`,color&&`color${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(color)}`]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_3__.Z)(slots,_cardOverflowClasses__WEBPACK_IMPORTED_MODULE_4__.$,{})})(ownerState),externalForwardedProps=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,_utils_useSlot__WEBPACK_IMPORTED_MODULE_11__.Z)("root",{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_12__.Z)(classes.root,className),elementType:CardOverflowRoot,externalForwardedProps,ownerState});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rootProps,{children}))}));CardOverflow.muiName="CardOverflow";const __WEBPACK_DEFAULT_EXPORT__=CardOverflow},"./node_modules/@mui/joy/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Link_Link});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/utils/esm/useIsFocusVisible.js"),useForkRef=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),isMuiElement=__webpack_require__("./node_modules/@mui/utils/esm/isMuiElement.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getLinkUtilityClass(slot){return(0,className.d6)("MuiLink",slot)}const Link_linkClasses=(0,className.sI)("MuiLink",["root","disabled","focusVisible","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","focusVisible","variantPlain","variantOutlined","variantSoft","variantSolid","underlineNone","underlineHover","underlineAlways","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","startDecorator","endDecorator"]);var Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["color","textColor","variant"],_excluded2=["children","disabled","onBlur","onFocus","level","overlay","underline","endDecorator","startDecorator","component","slots","slotProps"],StartDecorator=(0,styled.Z)("span",{name:"JoyLink",slot:"StartDecorator",overridesResolver:(props,styles)=>styles.startDecorator})((({ownerState})=>{var _ownerState$sx;return(0,esm_extends.Z)({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Link-gap, 0.375em), 0.75rem)"},"string"!=typeof ownerState.startDecorator&&("flex-start"===ownerState.alignItems||"flex-start"===(null==(_ownerState$sx=ownerState.sx)?void 0:_ownerState$sx.alignItems))&&{marginTop:"2px"})})),EndDecorator=(0,styled.Z)("span",{name:"JoyLink",slot:"endDecorator",overridesResolver:(props,styles)=>styles.endDecorator})((({ownerState})=>{var _ownerState$sx2;return(0,esm_extends.Z)({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"},"string"!=typeof ownerState.startDecorator&&("flex-start"===ownerState.alignItems||"flex-start"===(null==(_ownerState$sx2=ownerState.sx)?void 0:_ownerState$sx2.alignItems))&&{marginTop:"2px"})})),LinkRoot=(0,styled.Z)("a",{name:"JoyLink",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$vars$palette,_theme$vars$palette2,_theme$vars$palette3,_theme$variants$owner,_theme$variants,_theme$variants2,_theme$variants3;return[(0,esm_extends.Z)({"--Icon-fontSize":"1.25em","--Icon-color":"currentColor","--CircularProgress-size":"1.25em","--CircularProgress-thickness":"3px"},ownerState.level&&"inherit"!==ownerState.level&&theme.typography[ownerState.level],"inherit"===ownerState.level&&{font:"inherit"},"none"===ownerState.underline&&{textDecoration:"none"},"hover"===ownerState.underline&&{textDecoration:"none","&:hover":{textDecorationLine:"underline"}},"always"===ownerState.underline&&{textDecoration:"underline"},ownerState.startDecorator&&{verticalAlign:"bottom"},{textDecorationThickness:"max(0.08em, 1px)",textUnderlineOffset:"0.15em",display:"inline-flex",alignItems:"center",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:theme.vars.radius.xs,padding:0,cursor:"pointer"},"context"!==ownerState.color&&{textDecorationColor:`rgba(${null==(_theme$vars$palette=theme.vars.palette[ownerState.color])?void 0:_theme$vars$palette.mainChannel} / var(--Link-underlineOpacity, 0.72))`},ownerState.variant?(0,esm_extends.Z)({paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!ownerState.nesting&&{marginInline:"-0.25em"}):(0,esm_extends.Z)({},"context"!==ownerState.color&&{color:`rgba(${null==(_theme$vars$palette2=theme.vars.palette[ownerState.color])?void 0:_theme$vars$palette2.mainChannel} / 1)`},{[`&.${Link_linkClasses.disabled}`]:(0,esm_extends.Z)({pointerEvents:"none"},"context"!==ownerState.color&&{color:`rgba(${null==(_theme$vars$palette3=theme.vars.palette[ownerState.color])?void 0:_theme$vars$palette3.mainChannel} / 0.6)`})}),{userSelect:"none",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},ownerState.overlay?{position:"initial","&::after":{content:'""',display:"block",position:"absolute",top:0,left:0,bottom:0,right:0,borderRadius:"var(--unstable_actionRadius, inherit)",margin:"var(--unstable_actionMargin)"},[`${theme.focus.selector}`]:{"&::after":theme.focus.default}}:{position:"relative",[theme.focus.selector]:theme.focus.default}),ownerState.variant&&(0,esm_extends.Z)({},null==(_theme$variants$owner=theme.variants[ownerState.variant])?void 0:_theme$variants$owner[ownerState.color],{"&:hover":null==(_theme$variants=theme.variants[`${ownerState.variant}Hover`])?void 0:_theme$variants[ownerState.color],"&:active":null==(_theme$variants2=theme.variants[`${ownerState.variant}Active`])?void 0:_theme$variants2[ownerState.color],[`&.${Link_linkClasses.disabled}`]:null==(_theme$variants3=theme.variants[`${ownerState.variant}Disabled`])?void 0:_theme$variants3[ownerState.color]})]})),Link_Link=react.forwardRef((function Link(inProps,ref){const _useThemeProps=(0,useThemeProps.Z)({props:inProps,name:"JoyLink"}),{color:colorProp="primary",textColor,variant}=_useThemeProps,themeProps=(0,objectWithoutPropertiesLoose.Z)(_useThemeProps,_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),nesting=react.useContext(Typography.FR),inheriting=react.useContext(Typography.eu),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color:textColor})),{children,disabled=!1,onBlur,onFocus,level:levelProp="body-md",overlay=!1,underline="hover",endDecorator,startDecorator,component,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),level=nesting||inheriting?inProps.level||"inherit":levelProp,{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.Z)(),[focusVisible,setFocusVisible]=react.useState(!1),handleRef=(0,useForkRef.Z)(ref,focusVisibleRef),ownerState=(0,esm_extends.Z)({},props,{color,disabled,focusVisible,underline,variant,level,overlay,nesting}),classes=(ownerState=>{const{level,color,variant,underline,focusVisible,disabled}=ownerState,slots={root:["root",color&&`color${(0,capitalize.Z)(color)}`,disabled&&"disabled",focusVisible&&"focusVisible",level,underline&&`underline${(0,capitalize.Z)(underline)}`,variant&&`variant${(0,capitalize.Z)(variant)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,composeClasses.Z)(slots,getLinkUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{additionalProps:{onBlur:event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusVisible(!0),onFocus&&onFocus(event)}},ref:handleRef,className:classes.root,elementType:LinkRoot,externalForwardedProps,ownerState}),[SlotStartDecorator,startDecoratorProps]=(0,useSlot.Z)("startDecorator",{className:classes.startDecorator,elementType:StartDecorator,externalForwardedProps,ownerState}),[SlotEndDecorator,endDecoratorProps]=(0,useSlot.Z)("endDecorator",{className:classes.endDecorator,elementType:EndDecorator,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(Typography.FR.Provider,{value:!0,children:(0,jsx_runtime.jsxs)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:[startDecorator&&(0,jsx_runtime.jsx)(SlotStartDecorator,(0,esm_extends.Z)({},startDecoratorProps,{children:startDecorator})),(0,isMuiElement.Z)(children,["Skeleton"])?react.cloneElement(children,{variant:children.props.variant||"inline"}):children,endDecorator&&(0,jsx_runtime.jsx)(SlotEndDecorator,(0,esm_extends.Z)({},endDecoratorProps,{children:endDecorator}))]}))})}))},"./node_modules/@mui/utils/esm/useIsFocusVisible.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useIsFocusVisible});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let hadFocusVisibleRecentlyTimeout,hadKeyboardEvent=!0,hadFocusVisibleRecently=!1;const inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function handleKeyDown(event){event.metaKey||event.altKey||event.ctrlKey||(hadKeyboardEvent=!0)}function handlePointerDown(){hadKeyboardEvent=!1}function handleVisibilityChange(){"hidden"===this.visibilityState&&hadFocusVisibleRecently&&(hadKeyboardEvent=!0)}function isFocusVisible(event){const{target}=event;try{return target.matches(":focus-visible")}catch(error){}return hadKeyboardEvent||function focusTriggersKeyboardModality(node){const{type,tagName}=node;return!("INPUT"!==tagName||!inputTypesWhitelist[type]||node.readOnly)||"TEXTAREA"===tagName&&!node.readOnly||!!node.isContentEditable}(target)}function useIsFocusVisible(){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{null!=node&&function prepare(doc){doc.addEventListener("keydown",handleKeyDown,!0),doc.addEventListener("mousedown",handlePointerDown,!0),doc.addEventListener("pointerdown",handlePointerDown,!0),doc.addEventListener("touchstart",handlePointerDown,!0),doc.addEventListener("visibilitychange",handleVisibilityChange,!0)}(node.ownerDocument)}),[]),isFocusVisibleRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return{isFocusVisibleRef,onFocus:function handleFocusVisible(event){return!!isFocusVisible(event)&&(isFocusVisibleRef.current=!0,!0)},onBlur:function handleBlurVisible(){return!!isFocusVisibleRef.current&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((()=>{hadFocusVisibleRecently=!1}),100),isFocusVisibleRef.current=!1,!0)},ref}}},"./blocks/card-news-maldives/src/CardNewsMaldives.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Block:()=>Block,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardNewsMaldives_stories});__webpack_require__("./node_modules/react/index.js");var AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardOverflow=__webpack_require__("./node_modules/@mui/joy/CardOverflow/CardOverflow.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),Link=__webpack_require__("./node_modules/@mui/joy/Link/Link.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardNewsMaldives(){return(0,jsx_runtime.jsxs)(Card.Z,{sx:{borderRadius:0},children:[(0,jsx_runtime.jsx)(CardOverflow.Z,{children:(0,jsx_runtime.jsxs)(AspectRatio.Z,{children:[(0,jsx_runtime.jsx)("img",{src:"https://images.unsplash.com/photo-1624995256645-3e497ca1b29c"}),(0,jsx_runtime.jsx)(Typography.ZP,{sx:{position:"absolute",zIndex:1,fontWeight:"xl",left:"1rem",top:"1rem",color:"white",textShadow:"0 0.05em 0.2em rgba(0,0,0,0.5)"},children:"NEWS"})]})}),(0,jsx_runtime.jsxs)(CardContent.Z,{sx:{gap:1},children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",children:"July 16 2023"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-lg",children:"Discover the Enchanting Beauty of the Maldives"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"The Maldives is a tropical paradise consisting of pristine islands, turquoise waters, and vibrant coral reefs. It offers a perfect getaway for those seeking relaxation and natural beauty."})]}),(0,jsx_runtime.jsx)(Link.Z,{overlay:!0,level:"body-sm",fontWeight:"lg",component:"button",startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),children:"Find out more"})]})}CardNewsMaldives.displayName="CardNewsMaldives";const CardNewsMaldives_stories={title:"Card/News/Maldives",component:CardNewsMaldives,parameters:{layout:"centered"}},Block={render:()=>(0,jsx_runtime.jsx)("div",{style:{maxWidth:343},children:(0,jsx_runtime.jsx)(CardNewsMaldives,{})})};Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    maxWidth: 343\n  }}>\n      <CardNewsMaldives />\n    </div>\n}",...Block.parameters?.docs?.source}}};const __namedExportsOrder=["Block"]}}]);