import{f as p,j as e}from"./iframe-D8PhF-eH.js";import{O as i}from"./object-table-QJ3HK8Pr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAjhLXlD.js";import"./Table-CcECbzZu.js";import"./index-GeJSxn-b.js";import"./Dialog-C7slmPym.js";import"./cross-B-SWIjS0.js";import"./svgIconContainer-B9myFr8z.js";import"./useBaseUiId-B7vHmMIX.js";import"./InternalBackdrop-CDjt8EEZ.js";import"./composite-D3ANHq5C.js";import"./index-BjXCP1BI.js";import"./index-C2YCUhpZ.js";import"./index-2ug0u_LS.js";import"./useEventCallback-ajaCVaB8.js";import"./SkeletonBar-CAeyHB0y.js";import"./LoadingCell-D3HWPBCC.js";import"./ColumnConfigDialog-Ba_XCAXP.js";import"./DraggableList-DIfW0b4S.js";import"./search-CFo5JCpY.js";import"./Input-BVLD4pm0.js";import"./useControlled-Bb2LNbVb.js";import"./Button-DJIgkoJK.js";import"./small-cross-BD-mjh3z.js";import"./ActionButton-fOJ3EwAB.js";import"./Checkbox-bKsOVh7f.js";import"./useValueChanged-ByyRkrNk.js";import"./CollapsiblePanel-D_tXI55U.js";import"./MultiColumnSortDialog-CivCxfQ-.js";import"./MenuTrigger-CTHzCvWg.js";import"./CompositeItem-hs5t7L4r.js";import"./ToolbarRootContext-CfxpKT0G.js";import"./getDisabledMountTransitionStyles-CooKzbU3.js";import"./getPseudoElementBounds-BQakqMd3.js";import"./chevron-down-egnrEsvE.js";import"./index-3jm-2kpZ.js";import"./error-odhwE47h.js";import"./BaseCbacBanner-BLVhN8ZM.js";import"./makeExternalStore-XQeLMI6O.js";import"./Tooltip-BhGdix3S.js";import"./isObject-Ebfvx2IJ.js";import"./debounce-DR7aSozX.js";import"./useOsdkClient-Bm-QDIWM.js";import"./tick-ChgibA9T.js";import"./DropdownField-D1QY-U9Y.js";import"./isEqual-C80WN2k0.js";import"./_baseIsEqual-3sETV58K.js";import"./withOsdkMetrics-BIKp0vOQ.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
