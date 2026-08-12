import{f as p,j as e}from"./iframe-BPstW6ZE.js";import{O as i}from"./object-table-D-o69GE3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C1yaL2qB.js";import"./Table-BEhBCAZB.js";import"./index-oeOs9xDH.js";import"./Dialog-GTZWMfmi.js";import"./cross-h_pVI4NA.js";import"./svgIconContainer-P3rHXEhC.js";import"./useBaseUiId-DQCTx5tU.js";import"./InternalBackdrop-CADeAroK.js";import"./composite-BvwNFg7y.js";import"./index-BsuF2ON3.js";import"./index-D870R5ia.js";import"./index-FqcPuEWk.js";import"./useEventCallback-BmRB3Hyu.js";import"./SkeletonBar-B-M25D9F.js";import"./LoadingCell-BiPmgVC8.js";import"./ColumnConfigDialog-BJyMcDsF.js";import"./DraggableList-CfhjYQXW.js";import"./search-luiRnVuA.js";import"./Input-CJQqoWu9.js";import"./useControlled-CMlf5svM.js";import"./isEqual-BXF6jkNC.js";import"./isObject-BlJ2n4Pj.js";import"./Button-DpEn25wX.js";import"./ActionButton-B4Ro7V7h.js";import"./Checkbox-DpRmUnIN.js";import"./useValueChanged-M_mFMCou.js";import"./CollapsiblePanel-BgN_u1EL.js";import"./MultiColumnSortDialog-B0sNZVI2.js";import"./MenuTrigger-Dcp8kl_G.js";import"./CompositeItem-DKvCwQV-.js";import"./ToolbarRootContext-6fjF2uPZ.js";import"./getDisabledMountTransitionStyles-DP6x3nVb.js";import"./getPseudoElementBounds-DSbLy3C-.js";import"./chevron-down-BAdvtM20.js";import"./index-DT1CG8gQ.js";import"./error-CcPkSYDi.js";import"./BaseCbacBanner-C45xgzQO.js";import"./makeExternalStore-BKSRaA4m.js";import"./Tooltip-B8gaSUFu.js";import"./PopoverPopup-maH0pGUs.js";import"./toNumber-DNIsRNAE.js";import"./useOsdkClient-DRaShh3l.js";import"./tick-CsxuT713.js";import"./DropdownField-AVjDHtIY.js";import"./withOsdkMetrics-D8kGTVyU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
