import{f as p,j as e}from"./iframe-BgMdPl3C.js";import{O as i}from"./object-table-D4oPfDXV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sBnEI_Ig.js";import"./Table-97Gw9S7_.js";import"./index-CpB1FxHm.js";import"./Dialog-BqmqocYn.js";import"./cross-D6oplnX9.js";import"./svgIconContainer-DMmYLpy9.js";import"./useBaseUiId-CxT5YLyS.js";import"./InternalBackdrop-BN-4yFF3.js";import"./composite-sAuyKpQi.js";import"./index-BXH-jRmH.js";import"./index-0YWULKcm.js";import"./index-Bz057Fgu.js";import"./useEventCallback-Cmb84_X1.js";import"./SkeletonBar-CojPQo60.js";import"./LoadingCell-B1K2l9o0.js";import"./ColumnConfigDialog-CWCZZhUo.js";import"./DraggableList-BumWgSPL.js";import"./search-CWQDb4l_.js";import"./Input-3QA4m500.js";import"./useControlled-Byq8R2zI.js";import"./Button-tnOg-ckf.js";import"./small-cross-BU2y1cKB.js";import"./ActionButton-DlS31NmR.js";import"./Checkbox-Dr7IxN4X.js";import"./useValueChanged-pacesa_7.js";import"./CollapsiblePanel-CzwDlkcV.js";import"./MultiColumnSortDialog-B8ujW6oW.js";import"./MenuTrigger-CGNumkog.js";import"./CompositeItem-D5EZoP9q.js";import"./ToolbarRootContext-D7J-gn0d.js";import"./getDisabledMountTransitionStyles-DvbK_Xe3.js";import"./getPseudoElementBounds-BNISWdkv.js";import"./chevron-down-CpM76MZN.js";import"./index-CIL9XgBZ.js";import"./error-CThhHbJ9.js";import"./BaseCbacBanner-DTtOB39W.js";import"./makeExternalStore-CU4m9b0Z.js";import"./Tooltip-ByGWv4u-.js";import"./PopoverPopup-DnrKPeJ4.js";import"./debounce-CPxVN93o.js";import"./useOsdkClient-D3kLb---.js";import"./tick-NEjLld8Y.js";import"./DropdownField-E-id6n8_.js";import"./isEqual-D0E7h3-i.js";import"./withOsdkMetrics-iUwzYuQQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
