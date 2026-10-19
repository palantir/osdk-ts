import{f as p,j as e}from"./iframe-D2f1Nzwk.js";import{O as i}from"./object-table-CIIsCPIu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-oV1Eeolq.js";import"./Table-DPxHFvSR.js";import"./index-DLHsiDYZ.js";import"./Dialog-uAL31SBn.js";import"./cross-DkwiluwT.js";import"./svgIconContainer-CmuFo95M.js";import"./useBaseUiId-C1fFwhw7.js";import"./InternalBackdrop-lpGOYkEJ.js";import"./composite-CiG9-8W_.js";import"./index-QYMyWYDY.js";import"./index-BojiIOfH.js";import"./index-BmDZuti5.js";import"./useEventCallback-tMcy_YiL.js";import"./SkeletonBar-nGMBXhyP.js";import"./LoadingCell-8BQAcXDu.js";import"./ColumnConfigDialog-BW_W77MG.js";import"./DraggableList-B3svYvPz.js";import"./search-Cf99U-Bj.js";import"./Input-DGocKpsh.js";import"./useControlled-CNjTn84h.js";import"./Button-D6z8871L.js";import"./small-cross-BPAsCQGt.js";import"./ActionButton-B_L3rwG4.js";import"./Checkbox-B3Qq5NtY.js";import"./useValueChanged-CUcJG0Bt.js";import"./CollapsiblePanel-BwmdKoWP.js";import"./MultiColumnSortDialog-B_NtWYuQ.js";import"./MenuTrigger-BC-gZs2H.js";import"./CompositeItem-C741riYb.js";import"./ToolbarRootContext-Dx7XJj5N.js";import"./getDisabledMountTransitionStyles-BNKxtgYL.js";import"./getPseudoElementBounds-kPdI6WhS.js";import"./chevron-down-DJdsQouz.js";import"./index-D02xz1tz.js";import"./error-BeTADbMo.js";import"./BaseCbacBanner-DrIYCssB.js";import"./makeExternalStore-DTw3LndD.js";import"./Tooltip-CDYk2b3D.js";import"./PopoverPopup-CsHrtQTv.js";import"./debounce-C9b86hHB.js";import"./useOsdkClient-DHeuZpzO.js";import"./tick-Bl3uL3bd.js";import"./DropdownField-D65WFOp_.js";import"./isEqual-CnaQZLDl.js";import"./withOsdkMetrics-BCs1456K.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
