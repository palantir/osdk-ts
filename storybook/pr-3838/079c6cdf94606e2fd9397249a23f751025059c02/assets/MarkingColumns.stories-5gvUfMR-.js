import{f as p,j as e}from"./iframe-CIVlBFCn.js";import{O as i}from"./object-table-D9Q_ikSF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B6mYsaJc.js";import"./Table-DZBaYXbE.js";import"./index-BQi6Abil.js";import"./Dialog-xUS2tuQU.js";import"./cross-D3bCQtqo.js";import"./svgIconContainer-1xBmK96Z.js";import"./useBaseUiId-Cyj56q5H.js";import"./InternalBackdrop-DDm_FHmN.js";import"./composite-Bp56YB0B.js";import"./index-CUBWxZlW.js";import"./index-CzaD-4Ts.js";import"./index-BHI7pjla.js";import"./useEventCallback-s8yM6zjT.js";import"./SkeletonBar-BYr110DW.js";import"./LoadingCell-BMFZr-G_.js";import"./ColumnConfigDialog-Bgzo5-pn.js";import"./DraggableList-DsASwHWG.js";import"./search-Cs4QzOir.js";import"./Input-Cvm-JmhM.js";import"./useControlled-CGspBM4Z.js";import"./isEqual-B4LCJh2e.js";import"./isObject-YbzMoxWR.js";import"./Button-BpMxh17E.js";import"./ActionButton-BW0Xstv0.js";import"./Checkbox-CiKvPBAD.js";import"./useValueChanged-DgcMUDnw.js";import"./CollapsiblePanel-CSoVN7zS.js";import"./MultiColumnSortDialog-CCNrU_89.js";import"./MenuTrigger-_NRYxiNX.js";import"./CompositeItem-BwbcMQJX.js";import"./ToolbarRootContext-DdrEfg7p.js";import"./getDisabledMountTransitionStyles-B-twLb_7.js";import"./getPseudoElementBounds-BiDP8mSE.js";import"./chevron-down-CtlSujAB.js";import"./index-Drqb8xJR.js";import"./error-CX8PxqwS.js";import"./BaseCbacBanner-B3OlMvKT.js";import"./makeExternalStore-C4HMHwO7.js";import"./Tooltip-DGd1zXdA.js";import"./PopoverPopup-C4GCHSK8.js";import"./toNumber-CsHgPj-_.js";import"./useOsdkClient-DWpCnDKc.js";import"./tick-DRN1ubyg.js";import"./DropdownField-DD8jwakx.js";import"./withOsdkMetrics-DGOG8EuQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
