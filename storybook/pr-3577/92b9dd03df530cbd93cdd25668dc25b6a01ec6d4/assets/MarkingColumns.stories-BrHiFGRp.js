import{f as n,j as t}from"./iframe-Df7wAlvD.js";import{O as p}from"./object-table-NJqDowiI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DqpjBgxn.js";import"./Table-clHGuAQX.js";import"./index-BccTXbhX.js";import"./Dialog-DnK5D7W4.js";import"./cross-DWSiDlwX.js";import"./svgIconContainer-2oFhx_1q.js";import"./useBaseUiId-BOkuYL4j.js";import"./InternalBackdrop-_vFv8ToJ.js";import"./composite-CLfBjIvE.js";import"./index-CnfoFPSR.js";import"./index-DPFj9n2F.js";import"./index-QRBzez0J.js";import"./useEventCallback-Bpk8b7S_.js";import"./SkeletonBar-V18vXjPc.js";import"./LoadingCell-FZ-Mws4x.js";import"./ColumnConfigDialog-Co6i_7C1.js";import"./DraggableList-RIE4HdPn.js";import"./Input-B7U5egQu.js";import"./useControlled-HqqnQ2dL.js";import"./Button-CpGdy-VU.js";import"./small-cross-BrZMlIAa.js";import"./ActionButton-Hz-omFsA.js";import"./Checkbox-DZ9JDa4x.js";import"./minus-D_DRXj3S.js";import"./useValueChanged-D2oprhF4.js";import"./caret-down-BqhIyEtK.js";import"./CollapsiblePanel-DcDAztkJ.js";import"./MultiColumnSortDialog-Bmt2g9jL.js";import"./MenuTrigger-gxBd91Hs.js";import"./CompositeItem-D-JMACRH.js";import"./ToolbarRootContext-BHQz9_ey.js";import"./getDisabledMountTransitionStyles-CX77Evp4.js";import"./getPseudoElementBounds-DTTRGrxF.js";import"./chevron-down-DKmhsBxg.js";import"./index-9pL3iRcx.js";import"./error-BO5976cx.js";import"./BaseCbacBanner-B8ekiRQc.js";import"./makeExternalStore-DITO9XD_.js";import"./Tooltip-Vz33iQ7Z.js";import"./PopoverPopup-CCrdb--X.js";import"./toNumber-FI8kCcCo.js";import"./useOsdkClient-C6HDECsO.js";import"./DropdownField-9RIa50R4.js";import"./withOsdkMetrics-CaxA4gwL.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
