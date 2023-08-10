"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[9224],{"./node_modules/@mui/joy/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card_Card});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),isMuiElement=__webpack_require__("./node_modules/@mui/utils/esm/isMuiElement.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardUtilityClass(slot){return(0,className.d6)("MuiCard",slot)}(0,className.sI)("MuiCard",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg","horizontal","vertical"]);var styleUtils=__webpack_require__("./node_modules/@mui/joy/styles/styleUtils.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","color","component","invertedColors","size","variant","children","orientation","slots","slotProps"],CardRoot=(0,styled.Z)("div",{name:"JoyCard",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$variants,_theme$colorInversion;const{p,padding,borderRadius}=(0,styleUtils.V)({theme,ownerState},["p","padding","borderRadius"]);return[(0,esm_extends.Z)({"--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,"--Card-childRadius":"max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))","--AspectRatio-radius":"var(--Card-childRadius)","--unstable_actionMargin":"calc(-1 * var(--variant-borderWidth, 0px))","--unstable_actionRadius":"var(--Card-radius)","--CardCover-radius":"calc(var(--Card-radius) - var(--variant-borderWidth, 0px))","--CardOverflow-offset":"calc(-1 * var(--Card-padding))","--CardOverflow-radius":"calc(var(--Card-radius) - var(--variant-borderWidth, 0px))","--Divider-inset":"calc(-1 * var(--Card-padding))"},"sm"===ownerState.size&&{"--Card-radius":theme.vars.radius.sm,"--Card-padding":"0.5rem",gap:"0.375rem 0.5rem"},"md"===ownerState.size&&{"--Card-radius":theme.vars.radius.md,"--Card-padding":"1rem",gap:"0.75rem 1rem"},"lg"===ownerState.size&&{"--Card-radius":theme.vars.radius.lg,"--Card-padding":"1.5rem",gap:"1rem 1.5rem"},{padding:"var(--Card-padding)",borderRadius:"var(--Card-radius)",boxShadow:theme.shadow.sm,backgroundColor:theme.vars.palette.background.surface,position:"relative",display:"flex",flexDirection:"horizontal"===ownerState.orientation?"row":"column"},theme.typography[`body-${ownerState.size}`],null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color]),"context"!==ownerState.color&&ownerState.invertedColors&&(null==(_theme$colorInversion=theme.colorInversion[ownerState.variant])?void 0:_theme$colorInversion[ownerState.color]),void 0!==p&&{"--Card-padding":p},void 0!==padding&&{"--Card-padding":padding},void 0!==borderRadius&&{"--Card-radius":borderRadius}]})),Card=react.forwardRef((function Card(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCard"}),{className,color:colorProp="neutral",component="div",invertedColors=!1,size="md",variant="plain",children,orientation="vertical",slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),ownerState=(0,esm_extends.Z)({},props,{color,component,orientation,size,variant}),classes=(ownerState=>{const{size,variant,color,orientation}=ownerState,slots={root:["root",orientation,variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`,size&&`size${(0,capitalize.Z)(size)}`]};return(0,composeClasses.Z)(slots,getCardUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardRoot,externalForwardedProps,ownerState}),result=(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:react.Children.map(children,((child,index)=>{if(!react.isValidElement(child))return child;const extraProps={};if((0,isMuiElement.Z)(child,["Divider"])){extraProps.inset="inset"in child.props?child.props.inset:"context";const dividerOrientation="vertical"===orientation?"horizontal":"vertical";extraProps.orientation="orientation"in child.props?child.props.orientation:dividerOrientation}return(0,isMuiElement.Z)(child,["CardOverflow"])&&("horizontal"===orientation&&(extraProps["data-parent"]="Card-horizontal"),"vertical"===orientation&&(extraProps["data-parent"]="Card-vertical")),0===index&&(extraProps["data-first-child"]=""),index===react.Children.count(children)-1&&(extraProps["data-last-child"]=""),react.cloneElement(child,extraProps)}))}));return invertedColors?(0,jsx_runtime.jsx)(ColorInversion.do,{variant,children:result}):result})),Card_Card=Card},"./node_modules/@mui/joy/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardContent_CardContent});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardContentUtilityClass(slot){return(0,className.d6)("MuiCardContent",slot)}(0,className.sI)("MuiCardContent",["root"]);var cardOverflowClasses=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","orientation","slots","slotProps"],CardContentRoot=(0,styled.Z)("div",{name:"JoyCardContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState})=>({display:"flex",flexDirection:"horizontal"===ownerState.orientation?"row":"column",flex:1,zIndex:1,columnGap:"var(--Card-padding)",padding:"var(--unstable_padding)",[`.${cardOverflowClasses.Z.root} > &`]:{"--unstable_padding":"calc(var(--Card-padding) * 0.75) 0px"}}))),CardContent=react.forwardRef((function CardContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCardContent"}),{className,component="div",children,orientation="vertical",slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),ownerState=(0,esm_extends.Z)({},props,{component,orientation}),classes=(0,composeClasses.Z)({root:["root"]},getCardContentUtilityClass,{}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardContentRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),CardContent_CardContent=CardContent},"./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getCardOverflowUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardOverflowUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiCardOverflow",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"])},"./node_modules/@mui/joy/Chip/Chip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Chip_Chip});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useButton=__webpack_require__("./node_modules/@mui/base/useButton/useButton.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useId=__webpack_require__("./node_modules/@mui/utils/esm/useId/useId.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),variantColorInheritance=__webpack_require__("./node_modules/@mui/joy/styles/variantColorInheritance.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),styleUtils=__webpack_require__("./node_modules/@mui/joy/styles/styleUtils.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getChipUtilityClass(slot){return(0,className.d6)("MuiChip",slot)}const Chip_chipClasses=(0,className.sI)("MuiChip",["root","clickable","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","disabled","endDecorator","focusVisible","label","labelSm","labelMd","labelLg","sizeSm","sizeMd","sizeLg","startDecorator","variantPlain","variantSolid","variantSoft","variantOutlined"]),ChipContext=react.createContext({disabled:void 0,variant:void 0,color:void 0});var useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","onClick","disabled","size","variant","startDecorator","endDecorator","component","slots","slotProps"],ChipRoot=(0,styled.Z)("div",{name:"JoyChip",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$variants,_theme$variants2,_theme$variants3;const variantStyle=null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color],{borderRadius}=(0,styleUtils.V)({theme,ownerState},["borderRadius"]);return[(0,esm_extends.Z)({"--Chip-decoratorChildOffset":"min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))","--Chip-decoratorChildRadius":"max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))","--Chip-deleteRadius":"var(--Chip-decoratorChildRadius)","--Chip-deleteSize":"var(--Chip-decoratorChildHeight)","--Avatar-radius":"var(--Chip-decoratorChildRadius)","--Avatar-size":"var(--Chip-decoratorChildHeight)","--Icon-margin":"initial","--Icon-color":"currentColor","--unstable_actionRadius":"var(--_Chip-radius)"},"sm"===ownerState.size&&{"--Chip-paddingInline":"0.5rem","--Chip-decoratorChildHeight":"calc(min(1.125rem, var(--_Chip-minHeight)) - 2 * var(--variant-borderWidth, 0px))","--Icon-fontSize":theme.vars.fontSize.sm,"--_Chip-minHeight":"var(--Chip-minHeight, 1.5rem)",gap:"0.25rem"},"md"===ownerState.size&&{"--Chip-paddingInline":"0.75rem","--Chip-decoratorChildHeight":"min(1.375rem, var(--_Chip-minHeight))","--Icon-fontSize":theme.vars.fontSize.lg,"--_Chip-minHeight":"var(--Chip-minHeight, 2rem)",gap:"0.375rem"},"lg"===ownerState.size&&{"--Chip-paddingInline":"1rem","--Chip-decoratorChildHeight":"min(1.75rem, var(--_Chip-minHeight))","--Icon-fontSize":theme.vars.fontSize.xl,"--_Chip-minHeight":"var(--Chip-minHeight, 2.5rem)",gap:"0.5rem"},{"--_Chip-radius":"var(--Chip-radius, 1.5rem)","--_Chip-paddingBlock":"max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)",minHeight:"var(--_Chip-minHeight)",maxWidth:"max-content",paddingInline:"var(--Chip-paddingInline)",borderRadius:"var(--_Chip-radius)",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",textDecoration:"none",verticalAlign:"middle",boxSizing:"border-box"},theme.typography[`body-${{sm:"xs",md:"sm",lg:"md"}[ownerState.size]}`],{fontWeight:theme.vars.fontWeight.md,[`&.${Chip_chipClasses.disabled}`]:{color:null==(_theme$variants2=theme.variants[`${ownerState.variant}Disabled`])||null==(_theme$variants2=_theme$variants2[ownerState.color])?void 0:_theme$variants2.color}}),...ownerState.clickable?[{"--variant-borderWidth":"0px",color:null==variantStyle?void 0:variantStyle.color}]:[(0,esm_extends.Z)({backgroundColor:theme.vars.palette.background.surface},variantStyle,{[`&.${Chip_chipClasses.disabled}`]:null==(_theme$variants3=theme.variants[`${ownerState.variant}Disabled`])?void 0:_theme$variants3[ownerState.color]})],void 0!==borderRadius&&{"--_Chip-radius":borderRadius}]})),ChipLabel=(0,styled.Z)("span",{name:"JoyChip",slot:"Label",overridesResolver:(props,styles)=>styles.label})((({ownerState})=>(0,esm_extends.Z)({display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",order:1,minInlineSize:0,flexGrow:1},ownerState.clickable&&{zIndex:1,pointerEvents:"none"}))),ChipAction=(0,styled.Z)("button",{name:"JoyChip",slot:"Action",overridesResolver:(props,styles)=>styles.action})((({theme,ownerState})=>{var _theme$variants4,_theme$variants5,_theme$variants6,_theme$variants7;return[{"--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,position:"absolute",zIndex:0,top:0,left:0,bottom:0,right:0,width:"100%",border:"none",cursor:"pointer",padding:"initial",margin:"initial",backgroundColor:"initial",textDecoration:"none",borderRadius:"inherit",[theme.focus.selector]:theme.focus.default},(0,esm_extends.Z)({backgroundColor:theme.vars.palette.background.surface},null==(_theme$variants4=theme.variants[ownerState.variant])?void 0:_theme$variants4[ownerState.color]),{"&:hover":null==(_theme$variants5=theme.variants[`${ownerState.variant}Hover`])?void 0:_theme$variants5[ownerState.color]},{"&:active":null==(_theme$variants6=theme.variants[`${ownerState.variant}Active`])?void 0:_theme$variants6[ownerState.color]},{[`&.${Chip_chipClasses.disabled}`]:null==(_theme$variants7=theme.variants[`${ownerState.variant}Disabled`])?void 0:_theme$variants7[ownerState.color]}]})),ChipStartDecorator=(0,styled.Z)("span",{name:"JoyChip",slot:"StartDecorator",overridesResolver:(props,styles)=>styles.startDecorator})({"--Avatar-marginInlineStart":"calc(var(--Chip-decoratorChildOffset) * -1)","--IconButton-margin":"0 0 0 calc(var(--Chip-decoratorChildOffset) * -1)","--Icon-margin":"0 0 0 calc(var(--Chip-paddingInline) / -4)",display:"inherit",order:0,zIndex:1,pointerEvents:"none"}),ChipEndDecorator=(0,styled.Z)("span",{name:"JoyChip",slot:"EndDecorator",overridesResolver:(props,styles)=>styles.endDecorator})({"--IconButton-margin":"0 calc(var(--Chip-decoratorChildOffset) * -1) 0 0","--Icon-margin":"0 calc(var(--Chip-paddingInline) / -4) 0 0",display:"inherit",order:2,zIndex:1,pointerEvents:"none"}),Chip=react.forwardRef((function Chip(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyChip"}),{children,className,color:colorProp="neutral",onClick,disabled=!1,size="md",variant="soft",startDecorator,endDecorator,component,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),clickable=!!onClick||!!slotProps.action,ownerState=(0,esm_extends.Z)({},props,{disabled,size,color,variant,clickable,focusVisible:!1}),resolvedActionProps="function"==typeof slotProps.action?slotProps.action(ownerState):slotProps.action,actionRef=react.useRef(null),{focusVisible,getRootProps}=(0,useButton.Z)((0,esm_extends.Z)({},resolvedActionProps,{disabled,rootRef:actionRef}));ownerState.focusVisible=focusVisible;const classes=(ownerState=>{const{disabled,size,color,clickable,variant,focusVisible}=ownerState,slots={root:["root",disabled&&"disabled",color&&`color${(0,capitalize.Z)(color)}`,size&&`size${(0,capitalize.Z)(size)}`,variant&&`variant${(0,capitalize.Z)(variant)}`,clickable&&"clickable"],action:["action",disabled&&"disabled",focusVisible&&"focusVisible"],label:["label",size&&`label${(0,capitalize.Z)(size)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,composeClasses.Z)(slots,getChipUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ChipRoot,externalForwardedProps,ownerState}),[SlotLabel,labelProps]=(0,useSlot.Z)("label",{className:classes.label,elementType:ChipLabel,externalForwardedProps,ownerState}),id=(0,useId.Z)(labelProps.id),[SlotAction,actionProps]=(0,useSlot.Z)("action",{className:classes.action,elementType:ChipAction,externalForwardedProps,ownerState,getSlotProps:getRootProps,additionalProps:{"aria-labelledby":id,as:null==resolvedActionProps?void 0:resolvedActionProps.component,onClick}}),[SlotStartDecorator,startDecoratorProps]=(0,useSlot.Z)("startDecorator",{className:classes.startDecorator,elementType:ChipStartDecorator,externalForwardedProps,ownerState}),[SlotEndDecorator,endDecoratorProps]=(0,useSlot.Z)("endDecorator",{className:classes.endDecorator,elementType:ChipEndDecorator,externalForwardedProps,ownerState}),chipContextValue=react.useMemo((()=>({disabled})),[disabled]);return(0,jsx_runtime.jsx)(ChipContext.Provider,{value:chipContextValue,children:(0,jsx_runtime.jsx)(variantColorInheritance.Yb,{variant,color:colorProp,children:(0,jsx_runtime.jsxs)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:[clickable&&(0,jsx_runtime.jsx)(SlotAction,(0,esm_extends.Z)({},actionProps)),(0,jsx_runtime.jsx)(SlotLabel,(0,esm_extends.Z)({},labelProps,{id,children})),startDecorator&&(0,jsx_runtime.jsx)(SlotStartDecorator,(0,esm_extends.Z)({},startDecoratorProps,{children:startDecorator})),endDecorator&&(0,jsx_runtime.jsx)(SlotEndDecorator,(0,esm_extends.Z)({},endDecoratorProps,{children:endDecorator}))]}))})})})),Chip_Chip=Chip},"./node_modules/@mui/joy/styles/variantColorInheritance.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yb:()=>VariantColorProvider,yP:()=>useVariantColor});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VariantColorContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);function useVariantColor(instanceVariant,instanceColor){const value=react__WEBPACK_IMPORTED_MODULE_0__.useContext(VariantColorContext),[variant,color]="string"==typeof value?value.split(":"):[],result=function getChildVariantAndColor(parentVariant,parentColor){let childColor=parentColor,childVariant=parentVariant;return"outlined"===parentVariant&&(childColor="neutral",childVariant="plain"),"plain"===parentVariant&&(childColor="neutral"),{variant:childVariant,color:childColor}}(variant||void 0,color||void 0);return result.variant=instanceVariant||result.variant,result.color=instanceColor||result.color,result}function VariantColorProvider({children,color,variant}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(VariantColorContext.Provider,{value:`${variant||""}:${color||""}`,children})}},"./node_modules/@mui/utils/esm/useId/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let globalId=0;const maybeReactUseId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()];function useId(idOverride){if(void 0!==maybeReactUseId){const reactId=maybeReactUseId();return null!=idOverride?idOverride:reactId}return function useGlobalId(idOverride){const[defaultId,setDefaultId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride),id=idOverride||defaultId;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{null==defaultId&&(globalId+=1,setDefaultId(`mui-${globalId}`))}),[defaultId]),id}(idOverride)}}}]);