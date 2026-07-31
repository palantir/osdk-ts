import{f as p,j as e}from"./iframe-DNerilao.js";import{O as i}from"./object-table-Ddu8P3lV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WYz0P8cg.js";import"./Table-B6btHYvr.js";import"./index-UbhKAx_n.js";import"./Dialog-B3nn5uUX.js";import"./cross-CVNZ4V9L.js";import"./svgIconContainer-3RPFCLDD.js";import"./useBaseUiId-C28jYwd5.js";import"./InternalBackdrop-Cus3nU-E.js";import"./composite-DxCnjG5P.js";import"./index-BEpimtGK.js";import"./index-DW0TONpD.js";import"./index-Dm3y5sdg.js";import"./useEventCallback-DPU3s-wr.js";import"./SkeletonBar-DDQ6_G8g.js";import"./LoadingCell-egB3v6uB.js";import"./ColumnConfigDialog-1cW1mEGU.js";import"./DraggableList-DwxlEsps.js";import"./search-Cct-baVl.js";import"./Input-Dmwb3bCD.js";import"./useControlled-BeDJM6mu.js";import"./isEqual-CQxno1d7.js";import"./isObject-DUGnZj1p.js";import"./Button-C82OcTXa.js";import"./ActionButton-CnUu2kxN.js";import"./Checkbox-BpdbYrjg.js";import"./useValueChanged-D49W-h_t.js";import"./CollapsiblePanel-EFO2eQBO.js";import"./MultiColumnSortDialog-vg5TyA02.js";import"./MenuTrigger-B0wYFE8g.js";import"./CompositeItem-Br2r_HtI.js";import"./ToolbarRootContext-E7gsUtdU.js";import"./getDisabledMountTransitionStyles-DLlmypTn.js";import"./getPseudoElementBounds-tOVfKU3-.js";import"./chevron-down-BkPpJX9T.js";import"./index-BB87TWEZ.js";import"./error-D1U1Mhs7.js";import"./BaseCbacBanner-CMoWbRAT.js";import"./makeExternalStore-B9VO-zPd.js";import"./Tooltip-DRpNHLk-.js";import"./PopoverPopup-CcFSqCWf.js";import"./toNumber-DrXZ7Hge.js";import"./useOsdkClient-DYiYcc_i.js";import"./tick-CNb3mBg-.js";import"./DropdownField-B1G0Thjb.js";import"./withOsdkMetrics-iOKaPPya.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
