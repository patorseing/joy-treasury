"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[361],{"./node_modules/@mui/joy/ButtonGroup/ButtonGroup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ButtonGroup_ButtonGroup});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");var capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),isMuiElement=__webpack_require__("./node_modules/@mui/utils/esm/isMuiElement.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styleUtils=__webpack_require__("./node_modules/@mui/joy/styles/styleUtils.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getButtonGroupUtilityClass(slot){return(0,className.d6)("MuiButtonGroup",slot)}(0,className.sI)("MuiButtonGroup",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg","horizontal","vertical"]);var ButtonGroupContext=__webpack_require__("./node_modules/@mui/joy/ButtonGroup/ButtonGroupContext.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),buttonClasses=__webpack_require__("./node_modules/@mui/joy/Button/buttonClasses.js"),iconButtonClasses=__webpack_require__("./node_modules/@mui/joy/IconButton/iconButtonClasses.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["buttonFlex","className","component","disabled","size","color","variant","children","orientation","slots","slotProps","spacing"],StyledButtonGroup=(0,styled.Z)("div")((({theme,ownerState})=>{var _theme$variants$outli,_theme$variants$outli2,_theme$variants$outli3;const{borderRadius:radius}=(0,styleUtils.V)({theme,ownerState},["borderRadius"]),firstChildRadius="vertical"===ownerState.orientation?"var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius)":"var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius)",lastChildRadius="vertical"===ownerState.orientation?"var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius)":"var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius)",margin="vertical"===ownerState.orientation?"calc(var(--ButtonGroup-separatorSize) * -1) 0 0 0":"0 0 0 calc(var(--ButtonGroup-separatorSize) * -1)",styles={};((breakpoints,responsive,iterator)=>{const smallestBreakpoint=breakpoints.keys[0];Array.isArray(responsive)?responsive.forEach(((breakpointValue,index)=>{iterator(((responsiveStyles,style)=>{index<=breakpoints.keys.length-1&&(0===index?Object.assign(responsiveStyles,style):responsiveStyles[breakpoints.up(breakpoints.keys[index])]=style)}),breakpointValue)})):responsive&&"object"==typeof responsive?(Object.keys(responsive).length>breakpoints.keys.length?breakpoints.keys:(breakpointsKeys=breakpoints.keys,responsiveKeys=Object.keys(responsive),breakpointsKeys.filter((key=>responsiveKeys.includes(key))))).forEach((key=>{if(-1!==breakpoints.keys.indexOf(key)){const breakpointValue=responsive[key];void 0!==breakpointValue&&iterator(((responsiveStyles,style)=>{smallestBreakpoint===key?Object.assign(responsiveStyles,style):responsiveStyles[breakpoints.up(key)]=style}),breakpointValue)}})):"number"!=typeof responsive&&"string"!=typeof responsive||iterator(((responsiveStyles,style)=>{Object.assign(responsiveStyles,style)}),responsive);var breakpointsKeys,responsiveKeys})(theme.breakpoints,ownerState.spacing,((appendStyle,value)=>{var _theme$spacing;null!==value&&appendStyle(styles,{"--ButtonGroup-connected":value.toString().match(/^0(?!\.)/)?"1":"0",gap:"string"==typeof value?value:null==(_theme$spacing=theme.spacing)?void 0:_theme$spacing.call(theme,value)})}));const outlinedStyle=null==(_theme$variants$outli=theme.variants.outlined)?void 0:_theme$variants$outli[ownerState.color],outlinedDisabledStyle=null==(_theme$variants$outli2=theme.variants.outlinedDisabled)?void 0:_theme$variants$outli2[ownerState.color],outlinedHoverStyle=null==(_theme$variants$outli3=theme.variants.outlinedHover)?void 0:_theme$variants$outli3[ownerState.color];return[(0,esm_extends.Z)({"--ButtonGroup-separatorSize":"outlined"===ownerState.variant?"1px":"calc(var(--ButtonGroup-connected) * 1px)","--ButtonGroup-separatorColor":null==outlinedStyle?void 0:outlinedStyle.borderColor,"--ButtonGroup-radius":theme.vars.radius.sm,"--Divider-inset":"0.5rem","--unstable_childRadius":"calc((1 - var(--ButtonGroup-connected)) * var(--ButtonGroup-radius) - var(--variant-borderWidth, 0px))"},styles,{display:"flex",borderRadius:"var(--ButtonGroup-radius)",flexDirection:"vertical"===ownerState.orientation?"column":"row","& > [data-first-child]":(0,esm_extends.Z)({"--Button-radius":firstChildRadius,"--IconButton-radius":firstChildRadius},"horizontal"===ownerState.orientation&&{borderRight:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"},"vertical"===ownerState.orientation&&{borderBottom:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"}),"& > :not([data-first-child]):not([data-last-child]):not(:only-child)":(0,esm_extends.Z)({"--Button-radius":"var(--unstable_childRadius)","--IconButton-radius":"var(--unstable_childRadius)",borderRadius:"var(--unstable_childRadius)"},"horizontal"===ownerState.orientation&&{borderLeft:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)",borderRight:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"},"vertical"===ownerState.orientation&&{borderTop:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)",borderBottom:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"}),"& > [data-last-child]":(0,esm_extends.Z)({"--Button-radius":lastChildRadius,"--IconButton-radius":lastChildRadius},"horizontal"===ownerState.orientation&&{borderLeft:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"},"vertical"===ownerState.orientation&&{borderTop:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"}),"& > :only-child":{"--Button-radius":"var(--ButtonGroup-radius)","--IconButton-radius":"var(--ButtonGroup-radius)"},"& > :not([data-first-child]):not(:only-child)":{"--Button-margin":margin,"--IconButton-margin":margin},[`& .${buttonClasses.Z.root}, & .${iconButtonClasses.Z.root}`]:(0,esm_extends.Z)({"&:not(:disabled)":{zIndex:1},"&:disabled":{"--ButtonGroup-separatorColor":null==outlinedDisabledStyle?void 0:outlinedDisabledStyle.borderColor}},"outlined"===ownerState.variant&&{"&:hover":{"--ButtonGroup-separatorColor":null==outlinedHoverStyle?void 0:outlinedHoverStyle.borderColor}},{[`&:hover, ${theme.focus.selector}`]:{zIndex:2}})},ownerState.buttonFlex&&{[`& > *:not(.${iconButtonClasses.Z.root})`]:{flex:ownerState.buttonFlex},[`& > :not(button) > .${buttonClasses.Z.root}`]:{width:"100%"}}),void 0!==radius&&{"--ButtonGroup-radius":radius}]})),ButtonGroupRoot=(0,styled.Z)(StyledButtonGroup,{name:"JoyButtonGroup",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),ButtonGroup=react.forwardRef((function ButtonGroup(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyButtonGroup"}),{buttonFlex,className,component="div",disabled=!1,size="md",color="neutral",variant="outlined",children,orientation="horizontal",slots={},slotProps={},spacing=0}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{buttonFlex,color,component,orientation,spacing,size,variant}),classes=(ownerState=>{const{size,variant,color,orientation}=ownerState,slots={root:["root",orientation,variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`,size&&`size${(0,capitalize.Z)(size)}`]};return(0,composeClasses.Z)(slots,getButtonGroupUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ButtonGroupRoot,externalForwardedProps,additionalProps:{role:"group"},ownerState}),buttonGroupContext=react.useMemo((()=>({variant,color,size,disabled})),[variant,color,size,disabled]);return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(ButtonGroupContext.Z.Provider,{value:buttonGroupContext,children:react.Children.map(children,((child,index)=>{if(!react.isValidElement(child))return child;const extraProps={};if((0,isMuiElement.Z)(child,["Divider"])){extraProps.inset="inset"in child.props?child.props.inset:"context";const dividerOrientation="vertical"===orientation?"horizontal":"vertical";extraProps.orientation="orientation"in child.props?child.props.orientation:dividerOrientation,extraProps.role="presentation",extraProps.component="span"}return react.Children.count(children)>1&&(0===index&&(extraProps["data-first-child"]=""),index===react.Children.count(children)-1&&(extraProps["data-last-child"]="")),react.cloneElement(child,extraProps)}))})}))})),ButtonGroup_ButtonGroup=ButtonGroup},"./node_modules/@mui/joy/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Stack_Stack});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),styled=__webpack_require__("./node_modules/@mui/system/esm/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","direction","spacing","divider","children","className","useFlexGap"],defaultTheme=(0,createTheme.Z)(),defaultCreateStyledComponent=(0,styled.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root});function useThemePropsDefault(props){return(0,useThemeProps.Z)({props,name:"MuiStack",defaultTheme})}function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const style=({ownerState,theme})=>{let styles=(0,esm_extends.Z)({display:"flex",flexDirection:"column"},(0,breakpoints.k9)({theme},(0,breakpoints.P$)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.hB)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.P$)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.P$)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return ownerState.useFlexGap?{gap:(0,spacing.NA)(transformer,propValue)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing.NA)(transformer,propValue)}};var direction};styles=(0,deepmerge.Z)(styles,(0,breakpoints.k9)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.dt)(theme.breakpoints,styles),styles};var styles_styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js");const Stack=function createStack(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiStack"}=options,StackRoot=createStyledComponent(style),Stack=react.forwardRef((function Grid(inProps,ref){const themeProps=useThemeProps(inProps),props=(0,extendSxProp.Z)(themeProps),{component="div",direction="column",spacing=0,divider,children,className,useFlexGap=!1}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState={direction,spacing,useFlexGap},classes=(0,composeClasses.Z)({root:["root"]},(slot=>(0,generateUtilityClass.Z)(componentName,slot)),{});return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.Z)({as:component,ownerState,ref,className:(0,clsx.Z)(classes.root,className)},other,{children:divider?joinChildren(children,divider):children}))}));return Stack}({createStyledComponent:(0,styles_styled.Z)("div",{name:"JoyStack",slot:"Root",overridesResolver:(props,styles)=>styles.root}),useThemeProps:inProps=>(0,styles_useThemeProps.Z)({props:inProps,name:"JoyStack"})}),Stack_Stack=Stack},"./node_modules/@mui/system/esm/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/esm/createStyled.js").ZP)()},"./blocks/landing-main-evervault/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LandingMainEvervaultraw_namespaceObject='import React from "react";\nimport Box from "@mui/joy/Box";\nimport Button from "@mui/joy/Button";\nimport ButtonGroup from "@mui/joy/ButtonGroup";\nimport Chip from "@mui/joy/Chip";\nimport Sheet from "@mui/joy/Sheet";\nimport Stack from "@mui/joy/Stack";\nimport Typography from "@mui/joy/Typography";\n\nexport default function LandingMainEvervault() {\n  return (\n    <Sheet\n      variant="solid"\n      color="neutral"\n      invertedColors\n      sx={(theme) => ({\n        "--radiant-inner": "#220060",\n        "--radiant-outer": "#76d9ff",\n        height: "92svh",\n        display: "grid",\n        gridTemplateColumns: {\n          sm: "repeat(2, 1fr)",\n          md: "repeat(2, minmax(0, 500px))",\n        },\n        gap: { sm: "1rem", md: "2.5rem" },\n        alignItems: "center",\n        justifyContent: "center",\n        borderBottomLeftRadius: "2.4rem",\n        borderBottomRightRadius: "2.4rem",\n        background:\n          "radial-gradient(140% 107.13% at 50% 10%,var(--radiant-inner) 37.41%,#63e 69.27%,var(--radiant-outer) 100%)",\n        padding: "0 2rem",\n        margin: { md: "0 1.5rem" },\n        perspective: "1000px",\n        [theme.getColorSchemeSelector("dark")]: {\n          "--radiant-inner": "transparent",\n          "--radiant-outer": "#fff",\n        },\n      })}\n    >\n      <Stack useFlexGap spacing={2}>\n        <Chip\n          size="sm"\n          slotProps={{\n            action: {\n              component: "a",\n              href: "https://evervault.com/",\n              target: "_blank",\n              rel: "noreferrer noopener",\n            },\n          }}\n          sx={{\n            mb: 1,\n            minHeight: "initial",\n            padding: "1px",\n            overflow: "hidden",\n            "&::before": {\n              top: "-800%",\n              right: "-800%",\n              bottom: "-800%",\n              left: "-800%",\n              content: \'""\',\n              opacity: 0.75,\n              position: "absolute",\n              backgroundImage:\n                "conic-gradient(#f88fe9,#7000ff 20%,#58d2f2 50%,#fff 75%,#f88fe9 100%)",\n              animation: "spin 5s linear infinite",\n              transition: "opacity .25s",\n            },\n            "& > span": {\n              padding: "0 0.5rem",\n              bgcolor: "neutral.900",\n              borderRadius: "inherit",\n              height: "1.25rem",\n              lineHeight: "1.25rem",\n            },\n            "@keyframes spin": {\n              "0%": {\n                transform: "rotate(0)",\n              },\n              "100%": {\n                transform: "rotate(360deg)",\n              },\n            },\n          }}\n        >\n          Introducing AI Privacy — Learn more\n        </Chip>\n        <Typography\n          level="h1"\n          lineHeight="1"\n          fontWeight="md"\n          sx={{\n            textWrap: "balance",\n            background:\n              "radial-gradient(45% 100% at 50% 50%,#fff 40%,hsla(0,0%,100%,.45) 100%)",\n            WebkitTextFillColor: "transparent",\n            WebkitBackgroundClip: "text",\n            fontSize: {\n              md: "3.5rem",\n              lg: "4rem",\n            },\n          }}\n        >\n          Eliminate the risk of data breaches\n        </Typography>\n        <Typography level="body-sm" sx={{ textWrap: "pretty" }}>\n          Evervault is the first developer platform that lets you keep sensitive\n          data encrypted at all times, without compromising your ability to use\n          that data.\n        </Typography>\n        <ButtonGroup\n          variant="plain"\n          spacing={2}\n          sx={{ "& button, a": { borderRadius: "3rem" } }}\n        >\n          <Button\n            variant="solid"\n            {...{\n              component: "a",\n              href: "https://evervault.com/",\n              target: "_blank",\n              rel: "noreferrer noopener",\n            }}\n            sx={{ color: "neutral.900" }}\n          >\n            Request a demo\n          </Button>\n          <Button\n            variant="plain"\n            {...{\n              component: "a",\n              href: "https://evervault.com/",\n              target: "_blank",\n              rel: "noreferrer noopener",\n            }}\n          >\n            Try for free\n          </Button>\n        </ButtonGroup>\n      </Stack>\n      <Box\n        sx={{\n          display: {\n            xs: "none",\n            sm: "block",\n          },\n          ml: "2.5rem",\n          minHeight: "40vh",\n          borderRadius: "2.4rem",\n          border: "1px solid",\n          borderColor: "rgba(255, 255, 255, 0.2)",\n          background: "rgba(255, 255, 255, 0.1)",\n          backdropFilter: "blur(1rem)",\n          transform: "rotateY(-45deg)",\n        }}\n      />\n    </Sheet>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Landing/Main/Evervault"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone landing-main-evervault\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"landingmainevervault",children:"LandingMainEvervault"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LandingMainEvervaultraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/landing-main-evervault/src/LandingMainEvervault.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Evervault:()=>Evervault,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LandingMainEvervault_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/landing-main-evervault/usage.mdx"),Box=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),Button=__webpack_require__("./node_modules/@mui/joy/Button/Button.js"),ButtonGroup=__webpack_require__("./node_modules/@mui/joy/ButtonGroup/ButtonGroup.js"),Chip=__webpack_require__("./node_modules/@mui/joy/Chip/Chip.js"),Sheet=__webpack_require__("./node_modules/@mui/joy/Sheet/Sheet.js"),Stack=__webpack_require__("./node_modules/@mui/joy/Stack/Stack.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function LandingMainEvervault(){return(0,jsx_runtime.jsxs)(Sheet.Z,{variant:"solid",color:"neutral",invertedColors:!0,sx:theme=>({"--radiant-inner":"#220060","--radiant-outer":"#76d9ff",height:"92svh",display:"grid",gridTemplateColumns:{sm:"repeat(2, 1fr)",md:"repeat(2, minmax(0, 500px))"},gap:{sm:"1rem",md:"2.5rem"},alignItems:"center",justifyContent:"center",borderBottomLeftRadius:"2.4rem",borderBottomRightRadius:"2.4rem",background:"radial-gradient(140% 107.13% at 50% 10%,var(--radiant-inner) 37.41%,#63e 69.27%,var(--radiant-outer) 100%)",padding:"0 2rem",margin:{md:"0 1.5rem"},perspective:"1000px",[theme.getColorSchemeSelector("dark")]:{"--radiant-inner":"transparent","--radiant-outer":"#fff"}}),children:[(0,jsx_runtime.jsxs)(Stack.Z,{useFlexGap:!0,spacing:2,children:[(0,jsx_runtime.jsx)(Chip.Z,{size:"sm",slotProps:{action:{component:"a",href:"https://evervault.com/",target:"_blank",rel:"noreferrer noopener"}},sx:{mb:1,minHeight:"initial",padding:"1px",overflow:"hidden","&::before":{top:"-800%",right:"-800%",bottom:"-800%",left:"-800%",content:'""',opacity:.75,position:"absolute",backgroundImage:"conic-gradient(#f88fe9,#7000ff 20%,#58d2f2 50%,#fff 75%,#f88fe9 100%)",animation:"spin 5s linear infinite",transition:"opacity .25s"},"& > span":{padding:"0 0.5rem",bgcolor:"neutral.900",borderRadius:"inherit",height:"1.25rem",lineHeight:"1.25rem"},"@keyframes spin":{"0%":{transform:"rotate(0)"},"100%":{transform:"rotate(360deg)"}}},children:"Introducing AI Privacy — Learn more"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"h1",lineHeight:"1",fontWeight:"md",sx:{textWrap:"balance",background:"radial-gradient(45% 100% at 50% 50%,#fff 40%,hsla(0,0%,100%,.45) 100%)",WebkitTextFillColor:"transparent",WebkitBackgroundClip:"text",fontSize:{md:"3.5rem",lg:"4rem"}},children:"Eliminate the risk of data breaches"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",sx:{textWrap:"pretty"},children:"Evervault is the first developer platform that lets you keep sensitive data encrypted at all times, without compromising your ability to use that data."}),(0,jsx_runtime.jsxs)(ButtonGroup.Z,{variant:"plain",spacing:2,sx:{"& button, a":{borderRadius:"3rem"}},children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"solid",component:"a",href:"https://evervault.com/",target:"_blank",rel:"noreferrer noopener",sx:{color:"neutral.900"},children:"Request a demo"}),(0,jsx_runtime.jsx)(Button.Z,{variant:"plain",component:"a",href:"https://evervault.com/",target:"_blank",rel:"noreferrer noopener",children:"Try for free"})]})]}),(0,jsx_runtime.jsx)(Box.Z,{sx:{display:{xs:"none",sm:"block"},ml:"2.5rem",minHeight:"40vh",borderRadius:"2.4rem",border:"1px solid",borderColor:"rgba(255, 255, 255, 0.2)",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(1rem)",transform:"rotateY(-45deg)"}})]})}LandingMainEvervault.displayName="LandingMainEvervault";const LandingMainEvervault_stories={title:"Landing/Main/Evervault",component:LandingMainEvervault,parameters:{layout:"fullscreen",githubUsername:"siriwatknp"},decorators:[(0,storyDialog.Z)(usage.default)]},Evervault={render:()=>(0,jsx_runtime.jsx)(LandingMainEvervault,{})};Evervault.parameters={...Evervault.parameters,docs:{...Evervault.parameters?.docs,source:{originalSource:"{\n  render: () => <LandingMainEvervault />\n}",...Evervault.parameters?.docs?.source}}};const __namedExportsOrder=["Evervault"]}}]);