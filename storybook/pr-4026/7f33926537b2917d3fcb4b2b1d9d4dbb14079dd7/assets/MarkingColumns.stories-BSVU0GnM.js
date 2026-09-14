import{f as p,j as e}from"./iframe-C3h4Q1BU.js";import{O as i}from"./object-table-DOUB00xj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CA8PdwhG.js";import"./Table-Dg5mPtzj.js";import"./index-CuMmyLu1.js";import"./Dialog-D6nxx4go.js";import"./cross-B1EMHtko.js";import"./svgIconContainer-DnZbbW9L.js";import"./useBaseUiId-CW_7Ddvm.js";import"./InternalBackdrop-Ba1aCLvg.js";import"./composite-CYiVeAjT.js";import"./index-CLYARYT8.js";import"./index-Xgl-RbZw.js";import"./index-P859LBRx.js";import"./useEventCallback-BLQ3vTi3.js";import"./SkeletonBar-DbGt7hsh.js";import"./LoadingCell-RQH4-_mP.js";import"./ColumnConfigDialog-rPSTeBCf.js";import"./DraggableList-Ds5SHM9Y.js";import"./search-BrzFjKOS.js";import"./Input-LpvjeHcx.js";import"./useControlled-CJNnVZBn.js";import"./Button-CgHUffbd.js";import"./small-cross-hDACPWQm.js";import"./ActionButton-DJigEBZw.js";import"./Checkbox-Civ60MA5.js";import"./useValueChanged-CkdtL1Gi.js";import"./CollapsiblePanel-BsLzX-dh.js";import"./MultiColumnSortDialog-Dvh_FUCg.js";import"./MenuTrigger-Cr6wd-UG.js";import"./CompositeItem-DI8BefCP.js";import"./ToolbarRootContext-AG_e6eyt.js";import"./getDisabledMountTransitionStyles-CAVDLyg8.js";import"./getPseudoElementBounds-Dbgyc2RJ.js";import"./chevron-down-BDOZijvO.js";import"./index-DeSqFGSS.js";import"./error-MSHCVYku.js";import"./BaseCbacBanner-BF4oAh-4.js";import"./makeExternalStore-Bit4WYt1.js";import"./Tooltip-QCUHwQU8.js";import"./PopoverPopup-CiqE5a5D.js";import"./debounce-CUSOW8NM.js";import"./useOsdkClient-BK_OZ78C.js";import"./tick-C54w7HIP.js";import"./DropdownField-TRgvUDZn.js";import"./isEqual-CAOlDPIr.js";import"./withOsdkMetrics-Bf4iaqB8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
