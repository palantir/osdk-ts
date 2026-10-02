import{f as p,j as e}from"./iframe-CuEAZ9dr.js";import{O as i}from"./object-table-VtjZM0Xx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGz8wZQR.js";import"./Table-NTPstvxc.js";import"./index-DxIg76dX.js";import"./Dialog-BkDP-GvL.js";import"./cross-WWifeHY9.js";import"./svgIconContainer-BvlE_9W9.js";import"./useBaseUiId-BeONGSYl.js";import"./InternalBackdrop-BkqsHjIV.js";import"./composite-Cuvx7hIz.js";import"./index-Dvn68MG5.js";import"./index-CZP_mOC4.js";import"./index-BBIDRv9-.js";import"./useEventCallback-pnT8ZyKV.js";import"./SkeletonBar-IMTg_Ovw.js";import"./LoadingCell-Cn4lhMnt.js";import"./ColumnConfigDialog-BjNfcseF.js";import"./DraggableList-C6eWQzGl.js";import"./search-DwLfbIUw.js";import"./Input-CVHctVKc.js";import"./useControlled-DvKAwvsQ.js";import"./Button-D_a0PtrD.js";import"./small-cross-R78MO7fs.js";import"./ActionButton--142FRTZ.js";import"./Checkbox-BOkyO1tb.js";import"./useValueChanged-Ci2GyKEy.js";import"./CollapsiblePanel-BleGNdwU.js";import"./MultiColumnSortDialog-aYJ8Fftp.js";import"./MenuTrigger-DWu_yWKM.js";import"./CompositeItem-BaOcY-5M.js";import"./ToolbarRootContext-D1XcDui9.js";import"./getDisabledMountTransitionStyles-BRocjPLc.js";import"./getPseudoElementBounds-D_hAP4_U.js";import"./chevron-down-CU80jHGh.js";import"./index-DQjcUOKb.js";import"./error-IRs09aCG.js";import"./BaseCbacBanner-CvnGCxIt.js";import"./makeExternalStore-C8vIUtyz.js";import"./Tooltip-VrBjATlQ.js";import"./PopoverPopup-SkuTKSE6.js";import"./debounce-C37B9MoR.js";import"./useOsdkClient-DaV3EpeN.js";import"./tick-DnPfu0Vb.js";import"./DropdownField-BaUKfk6e.js";import"./isEqual-Aq-a2GgY.js";import"./withOsdkMetrics-BPCuw1K8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
