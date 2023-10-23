"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[8942],{"./node_modules/@mui/joy/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardContent_CardContent});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardContentUtilityClass(slot){return(0,className.d6)("MuiCardContent",slot)}(0,className.sI)("MuiCardContent",["root"]);var cardOverflowClasses=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","orientation","slots","slotProps"],StyledCardContentRoot=(0,styled.Z)("div")((({ownerState})=>({display:"flex",flexDirection:"horizontal"===ownerState.orientation?"row":"column",flex:9999,zIndex:1,columnGap:"var(--Card-padding)",rowGap:"max(2px, calc(0.1875 * var(--Card-padding)))",padding:"var(--unstable_padding)",[`.${cardOverflowClasses.Z.root} > &`]:{"--unstable_padding":"calc(var(--Card-padding) * 0.75) 0px"}}))),CardContentRoot=(0,styled.Z)(StyledCardContentRoot,{name:"JoyCardContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),CardContent=react.forwardRef((function CardContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCardContent"}),{className,component="div",children,orientation="vertical",slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),ownerState=(0,esm_extends.Z)({},props,{component,orientation}),classes=(0,composeClasses.Z)({root:["root"]},getCardContentUtilityClass,{}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardContentRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),CardContent_CardContent=CardContent},"./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getCardOverflowUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardOverflowUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiCardOverflow",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"])},"./blocks/card-dashboard-stat6/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardDashboardStat6raw_namespaceObject='import React from "react";\nimport Box from "@mui/joy/Box";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nfunction Widget({\n  title,\n  value,\n  metadata,\n  icon,\n}: {\n  title: React.ReactNode;\n  value: React.ReactNode;\n  metadata: React.ReactNode;\n  icon: React.ReactElement;\n}) {\n  return (\n    <Card size="lg" variant="outlined" orientation="horizontal">\n      <CardContent>\n        <Typography level="title-sm">{title}</Typography>\n        <Typography level="h2">{value}</Typography>\n        <Typography level="body-xs">{metadata}</Typography>\n      </CardContent>\n      <SvgIcon size="sm">{icon}</SvgIcon>\n    </Card>\n  );\n}\n\nexport default function CardDashboardStat6() {\n  return (\n    <Box\n      sx={{\n        display: "grid",\n        gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))",\n        gap: 3,\n      }}\n    >\n      <Widget\n        title="Total Revenue"\n        value="$45,231.89"\n        metadata="+20.1% from last month"\n        icon={\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n            fill="none"\n            stroke="currentColor"\n            stroke-linecap="round"\n            stroke-linejoin="round"\n            stroke-width="2"\n          >\n            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>\n          </svg>\n        }\n      />\n\n      <Widget\n        title="Subscriptions"\n        value="+2350"\n        metadata="+180.1% from last month"\n        icon={\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n            fill="none"\n            stroke="currentColor"\n            stroke-linecap="round"\n            stroke-linejoin="round"\n            stroke-width="2"\n          >\n            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>\n            <circle cx="9" cy="7" r="4"></circle>\n            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>\n          </svg>\n        }\n      />\n\n      <Widget\n        title="Sales"\n        value="+12,234"\n        metadata="+19% from last month"\n        icon={\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n            fill="none"\n            stroke="currentColor"\n            stroke-linecap="round"\n            stroke-linejoin="round"\n            stroke-width="2"\n          >\n            <rect width="20" height="14" x="2" y="5" rx="2"></rect>\n            <path d="M2 10h20"></path>\n          </svg>\n        }\n      />\n\n      <Widget\n        title="Active Now"\n        value="+573"\n        metadata="+201 since last hour"\n        icon={\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            viewBox="0 0 24 24"\n            fill="none"\n            stroke="currentColor"\n            stroke-linecap="round"\n            stroke-linejoin="round"\n            stroke-width="2"\n          >\n            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>\n          </svg>\n        }\n      />\n    </Box>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Dashboard/Stat6"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-dashboard-stat6\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carddashboardstat6",children:"CardDashboardStat6"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardDashboardStat6raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-dashboard-stat6/src/CardDashboardStat6.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Stat6:()=>Stat6,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardDashboardStat6_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-dashboard-stat6/usage.mdx"),Box=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Widget({title,value,metadata,icon}){return(0,jsx_runtime.jsxs)(Card.Z,{size:"lg",variant:"outlined",orientation:"horizontal",children:[(0,jsx_runtime.jsxs)(CardContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-sm",children:title}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"h2",children:value}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",children:metadata})]}),(0,jsx_runtime.jsx)(SvgIcon.Z,{size:"sm",children:icon})]})}function CardDashboardStat6(){return(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(240px, 100%), 1fr))",gap:3},children:[(0,jsx_runtime.jsx)(Widget,{title:"Total Revenue",value:"$45,231.89",metadata:"+20.1% from last month",icon:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",children:(0,jsx_runtime.jsx)("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})})}),(0,jsx_runtime.jsx)(Widget,{title:"Subscriptions",value:"+2350",metadata:"+180.1% from last month",icon:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",children:[(0,jsx_runtime.jsx)("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),(0,jsx_runtime.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,jsx_runtime.jsx)("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"})]})}),(0,jsx_runtime.jsx)(Widget,{title:"Sales",value:"+12,234",metadata:"+19% from last month",icon:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",children:[(0,jsx_runtime.jsx)("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),(0,jsx_runtime.jsx)("path",{d:"M2 10h20"})]})}),(0,jsx_runtime.jsx)(Widget,{title:"Active Now",value:"+573",metadata:"+201 since last hour",icon:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",children:(0,jsx_runtime.jsx)("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})})]})}Widget.displayName="Widget",CardDashboardStat6.displayName="CardDashboardStat6";const CardDashboardStat6_stories={title:"Card/Dashboard/Stat6",component:CardDashboardStat6,parameters:{layout:"padded",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default)]},Stat6={render:()=>(0,jsx_runtime.jsx)(CardDashboardStat6,{})};Stat6.parameters={...Stat6.parameters,docs:{...Stat6.parameters?.docs,source:{originalSource:"{\n  render: () => <CardDashboardStat6 />\n}",...Stat6.parameters?.docs?.source}}};const __namedExportsOrder=["Stat6"]}}]);