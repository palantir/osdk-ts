import{f as p,j as e}from"./iframe-Cp1ziXca.js";import{O as i}from"./object-table-B4OAQ-UM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ca6LY0_H.js";import"./Table-585gS7_y.js";import"./index-CCsyzFvm.js";import"./Dialog-DwEy_EvY.js";import"./cross-ByCUwATg.js";import"./svgIconContainer-DXlIscgi.js";import"./useBaseUiId-Bt37xHZm.js";import"./InternalBackdrop-21zmjWfP.js";import"./composite-B4QegilG.js";import"./index-DSsYOOxm.js";import"./index-DFQVNtXJ.js";import"./index-BCU2lpd0.js";import"./useEventCallback-CvDmftxl.js";import"./SkeletonBar-CFBwD_lg.js";import"./LoadingCell-Ba8qx18j.js";import"./ColumnConfigDialog-Bn0yFfei.js";import"./DraggableList-Bo6GGCwe.js";import"./search-DKOFfaqB.js";import"./Input-BUxEsfiE.js";import"./useControlled-DfLwj8uM.js";import"./Button-B9LauqrE.js";import"./small-cross-DPfWhWYm.js";import"./ActionButton-B-aL526Q.js";import"./Checkbox-BRBYWefK.js";import"./useValueChanged-CImdLC5I.js";import"./CollapsiblePanel-Bwq_8Vuv.js";import"./MultiColumnSortDialog-C3hGMjSR.js";import"./MenuTrigger-CkLfyBAc.js";import"./CompositeItem-B97tQNhx.js";import"./ToolbarRootContext-C7YmkdWj.js";import"./getDisabledMountTransitionStyles-BCOhgOHp.js";import"./getPseudoElementBounds-BiAN2Dz2.js";import"./chevron-down-BiBmRA_9.js";import"./index-Ccm7niur.js";import"./error-Cklok7wh.js";import"./BaseCbacBanner-7-OvX_lg.js";import"./makeExternalStore-UGtoi_Zp.js";import"./Tooltip-Dhj5CmPc.js";import"./PopoverPopup-CJh3mGTg.js";import"./debounce-Rxf64P7W.js";import"./useOsdkClient-BehGkUju.js";import"./tick-3VVcevUT.js";import"./DropdownField-BX9F8fxz.js";import"./isEqual-CjzvEKy0.js";import"./withOsdkMetrics-CXAPHKM8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
