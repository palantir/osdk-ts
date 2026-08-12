import{f as p,j as e}from"./iframe-BH5IiT7r.js";import{O as i}from"./object-table-BW6RTOXg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgcnXVY5.js";import"./Table-D_W9urGu.js";import"./index-C-xq5Jew.js";import"./Dialog-C6OztUa_.js";import"./cross-ffgBmB0d.js";import"./svgIconContainer-GOdrTkUX.js";import"./useBaseUiId-BT9W5-EQ.js";import"./InternalBackdrop-CW3CGDGx.js";import"./composite-zGPWEU1s.js";import"./index-CgtSgOie.js";import"./index-17g8derX.js";import"./index-gEdevmN0.js";import"./useEventCallback-CVRpqdys.js";import"./SkeletonBar-C-uw19Eo.js";import"./LoadingCell-D2amFioP.js";import"./ColumnConfigDialog-BHvw7gNa.js";import"./DraggableList-MtpUaxAL.js";import"./search-BDtWZjZ5.js";import"./Input-BFWuvbJ_.js";import"./useControlled-CWW3ek2h.js";import"./isEqual-BC2M-2CX.js";import"./isObject-CMbI-zc1.js";import"./Button-BFL5vhLR.js";import"./ActionButton-BeBI1zwZ.js";import"./Checkbox-DWu4oxw1.js";import"./useValueChanged-BIJBxhOX.js";import"./CollapsiblePanel-CE6t4zMY.js";import"./MultiColumnSortDialog-Dq1D8klA.js";import"./MenuTrigger-DJczZRaO.js";import"./CompositeItem-DLW8zfDE.js";import"./ToolbarRootContext-BVDM8PzK.js";import"./getDisabledMountTransitionStyles-D_kMbb23.js";import"./getPseudoElementBounds-Cu4Nj1AV.js";import"./chevron-down-DlwuI3Cv.js";import"./index-D0K_ANpa.js";import"./error-BQnTtdHZ.js";import"./BaseCbacBanner-BLenB8LF.js";import"./makeExternalStore-Bf5Duafr.js";import"./Tooltip-BLCkRQ77.js";import"./PopoverPopup-BPSLn2US.js";import"./toNumber-CFbWl-Bc.js";import"./useOsdkClient-DuTHbZmX.js";import"./tick-CgIBwy3v.js";import"./DropdownField-X9oL0fth.js";import"./withOsdkMetrics-DGdq_Xe-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
