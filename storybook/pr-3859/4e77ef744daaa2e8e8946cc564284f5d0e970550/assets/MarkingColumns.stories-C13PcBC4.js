import{f as p,j as e}from"./iframe-DzWJ3tJf.js";import{O as i}from"./object-table-Bz7iI-Ye.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D60YPggq.js";import"./Table-kkUhVBB4.js";import"./index-jOIP15Dj.js";import"./Dialog-BGlkMOOL.js";import"./cross-CpclAF39.js";import"./svgIconContainer-NZX5zwbB.js";import"./useBaseUiId-B7BFDCom.js";import"./InternalBackdrop-DYkGzRer.js";import"./composite-BZh-eCsQ.js";import"./index-5-fC0lD_.js";import"./index-CZtqhO_b.js";import"./index-D4IY10Gn.js";import"./useEventCallback-CJtsemMV.js";import"./SkeletonBar-yALHjeEw.js";import"./LoadingCell-CrXDNdvR.js";import"./ColumnConfigDialog-JdeCx5Rx.js";import"./DraggableList-Bfwp7m6u.js";import"./search-GiMpebUt.js";import"./Input-9_-rD_6K.js";import"./useControlled-Qbs937Ua.js";import"./isEqual-DVM9u0ca.js";import"./isObject-BW4wDRVi.js";import"./Button-CTXwYA6d.js";import"./ActionButton-BdKawUax.js";import"./Checkbox--cGklhAL.js";import"./useValueChanged-BM6Ovdpe.js";import"./CollapsiblePanel-A3vtgCY0.js";import"./MultiColumnSortDialog-8-MZXVTR.js";import"./MenuTrigger-CAT0S7Uy.js";import"./CompositeItem-0GMeUwly.js";import"./ToolbarRootContext-RU1iJIsp.js";import"./getDisabledMountTransitionStyles-DVYPlgOw.js";import"./getPseudoElementBounds-CcvyTIsc.js";import"./chevron-down-C0NNvCS6.js";import"./index-CQvM6UYi.js";import"./error-tOl4PAnV.js";import"./BaseCbacBanner-LabUHbFe.js";import"./makeExternalStore-BlWDQNcY.js";import"./Tooltip-CLCbAZyz.js";import"./PopoverPopup-DN7FD26Y.js";import"./debounce-AtIUE0wB.js";import"./useOsdkClient-D0kFz6Qn.js";import"./tick-BbVCke-v.js";import"./DropdownField-DZY8cIEo.js";import"./withOsdkMetrics-oZAeB24-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
