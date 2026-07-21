import{f as p,j as e}from"./iframe-BLfBkU7c.js";import{O as i}from"./object-table-C3vL0bmg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D0FiUjlS.js";import"./index-Cd1weDkz.js";import"./Dialog-CndgrS_6.js";import"./cross-6JE2X0ld.js";import"./svgIconContainer-Cf593s56.js";import"./useBaseUiId-CLtvZEwH.js";import"./InternalBackdrop-B5NPQxjE.js";import"./composite-Cbye_36A.js";import"./index-D2H6BtrG.js";import"./index-B0gO-SUD.js";import"./index-Bi_iR8lV.js";import"./useEventCallback-nzF3QAZh.js";import"./SkeletonBar-UDkcjDRx.js";import"./LoadingCell-DNBt0Nkn.js";import"./ColumnConfigDialog-DHShmpxi.js";import"./DraggableList-D08tIHrT.js";import"./search-0LJGK5RR.js";import"./Input-DOxnnVCU.js";import"./useControlled-CjKAHLhK.js";import"./isEqual-wVa2de3W.js";import"./isObject-CsnjC0Hk.js";import"./Button-6ROdSkPj.js";import"./ActionButton-CIkn4yRo.js";import"./Checkbox-Dvmw7P4e.js";import"./useValueChanged-3nqKGhDz.js";import"./CollapsiblePanel-TDWzc7x-.js";import"./MultiColumnSortDialog-Csd8vrCM.js";import"./MenuTrigger-Bx9pFTch.js";import"./CompositeItem-24AhdNq5.js";import"./ToolbarRootContext-ByAIklDJ.js";import"./getDisabledMountTransitionStyles-CRs-vJXf.js";import"./getPseudoElementBounds-BT7D927s.js";import"./chevron-down-CNVJHkYO.js";import"./index-_yx_jyGy.js";import"./error-DVQkpXV7.js";import"./BaseCbacBanner-DT5NKK48.js";import"./makeExternalStore-Bgc2loVA.js";import"./Tooltip-C5OsiSM2.js";import"./PopoverPopup-c9m39GkN.js";import"./toNumber-Dq1Rhjak.js";import"./useOsdkClient-Q5Gc6Pva.js";import"./tick-Co3kNQ_O.js";import"./DropdownField-CCXPVpR7.js";import"./withOsdkMetrics-BHPjsBct.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
