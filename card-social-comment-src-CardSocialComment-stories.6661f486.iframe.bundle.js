"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[3381],{"./node_modules/@mui/joy/ButtonGroup/ButtonGroup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ButtonGroup_ButtonGroup});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");var capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),isMuiElement=__webpack_require__("./node_modules/@mui/utils/esm/isMuiElement.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styleUtils=__webpack_require__("./node_modules/@mui/joy/styles/styleUtils.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getButtonGroupUtilityClass(slot){return(0,className.d6)("MuiButtonGroup",slot)}(0,className.sI)("MuiButtonGroup",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg","horizontal","vertical"]);var ButtonGroupContext=__webpack_require__("./node_modules/@mui/joy/ButtonGroup/ButtonGroupContext.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),buttonClasses=__webpack_require__("./node_modules/@mui/joy/Button/buttonClasses.js"),iconButtonClasses=__webpack_require__("./node_modules/@mui/joy/IconButton/iconButtonClasses.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["buttonFlex","className","component","disabled","size","color","variant","children","orientation","slots","slotProps","spacing"],StyledButtonGroup=(0,styled.Z)("div")((({theme,ownerState})=>{var _theme$variants$outli,_theme$variants$outli2,_theme$variants$outli3;const{borderRadius:radius}=(0,styleUtils.V)({theme,ownerState},["borderRadius"]),firstChildRadius="vertical"===ownerState.orientation?"var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius)":"var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius)",lastChildRadius="vertical"===ownerState.orientation?"var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius)":"var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius)",margin="vertical"===ownerState.orientation?"calc(var(--ButtonGroup-separatorSize) * -1) 0 0 0":"0 0 0 calc(var(--ButtonGroup-separatorSize) * -1)",styles={};((breakpoints,responsive,iterator)=>{const smallestBreakpoint=breakpoints.keys[0];Array.isArray(responsive)?responsive.forEach(((breakpointValue,index)=>{iterator(((responsiveStyles,style)=>{index<=breakpoints.keys.length-1&&(0===index?Object.assign(responsiveStyles,style):responsiveStyles[breakpoints.up(breakpoints.keys[index])]=style)}),breakpointValue)})):responsive&&"object"==typeof responsive?(Object.keys(responsive).length>breakpoints.keys.length?breakpoints.keys:(breakpointsKeys=breakpoints.keys,responsiveKeys=Object.keys(responsive),breakpointsKeys.filter((key=>responsiveKeys.includes(key))))).forEach((key=>{if(-1!==breakpoints.keys.indexOf(key)){const breakpointValue=responsive[key];void 0!==breakpointValue&&iterator(((responsiveStyles,style)=>{smallestBreakpoint===key?Object.assign(responsiveStyles,style):responsiveStyles[breakpoints.up(key)]=style}),breakpointValue)}})):"number"!=typeof responsive&&"string"!=typeof responsive||iterator(((responsiveStyles,style)=>{Object.assign(responsiveStyles,style)}),responsive);var breakpointsKeys,responsiveKeys})(theme.breakpoints,ownerState.spacing,((appendStyle,value)=>{var _theme$spacing;null!==value&&appendStyle(styles,{"--ButtonGroup-connected":value.toString().match(/^0(?!\.)/)?"1":"0",gap:"string"==typeof value?value:null==(_theme$spacing=theme.spacing)?void 0:_theme$spacing.call(theme,value)})}));const outlinedStyle=null==(_theme$variants$outli=theme.variants.outlined)?void 0:_theme$variants$outli[ownerState.color],outlinedDisabledStyle=null==(_theme$variants$outli2=theme.variants.outlinedDisabled)?void 0:_theme$variants$outli2[ownerState.color],outlinedHoverStyle=null==(_theme$variants$outli3=theme.variants.outlinedHover)?void 0:_theme$variants$outli3[ownerState.color];return[(0,esm_extends.Z)({"--ButtonGroup-separatorSize":"outlined"===ownerState.variant?"1px":"calc(var(--ButtonGroup-connected) * 1px)","--ButtonGroup-separatorColor":null==outlinedStyle?void 0:outlinedStyle.borderColor,"--ButtonGroup-radius":theme.vars.radius.sm,"--Divider-inset":"0.5rem","--unstable_childRadius":"calc((1 - var(--ButtonGroup-connected)) * var(--ButtonGroup-radius) - var(--variant-borderWidth, 0px))"},styles,{display:"flex",borderRadius:"var(--ButtonGroup-radius)",flexDirection:"vertical"===ownerState.orientation?"column":"row","& > [data-first-child]":(0,esm_extends.Z)({"--Button-radius":firstChildRadius,"--IconButton-radius":firstChildRadius},"horizontal"===ownerState.orientation&&{borderRight:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"},"vertical"===ownerState.orientation&&{borderBottom:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"}),"& > :not([data-first-child]):not([data-last-child]):not(:only-child)":(0,esm_extends.Z)({"--Button-radius":"var(--unstable_childRadius)","--IconButton-radius":"var(--unstable_childRadius)",borderRadius:"var(--unstable_childRadius)"},"horizontal"===ownerState.orientation&&{borderLeft:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)",borderRight:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"},"vertical"===ownerState.orientation&&{borderTop:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)",borderBottom:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"}),"& > [data-last-child]":(0,esm_extends.Z)({"--Button-radius":lastChildRadius,"--IconButton-radius":lastChildRadius},"horizontal"===ownerState.orientation&&{borderLeft:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"},"vertical"===ownerState.orientation&&{borderTop:"var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"}),"& > :only-child":{"--Button-radius":"var(--ButtonGroup-radius)","--IconButton-radius":"var(--ButtonGroup-radius)"},"& > :not([data-first-child]):not(:only-child)":{"--Button-margin":margin,"--IconButton-margin":margin},[`& .${buttonClasses.Z.root}, & .${iconButtonClasses.Z.root}`]:(0,esm_extends.Z)({"&:not(:disabled)":{zIndex:1},"&:disabled":{"--ButtonGroup-separatorColor":null==outlinedDisabledStyle?void 0:outlinedDisabledStyle.borderColor}},"outlined"===ownerState.variant&&{"&:hover":{"--ButtonGroup-separatorColor":null==outlinedHoverStyle?void 0:outlinedHoverStyle.borderColor}},{[`&:hover, ${theme.focus.selector}`]:{zIndex:2}})},ownerState.buttonFlex&&{[`& > *:not(.${iconButtonClasses.Z.root})`]:{flex:ownerState.buttonFlex},[`& > :not(button) > .${buttonClasses.Z.root}`]:{width:"100%"}}),void 0!==radius&&{"--ButtonGroup-radius":radius}]})),ButtonGroupRoot=(0,styled.Z)(StyledButtonGroup,{name:"JoyButtonGroup",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),ButtonGroup=react.forwardRef((function ButtonGroup(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyButtonGroup"}),{buttonFlex,className,component="div",disabled=!1,size="md",color="neutral",variant="outlined",children,orientation="horizontal",slots={},slotProps={},spacing=0}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{buttonFlex,color,component,orientation,spacing,size,variant}),classes=(ownerState=>{const{size,variant,color,orientation}=ownerState,slots={root:["root",orientation,variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`,size&&`size${(0,capitalize.Z)(size)}`]};return(0,composeClasses.Z)(slots,getButtonGroupUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ButtonGroupRoot,externalForwardedProps,additionalProps:{role:"group"},ownerState}),buttonGroupContext=react.useMemo((()=>({variant,color,size,disabled})),[variant,color,size,disabled]);return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(ButtonGroupContext.Z.Provider,{value:buttonGroupContext,children:react.Children.map(children,((child,index)=>{if(!react.isValidElement(child))return child;const extraProps={};if((0,isMuiElement.Z)(child,["Divider"])){extraProps.inset="inset"in child.props?child.props.inset:"context";const dividerOrientation="vertical"===orientation?"horizontal":"vertical";extraProps.orientation="orientation"in child.props?child.props.orientation:dividerOrientation,extraProps.role="presentation",extraProps.component="span"}return react.Children.count(children)>1&&(0===index&&(extraProps["data-first-child"]=""),index===react.Children.count(children)-1&&(extraProps["data-last-child"]="")),react.cloneElement(child,extraProps)}))})}))})),ButtonGroup_ButtonGroup=ButtonGroup},"./node_modules/@mui/joy/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Link_Link});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useIsFocusVisible=__webpack_require__("./node_modules/@mui/utils/esm/useIsFocusVisible.js"),useForkRef=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),isMuiElement=__webpack_require__("./node_modules/@mui/utils/esm/isMuiElement.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getLinkUtilityClass(slot){return(0,className.d6)("MuiLink",slot)}const Link_linkClasses=(0,className.sI)("MuiLink",["root","disabled","focusVisible","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","focusVisible","variantPlain","variantOutlined","variantSoft","variantSolid","underlineNone","underlineHover","underlineAlways","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","startDecorator","endDecorator"]);var Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["color","textColor","variant"],_excluded2=["children","disabled","onBlur","onFocus","level","overlay","underline","endDecorator","startDecorator","component","slots","slotProps"],StartDecorator=(0,styled.Z)("span",{name:"JoyLink",slot:"StartDecorator",overridesResolver:(props,styles)=>styles.startDecorator})((({ownerState})=>{var _ownerState$sx;return(0,esm_extends.Z)({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Link-gap, 0.375em), 0.75rem)"},"string"!=typeof ownerState.startDecorator&&("flex-start"===ownerState.alignItems||"flex-start"===(null==(_ownerState$sx=ownerState.sx)?void 0:_ownerState$sx.alignItems))&&{marginTop:"2px"})})),EndDecorator=(0,styled.Z)("span",{name:"JoyLink",slot:"endDecorator",overridesResolver:(props,styles)=>styles.endDecorator})((({ownerState})=>{var _ownerState$sx2;return(0,esm_extends.Z)({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"},"string"!=typeof ownerState.startDecorator&&("flex-start"===ownerState.alignItems||"flex-start"===(null==(_ownerState$sx2=ownerState.sx)?void 0:_ownerState$sx2.alignItems))&&{marginTop:"2px"})})),LinkRoot=(0,styled.Z)("a",{name:"JoyLink",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$vars$palette,_theme$vars$palette2,_theme$vars$palette3,_theme$variants$owner,_theme$variants,_theme$variants2,_theme$variants3;return[(0,esm_extends.Z)({"--Icon-fontSize":"1.25em","--Icon-color":"currentColor","--CircularProgress-size":"1.25em","--CircularProgress-thickness":"3px"},ownerState.level&&"inherit"!==ownerState.level&&theme.typography[ownerState.level],"inherit"===ownerState.level&&{font:"inherit"},"none"===ownerState.underline&&{textDecoration:"none"},"hover"===ownerState.underline&&{textDecoration:"none","&:hover":{textDecorationLine:"underline"}},"always"===ownerState.underline&&{textDecoration:"underline"},ownerState.startDecorator&&{verticalAlign:"bottom"},{textDecorationThickness:"max(0.08em, 1px)",textUnderlineOffset:"0.15em",display:"inline-flex",alignItems:"center",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:theme.vars.radius.xs,padding:0,cursor:"pointer",textDecorationColor:`var(--variant-outlinedBorder, rgba(${null==(_theme$vars$palette=theme.vars.palette[ownerState.color])?void 0:_theme$vars$palette.mainChannel} / var(--Link-underlineOpacity, 0.72)))`},ownerState.variant?(0,esm_extends.Z)({paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!ownerState.nesting&&{marginInline:"-0.25em"}):{color:`var(--variant-plainColor, rgba(${null==(_theme$vars$palette2=theme.vars.palette[ownerState.color])?void 0:_theme$vars$palette2.mainChannel} / 1))`,[`&.${Link_linkClasses.disabled}`]:{pointerEvents:"none",color:`var(--variant-plainDisabledColor, rgba(${null==(_theme$vars$palette3=theme.vars.palette[ownerState.color])?void 0:_theme$vars$palette3.mainChannel} / 0.6))`}},{userSelect:"none",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},ownerState.overlay?{position:"initial","&::after":{content:'""',display:"block",position:"absolute",top:0,left:0,bottom:0,right:0,borderRadius:"var(--unstable_actionRadius, inherit)",margin:"var(--unstable_actionMargin)"},[`${theme.focus.selector}`]:{"&::after":theme.focus.default}}:{position:"relative",[theme.focus.selector]:theme.focus.default}),ownerState.variant&&(0,esm_extends.Z)({},null==(_theme$variants$owner=theme.variants[ownerState.variant])?void 0:_theme$variants$owner[ownerState.color],{"&:hover":null==(_theme$variants=theme.variants[`${ownerState.variant}Hover`])?void 0:_theme$variants[ownerState.color],"&:active":null==(_theme$variants2=theme.variants[`${ownerState.variant}Active`])?void 0:_theme$variants2[ownerState.color],[`&.${Link_linkClasses.disabled}`]:null==(_theme$variants3=theme.variants[`${ownerState.variant}Disabled`])?void 0:_theme$variants3[ownerState.color]})]})),Link_Link=react.forwardRef((function Link(inProps,ref){const _useThemeProps=(0,useThemeProps.Z)({props:inProps,name:"JoyLink"}),{color="primary",textColor,variant}=_useThemeProps,themeProps=(0,objectWithoutPropertiesLoose.Z)(_useThemeProps,_excluded),nesting=react.useContext(Typography.FR),inheriting=react.useContext(Typography.eu),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color:textColor})),{children,disabled=!1,onBlur,onFocus,level:levelProp="body-md",overlay=!1,underline="hover",endDecorator,startDecorator,component,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded2),level=nesting||inheriting?inProps.level||"inherit":levelProp,{isFocusVisibleRef,onBlur:handleBlurVisible,onFocus:handleFocusVisible,ref:focusVisibleRef}=(0,useIsFocusVisible.Z)(),[focusVisible,setFocusVisible]=react.useState(!1),handleRef=(0,useForkRef.Z)(ref,focusVisibleRef),ownerState=(0,esm_extends.Z)({},props,{color,disabled,focusVisible,underline,variant,level,overlay,nesting}),classes=(ownerState=>{const{level,color,variant,underline,focusVisible,disabled}=ownerState,slots={root:["root",color&&`color${(0,capitalize.Z)(color)}`,disabled&&"disabled",focusVisible&&"focusVisible",level,underline&&`underline${(0,capitalize.Z)(underline)}`,variant&&`variant${(0,capitalize.Z)(variant)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,composeClasses.Z)(slots,getLinkUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{additionalProps:{onBlur:event=>{handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),onBlur&&onBlur(event)},onFocus:event=>{handleFocusVisible(event),!0===isFocusVisibleRef.current&&setFocusVisible(!0),onFocus&&onFocus(event)}},ref:handleRef,className:classes.root,elementType:LinkRoot,externalForwardedProps,ownerState}),[SlotStartDecorator,startDecoratorProps]=(0,useSlot.Z)("startDecorator",{className:classes.startDecorator,elementType:StartDecorator,externalForwardedProps,ownerState}),[SlotEndDecorator,endDecoratorProps]=(0,useSlot.Z)("endDecorator",{className:classes.endDecorator,elementType:EndDecorator,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(Typography.FR.Provider,{value:!0,children:(0,jsx_runtime.jsxs)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:[startDecorator&&(0,jsx_runtime.jsx)(SlotStartDecorator,(0,esm_extends.Z)({},startDecoratorProps,{children:startDecorator})),(0,isMuiElement.Z)(children,["Skeleton"])?react.cloneElement(children,{variant:children.props.variant||"inline"}):children,endDecorator&&(0,jsx_runtime.jsx)(SlotEndDecorator,(0,esm_extends.Z)({},endDecoratorProps,{children:endDecorator}))]}))})}))},"./blocks/card-social-comment/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardSocialCommentraw_namespaceObject='import React from "react";\nimport {\n  Avatar,\n  Box,\n  ButtonGroup,\n  Card,\n  CardContent,\n  IconButton,\n  Link,\n  List,\n  ListItem,\n  SvgIcon,\n  Typography,\n} from "@mui/joy";\n\nexport default function CardSocialComment() {\n  const comments = [\n    {\n      commentor: "Edward Clark",\n      commentAt: "14:07",\n      comments: [\n        <Typography>\n          The biggest change of design in 2019 will be the makeup of the people\n          doing the actual design work.\n        </Typography>,\n        <Typography>\n          <Link underline="none" variant="soft" color="primary">\n            @Steve\n          </Link>{" "}\n          please read this.\n        </Typography>,\n      ],\n      color: "success",\n    },\n    {\n      commentor: "Albert Ox",\n      commentAt: "13:37",\n      comments: [\n        <Typography>\n          We absolutely need to get smarter about privacy. Society is creeped\n          out by big tech and big data.\n        </Typography>,\n      ],\n      color: "warning",\n    },\n  ] as const;\n\n  const convertNameToAvatarText = (name: string) =>\n    name.split(" ").reduce((acc, word) => `${acc}${word[0] || ""}`, "");\n\n  return (\n    <Card sx={{ borderRadius: "xl" }}>\n      <CardContent>\n        <List\n          sx={{\n            py: 0,\n            "--ListItem-paddingLeft": 0,\n            "--ListItem-paddingRight": 0,\n          }}\n        >\n          {comments.map(({ commentor, commentAt, comments, color }) => (\n            <ListItem>\n              <Avatar color={color} sx={{ alignSelf: "flex-start" }}>\n                {convertNameToAvatarText(commentor)}\n              </Avatar>\n              <Box width="100%" marginLeft="8px" marginBottom="8px">\n                <Box\n                  display="flex"\n                  justifyContent="space-between"\n                  alignItems="center"\n                  marginBottom="4px"\n                >\n                  <Typography fontWeight="lg">{commentor}</Typography>\n                  <Typography fontSize="xs">{commentAt}</Typography>\n                </Box>\n                <Box\n                  paddingRight="32px"\n                  position="relative"\n                  sx={{\n                    "&:hover .MuiButtonGroup-root": {\n                      visibility: "visible",\n                      transform: "translateY(-100%)",\n                      opacity: 1,\n                    },\n                  }}\n                >\n                  {comments}\n                  <ButtonGroup\n                    variant="soft"\n                    color="neutral"\n                    size="sm"\n                    sx={{\n                      visibility: "hidden",\n                      opacity: 0,\n                      position: "absolute",\n                      top: "0px",\n                      right: "0px",\n                      transition: "0.2s",\n                      transform: "translateY(-50%)",\n                      "& .MuiIconButton-root": {\n                        bgcolor: "background.body",\n                        border: "1px solid",\n                        borderColor:\n                          "var(--variant-outlinedBorder, var(--joy-palette-neutral-outlinedBorder))",\n                      },\n                      "& .MuiIconButton-root:hover": {\n                        "--Icon-color": "var(--joy-palette-primary-600)",\n                      },\n                    }}\n                  >\n                    <IconButton>\n                      <SvgIcon>\n                        <svg\n                          width="24"\n                          height="24"\n                          viewBox="0 0 24 24"\n                          fill="none"\n                          stroke="currentColor"\n                          strokeWidth="2"\n                          strokeLinecap="round"\n                          strokeLinejoin="round"\n                          className="lucide lucide-corner-up-right"\n                        >\n                          <polyline points="15 14 20 9 15 4" />\n                          <path d="M4 20v-7a4 4 0 0 1 4-4h12" />\n                        </svg>\n                      </SvgIcon>\n                    </IconButton>\n                    <IconButton>\n                      <SvgIcon>\n                        <svg\n                          width="24"\n                          height="24"\n                          viewBox="0 0 24 24"\n                          fill="none"\n                          stroke="currentColor"\n                          strokeWidth="2"\n                          strokeLinecap="round"\n                          strokeLinejoin="round"\n                          className="lucide lucide-arrow-right"\n                        >\n                          <path d="M5 12h14" />\n                          <path d="m12 5 7 7-7 7" />\n                        </svg>\n                      </SvgIcon>\n                    </IconButton>\n                    <IconButton>\n                      <SvgIcon>\n                        <svg\n                          width="24"\n                          height="24"\n                          viewBox="0 0 24 24"\n                          fill="none"\n                          stroke="currentColor"\n                          strokeWidth="2"\n                          strokeLinecap="round"\n                          strokeLinejoin="round"\n                          className="lucide lucide-star"\n                        >\n                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />\n                        </svg>\n                      </SvgIcon>\n                    </IconButton>\n                    <IconButton>\n                      <SvgIcon>\n                        <svg\n                          width="24"\n                          height="24"\n                          viewBox="0 0 24 24"\n                          fill="none"\n                          stroke="currentColor"\n                          strokeWidth="2"\n                          strokeLinecap="round"\n                          strokeLinejoin="round"\n                          className="lucide lucide-more-horizontal"\n                        >\n                          <circle cx="12" cy="12" r="1" />\n                          <circle cx="19" cy="12" r="1" />\n                          <circle cx="5" cy="12" r="1" />\n                        </svg>\n                      </SvgIcon>\n                    </IconButton>\n                  </ButtonGroup>\n                </Box>\n              </Box>\n            </ListItem>\n          ))}\n        </List>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Social/Comment"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-social-comment\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardsocialcomment",children:"CardSocialComment"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardSocialCommentraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-social-comment/src/CardSocialComment.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Comment:()=>Comment,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardSocialComment_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-social-comment/usage.mdx"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),Link=__webpack_require__("./node_modules/@mui/joy/Link/Link.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),List=__webpack_require__("./node_modules/@mui/joy/List/List.js"),ListItem=__webpack_require__("./node_modules/@mui/joy/ListItem/ListItem.js"),Avatar=__webpack_require__("./node_modules/@mui/joy/Avatar/Avatar.js"),Box=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),ButtonGroup=__webpack_require__("./node_modules/@mui/joy/ButtonGroup/ButtonGroup.js"),IconButton=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardSocialComment(){const comments=[{commentor:"Edward Clark",commentAt:"14:07",comments:[(0,jsx_runtime.jsx)(Typography.ZP,{children:"The biggest change of design in 2019 will be the makeup of the people doing the actual design work."}),(0,jsx_runtime.jsxs)(Typography.ZP,{children:[(0,jsx_runtime.jsx)(Link.Z,{underline:"none",variant:"soft",color:"primary",children:"@Steve"})," ","please read this."]})],color:"success"},{commentor:"Albert Ox",commentAt:"13:37",comments:[(0,jsx_runtime.jsx)(Typography.ZP,{children:"We absolutely need to get smarter about privacy. Society is creeped out by big tech and big data."})],color:"warning"}];return(0,jsx_runtime.jsx)(Card.Z,{sx:{borderRadius:"xl"},children:(0,jsx_runtime.jsx)(CardContent.Z,{children:(0,jsx_runtime.jsx)(List.Z,{sx:{py:0,"--ListItem-paddingLeft":0,"--ListItem-paddingRight":0},children:comments.map((({commentor,commentAt,comments,color})=>{return(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(Avatar.Z,{color,sx:{alignSelf:"flex-start"},children:(name=commentor,name.split(" ").reduce(((acc,word)=>`${acc}${word[0]||""}`),""))}),(0,jsx_runtime.jsxs)(Box.Z,{width:"100%",marginLeft:"8px",marginBottom:"8px",children:[(0,jsx_runtime.jsxs)(Box.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px",children:[(0,jsx_runtime.jsx)(Typography.ZP,{fontWeight:"lg",children:commentor}),(0,jsx_runtime.jsx)(Typography.ZP,{fontSize:"xs",children:commentAt})]}),(0,jsx_runtime.jsxs)(Box.Z,{paddingRight:"32px",position:"relative",sx:{"&:hover .MuiButtonGroup-root":{visibility:"visible",transform:"translateY(-100%)",opacity:1}},children:[comments,(0,jsx_runtime.jsxs)(ButtonGroup.Z,{variant:"soft",color:"neutral",size:"sm",sx:{visibility:"hidden",opacity:0,position:"absolute",top:"0px",right:"0px",transition:"0.2s",transform:"translateY(-50%)","& .MuiIconButton-root":{bgcolor:"background.body",border:"1px solid",borderColor:"var(--variant-outlinedBorder, var(--joy-palette-neutral-outlinedBorder))"},"& .MuiIconButton-root:hover":{"--Icon-color":"var(--joy-palette-primary-600)"}},children:[(0,jsx_runtime.jsx)(IconButton.ZP,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-corner-up-right",children:[(0,jsx_runtime.jsx)("polyline",{points:"15 14 20 9 15 4"}),(0,jsx_runtime.jsx)("path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"})]})})}),(0,jsx_runtime.jsx)(IconButton.ZP,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-arrow-right",children:[(0,jsx_runtime.jsx)("path",{d:"M5 12h14"}),(0,jsx_runtime.jsx)("path",{d:"m12 5 7 7-7 7"})]})})}),(0,jsx_runtime.jsx)(IconButton.ZP,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-star",children:(0,jsx_runtime.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})})}),(0,jsx_runtime.jsx)(IconButton.ZP,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-more-horizontal",children:[(0,jsx_runtime.jsx)("circle",{cx:"12",cy:"12",r:"1"}),(0,jsx_runtime.jsx)("circle",{cx:"19",cy:"12",r:"1"}),(0,jsx_runtime.jsx)("circle",{cx:"5",cy:"12",r:"1"})]})})})]})]})]})]});var name}))})})})}CardSocialComment.displayName="CardSocialComment";const CardSocialComment_stories={title:"Card/Social/Comment",component:CardSocialComment,parameters:{layout:"centered",githubUsername:"Tlezip"},decorators:[(0,storyDialog.Z)(usage.default)]},Comment={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:340,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardSocialComment,{})})};Comment.parameters={...Comment.parameters,docs:{...Comment.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 340,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardSocialComment />\n    </div>\n}',...Comment.parameters?.docs?.source}}};const __namedExportsOrder=["Comment"]}}]);