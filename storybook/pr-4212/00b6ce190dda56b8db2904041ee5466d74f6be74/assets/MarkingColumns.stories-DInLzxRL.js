import{f as p,j as e}from"./iframe-De0JvUDI.js";import{O as i}from"./object-table-QpxGEIzu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DW0Viam7.js";import"./Table-DA5xr5v4.js";import"./index-D2ucVBaK.js";import"./Dialog-bdLZ2FJb.js";import"./cross-D3NokT3S.js";import"./svgIconContainer-C40TH68P.js";import"./useBaseUiId-ClfRKfDN.js";import"./InternalBackdrop-BdrWkdLQ.js";import"./composite-Un7w28gc.js";import"./index-DSWLkZGL.js";import"./index-DRUMpWwL.js";import"./index-DPn3VSK_.js";import"./useEventCallback-CU5U5yco.js";import"./SkeletonBar-CWa0WbiQ.js";import"./LoadingCell-Cxk8ytcA.js";import"./ColumnConfigDialog-DW7uPPVa.js";import"./DraggableList-Bo93aEiY.js";import"./search-MoU8b7Yy.js";import"./Input-C_CGkTkl.js";import"./useControlled-CRrAgDjk.js";import"./Button-Bn-SxZv6.js";import"./small-cross--9BOpqr2.js";import"./ActionButton-DqBp-oot.js";import"./Checkbox-B-C0PSHq.js";import"./useValueChanged-B_zks5LA.js";import"./CollapsiblePanel-TSUxngdh.js";import"./MultiColumnSortDialog-B0i_cXtV.js";import"./MenuTrigger-Ckk1btDP.js";import"./CompositeItem-w6RFopZN.js";import"./ToolbarRootContext-Bxy7ajQD.js";import"./getDisabledMountTransitionStyles-BkAZ14rI.js";import"./getPseudoElementBounds-6gBn4IJF.js";import"./chevron-down-Yz9bQ-ge.js";import"./index-POBaPims.js";import"./error-D8UWFeng.js";import"./BaseCbacBanner-D6AKgLpj.js";import"./makeExternalStore-CvSmdJRq.js";import"./Tooltip-DXEGgoGu.js";import"./PopoverPopup-DNrWS3x8.js";import"./debounce-C6Uj-jcf.js";import"./useOsdkClient-DKAeWvuz.js";import"./tick-CabygoeH.js";import"./DropdownField-Bkm-lwWx.js";import"./isEqual-B1nIHKd3.js";import"./withOsdkMetrics-DlBld6qB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
