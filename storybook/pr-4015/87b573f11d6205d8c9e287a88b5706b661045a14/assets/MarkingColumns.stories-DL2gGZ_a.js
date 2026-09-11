import{f as p,j as e}from"./iframe-CUqJoiyS.js";import{O as i}from"./object-table-BnYDDL8D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CqOWo9Kq.js";import"./Table-B1GTAg4A.js";import"./index-DhW4888P.js";import"./Dialog-B-itnpN2.js";import"./cross-GG3fOgP3.js";import"./svgIconContainer-B7WKcrMM.js";import"./useBaseUiId-BZb7TWDk.js";import"./InternalBackdrop-Dq_kPC_w.js";import"./composite-TXFEMlyS.js";import"./index-DAzmwTik.js";import"./index-BBo0v-HH.js";import"./index-BJ9da-D9.js";import"./useEventCallback-Dz2Wo-yx.js";import"./SkeletonBar-Dw2EozU6.js";import"./LoadingCell-rbx7b-G-.js";import"./ColumnConfigDialog-DaEjAh-z.js";import"./DraggableList-DBeD6qpj.js";import"./search-DIQou5oL.js";import"./Input-CRJI3PzK.js";import"./useControlled-BMDtEhI-.js";import"./Button-BNd5oumq.js";import"./small-cross-Cpb8kTzQ.js";import"./ActionButton-EApO2EOv.js";import"./Checkbox-C269ILAZ.js";import"./useValueChanged-MoKiEcJY.js";import"./CollapsiblePanel-DixO6tjx.js";import"./MultiColumnSortDialog-B4yq9Rnw.js";import"./MenuTrigger-D7ayu_ww.js";import"./CompositeItem-Zdmcbf9r.js";import"./ToolbarRootContext-DkHEjN7J.js";import"./getDisabledMountTransitionStyles-D-aggpUt.js";import"./getPseudoElementBounds-CL_A93Bv.js";import"./chevron-down-BfkwxApB.js";import"./index-BCxd25LX.js";import"./error-l4XIFlvt.js";import"./BaseCbacBanner-lm6dXBt-.js";import"./makeExternalStore-DVkGjBto.js";import"./Tooltip-CJfjtiJ9.js";import"./PopoverPopup-Crglkfe6.js";import"./debounce-BVDXVoV0.js";import"./useOsdkClient-B74Rz75W.js";import"./tick-CLiQuWYA.js";import"./DropdownField-DFoQOfPb.js";import"./isEqual-DlgN1XxT.js";import"./withOsdkMetrics-BPGEJQZq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
