import{f as p,j as e}from"./iframe-Bib3kGT6.js";import{O as i}from"./object-table-BGi71GLP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C51LGZ31.js";import"./Table-tNd1boHc.js";import"./index-VjAhrkKZ.js";import"./Dialog-fher5GbH.js";import"./cross-qIT4Mchn.js";import"./svgIconContainer-BZsDWIhS.js";import"./useBaseUiId-CnlY9UEZ.js";import"./InternalBackdrop-Bk9vvVbD.js";import"./composite--njzr7wG.js";import"./index-CYSDWPDR.js";import"./index-DGYgRGZ8.js";import"./index-BoAbROLn.js";import"./useEventCallback-DCT06OVg.js";import"./SkeletonBar-Csvi_hZx.js";import"./LoadingCell-kGwEUKgO.js";import"./ColumnConfigDialog-UqIBsJqh.js";import"./DraggableList-CdJZevuu.js";import"./search-P-oq-XW2.js";import"./Input-isV5Y8xL.js";import"./useControlled-Drh12MBC.js";import"./Button-D_pfSgnH.js";import"./small-cross-vP71PtUb.js";import"./ActionButton-ChBBZFUd.js";import"./Checkbox-CLh6Wqk-.js";import"./useValueChanged-wvMqhi3F.js";import"./CollapsiblePanel-lc_QiXgr.js";import"./MultiColumnSortDialog-m9U3Hgcc.js";import"./MenuTrigger-DniFjMpX.js";import"./CompositeItem-BS4Q5bgP.js";import"./ToolbarRootContext-DtzEjAjd.js";import"./getDisabledMountTransitionStyles-G-mSpcgO.js";import"./getPseudoElementBounds-CAYA-GnQ.js";import"./chevron-down-lJXkLqJI.js";import"./index-B7RnLU7r.js";import"./error-k1gRtmZa.js";import"./BaseCbacBanner-D2ms6TGX.js";import"./makeExternalStore-BO4M2yBP.js";import"./Tooltip-CK9OMmvF.js";import"./PopoverPopup-Dk_xDUPF.js";import"./debounce-BONFZmZ3.js";import"./useOsdkClient-FvgP99Ie.js";import"./tick-BQw9UkqU.js";import"./DropdownField-j-f9GReF.js";import"./isEqual-Cya0uAr9.js";import"./withOsdkMetrics-BuJy5uT4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
