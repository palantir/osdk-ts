import{f as p,j as e}from"./iframe-T1o6DwQn.js";import{O as i}from"./object-table-DZY8b-86.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CkSYKUqL.js";import"./Table-3iJd7gyC.js";import"./index-C-Yvvs3G.js";import"./Dialog-gA5oXLZl.js";import"./cross-DNFg9adP.js";import"./svgIconContainer-BEph9AST.js";import"./useBaseUiId-CQK9r6XJ.js";import"./InternalBackdrop-DwRohRWz.js";import"./composite-BUVy4G6Q.js";import"./index-Cj5oaWDZ.js";import"./index-DzvoDz4m.js";import"./index-B2yL0vo-.js";import"./useEventCallback-DCBJT6LD.js";import"./SkeletonBar-D77QBKOp.js";import"./LoadingCell-Idw7S2wY.js";import"./ColumnConfigDialog-vuVx74WT.js";import"./DraggableList-BY1xQfTl.js";import"./search-CLuqE52U.js";import"./Input-Dan1z7PJ.js";import"./useControlled-KFuOJB7y.js";import"./isEqual-DPxqtn2A.js";import"./isObject-BPUwpKdJ.js";import"./Button-B5AFRMRx.js";import"./ActionButton-DFoxUgo7.js";import"./Checkbox-CLP1JsNX.js";import"./useValueChanged-D-Nexx1O.js";import"./CollapsiblePanel-VveLCUij.js";import"./MultiColumnSortDialog-fd0ORnEb.js";import"./MenuTrigger-B-v3EPiU.js";import"./CompositeItem-Cwg9cZxl.js";import"./ToolbarRootContext-CmFCJCtX.js";import"./getDisabledMountTransitionStyles-BPa-nMbj.js";import"./getPseudoElementBounds-Hdyo3ffU.js";import"./chevron-down-DR4svmgW.js";import"./index-D1JQTjX2.js";import"./error-Cwg5VJo2.js";import"./BaseCbacBanner-Cz8vVRvX.js";import"./makeExternalStore-BlXYWwZo.js";import"./Tooltip-CZ9oTlF0.js";import"./PopoverPopup-GGnOhBXr.js";import"./toNumber-B0doV3z3.js";import"./useOsdkClient-30aL_up_.js";import"./tick-6XDwjxMK.js";import"./DropdownField-djZ4N90-.js";import"./withOsdkMetrics-B2606ITo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
