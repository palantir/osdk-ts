import{f as p,j as e}from"./iframe-DcYOqu2U.js";import{O as i}from"./object-table-BUJ0UBkR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-S82--H9u.js";import"./Table-CdVuFRqi.js";import"./index-DiVuESi1.js";import"./Dialog-dtOt9m2Z.js";import"./cross-CDM50iQ0.js";import"./svgIconContainer-yWnKapjH.js";import"./useBaseUiId-BCzIH_us.js";import"./InternalBackdrop-CeJDAv-U.js";import"./composite-z-1xLKDd.js";import"./index-EYomkAWT.js";import"./index-0CesUQZv.js";import"./index-CknGzI9c.js";import"./useEventCallback-CcAOlUNX.js";import"./SkeletonBar-FDu5_K5F.js";import"./LoadingCell-DJEPgpK8.js";import"./ColumnConfigDialog-D87oUpOB.js";import"./DraggableList-BbaAj1ue.js";import"./search-DkFuHynJ.js";import"./Input-BDRGIKaZ.js";import"./useControlled-BUaPb3-r.js";import"./Button-_cT9fEiv.js";import"./small-cross-BTclTiS1.js";import"./ActionButton-CVvGpKcN.js";import"./Checkbox-Dc7MwXnE.js";import"./useValueChanged-CZEDJKXE.js";import"./CollapsiblePanel-DdleFq3w.js";import"./MultiColumnSortDialog-SDf46NGq.js";import"./MenuTrigger-B5vFtVv3.js";import"./CompositeItem-DDIaKXMB.js";import"./ToolbarRootContext-_iXFA-YU.js";import"./getDisabledMountTransitionStyles-csMlkapf.js";import"./getPseudoElementBounds-B3R2Xnt1.js";import"./chevron-down-CJhuOc7o.js";import"./index-DC8s7Au8.js";import"./error-CugXhAIj.js";import"./BaseCbacBanner-DvXGe8XZ.js";import"./makeExternalStore-DkFMYs8N.js";import"./Tooltip-CZmshqBI.js";import"./PopoverPopup-VAITxfkO.js";import"./debounce-B7Bz9Zmz.js";import"./useOsdkClient-DO7IEPKY.js";import"./tick-9LlYbapO.js";import"./DropdownField-DfYmYHBy.js";import"./isEqual-BBhQjzID.js";import"./withOsdkMetrics-D3ra-NNv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
