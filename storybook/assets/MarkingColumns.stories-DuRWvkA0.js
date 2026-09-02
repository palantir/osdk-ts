import{f as p,j as e}from"./iframe-DasplHZn.js";import{O as i}from"./object-table-yrfpVRIU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DegUFsiV.js";import"./index-CeKhiTUl.js";import"./Dialog-BgkKTq6E.js";import"./cross-CGwwcGII.js";import"./svgIconContainer-4_eO9YAc.js";import"./useBaseUiId-CFSgFdOV.js";import"./InternalBackdrop-CIHUWHdh.js";import"./composite-BErfcKSH.js";import"./index-BtmJPZwK.js";import"./index-BbWiAGjR.js";import"./index-C-eBgv4u.js";import"./useEventCallback-CWGG1_eM.js";import"./SkeletonBar-CEfYCKcu.js";import"./LoadingCell-sh0Cu-TC.js";import"./ColumnConfigDialog-BZ_uJxFT.js";import"./DraggableList-CIn0X0fW.js";import"./search-DjIePqPD.js";import"./Input-CTs-cY20.js";import"./useControlled-b2VLkkxd.js";import"./Button-CUXeq1Mn.js";import"./small-cross-CV_LKxqx.js";import"./ActionButton-BUjGAXRA.js";import"./Checkbox-D0sSEY7Y.js";import"./useValueChanged-DgCa_hX9.js";import"./CollapsiblePanel-BNcZUxvE.js";import"./MultiColumnSortDialog-DOUImWXj.js";import"./MenuTrigger-CiO6h0bC.js";import"./CompositeItem-zs15jyVw.js";import"./ToolbarRootContext-Dd8U4Uqb.js";import"./getDisabledMountTransitionStyles-CrxqcUcl.js";import"./getPseudoElementBounds-Bp3hKR1m.js";import"./chevron-down-Clwkouj3.js";import"./index-S98LG7pS.js";import"./error-DJObYT-e.js";import"./BaseCbacBanner-DCbhVpsA.js";import"./makeExternalStore-Ce3vwrCY.js";import"./Tooltip-G1YFAziJ.js";import"./PopoverPopup-VT8gRiL_.js";import"./debounce-BpiLVUTF.js";import"./useOsdkClient-CN1EBquJ.js";import"./tick-VePuyXuh.js";import"./DropdownField-DU2AXbuh.js";import"./isEqual-T-JX0xwj.js";import"./withOsdkMetrics-DI4FVnTC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
