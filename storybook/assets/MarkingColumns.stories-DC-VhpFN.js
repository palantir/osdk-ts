import{f as p,j as e}from"./iframe-CiPu_-J4.js";import{O as i}from"./object-table-BmML7npE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cx_7U_Ih.js";import"./index-Bm0FtcPZ.js";import"./Dialog-eIctsCEH.js";import"./cross-Ca8iEZbR.js";import"./svgIconContainer-q0Pmv2d6.js";import"./useBaseUiId-C4cVz7Q6.js";import"./InternalBackdrop-CxYaPIJa.js";import"./composite-_cFRdRXY.js";import"./index-BvYm8X_W.js";import"./index-C2E71xpw.js";import"./index-CuiSH8el.js";import"./useEventCallback-DbFdZROs.js";import"./SkeletonBar-HE_lhZzX.js";import"./LoadingCell-CEAZmJyx.js";import"./ColumnConfigDialog-CbMiEeYO.js";import"./DraggableList-Cd-jQOxp.js";import"./search-B6nAZCB8.js";import"./Input-CbZwBqZS.js";import"./useControlled-Dt8lqEeV.js";import"./isEqual-BfBzp-0I.js";import"./isObject-BabYusV9.js";import"./Button-7FNOSjqj.js";import"./ActionButton-CYVwfbC8.js";import"./Checkbox-BnqpS-BU.js";import"./useValueChanged-C7YR8ezH.js";import"./CollapsiblePanel-ecEvpN-h.js";import"./MultiColumnSortDialog-BPPPJqbl.js";import"./MenuTrigger-D0T4_Y2P.js";import"./CompositeItem-B_4iwGUS.js";import"./ToolbarRootContext-CbmIJYSD.js";import"./getDisabledMountTransitionStyles-BJAwupJb.js";import"./getPseudoElementBounds-BwxqFIvl.js";import"./chevron-down-DeoFD6hB.js";import"./index-BlspZBuR.js";import"./error-BQWuaF69.js";import"./BaseCbacBanner-CF7RuGKw.js";import"./makeExternalStore-CMzFaru2.js";import"./Tooltip-CSuzWKqG.js";import"./PopoverPopup-ChN5TvmN.js";import"./toNumber-lSVnxv3w.js";import"./useOsdkClient-CXQzKmLd.js";import"./tick-Dh1KejZv.js";import"./DropdownField-Dw3v98hE.js";import"./withOsdkMetrics-BJsy9tin.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
