import{f as p,j as e}from"./iframe-DLHR6L4Z.js";import{O as i}from"./object-table-DrbkPQ4n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dx-zoqBZ.js";import"./Table-CFQwFyGq.js";import"./index-Ci6l6bLg.js";import"./Dialog-CMihgMQO.js";import"./cross-Dr9ey-no.js";import"./svgIconContainer-OFY1tmQv.js";import"./useBaseUiId-1yQPi4Ok.js";import"./InternalBackdrop-B_WdIFN7.js";import"./composite-DufSPfDq.js";import"./index-Cty81kva.js";import"./index-qvggJvKY.js";import"./index-BCQmOQno.js";import"./useEventCallback-WBP10YPW.js";import"./SkeletonBar-f-fkDeaw.js";import"./LoadingCell-DqrkyBlj.js";import"./ColumnConfigDialog-CZFlYxhK.js";import"./DraggableList-DJ0O4QG2.js";import"./search-BKzV_clV.js";import"./Input-DPBWJEz5.js";import"./useControlled-CyfyjGCX.js";import"./Button-Bfsbp0Vn.js";import"./small-cross-Coj1hZH_.js";import"./ActionButton-JQl4ud6K.js";import"./Checkbox-BKXlVChy.js";import"./useValueChanged-BoDeFmnt.js";import"./CollapsiblePanel-VYcA49X-.js";import"./MultiColumnSortDialog-BUws_Xs7.js";import"./MenuTrigger-DXpBlSqF.js";import"./CompositeItem-Uc_jxWPR.js";import"./ToolbarRootContext-huk_G4xt.js";import"./getDisabledMountTransitionStyles-C88-mCuq.js";import"./getPseudoElementBounds-C4j2UgFA.js";import"./chevron-down-CLyH651g.js";import"./index-DPyGU-iS.js";import"./error-CPzqX2rB.js";import"./BaseCbacBanner-BMeh3izb.js";import"./makeExternalStore-CGlrcfR1.js";import"./Tooltip-BYsQTzV_.js";import"./PopoverPopup-CUUPXvJN.js";import"./debounce-Cco9EZf3.js";import"./useOsdkClient-Ds4SzcYA.js";import"./tick-Dtw1ESRh.js";import"./DropdownField-D6WaBAb7.js";import"./isEqual-D_1wsBc-.js";import"./withOsdkMetrics-s0w2F5xR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
