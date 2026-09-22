import{f as p,j as e}from"./iframe-DIhVLHWR.js";import{O as i}from"./object-table-Piy1vJFo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLYQvN5u.js";import"./Table-zCJrk9ZQ.js";import"./index-yKNrR2B4.js";import"./Dialog-V_m9DHPA.js";import"./cross-B1cvRkvv.js";import"./svgIconContainer-D0TTrVxE.js";import"./useBaseUiId-CNPP6ho2.js";import"./InternalBackdrop-lEVTZFj9.js";import"./composite-tiXb7rK6.js";import"./index-C5TdACSr.js";import"./index-CHn3e9nX.js";import"./index-CFb_KvGD.js";import"./useEventCallback-CFvkhzPc.js";import"./SkeletonBar-Bp3S-nOd.js";import"./LoadingCell-QagvA0gR.js";import"./ColumnConfigDialog-Cu5LvsFr.js";import"./DraggableList-VpWo4eap.js";import"./search-Cy5B3T22.js";import"./Input-BMTQDxuL.js";import"./useControlled-BGD6VLnv.js";import"./Button-vhJFIUHZ.js";import"./small-cross-C-n_IULq.js";import"./ActionButton-D4GpRNPK.js";import"./Checkbox-9qKXQZJs.js";import"./useValueChanged-BEZkKn0s.js";import"./CollapsiblePanel-hd58x1Xj.js";import"./MultiColumnSortDialog-HRXWxEOk.js";import"./MenuTrigger-imVGxdxT.js";import"./CompositeItem-oXJFfhwO.js";import"./ToolbarRootContext-DPTQ5YE4.js";import"./getDisabledMountTransitionStyles-BhOQM4-k.js";import"./getPseudoElementBounds-BvEiaKTW.js";import"./chevron-down-Cs6sjnv7.js";import"./index-CbR9L2SG.js";import"./error-BbBgUwm_.js";import"./BaseCbacBanner-gcBA-v35.js";import"./makeExternalStore-JpSfp1kg.js";import"./Tooltip-BrGNKtK_.js";import"./PopoverPopup-ZRsy0L-w.js";import"./debounce-BVO9QG61.js";import"./useOsdkClient-ClSS8h4g.js";import"./tick-BYc1w6Qb.js";import"./DropdownField-Cs1bE49h.js";import"./isEqual-DzjmoF6P.js";import"./withOsdkMetrics-Cal4vLIC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
