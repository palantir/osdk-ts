import{f as p,j as e}from"./iframe-C8cvGscG.js";import{O as i}from"./object-table-Bl9llTCt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DC1YHagZ.js";import"./Table-BVcwqCvL.js";import"./index-D4FQYl0T.js";import"./Dialog-RKsRHohX.js";import"./cross-CprIKEkv.js";import"./svgIconContainer-D4IADJhB.js";import"./useBaseUiId-CTQW4Qod.js";import"./InternalBackdrop-BV3x9fEB.js";import"./composite-BI_-Y8ZI.js";import"./index-Cv_Heaoa.js";import"./index-oJ8Xwr6M.js";import"./index-B2ai54ZH.js";import"./useEventCallback-DsFzeAUD.js";import"./SkeletonBar-cjwpOSyO.js";import"./LoadingCell-Dd5UKK1z.js";import"./ColumnConfigDialog-Cg99CLu5.js";import"./DraggableList-CcV87Ef7.js";import"./search-DscZjBaM.js";import"./Input-4ZH7Uf17.js";import"./useControlled-DPYDb1X5.js";import"./Button-s9umFZ1s.js";import"./small-cross-DIzXOG7S.js";import"./ActionButton-QzUJAPB3.js";import"./Checkbox-BmClsKng.js";import"./useValueChanged-QH4DQ2zL.js";import"./CollapsiblePanel-5tt-I1EX.js";import"./MultiColumnSortDialog-vSwuKr4r.js";import"./MenuTrigger-DU4NXXCA.js";import"./CompositeItem-CZOJvSSZ.js";import"./ToolbarRootContext-DOPDMGFM.js";import"./getDisabledMountTransitionStyles-EkzwfJQM.js";import"./getPseudoElementBounds-BljzcTzT.js";import"./chevron-down-Bg2Fi8_v.js";import"./index-BTdV_y6h.js";import"./error-BmJxtr8m.js";import"./BaseCbacBanner-3TLBV2iJ.js";import"./makeExternalStore-a9HEG5rq.js";import"./Tooltip-BO4BL-3C.js";import"./PopoverPopup-D6rFG9a_.js";import"./toNumber-DmqLeUcD.js";import"./useOsdkClient-BOTALPg3.js";import"./tick-Dq7YPYRG.js";import"./DropdownField-BoUvaA8o.js";import"./withOsdkMetrics-Bep4H7WL.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
