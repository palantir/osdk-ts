import{f as p,j as e}from"./iframe-DcMbTmRa.js";import{O as i}from"./object-table-RQbvyDet.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C7g9GPtA.js";import"./Table-BPyCz4oN.js";import"./index-C60lWWNc.js";import"./Dialog-_Okoz0Me.js";import"./cross-CvsAEbe5.js";import"./svgIconContainer-Dtbx0Dqw.js";import"./useBaseUiId-BoE0CJkX.js";import"./InternalBackdrop-CBppXo8q.js";import"./composite-D9rv3OCk.js";import"./index-8cdMoAmx.js";import"./index-BX5mDqBN.js";import"./index-CWUm4wyT.js";import"./useEventCallback-BxBZ6Q_C.js";import"./SkeletonBar-BFt0iUHq.js";import"./LoadingCell-OD2VOljE.js";import"./ColumnConfigDialog-D-Pdo4ZV.js";import"./DraggableList-BbPqHYfh.js";import"./search-TrEbjpAG.js";import"./Input-CODDUPe4.js";import"./useControlled-DRUQL6h1.js";import"./Button-DwdrXcb7.js";import"./small-cross-B_gXyj8o.js";import"./ActionButton-DuEqwWBd.js";import"./Checkbox-CbqQLQcn.js";import"./useValueChanged-BS7pYpJf.js";import"./CollapsiblePanel-Dr2wSz6F.js";import"./MultiColumnSortDialog-Dec-5vDH.js";import"./MenuTrigger-DF7tK1Vd.js";import"./CompositeItem-BsY89uKf.js";import"./ToolbarRootContext-D6zdw_WQ.js";import"./getDisabledMountTransitionStyles-DunnftaS.js";import"./getPseudoElementBounds-B9qfwwcj.js";import"./chevron-down-C8iVK9bf.js";import"./index-JAMdWW7E.js";import"./error-D9-VUnqg.js";import"./BaseCbacBanner-CftHJWcR.js";import"./makeExternalStore-Cd9hU_OQ.js";import"./Tooltip-tqvCkPOz.js";import"./PopoverPopup-RlIhsigx.js";import"./debounce-B9j-duvu.js";import"./useOsdkClient-uzO2rWFv.js";import"./tick-BLU3AcFY.js";import"./DropdownField-DeOqCMrz.js";import"./isEqual-BrRjolNL.js";import"./withOsdkMetrics-BT35iGvu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
