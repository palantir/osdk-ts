import{f as p,j as e}from"./iframe-BDa8Fqup.js";import{O as i}from"./object-table-Duo4lg5d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9_zurnG.js";import"./Table-CYQF5AUo.js";import"./index-pjqeNj_i.js";import"./Dialog-Cg2CTckf.js";import"./cross-CptJAf1F.js";import"./svgIconContainer-DdVraw0H.js";import"./useBaseUiId-XTCdzLB-.js";import"./InternalBackdrop-DZXQO9MH.js";import"./composite-DOKDZZ1y.js";import"./index-DR8p4qUn.js";import"./index-DCtmNJWH.js";import"./index-eQmTP4uG.js";import"./useEventCallback-DxebTLhO.js";import"./SkeletonBar-B9ofcDWv.js";import"./LoadingCell-mSFIIUsp.js";import"./ColumnConfigDialog-5KpxiMi7.js";import"./DraggableList-Dc_2VXM_.js";import"./search-DMOASIyP.js";import"./Input-mz3axp_m.js";import"./useControlled-C8kqLhB2.js";import"./Button-By4eZEsF.js";import"./small-cross-nilyHMIW.js";import"./ActionButton-D3yPDPia.js";import"./Checkbox-ufrAG11y.js";import"./useValueChanged-CtmzMV14.js";import"./CollapsiblePanel-IYSRIgVb.js";import"./MultiColumnSortDialog-BkbEvvPV.js";import"./MenuTrigger-CNymGcQW.js";import"./CompositeItem-CxqNqspP.js";import"./ToolbarRootContext-bJCZq9fk.js";import"./getDisabledMountTransitionStyles-DcsKWw9B.js";import"./getPseudoElementBounds-B0Ifv5Xb.js";import"./chevron-down-XbIjVc8V.js";import"./index-CO6Kit7T.js";import"./error-DaHq0ZVm.js";import"./BaseCbacBanner-DHOrp7Nv.js";import"./makeExternalStore-CrFgIlYD.js";import"./Tooltip-BM2piRgB.js";import"./PopoverPopup-DGGaNiSQ.js";import"./debounce-OmcTsIux.js";import"./useOsdkClient-CB0wGX_k.js";import"./tick-SdtlPGo8.js";import"./DropdownField-SuU-thQx.js";import"./isEqual-DQMBMUOS.js";import"./withOsdkMetrics-VckxLh6W.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
