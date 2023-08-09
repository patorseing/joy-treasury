"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[5751],{"./node_modules/@mui/base/useButton/useButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useButton});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/useIsFocusVisible.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),_utils_extractEventHandlers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/base/utils/extractEventHandlers.js");function useButton(parameters={}){const{disabled=!1,focusableWhenDisabled,href,rootRef:externalRef,tabIndex,to,type}=parameters,buttonRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),[active,setActive]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),{isFocusVisibleRef,onFocus:handleFocusVisible,onBlur:handleBlurVisible,ref:focusVisibleRef}=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.Z)(),[focusVisible,setFocusVisible]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);disabled&&!focusableWhenDisabled&&focusVisible&&setFocusVisible(!1),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{isFocusVisibleRef.current=focusVisible}),[focusVisible,isFocusVisibleRef]);const[hostElementName,setHostElementName]=react__WEBPACK_IMPORTED_MODULE_0__.useState(""),createHandleMouseLeave=otherHandlers=>event=>{var _otherHandlers$onMous;focusVisible&&event.preventDefault(),null==(_otherHandlers$onMous=otherHandlers.onMouseLeave)||_otherHandlers$onMous.call(otherHandlers,event)},createHandleBlur=otherHandlers=>event=>{var _otherHandlers$onBlur;handleBlurVisible(event),!1===isFocusVisibleRef.current&&setFocusVisible(!1),null==(_otherHandlers$onBlur=otherHandlers.onBlur)||_otherHandlers$onBlur.call(otherHandlers,event)},createHandleFocus=otherHandlers=>event=>{var _otherHandlers$onFocu2,_otherHandlers$onFocu;(buttonRef.current||(buttonRef.current=event.currentTarget),handleFocusVisible(event),!0===isFocusVisibleRef.current)&&(setFocusVisible(!0),null==(_otherHandlers$onFocu=otherHandlers.onFocusVisible)||_otherHandlers$onFocu.call(otherHandlers,event));null==(_otherHandlers$onFocu2=otherHandlers.onFocus)||_otherHandlers$onFocu2.call(otherHandlers,event)},isNativeButton=()=>{const button=buttonRef.current;return"BUTTON"===hostElementName||"INPUT"===hostElementName&&["button","submit","reset"].includes(null==button?void 0:button.type)||"A"===hostElementName&&(null==button?void 0:button.href)},createHandleClick=otherHandlers=>event=>{var _otherHandlers$onClic;disabled||(null==(_otherHandlers$onClic=otherHandlers.onClick)||_otherHandlers$onClic.call(otherHandlers,event))},createHandleMouseDown=otherHandlers=>event=>{var _otherHandlers$onMous2;disabled||(setActive(!0),document.addEventListener("mouseup",(()=>{setActive(!1)}),{once:!0})),null==(_otherHandlers$onMous2=otherHandlers.onMouseDown)||_otherHandlers$onMous2.call(otherHandlers,event)},createHandleKeyDown=otherHandlers=>event=>{var _otherHandlers$onKeyD,_otherHandlers$onClic2;(null==(_otherHandlers$onKeyD=otherHandlers.onKeyDown)||_otherHandlers$onKeyD.call(otherHandlers,event),event.defaultMuiPrevented)||(event.target!==event.currentTarget||isNativeButton()||" "!==event.key||event.preventDefault(),event.target!==event.currentTarget||" "!==event.key||disabled||setActive(!0),event.target!==event.currentTarget||isNativeButton()||"Enter"!==event.key||disabled||(null==(_otherHandlers$onClic2=otherHandlers.onClick)||_otherHandlers$onClic2.call(otherHandlers,event),event.preventDefault()))},createHandleKeyUp=otherHandlers=>event=>{var _otherHandlers$onKeyU,_otherHandlers$onClic3;(event.target===event.currentTarget&&setActive(!1),null==(_otherHandlers$onKeyU=otherHandlers.onKeyUp)||_otherHandlers$onKeyU.call(otherHandlers,event),event.target!==event.currentTarget||isNativeButton()||disabled||" "!==event.key||event.defaultMuiPrevented)||(null==(_otherHandlers$onClic3=otherHandlers.onClick)||_otherHandlers$onClic3.call(otherHandlers,event))},updateHostElementName=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((instance=>{var _instance$tagName;setHostElementName(null!=(_instance$tagName=null==instance?void 0:instance.tagName)?_instance$tagName:"")}),[]),handleRef=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(updateHostElementName,externalRef,focusVisibleRef,buttonRef),buttonProps={};"BUTTON"===hostElementName?(buttonProps.type=null!=type?type:"button",focusableWhenDisabled?buttonProps["aria-disabled"]=disabled:buttonProps.disabled=disabled):""!==hostElementName&&(href||to||(buttonProps.role="button",buttonProps.tabIndex=null!=tabIndex?tabIndex:0),disabled&&(buttonProps["aria-disabled"]=disabled,buttonProps.tabIndex=focusableWhenDisabled?null!=tabIndex?tabIndex:0:-1));return{getRootProps:(otherHandlers={})=>{const propsEventHandlers=(0,_utils_extractEventHandlers__WEBPACK_IMPORTED_MODULE_3__.Z)(parameters),externalEventHandlers=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},propsEventHandlers,otherHandlers);return delete externalEventHandlers.onFocusVisible,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({type},externalEventHandlers,buttonProps,{onBlur:createHandleBlur(externalEventHandlers),onClick:createHandleClick(externalEventHandlers),onFocus:createHandleFocus(externalEventHandlers),onKeyDown:createHandleKeyDown(externalEventHandlers),onKeyUp:createHandleKeyUp(externalEventHandlers),onMouseDown:createHandleMouseDown(externalEventHandlers),onMouseLeave:createHandleMouseLeave(externalEventHandlers),ref:handleRef})},focusVisible,setFocusVisible,active,rootRef:handleRef}}},"./node_modules/@mui/joy/ButtonGroup/ButtonGroupContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext({})},"./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getCardOverflowUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardOverflowUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiCardOverflow",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"])},"./node_modules/@mui/joy/IconButton/IconButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef/useForkRef.js"),_mui_base_useButton__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/base/useButton/useButton.js"),_mui_base_composeClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),_styles_ColorInversion__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),_utils_useSlot__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),_iconButtonClasses__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/IconButton/iconButtonClasses.js"),_ButtonGroup_ButtonGroupContext__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ButtonGroup/ButtonGroupContext.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","action","component","color","disabled","variant","size","slots","slotProps"],StyledIconButton=(0,_styles__WEBPACK_IMPORTED_MODULE_5__.Z)("button")((({theme,ownerState})=>{var _theme$variants,_theme$variants2,_theme$variants3,_theme$variants4;return[(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--Icon-margin":"initial","--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon},ownerState.instanceSize&&{"--IconButton-size":{sm:"2rem",md:"2.5rem",lg:"3rem"}[ownerState.instanceSize]},"sm"===ownerState.size&&{"--Icon-fontSize":"calc(var(--IconButton-size, 2rem) / 1.6)","--CircularProgress-size":"20px","--CircularProgress-thickness":"2px",minWidth:"var(--IconButton-size, 2rem)",minHeight:"var(--IconButton-size, 2rem)",fontSize:theme.vars.fontSize.sm,paddingInline:"2px"},"md"===ownerState.size&&{"--Icon-fontSize":"calc(var(--IconButton-size, 2.5rem) / 1.667)","--CircularProgress-size":"24px","--CircularProgress-thickness":"3px",minWidth:"var(--IconButton-size, 2.5rem)",minHeight:"var(--IconButton-size, 2.5rem)",fontSize:theme.vars.fontSize.md,paddingInline:"0.25rem"},"lg"===ownerState.size&&{"--Icon-fontSize":"calc(var(--IconButton-size, 3rem) / 1.714)","--CircularProgress-size":"28px","--CircularProgress-thickness":"4px",minWidth:"var(--IconButton-size, 3rem)",minHeight:"var(--IconButton-size, 3rem)",fontSize:theme.vars.fontSize.lg,paddingInline:"0.375rem"},{WebkitTapHighlightColor:"transparent",paddingBlock:0,fontFamily:theme.vars.fontFamily.body,fontWeight:theme.vars.fontWeight.md,margin:"var(--IconButton-margin)",borderRadius:`var(--IconButton-radius, ${theme.vars.radius.sm})`,border:"none",boxSizing:"border-box",backgroundColor:"transparent",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",[theme.focus.selector]:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--Icon-color":"currentColor"},theme.focus.default)}),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color],{"&:hover":{"@media (hover: hover)":(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--Icon-color":"currentColor"},null==(_theme$variants2=theme.variants[`${ownerState.variant}Hover`])?void 0:_theme$variants2[ownerState.color])},'&:active, &[aria-pressed="true"]':(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--Icon-color":"currentColor"},null==(_theme$variants3=theme.variants[`${ownerState.variant}Active`])?void 0:_theme$variants3[ownerState.color]),"&:disabled":(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({"--Icon-color":"currentColor"},null==(_theme$variants4=theme.variants[`${ownerState.variant}Disabled`])?void 0:_theme$variants4[ownerState.color])})]})),IconButtonRoot=(0,_styles__WEBPACK_IMPORTED_MODULE_5__.Z)(StyledIconButton,{name:"JoyIconButton",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),IconButton=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function IconButton(inProps,ref){var _inProps$disabled;const props=(0,_styles__WEBPACK_IMPORTED_MODULE_7__.Z)({props:inProps,name:"JoyIconButton"}),{children,action,component="button",color:colorProp="neutral",disabled:disabledProp,variant:variantProp="plain",size:sizeProp="md",slots={},slotProps={}}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__.Z)(props,_excluded),buttonGroup=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_ButtonGroup_ButtonGroupContext__WEBPACK_IMPORTED_MODULE_9__.Z),variant=inProps.variant||buttonGroup.variant||variantProp,size=inProps.size||buttonGroup.size||sizeProp,{getColor}=(0,_styles_ColorInversion__WEBPACK_IMPORTED_MODULE_10__.VT)(variant),color=getColor(inProps.color,buttonGroup.color||colorProp),disabled=null!=(_inProps$disabled=inProps.disabled)?_inProps$disabled:buttonGroup.disabled||disabledProp,buttonRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),handleRef=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_11__.Z)(buttonRef,ref),{focusVisible,setFocusVisible,getRootProps}=(0,_mui_base_useButton__WEBPACK_IMPORTED_MODULE_12__.Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{disabled,rootRef:handleRef}));react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(action,(()=>({focusVisible:()=>{var _buttonRef$current;setFocusVisible(!0),null==(_buttonRef$current=buttonRef.current)||_buttonRef$current.focus()}})),[setFocusVisible]);const ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},props,{component,color,disabled,variant,size,focusVisible,instanceSize:inProps.size}),classes=(ownerState=>{const{color,disabled,focusVisible,focusVisibleClassName,size,variant}=ownerState,slots={root:["root",disabled&&"disabled",focusVisible&&"focusVisible",variant&&`variant${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(variant)}`,color&&`color${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(color)}`,size&&`size${(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(size)}`]},composedClasses=(0,_mui_base_composeClasses__WEBPACK_IMPORTED_MODULE_3__.Z)(slots,_iconButtonClasses__WEBPACK_IMPORTED_MODULE_4__.r,{});return focusVisible&&focusVisibleClassName&&(composedClasses.root+=` ${focusVisibleClassName}`),composedClasses})(ownerState),externalForwardedProps=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,_utils_useSlot__WEBPACK_IMPORTED_MODULE_13__.Z)("root",{ref,className:classes.root,elementType:IconButtonRoot,getSlotProps:getRootProps,externalForwardedProps,ownerState});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.Z)({},rootProps,{children}))}));IconButton.muiName="IconButton";const __WEBPACK_DEFAULT_EXPORT__=IconButton},"./node_modules/@mui/joy/IconButton/iconButtonClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>getIconButtonUtilityClass});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getIconButtonUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiIconButton",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiIconButton",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","focusVisible","disabled","sizeSm","sizeMd","sizeLg"])},"./node_modules/@mui/utils/esm/useId/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let globalId=0;const maybeReactUseId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()];function useId(idOverride){if(void 0!==maybeReactUseId){const reactId=maybeReactUseId();return null!=idOverride?idOverride:reactId}return function useGlobalId(idOverride){const[defaultId,setDefaultId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride),id=idOverride||defaultId;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{null==defaultId&&(globalId+=1,setDefaultId(`mui-${globalId}`))}),[defaultId]),id}(idOverride)}},"./blocks/card-cover-travel/src/CardCoverTravel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Block:()=>Block,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardCoverTravel_stories});__webpack_require__("./node_modules/react/index.js");var Chip=__webpack_require__("./node_modules/@mui/joy/Chip/Chip.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardCover=__webpack_require__("./node_modules/@mui/joy/CardCover/CardCover.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),Link=__webpack_require__("./node_modules/@mui/joy/Link/Link.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),IconButton=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardCoverTravel(){return(0,jsx_runtime.jsxs)(Card.Z,{variant:"solid",invertedColors:!0,size:"lg",sx:{minHeight:240,boxShadow:"lg"},children:[(0,jsx_runtime.jsx)(CardCover.Z,{children:(0,jsx_runtime.jsx)("img",{src:"https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"})}),(0,jsx_runtime.jsx)(CardCover.Z,{sx:{background:"linear-gradient(to top, rgba(0 0 0 / 0.8), rgba(0 0 0 / 0) 200px)"}}),(0,jsx_runtime.jsxs)(CardContent.Z,{sx:{justifyContent:"flex-end",gap:1},children:[(0,jsx_runtime.jsx)(Chip.Z,{size:"sm",variant:"soft",sx:{borderRadius:"sm",backdropFilter:"blur(4px)",fontWeight:"lg"},children:"Travel"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:(0,jsx_runtime.jsx)(Link.Z,{textColor:"inherit",underline:"none",overlay:!0,href:"#",sx:{"--joy-palette-focusVisible":theme=>theme.vars.palette.primary[500]},children:"5 Best Places to Travel in Thailand"})}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})}),children:"Siriwat K."})]}),(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",sx:{position:"absolute",gap:1,top:"0.5rem",right:"0.5rem","& > button":{backdropFilter:"blur(4px)"}},children:[(0,jsx_runtime.jsx)(IconButton.ZP,{size:"sm",children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})})})}),(0,jsx_runtime.jsx)(IconButton.ZP,{size:"sm",children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"})})})})]})]})}CardCoverTravel.displayName="CardCoverTravel";const CardCoverTravel_stories={title:"Card/Cover/Travel",component:CardCoverTravel,parameters:{layout:"centered"}},Block={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:400,maxWidth:"100%"},children:(0,jsx_runtime.jsx)(CardCoverTravel,{})})};Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 400,\n    maxWidth: "100%"\n  }}>\n      <CardCoverTravel />\n    </div>\n}',...Block.parameters?.docs?.source}}};const __namedExportsOrder=["Block"]}}]);