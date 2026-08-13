import{f as p,j as e}from"./iframe-C7p8bC4z.js";import{O as i}from"./object-table-rrHUvx8M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-yARIFMHO.js";import"./Table-BoMUec3S.js";import"./index-BSFFflxO.js";import"./Dialog-Bq7KV9Q4.js";import"./cross-D8SQea4D.js";import"./svgIconContainer-Bh8CNGr-.js";import"./useBaseUiId-D7Bs2_0o.js";import"./InternalBackdrop-CCB2qEvA.js";import"./composite-BOtNh-Av.js";import"./index-z04c2hdv.js";import"./index-c3k5U_lr.js";import"./index-4RswbLak.js";import"./useEventCallback-C2562mvs.js";import"./SkeletonBar-js0bkjyh.js";import"./LoadingCell-Q8eaYLNZ.js";import"./ColumnConfigDialog-C5dmJ6l5.js";import"./DraggableList--CB8Ubap.js";import"./search-D9u2yYuj.js";import"./Input-BAFeVd23.js";import"./useControlled-CwSyNuxB.js";import"./Button-DmUpkepK.js";import"./small-cross-CsyJylh1.js";import"./ActionButton-BxbEt6-S.js";import"./Checkbox-CFWr5Fpb.js";import"./useValueChanged-pEEmrO3V.js";import"./CollapsiblePanel-BeWBa9ma.js";import"./MultiColumnSortDialog-CtUkZIxz.js";import"./MenuTrigger-CIfXbfLR.js";import"./CompositeItem-D2oL3zur.js";import"./ToolbarRootContext-D3hUmd4P.js";import"./getDisabledMountTransitionStyles-DhuueIJo.js";import"./getPseudoElementBounds-BtoukLFj.js";import"./chevron-down-DB23ilQg.js";import"./index-TDqpefMN.js";import"./error-DM0DBmSQ.js";import"./BaseCbacBanner-FJJsg6sF.js";import"./makeExternalStore-DDCjJxWP.js";import"./Tooltip-DejVHDp6.js";import"./PopoverPopup-1qbE86q5.js";import"./debounce-CY32HLro.js";import"./useOsdkClient-BlmAulng.js";import"./tick-n--SCLbF.js";import"./DropdownField-Wa7Oy1zJ.js";import"./isEqual-BGjsRR-O.js";import"./withOsdkMetrics-CpiFq1j5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
