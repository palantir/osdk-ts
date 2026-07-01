import{f as n,j as t}from"./iframe-DeFq8xVt.js";import{O as p}from"./object-table-BjKxXunm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qE7M0Jph.js";import"./Table-U4q4MMPB.js";import"./index-CxNk4N3G.js";import"./Dialog-Bh07qdaz.js";import"./cross-U8KTamE2.js";import"./svgIconContainer-NOs2N9t1.js";import"./useBaseUiId-BDFv1AMj.js";import"./InternalBackdrop-C2F8oLbD.js";import"./composite-ppkh12Xh.js";import"./index--NZB9FY9.js";import"./index-qG_NBeKa.js";import"./index-BSsnlKpl.js";import"./useEventCallback-BwYvblpt.js";import"./SkeletonBar-DLsDfCIU.js";import"./LoadingCell-BNaCGNvO.js";import"./ColumnConfigDialog-2Fv_Fm3Z.js";import"./DraggableList-BUG3jT7E.js";import"./search-may_KwwY.js";import"./Input-4EtxsvK1.js";import"./useControlled-D4KpmZuV.js";import"./Button-04vppXE8.js";import"./small-cross-Sqaz4rZa.js";import"./ActionButton-DcK2WxCS.js";import"./Checkbox-Cs0c3_Hs.js";import"./minus-BoPEy0v7.js";import"./tick-C5ap2FTU.js";import"./useValueChanged-BVD9epe_.js";import"./caret-down-Bv4RNKFW.js";import"./CollapsiblePanel-BK2RejY-.js";import"./MultiColumnSortDialog-iGRfPq_0.js";import"./MenuTrigger-DrBVa2sy.js";import"./CompositeItem-BI0A4Jwy.js";import"./ToolbarRootContext-f6GbPpr4.js";import"./getDisabledMountTransitionStyles-C_r0GNbH.js";import"./getPseudoElementBounds-CfxOTngJ.js";import"./chevron-down-ELF_b8CA.js";import"./index-BXP9TVeZ.js";import"./error-CYpFXaDV.js";import"./BaseCbacBanner-CM64zra1.js";import"./makeExternalStore-D5nWCiLU.js";import"./Tooltip-DuUSL_Z3.js";import"./PopoverPopup-Dg0c0FiI.js";import"./toNumber-BlaQaKb7.js";import"./useOsdkClient-qIDXaSfc.js";import"./DropdownField-4JmmbWk1.js";import"./withOsdkMetrics-rjMIBJ3W.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
