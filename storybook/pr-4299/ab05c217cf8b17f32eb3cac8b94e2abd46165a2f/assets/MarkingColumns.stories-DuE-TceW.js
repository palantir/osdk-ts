import{f as p,j as e}from"./iframe-BR4-xVYI.js";import{O as i}from"./object-table-3cpMyVSZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DbBEOmrA.js";import"./Table-BXcklVqv.js";import"./index-Bl34zl0T.js";import"./Dialog-DJ-9aMTh.js";import"./cross-C0jaUfu0.js";import"./svgIconContainer-DsRlczG5.js";import"./useBaseUiId-BYzMy68a.js";import"./InternalBackdrop-BNRMpNwm.js";import"./composite-B5Ni56Yc.js";import"./index-CeuhUjnH.js";import"./index-ucjEhEXO.js";import"./index--n8M5GBW.js";import"./useEventCallback-CmAo7nrm.js";import"./SkeletonBar-B9zQOriA.js";import"./LoadingCell-lit_1UVA.js";import"./ColumnConfigDialog-CJy6PIYo.js";import"./DraggableList-Bvft9JGy.js";import"./search-WudRV3Lk.js";import"./Input-D7vx6zqX.js";import"./useControlled-DN7CYAB2.js";import"./Button-B43-ydWW.js";import"./small-cross-BeM5hQZj.js";import"./ActionButton-Dfm9fwti.js";import"./Checkbox-Zy4E_9pG.js";import"./useValueChanged-DfThrQO8.js";import"./CollapsiblePanel-Ceg7ith-.js";import"./MultiColumnSortDialog-M8x7mcq8.js";import"./MenuTrigger-DUcDUu6E.js";import"./CompositeItem-CeAvgtlv.js";import"./ToolbarRootContext-DPLqybB9.js";import"./getDisabledMountTransitionStyles-BCPsmVLX.js";import"./getPseudoElementBounds-DJ1Dele8.js";import"./chevron-down-B00usCld.js";import"./index-DEPbvTfn.js";import"./error-DEM7tD3T.js";import"./BaseCbacBanner-Bz-wy3-U.js";import"./makeExternalStore-BG7GijXm.js";import"./Tooltip-CY7AHoDM.js";import"./PopoverPopup-C1kMPgqS.js";import"./debounce-GtwJabeu.js";import"./useOsdkClient-CXmIXXsP.js";import"./tick-BIjGCOT-.js";import"./DropdownField-DjgoPeZ6.js";import"./isEqual-BBHofsAC.js";import"./withOsdkMetrics-kvzuwV_e.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
