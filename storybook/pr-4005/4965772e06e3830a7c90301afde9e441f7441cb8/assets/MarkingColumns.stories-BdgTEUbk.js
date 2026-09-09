import{f as p,j as e}from"./iframe-BgIqeTr7.js";import{O as i}from"./object-table-BgPRUOdG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BbBE06U6.js";import"./Table-DRFmM6r6.js";import"./index-OeIAiwUu.js";import"./Dialog-BBAVymUP.js";import"./cross-Wbc8t1qS.js";import"./svgIconContainer-BtrJOEHF.js";import"./useBaseUiId-CgOsBxCj.js";import"./InternalBackdrop-DMG6Kgao.js";import"./composite-BF8O5dbv.js";import"./index-D9MNyfPv.js";import"./index-ef3bSd-w.js";import"./index-Zndx6d0R.js";import"./useEventCallback-NCRuje_c.js";import"./SkeletonBar-C2xca__T.js";import"./LoadingCell-Czld3W6q.js";import"./ColumnConfigDialog-juQqa1AG.js";import"./DraggableList-69AwVVwc.js";import"./search-BF7QrwO6.js";import"./Input-Ccm-R2od.js";import"./useControlled-DoFIiJ6c.js";import"./Button-WSqWRGZH.js";import"./small-cross-CIyGzgJb.js";import"./ActionButton-CAHKDpnU.js";import"./Checkbox-kISLw2AE.js";import"./useValueChanged-DLQjxulr.js";import"./CollapsiblePanel-CAigpV3T.js";import"./MultiColumnSortDialog-B4RUkkWy.js";import"./MenuTrigger-B4L1Oaqi.js";import"./CompositeItem-D2E5MTZ0.js";import"./ToolbarRootContext-XHaZZ7gx.js";import"./getDisabledMountTransitionStyles-DcXdOVhf.js";import"./getPseudoElementBounds-CACZ6uIC.js";import"./chevron-down-CZAmY7BW.js";import"./index-DA3CS0qW.js";import"./error-DvPLPT6J.js";import"./BaseCbacBanner-D_K-65aL.js";import"./makeExternalStore-_B_am4pH.js";import"./Tooltip-B4cDBo-J.js";import"./PopoverPopup-DNjj31SM.js";import"./debounce-l2WN3UdY.js";import"./useOsdkClient-DqUO6npy.js";import"./tick-BuwupeKW.js";import"./DropdownField-q8PA-aTt.js";import"./isEqual-XkXlL3kg.js";import"./withOsdkMetrics-D9CYPZjX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
