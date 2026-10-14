import{f as p,j as e}from"./iframe-qsGhK2hq.js";import{O as i}from"./object-table-CqLlTF7S.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dwtn-olX.js";import"./Table-RtxC6aTC.js";import"./index-CajyUV5R.js";import"./Dialog-D2Rmccu-.js";import"./cross-BtcvP4ej.js";import"./svgIconContainer-DZkDzvg0.js";import"./useBaseUiId-BW-cbd-G.js";import"./InternalBackdrop-Bm1UVwp8.js";import"./composite-bfuNMaa5.js";import"./index-eqMoAQQt.js";import"./index-DEfkT-Bn.js";import"./index-CyGx0SVK.js";import"./useEventCallback-DfezmX3F.js";import"./SkeletonBar-CSvI3jf6.js";import"./LoadingCell-CM8JaFl7.js";import"./ColumnConfigDialog-Cs4oTssg.js";import"./DraggableList-CVBLuRmU.js";import"./search-BylB4pvS.js";import"./Input-Czcl16E9.js";import"./useControlled-j-IY9Fng.js";import"./Button-DZOWyAnJ.js";import"./small-cross-DURYfzaP.js";import"./ActionButton-DoivhFaa.js";import"./Checkbox-BuiVWU_9.js";import"./useValueChanged-uDhMfoFi.js";import"./CollapsiblePanel-BzesRv68.js";import"./MultiColumnSortDialog-C0Jll3nn.js";import"./MenuTrigger-4uPtv7V4.js";import"./CompositeItem-DKwC-xxe.js";import"./ToolbarRootContext-BW1cRghw.js";import"./getDisabledMountTransitionStyles-C0XnpXFp.js";import"./getPseudoElementBounds-hxionTdV.js";import"./chevron-down-Dy2G7ibG.js";import"./index-BXOdJ4_3.js";import"./error-BE1KHtOw.js";import"./BaseCbacBanner-R0fCSPhc.js";import"./makeExternalStore-DSB7eaqh.js";import"./Tooltip-CB45Hw6t.js";import"./PopoverPopup-Cacp8CjB.js";import"./debounce-C8hPQAd_.js";import"./useOsdkClient-BSM4PxEw.js";import"./tick-BtVIuPON.js";import"./DropdownField-BOO-rrLR.js";import"./isEqual-CgE7Zfot.js";import"./withOsdkMetrics-Cus8kp2l.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
