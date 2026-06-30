import{f as n,j as t}from"./iframe-B2-8TOfx.js";import{O as p}from"./object-table-BPImrtnD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CT34ep4T.js";import"./Table-DF8aY6q5.js";import"./index-Bt1Oakql.js";import"./Dialog-DgmzSNYd.js";import"./cross-DnSL1XCn.js";import"./svgIconContainer-CS7IdlFh.js";import"./useBaseUiId-DkQdkAZ0.js";import"./InternalBackdrop-Rt7VDdoZ.js";import"./composite-DoioqM1e.js";import"./index-CZX5jAs_.js";import"./index-Bg1nm3YS.js";import"./index-CXCgztOC.js";import"./useEventCallback-CA_DQ98e.js";import"./SkeletonBar-BTUftAAw.js";import"./LoadingCell-5XFR4FGC.js";import"./ColumnConfigDialog-D2RkHKLu.js";import"./DraggableList-yBj5sOCC.js";import"./search-DFcXYwcj.js";import"./Input-CaqWprYd.js";import"./useControlled-C-enUzEJ.js";import"./Button-nT-Y9tpL.js";import"./small-cross-D_JB0Htf.js";import"./ActionButton-BlnZ7Qn3.js";import"./Checkbox-CDTXn79F.js";import"./minus-CayTQ9AJ.js";import"./tick-FK2qfYB0.js";import"./useValueChanged-5u77xF7F.js";import"./caret-down-DUDLuTPE.js";import"./CollapsiblePanel-D6KGKQqr.js";import"./MultiColumnSortDialog-19hxAa_r.js";import"./MenuTrigger-C0sRmmM5.js";import"./CompositeItem-JGq-PrRF.js";import"./ToolbarRootContext-DuxaWivy.js";import"./getDisabledMountTransitionStyles-CL21CT3a.js";import"./getPseudoElementBounds-Dbb7y0bR.js";import"./chevron-down-DlcZdLRH.js";import"./index-DOqmknAb.js";import"./error-C4bdwdMf.js";import"./BaseCbacBanner-DGFyGDLF.js";import"./makeExternalStore-D9sxCkHx.js";import"./Tooltip-Dfrvsebn.js";import"./PopoverPopup-BHW7Mu0t.js";import"./toNumber-DGdBlxL1.js";import"./useOsdkClient-BpYdMK1B.js";import"./DropdownField-c0r2PlGu.js";import"./withOsdkMetrics-BXJNIclk.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
