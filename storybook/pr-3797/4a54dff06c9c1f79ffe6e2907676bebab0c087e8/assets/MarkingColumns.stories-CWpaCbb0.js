import{f as p,j as e}from"./iframe-QFYCOUfb.js";import{O as i}from"./object-table-B2DYjUEt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvwAeipT.js";import"./Table-Bu_7BoL1.js";import"./index-r2m1MzwO.js";import"./Dialog-Bfc7HWT_.js";import"./cross-lN9Ye2mz.js";import"./svgIconContainer-BTKuLZDT.js";import"./useBaseUiId-CWCv1RJ1.js";import"./InternalBackdrop-pmr-irU1.js";import"./composite-0JPHK5U6.js";import"./index-CFtpFERN.js";import"./index-p1_Aw4sU.js";import"./index-BYeoZqW9.js";import"./useEventCallback-BvukxHI1.js";import"./SkeletonBar-T8DUjg20.js";import"./LoadingCell-BDvbN2hs.js";import"./ColumnConfigDialog-BkXWINBS.js";import"./DraggableList-ihgDUqV9.js";import"./search-A6D3Nphw.js";import"./Input-XI1xCScB.js";import"./useControlled-DvS8LHTQ.js";import"./isEqual-WnM2x0h8.js";import"./isObject-B9e3BPlM.js";import"./Button-CCCx6o1T.js";import"./ActionButton-1xA6c8aW.js";import"./Checkbox-DBnhpo7E.js";import"./useValueChanged-DnV0Ju92.js";import"./CollapsiblePanel-1WpAY5PZ.js";import"./MultiColumnSortDialog-D1F5VEBP.js";import"./MenuTrigger-zbuTgZkT.js";import"./CompositeItem-BzxfLAiE.js";import"./ToolbarRootContext-DxtjrKYm.js";import"./getDisabledMountTransitionStyles-B4wrMBNf.js";import"./getPseudoElementBounds-C-0UF2Q5.js";import"./chevron-down-8j45KwVK.js";import"./index-nzm4ayqk.js";import"./error-DkSBwZqT.js";import"./BaseCbacBanner-CeATJGkx.js";import"./makeExternalStore-jT5LUsaV.js";import"./Tooltip-CKjmDpHV.js";import"./PopoverPopup-DUtHyKME.js";import"./toNumber-5VBp_Htu.js";import"./useOsdkClient-D2V1bKMi.js";import"./tick-C1D_7X95.js";import"./DropdownField-CcWDIdAB.js";import"./withOsdkMetrics-BwOMOUV-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
