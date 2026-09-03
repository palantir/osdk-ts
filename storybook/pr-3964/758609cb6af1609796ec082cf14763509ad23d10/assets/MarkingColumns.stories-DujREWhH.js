import{f as p,j as e}from"./iframe-O11Zq4F1.js";import{O as i}from"./object-table-gqoQGdoV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DlwmVUfx.js";import"./Table-CPb-_s45.js";import"./index-JCX27zQ_.js";import"./Dialog-BThl-qtY.js";import"./cross-CgbZ2Lur.js";import"./svgIconContainer-niJASFYH.js";import"./useBaseUiId-Cu9t8yGo.js";import"./InternalBackdrop-Bmok97NN.js";import"./composite-CXM_4XfT.js";import"./index-D4Y1diP4.js";import"./index-CZs8bj4M.js";import"./index-BOHBCutb.js";import"./useEventCallback-BYLo8DjX.js";import"./SkeletonBar-Dbg84bcv.js";import"./LoadingCell-BKtbAGZ7.js";import"./ColumnConfigDialog-B6e2BpfX.js";import"./DraggableList-D4B0pU47.js";import"./search-Cj99250y.js";import"./Input-KS7sPzNw.js";import"./useControlled-B8YHL1ap.js";import"./Button-C08V9i3x.js";import"./small-cross-6TCOHgWS.js";import"./ActionButton-DwwC6gXd.js";import"./Checkbox-CxNgOj-_.js";import"./useValueChanged-D4OR8Hts.js";import"./CollapsiblePanel-DrNBsuTo.js";import"./MultiColumnSortDialog-aKqJlpMT.js";import"./MenuTrigger-BB0NeSp-.js";import"./CompositeItem-DLmG3BnZ.js";import"./ToolbarRootContext-tyPorBFs.js";import"./getDisabledMountTransitionStyles-BgcrLDKx.js";import"./getPseudoElementBounds-B3Xs9Miq.js";import"./chevron-down-vcyh2ihf.js";import"./index-BZM-lKSg.js";import"./error-Cg1niATE.js";import"./BaseCbacBanner-BSLN0WdA.js";import"./makeExternalStore-DxYkAphJ.js";import"./Tooltip-B3y41h0B.js";import"./PopoverPopup-DJWamGiS.js";import"./debounce-Dl6mTpZa.js";import"./useOsdkClient-BQdHiZjk.js";import"./tick-BEQDUDLL.js";import"./DropdownField-CiK_mq9u.js";import"./isEqual-BFwmF2pp.js";import"./withOsdkMetrics-5_bEfQA7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
