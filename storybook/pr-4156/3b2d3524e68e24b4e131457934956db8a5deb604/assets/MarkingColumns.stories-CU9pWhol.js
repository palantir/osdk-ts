import{f as p,j as e}from"./iframe-BzHLIdAf.js";import{O as i}from"./object-table-DM37Km92.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5EK4nFx.js";import"./Table-Bx5wVz4e.js";import"./index-tkfEcbGy.js";import"./Dialog-CDFlmzSQ.js";import"./cross-DFzeXQKN.js";import"./svgIconContainer-yN9N03QS.js";import"./useBaseUiId-DulnEBx2.js";import"./InternalBackdrop-BJGg8Bd5.js";import"./composite-C-vnMrHU.js";import"./index-BTFfBOqo.js";import"./index-B3AMqERT.js";import"./index-CZRv-oVY.js";import"./useEventCallback-D-Rcflfy.js";import"./SkeletonBar-NMHUoGf4.js";import"./LoadingCell-IPG9IyHM.js";import"./ColumnConfigDialog-DjP6HMk4.js";import"./DraggableList-Bcq6r3-A.js";import"./search-BBdM6dRe.js";import"./Input-DD8tFxDd.js";import"./useControlled-BUD4_K19.js";import"./Button-oOxpuNBl.js";import"./small-cross-BOLwRIx5.js";import"./ActionButton-CMQ5G7Nn.js";import"./Checkbox-C-2irHoe.js";import"./useValueChanged-BsO1IbSa.js";import"./CollapsiblePanel-D5VJxf2v.js";import"./MultiColumnSortDialog-D8F2KFw1.js";import"./MenuTrigger-SEsNi6ut.js";import"./CompositeItem-DoI0Nlr7.js";import"./ToolbarRootContext-DfZ85ISE.js";import"./getDisabledMountTransitionStyles-BMhngEHI.js";import"./getPseudoElementBounds-DzacU-6p.js";import"./chevron-down-C3-VW8uJ.js";import"./index-CNDpcyk6.js";import"./error-DnjCL8vD.js";import"./BaseCbacBanner-rRooezu9.js";import"./makeExternalStore-CzyuozHX.js";import"./Tooltip-D66jiuuz.js";import"./PopoverPopup-DottMH45.js";import"./debounce-B7Bw7NEb.js";import"./useOsdkClient-Dieuw0cs.js";import"./tick-qy3966gs.js";import"./DropdownField-DXwIrhJq.js";import"./isEqual-CyjIJqdd.js";import"./withOsdkMetrics-C6AsUlOu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
