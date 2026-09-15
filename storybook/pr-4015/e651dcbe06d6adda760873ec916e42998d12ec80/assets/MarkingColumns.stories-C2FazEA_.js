import{f as p,j as e}from"./iframe-QP8DFwwe.js";import{O as i}from"./object-table-CkAmmGKV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZ_jViir.js";import"./Table-9EMD1wAM.js";import"./index-BNJVHiwE.js";import"./Dialog-DmXA-7a6.js";import"./cross-CwXi3gtQ.js";import"./svgIconContainer-CfQEGbE2.js";import"./useBaseUiId-D1NpMsZt.js";import"./InternalBackdrop-Df-z6WHD.js";import"./composite-Ikyj3NkG.js";import"./index-CaTuEA2R.js";import"./index-BtfIDQW-.js";import"./index-CDGaQ0T_.js";import"./useEventCallback-D15NkIZA.js";import"./SkeletonBar-CXyCFZte.js";import"./LoadingCell-C7w0zupb.js";import"./ColumnConfigDialog-dwzfqe--.js";import"./DraggableList-BJmmM-Jm.js";import"./search-BhbGsmDO.js";import"./Input-CHlmHTWZ.js";import"./useControlled-206lJMjs.js";import"./Button-B0j0zDqq.js";import"./small-cross-DE9wbwSK.js";import"./ActionButton-DEbkrteD.js";import"./Checkbox-Bh3zQ7I6.js";import"./useValueChanged-DoeB4fKz.js";import"./CollapsiblePanel-BDw9e-7-.js";import"./MultiColumnSortDialog-CKEs3M8C.js";import"./MenuTrigger-Bm32lMoS.js";import"./CompositeItem-BUsTT35Y.js";import"./ToolbarRootContext-CahY9HEa.js";import"./getDisabledMountTransitionStyles-IaA4KMEY.js";import"./getPseudoElementBounds-B5MkDbXv.js";import"./chevron-down-_zkKmv-U.js";import"./index-CVANDjkc.js";import"./error-CwAuvkpD.js";import"./BaseCbacBanner-nEF6sd8M.js";import"./makeExternalStore-8VCBcpFX.js";import"./Tooltip-CJE-g1wt.js";import"./PopoverPopup-D8FRxbTU.js";import"./debounce-ftvaY34_.js";import"./useOsdkClient-D0i8Jm78.js";import"./tick-CXRziisf.js";import"./DropdownField-BgIEC6qN.js";import"./isEqual-xLxyFeNM.js";import"./withOsdkMetrics-B4sVoh8c.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
