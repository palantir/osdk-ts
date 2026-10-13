import{f as p,j as e}from"./iframe-DWBCJ7r1.js";import{O as i}from"./object-table-D-H9Ni8G.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmktTq8T.js";import"./Table-BYbHxE5i.js";import"./index-Bhg8EF8N.js";import"./Dialog-BmWYe064.js";import"./cross-D7B_UIT5.js";import"./svgIconContainer-BKXE3QcR.js";import"./useBaseUiId-CJSadFy5.js";import"./InternalBackdrop-DMys-hvU.js";import"./composite-DVYVQNYP.js";import"./index-1w6N5pNx.js";import"./index-DxYGP2pA.js";import"./index-CZMyUemG.js";import"./useEventCallback-CWWvHrCN.js";import"./SkeletonBar-Db53rKFO.js";import"./LoadingCell-DpHWL9O8.js";import"./ColumnConfigDialog-CJuiy-vf.js";import"./DraggableList-D2Qu3fRi.js";import"./search-DqkstfId.js";import"./Input-CZ8A1Blk.js";import"./useControlled-CgT0Br7i.js";import"./Button-Dgs8-VaM.js";import"./small-cross-Cjpte_iC.js";import"./ActionButton-Z2VeE3Uj.js";import"./Checkbox-CH5ZZV2y.js";import"./useValueChanged-CsMSYAYh.js";import"./CollapsiblePanel-A9XCTmYP.js";import"./MultiColumnSortDialog-C8u3k-0f.js";import"./MenuTrigger-DLMUtzeY.js";import"./CompositeItem-BxdZFWZc.js";import"./ToolbarRootContext-Bk6-lFFc.js";import"./getDisabledMountTransitionStyles-Do_SU4wJ.js";import"./getPseudoElementBounds-B2ErL88K.js";import"./chevron-down-CIAO6ol2.js";import"./index-YbLBVrX6.js";import"./error-BEytdPL1.js";import"./BaseCbacBanner-BQkah_yF.js";import"./makeExternalStore-UKXCXYtC.js";import"./Tooltip-7U4L14FS.js";import"./PopoverPopup-DSB0f6RX.js";import"./debounce-D1paW6Zp.js";import"./useOsdkClient-CTU6gC87.js";import"./tick-DZoSDnYy.js";import"./DropdownField-BKAtqCjR.js";import"./isEqual-BxhW_R9e.js";import"./withOsdkMetrics-BPF8go43.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
