"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[8547],{"./node_modules/@mui/joy/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardContent_CardContent});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardContentUtilityClass(slot){return(0,className.d6)("MuiCardContent",slot)}(0,className.sI)("MuiCardContent",["root"]);var cardOverflowClasses=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","orientation","slots","slotProps"],CardContentRoot=(0,styled.Z)("div",{name:"JoyCardContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState})=>({display:"flex",flexDirection:"horizontal"===ownerState.orientation?"row":"column",flex:1,zIndex:1,columnGap:"var(--Card-padding)",padding:"var(--unstable_padding)",[`.${cardOverflowClasses.Z.root} > &`]:{"--unstable_padding":"calc(var(--Card-padding) * 0.75) 0px"}}))),CardContent=react.forwardRef((function CardContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCardContent"}),{className,component="div",children,orientation="vertical",slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),ownerState=(0,esm_extends.Z)({},props,{component,orientation}),classes=(0,composeClasses.Z)({root:["root"]},getCardContentUtilityClass,{}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardContentRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),CardContent_CardContent=CardContent},"./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getCardOverflowUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardOverflowUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiCardOverflow",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"])},"./blocks/card-dashboard-stat1/src/CardDashboardStat1.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Block:()=>Block,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardDashboardStat1_stories});__webpack_require__("./node_modules/react/index.js");var Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardDashboardStat1(){return(0,jsx_runtime.jsx)(Card.Z,{size:"lg",children:(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",children:[(0,jsx_runtime.jsxs)(CardContent.Z,{sx:{gap:1},children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-lg",children:"Orders"}),(0,jsx_runtime.jsx)(Typography.ZP,{component:"div",level:"h1",children:"201"})]}),(0,jsx_runtime.jsxs)(Typography.ZP,{color:"success",startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{color:"inherit",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"})})}),children:["8.2%"," ",(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",textColor:"text.tertiary",sx:{ml:1,alignSelf:"last baseline"},children:"Since last month"})]})]}),(0,jsx_runtime.jsx)(SvgIcon.Z,{fontSize:"xl3",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]})})}CardDashboardStat1.displayName="CardDashboardStat1";const CardDashboardStat1_stories={title:"Card/Dashboard/Stat1",component:CardDashboardStat1,parameters:{layout:"centered"}},Block={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:300,maxWidth:"100%"},children:(0,jsx_runtime.jsx)(CardDashboardStat1,{})})};Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 300,\n    maxWidth: "100%"\n  }}>\n      <CardDashboardStat1 />\n    </div>\n}',...Block.parameters?.docs?.source}}};const __namedExportsOrder=["Block"]}}]);