import{f as p,j as e}from"./iframe-PECeEW3T.js";import{O as i}from"./object-table-LBakupUf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6A5QCy5.js";import"./Table-BWD-PnJ7.js";import"./index-BjSahMIP.js";import"./Dialog-BqqkE3KK.js";import"./cross-jtAUAPzX.js";import"./svgIconContainer-B-v0aTHG.js";import"./useBaseUiId-D-8DZjqe.js";import"./InternalBackdrop-O0lOdESn.js";import"./composite-Ce7Nqskp.js";import"./index-ieJWeIAg.js";import"./index-C9QXfA_d.js";import"./index-DtGkyzrP.js";import"./useEventCallback-DyH-DdM5.js";import"./SkeletonBar-BMS3_wA0.js";import"./LoadingCell-6LypjGrw.js";import"./ColumnConfigDialog-DSzAIdyP.js";import"./DraggableList-Ci3g6B9Z.js";import"./search-CpCpMqWp.js";import"./Input-Dyun1iu7.js";import"./useControlled-rCZffMic.js";import"./Button-LcQP4ZCC.js";import"./small-cross-Dy6Y0Hcc.js";import"./ActionButton-B99REHhD.js";import"./Checkbox-CxAecBCs.js";import"./useValueChanged-ChvBCWAV.js";import"./CollapsiblePanel-BsfLZLWB.js";import"./MultiColumnSortDialog-BP9-8PQ8.js";import"./MenuTrigger-DQ_Gyd4O.js";import"./CompositeItem-CUJUUY83.js";import"./ToolbarRootContext-CpX9GNwO.js";import"./getDisabledMountTransitionStyles-CKuvmIJF.js";import"./getPseudoElementBounds-DuSZBJyL.js";import"./chevron-down-CxtRUuHx.js";import"./index-BKt47rIQ.js";import"./error-BJrA_-EN.js";import"./BaseCbacBanner-PxU5sa-M.js";import"./makeExternalStore-v3gjQsp8.js";import"./Tooltip-CNpkEvmJ.js";import"./PopoverPopup-B6HgbBU2.js";import"./debounce-DUaEl7gF.js";import"./useOsdkClient-DubZDY7d.js";import"./tick-zmXIdbTH.js";import"./DropdownField-D4M8Ec5T.js";import"./isEqual-D_x1Rpx1.js";import"./withOsdkMetrics-CQL6tA2X.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
