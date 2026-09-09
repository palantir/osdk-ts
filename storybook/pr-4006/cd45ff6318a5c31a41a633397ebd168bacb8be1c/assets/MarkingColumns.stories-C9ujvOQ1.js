import{f as p,j as e}from"./iframe-BUTeW6Ke.js";import{O as i}from"./object-table-YhDdHlU-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQT66xGm.js";import"./Table-CKyDHAwz.js";import"./index-D0KjrmAk.js";import"./Dialog-Dt99Wk0o.js";import"./cross-DBYUdge9.js";import"./svgIconContainer-B9NI5uFH.js";import"./useBaseUiId-DKH5yAyq.js";import"./InternalBackdrop-BJFIyjvY.js";import"./composite-By0Jq-F3.js";import"./index-BZYkF7jv.js";import"./index-CK156m23.js";import"./index-I-Ka0MoY.js";import"./useEventCallback-BatYVPf8.js";import"./SkeletonBar-C8ESHQO6.js";import"./LoadingCell-B92WDQ7H.js";import"./ColumnConfigDialog-CJeyFZZ4.js";import"./DraggableList-Cvt6nEiH.js";import"./search-B5UpA2gd.js";import"./Input-DMsfofkB.js";import"./useControlled-BR0Jp6X7.js";import"./Button-B9aFxizM.js";import"./small-cross-CujZxCc8.js";import"./ActionButton-Bl9M4qvT.js";import"./Checkbox-B_AeFNqE.js";import"./useValueChanged-BcTLslwE.js";import"./CollapsiblePanel-6SzXO-cz.js";import"./MultiColumnSortDialog-Ck-AGHON.js";import"./MenuTrigger-D4Gx36JC.js";import"./CompositeItem-g-Qz-xCN.js";import"./ToolbarRootContext-ByyEnW8P.js";import"./getDisabledMountTransitionStyles-LOuwySdb.js";import"./getPseudoElementBounds-DDbKOR-k.js";import"./chevron-down-vn_j_zw5.js";import"./index-CJvQAT9P.js";import"./error-CJcI6CJg.js";import"./BaseCbacBanner-CuETapu_.js";import"./makeExternalStore-DsqUkO_T.js";import"./Tooltip-DaEaPpGd.js";import"./PopoverPopup-hdVmfLzZ.js";import"./debounce-DejzhDtV.js";import"./useOsdkClient-DzVNAXf5.js";import"./tick-CCKb6vG9.js";import"./DropdownField-Cm4jpBrK.js";import"./isEqual-BBDvdDDX.js";import"./withOsdkMetrics-Dgk1QvO0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
