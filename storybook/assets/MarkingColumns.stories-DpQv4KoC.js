import{f as p,j as e}from"./iframe-C9Yk6gDU.js";import{O as i}from"./object-table-D6erdPoU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C1C1Zb7q.js";import"./index-C1LUXaZv.js";import"./Dialog-CDkS_jOu.js";import"./cross--AbW-HvV.js";import"./svgIconContainer-Vc9A0mR-.js";import"./useBaseUiId-b5v8aEB7.js";import"./InternalBackdrop-C7n6oAdh.js";import"./composite-DaJF-Ug9.js";import"./index-BqzRBHu8.js";import"./index-CvC-GtCK.js";import"./index-Pn3t-jka.js";import"./useEventCallback-CKcNtt_k.js";import"./SkeletonBar-DdG9T8Ii.js";import"./LoadingCell-nvv6E0-U.js";import"./ColumnConfigDialog-BmorUqWW.js";import"./DraggableList-qGQ6dVRD.js";import"./search-7dKohem7.js";import"./Input-DAXz4YJS.js";import"./useControlled-DMm9xSYk.js";import"./Button-y2WBjgut.js";import"./small-cross-CbivvQt1.js";import"./ActionButton-dAjZm_x0.js";import"./Checkbox-CC7puzXu.js";import"./useValueChanged-RmTUBVN2.js";import"./CollapsiblePanel-C_lIliGf.js";import"./MultiColumnSortDialog-0wa6dZr4.js";import"./MenuTrigger-BZRPF_be.js";import"./CompositeItem-BZYu3hRC.js";import"./ToolbarRootContext-mnplRdcK.js";import"./getDisabledMountTransitionStyles-O3sebmRm.js";import"./getPseudoElementBounds-BNgO_MWm.js";import"./chevron-down-C4Xw0sT3.js";import"./index-iqHzidmh.js";import"./error-c-8HRK8d.js";import"./BaseCbacBanner-BJC8pASp.js";import"./makeExternalStore-BIsaNjNd.js";import"./Tooltip-CPPwTdsT.js";import"./PopoverPopup-B_2bYS3U.js";import"./debounce-BTWXBbIs.js";import"./useOsdkClient-BnQc_DSv.js";import"./tick-iNYSCbk-.js";import"./DropdownField-DhZIM-xb.js";import"./isEqual-CJvGUfrO.js";import"./withOsdkMetrics-OfArat_u.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
