"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[3994],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/layout-grid-posts2/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LayoutGridPosts2raw_namespaceObject='import React from "react";\nimport Box, { BoxProps } from "@mui/joy/Box";\n\nexport default function LayoutGridPosts2({ sx, ...props }: BoxProps) {\n  return (\n    <Box\n      {...props}\n      sx={[\n        {\n          display: "grid",\n          gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 0.5fr 0.5fr" },\n          gridAutoRows: "clamp(256px, 40vh, 300px)",\n          gap: { xs: 2, md: 3 },\n          "& > :first-child": {\n            gridColumn: { xs: "span 2", md: "span 1" },\n            gridRow: { md: "span 2" },\n          },\n        },\n        ...(Array.isArray(sx) ? sx : [sx]),\n      ]}\n    />\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Layout/Grid/Posts2"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone layout-grid-posts2\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"LayoutGridPosts2"})," accepts 5 children which gives priority to the first item. The children must be the same html tag."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import LayoutGridPosts2 from "./path/to/LayoutGridPosts2";\n\nfunction App() {\n  return (\n    <LayoutGridPosts2>\n      <div />\n      <div />\n      <div />\n      <div />\n      <div />\n    </LayoutGridPosts2>\n  );\n}\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layoutgridposts2",children:"LayoutGridPosts2"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LayoutGridPosts2raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);