import{f as p,j as e}from"./iframe-BKvHrTnY.js";import{O as i}from"./object-table-dfdTUyiR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CoRksuzd.js";import"./Table-B29hTlS5.js";import"./index-rUQDaSAn.js";import"./Dialog-DaOGCD4R.js";import"./cross-DA7ChnMu.js";import"./svgIconContainer-PUQwmYf6.js";import"./useBaseUiId-CGTe-Nun.js";import"./InternalBackdrop-BLVhnK9n.js";import"./composite-BbDh-O6T.js";import"./index-BpNIUQVs.js";import"./index-CLKVOUxl.js";import"./index-CsvxdTi2.js";import"./useEventCallback-CbBJop34.js";import"./SkeletonBar-DQP9L77w.js";import"./LoadingCell-DVEVD3_d.js";import"./ColumnConfigDialog-Ci6pu3Ub.js";import"./DraggableList-R5VUcA9e.js";import"./search-Dbb6-sbu.js";import"./Input-C4eLCz5A.js";import"./useControlled-DhbqroXM.js";import"./isEqual-CVAQsW_R.js";import"./isObject-C_dCxk37.js";import"./Button-DuFY6WZV.js";import"./ActionButton-82aC6zfA.js";import"./Checkbox-DbvC00Sj.js";import"./useValueChanged-D4XpUpxP.js";import"./CollapsiblePanel-CILetta1.js";import"./MultiColumnSortDialog-lF0MJJLu.js";import"./MenuTrigger-D49rl2_N.js";import"./CompositeItem-Duo2TAMh.js";import"./ToolbarRootContext-xvHuYAEc.js";import"./getDisabledMountTransitionStyles-DRF5LK-l.js";import"./getPseudoElementBounds-C1BxtwWY.js";import"./chevron-down-DabCumzI.js";import"./index-X0S4TuAp.js";import"./error-DTZ2scD_.js";import"./BaseCbacBanner-toUcHF7o.js";import"./makeExternalStore-Da6NdYn7.js";import"./Tooltip-yA1aXIF8.js";import"./PopoverPopup-CohrSeYM.js";import"./toNumber-Cpsxj1fj.js";import"./useOsdkClient-BChUCHjG.js";import"./tick-BPLLt8Qy.js";import"./DropdownField-BHO8l0-r.js";import"./withOsdkMetrics-4uldwMwY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
