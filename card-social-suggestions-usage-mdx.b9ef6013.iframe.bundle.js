"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[7722],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-social-suggestions/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardSocialSuggestionsraw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Avatar from "@mui/joy/Avatar";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport List from "@mui/joy/List";\nimport ListDivider from "@mui/joy/ListDivider";\nimport ListItem from "@mui/joy/ListItem";\nimport ListItemContent from "@mui/joy/ListItemContent";\nimport ListItemDecorator from "@mui/joy/ListItemDecorator";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardSocialSuggestions() {\n  return (\n    <Card sx={{ borderRadius: "xl" }}>\n      <CardContent>\n        <div>\n          <Typography level="title-md" textColor="text.icon">\n            Suggestions\n          </Typography>\n        </div>\n        <List\n          sx={{\n            "--ListItem-paddingX": "0px",\n            "--ListItemDecorator-size": "64px",\n          }}\n        >\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://api.dicebear.com/7.x/micah/svg?seed=Rascal&backgroundColor=ffdfbf"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">Jennifer Lawrence</Typography>\n              <Typography\n                level="body-sm"\n                color="success"\n                startDecorator={\n                  <AspectRatio\n                    variant="plain"\n                    ratio="1"\n                    sx={{\n                      width: 6,\n                      borderRadius: "50%",\n                      bgcolor: "success.400",\n                    }}\n                  />\n                }\n              >\n                Online\n              </Typography>\n            </ListItemContent>\n          </ListItem>\n          <ListDivider inset="startContent" />\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Tinkerbell&backgroundColor=d1d4f9"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">Nicolas Cage</Typography>\n              <Typography level="body-sm" textColor="text.tertiary">\n                Last seen just now\n              </Typography>\n            </ListItemContent>\n          </ListItem>\n          <ListDivider inset="startContent" />\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Leo&backgroundColor=b6e3f4"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">Amy Adams</Typography>\n              <Typography level="body-sm" textColor="text.tertiary">\n                Last seen 5 min ago\n              </Typography>\n            </ListItemContent>\n          </ListItem>\n        </List>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Social/Suggestions"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-social-suggestions\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardsocialsuggestions",children:"CardSocialSuggestions"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardSocialSuggestionsraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);