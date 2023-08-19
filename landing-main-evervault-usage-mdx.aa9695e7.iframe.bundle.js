"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[4513],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/landing-main-evervault/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LandingMainEvervaultraw_namespaceObject='import React from "react";\nimport Box from "@mui/joy/Box";\nimport Button from "@mui/joy/Button";\nimport ButtonGroup from "@mui/joy/ButtonGroup";\nimport Chip from "@mui/joy/Chip";\nimport Sheet from "@mui/joy/Sheet";\nimport Stack from "@mui/joy/Stack";\nimport Typography from "@mui/joy/Typography";\n\nexport default function LandingMainEvervault() {\n  return (\n    <Sheet\n      variant="solid"\n      color="neutral"\n      invertedColors\n      sx={(theme) => ({\n        "--radiant-inner": "#220060",\n        "--radiant-outer": "#76d9ff",\n        height: "92svh",\n        display: "grid",\n        gridTemplateColumns: {\n          sm: "repeat(2, 1fr)",\n          md: "repeat(2, minmax(0, 500px))",\n        },\n        gap: { sm: "1rem", md: "2.5rem" },\n        alignItems: "center",\n        justifyContent: "center",\n        borderBottomLeftRadius: "2.4rem",\n        borderBottomRightRadius: "2.4rem",\n        background:\n          "radial-gradient(140% 107.13% at 50% 10%,var(--radiant-inner) 37.41%,#63e 69.27%,var(--radiant-outer) 100%)",\n        padding: "0 2rem",\n        margin: { md: "0 1.5rem" },\n        perspective: "1000px",\n        [theme.getColorSchemeSelector("dark")]: {\n          "--radiant-inner": "transparent",\n          "--radiant-outer": "#fff",\n        },\n      })}\n    >\n      <Stack useFlexGap spacing={2}>\n        <Chip\n          size="sm"\n          slotProps={{\n            action: {\n              component: "a",\n              href: "https://evervault.com/",\n              target: "_blank",\n              rel: "noreferrer noopener",\n            },\n          }}\n          sx={{\n            mb: 1,\n            minHeight: "initial",\n            padding: "1px",\n            overflow: "hidden",\n            "&::before": {\n              top: "-800%",\n              right: "-800%",\n              bottom: "-800%",\n              left: "-800%",\n              content: \'""\',\n              opacity: 0.75,\n              position: "absolute",\n              backgroundImage:\n                "conic-gradient(#f88fe9,#7000ff 20%,#58d2f2 50%,#fff 75%,#f88fe9 100%)",\n              animation: "spin 5s linear infinite",\n              transition: "opacity .25s",\n            },\n            "& > span": {\n              padding: "0 0.5rem",\n              bgcolor: "neutral.900",\n              borderRadius: "inherit",\n              height: "1.25rem",\n              lineHeight: "1.25rem",\n            },\n            "@keyframes spin": {\n              "0%": {\n                transform: "rotate(0)",\n              },\n              "100%": {\n                transform: "rotate(360deg)",\n              },\n            },\n          }}\n        >\n          Introducing AI Privacy — Learn more\n        </Chip>\n        <Typography\n          level="h1"\n          lineHeight="1"\n          fontWeight="md"\n          sx={{\n            textWrap: "balance",\n            background:\n              "radial-gradient(45% 100% at 50% 50%,#fff 40%,hsla(0,0%,100%,.45) 100%)",\n            WebkitTextFillColor: "transparent",\n            WebkitBackgroundClip: "text",\n            fontSize: {\n              md: "3.5rem",\n              lg: "4rem",\n            },\n          }}\n        >\n          Eliminate the risk of data breaches\n        </Typography>\n        <Typography level="body-sm" sx={{ textWrap: "pretty" }}>\n          Evervault is the first developer platform that lets you keep sensitive\n          data encrypted at all times, without compromising your ability to use\n          that data.\n        </Typography>\n        <ButtonGroup\n          variant="plain"\n          spacing={2}\n          sx={{ "& button, a": { borderRadius: "3rem" } }}\n        >\n          <Button\n            variant="solid"\n            {...{\n              component: "a",\n              href: "https://evervault.com/",\n              target: "_blank",\n              rel: "noreferrer noopener",\n            }}\n            sx={{ color: "neutral.900" }}\n          >\n            Request a demo\n          </Button>\n          <Button\n            variant="plain"\n            {...{\n              component: "a",\n              href: "https://evervault.com/",\n              target: "_blank",\n              rel: "noreferrer noopener",\n            }}\n          >\n            Try for free\n          </Button>\n        </ButtonGroup>\n      </Stack>\n      <Box\n        sx={{\n          display: {\n            xs: "none",\n            sm: "block",\n          },\n          ml: "2.5rem",\n          minHeight: "40vh",\n          borderRadius: "2.4rem",\n          border: "1px solid",\n          borderColor: "rgba(255, 255, 255, 0.2)",\n          background: "rgba(255, 255, 255, 0.1)",\n          backdropFilter: "blur(1rem)",\n          transform: "rotateY(-45deg)",\n        }}\n      />\n    </Sheet>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Landing/Main/Evervault"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone landing-main-evervault\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"landingmainevervault",children:"LandingMainEvervault"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LandingMainEvervaultraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);