import{f as p,j as e}from"./iframe-DnOey83C.js";import{O as i}from"./object-table-n0NLcbmZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CEV440E1.js";import"./Table-CwquJVMG.js";import"./index-BIJ6fYvk.js";import"./Dialog-C_Rwtlem.js";import"./cross-B4zEOr1u.js";import"./svgIconContainer-BX0rooyi.js";import"./useBaseUiId-DYH1wxfF.js";import"./InternalBackdrop-Cg_GZXCO.js";import"./composite-uM8HrJm1.js";import"./index-gVUj6237.js";import"./index-DPxA-l2q.js";import"./index-Bhk79zz8.js";import"./useEventCallback-Bfvx_x8s.js";import"./SkeletonBar-DjGBiB-_.js";import"./LoadingCell-DXN749lM.js";import"./ColumnConfigDialog-B-ujE7Qd.js";import"./DraggableList-DLIg-SyJ.js";import"./search-CqHVyKly.js";import"./Input-C3af8CQ0.js";import"./useControlled-CV8__y_P.js";import"./Button-CQihg8uV.js";import"./small-cross-IwpXYFe-.js";import"./ActionButton-C4u-6-5W.js";import"./Checkbox-BAX4065-.js";import"./useValueChanged-CgfaezFM.js";import"./CollapsiblePanel-DkmUI4kJ.js";import"./MultiColumnSortDialog-syXb2cTA.js";import"./MenuTrigger-DIo57WHc.js";import"./CompositeItem-3RLloUvB.js";import"./ToolbarRootContext-BHnzj6Hz.js";import"./getDisabledMountTransitionStyles-BiGSYddH.js";import"./getPseudoElementBounds-GW5dp8q2.js";import"./chevron-down-D_dDeZyS.js";import"./index-CuODewOH.js";import"./error-2pL8Nqzq.js";import"./BaseCbacBanner-BX2R6LPY.js";import"./makeExternalStore-DlRIBm2d.js";import"./Tooltip-DddAZoZH.js";import"./PopoverPopup-BmAbMe-q.js";import"./debounce-D0CZLrXI.js";import"./useOsdkClient-B3Gk2B3w.js";import"./tick-Bj7rJCFA.js";import"./DropdownField-DvwvHNKL.js";import"./isEqual-sLynspCG.js";import"./withOsdkMetrics-DLqBodbC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
