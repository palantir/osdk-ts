import{f as p,j as e}from"./iframe-BTO3ph4q.js";import{O as i}from"./object-table-ZtjQh0D1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtN9PVAK.js";import"./Table-D1saxuSL.js";import"./index-x3hFww3S.js";import"./Dialog-twcDSStr.js";import"./cross-O3i2QmOd.js";import"./svgIconContainer-CevlEVVg.js";import"./useBaseUiId-1MvsnHF0.js";import"./InternalBackdrop-B8D4UxU4.js";import"./composite-7kQ7OmSD.js";import"./index-CyMmgwkh.js";import"./index-BtRkO4nr.js";import"./index-OkUz4tnS.js";import"./useEventCallback-DVIoo-le.js";import"./SkeletonBar-DnIcD4-7.js";import"./LoadingCell-Dr1yP9hd.js";import"./ColumnConfigDialog-CzpHCp2S.js";import"./DraggableList-kTaWSR77.js";import"./search-DuX0harO.js";import"./Input-D7e4vYID.js";import"./useControlled-D3IlQblQ.js";import"./Button-CQHuz0SR.js";import"./small-cross-BntLkeb7.js";import"./ActionButton-vd1tLPE-.js";import"./Checkbox-CIBOJMyv.js";import"./useValueChanged-RARJ6Fyz.js";import"./CollapsiblePanel-CADx3q8o.js";import"./MultiColumnSortDialog-D6_aaGU_.js";import"./MenuTrigger-Bx-NfINM.js";import"./CompositeItem-D4n0rGlc.js";import"./ToolbarRootContext-0OHqE9f1.js";import"./getDisabledMountTransitionStyles-C7iSZ93K.js";import"./getPseudoElementBounds-DUZbWFdi.js";import"./chevron-down-BJp9RPDS.js";import"./index-DiCFXBX4.js";import"./error-Z9A5zRFa.js";import"./BaseCbacBanner-Ds7WPPqk.js";import"./makeExternalStore-D6jtgBE4.js";import"./Tooltip-tv9WXm6u.js";import"./PopoverPopup-CUZk9_WB.js";import"./debounce-BQY7DgD2.js";import"./useOsdkClient-NkKMF8Dg.js";import"./tick-B6zWYNj2.js";import"./DropdownField-CtnJsT3u.js";import"./isEqual--Y75NqJ1.js";import"./withOsdkMetrics-B5F2x99w.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
