import{f as p,j as e}from"./iframe-DU2asgHi.js";import{O as i}from"./object-table-BTUn_pwM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DsqXxi_A.js";import"./Table-BK6MjrbR.js";import"./index-DFhnaaAr.js";import"./Dialog-D7SQA5eP.js";import"./cross-C6UrNyea.js";import"./svgIconContainer-BKWt3i43.js";import"./useBaseUiId-BPYAUhe_.js";import"./InternalBackdrop-LSfiQ1uI.js";import"./composite-BO_QtSwT.js";import"./index-B61C-7go.js";import"./index-BBpWeKP6.js";import"./index-BnK_3hJb.js";import"./useEventCallback-C0eCyfdL.js";import"./SkeletonBar-CT9vipnR.js";import"./LoadingCell-B6hALW9X.js";import"./ColumnConfigDialog-DH7bwzAf.js";import"./DraggableList-DVsqBxmX.js";import"./search-Bj-aA1ip.js";import"./Input-CFKQAvGp.js";import"./useControlled-B_Wddgsf.js";import"./isEqual-BcmiWPbF.js";import"./isObject-C5VixieA.js";import"./Button-BoKqauNA.js";import"./ActionButton-Cs3dTYSO.js";import"./Checkbox-Nd9Czb6o.js";import"./useValueChanged-CrnYbGOp.js";import"./CollapsiblePanel-_UOx9Pfc.js";import"./MultiColumnSortDialog-DH9XT3S7.js";import"./MenuTrigger-CV4AFa8u.js";import"./CompositeItem-j9eZ3SSA.js";import"./ToolbarRootContext-DOV4hBBf.js";import"./getDisabledMountTransitionStyles-C9THsZem.js";import"./getPseudoElementBounds-BZyMsPoL.js";import"./chevron-down-BwlEqaIf.js";import"./index-BIeU9ja5.js";import"./error-BLPZYUEH.js";import"./BaseCbacBanner-CowZ5QYH.js";import"./makeExternalStore-C5_0kV4g.js";import"./Tooltip-BrdrfLc0.js";import"./PopoverPopup-CIZMrB5x.js";import"./toNumber-B0EPJkG9.js";import"./useOsdkClient-YrAbT238.js";import"./tick-Bg_EfLqB.js";import"./DropdownField-BNrrHq5s.js";import"./withOsdkMetrics-B4h2Vzuy.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
