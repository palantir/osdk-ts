import{f as p,j as e}from"./iframe-qUoJ8bD1.js";import{O as i}from"./object-table-C32Rb_v3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ol3ztxLZ.js";import"./Table-DRuLsJ_W.js";import"./index-vMykFoz6.js";import"./Dialog-Qn8cLgI0.js";import"./cross-Cb35bm_z.js";import"./svgIconContainer-BFdHToqX.js";import"./useBaseUiId-DfL4ZZ8P.js";import"./InternalBackdrop-Cy_T0_FE.js";import"./composite-tj8owiCg.js";import"./index-DP_UhRTF.js";import"./index-Cz64Jyqa.js";import"./index-CB8C7-cG.js";import"./useEventCallback-DyvP_A81.js";import"./SkeletonBar-B4W7I0T9.js";import"./LoadingCell-C15wAKb0.js";import"./ColumnConfigDialog-BYKxoyE9.js";import"./DraggableList-DoSjLXZ2.js";import"./search-tL4GtzWj.js";import"./Input-CvSd3bUP.js";import"./useControlled-FmFohdHO.js";import"./isEqual-B_BmCAxf.js";import"./isObject-Dq2guUP7.js";import"./Button-DKNtfJMf.js";import"./ActionButton-CzoT9_MD.js";import"./Checkbox-MV4Nduzg.js";import"./useValueChanged-B3K31CFr.js";import"./CollapsiblePanel-Dkg1AscN.js";import"./MultiColumnSortDialog-DQTHxNJz.js";import"./MenuTrigger-2erLp3kW.js";import"./CompositeItem-BQsHw04j.js";import"./ToolbarRootContext-B_pSOxlb.js";import"./getDisabledMountTransitionStyles-CAcIXuef.js";import"./getPseudoElementBounds-BjRM6Xgm.js";import"./chevron-down-CMcKK_Lk.js";import"./index-SLkx8Rlc.js";import"./error-CbX-Ektr.js";import"./BaseCbacBanner-DQSGrcdr.js";import"./makeExternalStore-Os8YTNFV.js";import"./Tooltip-DpDnM_U4.js";import"./PopoverPopup-BMhFJB_0.js";import"./toNumber-6Rdthf3C.js";import"./useOsdkClient-BZmE3ry2.js";import"./tick-y6xP0Rva.js";import"./DropdownField-CqolFLg9.js";import"./withOsdkMetrics-DxfUN9ge.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
