import{f as p,j as e}from"./iframe-i_9Nw0aL.js";import{O as i}from"./object-table-f3XuAxzL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B6z7q6ev.js";import"./Table-qqKMoyF4.js";import"./index-xy7OH4WM.js";import"./Dialog-CPeu6G82.js";import"./cross-QqYP1fee.js";import"./svgIconContainer-3Y9_T1l7.js";import"./useBaseUiId-BMuu8nEn.js";import"./InternalBackdrop-ChYWKohY.js";import"./composite-BEolDa-D.js";import"./index-DFV1oDTw.js";import"./index-DBCrB76S.js";import"./index-DLeoqhRa.js";import"./useEventCallback-BWVM_xBp.js";import"./SkeletonBar-m7_oqjy5.js";import"./LoadingCell-DYhARKcP.js";import"./ColumnConfigDialog-BNOyyc7J.js";import"./DraggableList-BFhFmyUR.js";import"./search-CEIky3LJ.js";import"./Input-DSjQkga5.js";import"./useControlled-gY6NMr8Z.js";import"./Button-Cqo_9NuU.js";import"./small-cross-D-oeOHZb.js";import"./ActionButton-DoCWbHlm.js";import"./Checkbox-BxiFWmok.js";import"./useValueChanged-DZGUtt_l.js";import"./CollapsiblePanel-uhXZweix.js";import"./MultiColumnSortDialog-DPUj4uDW.js";import"./MenuTrigger-DVCrlIYb.js";import"./CompositeItem-CcQI67Uz.js";import"./ToolbarRootContext-C05xSZ6f.js";import"./getDisabledMountTransitionStyles-DwmQAXX5.js";import"./getPseudoElementBounds-rsgn8lVn.js";import"./chevron-down-D5tyPu8s.js";import"./index-DABPjbUn.js";import"./error-BtW_-Bd0.js";import"./BaseCbacBanner-BcoWqc6a.js";import"./makeExternalStore-DV-2pdTM.js";import"./Tooltip-BXqI72Um.js";import"./PopoverPopup-COfAsOM5.js";import"./debounce-Dt-hlKAZ.js";import"./useOsdkClient-1TtZSZAh.js";import"./tick-qmWuhCdU.js";import"./DropdownField-BOme1HDF.js";import"./isEqual-G20i65-m.js";import"./withOsdkMetrics-Bn9NhK2D.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
