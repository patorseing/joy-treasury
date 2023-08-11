"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[8367],{"./node_modules/@mui/joy/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eu:()=>TypographyInheritContext,FR:()=>TypographyNestedContext,ZP:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),isMuiElement=__webpack_require__("./node_modules/@mui/utils/esm/isMuiElement.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getTypographyUtilityClass(slot){return(0,className.d6)("MuiTypography",slot)}(0,className.sI)("MuiTypography",["root","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","noWrap","gutterBottom","startDecorator","endDecorator","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["color","textColor"],_excluded2=["component","gutterBottom","noWrap","level","levelMapping","children","endDecorator","startDecorator","variant","slots","slotProps"],TypographyNestedContext=react.createContext(!1),TypographyInheritContext=react.createContext(!1),StartDecorator=(0,styled.Z)("span",{name:"JoyTypography",slot:"StartDecorator",overridesResolver:(props,styles)=>styles.startDecorator})({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),EndDecorator=(0,styled.Z)("span",{name:"JoyTypography",slot:"endDecorator",overridesResolver:(props,styles)=>styles.endDecorator})({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),TypographyRoot=(0,styled.Z)("span",{name:"JoyTypography",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$typography,_theme$typography$own,_theme$typography$own2,_theme$vars$palette$o,_theme$variants$owner;const lineHeight="inherit"!==ownerState.level?null==(_theme$typography=theme.typography[ownerState.level])?void 0:_theme$typography.lineHeight:"1";return(0,esm_extends.Z)({"--Icon-fontSize":`calc(1em * ${lineHeight})`},ownerState.color&&{"--Icon-color":"currentColor"},{margin:"var(--Typography-margin, 0px)"},ownerState.nesting?{display:"inline"}:{display:"block"},(ownerState.startDecorator||ownerState.endDecorator)&&(0,esm_extends.Z)({display:"flex",alignItems:"center"},ownerState.nesting&&(0,esm_extends.Z)({display:"inline-flex"},ownerState.startDecorator&&{verticalAlign:"bottom"})),ownerState.level&&"inherit"!==ownerState.level&&theme.typography[ownerState.level],{fontSize:`var(--Typography-fontSize, ${ownerState.level&&"inherit"!==ownerState.level&&null!=(_theme$typography$own=null==(_theme$typography$own2=theme.typography[ownerState.level])?void 0:_theme$typography$own2.fontSize)?_theme$typography$own:"inherit"})`},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.color&&"context"!==ownerState.color&&{color:`rgba(${null==(_theme$vars$palette$o=theme.vars.palette[ownerState.color])?void 0:_theme$vars$palette$o.mainChannel} / 1)`},ownerState.variant&&(0,esm_extends.Z)({borderRadius:theme.vars.radius.xs,paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!ownerState.nesting&&{marginInline:"-0.25em"},null==(_theme$variants$owner=theme.variants[ownerState.variant])?void 0:_theme$variants$owner[ownerState.color]))})),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4","title-lg":"p","title-md":"p","title-sm":"p","body-lg":"p","body-md":"p","body-sm":"p","body-xs":"span",inherit:"p"},Typography=react.forwardRef((function Typography(inProps,ref){const _useThemeProps=(0,useThemeProps.Z)({props:inProps,name:"JoyTypography"}),{color:colorProp,textColor}=_useThemeProps,themeProps=(0,objectWithoutPropertiesLoose.Z)(_useThemeProps,_excluded),nesting=react.useContext(TypographyNestedContext),inheriting=react.useContext(TypographyInheritContext),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color:textColor})),{component:componentProp,gutterBottom=!1,noWrap=!1,level:levelProp="body-md",levelMapping=defaultVariantMapping,children,endDecorator,startDecorator,variant,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,variant?null!=colorProp?colorProp:"neutral":colorProp),level=nesting||inheriting?inProps.level||"inherit":levelProp,component=componentProp||(nesting?"span":levelMapping[level]||defaultVariantMapping[level]||"span"),ownerState=(0,esm_extends.Z)({},props,{level,component,color,gutterBottom,noWrap,nesting,variant}),classes=(ownerState=>{const{gutterBottom,noWrap,level,color,variant}=ownerState,slots={root:["root",level,gutterBottom&&"gutterBottom",noWrap&&"noWrap",color&&`color${(0,capitalize.Z)(color)}`,variant&&`variant${(0,capitalize.Z)(variant)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:classes.root,elementType:TypographyRoot,externalForwardedProps,ownerState}),[SlotStartDecorator,startDecoratorProps]=(0,useSlot.Z)("startDecorator",{className:classes.startDecorator,elementType:StartDecorator,externalForwardedProps,ownerState}),[SlotEndDecorator,endDecoratorProps]=(0,useSlot.Z)("endDecorator",{className:classes.endDecorator,elementType:EndDecorator,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(TypographyNestedContext.Provider,{value:!0,children:(0,jsx_runtime.jsxs)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:[startDecorator&&(0,jsx_runtime.jsx)(SlotStartDecorator,(0,esm_extends.Z)({},startDecoratorProps,{children:startDecorator})),(0,isMuiElement.Z)(children,["Skeleton"])?react.cloneElement(children,{variant:children.props.variant||"inline"}):children,endDecorator&&(0,jsx_runtime.jsx)(SlotEndDecorator,(0,esm_extends.Z)({},endDecoratorProps,{children:endDecorator}))]}))})}));Typography.muiName="Typography";const Typography_Typography=Typography},"./node_modules/@mui/joy/styles/styleUtils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>resolveSxValue});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");const resolveSxValue=({theme,ownerState},keys)=>{let sxObject={};return ownerState.sx&&(!function resolveSx(sxProp){"function"==typeof sxProp?resolveSx(sxProp(theme)):Array.isArray(sxProp)?sxProp.forEach((sxItem=>{"boolean"!=typeof sxItem&&resolveSx(sxItem)})):"object"==typeof sxProp&&(sxObject=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.Z)({},sxObject,sxProp))}(ownerState.sx),keys.forEach((key=>{const value=sxObject[key];var _theme$vars;"string"==typeof value||"number"==typeof value?"borderRadius"===key?sxObject[key]="number"==typeof value?`${value}px`:(null==(_theme$vars=theme.vars)?void 0:_theme$vars.radius[value])||value:-1!==["p","padding","m","margin"].indexOf(key)&&"number"==typeof value?sxObject[key]=theme.spacing(value):sxObject[key]=value:sxObject[key]="function"==typeof value?value(theme):void 0}))),sxObject}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./node_modules/@mui/utils/esm/isMuiElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>isMuiElement});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function isMuiElement(element,muiNames){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)&&-1!==muiNames.indexOf(element.type.muiName)}},"./node_modules/@mui/utils/esm/useIsFocusVisible.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useIsFocusVisible});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let hadFocusVisibleRecentlyTimeout,hadKeyboardEvent=!0,hadFocusVisibleRecently=!1;const inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function handleKeyDown(event){event.metaKey||event.altKey||event.ctrlKey||(hadKeyboardEvent=!0)}function handlePointerDown(){hadKeyboardEvent=!1}function handleVisibilityChange(){"hidden"===this.visibilityState&&hadFocusVisibleRecently&&(hadKeyboardEvent=!0)}function isFocusVisible(event){const{target}=event;try{return target.matches(":focus-visible")}catch(error){}return hadKeyboardEvent||function focusTriggersKeyboardModality(node){const{type,tagName}=node;return!("INPUT"!==tagName||!inputTypesWhitelist[type]||node.readOnly)||"TEXTAREA"===tagName&&!node.readOnly||!!node.isContentEditable}(target)}function useIsFocusVisible(){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{null!=node&&function prepare(doc){doc.addEventListener("keydown",handleKeyDown,!0),doc.addEventListener("mousedown",handlePointerDown,!0),doc.addEventListener("pointerdown",handlePointerDown,!0),doc.addEventListener("touchstart",handlePointerDown,!0),doc.addEventListener("visibilitychange",handleVisibilityChange,!0)}(node.ownerDocument)}),[]),isFocusVisibleRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return{isFocusVisibleRef,onFocus:function handleFocusVisible(event){return!!isFocusVisible(event)&&(isFocusVisibleRef.current=!0,!0)},onBlur:function handleBlurVisible(){return!!isFocusVisibleRef.current&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((()=>{hadFocusVisibleRecently=!1}),100),isFocusVisibleRef.current=!1,!0)},ref}}},"./blocks/card-dashboard-company/src/CardDashboardCompany.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Block:()=>Block,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardDashboardCompany_stories});__webpack_require__("./node_modules/react/index.js");var AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),CardOverflow=__webpack_require__("./node_modules/@mui/joy/CardOverflow/CardOverflow.js"),IconButton=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardDashboardCompany(){return(0,jsx_runtime.jsxs)(Card.Z,{sx:{borderRadius:"xs"},children:[(0,jsx_runtime.jsxs)(CardOverflow.Z,{sx:{display:"flex",alignItems:"center",borderBottom:"1px solid",borderColor:"divider"},children:[(0,jsx_runtime.jsx)(AspectRatio.Z,{variant:"solid",color:"danger",ratio:"1",sx:{m:0,width:48,borderRadius:"50%",transform:"translateY(50%)"},children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"})})})})}),(0,jsx_runtime.jsx)(IconButton.ZP,{variant:"plain",color:"neutral",sx:{ml:"auto",mr:-1,borderRadius:"50%"},children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})})})})]}),(0,jsx_runtime.jsxs)(CardContent.Z,{sx:{mt:"24px"},children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",textColor:"text.icon",children:"Thailand"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"h2",children:"Joy Treasury"})]}),(0,jsx_runtime.jsx)(CardContent.Z,{children:(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"A leading global technology company, specializing in innovative software solutions and cutting-edge hardware development."})}),(0,jsx_runtime.jsx)(CardContent.Z,{children:(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"})})}),children:"20 DEC 2022"})})]})}CardDashboardCompany.displayName="CardDashboardCompany";const CardDashboardCompany_stories={title:"Card/Dashboard/Company",component:CardDashboardCompany,parameters:{layout:"centered"}},Block={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:300,maxWidth:"100%"},children:(0,jsx_runtime.jsx)(CardDashboardCompany,{})})};Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 300,\n    maxWidth: "100%"\n  }}>\n      <CardDashboardCompany />\n    </div>\n}',...Block.parameters?.docs?.source}}};const __namedExportsOrder=["Block"]}}]);