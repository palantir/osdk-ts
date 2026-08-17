import{f as p,j as e}from"./iframe-UYCLthTQ.js";import{O as i}from"./object-table-DImQuH9S.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dz4E7M7Q.js";import"./Table-C2TWF7Cq.js";import"./index-D9-cjch2.js";import"./Dialog-DuoePkOB.js";import"./cross-BTIlSghM.js";import"./svgIconContainer-CSCo4VbW.js";import"./useBaseUiId-D_3Zahva.js";import"./InternalBackdrop-D-QyvJBW.js";import"./composite-CoPLS_PY.js";import"./index-MvHsJMCi.js";import"./index-CwqHoYwn.js";import"./index-DG3Dj0nZ.js";import"./useEventCallback-Dy795WfC.js";import"./SkeletonBar-Q06YcXYq.js";import"./LoadingCell-B2uS_rBv.js";import"./ColumnConfigDialog-xbncks_W.js";import"./DraggableList-5C_-7pLf.js";import"./search-O4v6z_KC.js";import"./Input-CEJvZIVl.js";import"./useControlled-BsiMxbV4.js";import"./Button-D_NPrqs2.js";import"./small-cross-DhT3GGuR.js";import"./ActionButton-bRkldw58.js";import"./Checkbox-qaZlBavv.js";import"./useValueChanged-TyLqj8UB.js";import"./CollapsiblePanel-C1s-WFkA.js";import"./MultiColumnSortDialog-CmD2Or6u.js";import"./MenuTrigger-DsIXfpa7.js";import"./CompositeItem-C4gD3gl2.js";import"./ToolbarRootContext-Dz0u6CZi.js";import"./getDisabledMountTransitionStyles-xim2gtNb.js";import"./getPseudoElementBounds-CgjC-nms.js";import"./chevron-down-CsxN-uGL.js";import"./index-DSgxSOB9.js";import"./error-Lq_gB-8h.js";import"./BaseCbacBanner-CT4YrDi4.js";import"./makeExternalStore-DTCTUDfU.js";import"./Tooltip-C6Y1hCeK.js";import"./PopoverPopup-hS14Tedr.js";import"./debounce-C6pOncFn.js";import"./useOsdkClient-DMikbfnK.js";import"./tick-BIgTeca4.js";import"./DropdownField-BWwVTe4_.js";import"./isEqual-F9ZP9YZl.js";import"./withOsdkMetrics-CbCyTjOI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
