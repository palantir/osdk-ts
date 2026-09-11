import{f as p,j as e}from"./iframe-R3i6F3aO.js";import{O as i}from"./object-table-BgTYg10X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9bdGnH6.js";import"./Table-C01PNnUN.js";import"./index-BGblgBJY.js";import"./Dialog-vzu_lA8w.js";import"./cross-BPxLtSBw.js";import"./svgIconContainer-C5apQk5w.js";import"./useBaseUiId-Bs3UtHPs.js";import"./InternalBackdrop-BHQr0waf.js";import"./composite-DqPiEnK1.js";import"./index-FYBTDmiA.js";import"./index-BcSLoxTr.js";import"./index-CJpO-LuO.js";import"./useEventCallback-Br_xasQQ.js";import"./SkeletonBar-CEO897hA.js";import"./LoadingCell-78y270gJ.js";import"./ColumnConfigDialog-CMfpzQwr.js";import"./DraggableList-BIW1gmbf.js";import"./search-CLosiH11.js";import"./Input-sn4ChjOn.js";import"./useControlled-CF852Dip.js";import"./Button-DHONR1q8.js";import"./small-cross-BPJFbpZY.js";import"./ActionButton-CgZ1I1zH.js";import"./Checkbox-G34ERc79.js";import"./useValueChanged-DXcnjapY.js";import"./CollapsiblePanel-CnpdwwlI.js";import"./MultiColumnSortDialog-D17gBqMo.js";import"./MenuTrigger-SapJWbmy.js";import"./CompositeItem-CwiOxIme.js";import"./ToolbarRootContext-CwgLFLhe.js";import"./getDisabledMountTransitionStyles-B-rU_9sL.js";import"./getPseudoElementBounds-BhVzGz-s.js";import"./chevron-down-DiJ60wr5.js";import"./index-DRFmYbvw.js";import"./error-DSevPCVz.js";import"./BaseCbacBanner-D58x-qgC.js";import"./makeExternalStore-BNMggstW.js";import"./Tooltip-C7Pq2vOJ.js";import"./PopoverPopup-sZXPOR4E.js";import"./debounce-QFsAiE7l.js";import"./useOsdkClient-B-ltzRX3.js";import"./tick-BlsNuID7.js";import"./DropdownField-BAjlL0wb.js";import"./isEqual-B8rlE8Mo.js";import"./withOsdkMetrics-D6yaQzlx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
