import{f as p,j as e}from"./iframe-DcmfU77k.js";import{O as i}from"./object-table-BOUdcugr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-iUgfFPGb.js";import"./Table-Bu5SheTH.js";import"./index-D2kWKPAJ.js";import"./Dialog-CW8M2Z4_.js";import"./cross-ECmaaCGW.js";import"./svgIconContainer-DT6N8Ki8.js";import"./useBaseUiId-BoHkQsKU.js";import"./InternalBackdrop-BWvGtHcw.js";import"./composite-Bd0PbqGb.js";import"./index-BS3Mo4g_.js";import"./index-DWk8uxuI.js";import"./index-BtNUYRCp.js";import"./useEventCallback-CD3D3swh.js";import"./SkeletonBar-DFbUbhFB.js";import"./LoadingCell-U-CVMro_.js";import"./ColumnConfigDialog-DfL8P9dS.js";import"./DraggableList-qEcRmpKw.js";import"./search-Ai29WxXU.js";import"./Input-BADaHFeb.js";import"./useControlled-eRGHzZHW.js";import"./isEqual-DGAWDWzv.js";import"./isObject-BcoDpkFk.js";import"./Button-BglaF_Tj.js";import"./ActionButton-BTleJWXX.js";import"./Checkbox-CHQG3Nvh.js";import"./useValueChanged-CWm28iKl.js";import"./CollapsiblePanel-C-AdogU0.js";import"./MultiColumnSortDialog-Ditw7DtL.js";import"./MenuTrigger-DvwNaKoK.js";import"./CompositeItem-C3SNLcxf.js";import"./ToolbarRootContext-Dpg9_Vj3.js";import"./getDisabledMountTransitionStyles-B-GeruUr.js";import"./getPseudoElementBounds-D6T0I_AP.js";import"./chevron-down-DAzj8uTp.js";import"./index-D5ug52rE.js";import"./error-BE5jQAua.js";import"./BaseCbacBanner-DE-HzhxZ.js";import"./makeExternalStore-B7HcnYk0.js";import"./Tooltip-Cp82FIMP.js";import"./PopoverPopup-D34pufPa.js";import"./toNumber-CiUg3_fX.js";import"./useOsdkClient-ChRKxtfQ.js";import"./tick-69qwrrmf.js";import"./DropdownField-C6uw3M0I.js";import"./withOsdkMetrics-3Fje_1hu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
