"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[3566],{"./blocks/card-travel-spa/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardTravelSparaw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Box from "@mui/joy/Box";\nimport Card from "@mui/joy/Card";\nimport CardActions from "@mui/joy/CardActions";\nimport CardContent from "@mui/joy/CardContent";\nimport CardOverflow from "@mui/joy/CardOverflow";\nimport CircularProgress from "@mui/joy/CircularProgress";\nimport Link from "@mui/joy/Link";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardTravelSpa() {\n  return (\n    <Card variant="plain" size="lg" sx={{ borderRadius: 0, boxShadow: "xl" }}>\n      <CardOverflow>\n        <AspectRatio ratio="7/5" maxHeight={300}>\n          <img src="https://images.unsplash.com/photo-1470214203634-e436a8848e23" />\n        </AspectRatio>\n      </CardOverflow>\n      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>\n        <CardContent sx={{ gap: 1, flex: "max-content" }}>\n          <Typography\n            level="h2"\n            sx={{\n              fontFamily: (theme) =>\n                `Cormorant, ${theme.vars.fontFamily.display}`,\n            }}\n          >\n            Blissful Haven Spa\n          </Typography>\n          <Typography\n            level="body-sm"\n            fontWeight="lg"\n            startDecorator={\n              <SvgIcon>\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  viewBox="0 0 24 24"\n                  fill="currentColor"\n                >\n                  <path\n                    fillRule="evenodd"\n                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"\n                    clipRule="evenodd"\n                  />\n                </svg>\n              </SvgIcon>\n            }\n          >\n            Mystical valleys of Eldoria\n          </Typography>\n        </CardContent>\n        <Box sx={{ flex: "auto", textAlign: "center" }}>\n          <CircularProgress\n            color="success"\n            thickness={2}\n            determinate\n            value={91}\n            sx={{ "--CircularProgress-size": "52px", fontSize: "sm" }}\n          >\n            9.1\n          </CircularProgress>\n        </Box>\n      </CardContent>\n      <Typography level="body-sm" sx={{ my: 2 }}>\n        Rejuvenate Your Senses in a Serene Oasis of Tranquility, where expert\n        therapists pamper you with indulgent treatments, leaving you refreshed,\n        revitalized, and radiating with inner harmony.\n      </Typography>\n      <CardOverflow\n        sx={{\n          bgcolor: "background.level1",\n          borderTop: "1px solid",\n          borderColor: "divider",\n        }}\n      >\n        <CardActions sx={{ justifyContent: "space-between" }}>\n          <Typography level="body-xs">\n            From <Typography color="success">$ 2,500</Typography> for 8 nights\n          </Typography>\n          <Link\n            level="body-sm"\n            fontWeight="lg"\n            component="button"\n            endDecorator={\n              <SvgIcon>\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  viewBox="0 0 24 24"\n                  fill="currentColor"\n                >\n                  <path\n                    fillRule="evenodd"\n                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"\n                    clipRule="evenodd"\n                  />\n                </svg>\n              </SvgIcon>\n            }\n          >\n            Book now\n          </Link>\n        </CardActions>\n      </CardOverflow>\n    </Card>\n  );\n}\n',CardTravelSpaCoverraw_namespaceObject='import React from "react";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport CardCover from "@mui/joy/CardCover";\nimport CircularProgress from "@mui/joy/CircularProgress";\nimport Link from "@mui/joy/Link";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardTravelSpaCover() {\n  return (\n    <Card\n      variant="solid"\n      invertedColors\n      size="lg"\n      sx={{\n        borderRadius: 0,\n        boxShadow: "xl",\n        width: "100%",\n        height: "100%",\n      }}\n    >\n      <CardCover>\n        <img src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb" />\n      </CardCover>\n      <CardCover\n        sx={{\n          background:\n            "linear-gradient(5deg, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),linear-gradient(10deg, rgba(0,0,0,0.8), rgba(0,0,0,0) 190px)",\n        }}\n      />\n      <CardContent sx={{ justifyContent: "flex-end" }}>\n        <Typography\n          level="h1"\n          sx={{\n            textShadow: "0 0 0.25em rgba(0 0 0 / 0.5)",\n            fontFamily: (theme) =>\n              `Cormorant, ${theme.vars.fontFamily.display}`,\n            letterSpacing: 0,\n          }}\n        >\n          <Link href="#" overlay textColor="inherit" underline="none">\n            Blissful Haven Spa\n          </Link>\n        </Typography>\n        <Typography\n          level="body-sm"\n          fontWeight="lg"\n          startDecorator={\n            <SvgIcon>\n              <svg\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n                fill="currentColor"\n              >\n                <path\n                  fillRule="evenodd"\n                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"\n                  clipRule="evenodd"\n                />\n              </svg>\n            </SvgIcon>\n          }\n        >\n          Mystical valleys of Eldoria\n        </Typography>\n      </CardContent>\n      <CardContent\n        orientation="horizontal"\n        sx={{\n          flex: "none",\n          alignItems: "center",\n          justifyContent: "space-between",\n        }}\n      >\n        <Typography textColor="text.secondary">\n          From <b>$ 2,500</b> for 8 nights\n        </Typography>\n        <CircularProgress\n          thickness={2}\n          determinate\n          value={91}\n          sx={{ "--CircularProgress-size": "52px", fontSize: "sm" }}\n        >\n          9.1\n        </CircularProgress>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Travel/Spa"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-travel-spa\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"font",children:"Font"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />\n<link\n  href="https://fonts.googleapis.com/css2?family=Cormorant&display=swap"\n  rel="stylesheet"\n/>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardtravelspa",children:"CardTravelSpa"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardTravelSparaw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardtravelspacover",children:"CardTravelSpaCover"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardTravelSpaCoverraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-travel-spa/src/CardTravelSpa.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Spa:()=>Spa,SpaCover:()=>SpaCover,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardTravelSpa_stories});var react=__webpack_require__("./node_modules/react/index.js"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-travel-spa/usage.mdx"),AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Box=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardActions=__webpack_require__("./node_modules/@mui/joy/CardActions/CardActions.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),CardOverflow=__webpack_require__("./node_modules/@mui/joy/CardOverflow/CardOverflow.js"),CircularProgress=__webpack_require__("./node_modules/@mui/joy/CircularProgress/CircularProgress.js"),Link=__webpack_require__("./node_modules/@mui/joy/Link/Link.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardTravelSpa(){return(0,jsx_runtime.jsxs)(Card.Z,{variant:"plain",size:"lg",sx:{borderRadius:0,boxShadow:"xl"},children:[(0,jsx_runtime.jsx)(CardOverflow.Z,{children:(0,jsx_runtime.jsx)(AspectRatio.Z,{ratio:"7/5",maxHeight:300,children:(0,jsx_runtime.jsx)("img",{src:"https://images.unsplash.com/photo-1470214203634-e436a8848e23"})})}),(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",sx:{alignItems:"center"},children:[(0,jsx_runtime.jsxs)(CardContent.Z,{sx:{gap:1,flex:"max-content"},children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"h2",sx:{fontFamily:theme=>`Cormorant, ${theme.vars.fontFamily.display}`},children:"Blissful Haven Spa"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",fontWeight:"lg",startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})}),children:"Mystical valleys of Eldoria"})]}),(0,jsx_runtime.jsx)(Box.Z,{sx:{flex:"auto",textAlign:"center"},children:(0,jsx_runtime.jsx)(CircularProgress.Z,{color:"success",thickness:2,determinate:!0,value:91,sx:{"--CircularProgress-size":"52px",fontSize:"sm"},children:"9.1"})})]}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",sx:{my:2},children:"Rejuvenate Your Senses in a Serene Oasis of Tranquility, where expert therapists pamper you with indulgent treatments, leaving you refreshed, revitalized, and radiating with inner harmony."}),(0,jsx_runtime.jsx)(CardOverflow.Z,{sx:{bgcolor:"background.level1",borderTop:"1px solid",borderColor:"divider"},children:(0,jsx_runtime.jsxs)(CardActions.Z,{sx:{justifyContent:"space-between"},children:[(0,jsx_runtime.jsxs)(Typography.ZP,{level:"body-xs",children:["From ",(0,jsx_runtime.jsx)(Typography.ZP,{color:"success",children:"$ 2,500"})," for 8 nights"]}),(0,jsx_runtime.jsx)(Link.Z,{level:"body-sm",fontWeight:"lg",component:"button",endDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"})})}),children:"Book now"})]})})]})}CardTravelSpa.displayName="CardTravelSpa";var CardCover=__webpack_require__("./node_modules/@mui/joy/CardCover/CardCover.js");function CardTravelSpaCover(){return(0,jsx_runtime.jsxs)(Card.Z,{variant:"solid",invertedColors:!0,size:"lg",sx:{borderRadius:0,boxShadow:"xl",width:"100%",height:"100%"},children:[(0,jsx_runtime.jsx)(CardCover.Z,{children:(0,jsx_runtime.jsx)("img",{src:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb"})}),(0,jsx_runtime.jsx)(CardCover.Z,{sx:{background:"linear-gradient(5deg, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),linear-gradient(10deg, rgba(0,0,0,0.8), rgba(0,0,0,0) 190px)"}}),(0,jsx_runtime.jsxs)(CardContent.Z,{sx:{justifyContent:"flex-end"},children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"h1",sx:{textShadow:"0 0 0.25em rgba(0 0 0 / 0.5)",fontFamily:theme=>`Cormorant, ${theme.vars.fontFamily.display}`,letterSpacing:0},children:(0,jsx_runtime.jsx)(Link.Z,{href:"#",overlay:!0,textColor:"inherit",underline:"none",children:"Blissful Haven Spa"})}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",fontWeight:"lg",startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})}),children:"Mystical valleys of Eldoria"})]}),(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",sx:{flex:"none",alignItems:"center",justifyContent:"space-between"},children:[(0,jsx_runtime.jsxs)(Typography.ZP,{textColor:"text.secondary",children:["From ",(0,jsx_runtime.jsx)("b",{children:"$ 2,500"})," for 8 nights"]}),(0,jsx_runtime.jsx)(CircularProgress.Z,{thickness:2,determinate:!0,value:91,sx:{"--CircularProgress-size":"52px",fontSize:"sm"},children:"9.1"})]})]})}CardTravelSpaCover.displayName="CardTravelSpaCover";const CardTravelSpa_stories={title:"Card/Travel/Spa",component:CardTravelSpa,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default),Story=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,jsx_runtime.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,jsx_runtime.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Cormorant&display=swap",rel:"stylesheet"}),(0,jsx_runtime.jsx)(Story,{})]})]},Spa={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:440,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardTravelSpa,{})})},SpaCover={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:440,height:600,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardTravelSpaCover,{})})};Spa.parameters={...Spa.parameters,docs:{...Spa.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 440,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardTravelSpa />\n    </div>\n}',...Spa.parameters?.docs?.source}}},SpaCover.parameters={...SpaCover.parameters,docs:{...SpaCover.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 440,\n    height: 600,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardTravelSpaCover />\n    </div>\n}',...SpaCover.parameters?.docs?.source}}};const __namedExportsOrder=["Spa","SpaCover"]}}]);