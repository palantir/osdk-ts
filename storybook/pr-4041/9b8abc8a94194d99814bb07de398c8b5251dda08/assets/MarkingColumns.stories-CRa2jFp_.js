import{f as p,j as e}from"./iframe-C2aef3Jo.js";import{O as i}from"./object-table-DMcKKEk4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0E-WsIe.js";import"./Table-pflxRlkp.js";import"./index-CsHYpv_s.js";import"./Dialog-BtdNvTzc.js";import"./cross-mqWCDQwu.js";import"./svgIconContainer-BXdP-ypI.js";import"./useBaseUiId-BjYhZ9YY.js";import"./InternalBackdrop-BlKAfi2x.js";import"./composite-B2RxptoP.js";import"./index-DQucsIw7.js";import"./index-Cp-EDvHL.js";import"./index-CyH7L4rU.js";import"./useEventCallback-CoxthiVL.js";import"./SkeletonBar-gnedLyA8.js";import"./LoadingCell-DdO7Ovgw.js";import"./ColumnConfigDialog-C2N80SQq.js";import"./DraggableList-BgAgl3DM.js";import"./search-D59Jmp9F.js";import"./Input-DZdZFiVD.js";import"./useControlled-D_x1ayHM.js";import"./Button-Cg9SUJSs.js";import"./small-cross-DtWUwlkL.js";import"./ActionButton-CfluOSPS.js";import"./Checkbox-CQZyZMOV.js";import"./useValueChanged-CVWJNNpw.js";import"./CollapsiblePanel-BUi3el3A.js";import"./MultiColumnSortDialog-B1FOLAbC.js";import"./MenuTrigger-wDdcEy_H.js";import"./CompositeItem-083J1aRu.js";import"./ToolbarRootContext-B7lRNTOm.js";import"./getDisabledMountTransitionStyles-BNLNL_0E.js";import"./getPseudoElementBounds-CD5dDWGk.js";import"./chevron-down-DQZukdfl.js";import"./index-aIdw8oWM.js";import"./error-D0kSZtEZ.js";import"./BaseCbacBanner-BiWMelEa.js";import"./makeExternalStore-Bm5e9_5-.js";import"./Tooltip-DPyBGWcj.js";import"./PopoverPopup-DvqStvko.js";import"./debounce-BmYDT_B0.js";import"./useOsdkClient-2T4P3ooX.js";import"./tick-CqaW51QZ.js";import"./DropdownField-CILDnmw3.js";import"./isEqual-BvfB1Oe3.js";import"./withOsdkMetrics-DRjEcDDc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
