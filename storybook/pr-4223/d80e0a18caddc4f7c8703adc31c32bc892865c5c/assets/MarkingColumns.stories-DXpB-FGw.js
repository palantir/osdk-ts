import{f as p,j as e}from"./iframe-CBRNe0Dg.js";import{O as i}from"./object-table-BAGMdVtf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJi7bbUl.js";import"./Table-B6sIuEtI.js";import"./index-BSRDLVEM.js";import"./Dialog-7DhHMlhh.js";import"./cross-DAsoWhzO.js";import"./svgIconContainer-BBVFHmV2.js";import"./useBaseUiId-D_HMOfD5.js";import"./InternalBackdrop-KEsOgzDz.js";import"./composite-BuD5KbGT.js";import"./index-DyLUaQFL.js";import"./index-BL4-PH8Q.js";import"./index-BiTypZqh.js";import"./useEventCallback-D4SpnnAU.js";import"./SkeletonBar-olnbAch4.js";import"./LoadingCell-Bbdx2Tuz.js";import"./ColumnConfigDialog-DfhZEQxL.js";import"./DraggableList-CkYWh6sa.js";import"./search-vRSw7SVB.js";import"./Input-DE2kadHj.js";import"./useControlled-DvLu4sEA.js";import"./Button-BwFbzqgO.js";import"./small-cross-PLNqiuOL.js";import"./ActionButton-DKIq8eOB.js";import"./Checkbox-C94siIa5.js";import"./useValueChanged-CFTTzEg_.js";import"./CollapsiblePanel-B4faU3Bh.js";import"./MultiColumnSortDialog-DsDFOMHG.js";import"./MenuTrigger-DVdt-2IF.js";import"./CompositeItem-Di3J0NmB.js";import"./ToolbarRootContext-DULN64W3.js";import"./getDisabledMountTransitionStyles-BaZsOBxZ.js";import"./getPseudoElementBounds-B95LpML9.js";import"./chevron-down-B0oPEK-O.js";import"./index-BZ5chbDc.js";import"./error-BdLYnG0k.js";import"./BaseCbacBanner-r6MsogDY.js";import"./makeExternalStore-BNcpWlh9.js";import"./Tooltip--QZaQjFA.js";import"./PopoverPopup-09yaNLgW.js";import"./debounce-B56v9xFw.js";import"./useOsdkClient-AKuj0MEq.js";import"./tick-B2SeXnIY.js";import"./DropdownField-BFeUwC4l.js";import"./isEqual-tg2tvR8k.js";import"./withOsdkMetrics-BL4vab8_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
