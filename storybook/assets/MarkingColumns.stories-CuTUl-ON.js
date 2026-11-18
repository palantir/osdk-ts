import{f as p,j as e}from"./iframe-C55ekymu.js";import{O as i}from"./object-table-8z9WGtp_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Csz_i8aJ.js";import"./index-CFbWm03i.js";import"./Dialog-BAwbXm28.js";import"./cross-DQROmGzH.js";import"./svgIconContainer-ChZ06sjp.js";import"./useBaseUiId-CJcpNbe-.js";import"./InternalBackdrop-CvYabiN9.js";import"./composite-DjC5qkIo.js";import"./index-BjL1lDKB.js";import"./index-Ssbdtt4R.js";import"./index-BitSGxZh.js";import"./useEventCallback-BdHTuoti.js";import"./SkeletonBar-DuohuUr1.js";import"./LoadingCell-nuZT7jJJ.js";import"./ColumnConfigDialog-Yl8zzCb6.js";import"./DraggableList-D0sjc9QB.js";import"./search-BNvEUbcp.js";import"./Input-BKj5HQxK.js";import"./useControlled-JP2tPCzU.js";import"./Button-BAZDZzeS.js";import"./small-cross-DWLcJPqC.js";import"./ActionButton-QrsuQ0Bk.js";import"./Checkbox-YfrV0shm.js";import"./useValueChanged-0_kAOcmx.js";import"./CollapsiblePanel-DNdVrnTZ.js";import"./MultiColumnSortDialog-DBLvpumO.js";import"./MenuTrigger-EdCmMVpT.js";import"./CompositeItem-BaLE10Vy.js";import"./ToolbarRootContext-CxArS7CZ.js";import"./getDisabledMountTransitionStyles-C68-Nvha.js";import"./getPseudoElementBounds-AyWvnJuI.js";import"./chevron-down-BZm8imPT.js";import"./index-Bk4PBoT1.js";import"./error-BZW5WceS.js";import"./BaseCbacBanner-B9NSFQxY.js";import"./makeExternalStore-DAmiU-nQ.js";import"./Tooltip-Pfbyi0H-.js";import"./PopoverPopup-gzdhXoIP.js";import"./Select-CLPFfhpu.js";import"./useOsdkClient-DEp8Hr9R.js";import"./tick-C5xW6PnQ.js";import"./DropdownField-Awb0oUum.js";import"./useDebouncedCallback-CJiCXQHj.js";import"./isEqual-D4BqxSVn.js";import"./_baseIsEqual-CaMr3HsT.js";import"./stableSerialize-D80f1Skw.js";import"./withOsdkMetrics-CaT2GfU0.js";const ar={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ar as default};
