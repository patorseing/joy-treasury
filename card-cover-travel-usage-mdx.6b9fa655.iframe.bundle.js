"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[6933],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-cover-travel/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardCoverTravelraw_namespaceObject='import React from "react";\nimport Chip from "@mui/joy/Chip";\nimport Card from "@mui/joy/Card";\nimport CardCover from "@mui/joy/CardCover";\nimport CardContent from "@mui/joy/CardContent";\nimport Typography from "@mui/joy/Typography";\nimport Link from "@mui/joy/Link";\nimport Button from "@mui/joy/Button";\nimport CardActions from "@mui/joy/CardActions/CardActions";\nimport CardOverflow from "@mui/joy/CardOverflow/CardOverflow";\nimport SvgIcon from "@mui/joy/SvgIcon/SvgIcon";\nimport IconButton from "@mui/joy/IconButton/IconButton";\n\nexport default function CardCoverTravel() {\n  return (\n    <Card\n      variant="solid"\n      invertedColors\n      size="lg"\n      sx={{ minHeight: 240, boxShadow: "lg" }}\n    >\n      <CardCover>\n        <img src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" />\n      </CardCover>\n      <CardCover\n        sx={{\n          background:\n            "linear-gradient(to top, rgba(0 0 0 / 0.8), rgba(0 0 0 / 0) 200px)",\n        }}\n      />\n      <CardContent sx={{ justifyContent: "flex-end", gap: 1 }}>\n        <Chip\n          size="sm"\n          variant="soft"\n          sx={{\n            borderRadius: "sm",\n            backdropFilter: "blur(4px)",\n            fontWeight: "lg",\n          }}\n        >\n          Travel\n        </Chip>\n\n        <Typography level="title-md">\n          <Link\n            textColor="inherit"\n            underline="none"\n            overlay\n            href="#" // 👈 TODO: link to another page here.\n            sx={{\n              "--joy-palette-focusVisible": (theme) =>\n                theme.vars.palette.primary[500],\n            }}\n          >\n            5 Best Places to Travel in Thailand\n          </Link>\n        </Typography>\n        <Typography\n          level="body-xs"\n          startDecorator={\n            <SvgIcon>\n              <svg\n                xmlns="http://www.w3.org/2000/svg"\n                fill="none"\n                viewBox="0 0 24 24"\n                strokeWidth={1.5}\n                stroke="currentColor"\n              >\n                <path\n                  strokeLinecap="round"\n                  strokeLinejoin="round"\n                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"\n                />\n              </svg>\n            </SvgIcon>\n          }\n        >\n          Siriwat K.\n        </Typography>\n      </CardContent>\n      <CardContent\n        orientation="horizontal"\n        sx={{\n          position: "absolute",\n          gap: 1,\n          top: "0.5rem",\n          right: "0.5rem",\n          "& > button": {\n            backdropFilter: "blur(4px)",\n          },\n        }}\n      >\n        <IconButton size="sm">\n          <SvgIcon>\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              fill="none"\n              viewBox="0 0 24 24"\n              strokeWidth={1.5}\n              stroke="currentColor"\n            >\n              <path\n                strokeLinecap="round"\n                strokeLinejoin="round"\n                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"\n              />\n            </svg>\n          </SvgIcon>\n        </IconButton>\n        <IconButton size="sm">\n          <SvgIcon>\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              fill="none"\n              viewBox="0 0 24 24"\n              strokeWidth={1.5}\n              stroke="currentColor"\n            >\n              <path\n                strokeLinecap="round"\n                strokeLinejoin="round"\n                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"\n              />\n            </svg>\n          </SvgIcon>\n        </IconButton>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Cover/Travel"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-cover-travel\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardcovertravel",children:"CardCoverTravel"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardCoverTravelraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);