import{f as p,j as e}from"./iframe-DFOR2onK.js";import{O as i}from"./object-table-BM-RBqZJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByXSQw30.js";import"./Table-D1mkb7tB.js";import"./index-BVkLsmBt.js";import"./Dialog-Ccg87r_l.js";import"./cross-C9kRknfx.js";import"./svgIconContainer-DjkUaIxk.js";import"./useBaseUiId-Dsp7jumh.js";import"./InternalBackdrop-DvUh0nKI.js";import"./composite-CRJMZ4tZ.js";import"./index-DY_-DVUB.js";import"./index-OUX8MUQn.js";import"./index-Dmn1pJPY.js";import"./useEventCallback-PkaVDlo9.js";import"./SkeletonBar-BdI0Hxl4.js";import"./LoadingCell-DUvn0GzQ.js";import"./ColumnConfigDialog-CeIa-WiN.js";import"./DraggableList-lAwP0gTH.js";import"./search-4X3AVeSP.js";import"./Input-tEOQdwSz.js";import"./useControlled-CtMTriq1.js";import"./Button-MewiuY9J.js";import"./small-cross-BDzP7tAy.js";import"./ActionButton-DSajpJr8.js";import"./Checkbox-DnvdOU0u.js";import"./useValueChanged-CgXmK7v2.js";import"./CollapsiblePanel-B8axV45E.js";import"./MultiColumnSortDialog-DrEjeaaR.js";import"./MenuTrigger-D29Qjhdm.js";import"./CompositeItem-CtUWLqeJ.js";import"./ToolbarRootContext-DMxHSqVF.js";import"./getDisabledMountTransitionStyles-LtGV7XWM.js";import"./getPseudoElementBounds-Bzd3adVt.js";import"./chevron-down-BMNaDKAR.js";import"./index-BCk6aVbl.js";import"./error-BAimxzZD.js";import"./BaseCbacBanner-rPUtaKKQ.js";import"./makeExternalStore-CaVoQzcs.js";import"./Tooltip-BbqW-UvY.js";import"./PopoverPopup-Cuu9Pm_U.js";import"./debounce-CgV8usSM.js";import"./useOsdkClient-MN7PkG3f.js";import"./tick-DIYXFliV.js";import"./DropdownField-DXyB4HbV.js";import"./isEqual-CesuJwK0.js";import"./withOsdkMetrics-of9jSM-3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
