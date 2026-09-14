import{f as p,j as e}from"./iframe-Uo3dslN8.js";import{O as i}from"./object-table-xo8-ePPK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Di20YyVw.js";import"./Table-Bj185Q2M.js";import"./index-DM2i2mIv.js";import"./Dialog-DPSIYe0q.js";import"./cross-CtSgYx1A.js";import"./svgIconContainer-CCPA44UG.js";import"./useBaseUiId-BMW1tYuT.js";import"./InternalBackdrop-Cawem0xc.js";import"./composite-CJL7rGjP.js";import"./index-BjmUJLrE.js";import"./index-DNOgt9xG.js";import"./index-AMq3qfnV.js";import"./useEventCallback-DuKH2Kse.js";import"./SkeletonBar-hMMVmlwX.js";import"./LoadingCell-DbCXbulB.js";import"./ColumnConfigDialog-CJtYLyJh.js";import"./DraggableList-BOsu8b6O.js";import"./search-DMwUXAz4.js";import"./Input-COrEd_bS.js";import"./useControlled-DxDhJC_G.js";import"./Button-CVEJXnPN.js";import"./small-cross-23YS3Wdy.js";import"./ActionButton-C5Zbzrcj.js";import"./Checkbox-F4EIPJKJ.js";import"./useValueChanged-DKndpPjF.js";import"./CollapsiblePanel-BMUw2sen.js";import"./MultiColumnSortDialog-BhY76eSz.js";import"./MenuTrigger-DNYd3FuB.js";import"./CompositeItem-CwindMm_.js";import"./ToolbarRootContext-CpVoG4Hd.js";import"./getDisabledMountTransitionStyles-DjGcX-z1.js";import"./getPseudoElementBounds-B1qmsDI-.js";import"./chevron-down-CCfCID7b.js";import"./index-DmI8cFxT.js";import"./error-Suxt282O.js";import"./BaseCbacBanner-BTXRf756.js";import"./makeExternalStore-BoTJ6suj.js";import"./Tooltip-B4ethV14.js";import"./PopoverPopup-BHKbeMsS.js";import"./debounce-BaKAl05r.js";import"./useOsdkClient-CZ5jAc54.js";import"./tick-W4zHdn4i.js";import"./DropdownField-S1rKLw4k.js";import"./isEqual-1lbKKA-o.js";import"./withOsdkMetrics-BYDhROpI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
