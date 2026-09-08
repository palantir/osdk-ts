var V=Object.defineProperty;var K=(e,t,a)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var i=(e,t,a)=>K(e,typeof t!="symbol"?t+"":t,a);import{r as s,a0 as Y,a1 as $,j as n,a2 as X,a3 as J,a4 as Q}from"./iframe-Xc_JH78I.js";import{E as g}from"./Employee-BAk2o20h.js";import{d as _,o as Z,k as w,a as j}from"./objectTableStoryHelpers-DuCUOgsO.js";import{O as ee}from"./object-table-BR6CYbjf.js";import{D as ne}from"./Dialog-DopQ8wFf.js";import{c as v,I as P}from"./svgIconContainer-CQmggZ37.js";import{O as ae,a as te,b as oe,c as re,B as h,D as se}from"./dialog-BZaDAwg8.js";import{i as x,D as ie,I as le,H as ce}from"./html-BjOyN-qm.js";import{S as pe}from"./debounce-DutYdFha.js";import"./preload-helper-AYl1pujm.js";import"./PopoverPopup-Dcn1i5iK.js";import"./useBaseUiId-BI3SiDaB.js";import"./ToolbarRootContext-we2pFgZ9.js";import"./index-BLCrQc9J.js";import"./index-CsuxBpJ0.js";import"./index-BeTbant5.js";import"./Tooltip-DWx_5x0Q.js";import"./error-D-Pc-XbV.js";import"./CollapsiblePanel-BR5_TCy1.js";import"./makeExternalStore-DfyUf4Br.js";import"./Input-BFx2x6nA.js";import"./CompositeItem-B_3aLVYQ.js";import"./tick-D1opSoSV.js";import"./Checkbox-DEpZizfX.js";import"./PortalContainerContext-BOrecAxh.js";import"./useOsdkClient-B2D2VKmh.js";import"./ActionButton-wws9nTvA.js";import"./index-Bp1R9O-s.js";import"./withOsdkMetrics-CzAtW5Pc.js";import"./iconLoader-N0B5UsA9.js";const o={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",LEFT_BOTTOM:"left-bottom",LEFT_TOP:"left-top",RIGHT:"right",TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"};function ue(e){return e===o.TOP||e===o.TOP_LEFT||e===o.TOP_RIGHT||e===o.BOTTOM||e===o.BOTTOM_LEFT||e===o.BOTTOM_RIGHT}function N(e){return e===o.TOP||e===o.TOP_LEFT||e===o.TOP_RIGHT?o.TOP:e===o.BOTTOM||e===o.BOTTOM_LEFT||e===o.BOTTOM_RIGHT?o.BOTTOM:e===o.LEFT||e===o.LEFT_TOP||e===o.LEFT_BOTTOM?o.LEFT:o.RIGHT}class de extends s.PureComponent{constructor(a){super(a);i(this,"componentWillUpdate");i(this,"componentWillReceiveProps");i(this,"componentWillMount");i(this,"getDerivedStateFromProps");i(this,"displayName");i(this,"timeoutIds",[]);i(this,"requestIds",[]);i(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const a of this.timeoutIds)window.clearTimeout(a);this.timeoutIds=[]}});i(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const a of this.requestIds)window.cancelAnimationFrame(a);this.requestIds=[]}});x("production")||this.validateProps(this.props)}componentDidUpdate(a,r,l){x("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(a){const r=window.requestAnimationFrame(a);return this.requestIds.push(r),()=>window.cancelAnimationFrame(r)}setTimeout(a,r){const l=window.setTimeout(a,r);return this.timeoutIds.push(l),()=>window.clearTimeout(l)}validateProps(a){}}var R;(function(e){e.SMALL="360px",e.STANDARD="50%",e.LARGE="90%"})(R||(R={}));class O extends de{render(){const{hasBackdrop:t,size:a,style:r,position:l}=this.props,{className:u,children:T,...q}=this.props,C=N(l),W=v(Y,{[$(C)??""]:!0},u),z=a==null?r:{...r,[ue(C)?"height":"width"]:a};return n.jsx(ae,{...q,className:v({[X]:t}),children:n.jsxs("div",{className:W,style:z,children:[this.maybeRenderHeader(),T]})})}validateProps(t){t.title==null&&(t.icon!=null&&console.warn(te),t.isCloseButtonShown!=null&&console.warn(oe)),t.position!=null&&t.position!==N(t.position)&&console.warn(re)}maybeRenderCloseButton(){return this.props.isCloseButtonShown!==!1?n.jsx(h,{"aria-label":"Close",className:J,icon:n.jsx(pe,{size:P.LARGE}),onClick:this.props.onClose,variant:"minimal"}):null}maybeRenderHeader(){const{icon:t,title:a}=this.props;return a==null?null:n.jsxs("div",{className:Q,children:[n.jsx(le,{icon:t,size:P.LARGE}),n.jsx(ce,{children:a}),this.maybeRenderCloseButton()]})}}i(O,"displayName",`${ie}.Drawer`),i(O,"defaultProps",{canOutsideClickClose:!0,isOpen:!1,position:"right",style:{}});const me="_reopenButton_lf80i_17",be="_drawerBody_lf80i_21",he="_blueprintDialog_lf80i_28",Te="_blueprintDialogContent_lf80i_32",Oe="_baseUiDialog_lf80i_39",ye="_shell_lf80i_44",fe="_instructions_lf80i_52",De="_tableFrame_lf80i_57",c={reopenButton:me,drawerBody:be,blueprintDialog:he,blueprintDialogContent:Te,baseUiDialog:Oe,shell:ye,instructions:fe,tableFrame:De},B=s.memo(function({tableProps:t}){return n.jsxs("div",{className:c.shell,children:[n.jsx("div",{className:c.instructions,children:"Click a column header chevron. The header menu should open above the overlay and stay interactive."}),n.jsx("div",{className:c.tableFrame,children:n.jsx(ee,{...t})})]})}),y=s.memo(function({tableProps:t}){const[a,r]=s.useState(!0),l=s.useCallback(()=>{r(!0)},[]),u=s.useCallback(()=>{r(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(h,{className:c.reopenButton,onClick:l,text:"Open drawer"}),n.jsx(O,{isOpen:a,onClose:u,size:"90%",title:"ObjectTable in Blueprint Drawer",children:n.jsx("div",{className:c.drawerBody,children:n.jsx(B,{tableProps:t})})})]})}),f=s.memo(function({tableProps:t}){const[a,r]=s.useState(!0),l=s.useCallback(()=>{r(!0)},[]),u=s.useCallback(()=>{r(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(h,{className:c.reopenButton,onClick:l,text:"Open Blueprint dialog"}),n.jsx(se,{className:c.blueprintDialog,isOpen:a,onClose:u,title:"ObjectTable in Blueprint Dialog",children:n.jsx("div",{className:c.blueprintDialogContent,children:n.jsx(B,{tableProps:t})})})]})}),D=s.memo(function({tableProps:t}){const[a,r]=s.useState(!0),l=s.useCallback(()=>{r(!0)},[]),u=s.useCallback(T=>{r(T)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(h,{className:c.reopenButton,onClick:l,text:"Open Base UI dialog"}),n.jsx(ne,{className:c.baseUiDialog,isOpen:a,onOpenChange:u,title:"ObjectTable in Base UI Dialog",children:n.jsx(B,{tableProps:t})})]})});try{y.displayName="ObjectTableInBlueprintDrawer",y.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDrawer",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{f.displayName="ObjectTableInBlueprintDialog",f.__docgenInfo={description:"",displayName:"ObjectTableInBlueprintDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}try{D.displayName="ObjectTableInBaseUIDialog",D.__docgenInfo={description:"",displayName:"ObjectTableInBaseUIDialog",props:{tableProps:{defaultValue:null,description:"",name:"tableProps",required:!0,type:{name:"ObjectTableProps<Employee>"}}}}}catch{}const{expect:I,screen:p,userEvent:E}=__STORYBOOK_MODULE_TEST__,Qe={...Z,title:"Components/ObjectTable/Features/Overlays"},d={args:{objectType:g,columnDefinitions:_},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Drawer. Open the drawer and click any column header chevron; the menu should appear above the drawer."},source:{code:`<Drawer isOpen={true} title="ObjectTable in Blueprint Drawer">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Drawer>`}}},render:e=>n.jsx(y,{tableProps:e}),play:async()=>{await w(p),await j(p,"fullName"),await I(await p.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await E.keyboard("{Escape}")}},m={args:{objectType:g,columnDefinitions:_},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside a Blueprint Dialog. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Blueprint Dialog">
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(f,{tableProps:e}),play:async()=>{await w(p),await j(p,"fullName"),await I(await p.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await E.keyboard("{Escape}")}},b={args:{objectType:g,columnDefinitions:_},parameters:{docs:{description:{story:"Scenario for the header menu dropdown when ObjectTable is rendered inside the OSDK Base UI Dialog primitive. Open the dialog and click any column header chevron; the menu should appear above the dialog."},source:{code:`<Dialog isOpen={true} title="ObjectTable in Base UI Dialog" onOpenChange={setIsOpen}>
  <ObjectTable objectType={Employee} columnDefinitions={defaultEmployeeColumns} />
</Dialog>`}}},render:e=>n.jsx(D,{tableProps:e}),play:async()=>{await w(p),await j(p,"fullName"),await I(await p.findByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await E.keyboard("{Escape}")}};var F,A,S;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    await findTableData(screen);
    await openHeaderMenu(screen, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var M,H,L;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    await findTableData(screen);
    await openHeaderMenu(screen, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var k,U,G;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    await findTableData(screen);
    await openHeaderMenu(screen, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
  }
}`,...(G=(U=b.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const Ze=["HeaderMenuInsideBlueprintDrawer","HeaderMenuInsideBlueprintDialog","HeaderMenuInsideBaseUIDialog"];export{b as HeaderMenuInsideBaseUIDialog,m as HeaderMenuInsideBlueprintDialog,d as HeaderMenuInsideBlueprintDrawer,Ze as __namedExportsOrder,Qe as default};
