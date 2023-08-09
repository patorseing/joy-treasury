"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[5926],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-travel-spa/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardTravelSparaw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Box from "@mui/joy/Box";\nimport Card from "@mui/joy/Card";\nimport CardActions from "@mui/joy/CardActions";\nimport CardOverflow from "@mui/joy/CardOverflow";\nimport CardContent from "@mui/joy/CardContent";\nimport CircularProgress from "@mui/joy/CircularProgress";\nimport Link from "@mui/joy/Link";\nimport Typography from "@mui/joy/Typography";\nimport SvgIcon from "@mui/joy/SvgIcon";\n\nexport default function CardTravelSpa() {\n  return (\n    <Card size="lg" sx={{ borderRadius: 0, boxShadow: "xl" }}>\n      <CardOverflow>\n        <AspectRatio ratio="7/5">\n          <img src="https://images.unsplash.com/photo-1470214203634-e436a8848e23" />\n        </AspectRatio>\n      </CardOverflow>\n      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>\n        <CardContent sx={{ gap: 1, flex: "max-content" }}>\n          <Typography\n            level="h2"\n            sx={{\n              fontFamily: (theme) =>\n                `Cormorant, ${theme.vars.fontFamily.display}`,\n            }}\n          >\n            Blissful Haven Spa\n          </Typography>\n          <Typography\n            level="body-sm"\n            fontWeight="lg"\n            startDecorator={\n              <SvgIcon>\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  viewBox="0 0 24 24"\n                  fill="currentColor"\n                >\n                  <path\n                    fillRule="evenodd"\n                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"\n                    clipRule="evenodd"\n                  />\n                </svg>\n              </SvgIcon>\n            }\n          >\n            Mystical valleys of Eldoria\n          </Typography>\n        </CardContent>\n        <Box sx={{ flex: "auto", textAlign: "center" }}>\n          <CircularProgress\n            color="success"\n            thickness={2}\n            determinate\n            value={91}\n            sx={{ "--CircularProgress-size": "52px", fontSize: "sm" }}\n          >\n            9.1\n          </CircularProgress>\n        </Box>\n      </CardContent>\n      <Typography level="body-sm" sx={{ my: 2 }}>\n        Rejuvenate Your Senses in a Serene Oasis of Tranquility, where expert\n        therapists pamper you with indulgent treatments, leaving you refreshed,\n        revitalized, and radiating with inner harmony.\n      </Typography>\n      <CardOverflow\n        sx={{\n          bgcolor: "background.level1",\n          borderTop: "1px solid",\n          borderColor: "divider",\n        }}\n      >\n        <CardActions sx={{ justifyContent: "space-between" }}>\n          <Typography level="body-xs">\n            From <Typography color="success">$ 2,500</Typography> for 8 nights\n          </Typography>\n          <Link\n            level="body-sm"\n            fontWeight="lg"\n            component="button"\n            endDecorator={\n              <SvgIcon>\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  viewBox="0 0 24 24"\n                  fill="currentColor"\n                >\n                  <path\n                    fillRule="evenodd"\n                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"\n                    clipRule="evenodd"\n                  />\n                </svg>\n              </SvgIcon>\n            }\n          >\n            Book now\n          </Link>\n        </CardActions>\n      </CardOverflow>\n    </Card>\n  );\n}\n',CardTravelSpaCoverraw_namespaceObject='import React from "react";\nimport Card from "@mui/joy/Card";\nimport CardCover from "@mui/joy/CardCover";\nimport CardContent from "@mui/joy/CardContent";\nimport CircularProgress from "@mui/joy/CircularProgress";\nimport Link from "@mui/joy/Link";\nimport Typography from "@mui/joy/Typography";\nimport SvgIcon from "@mui/joy/SvgIcon";\n\nexport default function CardTravelSpaCover() {\n  return (\n    <Card\n      variant="solid"\n      invertedColors\n      size="lg"\n      sx={{\n        borderRadius: 0,\n        boxShadow: "xl",\n        width: "100%",\n        height: "100%",\n      }}\n    >\n      <CardCover>\n        <img src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb" />\n      </CardCover>\n      <CardCover\n        sx={{\n          background:\n            "linear-gradient(5deg, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),linear-gradient(10deg, rgba(0,0,0,0.8), rgba(0,0,0,0) 190px)",\n        }}\n      />\n      <CardContent sx={{ justifyContent: "flex-end" }}>\n        <Typography\n          level="h1"\n          sx={{\n            textShadow: "0 0 0.25em rgba(0 0 0 / 0.5)",\n            fontFamily: (theme) =>\n              `Cormorant, ${theme.vars.fontFamily.display}`,\n            letterSpacing: 0,\n          }}\n        >\n          <Link href="#" overlay textColor="inherit" underline="none">\n            Blissful Haven Spa\n          </Link>\n        </Typography>\n        <Typography\n          level="body-sm"\n          fontWeight="lg"\n          startDecorator={\n            <SvgIcon>\n              <svg\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n                fill="currentColor"\n              >\n                <path\n                  fillRule="evenodd"\n                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"\n                  clipRule="evenodd"\n                />\n              </svg>\n            </SvgIcon>\n          }\n        >\n          Mystical valleys of Eldoria\n        </Typography>\n      </CardContent>\n      <CardContent\n        orientation="horizontal"\n        sx={{\n          flex: "none",\n          alignItems: "center",\n          justifyContent: "space-between",\n        }}\n      >\n        <Typography textColor="text.secondary">\n          From <b>$ 2,500</b> for 8 nights\n        </Typography>\n        <CircularProgress\n          thickness={2}\n          determinate\n          value={91}\n          sx={{ "--CircularProgress-size": "52px", fontSize: "sm" }}\n        >\n          9.1\n        </CircularProgress>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Travel/Spa"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-travel-spa\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"font",children:"Font"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />\n<link\n  href="https://fonts.googleapis.com/css2?family=Cormorant&display=swap"\n  rel="stylesheet"\n/>\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardtravelspa",children:"CardTravelSpa"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardTravelSparaw_namespaceObject,language:"tsx"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardtravelspacover",children:"CardTravelSpaCover"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardTravelSpaCoverraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);