import{f as p,j as e}from"./iframe-CKQO8Vx8.js";import{O as i}from"./object-table-Bt2sUrtO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CwEBdSMT.js";import"./Table-DoriW8mu.js";import"./index-CdmnUnhF.js";import"./Dialog-D0q_Mvut.js";import"./cross-DO9NTRmS.js";import"./svgIconContainer-8H3QdML_.js";import"./useBaseUiId-q6qw1H5x.js";import"./InternalBackdrop-BTNC0mrs.js";import"./composite-DUJXG-6e.js";import"./index-C6tRhyNC.js";import"./index-DyVj7mZ2.js";import"./index-DJy3tnug.js";import"./useEventCallback-CVzmQKkJ.js";import"./SkeletonBar-Dib1lpxv.js";import"./LoadingCell-BduzxgCB.js";import"./ColumnConfigDialog-Ba_ITkEx.js";import"./DraggableList-hcihQCTE.js";import"./search-DzGwW1te.js";import"./Input-DbZHyI8w.js";import"./useControlled-BG6xoYyK.js";import"./Button-C_uhqqdD.js";import"./small-cross-own7Uqs-.js";import"./ActionButton-Dx5rVu5l.js";import"./Checkbox-BcPXCcHY.js";import"./useValueChanged-CawvCcvS.js";import"./CollapsiblePanel-1We0fcIM.js";import"./MultiColumnSortDialog-C4qm4gIr.js";import"./MenuTrigger-BPKmddmT.js";import"./CompositeItem-DNmbzFT9.js";import"./ToolbarRootContext-C-XgkwmF.js";import"./getDisabledMountTransitionStyles-BSB2dByu.js";import"./getPseudoElementBounds-Cv7bWoSP.js";import"./chevron-down-Di9IPq2H.js";import"./index-Bw61tY6z.js";import"./error-BJLkldHu.js";import"./BaseCbacBanner-CdeGiA8M.js";import"./makeExternalStore-BYH0sOuo.js";import"./Tooltip-DaqQjAiE.js";import"./PopoverPopup-CLOXW3BX.js";import"./debounce-ZS8_n_nj.js";import"./useOsdkClient-Dkk6CBBB.js";import"./tick-plzq2OIV.js";import"./DropdownField-CTCBlMF_.js";import"./isEqual-BCtSdQgS.js";import"./withOsdkMetrics-CV_1aUYl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
