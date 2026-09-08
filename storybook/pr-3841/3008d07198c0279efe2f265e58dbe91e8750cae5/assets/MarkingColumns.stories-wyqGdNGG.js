import{f as p,j as e}from"./iframe-D-uQiAEU.js";import{O as i}from"./object-table-CnzEy9bK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-p4UgLAci.js";import"./Table-BbvHOkRI.js";import"./index-BAcJFtsj.js";import"./Dialog-CpPL-wiB.js";import"./cross-Cxa7qZ4s.js";import"./svgIconContainer-BwquE4X7.js";import"./useBaseUiId-ChN6vCz4.js";import"./InternalBackdrop-DOf7Wbxd.js";import"./composite-DTJJNp0D.js";import"./index-BoPOR_G0.js";import"./index-TpgQ4q1W.js";import"./index-DGCwle_4.js";import"./useEventCallback-Dl207dUq.js";import"./SkeletonBar-fhPn3StW.js";import"./LoadingCell-C_UtXYFD.js";import"./ColumnConfigDialog-BsKg96eB.js";import"./DraggableList-CrG98e0P.js";import"./search-C_-XZuxq.js";import"./Input-DgsAa7tc.js";import"./useControlled-CCwQc26W.js";import"./Button-DI6776iG.js";import"./small-cross-BVZp2NPW.js";import"./ActionButton-CSIdFpLA.js";import"./Checkbox-DfqF_62M.js";import"./useValueChanged-B5Exoyob.js";import"./CollapsiblePanel-BRn0DhId.js";import"./MultiColumnSortDialog-BOMM5sOv.js";import"./MenuTrigger-C45wYiBf.js";import"./CompositeItem-gF6WPsof.js";import"./ToolbarRootContext-DCPVbVwA.js";import"./getDisabledMountTransitionStyles-BWrmK3Yb.js";import"./getPseudoElementBounds-CEbtWgTD.js";import"./chevron-down-BwXU5HA0.js";import"./index-C2SgD6rg.js";import"./error-CnFMhHrw.js";import"./BaseCbacBanner-DzAdTHvi.js";import"./makeExternalStore-BRy1NQ_S.js";import"./Tooltip-DKGKb6ew.js";import"./PopoverPopup-oWHkAC_s.js";import"./debounce-CRIH8IRe.js";import"./useOsdkClient-B1rGRzo8.js";import"./tick-BL7yIHsf.js";import"./DropdownField-CAzO2VqE.js";import"./isEqual-Cq2Z2ug0.js";import"./withOsdkMetrics-DnhB_JkA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
