import{f as p,j as e}from"./iframe-CCEjzOPC.js";import{O as i}from"./object-table-DZQs2MZ-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DImdHWFo.js";import"./Table-B3s4tqwg.js";import"./index-DgoUsAmK.js";import"./Dialog-iEMF0ksL.js";import"./cross-BGMsRd6B.js";import"./svgIconContainer-Coaz20-Z.js";import"./useBaseUiId-j3ufExoT.js";import"./InternalBackdrop-D3oUcg0G.js";import"./composite-C0q05pny.js";import"./index-BilPMlQA.js";import"./index-D9nMHWCp.js";import"./index-DFR7OMHV.js";import"./useEventCallback-C24S9g8A.js";import"./SkeletonBar-IG_FwzYT.js";import"./LoadingCell-CroxuggV.js";import"./ColumnConfigDialog-VHlRkSQk.js";import"./DraggableList-BwMCWSzT.js";import"./search-BPL1vhq_.js";import"./Input-CGqEOpN_.js";import"./useControlled-D5RejEGV.js";import"./Button-2G_ar31r.js";import"./small-cross-47kwWW4U.js";import"./ActionButton-iW7h5mCg.js";import"./Checkbox-DolXhSfQ.js";import"./useValueChanged-BqfQCkU5.js";import"./CollapsiblePanel-VY2LOFCf.js";import"./MultiColumnSortDialog-CrToGM7C.js";import"./MenuTrigger-8_vJ3anI.js";import"./CompositeItem-vBJlJ_jv.js";import"./ToolbarRootContext-CugNg6qm.js";import"./getDisabledMountTransitionStyles-CeC0WSMX.js";import"./getPseudoElementBounds-C4El7Kw5.js";import"./chevron-down-D9MyH17B.js";import"./index-D3oslL3x.js";import"./error-8gbxpDNd.js";import"./BaseCbacBanner-DMeAXQ6o.js";import"./makeExternalStore-CccFVbAZ.js";import"./Tooltip-_l0C6K9V.js";import"./PopoverPopup-BkHPuubJ.js";import"./debounce-pZlXkjc8.js";import"./useOsdkClient-CYh5mGXm.js";import"./tick-CfFnANAV.js";import"./DropdownField-BbmelQYl.js";import"./isEqual-BvaSJKFT.js";import"./withOsdkMetrics-D3mK_z9G.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
