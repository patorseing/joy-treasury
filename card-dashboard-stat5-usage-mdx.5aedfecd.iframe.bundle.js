"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[586],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-dashboard-stat5/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardDashboardStat5raw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport Divider from "@mui/joy/Divider";\nimport IconButton from "@mui/joy/IconButton";\nimport Typography from "@mui/joy/Typography";\nimport SvgIcon from "@mui/joy/SvgIcon";\n\nexport default function CardDashboardStat5() {\n  return (\n    <Card>\n      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>\n        <Typography textColor="text.icon" sx={{ flex: "auto" }}>\n          Total Profit\n        </Typography>\n        <IconButton variant="plain" color="neutral" sx={{ mt: -1, mr: -1 }}>\n          <SvgIcon>\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              fill="none"\n              viewBox="0 0 24 24"\n              strokeWidth={1.5}\n              stroke="currentColor"\n            >\n              <path\n                strokeLinecap="round"\n                strokeLinejoin="round"\n                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"\n              />\n            </svg>\n          </SvgIcon>\n        </IconButton>\n      </CardContent>\n      <Typography level="h1" component="div">\n        $42,000.00\n      </Typography>\n      <Divider />\n      <CardContent orientation="horizontal">\n        <Typography\n          color="success"\n          level="body-sm"\n          startDecorator={\n            <AspectRatio\n              variant="soft"\n              color="success"\n              ratio="1"\n              sx={{ width: 20, borderRadius: "50%" }}\n            >\n              <div>\n                <SvgIcon color="inherit" fontSize="xs">\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    fill="none"\n                    viewBox="0 0 24 24"\n                    strokeWidth={2}\n                    stroke="currentColor"\n                  >\n                    <path\n                      strokeLinecap="round"\n                      strokeLinejoin="round"\n                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"\n                    />\n                  </svg>\n                </SvgIcon>\n              </div>\n            </AspectRatio>\n          }\n          sx={{ flex: "auto" }}\n        >\n          +33.57%\n        </Typography>\n        <Typography textColor="text.icon" level="body-sm">\n          Profit in this period\n        </Typography>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Dashboard/Stat5"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-dashboard-stat5\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carddashboardstat5",children:"CardDashboardStat5"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardDashboardStat5raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);