import{f as p,j as e}from"./iframe-DsGELu4T.js";import{O as i}from"./object-table-CxvCywaa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-XA-VDU9h.js";import"./Table-CPTYGU3L.js";import"./index-FibZOxqI.js";import"./Dialog-BL83Ywq7.js";import"./cross-oXbqlTg1.js";import"./svgIconContainer-CnDXZd3l.js";import"./useBaseUiId-Bgw27mqh.js";import"./InternalBackdrop-9Qoq3oRQ.js";import"./composite-CRl6169X.js";import"./index-BAMqZ9uk.js";import"./index-D5CaD6SI.js";import"./index-Dn7r5zta.js";import"./useEventCallback-EtST8PvD.js";import"./SkeletonBar-CkVB7Otp.js";import"./LoadingCell-CFQRgKPS.js";import"./ColumnConfigDialog-CJZYfrc3.js";import"./DraggableList-3tZbeJKF.js";import"./search-C-C2z-My.js";import"./Input-BiHcxxvv.js";import"./useControlled-hcbn-QvT.js";import"./Button-CoSq253i.js";import"./small-cross-L2Eps0bY.js";import"./ActionButton-c8pCj5XE.js";import"./Checkbox-CJpR6IEJ.js";import"./useValueChanged-CH7RDj0k.js";import"./CollapsiblePanel-B6Y0ESYf.js";import"./MultiColumnSortDialog-Bksh3D7y.js";import"./MenuTrigger-DBH_6DyT.js";import"./CompositeItem-0ZiilmCA.js";import"./ToolbarRootContext-rEV65r5F.js";import"./getDisabledMountTransitionStyles-iYmZWD6l.js";import"./getPseudoElementBounds-B7n1t-QY.js";import"./chevron-down-BZA6QViL.js";import"./index-Dl4r3eFQ.js";import"./error-CKgv5Cwb.js";import"./BaseCbacBanner-BVuDduVm.js";import"./makeExternalStore-B1xZJ4O7.js";import"./Tooltip-Cv_DgBwb.js";import"./PopoverPopup-B8yGkdSD.js";import"./debounce-CTNx07rU.js";import"./useOsdkClient-BHuTNu7Y.js";import"./tick-C3wj9HAZ.js";import"./DropdownField-Bar5e3Pn.js";import"./isEqual-CCdnBCja.js";import"./withOsdkMetrics-Q1C_QdTj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
