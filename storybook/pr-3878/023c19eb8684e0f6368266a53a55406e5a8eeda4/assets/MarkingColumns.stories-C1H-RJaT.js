import{f as p,j as e}from"./iframe-Y5vGGcvP.js";import{O as i}from"./object-table-Blzm30lw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDwImvib.js";import"./Table-BvILrCt9.js";import"./index-BTH20MTv.js";import"./Dialog-DmPDYfFl.js";import"./cross-C6XfWSCb.js";import"./svgIconContainer-BIHKAVWB.js";import"./useBaseUiId-RL85XbnS.js";import"./InternalBackdrop-3iFgptId.js";import"./composite-DfEzUBGr.js";import"./index-BF11wRFE.js";import"./index-BqEmZbFH.js";import"./index-Dieu7sw2.js";import"./useEventCallback-BrJrk-oU.js";import"./SkeletonBar-B2IEnFw2.js";import"./LoadingCell-Dwh9mj4m.js";import"./ColumnConfigDialog-CAwjWoDJ.js";import"./DraggableList-CayGgjyU.js";import"./search-DfUtBVkM.js";import"./Input-Dw8vFEHs.js";import"./useControlled-jE3VG63K.js";import"./Button--cxRM2vq.js";import"./small-cross-CVI-wDtt.js";import"./ActionButton-D3iVYvw7.js";import"./Checkbox-DKAF5YFj.js";import"./useValueChanged-Ds6t04CB.js";import"./CollapsiblePanel-BSjexsrO.js";import"./MultiColumnSortDialog-hwh-vYqB.js";import"./MenuTrigger-BmbiLkn9.js";import"./CompositeItem-1PZRLRt5.js";import"./ToolbarRootContext-BC-Ed_Oq.js";import"./getDisabledMountTransitionStyles-DCTtkVay.js";import"./getPseudoElementBounds-BFGt4T59.js";import"./chevron-down-mTWE-r4G.js";import"./index-CNA7S_DK.js";import"./error-DU3E2pjz.js";import"./BaseCbacBanner-n-Zbrh0L.js";import"./makeExternalStore-CH64p8Fa.js";import"./Tooltip-eBcGmQzJ.js";import"./PopoverPopup-DqmMzuaX.js";import"./debounce-DOiQ_IlB.js";import"./useOsdkClient-s9zf-Ja3.js";import"./tick-B3ZeEauG.js";import"./DropdownField-BYVuO4wd.js";import"./isEqual-Cqi6FdsA.js";import"./withOsdkMetrics-CAQdN2b1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
