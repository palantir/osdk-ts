import{f as p,j as e}from"./iframe-BRGzDqju.js";import{O as i}from"./object-table-CVmc407A.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5JQdMdM9.js";import"./Table-Qz6pPC3g.js";import"./index-En-TUnJd.js";import"./Dialog-BWxPuvzW.js";import"./cross-CQP7lInb.js";import"./svgIconContainer-BQAEO-7W.js";import"./useBaseUiId-B3wooVnn.js";import"./InternalBackdrop-DyMqQPSD.js";import"./composite-C-AGstI3.js";import"./index-DPkAIY9Y.js";import"./index-Bad5TxyQ.js";import"./index-CuXQ76Km.js";import"./useEventCallback-C_Z8usTd.js";import"./SkeletonBar-DLjlHbja.js";import"./LoadingCell-BwECvniD.js";import"./ColumnConfigDialog-DHzmfXh_.js";import"./DraggableList-Cy_sW6IX.js";import"./search-asFq5N8L.js";import"./Input-DmzPzGey.js";import"./useControlled-DJDqOS1V.js";import"./Button-0cGInffD.js";import"./small-cross-B83ohrdP.js";import"./ActionButton-dpWisjKE.js";import"./Checkbox-BaBpX2iW.js";import"./useValueChanged-BU1nXjKr.js";import"./CollapsiblePanel-BSyt4v6y.js";import"./MultiColumnSortDialog-CEHYLNMt.js";import"./MenuTrigger-DhSK_MRy.js";import"./CompositeItem-q2WRXYZP.js";import"./ToolbarRootContext-67BQ7bpF.js";import"./getDisabledMountTransitionStyles-CIJBF-gX.js";import"./getPseudoElementBounds-Da6NSz-p.js";import"./chevron-down-CLb4G2AF.js";import"./index-CNqdpeI1.js";import"./error-CoQddkwW.js";import"./BaseCbacBanner-BdBuPUT8.js";import"./makeExternalStore-B-5KvZfn.js";import"./Tooltip-BinZmbGp.js";import"./PopoverPopup-BjDJmrK2.js";import"./debounce-BY0A57Za.js";import"./useOsdkClient-BD_HHGJ7.js";import"./tick-B0-Xl9HF.js";import"./DropdownField-YHeguodW.js";import"./isEqual-ySCoOjBB.js";import"./withOsdkMetrics-DO5dBBXm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
