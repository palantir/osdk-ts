var V=Object.defineProperty;var K=(e,a,t)=>a in e?V(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var s=(e,a,t)=>K(e,typeof a!="symbol"?a+"":a,t);import{r as i,j as n}from"./iframe-CtNJDH5G.js";import{E as D}from"./Employee-BAk2o20h.js";import{d as _,o as Y,T as B,a as w}from"./objectTableStoryHelpers-CuyNUunH.js";import{O as $}from"./object-table-B52x9VZ2.js";import{D as X}from"./Dialog-CDLtTXw8.js";import{c as v}from"./index-z2XYq7ra.js";import{O as J,a as Q,b as Z,c as ee,B as T,D as ne}from"./dialog-BoyIZgdA.js";import{i as x,D as te,d as ae,p as oe,O as re,f as ie,g as se,I as le,H as ce}from"./html-DJrH5IiD.js";import{S as pe}from"./isObject-C2EW0xoh.js";import{I as P}from"./svgIconContainer-C1uz_o6R.js";import"./preload-helper-B6Bov_yH.js";import"./Table-Dsg8rYNI.js";import"./useEventCallback-D2_O1PtJ.js";import"./SkeletonBar-CAViw2Ph.js";import"./LoadingCell-C7DV2Dkh.js";import"./ColumnConfigDialog-CScSLge6.js";import"./DraggableList-CGR_3SSW.js";import"./search-JAqzsTe5.js";import"./Input-BTkkuHQL.js";import"./useBaseUiId-2S0D4Wex.js";import"./useControlled-CST_0_q3.js";import"./index-BwJWoqxS.js";import"./index-DpRvis3c.js";import"./isEqual-Bvjnl5yW.js";import"./Button-Be9aku2m.js";import"./ActionButton-GN3WMfyu.js";import"./Checkbox-DMeMsCzD.js";import"./InternalBackdrop-qjgvext-.js";import"./composite-B1yphZ5b.js";import"./index-DSDVI0tN.js";import"./useValueChanged-CK9L4fih.js";import"./CollapsiblePanel--WvP7msJ.js";import"./MultiColumnSortDialog-CZB_vWa7.js";import"./MenuTrigger-c3igAaqW.js";import"./CompositeItem-rxULTRxY.js";import"./ToolbarRootContext-p83rW4-4.js";import"./getDisabledMountTransitionStyles-HPK60DLM.js";import"./getPseudoElementBounds-uqHOXtkO.js";import"./chevron-down-BDWvu0E4.js";import"./index-BgHP8oNq.js";import"./error-TzMVm4P5.js";import"./BaseCbacBanner-MPdW9-vk.js";import"./makeExternalStore-ZIQANtwN.js";import"./cross-BmTxvcx-.js";import"./Tooltip-CFXn8FEX.js";import"./PopoverPopup-DiPuw5VV.js";import"./toNumber-CW-bxiXL.js";import"./useOsdkClient-6noYeR_d.js";import"./tick-DlqKfDkY.js";import"./DropdownField-BMJj-U5h.js";import"./withOsdkMetrics-qjYcIJv8.js";import"./iconLoader-BkRLSIFC.js";const o={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};function me(e){return e===o.TOP||e===o.TOP_LEFT||e===o.TOP_RIGHT||e===o.BOTTOM||e===o.BOTTOM_LEFT||e===o.BOTTOM_RIGHT}function A(e){return e===o.TOP||e===o.TOP_LEFT||e===o.TOP_RIGHT?o.TOP:e===o.BOTTOM||e===o.BOTTOM_LEFT||e===o.BOTTOM_RIGHT?o.BOTTOM:e===o.LEFT||e===o.LEFT_TOP||e===o.LEFT_BOTTOM?o.LEFT:o.RIGHT}class ue extends i.PureComponent{constructor(t){super(t);s(this,"componentWillUpdate");s(this,"componentWillReceiveProps");s(this,"componentWillMount");s(this,"getDerivedStateFromProps");s(this,"displayName");s(this,"timeoutIds",[]);s(this,"requestIds",[]);s(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const t of this.timeoutIds)window.clearTimeout(t);this.timeoutIds=[]}});s(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const t of this.requestIds)window.cancelAnimationFrame(t);this.requestIds=[]}});x("production")||this.validateProps(this.props)}componentDidUpdate(t,r,l){x("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(t){const r=window.requestAnimationFrame(t);return this.requestIds.push(r),()=>window.cancelAnimationFrame(r)}setTimeout(t,r){const l=window.setTimeout(t,r);return this.timeoutIds.push(l),()=>window.clearTimeout(l)}validateProps(t){}}var R;(function(e){e.SMALL="360px",e.STANDARD="50%",e.LARGE="90%"})(R||(R={}));class O extends ue{render(){const{hasBackdrop:a,size:t,style:r,position:l}=this.props,{className:m,children:h,...q}=this.props,C=A(l),W=v(ae,{[oe(C)??""]:!0},m),z=t==null?r:{...r,[me(C)?"height":"width"]:t};return n.jsx(J,{...q,className:v({[re]:a}),children:n.jsxs("div",{className:W,style:z,children:[this.maybeRenderHeader(),h]})})}validateProps(a){a.title==null&&(a.icon!=null&&console.warn(Q),a.isCloseButtonShown!=null&&console.warn(Z)),a.position!=null&&a.position!==A(a.position)&&console.warn(ee)}maybeRenderCloseButton(){return this.props.isCloseButtonShown!==!1?n.jsx(T,{"aria-label":"Close",className:ie,icon:n.jsx(pe,{size:P.LARGE}),onClick:this.props.onClose,variant:"minimal"}):null}maybeRenderHeader(){const{icon:a,title:t}=this.props;return t==null?null:n.jsxs("div",{className:se,children:[n.jsx(le,{icon:a,size:P.LARGE}),n.jsx(ce,{children:t}),this.maybeRenderCloseButton()]})}}s(O,"displayName",`${te}.Drawer`),s(O,"defaultProps",{canOutsideClickClose:!0,isOpen:!1,position:"right",style:{}});const de="_reopenButton_lf80i_17",be="_drawerBody_lf80i_21",Te="_blueprintDialog_lf80i_28",he="_blueprintDialogContent_lf80i_32",Oe="_baseUiDialog_lf80i_39",ye="_shell_lf80i_44",fe="_instructions_lf80i_52",ge="_tableFrame_lf80i_57",c={reopenButton:de,drawerBody:be,blueprintDialog:Te,blueprintDialogContent:he,baseUiDialog:Oe,shell:ye,instructions:fe,tableFrame:ge},j=i.memo(function({tableProps:a}){return n.jsxs("div",{className:c.shell,children:[n.jsx("div",{className:c.instructions,children:"Click a column header chevron. The header menu should open above the overlay and stay interactive."}),n.jsx("div",{className:c.tableFrame,children:n.jsx($,{...a})})]})}),y=i.memo(function({tableProps:a}){const[t,r]=i.useState(!0),l=i.useCallback(()=>{r(!0)},[]),m=i.useCallback(()=>{r(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(T,{className:c.reopenButton,onClick:l,text:"Open drawer"}),n.jsx(O,{isOpen:t,onClose:m,size:"90%",title:"ObjectTable in Blueprint Drawer",children:n.jsx("div",{className:c.drawerBody,children:n.jsx(j,{tableProps:a})})})]})}),f=i.memo(function({tableProps:a}){const[t,r]=i.useState(!0),l=i.useCallback(()=>{r(!0)},[]),m=i.useCallback(()=>{r(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(T,{className:c.reopenButton,onClick:l,text:"Open Blueprint dialog"}),n.jsx(ne,{className:c.blueprintDialog,isOpen:t,onClose:m,title:"ObjectTable in Blueprint Dialog",children:n.jsx("div",{className:c.blueprintDialogContent,children:n.jsx(j,{tableProps:a})})})]})}),g=i.memo(function({tableProps:a}){const[t,r]=i.useState(!0),l=i.useCallback(()=>{r(!0)},[]),m=i.useCallback(h=>{r(h)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(T,{className:c.reopenButton,onClick:l,text:"Open Base UI dialog"}),n.jsx(X,{className:c.baseUiDialog,isOpen:t,onOpenChange:m,title:"ObjectTable in Base UI Dialog",children:n.jsx(j,{tableProps:a})})]})});try{y.displayName="ObjectTableInBlueprintDrawer",y.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDrawer",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{f.displayName="ObjectTableInBlueprintDialog",f.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{g.displayName="ObjectTableInBaseUIDialog",g.__docgenInfo={description:"",displayName:"ObjectTableInBaseUIDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}const{expect:I,screen:p,userEvent:E}=__STORYBOOK_MODULE_TEST__,Dn={...Y,title:"Components/ObjectTable/Features/Overlays"},u={args:{objectType:D,columnDefinitions:_},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. Open the drawer and click any column header chevron; the menu should appear above the drawer."},source:{code:`<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>`}}},render:e=>n.jsx(y,{tableProps:e}),play:async()=>{await p.findByText(B),await w(p,"fullName"),await I(await p.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await E.keyboard("{Escape}")}},d={args:{objectType:D,columnDefinitions:_},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(f,{tableProps:e}),play:async()=>{await p.findByText(B),await w(p,"fullName"),await I(await p.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await E.keyboard("{Escape}")}},b={args:{objectType:D,columnDefinitions:_},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(g,{tableProps:e}),play:async()=>{await p.findByText(B),await w(p,"fullName"),await I(await p.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await E.keyboard("{Escape}")}};var N,F,S;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. " + "Open the drawer and click any column header chevron; the menu should appear above the drawer."
      },
      source: {
        code: \`<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>\`
      }
    }
  },
  render: args => <ObjectTableInBlueprintDrawer tableProps={args} />,
  // The drawer opens by default. The header menu must portal *above* the drawer
  // and stay interactive. The drawer renders to document.body, so query \`screen\`.
  play: async () => {
    await screen.findByText(TARGET_DATA);
    await openHeaderMenu(screen, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...(S=(F=u.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var M,H,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. " + "Open the dialog and click any column header chevron; the menu should appear above the dialog."
      },
      source: {
        code: \`<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>\`
      }
    }
  },
  render: args => <ObjectTableInBlueprintDialog tableProps={args} />,
  // The dialog opens by default; the header menu must portal above it.
  play: async () => {
    await screen.findByText(TARGET_DATA);
    await openHeaderMenu(screen, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var k,U,G;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. " + "Open the dialog and click any column header chevron; the menu should appear above the dialog."
      },
      source: {
        code: \`<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>\`
      }
    }
  },
  render: args => <ObjectTableInBaseUIDialog tableProps={args} />,
  // The Base UI dialog opens by default; the header menu must portal above it.
  play: async () => {
    await screen.findByText(TARGET_DATA);
    await openHeaderMenu(screen, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...(G=(U=b.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const _n=["HeaderMenuInsideBlueprintDrawer","HeaderMenuInsideBlueprintDialog","HeaderMenuInsideBaseUIDialog"];export{b as HeaderMenuInsideBaseUIDialog,d as HeaderMenuInsideBlueprintDialog,u as HeaderMenuInsideBlueprintDrawer,_n as __namedExportsOrder,Dn as default};
