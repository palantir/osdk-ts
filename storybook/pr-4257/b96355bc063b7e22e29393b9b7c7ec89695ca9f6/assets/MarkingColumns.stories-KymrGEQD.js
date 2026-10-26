import{f as p,j as e}from"./iframe-1hfaDqWf.js";import{O as i}from"./object-table-BVsmr5UF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-De53aV0r.js";import"./Table-BOdn1qRs.js";import"./index-BhraWcfW.js";import"./Dialog-DF70jFlI.js";import"./cross-BxuxKn8r.js";import"./svgIconContainer-CfNLFLUV.js";import"./useBaseUiId-Deq2cxJf.js";import"./InternalBackdrop-Bwl2SQmc.js";import"./composite-DJvOABdy.js";import"./index-CltX__3l.js";import"./index-CNJ7D8B4.js";import"./index-DUbuCag1.js";import"./useEventCallback-aip0Q_23.js";import"./SkeletonBar-9TZgIuFD.js";import"./LoadingCell-B01RldSR.js";import"./ColumnConfigDialog-DSrNDSyO.js";import"./DraggableList-DVDPuNDG.js";import"./search-ChOCRi6Z.js";import"./Input-D17xgaxz.js";import"./useControlled-D0I97nL6.js";import"./Button-CnBcagCx.js";import"./small-cross-C628jtsy.js";import"./ActionButton-DAT1D4My.js";import"./Checkbox-5hahDlkG.js";import"./useValueChanged-CdYXSfOs.js";import"./CollapsiblePanel-BZNELsDM.js";import"./MultiColumnSortDialog-DTOCkBGF.js";import"./MenuTrigger-QDFe4v67.js";import"./CompositeItem-CmCZmC8c.js";import"./ToolbarRootContext-BuC21FlU.js";import"./getDisabledMountTransitionStyles-Dk0hinap.js";import"./getPseudoElementBounds-DLRZ8Oik.js";import"./chevron-down-oC6N0Ou5.js";import"./index-B722iX7j.js";import"./error-BGVtNtZh.js";import"./BaseCbacBanner-C8GCPmG0.js";import"./makeExternalStore-CiOsLXpf.js";import"./Tooltip-CP0SUwq-.js";import"./PopoverPopup-CFLZ0LEF.js";import"./debounce-Bqvjn-gC.js";import"./useOsdkClient-D6tvv9UM.js";import"./tick-aJFXUkvZ.js";import"./DropdownField-K3jo3x1W.js";import"./isEqual-DbAISukP.js";import"./withOsdkMetrics-pFp3tsBC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
