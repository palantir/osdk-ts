import{f as p,j as e}from"./iframe-DhXfIq6R.js";import{O as i}from"./object-table-DBIkARTT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DatgPFZX.js";import"./Table-NsZNr82v.js";import"./index-CQ4eecZm.js";import"./Dialog-CzsUSlqO.js";import"./cross-CjebjloY.js";import"./svgIconContainer-4NKQuWor.js";import"./useBaseUiId-B3PC069q.js";import"./InternalBackdrop-J9PQGeSn.js";import"./composite-CCswUWBV.js";import"./index-Hw9O_E6A.js";import"./index-BFbo8Hvm.js";import"./index-vY9vJBl3.js";import"./useEventCallback-CW5iGxQC.js";import"./SkeletonBar-CInnzOG7.js";import"./LoadingCell-DHehGixe.js";import"./ColumnConfigDialog-BOBDHjYf.js";import"./DraggableList-DwZszNC8.js";import"./search-Dx_Pysa4.js";import"./Input-BBnEWswJ.js";import"./useControlled-3_t6o5ui.js";import"./Button-Cy8uxh9T.js";import"./small-cross-C4GUnBXR.js";import"./ActionButton-BkYoJ84i.js";import"./Checkbox-BVm5ACkl.js";import"./useValueChanged-CxpIXHpQ.js";import"./CollapsiblePanel-BVGCo3Z2.js";import"./MultiColumnSortDialog-CLLrLW1L.js";import"./MenuTrigger-BRpNTEcF.js";import"./CompositeItem-DvhhImuQ.js";import"./ToolbarRootContext-B9c-sG_O.js";import"./getDisabledMountTransitionStyles-DzdB_-qH.js";import"./getPseudoElementBounds-CsuJ4a0u.js";import"./chevron-down-CjJDYGij.js";import"./index-C3bckibU.js";import"./error-UalGv9XX.js";import"./BaseCbacBanner-DVggLEji.js";import"./makeExternalStore-BPGOv1IN.js";import"./Tooltip-Dt9x_i73.js";import"./PopoverPopup-Q9Yq24sl.js";import"./debounce-gdpJ20Mf.js";import"./useOsdkClient-DcI1QqiT.js";import"./tick-CvbiSVsc.js";import"./DropdownField-s38Gfc6y.js";import"./isEqual-CCqm4KEh.js";import"./withOsdkMetrics-DbQJKwoW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
