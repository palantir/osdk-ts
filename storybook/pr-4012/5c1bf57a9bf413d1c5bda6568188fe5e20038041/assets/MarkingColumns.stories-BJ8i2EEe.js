import{f as p,j as e}from"./iframe-Szo9Zkn-.js";import{O as i}from"./object-table-Bh1a0-L6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dhbsewg0.js";import"./Table-BMDXccGN.js";import"./index-w7MyO4j0.js";import"./Dialog-CsnVpAjB.js";import"./cross-Bg9KGljm.js";import"./svgIconContainer-CC53kbHO.js";import"./useBaseUiId-sDWiAP1v.js";import"./InternalBackdrop--YqpQigY.js";import"./composite-BNkcDv4u.js";import"./index-BaSJaIuK.js";import"./index-BZZ6jb1f.js";import"./index-BObVAdZh.js";import"./useEventCallback-CnaPuMH4.js";import"./SkeletonBar-BgMTxHDr.js";import"./LoadingCell-B6jIfShi.js";import"./ColumnConfigDialog-CbqfWi2T.js";import"./DraggableList-H8Oanmu1.js";import"./search-BfldJRDn.js";import"./Input-CZ0TTU7d.js";import"./useControlled-eHJHqQYa.js";import"./Button-CEu9_vPj.js";import"./small-cross-BHZFoiT4.js";import"./ActionButton-2gMpYRX6.js";import"./Checkbox-a8XH5_91.js";import"./useValueChanged-DGZyaree.js";import"./CollapsiblePanel-BGMdvSg-.js";import"./MultiColumnSortDialog-C8flbRMI.js";import"./MenuTrigger-B0E9sOUu.js";import"./CompositeItem-BHJmqDb8.js";import"./ToolbarRootContext-Bfqc1Rf4.js";import"./getDisabledMountTransitionStyles-BdfTLDtY.js";import"./getPseudoElementBounds-CTJEQtrc.js";import"./chevron-down-B2_IYtaL.js";import"./index-CtOtUzNQ.js";import"./error-3jlDe3tK.js";import"./BaseCbacBanner-CMALqZmQ.js";import"./makeExternalStore-C62oCblT.js";import"./Tooltip-_z1tCu5W.js";import"./PopoverPopup-DkhCYwO7.js";import"./debounce-Dy82AU_7.js";import"./useOsdkClient-BATbP90A.js";import"./tick-DFIcijiQ.js";import"./DropdownField-DLes8wgB.js";import"./isEqual-CXpRJzVN.js";import"./withOsdkMetrics-DNdzNBP7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
