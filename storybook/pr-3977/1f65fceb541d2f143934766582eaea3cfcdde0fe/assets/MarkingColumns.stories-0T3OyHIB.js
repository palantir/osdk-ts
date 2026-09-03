import{f as p,j as e}from"./iframe-B9NaG1GB.js";import{O as i}from"./object-table-CFjdwvCD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-udZSqlM2.js";import"./Table-sD7nNFbd.js";import"./index-yUq6Iven.js";import"./Dialog-Dh198Xyv.js";import"./cross-BaJlm1ee.js";import"./svgIconContainer-Ch9sOYGG.js";import"./useBaseUiId-DgxXXPsW.js";import"./InternalBackdrop-C2K99UQF.js";import"./composite-B_1l4wbr.js";import"./index-DqyKTsev.js";import"./index-oAe2VpPP.js";import"./index-C7m4ZQHb.js";import"./useEventCallback-C-nAfNT0.js";import"./SkeletonBar-B3WZD8B_.js";import"./LoadingCell-BBqhAMOp.js";import"./ColumnConfigDialog-BlX-RA7F.js";import"./DraggableList-Dl23X7WD.js";import"./search-C7EjfmAX.js";import"./Input-BjAUxC1s.js";import"./useControlled-CxdGo8Ww.js";import"./Button-D3MlS94Q.js";import"./small-cross-DoygMeI4.js";import"./ActionButton-D6kiLQVM.js";import"./Checkbox-D3SSwq1g.js";import"./useValueChanged-C_9cZZ-H.js";import"./CollapsiblePanel-CwGD0sZF.js";import"./MultiColumnSortDialog-BFYe3cLr.js";import"./MenuTrigger-yzH0xIvu.js";import"./CompositeItem-D9-3_2mb.js";import"./ToolbarRootContext-Dkc8a9C0.js";import"./getDisabledMountTransitionStyles-B67W8wHq.js";import"./getPseudoElementBounds-EQT2lv3A.js";import"./chevron-down-CsyXd9Xe.js";import"./index-bgsc7zUx.js";import"./error-BcUNHOKh.js";import"./BaseCbacBanner-WR0woElR.js";import"./makeExternalStore-Ct-9sVSe.js";import"./Tooltip-DuqyUHxp.js";import"./PopoverPopup-BR9ZiCCw.js";import"./debounce-CI4bJKTw.js";import"./useOsdkClient-B2RCpAbM.js";import"./tick-CPo9xZcx.js";import"./DropdownField-DqeXn4qa.js";import"./isEqual-prfPAvtl.js";import"./withOsdkMetrics-1M7RvxJT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
