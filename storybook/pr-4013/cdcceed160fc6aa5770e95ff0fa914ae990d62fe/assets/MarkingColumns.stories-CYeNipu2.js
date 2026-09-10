import{f as p,j as e}from"./iframe-DbFztG_g.js";import{O as i}from"./object-table-DakC0UvK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5yPlXN3h.js";import"./Table-DXhvFm28.js";import"./index-BNGbb9rK.js";import"./Dialog-q53uo3YQ.js";import"./cross-DGv6zSaG.js";import"./svgIconContainer-BS_91pYI.js";import"./useBaseUiId-BJNUcsKi.js";import"./InternalBackdrop-CURYnF5m.js";import"./composite-DmkJ6YWF.js";import"./index-CjeOPmmS.js";import"./index-DUEaSppR.js";import"./index-B0uGE4ks.js";import"./useEventCallback-F0l_MlCv.js";import"./SkeletonBar-D8SjsLKR.js";import"./LoadingCell-Cj4TVOF3.js";import"./ColumnConfigDialog-Dn26_iFA.js";import"./DraggableList-C3mC8XZq.js";import"./search-BDnZaHng.js";import"./Input-C-K2OOHO.js";import"./useControlled-CtpQZwRP.js";import"./Button-UBStgghd.js";import"./small-cross-CiVArRcv.js";import"./ActionButton-DsNauwQt.js";import"./Checkbox-Yc4IFuTT.js";import"./useValueChanged-DOektkSI.js";import"./CollapsiblePanel-DDI1QtmT.js";import"./MultiColumnSortDialog-COhhLmwJ.js";import"./MenuTrigger-ZUe1vObH.js";import"./CompositeItem-Of_bmSJ2.js";import"./ToolbarRootContext-DsXUgMuU.js";import"./getDisabledMountTransitionStyles-Dc2XzWk7.js";import"./getPseudoElementBounds-CpWrqgEu.js";import"./chevron-down-teVJIekx.js";import"./index-aejPdgJq.js";import"./error-0lPH6zk9.js";import"./BaseCbacBanner-DWr_tjn4.js";import"./makeExternalStore-BJK_8FWf.js";import"./Tooltip-giWbl0Po.js";import"./PopoverPopup-DN6pjWYz.js";import"./debounce-CDd2V2U5.js";import"./useOsdkClient-Ds-rIrkC.js";import"./tick-B71QKXh9.js";import"./DropdownField-DfoJZ2WC.js";import"./isEqual-Bot5OO9s.js";import"./withOsdkMetrics-C9cTzLSh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
