import{f as p,j as e}from"./iframe-BAOOmxmu.js";import{O as i}from"./object-table-lyOdhbIm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BIm_Fr-4.js";import"./Table-oXFWfW38.js";import"./index-QY-KQRXF.js";import"./Dialog-D-qSwK9V.js";import"./cross-h2O47eJg.js";import"./svgIconContainer-Bp5LkjRC.js";import"./useBaseUiId-B4ZR21gm.js";import"./InternalBackdrop-CM1IsXud.js";import"./composite-DMwFPLnT.js";import"./index-DDBX-eT9.js";import"./index-20cLn6S1.js";import"./index-BoMMojJ9.js";import"./useEventCallback-DWFrmsqt.js";import"./SkeletonBar-CC4f_ujB.js";import"./LoadingCell-PBZuzgBJ.js";import"./ColumnConfigDialog-BYk1h3uX.js";import"./DraggableList-BKwbFcH0.js";import"./search-D68AVNns.js";import"./Input-d_-ySvYA.js";import"./useControlled-CuqfVZxX.js";import"./Button-btye1J53.js";import"./small-cross-DGk8qS5c.js";import"./ActionButton-Cfr9kbRA.js";import"./Checkbox-De9kV-mT.js";import"./useValueChanged-BSyPbCHB.js";import"./CollapsiblePanel-BN5oNg3z.js";import"./MultiColumnSortDialog-BdHUNwu9.js";import"./MenuTrigger-Di4mAf04.js";import"./CompositeItem-BPZd139z.js";import"./ToolbarRootContext-C5dbAl4m.js";import"./getDisabledMountTransitionStyles-raUh3s1U.js";import"./getPseudoElementBounds-CUG0gOL4.js";import"./chevron-down-Dwrs1hNu.js";import"./index-DyTfUGkB.js";import"./error-BswP0WVl.js";import"./BaseCbacBanner-B-I3Tp0k.js";import"./makeExternalStore-DNiKFXrW.js";import"./Tooltip-BkO9PIng.js";import"./PopoverPopup-CJ9iUHSY.js";import"./debounce-YjlmO8bW.js";import"./useOsdkClient-Cb63-21m.js";import"./tick-BQoQRlmD.js";import"./DropdownField-C3tYCGBa.js";import"./isEqual-C_qKHYvW.js";import"./withOsdkMetrics-C7ktc4nn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
