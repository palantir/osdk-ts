import{f as p,j as e}from"./iframe-DfWRDQYW.js";import{O as i}from"./object-table-0ELPGqBW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DztOS3mh.js";import"./Table-1X9IgMXG.js";import"./index-V0duYaOI.js";import"./Dialog-C4bIPlLo.js";import"./cross-MjnJnae7.js";import"./svgIconContainer-Djmd0i7i.js";import"./useBaseUiId-CnljwGyr.js";import"./InternalBackdrop-DoRzr-yp.js";import"./composite-BvmRb9Ju.js";import"./index-BhBX8uvN.js";import"./index-DMKrGJHK.js";import"./index-DYScCha7.js";import"./useEventCallback-CYayy9CC.js";import"./SkeletonBar-CySSdz1h.js";import"./LoadingCell-DAkz6DbJ.js";import"./ColumnConfigDialog-U4Rq4-2Y.js";import"./DraggableList-RGn9snj7.js";import"./search-Dxbg6ZmT.js";import"./Input-DIDbgdBf.js";import"./useControlled-DFU1H8fZ.js";import"./Button-OSZ8RwgD.js";import"./small-cross-njJyO2z5.js";import"./ActionButton-B83nj9fh.js";import"./Checkbox-YVP5nlwK.js";import"./useValueChanged-BHeWLU1X.js";import"./CollapsiblePanel-BDCG0rsw.js";import"./MultiColumnSortDialog-Bc2CB9nf.js";import"./MenuTrigger-Do_XoF9D.js";import"./CompositeItem-Bp9WguhV.js";import"./ToolbarRootContext-DK75y1Fb.js";import"./getDisabledMountTransitionStyles-C83yZKEJ.js";import"./getPseudoElementBounds-C114fu7w.js";import"./chevron-down-DTtuRFlq.js";import"./index-BPZ3Sv03.js";import"./error-D9hH3fxG.js";import"./BaseCbacBanner-BUUHlDXj.js";import"./makeExternalStore-CSrQpL3l.js";import"./Tooltip-DfRWn6Xg.js";import"./PopoverPopup-DdFaHp8R.js";import"./debounce-Ci0e7f6p.js";import"./useOsdkClient-ClcuriQB.js";import"./tick-BjABB7E4.js";import"./DropdownField-BWEIQf9x.js";import"./isEqual-C6a_kdYK.js";import"./withOsdkMetrics-BqT8ORay.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
