import{f as p,j as e}from"./iframe-BDrYxAnj.js";import{O as i}from"./object-table-BBe01rOp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BbEpp3I7.js";import"./Table-D-vzxeIM.js";import"./index-BPEebEts.js";import"./Dialog-DPBerO6L.js";import"./cross-DN7w6x3L.js";import"./svgIconContainer-Ds5xgQa8.js";import"./useBaseUiId-CAXuqLAY.js";import"./InternalBackdrop-DWYHvnmi.js";import"./composite-DYyfkGU2.js";import"./index-BrKxc1O3.js";import"./index-7qmIIDvp.js";import"./index-CGlFVnJg.js";import"./useEventCallback-dV43fwqZ.js";import"./SkeletonBar-3MDKkZoz.js";import"./LoadingCell-CwbuJPcu.js";import"./ColumnConfigDialog-BTONJoiK.js";import"./DraggableList-CmS4ByL1.js";import"./search-bZxTGR19.js";import"./Input-C01z3l8s.js";import"./useControlled-BxTCkN_B.js";import"./Button-BXNKdTW4.js";import"./small-cross-BCuonOce.js";import"./ActionButton-Dt_BEibG.js";import"./Checkbox-Gd7yqC4V.js";import"./useValueChanged-BIKs48bW.js";import"./CollapsiblePanel-CSDsM7aL.js";import"./MultiColumnSortDialog-qJwWzLXC.js";import"./MenuTrigger-CWq-RERI.js";import"./CompositeItem-Bmk8s39S.js";import"./ToolbarRootContext-GKsQXXvO.js";import"./getDisabledMountTransitionStyles-CpLEVLsZ.js";import"./getPseudoElementBounds-BKXXIJ8q.js";import"./chevron-down-DSLDVHXx.js";import"./index-5OHDQhQD.js";import"./error-Bic94l6Q.js";import"./BaseCbacBanner-DIZLSVF8.js";import"./makeExternalStore-BknbLg4s.js";import"./Tooltip-F1ZDXICZ.js";import"./PopoverPopup-Du5q3SlO.js";import"./debounce-BunXjI-p.js";import"./useOsdkClient-BlyxCpjB.js";import"./tick-BobOfkxj.js";import"./DropdownField-c9rafbuP.js";import"./isEqual-DhVMvS_4.js";import"./withOsdkMetrics-O05I0Pm6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
