import{f as n,j as t}from"./iframe-C7RbzeK7.js";import{O as p}from"./object-table-Dj8pv0FW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dbj4vdNE.js";import"./Table-CJWXpaHL.js";import"./index-BK_nkc1Q.js";import"./Dialog-Cb9A_hox.js";import"./cross-TlwZaFD6.js";import"./svgIconContainer-D1OlHHBH.js";import"./useBaseUiId-Dvti5PKd.js";import"./InternalBackdrop-D8iTiehl.js";import"./composite-Cru-yikx.js";import"./index-DafpuAji.js";import"./index-JI73MFaz.js";import"./index-F_qFw2Bo.js";import"./useEventCallback-1yR6nOEs.js";import"./SkeletonBar-B3hf4NTK.js";import"./LoadingCell-B1oaoG8w.js";import"./ColumnConfigDialog-BqSagdYT.js";import"./DraggableList-d9I2Y_WY.js";import"./search-BRSriY8I.js";import"./Input-Ctm1nILd.js";import"./useControlled-B79A5d4I.js";import"./Button-BXsqc2zz.js";import"./small-cross-Df7PaOWf.js";import"./ActionButton-F6I3wNM9.js";import"./Checkbox-CJYybRCk.js";import"./useValueChanged-B_5NuDXs.js";import"./CollapsiblePanel-DMTXaRca.js";import"./MultiColumnSortDialog-BIoJvKc0.js";import"./MenuTrigger-Bycaeh9U.js";import"./CompositeItem-Byg1oty-.js";import"./ToolbarRootContext-Dms0sPDt.js";import"./getDisabledMountTransitionStyles-BlpK5gXj.js";import"./getPseudoElementBounds-CuSQM-tk.js";import"./chevron-down-DziG3VI9.js";import"./index-CYdIyBr8.js";import"./error-BnlTpVJP.js";import"./BaseCbacBanner-tvQB3BE3.js";import"./makeExternalStore-DOnwaLXN.js";import"./Tooltip-H3OId366.js";import"./PopoverPopup-tnvDzFos.js";import"./toNumber-C_kM_uQg.js";import"./useOsdkClient-BUbwAWeH.js";import"./tick-CnVNJJmF.js";import"./DropdownField-BJobWkaf.js";import"./withOsdkMetrics-DEUiXF0c.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
