import{f as p,j as e}from"./iframe-DetImBFL.js";import{O as i}from"./object-table-l9nJQEnV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DN6cOUrg.js";import"./Table-CMwtMuro.js";import"./index-CjK2QqlI.js";import"./Dialog-DqgzoO1K.js";import"./cross-BTvDRRjf.js";import"./svgIconContainer-CuWFsLi_.js";import"./useBaseUiId-DyXUSeTY.js";import"./InternalBackdrop-DKm_sEMG.js";import"./composite-BM_kJ03V.js";import"./index-Dbo0Nida.js";import"./index-1NP1-UWN.js";import"./index-BqArXz2b.js";import"./useEventCallback-DGvbRIMO.js";import"./SkeletonBar-4ieJl6GY.js";import"./LoadingCell-CGeR1JKn.js";import"./ColumnConfigDialog-DlnX3h0V.js";import"./DraggableList-B7zhWw29.js";import"./search-e2lLNT_b.js";import"./Input-X6MfJgE7.js";import"./useControlled-BLemWNqF.js";import"./Button-CQ4Oxn8O.js";import"./small-cross-C-ziKcdd.js";import"./ActionButton-CgowrMZV.js";import"./Checkbox-CC4URrkY.js";import"./useValueChanged-CkoVxTgS.js";import"./CollapsiblePanel-D7JjcV__.js";import"./MultiColumnSortDialog-DZ9YJY6I.js";import"./MenuTrigger-L0DQBaQA.js";import"./CompositeItem-DSZEDG_X.js";import"./ToolbarRootContext-CemVikP4.js";import"./getDisabledMountTransitionStyles-JdcJj3gF.js";import"./getPseudoElementBounds-CL4lvn8M.js";import"./chevron-down-CGCRcDmq.js";import"./index-Dz3fekal.js";import"./error-CePwHWcz.js";import"./BaseCbacBanner-CVZyUjUG.js";import"./makeExternalStore-Dta9gR3b.js";import"./Tooltip-BKreMXEX.js";import"./PopoverPopup-DaARwFrv.js";import"./debounce-ZgZr2Rpo.js";import"./useOsdkClient-DV-Uh5dk.js";import"./tick-OHKO7Ym4.js";import"./DropdownField-GfiPe651.js";import"./isEqual-an0pKOrh.js";import"./withOsdkMetrics-tYPfHwL4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
