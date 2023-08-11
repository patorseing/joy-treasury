"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[4923],{"./node_modules/@mui/joy/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),defaultTheme=__webpack_require__("./node_modules/@mui/joy/styles/defaultTheme.js");const Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({themeId:__webpack_require__("./node_modules/@mui/joy/styles/identifier.js").Z,defaultTheme:defaultTheme.Z,defaultClassName:"MuiBox-root",generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/joy/Sheet/Sheet.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Sheet_Sheet});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),style=__webpack_require__("./node_modules/@mui/system/esm/style.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),styleUtils=__webpack_require__("./node_modules/@mui/joy/styles/styleUtils.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getSheetUtilityClass(slot){return(0,className.d6)("MuiSheet",slot)}(0,className.sI)("MuiSheet",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","color","component","variant","invertedColors","slots","slotProps"],SheetRoot=(0,styled.Z)("div",{name:"JoySheet",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$variants,_theme$colorInversion;const variantStyle=null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color],{borderRadius:childRadius,bgcolor,backgroundColor,background}=(0,styleUtils.V)({theme,ownerState},["borderRadius","bgcolor","backgroundColor","background"]),resolvedBg=(0,style.DW)(theme,`palette.${bgcolor}`)||bgcolor||(0,style.DW)(theme,`palette.${backgroundColor}`)||backgroundColor||background||(null==variantStyle?void 0:variantStyle.backgroundColor)||(null==variantStyle?void 0:variantStyle.background)||theme.vars.palette.background.surface;return[(0,esm_extends.Z)({"--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,"--ListItem-stickyBackground":"transparent"===resolvedBg?"initial":resolvedBg,"--Sheet-background":"transparent"===resolvedBg?"initial":resolvedBg},void 0!==childRadius&&{"--List-radius":`calc(${childRadius} - var(--variant-borderWidth, 0px))`,"--unstable_actionRadius":`calc(${childRadius} - var(--variant-borderWidth, 0px))`},{backgroundColor:theme.vars.palette.background.surface,position:"relative"}),(0,esm_extends.Z)({},theme.typography["body-md"],variantStyle),"context"!==ownerState.color&&ownerState.invertedColors&&(null==(_theme$colorInversion=theme.colorInversion[ownerState.variant])?void 0:_theme$colorInversion[ownerState.color])]})),Sheet=react.forwardRef((function Sheet(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoySheet"}),{className,color:colorProp="neutral",component="div",variant="plain",invertedColors=!1,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),ownerState=(0,esm_extends.Z)({},props,{color,component,invertedColors,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root",variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,getSheetUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:SheetRoot,externalForwardedProps,ownerState}),result=(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps));return invertedColors?(0,jsx_runtime.jsx)(ColorInversion.do,{variant,children:result}):result})),Sheet_Sheet=Sheet},"./node_modules/@mui/joy/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eu:()=>TypographyInheritContext,FR:()=>TypographyNestedContext,ZP:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),isMuiElement=__webpack_require__("./node_modules/@mui/utils/esm/isMuiElement.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getTypographyUtilityClass(slot){return(0,className.d6)("MuiTypography",slot)}(0,className.sI)("MuiTypography",["root","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","noWrap","gutterBottom","startDecorator","endDecorator","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["color","textColor"],_excluded2=["component","gutterBottom","noWrap","level","levelMapping","children","endDecorator","startDecorator","variant","slots","slotProps"],TypographyNestedContext=react.createContext(!1),TypographyInheritContext=react.createContext(!1),StartDecorator=(0,styled.Z)("span",{name:"JoyTypography",slot:"StartDecorator",overridesResolver:(props,styles)=>styles.startDecorator})({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),EndDecorator=(0,styled.Z)("span",{name:"JoyTypography",slot:"endDecorator",overridesResolver:(props,styles)=>styles.endDecorator})({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"}),TypographyRoot=(0,styled.Z)("span",{name:"JoyTypography",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$typography,_theme$typography$own,_theme$typography$own2,_theme$vars$palette$o,_theme$variants$owner;const lineHeight="inherit"!==ownerState.level?null==(_theme$typography=theme.typography[ownerState.level])?void 0:_theme$typography.lineHeight:"1";return(0,esm_extends.Z)({"--Icon-fontSize":`calc(1em * ${lineHeight})`},ownerState.color&&{"--Icon-color":"currentColor"},{margin:"var(--Typography-margin, 0px)"},ownerState.nesting?{display:"inline"}:{display:"block"},(ownerState.startDecorator||ownerState.endDecorator)&&(0,esm_extends.Z)({display:"flex",alignItems:"center"},ownerState.nesting&&(0,esm_extends.Z)({display:"inline-flex"},ownerState.startDecorator&&{verticalAlign:"bottom"})),ownerState.level&&"inherit"!==ownerState.level&&theme.typography[ownerState.level],{fontSize:`var(--Typography-fontSize, ${ownerState.level&&"inherit"!==ownerState.level&&null!=(_theme$typography$own=null==(_theme$typography$own2=theme.typography[ownerState.level])?void 0:_theme$typography$own2.fontSize)?_theme$typography$own:"inherit"})`},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.color&&"context"!==ownerState.color&&{color:`rgba(${null==(_theme$vars$palette$o=theme.vars.palette[ownerState.color])?void 0:_theme$vars$palette$o.mainChannel} / 1)`},ownerState.variant&&(0,esm_extends.Z)({borderRadius:theme.vars.radius.xs,paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!ownerState.nesting&&{marginInline:"-0.25em"},null==(_theme$variants$owner=theme.variants[ownerState.variant])?void 0:_theme$variants$owner[ownerState.color]))})),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4","title-lg":"p","title-md":"p","title-sm":"p","body-lg":"p","body-md":"p","body-sm":"p","body-xs":"span",inherit:"p"},Typography=react.forwardRef((function Typography(inProps,ref){const _useThemeProps=(0,useThemeProps.Z)({props:inProps,name:"JoyTypography"}),{color:colorProp,textColor}=_useThemeProps,themeProps=(0,objectWithoutPropertiesLoose.Z)(_useThemeProps,_excluded),nesting=react.useContext(TypographyNestedContext),inheriting=react.useContext(TypographyInheritContext),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color:textColor})),{component:componentProp,gutterBottom=!1,noWrap=!1,level:levelProp="body-md",levelMapping=defaultVariantMapping,children,endDecorator,startDecorator,variant,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,variant?null!=colorProp?colorProp:"neutral":colorProp),level=nesting||inheriting?inProps.level||"inherit":levelProp,component=componentProp||(nesting?"span":levelMapping[level]||defaultVariantMapping[level]||"span"),ownerState=(0,esm_extends.Z)({},props,{level,component,color,gutterBottom,noWrap,nesting,variant}),classes=(ownerState=>{const{gutterBottom,noWrap,level,color,variant}=ownerState,slots={root:["root",level,gutterBottom&&"gutterBottom",noWrap&&"noWrap",color&&`color${(0,capitalize.Z)(color)}`,variant&&`variant${(0,capitalize.Z)(variant)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:classes.root,elementType:TypographyRoot,externalForwardedProps,ownerState}),[SlotStartDecorator,startDecoratorProps]=(0,useSlot.Z)("startDecorator",{className:classes.startDecorator,elementType:StartDecorator,externalForwardedProps,ownerState}),[SlotEndDecorator,endDecoratorProps]=(0,useSlot.Z)("endDecorator",{className:classes.endDecorator,elementType:EndDecorator,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(TypographyNestedContext.Provider,{value:!0,children:(0,jsx_runtime.jsxs)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:[startDecorator&&(0,jsx_runtime.jsx)(SlotStartDecorator,(0,esm_extends.Z)({},startDecoratorProps,{children:startDecorator})),(0,isMuiElement.Z)(children,["Skeleton"])?react.cloneElement(children,{variant:children.props.variant||"inline"}):children,endDecorator&&(0,jsx_runtime.jsx)(SlotEndDecorator,(0,esm_extends.Z)({},endDecoratorProps,{children:endDecorator}))]}))})}));Typography.muiName="Typography";const Typography_Typography=Typography},"./node_modules/@mui/joy/styles/styleUtils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>resolveSxValue});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");const resolveSxValue=({theme,ownerState},keys)=>{let sxObject={};return ownerState.sx&&(!function resolveSx(sxProp){"function"==typeof sxProp?resolveSx(sxProp(theme)):Array.isArray(sxProp)?sxProp.forEach((sxItem=>{"boolean"!=typeof sxItem&&resolveSx(sxItem)})):"object"==typeof sxProp&&(sxObject=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.Z)({},sxObject,sxProp))}(ownerState.sx),keys.forEach((key=>{const value=sxObject[key];var _theme$vars;"string"==typeof value||"number"==typeof value?"borderRadius"===key?sxObject[key]="number"==typeof value?`${value}px`:(null==(_theme$vars=theme.vars)?void 0:_theme$vars.radius[value])||value:-1!==["p","padding","m","margin"].indexOf(key)&&"number"==typeof value?sxObject[key]=theme.spacing(value):sxObject[key]=value:sxObject[key]="function"==typeof value?value(theme):void 0}))),sxObject}},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./node_modules/@mui/utils/esm/isMuiElement.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>isMuiElement});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function isMuiElement(element,muiNames){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)&&-1!==muiNames.indexOf(element.type.muiName)}},"./node_modules/@mui/utils/esm/useIsFocusVisible.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useIsFocusVisible});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let hadFocusVisibleRecentlyTimeout,hadKeyboardEvent=!0,hadFocusVisibleRecently=!1;const inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function handleKeyDown(event){event.metaKey||event.altKey||event.ctrlKey||(hadKeyboardEvent=!0)}function handlePointerDown(){hadKeyboardEvent=!1}function handleVisibilityChange(){"hidden"===this.visibilityState&&hadFocusVisibleRecently&&(hadKeyboardEvent=!0)}function isFocusVisible(event){const{target}=event;try{return target.matches(":focus-visible")}catch(error){}return hadKeyboardEvent||function focusTriggersKeyboardModality(node){const{type,tagName}=node;return!("INPUT"!==tagName||!inputTypesWhitelist[type]||node.readOnly)||"TEXTAREA"===tagName&&!node.readOnly||!!node.isContentEditable}(target)}function useIsFocusVisible(){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{null!=node&&function prepare(doc){doc.addEventListener("keydown",handleKeyDown,!0),doc.addEventListener("mousedown",handlePointerDown,!0),doc.addEventListener("pointerdown",handlePointerDown,!0),doc.addEventListener("touchstart",handlePointerDown,!0),doc.addEventListener("visibilitychange",handleVisibilityChange,!0)}(node.ownerDocument)}),[]),isFocusVisibleRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return{isFocusVisibleRef,onFocus:function handleFocusVisible(event){return!!isFocusVisible(event)&&(isFocusVisibleRef.current=!0,!0)},onBlur:function handleBlurVisible(){return!!isFocusVisibleRef.current&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((()=>{hadFocusVisibleRecently=!1}),100),isFocusVisibleRef.current=!1,!0)},ref}}},"./blocks/layout-dashboard-starter/src/LayoutDashboardStarter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Block:()=>Block,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LayoutDashboardStarter_stories});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js");const esm_styled=(0,__webpack_require__("./node_modules/@mui/system/esm/createStyled.js").ZP)();var createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","disableGutters","fixed","maxWidth","classes"],defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=esm_styled("div",{name:"MuiContainer",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`maxWidth${(0,capitalize.Z)(String(ownerState.maxWidth))}`],ownerState.fixed&&styles.fixed,ownerState.disableGutters&&styles.disableGutters]}}),useThemePropsDefault=inProps=>(0,useThemeProps.Z)({props:inProps,name:"MuiContainer",defaultTheme});var styles_styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js");const Container=function createContainer(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiContainer"}=options,ContainerRoot=createStyledComponent((({theme,ownerState})=>(0,esm_extends.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!ownerState.disableGutters&&{paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),[theme.breakpoints.up("sm")]:{paddingLeft:theme.spacing(3),paddingRight:theme.spacing(3)}})),(({theme,ownerState})=>ownerState.fixed&&Object.keys(theme.breakpoints.values).reduce(((acc,breakpointValueKey)=>{const breakpoint=breakpointValueKey,value=theme.breakpoints.values[breakpoint];return 0!==value&&(acc[theme.breakpoints.up(breakpoint)]={maxWidth:`${value}${theme.breakpoints.unit}`}),acc}),{})),(({theme,ownerState})=>(0,esm_extends.Z)({},"xs"===ownerState.maxWidth&&{[theme.breakpoints.up("xs")]:{maxWidth:Math.max(theme.breakpoints.values.xs,444)}},ownerState.maxWidth&&"xs"!==ownerState.maxWidth&&{[theme.breakpoints.up(ownerState.maxWidth)]:{maxWidth:`${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`}}))),Container=react.forwardRef((function Container(inProps,ref){const props=useThemeProps(inProps),{className,component="div",disableGutters=!1,fixed=!1,maxWidth="lg"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component,disableGutters,fixed,maxWidth}),classes=((ownerState,componentName)=>{const{classes,fixed,disableGutters,maxWidth}=ownerState,slots={root:["root",maxWidth&&`maxWidth${(0,capitalize.Z)(String(maxWidth))}`,fixed&&"fixed",disableGutters&&"disableGutters"]};return(0,composeClasses.Z)(slots,(slot=>(0,generateUtilityClass.Z)(componentName,slot)),classes)})(ownerState,componentName);return(0,jsx_runtime.jsx)(ContainerRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx.Z)(classes.root,className),ref},other))}));return Container}({createStyledComponent:(0,styles_styled.Z)("div",{name:"JoyContainer",slot:"Root",overridesResolver:(props,styles)=>styles.root}),useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"JoyContainer"})}),Container_Container=Container;var CssBaseline=__webpack_require__("./node_modules/@mui/joy/CssBaseline/CssBaseline.js"),GlobalStyles=__webpack_require__("./node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js"),styles_defaultTheme=__webpack_require__("./node_modules/@mui/joy/styles/defaultTheme.js"),identifier=__webpack_require__("./node_modules/@mui/joy/styles/identifier.js");const joy_GlobalStyles=function GlobalStyles_GlobalStyles(props){return(0,jsx_runtime.jsx)(GlobalStyles.Z,(0,esm_extends.Z)({},props,{defaultTheme:styles_defaultTheme.Z,themeId:identifier.Z}))};var IconButton=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),Sheet=__webpack_require__("./node_modules/@mui/joy/Sheet/Sheet.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js");const closeSidebar=()=>{"undefined"!=typeof document&&(document.documentElement.style.removeProperty("--SideNavigation-slideIn"),document.body.style.removeProperty("overflow"))},toggleSidebar=()=>{if("undefined"!=typeof window&&"undefined"!=typeof document){window.getComputedStyle(document.documentElement).getPropertyValue("--SideNavigation-slideIn")?closeSidebar():"undefined"!=typeof document&&(document.body.style.overflow="hidden",document.documentElement.style.setProperty("--SideNavigation-slideIn","1"))}};function Page({children}){return(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"grid",minHeight:"100dvh",gridTemplateAreas:'"sidebar header" "sidebar main"',gridTemplateColumns:"clamp(0px, (100vw - 900px) * 999, var(--Sidebar-width)) 1fr",gridTemplateRows:"auto 1fr",transition:"grid-template-columns 0.2s"},children:[(0,jsx_runtime.jsx)(joy_GlobalStyles,{styles:{":root":{"--Sidebar-width":"256px","--Header-height":"56px"}}}),(0,jsx_runtime.jsx)(CssBaseline.Z,{}),children]})}function Sidebar({children}){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Box.Z,{sx:{position:"fixed",zIndex:9998,top:0,left:0,width:"100vw",height:"100vh",opacity:"var(--SideNavigation-slideIn)",backgroundColor:"background.backdrop",transition:"opacity 0.4s",transform:{xs:"translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))",lg:"translateX(-100%)"}},onClick:()=>closeSidebar()}),(0,jsx_runtime.jsx)(Sheet.Z,{component:"nav",sx:{gridArea:"sidebar",position:{xs:"fixed",md:"sticky"},transform:{xs:"translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",md:"none"},transition:"transform 0.2s",zIndex:1e4,height:"100dvh",width:"var(--Sidebar-width)",top:0,p:2,flexShrink:0,display:"flex",flexDirection:"column",gap:1,borderRight:"1px solid",borderColor:"divider"},children})]})}function Main({children}){return(0,jsx_runtime.jsx)(Box.Z,{component:"main",sx:{gridArea:"main"},children})}function Header(){return(0,jsx_runtime.jsxs)(Sheet.Z,{component:"header",sx:{gridArea:"header",height:"var(--Header-height)",position:"sticky",top:0,px:{xs:2,sm:3},display:"flex",gap:1.5,alignItems:"center",borderBottom:"1px solid",borderColor:"divider"},children:[(0,jsx_runtime.jsx)(IconButton.ZP,{size:"sm",onClick:toggleSidebar,sx:{display:{md:"none"}},children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"})})})}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Global Header"})]})}function LayoutDashboardStarter(){return(0,jsx_runtime.jsxs)(Page,{children:[(0,jsx_runtime.jsx)(Sidebar,{children:"Navigation goes here."}),(0,jsx_runtime.jsx)(Header,{}),(0,jsx_runtime.jsx)(Main,{children:(0,jsx_runtime.jsxs)(Container_Container,{sx:{py:3},children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"h1",sx:{mb:2},children:"Page"}),(0,jsx_runtime.jsx)(Sheet.Z,{variant:"outlined",sx:{p:3,borderRadius:"sm",boxShadow:"xs",minHeight:300},children:"Page content goes here."})]})})]})}Page.displayName="Page",Main.displayName="Main",Header.displayName="Header",LayoutDashboardStarter.displayName="LayoutDashboardStarter";try{Page.displayName="Page",Page.__docgenInfo={description:"",displayName:"Page",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["blocks/layout-dashboard-starter/src/LayoutDashboardStarter.tsx#Page"]={docgenInfo:Page.__docgenInfo,name:"Page",path:"blocks/layout-dashboard-starter/src/LayoutDashboardStarter.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}try{Sidebar.displayName="Sidebar",Sidebar.__docgenInfo={description:"",displayName:"Sidebar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["blocks/layout-dashboard-starter/src/LayoutDashboardStarter.tsx#Sidebar"]={docgenInfo:Sidebar.__docgenInfo,name:"Sidebar",path:"blocks/layout-dashboard-starter/src/LayoutDashboardStarter.tsx#Sidebar"})}catch(__react_docgen_typescript_loader_error){}try{Main.displayName="Main",Main.__docgenInfo={description:"",displayName:"Main",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["blocks/layout-dashboard-starter/src/LayoutDashboardStarter.tsx#Main"]={docgenInfo:Main.__docgenInfo,name:"Main",path:"blocks/layout-dashboard-starter/src/LayoutDashboardStarter.tsx#Main"})}catch(__react_docgen_typescript_loader_error){}const LayoutDashboardStarter_stories={title:"Layout/Dashboard/Starter",component:LayoutDashboardStarter,parameters:{layout:"fullscreen"}},Block={render:()=>(0,jsx_runtime.jsx)(LayoutDashboardStarter,{})};Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:"{\n  render: () => <LayoutDashboardStarter />\n}",...Block.parameters?.docs?.source}}};const __namedExportsOrder=["Block"]}}]);