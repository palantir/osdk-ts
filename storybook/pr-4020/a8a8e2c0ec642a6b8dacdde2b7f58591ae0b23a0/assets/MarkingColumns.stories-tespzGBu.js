import{f as p,j as e}from"./iframe-C2ZZ3cOF.js";import{O as i}from"./object-table-D9lkTMXk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJtcF0-s.js";import"./Table-DpsKDQYa.js";import"./index-DsoOCFTI.js";import"./Dialog-BZHpATCh.js";import"./cross--ibNnIEf.js";import"./svgIconContainer-DGGhigwB.js";import"./useBaseUiId-rOymOOAJ.js";import"./InternalBackdrop-DCDgroAI.js";import"./composite-Ddvv9IrU.js";import"./index-CTwT6nYN.js";import"./index-DSVH0ev_.js";import"./index-yDJJIzMt.js";import"./useEventCallback-B3d5wrwR.js";import"./SkeletonBar-CuXnc-bL.js";import"./LoadingCell-CMtPsv4A.js";import"./ColumnConfigDialog-DuvVpeqU.js";import"./DraggableList-C4T7r2IB.js";import"./search-U62jo3I0.js";import"./Input-Dmhhrwdm.js";import"./useControlled-OqQhu2z4.js";import"./Button-D9oV_2gB.js";import"./small-cross-D1YvVRXB.js";import"./ActionButton-Behm8cD1.js";import"./Checkbox-Dnufhn9O.js";import"./useValueChanged-DCNsd_18.js";import"./CollapsiblePanel-omRA8Wab.js";import"./MultiColumnSortDialog-DvXdzalI.js";import"./MenuTrigger-ffNJhOok.js";import"./CompositeItem-DUancClF.js";import"./ToolbarRootContext-B1pHyjdA.js";import"./getDisabledMountTransitionStyles-Baz1yk5y.js";import"./getPseudoElementBounds-CKnr_cwE.js";import"./chevron-down-Btxrg9J1.js";import"./index-DlwYymDm.js";import"./error-fD8lMeVM.js";import"./BaseCbacBanner-tUaxtrFw.js";import"./makeExternalStore-C0CUUcCC.js";import"./Tooltip-_hliLngy.js";import"./PopoverPopup-BaZJt03D.js";import"./debounce-BLIS2g0T.js";import"./useOsdkClient-C074xW8m.js";import"./tick-BQbrvSw2.js";import"./DropdownField-BLQjRzQd.js";import"./isEqual-cE_q7Xx5.js";import"./withOsdkMetrics-vMcZolIP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
