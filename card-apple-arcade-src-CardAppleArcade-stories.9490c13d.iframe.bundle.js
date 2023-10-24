"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[4895],{"./node_modules/@mui/joy/CardCover/CardCover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardCover_CardCover});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardCoverUtilityClass(slot){return(0,className.d6)("MuiCardCover",slot)}(0,className.sI)("MuiCardCover",["root"]);var useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","slots","slotProps"],CardCoverRoot=(0,styled.Z)("div",{name:"JoyCardCover",slot:"Root",overridesResolver:(props,styles)=>styles.root})({position:"absolute",zIndex:0,top:0,left:0,right:0,bottom:0,borderRadius:"var(--CardCover-radius)","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",objectFit:"cover",boxSizing:"border-box",borderRadius:"var(--CardCover-radius)",margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:"cover"}}}),CardCover=react.forwardRef((function CardCover(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCardCover"}),{className,component="div",children,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component}),classes=(0,composeClasses.Z)({root:["root"]},getCardCoverUtilityClass,{}),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardCoverRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:react.Children.map(children,((child,index)=>0===index&&react.isValidElement(child)?react.cloneElement(child,{"data-first-child":""}):child))}))})),CardCover_CardCover=CardCover},"./node_modules/@mui/joy/CardOverflow/CardOverflow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_mui_base__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),_styles__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),_cardOverflowClasses__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),_utils_useSlot__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),_Button_buttonClasses__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Button/buttonClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","color","variant","slots","slotProps"],CardOverflowRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__.Z)("div",{name:"JoyCardOverflow",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$variants;const childRadius="calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))";return(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({alignSelf:"stretch",borderRadius:"var(--CardOverflow-radius)",position:"relative",display:"flex"},"Card-horizontal"===ownerState["data-parent"]&&(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--AspectRatio-margin":"calc(-1 * var(--Card-padding)) 0px",marginTop:"var(--CardOverflow-offset)",marginBottom:"var(--CardOverflow-offset)",padding:"var(--Card-padding) 0px"},void 0!==ownerState["data-first-child"]&&{"--AspectRatio-radius":`${childRadius} 0 0 ${childRadius}`,borderTopRightRadius:0,borderBottomRightRadius:0,marginLeft:"var(--CardOverflow-offset)"},void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":`0 ${childRadius} ${childRadius} 0`,borderTopLeftRadius:0,borderBottomLeftRadius:0,marginRight:"var(--CardOverflow-offset)"},void 0!==ownerState["data-first-child"]&&void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":childRadius},{[`& > .${_Button_buttonClasses__WEBPACK_IMPORTED_MODULE_7__.Z.root}:only-child`]:{height:"calc(100% + -2 * var(--CardOverflow-offset))","--Button-margin":"var(--CardOverflow-offset) 0","--Button-radius":"0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0"}}),"Card-vertical"===ownerState["data-parent"]&&(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--AspectRatio-margin":"0px calc(-1 * var(--Card-padding))",flexDirection:"column",marginLeft:"var(--CardOverflow-offset)",marginRight:"var(--CardOverflow-offset)",padding:"0px var(--Card-padding)"},void 0!==ownerState["data-first-child"]&&{"--AspectRatio-radius":`${childRadius} ${childRadius} 0 0`,borderBottomLeftRadius:0,borderBottomRightRadius:0,marginTop:"var(--CardOverflow-offset)"},void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":`0 0 ${childRadius} ${childRadius}`,borderTopLeftRadius:0,borderTopRightRadius:0,marginBottom:"var(--CardOverflow-offset)"},void 0!==ownerState["data-first-child"]&&void 0!==ownerState["data-last-child"]&&{"--AspectRatio-radius":childRadius},{[`& > .${_Button_buttonClasses__WEBPACK_IMPORTED_MODULE_7__.Z.root}:only-child`]:{zIndex:1,width:"calc(100% + -2 * var(--CardOverflow-offset))","--Button-margin":"0 var(--CardOverflow-offset)","--Button-radius":"0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)"}}),null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color])})),CardOverflow=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function CardOverflow(inProps,ref){const props=(0,_styles__WEBPACK_IMPORTED_MODULE_8__.Z)({props:inProps,name:"JoyCardOverflow"}),{className,component="div",children,color="neutral",variant="plain",slots={},slotProps={}}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_9__.Z)(props,_excluded),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{component,color,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root",variant&&`variant${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(variant)}`,color&&`color${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(color)}`]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_3__.Z)(slots,_cardOverflowClasses__WEBPACK_IMPORTED_MODULE_4__.$,{})})(ownerState),externalForwardedProps=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,_utils_useSlot__WEBPACK_IMPORTED_MODULE_10__.Z)("root",{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_11__.Z)(classes.root,className),elementType:CardOverflowRoot,externalForwardedProps,ownerState});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rootProps,{children}))}));CardOverflow.muiName="CardOverflow";const __WEBPACK_DEFAULT_EXPORT__=CardOverflow},"./blocks/card-apple-arcade/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardAppleArcaderaw_namespaceObject='import React from "react";\nimport Avatar from "@mui/joy/Avatar";\nimport Box from "@mui/joy/Box";\nimport Button from "@mui/joy/Button";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport CardCover from "@mui/joy/CardCover";\nimport CardOverflow from "@mui/joy/CardOverflow";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardAppleArcade() {\n  return (\n    <Card sx={{ minHeight: 425, borderRadius: "xl" }}>\n      <CardCover>\n        <img\n          alt=""\n          src="https://teaser-trailer.com/wp-content/uploads/Angry-Birds-Movie-New-character-poster-1.jpg"\n        />\n      </CardCover>\n      <CardContent\n        sx={{\n          m: -1,\n          p: 1,\n          backdropFilter: "blur(20px)",\n          borderRadius: "md",\n          flex: "initial",\n          mb: "auto",\n          width: "max-content",\n        }}\n      >\n        <Typography level="title-sm" textColor="rgba(255 255 255 / 0.72)">\n          APPLE ARCADE\n        </Typography>\n        <Typography level="h3" textColor="#fff">\n          Angry Birds soars again!\n        </Typography>\n      </CardContent>\n      <CardOverflow sx={{ bgcolor: "background.surface" }}>\n        <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>\n          <Avatar\n            src="https://i.pinimg.com/originals/c7/e2/5c/c7e25c9979b38201ee2b1729b2f3c151.png"\n            sx={{ borderRadius: "md" }}\n          />\n          <Box sx={{ flex: 1 }}>\n            <Typography level="body-xs">Apple Arcade</Typography>\n            <Typography level="title-md">Angry Birds Reloaded</Typography>\n            <Typography level="body-xs">Classic Slingshot Action!</Typography>\n          </Box>\n          <Button\n            size="sm"\n            variant="soft"\n            color="neutral"\n            sx={{\n              color: "primary.plainColor",\n              borderRadius: "xl",\n              minWidth: 80,\n            }}\n          >\n            GET\n          </Button>\n        </CardContent>\n      </CardOverflow>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Apple/Arcade"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-apple-arcade\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardapplearcade",children:"CardAppleArcade"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardAppleArcaderaw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-apple-arcade/src/CardAppleArcade.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Arcade:()=>Arcade,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardAppleArcade_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-apple-arcade/usage.mdx"),Avatar=__webpack_require__("./node_modules/@mui/joy/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/joy/Button/Button.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),CardCover=__webpack_require__("./node_modules/@mui/joy/CardCover/CardCover.js"),CardOverflow=__webpack_require__("./node_modules/@mui/joy/CardOverflow/CardOverflow.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardAppleArcade(){return(0,jsx_runtime.jsxs)(Card.Z,{sx:{minHeight:425,borderRadius:"xl"},children:[(0,jsx_runtime.jsx)(CardCover.Z,{children:(0,jsx_runtime.jsx)("img",{alt:"",src:"https://teaser-trailer.com/wp-content/uploads/Angry-Birds-Movie-New-character-poster-1.jpg"})}),(0,jsx_runtime.jsxs)(CardContent.Z,{sx:{m:-1,p:1,backdropFilter:"blur(20px)",borderRadius:"md",flex:"initial",mb:"auto",width:"max-content"},children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-sm",textColor:"rgba(255 255 255 / 0.72)",children:"APPLE ARCADE"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"h3",textColor:"#fff",children:"Angry Birds soars again!"})]}),(0,jsx_runtime.jsx)(CardOverflow.Z,{sx:{bgcolor:"background.surface"},children:(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",sx:{alignItems:"center"},children:[(0,jsx_runtime.jsx)(Avatar.Z,{src:"https://i.pinimg.com/originals/c7/e2/5c/c7e25c9979b38201ee2b1729b2f3c151.png",sx:{borderRadius:"md"}}),(0,jsx_runtime.jsxs)(Box.Z,{sx:{flex:1},children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",children:"Apple Arcade"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Angry Birds Reloaded"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",children:"Classic Slingshot Action!"})]}),(0,jsx_runtime.jsx)(Button.Z,{size:"sm",variant:"soft",color:"neutral",sx:{color:"primary.plainColor",borderRadius:"xl",minWidth:80},children:"GET"})]})})]})}CardAppleArcade.displayName="CardAppleArcade";const CardAppleArcade_stories={title:"Card/Apple/Arcade",component:CardAppleArcade,parameters:{layout:"centered",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default)]},Arcade={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:400,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardAppleArcade,{})})};Arcade.parameters={...Arcade.parameters,docs:{...Arcade.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 400,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardAppleArcade />\n    </div>\n}',...Arcade.parameters?.docs?.source}}};const __namedExportsOrder=["Arcade"]}}]);