"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[895],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/card-finance-stat1/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardFinanceStat1raw_namespaceObject='import React from "react";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport Typography from "@mui/joy/Typography";\nimport SvgIcon from "@mui/joy/SvgIcon";\n\nexport default function CardFinanceStat1() {\n  return (\n    <Card size="lg">\n      <CardContent orientation="horizontal">\n        <CardContent sx={{ gap: 1 }}>\n          <div>\n            <Typography level="title-lg">Orders</Typography>\n            <Typography component="div" level="h1">\n              201\n            </Typography>\n          </div>\n          <Typography\n            color="success"\n            startDecorator={\n              <SvgIcon color="inherit">\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  fill="none"\n                  viewBox="0 0 24 24"\n                  strokeWidth={1.5}\n                  stroke="currentColor"\n                >\n                  <path\n                    strokeLinecap="round"\n                    strokeLinejoin="round"\n                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"\n                  />\n                </svg>\n              </SvgIcon>\n            }\n          >\n            8.2%{" "}\n            <Typography\n              level="body-xs"\n              textColor="text.tertiary"\n              sx={{ ml: 1, alignSelf: "last baseline" }}\n            >\n              Since last month\n            </Typography>\n          </Typography>\n        </CardContent>\n        <SvgIcon fontSize="xl3">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n            strokeWidth={1.5}\n            stroke="currentColor"\n          >\n            <path\n              strokeLinecap="round"\n              strokeLinejoin="round"\n              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n            />\n          </svg>\n        </SvgIcon>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Finance/Stat1"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-finance-stat1\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardfinancestat1",children:"CardFinanceStat1"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardFinanceStat1raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);