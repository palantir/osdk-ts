import{f as p,j as e}from"./iframe-BBlRBgNm.js";import{O as i}from"./object-table-DASSQ9GQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nUcndVB1.js";import"./Table-DoCE0_ta.js";import"./index-BZqLTchK.js";import"./Dialog-BN1Ll_Mt.js";import"./cross-wqLIhFuX.js";import"./svgIconContainer-DOveKI2E.js";import"./useBaseUiId-CY9tAtRf.js";import"./InternalBackdrop-B3cUMuwX.js";import"./composite-D1tYMIIj.js";import"./index-CDRFlmxs.js";import"./index-BxiEEyZP.js";import"./index-Dpur4ZgS.js";import"./useEventCallback-DPcgSbs7.js";import"./SkeletonBar-DItZ6pPc.js";import"./LoadingCell-CFJHl2W3.js";import"./ColumnConfigDialog-C6EXlW4L.js";import"./DraggableList-CZvDb2Rs.js";import"./search-BWru_8ZJ.js";import"./Input-iZ0inZPU.js";import"./useControlled-BArMeZNp.js";import"./Button-rAV1gEhG.js";import"./small-cross-DZQdemxI.js";import"./ActionButton-slRltjTn.js";import"./Checkbox-Cd6hrv29.js";import"./useValueChanged-MzDo2j3C.js";import"./CollapsiblePanel-BX6aE7S7.js";import"./MultiColumnSortDialog-DbZOZ_cP.js";import"./MenuTrigger-X5QPubPN.js";import"./CompositeItem-TLen8WtJ.js";import"./ToolbarRootContext-DE0PC0Rd.js";import"./getDisabledMountTransitionStyles-ysFhXVzU.js";import"./getPseudoElementBounds-pR_ilbUx.js";import"./chevron-down-796VQilV.js";import"./index-BeqmCVha.js";import"./error-CSd4pgb3.js";import"./BaseCbacBanner-5pe5EgoM.js";import"./makeExternalStore-CAu16bqE.js";import"./Tooltip-Bf9OdCcy.js";import"./PopoverPopup-CV19ssg7.js";import"./toNumber-CURGE_Tq.js";import"./useOsdkClient-BHUBDa2P.js";import"./tick-BBDpiVWD.js";import"./DropdownField-DLmWQ22W.js";import"./withOsdkMetrics-Cmjq74if.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
