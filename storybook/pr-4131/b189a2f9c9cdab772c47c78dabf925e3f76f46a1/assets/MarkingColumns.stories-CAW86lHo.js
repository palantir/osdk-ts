import{f as p,j as e}from"./iframe-t8tzCNQG.js";import{O as i}from"./object-table-F4Md9RQV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DgmnFE1F.js";import"./Table-5fTxY2Uw.js";import"./index-B2ZMYIpf.js";import"./Dialog-DwJBNRCE.js";import"./cross-BlbUaBXV.js";import"./svgIconContainer-BMtFokv3.js";import"./useBaseUiId-5tpyF_oD.js";import"./InternalBackdrop-DRHhQcWa.js";import"./composite-CtIsJulR.js";import"./index-D86oorM3.js";import"./index-BUDOFPoc.js";import"./index-CPjyfk9f.js";import"./useEventCallback-Du7sw565.js";import"./SkeletonBar-Ctmv_DKB.js";import"./LoadingCell-CQBVoYwx.js";import"./ColumnConfigDialog-C8NYwuqH.js";import"./DraggableList-BEbzCFki.js";import"./search-CeoT8iOL.js";import"./Input-hnDJE6Oy.js";import"./useControlled-C3Y23C1t.js";import"./Button-DJ3cf7JH.js";import"./small-cross-bmT9fHJd.js";import"./ActionButton-DYfkYb1s.js";import"./Checkbox-DLp5SnEW.js";import"./useValueChanged-iJtQDgJE.js";import"./CollapsiblePanel-CLzEHlgM.js";import"./MultiColumnSortDialog-CHFWNES-.js";import"./MenuTrigger-86GtgIEW.js";import"./CompositeItem-BgkQkbdd.js";import"./ToolbarRootContext-HtRVgU8t.js";import"./getDisabledMountTransitionStyles-d1tAtN98.js";import"./getPseudoElementBounds-D5yioJI0.js";import"./chevron-down-Dw7pUuxv.js";import"./index-BP5-XTdL.js";import"./error-ByvTRN4V.js";import"./BaseCbacBanner-DIfT9Iki.js";import"./makeExternalStore-tE7kFU6z.js";import"./Tooltip-QQ-ZZ6je.js";import"./PopoverPopup-BK-uWVpQ.js";import"./debounce-DlkfzBW4.js";import"./useOsdkClient-DVOxrQDN.js";import"./tick-Bh48FDPD.js";import"./DropdownField-Di9jrMNs.js";import"./isEqual-Dhgy7epr.js";import"./withOsdkMetrics-D05rZYt3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
