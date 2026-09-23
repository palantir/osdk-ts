import{f as p,j as e}from"./iframe-DGt_wNwK.js";import{O as i}from"./object-table-D2rerESU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DROywWZr.js";import"./Table-B8udSl2J.js";import"./index-DQChOSqq.js";import"./Dialog-DpgjGMr1.js";import"./cross-BGkapFHE.js";import"./svgIconContainer-D7UZVecC.js";import"./useBaseUiId-C69sf6z7.js";import"./InternalBackdrop-BoIr8mGI.js";import"./composite-LkGdti_A.js";import"./index-CvHeI6FX.js";import"./index-D8zmmPkx.js";import"./index-CVfN9RsA.js";import"./useEventCallback-D3k2FKOQ.js";import"./SkeletonBar-ClTE1RAP.js";import"./LoadingCell-Bh0fL1Mb.js";import"./ColumnConfigDialog-BbFEQ6SG.js";import"./DraggableList-Du47BSx-.js";import"./search-DyFNjb5Q.js";import"./Input-TkUYfjKo.js";import"./useControlled-CVm____s.js";import"./Button-BNxQZVJ4.js";import"./small-cross-DUBDtFaA.js";import"./ActionButton-kGYifaIO.js";import"./Checkbox-vbO2X5rh.js";import"./useValueChanged-CYmdB-rd.js";import"./CollapsiblePanel-B53z1qp2.js";import"./MultiColumnSortDialog-DMaupVNk.js";import"./MenuTrigger-C7oPeiO8.js";import"./CompositeItem-CarXUbLm.js";import"./ToolbarRootContext-CszZ8CJF.js";import"./getDisabledMountTransitionStyles-Bp3EcrUB.js";import"./getPseudoElementBounds-DuFjvkkb.js";import"./chevron-down-Dgt5xHaY.js";import"./index-D9K6xCG_.js";import"./error-CIpMfC0e.js";import"./BaseCbacBanner-CK76grfH.js";import"./makeExternalStore-UXCR43hi.js";import"./Tooltip-D200fGQb.js";import"./PopoverPopup-CQEfdNJX.js";import"./debounce-D4ERLSUT.js";import"./useOsdkClient-CsXE7S4d.js";import"./tick-DpVf1RzV.js";import"./DropdownField-BjN9Z-rg.js";import"./isEqual-DyqcFYzI.js";import"./withOsdkMetrics-CDbkSkNJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
