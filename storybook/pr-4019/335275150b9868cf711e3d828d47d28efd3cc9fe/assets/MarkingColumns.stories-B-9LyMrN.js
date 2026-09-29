import{f as p,j as e}from"./iframe-ALAQwSfV.js";import{O as i}from"./object-table-B5Y-FdlO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fLSKrq12.js";import"./Table-y3Ue12x0.js";import"./index-nJZFwjBY.js";import"./Dialog-BqmhBVBc.js";import"./cross-CTj2uYDt.js";import"./svgIconContainer-CsyrjEXm.js";import"./useBaseUiId-BtuLk_tP.js";import"./InternalBackdrop-iwn5b5gf.js";import"./composite-TYYt2fCx.js";import"./index-BYTfgmte.js";import"./index-DvjPzKHT.js";import"./index-DCw12hpD.js";import"./useEventCallback-D7Z-udTV.js";import"./SkeletonBar-tY7bgNdB.js";import"./LoadingCell-iXXN4fTA.js";import"./ColumnConfigDialog-spFlNXIh.js";import"./DraggableList-BvBf5a-L.js";import"./search-6F7M3AuK.js";import"./Input-CFWd2gLa.js";import"./useControlled-f6wr2N38.js";import"./Button-Be4ab6Ld.js";import"./small-cross-Bymv6dJ6.js";import"./ActionButton-CThDEtCo.js";import"./Checkbox-BliZh0Tj.js";import"./useValueChanged-Cmuhto8a.js";import"./CollapsiblePanel-BbDUb0xg.js";import"./MultiColumnSortDialog-BCMdQTO-.js";import"./MenuTrigger-Cs2aHSlk.js";import"./CompositeItem-DbwrFgnX.js";import"./ToolbarRootContext-B_pgtouG.js";import"./getDisabledMountTransitionStyles-_fn-AZLs.js";import"./getPseudoElementBounds-nAdQbUQj.js";import"./chevron-down-nwzUELg0.js";import"./index-DipU2kkl.js";import"./error-fdu9cH2p.js";import"./BaseCbacBanner-xAH7Syu1.js";import"./makeExternalStore-BU7UI9Bv.js";import"./Tooltip-BJAwvsAX.js";import"./PopoverPopup-BM1vQM5s.js";import"./debounce-CCGKB1Tj.js";import"./useOsdkClient-KB4bH-DF.js";import"./tick-D6R52cs_.js";import"./DropdownField-DixIy5fE.js";import"./isEqual-iKZ94W8E.js";import"./withOsdkMetrics-Bz9MfpUK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
