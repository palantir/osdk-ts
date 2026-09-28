import{f as p,j as e}from"./iframe-C52xRtUi.js";import{O as i}from"./object-table-Mxubi6Oi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-VoitBlG4.js";import"./Table-56lXQUHG.js";import"./index-C7u1bqdX.js";import"./Dialog-C-md9JfH.js";import"./cross-a7kzaFsa.js";import"./svgIconContainer-BCVv-_g-.js";import"./useBaseUiId-DJafaxQ0.js";import"./InternalBackdrop-CPnudeT9.js";import"./composite-B5eZIT_T.js";import"./index-DzK9GJWU.js";import"./index-pyzUPPmp.js";import"./index-NQfdPmWP.js";import"./useEventCallback-B2UfFI64.js";import"./SkeletonBar-C9Im5d1S.js";import"./LoadingCell-N_99h5MN.js";import"./ColumnConfigDialog-kGgT8-Z2.js";import"./DraggableList-DpX7JZGp.js";import"./search-dgHR1_2q.js";import"./Input-BgQuQrPL.js";import"./useControlled-DX7cxw4N.js";import"./Button-B-u0RyTK.js";import"./small-cross-BTfaurxn.js";import"./ActionButton-BnaJtBw6.js";import"./Checkbox-P4X8R7rT.js";import"./useValueChanged-C6ayBYnA.js";import"./CollapsiblePanel-BotBzwtD.js";import"./MultiColumnSortDialog-BZIjIQKu.js";import"./MenuTrigger-qu4PEYKk.js";import"./CompositeItem-DAwBJWeq.js";import"./ToolbarRootContext-CVcuXFio.js";import"./getDisabledMountTransitionStyles-DvEu8SWi.js";import"./getPseudoElementBounds-Di3MTnX5.js";import"./chevron-down-C2zgY8nG.js";import"./index-1YKdHDT0.js";import"./error-COI_mt5G.js";import"./BaseCbacBanner-C56x04d7.js";import"./makeExternalStore-Km1yOtHY.js";import"./Tooltip-DHaZ_9Uj.js";import"./PopoverPopup-B7RCm-bJ.js";import"./debounce-tVcKeVmr.js";import"./useOsdkClient-vXZmMAP8.js";import"./tick-DcEx61V3.js";import"./DropdownField-BHSO6XDZ.js";import"./isEqual-Mg-KuvUN.js";import"./withOsdkMetrics-Csym3CTn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
