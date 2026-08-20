import{f as p,j as e}from"./iframe-CRdHGtB4.js";import{O as i}from"./object-table-DTlTylXj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BEvuQzxo.js";import"./Table-D8dtRwAf.js";import"./index-C2_3h1_n.js";import"./Dialog-5CvDwi8E.js";import"./cross-DLEBSi7m.js";import"./svgIconContainer-DTW3-j-b.js";import"./useBaseUiId-B9FhtsvG.js";import"./InternalBackdrop-DsyRujLd.js";import"./composite-CXxADE8V.js";import"./index-Di6l4zyi.js";import"./index-BOTRrmgQ.js";import"./index-CY7WeKug.js";import"./useEventCallback-7xCONfWT.js";import"./SkeletonBar-DGWiWVdE.js";import"./LoadingCell-DGNEKdLa.js";import"./ColumnConfigDialog-YhRHMt5j.js";import"./DraggableList-Cr0znASn.js";import"./search-D2VDLMat.js";import"./Input-B6Z_q_CX.js";import"./useControlled-C8hCGxVV.js";import"./Button-CGHFm1Mj.js";import"./small-cross-7ZSwMv5y.js";import"./ActionButton-DpDG7H8z.js";import"./Checkbox-5yGmAk-K.js";import"./useValueChanged-BG_mNAGq.js";import"./CollapsiblePanel-Ldvssuk8.js";import"./MultiColumnSortDialog-CEXVRfRS.js";import"./MenuTrigger-CEno5xcX.js";import"./CompositeItem-C0iz3cc9.js";import"./ToolbarRootContext-DLgn0q4p.js";import"./getDisabledMountTransitionStyles-CnxtgABm.js";import"./getPseudoElementBounds-Cqtm6ufD.js";import"./chevron-down-kpc9MZer.js";import"./index-BQoPBT-L.js";import"./error-04dUIx8L.js";import"./BaseCbacBanner-CfZT1fiN.js";import"./makeExternalStore-BCdf-sYW.js";import"./Tooltip-BMhmull_.js";import"./PopoverPopup-UFvPBeiT.js";import"./debounce-DQn6ddo9.js";import"./useOsdkClient-98BDEE3v.js";import"./tick-BWmOq10B.js";import"./DropdownField-BEdm74vx.js";import"./isEqual-CIG29_z0.js";import"./withOsdkMetrics-CxeMS1SD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
