import{f as p,j as e}from"./iframe-DfwKiHjh.js";import{O as i}from"./object-table-D4wAsZ7q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5NrpNAmT.js";import"./Table-B7MNUim9.js";import"./index-DQCbDJi8.js";import"./Dialog-DXLxDtSn.js";import"./cross-BXl7NczM.js";import"./svgIconContainer-BCMIhWa6.js";import"./useBaseUiId-SmhboENz.js";import"./InternalBackdrop-BDXq5BSA.js";import"./composite-mjsmoQDf.js";import"./index-aXU9JM6g.js";import"./index-COIAanZc.js";import"./index-UDlVD7eQ.js";import"./useEventCallback-hQRC-YiH.js";import"./SkeletonBar-CpKRXo_I.js";import"./LoadingCell-C4Pk54Me.js";import"./ColumnConfigDialog-BaucgyCS.js";import"./DraggableList-Bbxn-D33.js";import"./search-Df49v7_E.js";import"./Input-CijjM8i3.js";import"./useControlled-BVcUwOCR.js";import"./Button-4g201-R3.js";import"./small-cross-e1k1o1SZ.js";import"./ActionButton-Du85Cev6.js";import"./Checkbox-CDdUZXw-.js";import"./useValueChanged-DsumsiTQ.js";import"./CollapsiblePanel-CHALF4sW.js";import"./MultiColumnSortDialog-BtsOJ0RZ.js";import"./MenuTrigger-CcZ6zKIy.js";import"./CompositeItem-BRErCda5.js";import"./ToolbarRootContext-ywVZD9re.js";import"./getDisabledMountTransitionStyles-BcpIOTg3.js";import"./getPseudoElementBounds-Qvyi7lGR.js";import"./chevron-down-DeRPcryF.js";import"./index-BvJwPorm.js";import"./error-GYK-h93n.js";import"./BaseCbacBanner-DpSPxnKD.js";import"./makeExternalStore-DBs5yW9O.js";import"./Tooltip-DCCHCGDN.js";import"./PopoverPopup-D8jrxLG3.js";import"./debounce-Db1JwLM-.js";import"./useOsdkClient-DSSfPHx3.js";import"./tick-Cg1u7UqH.js";import"./DropdownField-BUzOTkFF.js";import"./isEqual-Des70IXo.js";import"./withOsdkMetrics-x9zZJEiy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
