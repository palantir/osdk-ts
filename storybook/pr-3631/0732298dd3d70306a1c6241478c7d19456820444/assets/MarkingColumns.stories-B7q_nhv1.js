import{f as n,j as t}from"./iframe-Caoetw6_.js";import{O as p}from"./object-table-UW2du626.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-SZ30oZAw.js";import"./Table-CVrLL3DI.js";import"./index-CCzpBXXF.js";import"./Dialog-Dxjhr35v.js";import"./cross-SqcWWNCE.js";import"./svgIconContainer-B6cLoNG8.js";import"./useBaseUiId-Ciu3MufG.js";import"./InternalBackdrop-DpywGBC0.js";import"./composite-Di6SQr-1.js";import"./index-Bzf-NvMI.js";import"./index-t110U8eF.js";import"./index-DG9gmunH.js";import"./useEventCallback-FPkcaq5i.js";import"./SkeletonBar-4mmixbyY.js";import"./LoadingCell-B2V81LKl.js";import"./ColumnConfigDialog-CKSMDj2-.js";import"./DraggableList-2iaWAvNe.js";import"./search-DTiCpr8d.js";import"./Input-CPc0IIx2.js";import"./useControlled-ChKxV85n.js";import"./Button-DREVl4c5.js";import"./small-cross-CSCcT7it.js";import"./ActionButton-CpHW6qWf.js";import"./Checkbox-BCEPsA1e.js";import"./useValueChanged-Dl48fHMK.js";import"./CollapsiblePanel-ICCKTTf4.js";import"./MultiColumnSortDialog-CjtlpkDL.js";import"./MenuTrigger-DLLo5r4I.js";import"./CompositeItem-CVZHUpv4.js";import"./ToolbarRootContext-C6sMNeZZ.js";import"./getDisabledMountTransitionStyles-3Uw-1z-O.js";import"./getPseudoElementBounds-D_bOUECx.js";import"./chevron-down-CDhh-yxK.js";import"./index-DshzZ2zn.js";import"./error-CfA61cfJ.js";import"./BaseCbacBanner-BTMsj0rb.js";import"./makeExternalStore-uBpjLFtx.js";import"./Tooltip-DSvzJ8ec.js";import"./PopoverPopup-DeF-hJnT.js";import"./toNumber-Pkywr5lU.js";import"./useOsdkClient-D9blifZB.js";import"./tick-CR9PAO1d.js";import"./DropdownField-CZJfQpEw.js";import"./withOsdkMetrics-Dz388qsn.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
