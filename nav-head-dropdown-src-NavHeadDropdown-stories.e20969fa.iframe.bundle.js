"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[324],{"./blocks/nav-head-dropdown/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const NavHeadDropdownraw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Dropdown from "@mui/joy/Dropdown";\nimport Link from "@mui/joy/Link";\nimport List from "@mui/joy/List";\nimport ListItem from "@mui/joy/ListItem";\nimport ListItemButton from "@mui/joy/ListItemButton";\nimport ListItemContent from "@mui/joy/ListItemContent";\nimport Menu from "@mui/joy/Menu";\nimport MenuButton from "@mui/joy/MenuButton";\nimport MenuItem from "@mui/joy/MenuItem";\nimport Sheet from "@mui/joy/Sheet";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nexport default function NavHeadDropdown() {\n  const [open, setOpen] = React.useState(false);\n  const inRef = React.useRef(open);\n\n  const handleEnter = () => {\n    inRef.current = true;\n    setOpen(true);\n  };\n  const handleLeave = () => {\n    inRef.current = false;\n    setTimeout(() => {\n      if (!inRef.current) {\n        setOpen(false);\n      }\n    }, 200);\n  };\n\n  return (\n    <Sheet sx={{ boxShadow: "sm", p: 2 }}>\n      <nav>\n        <List\n          orientation="horizontal"\n          sx={{\n            gap: 2,\n            \'& a, & [role="button"]\': {\n              borderRadius: 40,\n              textDecorationColor: (theme) => theme.vars.palette.divider,\n            },\n          }}\n        >\n          <ListItem>\n            <ListItemButton component={Link} href="#">\n              Home\n            </ListItemButton>\n          </ListItem>\n          <ListItem>\n            <Dropdown\n              open={open}\n              onOpenChange={(event, newValue) => setOpen(newValue)}\n            >\n              <MenuButton\n                onMouseEnter={handleEnter}\n                onMouseLeave={handleLeave}\n                slots={{ root: ListItemButton }}\n                sx={{ gap: 1 }}\n              >\n                Products\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    fill="none"\n                    viewBox="0 0 24 24"\n                    strokeWidth={1.5}\n                    stroke="currentColor"\n                  >\n                    <path\n                      strokeLinecap="round"\n                      strokeLinejoin="round"\n                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"\n                    />\n                  </svg>\n                </SvgIcon>\n              </MenuButton>\n              <Menu\n                placement="bottom-start"\n                onMouseEnter={handleEnter}\n                onMouseLeave={handleLeave}\n                sx={{ width: 300 }}\n              >\n                <MenuItem sx={{ gap: 2 }}>\n                  <AspectRatio\n                    ratio="1"\n                    sx={{ borderRadius: "50%", minWidth: 40 }}\n                  >\n                    <div>\n                      <SvgIcon>\n                        <svg\n                          xmlns="http://www.w3.org/2000/svg"\n                          fill="none"\n                          viewBox="0 0 24 24"\n                          strokeWidth={1.5}\n                          stroke="currentColor"\n                        >\n                          <path\n                            strokeLinecap="round"\n                            strokeLinejoin="round"\n                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"\n                          />\n                        </svg>\n                      </SvgIcon>\n                    </div>\n                  </AspectRatio>\n                  <ListItemContent>\n                    <Typography level="title-md">Locky</Typography>\n                    <Typography level="body-sm">\n                      Lock you app at anytime.\n                    </Typography>\n                  </ListItemContent>\n                </MenuItem>\n                <MenuItem sx={{ gap: 2 }}>\n                  <AspectRatio\n                    ratio="1"\n                    sx={{ borderRadius: "50%", minWidth: 40 }}\n                  >\n                    <div>\n                      <SvgIcon>\n                        <svg\n                          xmlns="http://www.w3.org/2000/svg"\n                          fill="none"\n                          viewBox="0 0 24 24"\n                          strokeWidth={1.5}\n                          stroke="currentColor"\n                        >\n                          <path\n                            strokeLinecap="round"\n                            strokeLinejoin="round"\n                            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"\n                          />\n                        </svg>\n                      </SvgIcon>\n                    </div>\n                  </AspectRatio>\n                  <ListItemContent>\n                    <Typography level="title-md">Experimento</Typography>\n                    <Typography level="body-sm">\n                      Safe environment for your next application.\n                    </Typography>\n                  </ListItemContent>\n                </MenuItem>\n              </Menu>\n            </Dropdown>\n          </ListItem>\n          <ListItem>\n            <ListItemButton component={Link} href="#">\n              About us\n            </ListItemButton>\n          </ListItem>\n          <ListItem>\n            <ListItemButton component={Link} href="#">\n              Contacts\n            </ListItemButton>\n          </ListItem>\n        </List>\n      </nav>\n    </Sheet>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Nav/Head/Dropdown"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone nav-head-dropdown\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navheaddropdown",children:"NavHeadDropdown"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavHeadDropdownraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{size:"lg",variant:"soft",sx:{position:"fixed",bottom:"0.5rem",left:"0.5rem",zIndex:9999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.Z,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}try{storyDialog.displayName="storyDialog",storyDialog.__docgenInfo={description:"",displayName:"storyDialog",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/decorators/storyDialog.tsx#storyDialog"]={docgenInfo:storyDialog.__docgenInfo,name:"storyDialog",path:".storybook/decorators/storyDialog.tsx#storyDialog"})}catch(__react_docgen_typescript_loader_error){}},"./blocks/nav-head-dropdown/src/NavHeadDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dropdown:()=>NavHeadDropdown_stories_Dropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NavHeadDropdown_stories});var react=__webpack_require__("./node_modules/react/index.js"),storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/nav-head-dropdown/usage.mdx"),AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Dropdown=__webpack_require__("./node_modules/@mui/base/Dropdown/Dropdown.js"),Link=__webpack_require__("./node_modules/@mui/joy/Link/Link.js"),List=__webpack_require__("./node_modules/@mui/joy/List/List.js"),ListItem=__webpack_require__("./node_modules/@mui/joy/ListItem/ListItem.js"),ListItemButton=__webpack_require__("./node_modules/@mui/joy/ListItemButton/ListItemButton.js"),ListItemContent=__webpack_require__("./node_modules/@mui/joy/ListItemContent/ListItemContent.js"),Menu=__webpack_require__("./node_modules/@mui/joy/Menu/Menu.js"),MenuButton=__webpack_require__("./node_modules/@mui/joy/MenuButton/MenuButton.js"),MenuItem=__webpack_require__("./node_modules/@mui/joy/MenuItem/MenuItem.js"),Sheet=__webpack_require__("./node_modules/@mui/joy/Sheet/Sheet.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function NavHeadDropdown(){const[open,setOpen]=react.useState(!1),inRef=react.useRef(open),handleEnter=()=>{inRef.current=!0,setOpen(!0)},handleLeave=()=>{inRef.current=!1,setTimeout((()=>{inRef.current||setOpen(!1)}),200)};return(0,jsx_runtime.jsx)(Sheet.Z,{sx:{boxShadow:"sm",p:2},children:(0,jsx_runtime.jsx)("nav",{children:(0,jsx_runtime.jsxs)(List.Z,{orientation:"horizontal",sx:{gap:2,'& a, & [role="button"]':{borderRadius:40,textDecorationColor:theme=>theme.vars.palette.divider}},children:[(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsx)(ListItemButton.Z,{component:Link.Z,href:"#",children:"Home"})}),(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsxs)(Dropdown.Z,{open,onOpenChange:(event,newValue)=>setOpen(newValue),children:[(0,jsx_runtime.jsxs)(MenuButton.Z,{onMouseEnter:handleEnter,onMouseLeave:handleLeave,slots:{root:ListItemButton.Z},sx:{gap:1},children:["Products",(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})})]}),(0,jsx_runtime.jsxs)(Menu.Z,{placement:"bottom-start",onMouseEnter:handleEnter,onMouseLeave:handleLeave,sx:{width:300},children:[(0,jsx_runtime.jsxs)(MenuItem.Z,{sx:{gap:2},children:[(0,jsx_runtime.jsx)(AspectRatio.Z,{ratio:"1",sx:{borderRadius:"50%",minWidth:40},children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})})})})}),(0,jsx_runtime.jsxs)(ListItemContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Locky"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"Lock you app at anytime."})]})]}),(0,jsx_runtime.jsxs)(MenuItem.Z,{sx:{gap:2},children:[(0,jsx_runtime.jsx)(AspectRatio.Z,{ratio:"1",sx:{borderRadius:"50%",minWidth:40},children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"})})})})}),(0,jsx_runtime.jsxs)(ListItemContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Experimento"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"Safe environment for your next application."})]})]})]})]})}),(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsx)(ListItemButton.Z,{component:Link.Z,href:"#",children:"About us"})}),(0,jsx_runtime.jsx)(ListItem.Z,{children:(0,jsx_runtime.jsx)(ListItemButton.Z,{component:Link.Z,href:"#",children:"Contacts"})})]})})})}NavHeadDropdown.displayName="NavHeadDropdown";const NavHeadDropdown_stories={title:"Nav/Head/Dropdown",component:NavHeadDropdown,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default)]},NavHeadDropdown_stories_Dropdown={render:()=>(0,jsx_runtime.jsx)(NavHeadDropdown,{})};NavHeadDropdown_stories_Dropdown.parameters={...NavHeadDropdown_stories_Dropdown.parameters,docs:{...NavHeadDropdown_stories_Dropdown.parameters?.docs,source:{originalSource:"{\n  render: () => <NavHeadDropdown />\n}",...NavHeadDropdown_stories_Dropdown.parameters?.docs?.source}}};const __namedExportsOrder=["Dropdown"]}}]);