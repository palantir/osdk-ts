import{f as p,j as e}from"./iframe-B-80Mkm7.js";import{O as i}from"./object-table-BxqG_MJT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CqWsSCnZ.js";import"./Table-C7bKg006.js";import"./index-AUifcsh0.js";import"./Dialog-BBuyV7h3.js";import"./cross-BVjH4vnv.js";import"./svgIconContainer-CCfq-fpw.js";import"./useBaseUiId-7EkOsbTl.js";import"./InternalBackdrop-Df9XtON3.js";import"./composite-BvjfwejW.js";import"./index-C1oNvpYj.js";import"./index-CdT_AVM0.js";import"./index-C18AT3O2.js";import"./useEventCallback-xTkopZf4.js";import"./SkeletonBar-BJMxpIod.js";import"./LoadingCell-BlgeOYUC.js";import"./ColumnConfigDialog-CyWZJtKj.js";import"./DraggableList-jsQL9QIH.js";import"./search-B3LLLRfT.js";import"./Input-DSreAQ9Z.js";import"./useControlled-BL4sDI8Q.js";import"./Button-BhiWz6E2.js";import"./small-cross-KsVnY-WY.js";import"./ActionButton-BLc6kuh0.js";import"./Checkbox-C2_wKFYL.js";import"./useValueChanged-iPInYZDI.js";import"./CollapsiblePanel-JpYsP8Zr.js";import"./MultiColumnSortDialog-Ddk-61Te.js";import"./MenuTrigger-BpyV9DBK.js";import"./CompositeItem-tArM5MUt.js";import"./ToolbarRootContext-C019PK9Y.js";import"./getDisabledMountTransitionStyles-7E1Dxexi.js";import"./getPseudoElementBounds-BJiS3phJ.js";import"./chevron-down-D6ZF1kx7.js";import"./index-Bh1jiVMQ.js";import"./error-D-y1nCx5.js";import"./BaseCbacBanner-iJcQHW_Y.js";import"./makeExternalStore-BgRq75tG.js";import"./Tooltip-j-8eocE7.js";import"./PopoverPopup-rPbNRW11.js";import"./debounce-BzHKeVby.js";import"./useOsdkClient-CqkTlt94.js";import"./tick-BEF_RXe7.js";import"./DropdownField-BkuadXbK.js";import"./isEqual-tN7XJasU.js";import"./withOsdkMetrics-B8oz1zlb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
