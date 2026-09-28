import{f as p,j as e}from"./iframe-BDPC3MGU.js";import{O as i}from"./object-table-Bel4yIfS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DqLc1wpe.js";import"./Table-Dgr-gIm8.js";import"./index-wr-Wa-rJ.js";import"./Dialog-DTR1MYhK.js";import"./cross-DYURuHsA.js";import"./svgIconContainer-BbA1ZoWr.js";import"./useBaseUiId-98Vlp7TA.js";import"./InternalBackdrop-Cgbf8eQA.js";import"./composite-BmeraXkj.js";import"./index-BCVo02gU.js";import"./index--VX9rzYc.js";import"./index-BRzzcBKu.js";import"./useEventCallback-ButC9m8B.js";import"./SkeletonBar-CsWliIs4.js";import"./LoadingCell-Dqufu0HX.js";import"./ColumnConfigDialog-By9TyQEv.js";import"./DraggableList-DQNrHfSk.js";import"./search-CHOuY8gu.js";import"./Input-q3l62r8C.js";import"./useControlled-BH2-CGJ0.js";import"./Button-BuWPanNZ.js";import"./small-cross-Cmb1RV_x.js";import"./ActionButton-B2xYsKtl.js";import"./Checkbox-HciCFw3O.js";import"./useValueChanged-CMbbAfeq.js";import"./CollapsiblePanel-hce81KCR.js";import"./MultiColumnSortDialog-BWmVf4xL.js";import"./MenuTrigger-DYNmmqOz.js";import"./CompositeItem-Glk6Ljpg.js";import"./ToolbarRootContext-gDYw7M9I.js";import"./getDisabledMountTransitionStyles-Ca5SDU94.js";import"./getPseudoElementBounds-1wBk6-FK.js";import"./chevron-down-B2ocyj_k.js";import"./index-DH6huj2W.js";import"./error-BZbzk8xv.js";import"./BaseCbacBanner-BBCBr5LI.js";import"./makeExternalStore-zlVMHsWj.js";import"./Tooltip-B8W6XcXq.js";import"./PopoverPopup-Dx8llI49.js";import"./debounce-Dm3_movg.js";import"./useOsdkClient-D8d5JuS7.js";import"./tick-Csqr7cIl.js";import"./DropdownField-zGmV-Acf.js";import"./isEqual-C7uizYde.js";import"./withOsdkMetrics-Dge8_qYA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
