"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[8367],{"./node_modules/@mui/joy/AspectRatio/AspectRatio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AspectRatio_AspectRatio});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getAspectRatioUtilityClass(slot){return(0,className.d6)("MuiAspectRatio",slot)}(0,className.sI)("MuiAspectRatio",["root","content","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","ratio","minHeight","maxHeight","objectFit","color","variant","component","flex","slots","slotProps"],AspectRatioRoot=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState,theme})=>{const minHeight="number"==typeof ownerState.minHeight?`${ownerState.minHeight}px`:ownerState.minHeight,maxHeight="number"==typeof ownerState.maxHeight?`${ownerState.maxHeight}px`:ownerState.maxHeight;return{"--AspectRatio-paddingBottom":`clamp(var(--AspectRatio-minHeight), calc(100% / (${ownerState.ratio})), var(--AspectRatio-maxHeight))`,"--AspectRatio-maxHeight":maxHeight||"9999px","--AspectRatio-minHeight":minHeight||"0px","--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,borderRadius:"var(--AspectRatio-radius)",display:ownerState.flex?"flex":"block",flex:ownerState.flex?1:"initial",flexDirection:"column",margin:"var(--AspectRatio-margin)"}})),AspectRatioContent=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Content",overridesResolver:(props,styles)=>styles.content})((({theme,ownerState})=>{var _theme$variants;return(0,esm_extends.Z)({flex:1,position:"relative",borderRadius:"inherit",height:0,paddingBottom:"calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",overflow:"hidden",transition:"inherit","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"absolute",width:"100%",height:"100%",objectFit:ownerState.objectFit,margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:ownerState.objectFit}}},theme.typography["body-md"],null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color])})),AspectRatio_AspectRatio=react.forwardRef((function AspectRatio(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyAspectRatio"}),{children,ratio="16 / 9",minHeight,maxHeight,objectFit="cover",color:colorProp="neutral",variant="soft",component,flex=!1,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),ownerState=(0,esm_extends.Z)({},props,{flex,minHeight,maxHeight,objectFit,ratio,color,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root"],content:["content",variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,getAspectRatioUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:classes.root,elementType:AspectRatioRoot,externalForwardedProps,ownerState}),[SlotContent,contentProps]=(0,useSlot.Z)("content",{className:classes.content,elementType:AspectRatioContent,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(SlotContent,(0,esm_extends.Z)({},contentProps,{children:react.Children.map(children,((child,index)=>0===index&&react.isValidElement(child)?react.cloneElement(child,{"data-first-child":""}):child))}))}))}))},"./node_modules/@mui/joy/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardContent_CardContent});var esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardContentUtilityClass(slot){return(0,className.d6)("MuiCardContent",slot)}(0,className.sI)("MuiCardContent",["root"]);var cardOverflowClasses=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","orientation","slots","slotProps"],StyledCardContentRoot=(0,styled.Z)("div")((({ownerState})=>({display:"flex",flexDirection:"horizontal"===ownerState.orientation?"row":"column",flex:9999,zIndex:1,columnGap:"var(--Card-padding)",rowGap:"max(2px, calc(0.1875 * var(--Card-padding)))",padding:"var(--unstable_padding)",[`.${cardOverflowClasses.Z.root} > &`]:{"--unstable_padding":"calc(var(--Card-padding) * 0.75) 0px"}}))),CardContentRoot=(0,styled.Z)(StyledCardContentRoot,{name:"JoyCardContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),CardContent=react.forwardRef((function CardContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCardContent"}),{className,component="div",children,orientation="vertical",slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),ownerState=(0,esm_extends.Z)({},props,{component,orientation}),classes=(0,composeClasses.Z)({root:["root"]},getCardContentUtilityClass,{}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardContentRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),CardContent_CardContent=CardContent},"./node_modules/@mui/joy/CardOverflow/CardOverflow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_base__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),_styles__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),_styles_ColorInversion__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),_cardOverflowClasses__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),_utils_useSlot__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),_Button_buttonClasses__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Button/buttonClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","color","variant","slots","slotProps"],CardOverflowRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__.Z)("div",{name:"JoyCardOverflow",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$variants;const childRadius="calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))";return(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({alignSelf:"stretch",borderRadius:"var(--CardOverflow-radius)",position:"relative",display:"flex"},"Card-horizontal"===ownerState["data-parent"]&&(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--AspectRatio-margin":"calc(-1 * var(--Card-padding)) 0px",marginTop:"var(--CardOverflow-offset)",marginBottom:"var(--CardOverflow-offset)",padding:"var(--Card-padding) 0px"},void 0!==ownerState["data-first-child"]&&{"--AspectRatio-radius":`${childRadius} 0 0 ${childRadius}`,borderTopRightRadius:0,borderBottomRightRadius:0,marginLeft:"var(--CardOverflow-offset)"},void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":`0 ${childRadius} ${childRadius} 0`,borderTopLeftRadius:0,borderBottomLeftRadius:0,marginRight:"var(--CardOverflow-offset)"},void 0!==ownerState["data-first-child"]&&void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":childRadius},{[`& > .${_Button_buttonClasses__WEBPACK_IMPORTED_MODULE_7__.Z.root}:only-child`]:{height:"calc(100% + -2 * var(--CardOverflow-offset))","--Button-margin":"var(--CardOverflow-offset) 0","--Button-radius":"0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0"}}),"Card-vertical"===ownerState["data-parent"]&&(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--AspectRatio-margin":"0px calc(-1 * var(--Card-padding))",flexDirection:"column",marginLeft:"var(--CardOverflow-offset)",marginRight:"var(--CardOverflow-offset)",padding:"0px var(--Card-padding)"},void 0!==ownerState["data-first-child"]&&{"--AspectRatio-radius":`${childRadius} ${childRadius} 0 0`,borderBottomLeftRadius:0,borderBottomRightRadius:0,marginTop:"var(--CardOverflow-offset)"},void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":`0 0 ${childRadius} ${childRadius}`,borderTopLeftRadius:0,borderTopRightRadius:0,marginBottom:"var(--CardOverflow-offset)"},void 0!==ownerState["data-first-child"]&&void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":childRadius},{[`& > .${_Button_buttonClasses__WEBPACK_IMPORTED_MODULE_7__.Z.root}:only-child`]:{zIndex:1,width:"calc(100% + -2 * var(--CardOverflow-offset))","--Button-margin":"0 var(--CardOverflow-offset)","--Button-radius":"0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)"}}),null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color])})),CardOverflow=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function CardOverflow(inProps,ref){const props=(0,_styles__WEBPACK_IMPORTED_MODULE_8__.Z)({props:inProps,name:"JoyCardOverflow"}),{className,component="div",children,color:colorProp="neutral",variant="plain",slots={},slotProps={}}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(props,_excluded),{getColor}=(0,_styles_ColorInversion__WEBPACK_IMPORTED_MODULE_10__.VT)(variant),color=getColor(inProps.color,colorProp),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{component,color,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root",variant&&`variant${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(variant)}`,color&&`color${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(color)}`]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_3__.Z)(slots,_cardOverflowClasses__WEBPACK_IMPORTED_MODULE_4__.$,{})})(ownerState),externalForwardedProps=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,_utils_useSlot__WEBPACK_IMPORTED_MODULE_11__.Z)("root",{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_12__.Z)(classes.root,className),elementType:CardOverflowRoot,externalForwardedProps,ownerState});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rootProps,{children}))}));CardOverflow.muiName="CardOverflow";const __WEBPACK_DEFAULT_EXPORT__=CardOverflow},"./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getCardOverflowUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardOverflowUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiCardOverflow",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"])},"./blocks/card-dashboard-company/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardDashboardCompanyraw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport CardOverflow from "@mui/joy/CardOverflow";\nimport Divider from "@mui/joy/Divider";\nimport IconButton from "@mui/joy/IconButton";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardDashboardCompany() {\n  return (\n    <Card sx={{ borderRadius: "xs" }}>\n      <CardOverflow>\n        <CardContent\n          orientation="horizontal"\n          sx={{ alignItems: "center", py: 0 }}\n        >\n          <AspectRatio\n            variant="solid"\n            color="danger"\n            ratio="1"\n            sx={{\n              m: 0,\n              width: 48,\n              borderRadius: "50%",\n              transform: "translateY(50%)",\n            }}\n          >\n            <div>\n              <SvgIcon>\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  fill="none"\n                  viewBox="0 0 24 24"\n                  strokeWidth={2}\n                  stroke="currentColor"\n                >\n                  <path\n                    strokeLinecap="round"\n                    strokeLinejoin="round"\n                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"\n                  />\n                </svg>\n              </SvgIcon>\n            </div>\n          </AspectRatio>\n          <IconButton\n            variant="plain"\n            color="neutral"\n            sx={{ ml: "auto", mr: -1, borderRadius: "50%" }}\n          >\n            <SvgIcon>\n              <svg\n                xmlns="http://www.w3.org/2000/svg"\n                fill="none"\n                viewBox="0 0 24 24"\n                strokeWidth={1.5}\n                stroke="currentColor"\n              >\n                <path\n                  strokeLinecap="round"\n                  strokeLinejoin="round"\n                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"\n                />\n              </svg>\n            </SvgIcon>\n          </IconButton>\n        </CardContent>\n        <Divider inset="context" />\n      </CardOverflow>\n      <CardContent sx={{ mt: 3 }}>\n        <Typography level="body-sm" textColor="text.icon">\n          Thailand\n        </Typography>\n        <Typography level="h2">Joy Treasury</Typography>\n      </CardContent>\n      <CardContent>\n        <Typography level="body-sm">\n          A leading global technology company, specializing in innovative\n          software solutions and cutting-edge hardware development.\n        </Typography>\n      </CardContent>\n      <CardContent>\n        <Typography\n          level="body-xs"\n          startDecorator={\n            <SvgIcon>\n              <svg\n                xmlns="http://www.w3.org/2000/svg"\n                fill="none"\n                viewBox="0 0 24 24"\n                strokeWidth={1.5}\n                stroke="currentColor"\n              >\n                <path\n                  strokeLinecap="round"\n                  strokeLinejoin="round"\n                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"\n                />\n              </svg>\n            </SvgIcon>\n          }\n        >\n          20 DEC 2022\n        </Typography>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Dashboard/Company"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-dashboard-company\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carddashboardcompany",children:"CardDashboardCompany"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardDashboardCompanyraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-dashboard-company/src/CardDashboardCompany.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Company:()=>Company,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardDashboardCompany_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-dashboard-company/usage.mdx"),AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),CardOverflow=__webpack_require__("./node_modules/@mui/joy/CardOverflow/CardOverflow.js"),Divider=__webpack_require__("./node_modules/@mui/joy/Divider/Divider.js"),IconButton=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardDashboardCompany(){return(0,jsx_runtime.jsxs)(Card.Z,{sx:{borderRadius:"xs"},children:[(0,jsx_runtime.jsxs)(CardOverflow.Z,{children:[(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",sx:{alignItems:"center",py:0},children:[(0,jsx_runtime.jsx)(AspectRatio.Z,{variant:"solid",color:"danger",ratio:"1",sx:{m:0,width:48,borderRadius:"50%",transform:"translateY(50%)"},children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"})})})})}),(0,jsx_runtime.jsx)(IconButton.ZP,{variant:"plain",color:"neutral",sx:{ml:"auto",mr:-1,borderRadius:"50%"},children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})})})})]}),(0,jsx_runtime.jsx)(Divider.Z,{inset:"context"})]}),(0,jsx_runtime.jsxs)(CardContent.Z,{sx:{mt:3},children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",textColor:"text.icon",children:"Thailand"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"h2",children:"Joy Treasury"})]}),(0,jsx_runtime.jsx)(CardContent.Z,{children:(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"A leading global technology company, specializing in innovative software solutions and cutting-edge hardware development."})}),(0,jsx_runtime.jsx)(CardContent.Z,{children:(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"})})}),children:"20 DEC 2022"})})]})}CardDashboardCompany.displayName="CardDashboardCompany";const CardDashboardCompany_stories={title:"Card/Dashboard/Company",component:CardDashboardCompany,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default)]},Company={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:440,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardDashboardCompany,{})})};Company.parameters={...Company.parameters,docs:{...Company.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 440,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardDashboardCompany />\n    </div>\n}',...Company.parameters?.docs?.source}}};const __namedExportsOrder=["Company"]}}]);