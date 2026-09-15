import{f as p,j as e}from"./iframe-ByUPzMo-.js";import{O as i}from"./object-table-B71rfih6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DMW2vH7D.js";import"./Table-BOtOMzC7.js";import"./index-DDBwTcU5.js";import"./Dialog-FXfg-rp9.js";import"./cross-DJjNSarb.js";import"./svgIconContainer-BoZ4WTrV.js";import"./useBaseUiId-uUDoNX5q.js";import"./InternalBackdrop-Dv-N3MX6.js";import"./composite-s38ZpXCI.js";import"./index-DckN6Z75.js";import"./index-B7ZeWuUK.js";import"./index-jWoVPMOf.js";import"./useEventCallback-vWB41utD.js";import"./SkeletonBar-DYLnGweB.js";import"./LoadingCell-YdCVoPHH.js";import"./ColumnConfigDialog-6WIKVa5i.js";import"./DraggableList-VH3DZlc1.js";import"./search-BAYfazpa.js";import"./Input-sjbB4Aiw.js";import"./useControlled-BkbhbtR9.js";import"./Button-Psq8nKOy.js";import"./small-cross-BFKLMMPg.js";import"./ActionButton-Bz-AvXIu.js";import"./Checkbox-DniYfbse.js";import"./useValueChanged-qVZGkxmZ.js";import"./CollapsiblePanel-74XZuXCD.js";import"./MultiColumnSortDialog-COTnjAII.js";import"./MenuTrigger-DiONpmDe.js";import"./CompositeItem-Cyx3uAMD.js";import"./ToolbarRootContext-D7Mh8yi7.js";import"./getDisabledMountTransitionStyles-CsaRuwLM.js";import"./getPseudoElementBounds-CYVG0CpK.js";import"./chevron-down-MpADD7bW.js";import"./index-CRwMUVe2.js";import"./error-ByNBHJWq.js";import"./BaseCbacBanner-hvdd3eti.js";import"./makeExternalStore-BA6_-t1C.js";import"./Tooltip-ClovcVQp.js";import"./PopoverPopup-CctEYuVT.js";import"./debounce-Btut_D36.js";import"./useOsdkClient-CfYYGIxK.js";import"./tick-CwqvEqLb.js";import"./DropdownField-BjT07YJh.js";import"./isEqual-LNNalZCs.js";import"./withOsdkMetrics-DlvIoaDP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
