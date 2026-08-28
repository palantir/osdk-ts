import{f as p,j as e}from"./iframe-Dhbwn5Pb.js";import{O as i}from"./object-table-UrEffzOv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bx9mJ_N7.js";import"./Table-B3YRrRlZ.js";import"./index-beyiGhUz.js";import"./Dialog-focCsRQJ.js";import"./cross-Oe6Btsjt.js";import"./svgIconContainer-DQD_ILj4.js";import"./useBaseUiId-B8Sr3cV5.js";import"./InternalBackdrop-yGDTZBSI.js";import"./composite-DZfjqgHR.js";import"./index-BVg28YTW.js";import"./index-DujXq81U.js";import"./index-DTSqUghB.js";import"./useEventCallback--vNLEjXF.js";import"./SkeletonBar-DWQCheBK.js";import"./LoadingCell-DrMFjSlt.js";import"./ColumnConfigDialog-DxtBsJsS.js";import"./DraggableList-Tv392NfW.js";import"./search-1Sqhs6Wh.js";import"./Input-CbPVVR1a.js";import"./useControlled-C4j_XYHH.js";import"./Button-BRPJGwxW.js";import"./small-cross-DuhAL6sr.js";import"./ActionButton-B714-oEm.js";import"./Checkbox-Bh2TmZNs.js";import"./useValueChanged-BcgYf_g-.js";import"./CollapsiblePanel-CGEmJ7pB.js";import"./MultiColumnSortDialog-BG09muaJ.js";import"./MenuTrigger-Hd_x8Ak_.js";import"./CompositeItem-BvS25tKG.js";import"./ToolbarRootContext-DI7_yhQw.js";import"./getDisabledMountTransitionStyles-C1EOoGPU.js";import"./getPseudoElementBounds-DQR1f6L-.js";import"./chevron-down-D6HRZEJG.js";import"./index-CSnnu_0b.js";import"./error-DfBoM4j6.js";import"./BaseCbacBanner-DotI8txE.js";import"./makeExternalStore-BGED5qiE.js";import"./Tooltip-DfNwoZw4.js";import"./PopoverPopup-CF_q1uQg.js";import"./debounce-DvsBo_aI.js";import"./useOsdkClient-BHE0QTWa.js";import"./tick-BaNVK8r4.js";import"./DropdownField-CafXZJuf.js";import"./isEqual-BM_17_wf.js";import"./withOsdkMetrics-ptN3vt6M.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
