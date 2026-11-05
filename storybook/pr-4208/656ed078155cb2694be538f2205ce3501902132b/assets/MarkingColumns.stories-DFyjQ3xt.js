import{f as p,j as e}from"./iframe-2J5FrKrg.js";import{O as i}from"./object-table-BjSwGXl6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-1KHcGwA2.js";import"./Table-zF77GmYS.js";import"./index-DdQFZN0A.js";import"./Dialog-p_DiZkyI.js";import"./cross-C3qjpKNn.js";import"./svgIconContainer-C5u_HnP9.js";import"./useBaseUiId-BvE4vbB0.js";import"./InternalBackdrop-C54DBojs.js";import"./composite-BbUTZOvt.js";import"./index-CoGmcCzI.js";import"./index-bAdLuKNp.js";import"./index-BWJlDcPZ.js";import"./useEventCallback-LZLaGDRe.js";import"./SkeletonBar-BN0PV5wz.js";import"./LoadingCell-B6TmGQE1.js";import"./ColumnConfigDialog-BgDTGJHS.js";import"./DraggableList-sdzFfl77.js";import"./search-fHZBvfeM.js";import"./Input-BEKgo6O6.js";import"./useControlled-BRuPwTnE.js";import"./Button-CtoNW8MW.js";import"./small-cross-BBZdbk9L.js";import"./ActionButton-DWjB7yZw.js";import"./Checkbox-ChMOarzF.js";import"./useValueChanged-DXaGf5Gs.js";import"./CollapsiblePanel-C-9b8GqA.js";import"./MultiColumnSortDialog-BlPs5WlI.js";import"./MenuTrigger-CWG7noKe.js";import"./CompositeItem-yS3I_oZm.js";import"./ToolbarRootContext-CzvAPQX5.js";import"./getDisabledMountTransitionStyles-BNeqbgtt.js";import"./getPseudoElementBounds-C-mj8-g1.js";import"./chevron-down-DfTNwrQT.js";import"./index-CXuKETzB.js";import"./error-55u3yHQS.js";import"./BaseCbacBanner-aYjX9m9G.js";import"./makeExternalStore-B7uL5LnD.js";import"./Tooltip-C8NnOdy1.js";import"./PopoverPopup-CgQ4X2Ge.js";import"./debounce-CrX5_LDj.js";import"./useOsdkClient-dszr35NK.js";import"./tick-w61hFyp6.js";import"./DropdownField-CV1IThhY.js";import"./isEqual-BtLImdWH.js";import"./withOsdkMetrics-4gfK0oWP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
