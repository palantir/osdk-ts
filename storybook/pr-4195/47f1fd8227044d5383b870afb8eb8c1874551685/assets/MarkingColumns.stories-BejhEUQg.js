import{f as p,j as e}from"./iframe-Brmfbmz5.js";import{O as i}from"./object-table-CZyOPeX-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DOndN82M.js";import"./Table-Dihz3VNY.js";import"./index-CdHtMllz.js";import"./Dialog-kDCJqmDt.js";import"./cross-fGiz3Rjs.js";import"./svgIconContainer-Cy0NnLfo.js";import"./useBaseUiId-DOGmrDtt.js";import"./InternalBackdrop-BBaC-oN-.js";import"./composite-RDVcdR-R.js";import"./index-DIAM2hNo.js";import"./index-Dr0L57xQ.js";import"./index-CiHCZajJ.js";import"./useEventCallback-C-UQ4FkC.js";import"./SkeletonBar-Ctx3x6Sq.js";import"./LoadingCell-a5pDNTOJ.js";import"./ColumnConfigDialog-CE3UKD9L.js";import"./DraggableList-A99mHYVJ.js";import"./search-DtsbzCVy.js";import"./Input-BEXhNqGp.js";import"./useControlled-B9XW-ROk.js";import"./Button-BUGtRXvM.js";import"./small-cross-CYkGPall.js";import"./ActionButton-DhxyDZhK.js";import"./Checkbox-CkMSnatl.js";import"./useValueChanged-Dxcrt-LB.js";import"./CollapsiblePanel-CxH7OGUx.js";import"./MultiColumnSortDialog-BvGhLNBG.js";import"./MenuTrigger-NuCGdNBT.js";import"./CompositeItem-CAOvInfw.js";import"./ToolbarRootContext-DJZTCp8t.js";import"./getDisabledMountTransitionStyles-DnHbaKev.js";import"./getPseudoElementBounds-DBTAfkRQ.js";import"./chevron-down-Bstv9WV1.js";import"./index-DTHd-YPe.js";import"./error-CqVZQ730.js";import"./BaseCbacBanner-SgyeccVL.js";import"./makeExternalStore-BLoslo8k.js";import"./Tooltip-DTsAOBOi.js";import"./PopoverPopup-C2QBGYEY.js";import"./debounce-7VY6siZ3.js";import"./useOsdkClient-L9Axw6J7.js";import"./tick-CC58sMYT.js";import"./DropdownField-C8ZOeSWx.js";import"./isEqual-DRFwE4Y9.js";import"./withOsdkMetrics-By8VTH2x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
