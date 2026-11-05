import{f as p,j as e}from"./iframe-wedJSnud.js";import{O as i}from"./object-table-BajGG0to.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DcVHnV_i.js";import"./Table-BLY9Mong.js";import"./index-BsI8HLJz.js";import"./Dialog-J4Cd9_OE.js";import"./cross-CxbFlbaI.js";import"./svgIconContainer-CJJHSkNv.js";import"./useBaseUiId-BGqSil3r.js";import"./InternalBackdrop-CYExiY0H.js";import"./composite-CGFDwdnq.js";import"./index-Nf3FTUKP.js";import"./index-BCNEaR-3.js";import"./index-DaGnA4hb.js";import"./useEventCallback-CSpaNNY7.js";import"./SkeletonBar-mu4DFzMg.js";import"./LoadingCell-BT-nN-EI.js";import"./ColumnConfigDialog-Bmw7mdxZ.js";import"./DraggableList-xmn571DV.js";import"./search-B0U_YWQT.js";import"./Input-Z8OuidlN.js";import"./useControlled-RZ5VMgMB.js";import"./Button-UisMFP1d.js";import"./small-cross-Cn8qa5Sh.js";import"./ActionButton-DaNuKssk.js";import"./Checkbox-BY-XFwqd.js";import"./useValueChanged-Bb0TAKp4.js";import"./CollapsiblePanel-C69XGwDY.js";import"./MultiColumnSortDialog-M_bQCmOw.js";import"./MenuTrigger-COtuRsgu.js";import"./CompositeItem-DUPpieEN.js";import"./ToolbarRootContext-Bs5SB0fX.js";import"./getDisabledMountTransitionStyles-DGGlYbfe.js";import"./getPseudoElementBounds-C5lKtGGS.js";import"./chevron-down-DkT3Qzaa.js";import"./index-DWYfh9fQ.js";import"./error-BFWppJ2G.js";import"./BaseCbacBanner-BQwi4y0V.js";import"./makeExternalStore-cCCuNZuQ.js";import"./Tooltip-BnvTu1M2.js";import"./PopoverPopup-BS1FnNJF.js";import"./debounce-slxGNpXd.js";import"./useOsdkClient-C_rjoUrX.js";import"./tick-B3xCBs79.js";import"./DropdownField-DA0RqhyD.js";import"./isEqual-7xOAoX3N.js";import"./withOsdkMetrics-B2en0C3P.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
