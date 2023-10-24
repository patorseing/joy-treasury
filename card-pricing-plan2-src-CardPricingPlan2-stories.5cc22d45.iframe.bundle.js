"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[2530],{"./node_modules/@mui/joy/AspectRatio/AspectRatio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AspectRatio_AspectRatio});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getAspectRatioUtilityClass(slot){return(0,className.d6)("MuiAspectRatio",slot)}(0,className.sI)("MuiAspectRatio",["root","content","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","ratio","minHeight","maxHeight","objectFit","color","variant","component","flex","slots","slotProps"],AspectRatioRoot=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState,theme})=>{const minHeight="number"==typeof ownerState.minHeight?`${ownerState.minHeight}px`:ownerState.minHeight,maxHeight="number"==typeof ownerState.maxHeight?`${ownerState.maxHeight}px`:ownerState.maxHeight;return{"--AspectRatio-paddingBottom":`clamp(var(--AspectRatio-minHeight), calc(100% / (${ownerState.ratio})), var(--AspectRatio-maxHeight))`,"--AspectRatio-maxHeight":maxHeight||"9999px","--AspectRatio-minHeight":minHeight||"0px","--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,borderRadius:"var(--AspectRatio-radius)",display:ownerState.flex?"flex":"block",flex:ownerState.flex?1:"initial",flexDirection:"column",margin:"var(--AspectRatio-margin)"}})),AspectRatioContent=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Content",overridesResolver:(props,styles)=>styles.content})((({theme,ownerState})=>{var _theme$variants;return(0,esm_extends.Z)({flex:1,position:"relative",borderRadius:"inherit",height:0,paddingBottom:"calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",overflow:"hidden",transition:"inherit","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"absolute",width:"100%",height:"100%",objectFit:ownerState.objectFit,margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:ownerState.objectFit}}},theme.typography["body-md"],null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color])})),AspectRatio_AspectRatio=react.forwardRef((function AspectRatio(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyAspectRatio"}),{children,ratio="16 / 9",minHeight,maxHeight,objectFit="cover",color="neutral",variant="soft",component,flex=!1,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{flex,minHeight,maxHeight,objectFit,ratio,color,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root"],content:["content",variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,getAspectRatioUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:classes.root,elementType:AspectRatioRoot,externalForwardedProps,ownerState}),[SlotContent,contentProps]=(0,useSlot.Z)("content",{className:classes.content,elementType:AspectRatioContent,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(SlotContent,(0,esm_extends.Z)({},contentProps,{children:react.Children.map(children,((child,index)=>0===index&&react.isValidElement(child)?react.cloneElement(child,{"data-first-child":""}):child))}))}))}))},"./node_modules/@mui/joy/CardActions/CardActions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardActions_CardActions});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardActionsUtilityClass(slot){return(0,className.d6)("MuiCardActions",slot)}(0,className.sI)("MuiCardActions",["root"]);var useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),buttonClasses=__webpack_require__("./node_modules/@mui/joy/Button/buttonClasses.js"),iconButtonClasses=__webpack_require__("./node_modules/@mui/joy/IconButton/iconButtonClasses.js"),cardClasses=__webpack_require__("./node_modules/@mui/joy/Card/cardClasses.js"),cardOverflowClasses=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),dividerClasses=__webpack_require__("./node_modules/@mui/joy/Divider/dividerClasses.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","buttonFlex","orientation","slots","slotProps"],StyledCardActionsRoot=(0,styled.Z)("div")((({ownerState})=>{var _ownerState$orientati;return(0,esm_extends.Z)({"--Button-radius":"var(--Card-childRadius)","--IconButton-radius":"var(--Card-childRadius)",display:"flex"},(null==(_ownerState$orientati=ownerState.orientation)?void 0:_ownerState$orientati.startsWith("horizontal"))&&{alignItems:"center"},{flexDirection:"horizontal"===ownerState.orientation?"row":"column"},"horizontal-reverse"===ownerState.orientation&&{flexDirection:"row-reverse"},{zIndex:1,gap:"calc(0.625 * var(--Card-padding))",padding:"var(--unstable_padding)","--unstable_padding":"calc(0.75 * var(--Card-padding)) 0 0 0",[`.${cardOverflowClasses.Z.root} > &`]:{"--unstable_padding":"calc(0.75 * var(--Card-padding)) 0 var(--Card-padding)"},[`.${cardClasses.Z.root} > .${dividerClasses.Z.root} + &`]:{"--unstable_padding":"0"}},ownerState.buttonFlex?{[`& > :not(.${iconButtonClasses.Z.root})`]:{flex:ownerState.buttonFlex},[`& > :not(button) > .${buttonClasses.Z.root}`]:{width:"100%"}}:{[`& > .${buttonClasses.Z.root}:only-child`]:{flex:"auto"}})})),CardActionsRoot=(0,styled.Z)(StyledCardActionsRoot,{name:"JoyCardActions",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),CardActions=react.forwardRef((function CardActions(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCardActions"}),{className,component="div",children,buttonFlex,orientation="horizontal",slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),ownerState=(0,esm_extends.Z)({},props,{component,buttonFlex,orientation}),classes=(0,composeClasses.Z)({root:["root"]},getCardActionsUtilityClass,{}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardActionsRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),CardActions_CardActions=CardActions},"./node_modules/@mui/joy/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardContent_CardContent});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardContentUtilityClass(slot){return(0,className.d6)("MuiCardContent",slot)}(0,className.sI)("MuiCardContent",["root"]);var cardOverflowClasses=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","orientation","slots","slotProps"],StyledCardContentRoot=(0,styled.Z)("div")((({ownerState})=>({display:"flex",flexDirection:"horizontal"===ownerState.orientation?"row":"column",flex:9999,zIndex:1,columnGap:"var(--Card-padding)",rowGap:"max(2px, calc(0.1875 * var(--Card-padding)))",padding:"var(--unstable_padding)",[`.${cardOverflowClasses.Z.root} > &`]:{"--unstable_padding":"calc(var(--Card-padding) * 0.75) 0px"}}))),CardContentRoot=(0,styled.Z)(StyledCardContentRoot,{name:"JoyCardContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),CardContent=react.forwardRef((function CardContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCardContent"}),{className,component="div",children,orientation="vertical",slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),ownerState=(0,esm_extends.Z)({},props,{component,orientation}),classes=(0,composeClasses.Z)({root:["root"]},getCardContentUtilityClass,{}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardContentRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),CardContent_CardContent=CardContent},"./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getCardOverflowUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardOverflowUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiCardOverflow",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"])},"./blocks/card-pricing-plan2/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardPricingPlan2raw_namespaceObject='import * as React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Box from "@mui/joy/Box";\nimport Button from "@mui/joy/Button";\nimport Card from "@mui/joy/Card";\nimport CardActions from "@mui/joy/CardActions";\nimport CardContent from "@mui/joy/CardContent";\nimport Typography from "@mui/joy/Typography";\n\ntype Orientation = "left" | "right";\n\ninterface Props {\n  imgUrl?: string;\n  orientation?: Orientation;\n}\n\nconst Curves = ({\n  imgUrl,\n  orientation,\n  children,\n}: React.PropsWithChildren<Props>) => {\n  return (\n    <AspectRatio\n      variant="plain"\n      ratio="437/188"\n      sx={{\n        transform: `scalex(${orientation === "left" ? 1 : -1})`,\n        background: `linear-gradient(270deg, rgba(255,245,222,1) 0%, rgba(251,231,232,1) 30%, rgba(205,195,255,1) 76%, rgba(206,196,254,1) 100%)`,\n      }}\n    >\n      <svg width="100%" height="100%" viewBox="0 0 23.25 10">\n        <defs>\n          <mask id="mask" x="0" y="0" width="100%" height="100%">\n            <path d="M 15 -16.34 C 13.21 8.06, 20 18, -16.73 -5" fill="white" />\n            <path d="M 50 25 C 13.1 -20.35, -5.17 10.46, 50 45" fill="white" />\n          </mask>\n        </defs>\n        <image\n          href={imgUrl}\n          x="0"\n          y="0"\n          width="100%"\n          height="100%"\n          mask="url(#mask)"\n          preserveAspectRatio="xMidYMid slice"\n        />\n      </svg>\n      {children}\n    </AspectRatio>\n  );\n};\n\nconst CardPricingPlan2 = ({\n  imgUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",\n  orientation = "left",\n}: Props) => {\n  return (\n    <Card\n      variant="plain"\n      sx={{\n        borderRadius: "xl",\n        p: 0.5,\n        bgcolor: "white",\n        minWidth: 300,\n        boxShadow: "lg",\n      }}\n    >\n      <Curves imgUrl={imgUrl} orientation={orientation} />\n      <Typography\n        level="body-md"\n        sx={{\n          position: "absolute",\n          top: 20,\n          ...(orientation === "left" && {\n            left: 24,\n          }),\n          ...(orientation === "right" && {\n            right: 20,\n          }),\n          color: "white",\n        }}\n      >\n        #1\n      </Typography>\n      <Typography\n        level="h2"\n        sx={{\n          position: "absolute",\n          top: 35,\n          ...(orientation === "left" && {\n            left: 24,\n          }),\n          ...(orientation === "right" && {\n            right: 24,\n          }),\n          color: "white",\n        }}\n      >\n        Entry\n      </Typography>\n      <CardContent sx={{ width: "100%", alignItems: "center", gap: 3 }}>\n        <Typography\n          component="div"\n          fontSize="xl2"\n          fontWeight="xl"\n          textColor="common.black"\n        >\n          $12 USD\n        </Typography>\n        <Typography\n          component="div"\n          fontSize="xs"\n          fontWeight="md"\n          textColor="common.black"\n        >\n          10 GB Storage space\n        </Typography>\n        <Typography\n          level="body-xs"\n          component="div"\n          textColor="common.black"\n          sx={{\n            border: 0.5,\n            borderRadius: "xl",\n            p: 1,\n            pl: 2,\n            pr: 2,\n            fontSize: "10px",\n          }}\n        >\n          We accept both, fiat and crypto\n        </Typography>\n        <Typography\n          component="div"\n          fontSize="xl2"\n          fontWeight="xl"\n          textColor="common.black"\n          sx={{ mt: 5 }}\n        >\n          Timeline\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button\n          variant="soft"\n          color="neutral"\n          sx={{\n            fontSize: "10px",\n            fontWeight: "lg",\n            color: "text.primary",\n          }}\n        >\n          1 month subscription\n        </Button>\n      </CardActions>\n    </Card>\n  );\n};\n\nexport default CardPricingPlan2;\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Pricing/Plan2"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-pricing-plan2\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardpricingplan2",children:"CardPricingPlan2"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardPricingPlan2raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-pricing-plan2/src/CardPricingPlan2.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Plan2:()=>Plan2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardPricingPlan2_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-pricing-plan2/usage.mdx"),AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Button=__webpack_require__("./node_modules/@mui/joy/Button/Button.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardActions=__webpack_require__("./node_modules/@mui/joy/CardActions/CardActions.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Curves=({imgUrl,orientation,children})=>(0,jsx_runtime.jsxs)(AspectRatio.Z,{variant:"plain",ratio:"437/188",sx:{transform:`scalex(${"left"===orientation?1:-1})`,background:"linear-gradient(270deg, rgba(255,245,222,1) 0%, rgba(251,231,232,1) 30%, rgba(205,195,255,1) 76%, rgba(206,196,254,1) 100%)"},children:[(0,jsx_runtime.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 23.25 10",children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsxs)("mask",{id:"mask",x:"0",y:"0",width:"100%",height:"100%",children:[(0,jsx_runtime.jsx)("path",{d:"M 15 -16.34 C 13.21 8.06, 20 18, -16.73 -5",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M 50 25 C 13.1 -20.35, -5.17 10.46, 50 45",fill:"white"})]})}),(0,jsx_runtime.jsx)("image",{href:imgUrl,x:"0",y:"0",width:"100%",height:"100%",mask:"url(#mask)",preserveAspectRatio:"xMidYMid slice"})]}),children]});Curves.displayName="Curves";const CardPricingPlan2=({imgUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",orientation="left"})=>(0,jsx_runtime.jsxs)(Card.Z,{variant:"plain",sx:{borderRadius:"xl",p:.5,bgcolor:"white",minWidth:300,boxShadow:"lg"},children:[(0,jsx_runtime.jsx)(Curves,{imgUrl,orientation}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-md",sx:{position:"absolute",top:20,..."left"===orientation&&{left:24},..."right"===orientation&&{right:20},color:"white"},children:"#1"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"h2",sx:{position:"absolute",top:35,..."left"===orientation&&{left:24},..."right"===orientation&&{right:24},color:"white"},children:"Entry"}),(0,jsx_runtime.jsxs)(CardContent.Z,{sx:{width:"100%",alignItems:"center",gap:3},children:[(0,jsx_runtime.jsx)(Typography.ZP,{component:"div",fontSize:"xl2",fontWeight:"xl",textColor:"common.black",children:"$12 USD"}),(0,jsx_runtime.jsx)(Typography.ZP,{component:"div",fontSize:"xs",fontWeight:"md",textColor:"common.black",children:"10 GB Storage space"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",component:"div",textColor:"common.black",sx:{border:.5,borderRadius:"xl",p:1,pl:2,pr:2,fontSize:"10px"},children:"We accept both, fiat and crypto"}),(0,jsx_runtime.jsx)(Typography.ZP,{component:"div",fontSize:"xl2",fontWeight:"xl",textColor:"common.black",sx:{mt:5},children:"Timeline"})]}),(0,jsx_runtime.jsx)(CardActions.Z,{children:(0,jsx_runtime.jsx)(Button.Z,{variant:"soft",color:"neutral",sx:{fontSize:"10px",fontWeight:"lg",color:"text.primary"},children:"1 month subscription"})})]});CardPricingPlan2.displayName="CardPricingPlan2";const src_CardPricingPlan2=CardPricingPlan2,CardPricingPlan2_stories={title:"Card/Pricing/Plan2",component:src_CardPricingPlan2,argTypes:{orientation:{options:["left","right"],control:{type:"radio"}},imgUrl:{type:"string"}},args:{orientation:"left",imgUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"},parameters:{layout:"centered",githubUsername:"kevintruo"},decorators:[(0,storyDialog.Z)(usage.default)]},Plan2={render:args=>(0,jsx_runtime.jsx)("div",{style:{width:340,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(src_CardPricingPlan2,{...args})})};Plan2.parameters={...Plan2.parameters,docs:{...Plan2.parameters?.docs,source:{originalSource:'{\n  render: args => <div style={{\n    width: 340,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardPricingPlan2 {...args} />\n    </div>\n}',...Plan2.parameters?.docs?.source}}};const __namedExportsOrder=["Plan2"]}}]);