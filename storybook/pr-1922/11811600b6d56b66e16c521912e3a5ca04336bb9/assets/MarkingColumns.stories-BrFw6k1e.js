import{f as p,j as e}from"./iframe-Cudgp9Yf.js";import{O as i}from"./object-table-CppCACw-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-4hrz9kvN.js";import"./Table-Cl3DbiIH.js";import"./index-81BYSLtR.js";import"./Dialog-940Ccla2.js";import"./cross-revkGSiW.js";import"./svgIconContainer-DHLyM821.js";import"./useBaseUiId-XTaLWo4v.js";import"./InternalBackdrop-DxBXy5tl.js";import"./composite-Cva0Dc4a.js";import"./index-CbHdBm0Y.js";import"./index-CSHUtoE8.js";import"./index-HepSRimU.js";import"./useEventCallback-DzHSKCot.js";import"./SkeletonBar-yGKH_f6h.js";import"./LoadingCell-Cj-LC_sA.js";import"./ColumnConfigDialog-NrJmvS8r.js";import"./DraggableList-0VYER9jf.js";import"./search-D0hS-0xo.js";import"./Input-Bh8eu1mD.js";import"./useControlled-CwtIgUOg.js";import"./Button-tVyqWp8F.js";import"./small-cross-ChbJVPJX.js";import"./ActionButton-Du3E86TK.js";import"./Checkbox-j-a3CiYd.js";import"./useValueChanged-CUGYJ1mb.js";import"./CollapsiblePanel-D77NNtaO.js";import"./MultiColumnSortDialog-ChhiEUPX.js";import"./MenuTrigger-BMd3jK89.js";import"./CompositeItem-DmRElDN_.js";import"./ToolbarRootContext-B8H-v8xY.js";import"./getDisabledMountTransitionStyles-55j4z-MY.js";import"./getPseudoElementBounds-DtfdtuS3.js";import"./chevron-down-DyPkH6YY.js";import"./index-Tl8UCzrU.js";import"./error-I8BNM1L0.js";import"./BaseCbacBanner-D1UIM2bR.js";import"./makeExternalStore-DJw3BgKy.js";import"./Tooltip-BxRrglwZ.js";import"./PopoverPopup-LJZGYOwd.js";import"./debounce-Crn7KrL-.js";import"./useOsdkClient-zsU2AVrV.js";import"./tick-C8BQHCqe.js";import"./DropdownField-CSgsAkCS.js";import"./isEqual-Cmzyg9o0.js";import"./withOsdkMetrics-BT2RZEDY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
