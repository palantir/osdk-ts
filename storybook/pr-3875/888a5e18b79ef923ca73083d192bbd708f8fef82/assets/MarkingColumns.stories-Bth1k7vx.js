import{f as p,j as e}from"./iframe-6a_kvn9r.js";import{O as i}from"./object-table-gJ255PhT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-UmLrF_r9.js";import"./Table-XFNsRdvZ.js";import"./index-DZsq7FTs.js";import"./Dialog-CJHtM02i.js";import"./cross-ClFn7dec.js";import"./svgIconContainer-BMlsWZH7.js";import"./useBaseUiId-BwFLjng5.js";import"./InternalBackdrop-DESVWcn8.js";import"./composite-BqONz2GB.js";import"./index-De5jnlky.js";import"./index-BA8CMsKZ.js";import"./index-DdLLueEx.js";import"./useEventCallback-CzHH4T4L.js";import"./SkeletonBar-cjMH9Rpu.js";import"./LoadingCell-emwA1P9i.js";import"./ColumnConfigDialog-DumybdDg.js";import"./DraggableList-DkgUp4lG.js";import"./search-DOcCo1oD.js";import"./Input-BN6wpSvl.js";import"./useControlled-DlWAEbXA.js";import"./Button-BY6mG_TR.js";import"./small-cross-Bn2R2wbf.js";import"./ActionButton-Bi5m9DmB.js";import"./Checkbox-BPX4OFc-.js";import"./useValueChanged-CcWLOV5o.js";import"./CollapsiblePanel-CdhtTK8U.js";import"./MultiColumnSortDialog-BtmZ1yCk.js";import"./MenuTrigger-sr65K0My.js";import"./CompositeItem-r_UKZCPX.js";import"./ToolbarRootContext-8rOO4UX6.js";import"./getDisabledMountTransitionStyles-YFTqCi3r.js";import"./getPseudoElementBounds-CWsjtQ7H.js";import"./chevron-down-CWTTgj3w.js";import"./index-BGR9g80G.js";import"./error-C1tZ3x6V.js";import"./BaseCbacBanner-Cn-gJzjV.js";import"./makeExternalStore-B7ja9LyT.js";import"./Tooltip-CbdMy9JX.js";import"./PopoverPopup-C2WrfQ0J.js";import"./debounce-BQ6n828Z.js";import"./useOsdkClient-CGw7GANw.js";import"./tick-Ddpdailt.js";import"./DropdownField-iDzYtBYA.js";import"./isEqual-By-mDykE.js";import"./withOsdkMetrics-D0t1junC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
