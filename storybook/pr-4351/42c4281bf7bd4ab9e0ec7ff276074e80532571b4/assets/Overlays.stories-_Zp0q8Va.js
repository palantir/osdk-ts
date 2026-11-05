var V=Object.defineProperty;var K=(e,a,t)=>a in e?V(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var s=(e,a,t)=>K(e,typeof a!="symbol"?a+"":a,t);import{r as i,a2 as Y,a3 as $,j as n,a4 as X,a5 as J,a6 as Q}from"./iframe-5l1aTQWB.js";import{E as g}from"./Employee-BAk2o20h.js";import{d as _,o as Z,T as B,a as w}from"./objectTableStoryHelpers-uRLXOn76.js";import{O as ee}from"./object-table-DCJbpV5Z.js";import{D as ne}from"./Dialog-CtVtzfGi.js";import{c as v}from"./index-CabVKWfS.js";import{O as te,a as ae,b as oe,c as re,B as T,D as ie}from"./dialog-DZ7g1OSP.js";import{i as x,D as se,I as le,H as ce}from"./html-yYNeicBE.js";import{S as pe}from"./small-cross-BXD20tqW.js";import{I as P}from"./svgIconContainer-DUWwpavS.js";import"./preload-helper-CV54w-MR.js";import"./Table-C0wRTyVx.js";import"./useEventCallback-j88OK98j.js";import"./SkeletonBar-DiikPYcf.js";import"./LoadingCell-BFYv-WM9.js";import"./ColumnConfigDialog-Ck03PSW2.js";import"./DraggableList-Dkk5QDNO.js";import"./search-ocH4sH9r.js";import"./Input-DVZngs_7.js";import"./useBaseUiId-D2qSGviR.js";import"./useControlled-Dv35mSy4.js";import"./index-CWUPxEVH.js";import"./index-U5dtIGUV.js";import"./Button-BbI-ZrrT.js";import"./ActionButton-CVgbfgT7.js";import"./Checkbox-DE6eRYi2.js";import"./InternalBackdrop-DeDePDLT.js";import"./composite-BN-nzUC2.js";import"./index-BEY7C58E.js";import"./useValueChanged-BrsMGCOc.js";import"./CollapsiblePanel-DnkZmCML.js";import"./MultiColumnSortDialog-DYr3NZ_x.js";import"./MenuTrigger-C6uan-J9.js";import"./CompositeItem-CiQq9b_9.js";import"./ToolbarRootContext-DpNaqsW8.js";import"./getDisabledMountTransitionStyles-Ci8kZ5Aj.js";import"./getPseudoElementBounds-By38X9zr.js";import"./chevron-down-C-oTZ5aG.js";import"./index-BKm5H3zL.js";import"./error-Cor_ktfQ.js";import"./BaseCbacBanner-pfccwWJ8.js";import"./makeExternalStore-Bp08F5QN.js";import"./cross-DVFwGI58.js";import"./Tooltip-CMn9P59Q.js";import"./PopoverPopup-qOi5AuS_.js";import"./debounce-BirimW28.js";import"./useOsdkClient-DcsBDEeF.js";import"./tick-PuqFX_ts.js";import"./DropdownField-B8Mkz462.js";import"./isEqual-BijnOwND.js";import"./withOsdkMetrics-B5w28mdE.js";import"./iconLoader-B622xpKu.js";const o={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};function me(e){return e===o.TOP||e===o.TOP_LEFT||e===o.TOP_RIGHT||e===o.BOTTOM||e===o.BOTTOM_LEFT||e===o.BOTTOM_RIGHT}function A(e){return e===o.TOP||e===o.TOP_LEFT||e===o.TOP_RIGHT?o.TOP:e===o.BOTTOM||e===o.BOTTOM_LEFT||e===o.BOTTOM_RIGHT?o.BOTTOM:e===o.LEFT||e===o.LEFT_TOP||e===o.LEFT_BOTTOM?o.LEFT:o.RIGHT}class ue extends i.PureComponent{constructor(t){super(t);s(this,"componentWillUpdate");s(this,"componentWillReceiveProps");s(this,"componentWillMount");s(this,"getDerivedStateFromProps");s(this,"displayName");s(this,"timeoutIds",[]);s(this,"requestIds",[]);s(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const t of this.timeoutIds)window.clearTimeout(t);this.timeoutIds=[]}});s(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const t of this.requestIds)window.cancelAnimationFrame(t);this.requestIds=[]}});x("production")||this.validateProps(this.props)}componentDidUpdate(t,r,l){x("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(t){const r=window.requestAnimationFrame(t);return this.requestIds.push(r),()=>window.cancelAnimationFrame(r)}setTimeout(t,r){const l=window.setTimeout(t,r);return this.timeoutIds.push(l),()=>window.clearTimeout(l)}validateProps(t){}}var R;(function(e){e.SMALL="360px",e.STANDARD="50%",e.LARGE="90%"})(R||(R={}));class O extends ue{render(){const{hasBackdrop:a,size:t,style:r,position:l}=this.props,{className:m,children:h,...q}=this.props,C=A(l),W=v(Y,{[$(C)??""]:!0},m),z=t==null?r:{...r,[me(C)?"height":"width"]:t};return n.jsx(te,{...q,className:v({[X]:a}),children:n.jsxs("div",{className:W,style:z,children:[this.maybeRenderHeader(),h]})})}validateProps(a){a.title==null&&(a.icon!=null&&console.warn(ae),a.isCloseButtonShown!=null&&console.warn(oe)),a.position!=null&&a.position!==A(a.position)&&console.warn(re)}maybeRenderCloseButton(){return this.props.isCloseButtonShown!==!1?n.jsx(T,{"aria-label":"Close",className:J,icon:n.jsx(pe,{size:P.LARGE}),onClick:this.props.onClose,variant:"minimal"}):null}maybeRenderHeader(){const{icon:a,title:t}=this.props;return t==null?null:n.jsxs("div",{className:Q,children:[n.jsx(le,{icon:a,size:P.LARGE}),n.jsx(ce,{children:t}),this.maybeRenderCloseButton()]})}}s(O,"displayName",`${se}.Drawer`),s(O,"defaultProps",{canOutsideClickClose:!0,isOpen:!1,position:"right",style:{}});const de="_reopenButton_lf80i_17",be="_drawerBody_lf80i_21",Te="_blueprintDialog_lf80i_28",he="_blueprintDialogContent_lf80i_32",Oe="_baseUiDialog_lf80i_39",ye="_shell_lf80i_44",fe="_instructions_lf80i_52",De="_tableFrame_lf80i_57",c={reopenButton:de,drawerBody:be,blueprintDialog:Te,blueprintDialogContent:he,baseUiDialog:Oe,shell:ye,instructions:fe,tableFrame:De},j=i.memo(function({tableProps:a}){return n.jsxs("div",{className:c.shell,children:[n.jsx("div",{className:c.instructions,children:"Click a column header chevron. The header menu should open above the overlay and stay interactive."}),n.jsx("div",{className:c.tableFrame,children:n.jsx(ee,{...a})})]})}),y=i.memo(function({tableProps:a}){const[t,r]=i.useState(!0),l=i.useCallback(()=>{r(!0)},[]),m=i.useCallback(()=>{r(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(T,{className:c.reopenButton,onClick:l,text:"Open drawer"}),n.jsx(O,{isOpen:t,onClose:m,size:"90%",title:"ObjectTable in Blueprint Drawer",children:n.jsx("div",{className:c.drawerBody,children:n.jsx(j,{tableProps:a})})})]})}),f=i.memo(function({tableProps:a}){const[t,r]=i.useState(!0),l=i.useCallback(()=>{r(!0)},[]),m=i.useCallback(()=>{r(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(T,{className:c.reopenButton,onClick:l,text:"Open Blueprint dialog"}),n.jsx(ie,{className:c.blueprintDialog,isOpen:t,onClose:m,title:"ObjectTable in Blueprint Dialog",children:n.jsx("div",{className:c.blueprintDialogContent,children:n.jsx(j,{tableProps:a})})})]})}),D=i.memo(function({tableProps:a}){const[t,r]=i.useState(!0),l=i.useCallback(()=>{r(!0)},[]),m=i.useCallback(h=>{r(h)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(T,{className:c.reopenButton,onClick:l,text:"Open Base UI dialog"}),n.jsx(ne,{className:c.baseUiDialog,isOpen:t,onOpenChange:m,title:"ObjectTable in Base UI Dialog",children:n.jsx(j,{tableProps:a})})]})});try{y.displayName="ObjectTableInBlueprintDrawer",y.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDrawer",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{f.displayName="ObjectTableInBlueprintDialog",f.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{D.displayName="ObjectTableInBaseUIDialog",D.__docgenInfo={description:"",displayName:"ObjectTableInBaseUIDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}const{expect:I,screen:p,userEvent:E}=__STORYBOOK_MODULE_TEST__,gn={...Z,title:"Components/ObjectTable/Features/Overlays"},u={args:{objectType:g,columnDefinitions:_},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. Open the drawer and click any column header chevron; the menu should appear above the drawer."},source:{code:`<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>`}}},render:e=>n.jsx(y,{tableProps:e}),play:async()=>{await p.findByText(B),await w(p,"fullName"),await I(await p.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await E.keyboard("{Escape}")}},d={args:{objectType:g,columnDefinitions:_},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(f,{tableProps:e}),play:async()=>{await p.findByText(B),await w(p,"fullName"),await I(await p.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await E.keyboard("{Escape}")}},b={args:{objectType:g,columnDefinitions:_},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(D,{tableProps:e}),play:async()=>{await p.findByText(B),await w(p,"fullName"),await I(await p.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await E.keyboard("{Escape}")}};var N,F,S;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=(U=b.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const _n=["HeaderMenuInsideBlueprintDrawer","HeaderMenuInsideBlueprintDialog","HeaderMenuInsideBaseUIDialog"];export{b as HeaderMenuInsideBaseUIDialog,d as HeaderMenuInsideBlueprintDialog,u as HeaderMenuInsideBlueprintDrawer,_n as __namedExportsOrder,gn as default};
