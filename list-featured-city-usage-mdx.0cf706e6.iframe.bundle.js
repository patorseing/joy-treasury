"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[3028],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/list-featured-city/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const ListFeaturedCityraw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport Link from "@mui/joy/Link";\nimport List from "@mui/joy/List";\nimport ListItem from "@mui/joy/ListItem";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nexport default function ListFeaturedCity() {\n  return (\n    <List sx={{ p: 0, "& > li": { p: 0 } }}>\n      <ListItem>\n        <Card\n          variant="plain"\n          orientation="horizontal"\n          sx={{ boxShadow: "none", bgcolor: "transparent" }}\n        >\n          <AspectRatio flex sx={{ boxShadow: "md", minWidth: 144 }}>\n            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fm=jpg&fit=crop&w=1080&q=80&fit=max" />\n          </AspectRatio>\n          <CardContent sx={{ gap: 0.5 }}>\n            <Typography level="h4" sx={{ fontFamily: "Oswald" }}>\n              DUBAI\n            </Typography>\n            <Typography level="body-sm">\n              Dubai is a city and emirate in the United Arab Emirates known for\n              luxury shopping, ultramodern architecture and a lively nightlife\n              scene\n            </Typography>\n            <Link\n              color="neutral"\n              overlay\n              href="#"\n              endDecorator={\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    fill="none"\n                    viewBox="0 0 24 24"\n                    strokeWidth={1.5}\n                    stroke="currentColor"\n                  >\n                    <path\n                      strokeLinecap="round"\n                      strokeLinejoin="round"\n                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n                    />\n                  </svg>\n                </SvgIcon>\n              }\n              sx={{ fontWeight: "lg", mt: 1, fontFamily: "Oswald" }}\n            >\n              MORE DETAILS\n            </Link>\n          </CardContent>\n        </Card>\n      </ListItem>\n\n      <ListItem>\n        <Card\n          variant="plain"\n          orientation="horizontal"\n          sx={{ boxShadow: "none", bgcolor: "transparent" }}\n        >\n          <AspectRatio flex sx={{ boxShadow: "md", minWidth: 144 }}>\n            <img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?fm=jpg&fit=crop&w=1080&q=80&fit=max" />\n          </AspectRatio>\n          <CardContent sx={{ gap: 0.5 }}>\n            <Typography level="h4" sx={{ fontFamily: "Oswald" }}>\n              LONDON\n            </Typography>\n            <Typography level="body-sm">\n              London, a vibrant blend of history and modernity, captivates with\n              its iconic landmarks, dynamic culture, and richly diverse\n              neighborhoods.\n            </Typography>\n            <Link\n              color="neutral"\n              overlay\n              href="#"\n              endDecorator={\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    fill="none"\n                    viewBox="0 0 24 24"\n                    strokeWidth={1.5}\n                    stroke="currentColor"\n                  >\n                    <path\n                      strokeLinecap="round"\n                      strokeLinejoin="round"\n                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n                    />\n                  </svg>\n                </SvgIcon>\n              }\n              sx={{ fontWeight: "lg", mt: 1, fontFamily: "Oswald" }}\n            >\n              MORE DETAILS\n            </Link>\n          </CardContent>\n        </Card>\n      </ListItem>\n\n      <ListItem>\n        <Card\n          variant="plain"\n          orientation="horizontal"\n          sx={{ boxShadow: "none", bgcolor: "transparent" }}\n        >\n          <AspectRatio flex sx={{ boxShadow: "md", minWidth: 144 }}>\n            <img src="https://images.unsplash.com/photo-1582468546235-9bf31e5bc4a1?fm=jpg&fit=crop&w=1080&q=80&fit=max" />\n          </AspectRatio>\n          <CardContent sx={{ gap: 0.5 }}>\n            <Typography level="h4" sx={{ fontFamily: "Oswald" }}>\n              THAILAND\n            </Typography>\n            <Typography level="body-sm">\n              With its stunning beaches, intricate temples, and enchanting\n              traditions, Thailand remains a captivating destination that\n              seamlessly blends natural beauty and cultural richness.\n            </Typography>\n            <Link\n              color="neutral"\n              overlay\n              href="#"\n              endDecorator={\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    fill="none"\n                    viewBox="0 0 24 24"\n                    strokeWidth={1.5}\n                    stroke="currentColor"\n                  >\n                    <path\n                      strokeLinecap="round"\n                      strokeLinejoin="round"\n                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n                    />\n                  </svg>\n                </SvgIcon>\n              }\n              sx={{ fontWeight: "lg", mt: 1, fontFamily: "Oswald" }}\n            >\n              MORE DETAILS\n            </Link>\n          </CardContent>\n        </Card>\n      </ListItem>\n    </List>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"List/Featured/City"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone list-featured-city\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"listfeaturedcity",children:"ListFeaturedCity"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:ListFeaturedCityraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);