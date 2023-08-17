"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[5703],{"./blocks/nav-sidebar-dashboard2/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const NavSidebarDashboard2raw_namespaceObject='import React from "react";\nimport Box from "@mui/joy/Box";\nimport IconButton from "@mui/joy/IconButton";\nimport List from "@mui/joy/List";\nimport ListItem from "@mui/joy/ListItem";\nimport ListItemButton from "@mui/joy/ListItemButton";\nimport ListItemDecorator from "@mui/joy/ListItemDecorator";\nimport ListSubheader from "@mui/joy/ListSubheader";\nimport Sheet from "@mui/joy/Sheet";\nimport SvgIcon from "@mui/joy/SvgIcon";\n\nexport default function NavSidebarDashboard2() {\n  const [open1, setOpen1] = React.useState(true);\n  const [open2, setOpen2] = React.useState(true);\n  const [open3, setOpen3] = React.useState(false);\n  return (\n    <Sheet component="nav">\n      <List\n        sx={{\n          gap: 2,\n          "--ListItem-paddingLeft": "1rem",\n          "& .Mui-selected": {\n            "&::before": {\n              content: \'""\',\n              height: "60%",\n              display: "block",\n              position: "absolute",\n              left: -1,\n              top: "20%",\n              width: 4,\n              borderTopRightRadius: 4,\n              borderBottomRightRadius: 4,\n              bgcolor: "primary.solidBg",\n            },\n          },\n        }}\n      >\n        <ListItem>\n          <ListItemButton>\n            <ListItemDecorator>\n              <SvgIcon>\n                <svg\n                  width="512"\n                  height="512"\n                  viewBox="0 0 256 256"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    fill="currentColor"\n                    d="M240 128a8 8 0 0 1-8 8h-27.06l-37.78 75.58A8 8 0 0 1 160 216h-.4a8 8 0 0 1-7.08-5.14L95.35 60.76l-32.07 70.55A8 8 0 0 1 56 136H24a8 8 0 0 1 0-16h26.85l37.87-83.31a8 8 0 0 1 14.76.46l57.51 151l31.85-63.71A8 8 0 0 1 200 120h32a8 8 0 0 1 8 8Z"\n                  />\n                </svg>\n              </SvgIcon>\n            </ListItemDecorator>\n            Updates\n          </ListItemButton>\n        </ListItem>\n        <ListItem nested>\n          <ListSubheader sx={{ fontWeight: "lg" }}>\n            Product development\n            <IconButton\n              size="sm"\n              onClick={() => setOpen1(!open1)}\n              sx={{ ml: "auto" }}\n            >\n              <SvgIcon>\n                <svg\n                  width="512"\n                  height="512"\n                  viewBox="0 0 24 24"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    fill="currentColor"\n                    d="M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"\n                  />\n                </svg>\n              </SvgIcon>\n            </IconButton>\n          </ListSubheader>\n\n          <Box\n            sx={{\n              display: "grid",\n              gridTemplateRows: open1 ? "1fr" : "0fr",\n              transition: "0.2s ease",\n            }}\n          >\n            <List sx={{ overflow: "hidden" }}>\n              <ListItem>\n                <ListItemButton component="a" href="#">\n                  <ListItemDecorator>\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 20 20"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="M10.505 3.117a1 1 0 0 0-1.011 0l-6.01 3.52a1 1 0 0 0 .003 1.726l6.009 3.502a1 1 0 0 0 1.007 0l6.009-3.502a1 1 0 0 0 .001-1.727l-6.009-3.52ZM9.494 4.276a1 1 0 0 1 1.01 0l5.504 3.223l-5.505 3.209a1 1 0 0 1-1.007 0L3.99 7.499l5.504-3.223ZM3.07 9.65l6.438 3.623a1 1 0 0 0 .98 0l6.438-3.623a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Zm0 2.453l6.438 3.622a1 1 0 0 0 .98 0l6.438-3.622a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </ListItemDecorator>\n                  Views\n                </ListItemButton>\n              </ListItem>\n\n              <ListItem>\n                <ListItemButton selected color="primary" component="a" href="#">\n                  <ListItemDecorator>\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 2048 2048"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </ListItemDecorator>\n                  Products\n                </ListItemButton>\n              </ListItem>\n\n              <ListItem nested>\n                <ListItem>\n                  <ListItemDecorator>\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 24 24"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="none"\n                          stroke="currentColor"\n                          stroke-width="1.5"\n                          d="m5.212 15.111l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848L6.06 15.111a.6.6 0 0 1-.848 0Zm6.364 6.364l-2.687-2.687a.6.6 0 0 1 0-.849l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .849l-2.687 2.687a.6.6 0 0 1-.848 0Zm0-12.727L8.889 6.06a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.688a.6.6 0 0 1-.848 0Zm6.364 6.363l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.687a.6.6 0 0 1-.848 0Z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </ListItemDecorator>\n                  Components\n                  <IconButton\n                    size="sm"\n                    onClick={() => setOpen2(!open2)}\n                    sx={{ ml: "auto" }}\n                  >\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 24 24"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </IconButton>\n                </ListItem>\n\n                <Box\n                  sx={{\n                    display: "grid",\n                    gridTemplateRows: open2 ? "1fr" : "0fr",\n                    transition: "0.2s ease",\n                  }}\n                >\n                  <List\n                    sx={{\n                      fontSize: "sm",\n                      overflow: "hidden",\n                    }}\n                  >\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Fabrics\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Labels\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Trims\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Packaging\n                      </ListItemButton>\n                    </ListItem>\n                  </List>\n                </Box>\n              </ListItem>\n\n              <ListItem nested>\n                <ListItem>\n                  <ListItemDecorator>\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 1024 1024"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </ListItemDecorator>\n                  Libraries\n                  <IconButton\n                    size="sm"\n                    onClick={() => setOpen3(!open3)}\n                    sx={{ ml: "auto" }}\n                  >\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 24 24"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </IconButton>\n                </ListItem>\n\n                <Box\n                  sx={{\n                    display: "grid",\n                    gridTemplateRows: open3 ? "1fr" : "0fr",\n                    transition: "0.2s ease",\n                  }}\n                >\n                  <List sx={{ fontSize: "sm", overflow: "hidden" }}>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Sizes\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Dimensions\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Colors\n                      </ListItemButton>\n                    </ListItem>\n                  </List>\n                </Box>\n              </ListItem>\n            </List>\n          </Box>\n        </ListItem>\n      </List>\n    </Sheet>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Nav/Sidebar/Dashboard2"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone nav-sidebar-dashboard2\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navsidebardashboard2",children:"NavSidebarDashboard2"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavSidebarDashboard2raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{size:"lg",variant:"soft",sx:{position:"fixed",bottom:"0.5rem",left:"0.5rem",zIndex:9999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.Z,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}try{storyDialog.displayName="storyDialog",storyDialog.__docgenInfo={description:"",displayName:"storyDialog",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/storyDialog.tsx#storyDialog"]={docgenInfo:storyDialog.__docgenInfo,name:"storyDialog",path:".storybook/decorators/storyDialog.tsx#storyDialog"})}catch(__react_docgen_typescript_loader_error){}},"./blocks/nav-sidebar-dashboard2/src/NavSidebarDashboard2.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dashboard2:()=>Dashboard2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NavSidebarDashboard2_stories});var react=__webpack_require__("./node_modules/react/index.js"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/nav-sidebar-dashboard2/usage.mdx"),Box=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),IconButton=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),List=__webpack_require__("./node_modules/@mui/joy/List/List.js"),ListItem=__webpack_require__("./node_modules/@mui/joy/ListItem/ListItem.js"),ListItemButton=__webpack_require__("./node_modules/@mui/joy/ListItemButton/ListItemButton.js"),ListItemDecorator=__webpack_require__("./node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js"),ListSubheader=__webpack_require__("./node_modules/@mui/joy/ListSubheader/ListSubheader.js"),Sheet=__webpack_require__("./node_modules/@mui/joy/Sheet/Sheet.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function NavSidebarDashboard2(){const[open1,setOpen1]=react.useState(!0),[open2,setOpen2]=react.useState(!0),[open3,setOpen3]=react.useState(!1);return(0,jsx_runtime.jsx)(Sheet.Z,{component:"nav",children:(0,jsx_runtime.jsxs)(List.Z,{sx:{gap:2,"--ListItem-paddingLeft":"1rem","& .Mui-selected":{"&::before":{content:'""',height:"60%",display:"block",position:"absolute",left:-1,top:"20%",width:4,borderTopRightRadius:4,borderBottomRightRadius:4,bgcolor:"primary.solidBg"}}},children:[(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"512",height:"512",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M240 128a8 8 0 0 1-8 8h-27.06l-37.78 75.58A8 8 0 0 1 160 216h-.4a8 8 0 0 1-7.08-5.14L95.35 60.76l-32.07 70.55A8 8 0 0 1 56 136H24a8 8 0 0 1 0-16h26.85l37.87-83.31a8 8 0 0 1 14.76.46l57.51 151l31.85-63.71A8 8 0 0 1 200 120h32a8 8 0 0 1 8 8Z"})})})}),"Updates"]})}),(0,jsx_runtime.jsxs)(ListItem.Z,{nested:!0,children:[(0,jsx_runtime.jsxs)(ListSubheader.Z,{sx:{fontWeight:"lg"},children:["Product development",(0,jsx_runtime.jsx)(IconButton.ZP,{size:"sm",onClick:()=>setOpen1(!open1),sx:{ml:"auto"},children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"512",height:"512",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"})})})})]}),(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"grid",gridTemplateRows:open1?"1fr":"0fr",transition:"0.2s ease"},children:(0,jsx_runtime.jsxs)(List.Z,{sx:{overflow:"hidden"},children:[(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{component:"a",href:"#",children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"512",height:"512",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M10.505 3.117a1 1 0 0 0-1.011 0l-6.01 3.52a1 1 0 0 0 .003 1.726l6.009 3.502a1 1 0 0 0 1.007 0l6.009-3.502a1 1 0 0 0 .001-1.727l-6.009-3.52ZM9.494 4.276a1 1 0 0 1 1.01 0l5.504 3.223l-5.505 3.209a1 1 0 0 1-1.007 0L3.99 7.499l5.504-3.223ZM3.07 9.65l6.438 3.623a1 1 0 0 0 .98 0l6.438-3.623a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Zm0 2.453l6.438 3.622a1 1 0 0 0 .98 0l6.438-3.622a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Z"})})})}),"Views"]})}),(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{selected:!0,color:"primary",component:"a",href:"#",children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"512",height:"512",viewBox:"0 0 2048 2048",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"})})})}),"Products"]})}),(0,jsx_runtime.jsxs)(ListItem.Z,{nested:!0,children:[(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"512",height:"512",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"m5.212 15.111l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848L6.06 15.111a.6.6 0 0 1-.848 0Zm6.364 6.364l-2.687-2.687a.6.6 0 0 1 0-.849l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .849l-2.687 2.687a.6.6 0 0 1-.848 0Zm0-12.727L8.889 6.06a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.688a.6.6 0 0 1-.848 0Zm6.364 6.363l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.687a.6.6 0 0 1-.848 0Z"})})})}),"Components",(0,jsx_runtime.jsx)(IconButton.ZP,{size:"sm",onClick:()=>setOpen2(!open2),sx:{ml:"auto"},children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"512",height:"512",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"})})})})]}),(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"grid",gridTemplateRows:open2?"1fr":"0fr",transition:"0.2s ease"},children:(0,jsx_runtime.jsxs)(List.Z,{sx:{fontSize:"sm",overflow:"hidden"},children:[(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{component:"a",href:"#",children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{}),"Fabrics"]})}),(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{component:"a",href:"#",children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{}),"Labels"]})}),(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{component:"a",href:"#",children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{}),"Trims"]})}),(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{component:"a",href:"#",children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{}),"Packaging"]})})]})})]}),(0,jsx_runtime.jsxs)(ListItem.Z,{nested:!0,children:[(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"512",height:"512",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"})})})}),"Libraries",(0,jsx_runtime.jsx)(IconButton.ZP,{size:"sm",onClick:()=>setOpen3(!open3),sx:{ml:"auto"},children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"512",height:"512",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"})})})})]}),(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"grid",gridTemplateRows:open3?"1fr":"0fr",transition:"0.2s ease"},children:(0,jsx_runtime.jsxs)(List.Z,{sx:{fontSize:"sm",overflow:"hidden"},children:[(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{component:"a",href:"#",children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{}),"Sizes"]})}),(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{component:"a",href:"#",children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{}),"Dimensions"]})}),(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(ListItemButton.Z,{component:"a",href:"#",children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{}),"Colors"]})})]})})]})]})})]})]})})}NavSidebarDashboard2.displayName="NavSidebarDashboard2";const NavSidebarDashboard2_stories={title:"Nav/Sidebar/Dashboard2",component:NavSidebarDashboard2,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default)]},Dashboard2={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:300,maxWidth:"100%"},children:(0,jsx_runtime.jsx)(NavSidebarDashboard2,{})})};Dashboard2.parameters={...Dashboard2.parameters,docs:{...Dashboard2.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 300,\n    maxWidth: "100%"\n  }}>\n      <NavSidebarDashboard2 />\n    </div>\n}',...Dashboard2.parameters?.docs?.source}}};const __namedExportsOrder=["Dashboard2"]}}]);