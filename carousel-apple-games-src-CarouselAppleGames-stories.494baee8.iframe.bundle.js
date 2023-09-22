"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[6060],{"./node_modules/@mui/joy/CardCover/CardCover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardCover_CardCover});var esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardCoverUtilityClass(slot){return(0,className.d6)("MuiCardCover",slot)}(0,className.sI)("MuiCardCover",["root"]);var useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","slots","slotProps"],CardCoverRoot=(0,styled.Z)("div",{name:"JoyCardCover",slot:"Root",overridesResolver:(props,styles)=>styles.root})({position:"absolute",zIndex:0,top:0,left:0,right:0,bottom:0,borderRadius:"var(--CardCover-radius)","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",objectFit:"cover",boxSizing:"border-box",borderRadius:"var(--CardCover-radius)",margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:"cover"}}}),CardCover=react.forwardRef((function CardCover(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCardCover"}),{className,component="div",children,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component}),classes=(0,composeClasses.Z)({root:["root"]},getCardCoverUtilityClass,{}),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardCoverRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:react.Children.map(children,((child,index)=>0===index&&react.isValidElement(child)?react.cloneElement(child,{"data-first-child":""}):child))}))})),CardCover_CardCover=CardCover},"./blocks/carousel-apple-games/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CarouselAppleGamesraw_namespaceObject='import React from "react";\nimport Avatar from "@mui/joy/Avatar";\nimport Box from "@mui/joy/Box";\nimport Button from "@mui/joy/Button";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport CardCover from "@mui/joy/CardCover";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CarouselAppleGames() {\n  return (\n    <Box\n      sx={{\n        display: "flex",\n        gap: 2,\n        flexWrap: "nowrap",\n        overflow: "auto",\n        scrollSnapType: "x mandatory",\n        "& > *": { scrollSnapAlign: "center", minWidth: 360 },\n      }}\n    >\n      {[...new Array(5)].map((_, index) => (\n        <Box key={index}>\n          <Typography color="primary" level="body-xs">\n            HAPPENING NOW\n          </Typography>\n          <Typography level="body-lg">Pokémon GO</Typography>\n          <Typography level="body-lg" textColor="text.icon">\n            Catch Froakie this Community Day\n          </Typography>\n\n          <Card\n            variant="solid"\n            color="neutral"\n            invertedColors\n            sx={{ minHeight: 260, mt: 1.5 }}\n          >\n            <CardCover>\n              <img\n                alt="Pokémon GO"\n                src="https://gamepress.gg/pokemongo/sites/pokemongo/files/2023-08/Froakie_Community_Day.png"\n              />\n            </CardCover>\n            <CardCover\n              sx={{\n                background:\n                  "linear-gradient(to top, rgba(0 0 0 / 0.8), rgba(0 0 0 / 0.3) 100px, transparent 200px)",\n              }}\n            />\n            <CardContent\n              orientation="horizontal"\n              sx={{ flex: "initial", mt: "auto", alignItems: "center" }}\n            >\n              <Avatar src="https://lh3.googleusercontent.com/Uzo_GQXZXc1Nsj7OY3dbfRDam0TjTzV4A1dhgSYLzkdrygVRDZgDMv7JME4kEAkS0UFa0MdJevzXynIlc7X6yXRSEV2-XkrRpX1QzJts9-a6=e365-s0" />\n              <div>\n                <Typography level="title-md">Pokémon GO</Typography>\n                <Typography level="body-xs">\n                  Epic AR adventure & online RPG\n                </Typography>\n              </div>\n              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>\n                <Button\n                  size="sm"\n                  variant="solid"\n                  color="neutral"\n                  sx={{\n                    color: "#fff",\n                    bgcolor: "rgba(255 255 255 / 0.4)",\n                    backdropFilter: "blur(6px)",\n                    borderRadius: 40,\n                  }}\n                >\n                  GET\n                </Button>\n                <Typography fontSize="0.625rem" noWrap>\n                  In-App Purchases\n                </Typography>\n              </Box>\n            </CardContent>\n          </Card>\n        </Box>\n      ))}\n    </Box>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Carousel/Apple/Games"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone carousel-apple-games\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carouselapplegames",children:"CarouselAppleGames"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CarouselAppleGamesraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/carousel-apple-games/src/CarouselAppleGames.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Games:()=>Games,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CarouselAppleGames_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/carousel-apple-games/usage.mdx"),Avatar=__webpack_require__("./node_modules/@mui/joy/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/joy/Button/Button.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),CardCover=__webpack_require__("./node_modules/@mui/joy/CardCover/CardCover.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CarouselAppleGames(){return(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"flex",gap:2,flexWrap:"nowrap",overflow:"auto",scrollSnapType:"x mandatory","& > *":{scrollSnapAlign:"center",minWidth:360}},children:[...new Array(5)].map(((_,index)=>(0,jsx_runtime.jsxs)(Box.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{color:"primary",level:"body-xs",children:"HAPPENING NOW"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-lg",children:"Pokémon GO"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-lg",textColor:"text.icon",children:"Catch Froakie this Community Day"}),(0,jsx_runtime.jsxs)(Card.Z,{variant:"solid",color:"neutral",invertedColors:!0,sx:{minHeight:260,mt:1.5},children:[(0,jsx_runtime.jsx)(CardCover.Z,{children:(0,jsx_runtime.jsx)("img",{alt:"Pokémon GO",src:"https://gamepress.gg/pokemongo/sites/pokemongo/files/2023-08/Froakie_Community_Day.png"})}),(0,jsx_runtime.jsx)(CardCover.Z,{sx:{background:"linear-gradient(to top, rgba(0 0 0 / 0.8), rgba(0 0 0 / 0.3) 100px, transparent 200px)"}}),(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",sx:{flex:"initial",mt:"auto",alignItems:"center"},children:[(0,jsx_runtime.jsx)(Avatar.Z,{src:"https://lh3.googleusercontent.com/Uzo_GQXZXc1Nsj7OY3dbfRDam0TjTzV4A1dhgSYLzkdrygVRDZgDMv7JME4kEAkS0UFa0MdJevzXynIlc7X6yXRSEV2-XkrRpX1QzJts9-a6=e365-s0"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Pokémon GO"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",children:"Epic AR adventure & online RPG"})]}),(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",flexDirection:"column",gap:.5},children:[(0,jsx_runtime.jsx)(Button.Z,{size:"sm",variant:"solid",color:"neutral",sx:{color:"#fff",bgcolor:"rgba(255 255 255 / 0.4)",backdropFilter:"blur(6px)",borderRadius:40},children:"GET"}),(0,jsx_runtime.jsx)(Typography.ZP,{fontSize:"0.625rem",noWrap:!0,children:"In-App Purchases"})]})]})]})]},index)))})}CarouselAppleGames.displayName="CarouselAppleGames";const CarouselAppleGames_stories={title:"Carousel/Apple/Games",component:CarouselAppleGames,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default)]},Games={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:440,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CarouselAppleGames,{})})};Games.parameters={...Games.parameters,docs:{...Games.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 440,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CarouselAppleGames />\n    </div>\n}',...Games.parameters?.docs?.source}}};const __namedExportsOrder=["Games"]}}]);