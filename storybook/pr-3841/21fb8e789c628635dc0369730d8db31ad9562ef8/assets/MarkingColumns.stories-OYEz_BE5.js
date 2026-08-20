import{f as p,j as e}from"./iframe-6HLyOHdg.js";import{O as i}from"./object-table-BqDhRQfd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-lnZu1Hku.js";import"./Table-DKP_0kc6.js";import"./index-DddEJcCL.js";import"./Dialog-ePQRy_Kd.js";import"./cross-D90aPG-h.js";import"./svgIconContainer-Cen0mKtu.js";import"./useBaseUiId-CIjMevu3.js";import"./InternalBackdrop-C2llqmWt.js";import"./composite-BM-mnNQY.js";import"./index-BeSpr_z9.js";import"./index-BfmI1DCD.js";import"./index-CMiXIGXs.js";import"./useEventCallback-CGyP_YXR.js";import"./SkeletonBar-BQe4W9P_.js";import"./LoadingCell-D8Pa0_Yo.js";import"./ColumnConfigDialog-Bmzsfr0o.js";import"./DraggableList-CnlM9Y2g.js";import"./search-B78YoXrH.js";import"./Input-D3asMaDe.js";import"./useControlled-CWJ6yU13.js";import"./Button-Mer8XKS3.js";import"./small-cross-Tosz4TC-.js";import"./ActionButton-Be9rA2WR.js";import"./Checkbox-_hF1W5ki.js";import"./useValueChanged-FStlX83F.js";import"./CollapsiblePanel-C6rkwz0D.js";import"./MultiColumnSortDialog-DAOghwQ8.js";import"./MenuTrigger-BVV9Quwn.js";import"./CompositeItem-CRehYzcR.js";import"./ToolbarRootContext-LDbs2zUX.js";import"./getDisabledMountTransitionStyles-DY_L7rbU.js";import"./getPseudoElementBounds-B1zH-3ZD.js";import"./chevron-down-CJW3cPUU.js";import"./index-CEc6v-Oz.js";import"./error-DLYWmfkx.js";import"./BaseCbacBanner-Bzz1Jbsh.js";import"./makeExternalStore-ySOpHfFQ.js";import"./Tooltip-BUvlQdJ2.js";import"./PopoverPopup-CxJqbIU3.js";import"./debounce-CLtGcTV5.js";import"./useOsdkClient-Cgy0juQI.js";import"./tick-CqjJQuuI.js";import"./DropdownField-DOg9JlAb.js";import"./isEqual-CUgvzXaH.js";import"./withOsdkMetrics-eihAybMP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
