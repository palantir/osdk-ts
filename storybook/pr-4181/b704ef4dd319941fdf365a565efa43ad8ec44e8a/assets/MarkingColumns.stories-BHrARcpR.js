import{f as p,j as e}from"./iframe-N69vsxs5.js";import{O as i}from"./object-table--oS9lLXG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DK0eU9jP.js";import"./Table-BDw0zVSc.js";import"./index-DFVx6FW1.js";import"./Dialog-Cyl1rkzr.js";import"./cross-BdjHCXJd.js";import"./svgIconContainer-DHGJTaRH.js";import"./useBaseUiId-BOlvpNsK.js";import"./InternalBackdrop-CJ-MZyS5.js";import"./composite-DlZg84y_.js";import"./index-CshN8TfA.js";import"./index-CmUIsfdi.js";import"./index-B5NyIwpH.js";import"./useEventCallback-CIsta-Kv.js";import"./SkeletonBar-CxOLm6U3.js";import"./LoadingCell-D3W6Xq0V.js";import"./ColumnConfigDialog-wb4iu5K_.js";import"./DraggableList-DGvISr5x.js";import"./search-DHKYFAa1.js";import"./Input-DVgfJ9ud.js";import"./useControlled-HSJHWmyV.js";import"./Button-KvR9mvY1.js";import"./small-cross-BCBXkrpc.js";import"./ActionButton-_QLSmCEl.js";import"./Checkbox-D82l6YOs.js";import"./useValueChanged-Cmw18dL4.js";import"./CollapsiblePanel-BxyEH4DM.js";import"./MultiColumnSortDialog-DAgpNhCz.js";import"./MenuTrigger-CYNy5wPz.js";import"./CompositeItem-zsosIukW.js";import"./ToolbarRootContext-DAvYZo9n.js";import"./getDisabledMountTransitionStyles-DMbVH12F.js";import"./getPseudoElementBounds-DOAH-UkU.js";import"./chevron-down-I26OMj3W.js";import"./index-BLwokh6k.js";import"./error-vgCxf202.js";import"./BaseCbacBanner-Bc18pvVk.js";import"./makeExternalStore-BlbjB80h.js";import"./Tooltip-bOGOT-9E.js";import"./PopoverPopup-mInLly2E.js";import"./debounce-DK55d19x.js";import"./useOsdkClient-CzCwxYrp.js";import"./tick-CIuihs4e.js";import"./DropdownField-ByuxOcSB.js";import"./isEqual-BGChchyP.js";import"./withOsdkMetrics-D0jHdLVm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
