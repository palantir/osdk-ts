import{f as p,j as e}from"./iframe-Dc7sxM32.js";import{O as i}from"./object-table-DJlddXis.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CM7tzFvC.js";import"./Table-BbU-9j4x.js";import"./index-IZwYZumw.js";import"./Dialog-BS6pgeCo.js";import"./cross-DB407VGu.js";import"./svgIconContainer-C-2lOjfc.js";import"./useBaseUiId-CH01Yaez.js";import"./InternalBackdrop-CdgMX2OS.js";import"./composite-BoHCITiY.js";import"./index-BWWceLi5.js";import"./index-BPTBY4qT.js";import"./index-7jp2fSwL.js";import"./useEventCallback-D6HBkFfp.js";import"./SkeletonBar-CQMTmIpY.js";import"./LoadingCell-D4ydqpTZ.js";import"./ColumnConfigDialog-BBBaXJZu.js";import"./DraggableList-CdXD1wY3.js";import"./search-CtqsOWX2.js";import"./Input-C0cMc9zy.js";import"./useControlled-CAz0cW4V.js";import"./Button-D0LwqFFz.js";import"./small-cross-BtHf4A8K.js";import"./ActionButton-7gTODAoI.js";import"./Checkbox-3AxTYCZS.js";import"./useValueChanged-LFwat5aB.js";import"./CollapsiblePanel-CHgHDq3b.js";import"./MultiColumnSortDialog-DAL8Zs0N.js";import"./MenuTrigger-BF79KnmQ.js";import"./CompositeItem-hDzKKSGM.js";import"./ToolbarRootContext-DVEPWNiK.js";import"./getDisabledMountTransitionStyles-CeArVJQO.js";import"./getPseudoElementBounds-BvdzEwkz.js";import"./chevron-down-BlnQ68Oi.js";import"./index-C72rir5P.js";import"./error-ritcfIW_.js";import"./BaseCbacBanner-JmRjJLBF.js";import"./makeExternalStore-CKmXRF_o.js";import"./Tooltip-Ce7TXbJ9.js";import"./PopoverPopup-CDeJDWbE.js";import"./debounce-BCcRr2wZ.js";import"./useOsdkClient-DqACciKT.js";import"./tick-C0UHVHiV.js";import"./DropdownField-DjNhNazw.js";import"./isEqual-MOH2rhy-.js";import"./withOsdkMetrics-CI_RMXn8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
