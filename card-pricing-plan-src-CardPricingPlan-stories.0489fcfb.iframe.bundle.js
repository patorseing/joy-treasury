"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[1089],{"./blocks/card-pricing-plan/src/CardPricingPlan.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Block:()=>Block,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardPricingPlan_stories});var react=__webpack_require__("./node_modules/react/index.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),Chip=__webpack_require__("./node_modules/@mui/joy/Chip/Chip.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styleUtils=__webpack_require__("./node_modules/@mui/joy/styles/styleUtils.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getListUtilityClass(slot){return(0,className.d6)("MuiList",slot)}(0,className.sI)("MuiList",["root","nesting","scoped","sizeSm","sizeMd","sizeLg","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","horizontal","vertical"]);const List_NestedListContext=react.createContext(!1),List_ComponentListContext=react.createContext(void 0),List_GroupListContext=react.createContext(void 0),List_RowListContext=react.createContext(!1),List_WrapListContext=react.createContext(!1);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const List_ListProvider=function ListProvider(props){const{children,nested,row=!1,wrap=!1}=props,baseProviders=(0,jsx_runtime.jsx)(List_RowListContext.Provider,{value:row,children:(0,jsx_runtime.jsx)(List_WrapListContext.Provider,{value:wrap,children:react.Children.map(children,((child,index)=>react.isValidElement(child)?react.cloneElement(child,(0,esm_extends.Z)({},0===index&&{"data-first-child":""})):child))})});return void 0===nested?baseProviders:(0,jsx_runtime.jsx)(List_NestedListContext.Provider,{value:nested,children:baseProviders})};const RadioGroup_RadioGroupContext=react.createContext(void 0);var useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js");const _excluded=["component","className","children","size","orientation","wrap","variant","color","role","slots","slotProps"],StyledList=(0,styled.Z)("ul")((({theme,ownerState})=>{var _theme$variants;const{p,padding,borderRadius}=(0,styleUtils.V)({theme,ownerState},["p","padding","borderRadius"]);function applySizeVars(size){return"sm"===size?{"--ListDivider-gap":"0.25rem","--ListItem-minHeight":"2rem","--ListItem-paddingY":"0.25rem","--ListItem-paddingX":"0.5rem","--ListItemDecorator-size":"horizontal"===ownerState.orientation?"1.5rem":"2rem","--Icon-fontSize":theme.vars.fontSize.lg}:"md"===size?{"--ListDivider-gap":"0.375rem","--ListItem-minHeight":"2.5rem","--ListItem-paddingY":"0.375rem","--ListItem-paddingX":"0.75rem","--ListItemDecorator-size":"horizontal"===ownerState.orientation?"1.75rem":"2.5rem","--Icon-fontSize":theme.vars.fontSize.xl}:"lg"===size?{"--ListDivider-gap":"0.5rem","--ListItem-minHeight":"3rem","--ListItem-paddingY":"0.5rem","--ListItem-paddingX":"1rem","--ListItemDecorator-size":"horizontal"===ownerState.orientation?"2.25rem":"3rem","--Icon-fontSize":theme.vars.fontSize.xl2}:{}}return[ownerState.nesting&&(0,esm_extends.Z)({},applySizeVars(ownerState.instanceSize),{"--ListItem-paddingRight":"var(--ListItem-paddingX)","--ListItem-paddingLeft":"var(--NestedListItem-paddingLeft)","--ListItemButton-marginBlock":"0px","--ListItemButton-marginInline":"0px","--ListItem-marginBlock":"0px","--ListItem-marginInline":"0px",padding:0,marginInlineStart:"var(--NestedList-marginLeft)",marginInlineEnd:"var(--NestedList-marginRight)",marginBlockStart:"var(--List-gap)",marginBlockEnd:"initial"}),!ownerState.nesting&&(0,esm_extends.Z)({},applySizeVars(ownerState.size),{"--List-gap":"0px","--List-nestedInsetStart":"0px","--ListItem-paddingLeft":"var(--ListItem-paddingX)","--ListItem-paddingRight":"var(--ListItem-paddingX)","--unstable_List-childRadius":"calc(max(var(--List-radius) - var(--List-padding), min(var(--List-padding) / 2, var(--List-radius) / 2)) - var(--variant-borderWidth, 0px))","--ListItem-radius":"var(--unstable_List-childRadius)","--ListItem-startActionTranslateX":"calc(0.5 * var(--ListItem-paddingLeft))","--ListItem-endActionTranslateX":"calc(-0.5 * var(--ListItem-paddingRight))",margin:"initial"},theme.typography[`body-${ownerState.size}`],"horizontal"===ownerState.orientation?(0,esm_extends.Z)({},ownerState.wrap?{padding:"var(--List-padding)",marginInlineStart:"calc(-1 * var(--List-gap))",marginBlockStart:"calc(-1 * var(--List-gap))"}:{paddingInline:"var(--List-padding, var(--ListDivider-gap))",paddingBlock:"var(--List-padding)"}):{paddingBlock:"var(--List-padding, var(--ListDivider-gap))",paddingInline:"var(--List-padding)"}),(0,esm_extends.Z)({boxSizing:"border-box",borderRadius:"var(--List-radius)",listStyle:"none",display:"flex",flexDirection:"horizontal"===ownerState.orientation?"row":"column"},ownerState.wrap&&{flexWrap:"wrap"},{flexGrow:1,position:"relative"},null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color],{"--unstable_List-borderWidth":"var(--variant-borderWidth, 0px)"},void 0!==borderRadius&&{"--List-radius":borderRadius},void 0!==p&&{"--List-padding":p},void 0!==padding&&{"--List-padding":padding})]})),ListRoot=(0,styled.Z)(StyledList,{name:"JoyList",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),List=react.forwardRef((function List(inProps,ref){var _inProps$size;const nesting=react.useContext(List_NestedListContext),group=react.useContext(List_GroupListContext),radioGroupContext=react.useContext(RadioGroup_RadioGroupContext),props=(0,useThemeProps.Z)({props:inProps,name:"JoyList"}),{component,className,children,size:sizeProp,orientation="vertical",wrap=!1,variant="plain",color:colorProp="neutral",role:roleProp,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),size=sizeProp||(null!=(_inProps$size=inProps.size)?_inProps$size:"md");let role;group&&(role="group"),radioGroupContext&&(role="presentation"),roleProp&&(role=roleProp);const ownerState=(0,esm_extends.Z)({},props,{instanceSize:inProps.size,size,nesting,orientation,wrap,variant,color,role}),classes=(ownerState=>{const{variant,color,size,nesting,orientation,instanceSize}=ownerState,slots={root:["root",orientation,variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`,!instanceSize&&!nesting&&size&&`size${(0,capitalize.Z)(size)}`,instanceSize&&`size${(0,capitalize.Z)(instanceSize)}`,nesting&&"nesting"]};return(0,composeClasses.Z)(slots,getListUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ListRoot,externalForwardedProps,ownerState,additionalProps:{as:component,role,"aria-labelledby":"string"==typeof nesting?nesting:void 0}});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(List_ComponentListContext.Provider,{value:`${"string"==typeof component?component:""}:${role||""}`,children:(0,jsx_runtime.jsx)(List_ListProvider,{row:"horizontal"===orientation,wrap,children})})}))})),List_List=List;var isMuiElement=__webpack_require__("./node_modules/@mui/utils/esm/isMuiElement.js");function getListItemUtilityClass(slot){return(0,className.d6)("MuiListItem",slot)}(0,className.sI)("MuiListItem",["root","startAction","endAction","nested","nesting","sticky","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantSoft","variantOutlined","variantSolid"]);const ListSubheaderContext=react.createContext(void 0),ListItem_excluded=["component","className","children","nested","sticky","variant","color","startAction","endAction","role","slots","slotProps"],ListItemRoot=(0,styled.Z)("li",{name:"JoyListItem",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$variants;return[!ownerState.nested&&{"--ListItemButton-marginInline":"calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))","--ListItemButton-marginBlock":"calc(-1 * var(--ListItem-paddingY))",alignItems:"center",marginInline:"var(--ListItem-marginInline)"},ownerState.nested&&{"--NestedList-marginRight":"calc(-1 * var(--ListItem-paddingRight))","--NestedList-marginLeft":"calc(-1 * var(--ListItem-paddingLeft))","--NestedListItem-paddingLeft":"calc(var(--ListItem-paddingLeft) + var(--List-nestedInsetStart))","--ListItemButton-marginBlock":"0px","--ListItemButton-marginInline":"calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))","--ListItem-marginInline":"calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",flexDirection:"column"},(0,esm_extends.Z)({"--unstable_actionRadius":"calc(var(--ListItem-radius) - var(--variant-borderWidth, 0px))"},ownerState.startAction&&{"--unstable_startActionWidth":"2rem"},ownerState.endAction&&{"--unstable_endActionWidth":"2.5rem"},{boxSizing:"border-box",borderRadius:"var(--ListItem-radius)",display:"flex",flex:"none",position:"relative",paddingBlockStart:ownerState.nested?0:"var(--ListItem-paddingY)",paddingBlockEnd:ownerState.nested?0:"var(--ListItem-paddingY)",paddingInlineStart:"var(--ListItem-paddingLeft)",paddingInlineEnd:"var(--ListItem-paddingRight)"},void 0===ownerState["data-first-child"]&&(0,esm_extends.Z)({},ownerState.row?{marginInlineStart:"var(--List-gap)"}:{marginBlockStart:"var(--List-gap)"}),ownerState.row&&ownerState.wrap&&{marginInlineStart:"var(--List-gap)",marginBlockStart:"var(--List-gap)"},{minBlockSize:"var(--ListItem-minHeight)"},ownerState.sticky&&{position:"sticky",top:"var(--ListItem-stickyTop, 0px)",zIndex:1,background:`var(--ListItem-stickyBackground, ${theme.vars.palette.background.body})`}),null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color]]})),ListItemStartAction=(0,styled.Z)("div",{name:"JoyListItem",slot:"StartAction",overridesResolver:(props,styles)=>styles.startAction})((({ownerState})=>({display:"inherit",position:"absolute",top:ownerState.nested?"calc(var(--ListItem-minHeight) / 2)":"50%",left:0,transform:"translate(var(--ListItem-startActionTranslateX), -50%)",zIndex:1}))),ListItemEndAction=(0,styled.Z)("div",{name:"JoyListItem",slot:"StartAction",overridesResolver:(props,styles)=>styles.startAction})((({ownerState})=>({display:"inherit",position:"absolute",top:ownerState.nested?"calc(var(--ListItem-minHeight) / 2)":"50%",right:0,transform:"translate(var(--ListItem-endActionTranslateX), -50%)"}))),ListItem=react.forwardRef((function ListItem(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyListItem"}),group=react.useContext(List_GroupListContext),listComponent=react.useContext(List_ComponentListContext),row=react.useContext(List_RowListContext),wrap=react.useContext(List_WrapListContext),nesting=react.useContext(List_NestedListContext),{component:componentProp,className,children,nested=!1,sticky=!1,variant="plain",color:colorProp="neutral",startAction,endAction,role:roleProp,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,ListItem_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),[subheaderId,setSubheaderId]=react.useState(""),[listElement,listRole]=(null==listComponent?void 0:listComponent.split(":"))||["",""],component=componentProp||(listElement&&!listElement.match(/^(ul|ol|menu)$/)?"div":void 0);let role="menu"===group?"none":void 0;listComponent&&(role={menu:"none",menubar:"none",group:"presentation"}[listRole]),roleProp&&(role=roleProp);const ownerState=(0,esm_extends.Z)({},props,{sticky,startAction,endAction,row,wrap,variant,color,nesting,nested,component,role}),classes=(ownerState=>{const{sticky,nested,nesting,variant,color}=ownerState,slots={root:["root",nested&&"nested",nesting&&"nesting",sticky&&"sticky",color&&`color${(0,capitalize.Z)(color)}`,variant&&`variant${(0,capitalize.Z)(variant)}`],startAction:["startAction"],endAction:["endAction"]};return(0,composeClasses.Z)(slots,getListItemUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{additionalProps:{role},ref,className:(0,clsx.Z)(classes.root,className),elementType:ListItemRoot,externalForwardedProps,ownerState}),[SlotStartAction,startActionProps]=(0,useSlot.Z)("startAction",{className:classes.startAction,elementType:ListItemStartAction,externalForwardedProps,ownerState}),[SlotEndAction,endActionProps]=(0,useSlot.Z)("endAction",{className:classes.endAction,elementType:ListItemEndAction,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(ListSubheaderContext.Provider,{value:setSubheaderId,children:(0,jsx_runtime.jsx)(List_NestedListContext.Provider,{value:!!nested&&(subheaderId||!0),children:(0,jsx_runtime.jsxs)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:[startAction&&(0,jsx_runtime.jsx)(SlotStartAction,(0,esm_extends.Z)({},startActionProps,{children:startAction})),react.Children.map(children,((child,index)=>react.isValidElement(child)?react.cloneElement(child,(0,esm_extends.Z)({},0===index&&{"data-first-child":""},(0,isMuiElement.Z)(child,["ListItem"])&&{component:child.props.component||"div"})):child)),endAction&&(0,jsx_runtime.jsx)(SlotEndAction,(0,esm_extends.Z)({},endActionProps,{children:endAction}))]}))})})}));ListItem.muiName="ListItem";const ListItem_ListItem=ListItem;function getListItemDecoratorUtilityClass(slot){return(0,className.d6)("MuiListItemDecorator",slot)}(0,className.sI)("MuiListItemDecorator",["root"]);const ListItemButton_ListItemButtonOrientationContext=react.createContext("horizontal"),ListItemDecorator_excluded=["component","className","children","slots","slotProps"],ListItemDecoratorRoot=(0,styled.Z)("span",{name:"JoyListItemDecorator",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState})=>(0,esm_extends.Z)({boxSizing:"border-box",display:"inline-flex",alignItems:`var(--unstable_ListItemDecorator-alignItems, ${"horizontal"===ownerState.parentOrientation?"center":"initial"})`},"horizontal"===ownerState.parentOrientation?{minInlineSize:"var(--ListItemDecorator-size)"}:{minBlockSize:"var(--ListItemDecorator-size)",justifyContent:"center"}))),ListItemDecorator=react.forwardRef((function ListItemDecorator(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyListItemDecorator"}),{component,className,children,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,ListItemDecorator_excluded),parentOrientation=react.useContext(ListItemButton_ListItemButtonOrientationContext),ownerState=(0,esm_extends.Z)({parentOrientation},props),classes=(0,composeClasses.Z)({root:["root"]},getListItemDecoratorUtilityClass,{}),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ListItemDecoratorRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),ListItemDecorator_ListItemDecorator=ListItemDecorator;function getListItemContentUtilityClass(slot){return(0,className.d6)("MuiListItemContent",slot)}(0,className.sI)("MuiListItemContent",["root"]);const ListItemContent_excluded=["component","className","children","slots","slotProps"],ListItemContentRoot=(0,styled.Z)("div",{name:"JoyListItemContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({flex:"1 1 auto",minWidth:0}),ListItemContent=react.forwardRef((function ListItemContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyListItemContent"}),{component,className,children,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,ListItemContent_excluded),ownerState=(0,esm_extends.Z)({},props),classes=(0,composeClasses.Z)({root:["root"]},getListItemContentUtilityClass,{}),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ListItemContentRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),ListItemContent_ListItemContent=ListItemContent;var SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),CardActions=__webpack_require__("./node_modules/@mui/joy/CardActions/CardActions.js"),Button=__webpack_require__("./node_modules/@mui/joy/Button/Button.js");function CardPricingPlan(){const checkIcon=(0,jsx_runtime.jsx)(SvgIcon.Z,{sx:{mt:"2px"},children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})})});return(0,jsx_runtime.jsxs)(Card.Z,{variant:"soft",color:"primary",invertedColors:!0,sx:{borderRadius:"xl"},children:[(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",sx:{alignItems:"center"},children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"h3",sx:{flex:"auto"},children:"PRO"}),(0,jsx_runtime.jsx)(Chip.Z,{variant:"solid",size:"sm",sx:{borderRadius:"xs"},children:"Save $40"})]}),(0,jsx_runtime.jsxs)(List_List,{sx:{"& > li":{alignItems:"flex-start"}},children:[(0,jsx_runtime.jsxs)(ListItem_ListItem,{children:[(0,jsx_runtime.jsx)(ListItemDecorator_ListItemDecorator,{children:checkIcon}),(0,jsx_runtime.jsx)(ListItemContent_ListItemContent,{children:"Upload Video with HD Resolution"})]}),(0,jsx_runtime.jsxs)(ListItem_ListItem,{children:[(0,jsx_runtime.jsx)(ListItemDecorator_ListItemDecorator,{children:checkIcon}),(0,jsx_runtime.jsx)(ListItemContent_ListItemContent,{children:"Attachment and Post Scheduling"})]}),(0,jsx_runtime.jsxs)(ListItem_ListItem,{children:[(0,jsx_runtime.jsx)(ListItemDecorator_ListItemDecorator,{children:checkIcon}),(0,jsx_runtime.jsx)(ListItemContent_ListItemContent,{children:"Set your rates"})]}),(0,jsx_runtime.jsxs)(ListItem_ListItem,{children:[(0,jsx_runtime.jsx)(ListItemDecorator_ListItemDecorator,{children:checkIcon}),(0,jsx_runtime.jsx)(ListItemContent_ListItemContent,{children:"Exclusive Deals"})]}),(0,jsx_runtime.jsxs)(ListItem_ListItem,{sx:theme=>theme.variants.plainDisabled.primary,children:[(0,jsx_runtime.jsx)(ListItemDecorator_ListItemDecorator,{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{sx:{mt:"2px"},children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})}),(0,jsx_runtime.jsx)(ListItemContent_ListItemContent,{children:"Advanced Statistics"})]})]}),(0,jsx_runtime.jsxs)(CardContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{component:"div",fontSize:"xl2",fontWeight:"xl",textColor:"text.primary",endDecorator:(0,jsx_runtime.jsx)(Typography.ZP,{fontSize:"md",fontWeight:"400",children:"/month"}),sx:{alignItems:"baseline"},children:"$123"}),(0,jsx_runtime.jsx)(CardActions.Z,{children:(0,jsx_runtime.jsx)(Button.Z,{children:"Try 1 month"})})]})]})}CardPricingPlan.displayName="CardPricingPlan";const CardPricingPlan_stories={title:"Card/Pricing/Plan",component:CardPricingPlan,parameters:{layout:"centered"}},Block={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:300,maxWidth:"100%"},children:(0,jsx_runtime.jsx)(CardPricingPlan,{})})};Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 300,\n    maxWidth: "100%"\n  }}>\n      <CardPricingPlan />\n    </div>\n}',...Block.parameters?.docs?.source}}};const __namedExportsOrder=["Block"]}}]);