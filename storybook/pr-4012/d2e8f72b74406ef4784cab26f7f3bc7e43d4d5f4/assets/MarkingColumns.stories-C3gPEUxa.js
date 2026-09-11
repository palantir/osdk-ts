import{f as p,j as e}from"./iframe-C-mlL1d1.js";import{O as i}from"./object-table-CflN7BW3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BUxDkfWR.js";import"./Table-CrwMjEH3.js";import"./index-B6OYb_DA.js";import"./Dialog-J8erkqPd.js";import"./cross-bL1PiJj_.js";import"./svgIconContainer-DOFv3aDL.js";import"./useBaseUiId-BKlcYEBY.js";import"./InternalBackdrop-Bno6e7cF.js";import"./composite-T8-lg8nr.js";import"./index-nwLa4JDa.js";import"./index-BMP6rH9L.js";import"./index-ChA1IBqb.js";import"./useEventCallback-BrE-PuVs.js";import"./SkeletonBar-Bg2MXuuJ.js";import"./LoadingCell-CxcZgFpo.js";import"./ColumnConfigDialog-BIS05p60.js";import"./DraggableList-CLfe6gab.js";import"./search-9EoPaIsu.js";import"./Input-DwnchpfY.js";import"./useControlled-Bq8qBaBJ.js";import"./Button-To2COh7T.js";import"./small-cross-B5y9L61C.js";import"./ActionButton-DhCGZoHD.js";import"./Checkbox-CrUAsNNw.js";import"./useValueChanged-Bo5thQ8O.js";import"./CollapsiblePanel-CNKrkZjW.js";import"./MultiColumnSortDialog-sYWUGk65.js";import"./MenuTrigger-CXVAqCWg.js";import"./CompositeItem-CF65Mtg9.js";import"./ToolbarRootContext-BcwoWGuf.js";import"./getDisabledMountTransitionStyles-B16n-yTJ.js";import"./getPseudoElementBounds-0jq6bko3.js";import"./chevron-down-CfvB8SzD.js";import"./index-Bb5I7VlI.js";import"./error-C0XWqrZ2.js";import"./BaseCbacBanner-DBuHYUCN.js";import"./makeExternalStore-Dn2EZb1T.js";import"./Tooltip-JNvzBEcs.js";import"./PopoverPopup-B2DKSbuW.js";import"./debounce-BS-XCJuC.js";import"./useOsdkClient-BSUtxC4C.js";import"./tick-DD6qfwut.js";import"./DropdownField-zYP-JtQg.js";import"./isEqual-BajcDWPI.js";import"./withOsdkMetrics-DYUhhphE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
