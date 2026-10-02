import{f as p,j as e}from"./iframe-DpUFwGwm.js";import{O as i}from"./object-table-CSsf7wx7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D7G3iNMY.js";import"./Table-nlH2SQUj.js";import"./index-BRNwf_dL.js";import"./Dialog-aU2zLBm5.js";import"./cross-BOdVaiDd.js";import"./svgIconContainer-DnMlbACY.js";import"./useBaseUiId-BCiTIIVN.js";import"./InternalBackdrop-CcB5ZdVo.js";import"./composite-Cj7Gyck6.js";import"./index-ySwYaDEc.js";import"./index-DauVYyRU.js";import"./index-1ybkaqeD.js";import"./useEventCallback-C_1b83KE.js";import"./SkeletonBar-B7RRaHio.js";import"./LoadingCell-B0fS22kl.js";import"./ColumnConfigDialog-DPX5_-xD.js";import"./DraggableList-C_PZjvkP.js";import"./search-BkAszfZ6.js";import"./Input-B7COcDHt.js";import"./useControlled-raZDZG7g.js";import"./Button-DfSDbPeQ.js";import"./small-cross-B-9K90Gm.js";import"./ActionButton-DopPp6r9.js";import"./Checkbox-Bz7CDvbc.js";import"./useValueChanged-BVjsLDJ4.js";import"./CollapsiblePanel-DV0xAGpE.js";import"./MultiColumnSortDialog-zSQJj82d.js";import"./MenuTrigger-DUfBpM0w.js";import"./CompositeItem-CN8uA6ij.js";import"./ToolbarRootContext-DKuVgI34.js";import"./getDisabledMountTransitionStyles-DXafZfY4.js";import"./getPseudoElementBounds-C6e9H8MY.js";import"./chevron-down-CYVMAiKh.js";import"./index-B-mDfD20.js";import"./error-B3ctmJqj.js";import"./BaseCbacBanner-Ck2b17wK.js";import"./makeExternalStore-Cx_BHKOC.js";import"./Tooltip-DYGDXGf_.js";import"./PopoverPopup-EnybrYm9.js";import"./debounce-DchhwRiM.js";import"./useOsdkClient-Dec5bd1s.js";import"./tick-B9gaIQRk.js";import"./DropdownField-DmDMqc8s.js";import"./isEqual-BLIZs3oM.js";import"./withOsdkMetrics-D7Wb3D4v.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
