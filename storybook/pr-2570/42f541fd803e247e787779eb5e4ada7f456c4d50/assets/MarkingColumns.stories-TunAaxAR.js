import{f as p,j as e}from"./iframe-Dhbpz2gi.js";import{O as i}from"./object-table-Dpo2P-g6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-pmClhyIA.js";import"./Table-J8K4yk_n.js";import"./index-DSV0RL80.js";import"./Dialog-BmWUCtql.js";import"./cross-CFyO1iLs.js";import"./svgIconContainer-D2dXNiPy.js";import"./useBaseUiId-CACE2Sja.js";import"./InternalBackdrop-CU5AdZzY.js";import"./composite-DOBXXfvc.js";import"./index-Ca39Bid0.js";import"./index-CnSMSR0R.js";import"./index-Dew5d4z1.js";import"./useEventCallback-CJaRWzg5.js";import"./SkeletonBar-ChcHrYnF.js";import"./LoadingCell-BoW2Y8wi.js";import"./ColumnConfigDialog-B2HY3zjN.js";import"./DraggableList-Be3kaJ6G.js";import"./search-u8YFrvlf.js";import"./Input-BnzP7kbL.js";import"./useControlled-VMxlV8-z.js";import"./Button-BBeJRgfu.js";import"./small-cross-B_L6MZIl.js";import"./ActionButton-ChCcvaQX.js";import"./Checkbox-DdSzOZ2q.js";import"./useValueChanged-BOsd1GIT.js";import"./CollapsiblePanel-nyUJPFc3.js";import"./MultiColumnSortDialog-BsSa66WB.js";import"./MenuTrigger-6Wgnx2Z6.js";import"./CompositeItem-lexcaFgm.js";import"./ToolbarRootContext-Bg810oqs.js";import"./getDisabledMountTransitionStyles-Bh-dMn6q.js";import"./getPseudoElementBounds-DAcEjJ_C.js";import"./chevron-down-CiaZa2yM.js";import"./index-DXREmQu7.js";import"./error-BXnEUtGZ.js";import"./BaseCbacBanner-Ij4tkuzU.js";import"./makeExternalStore-BBmrBF7y.js";import"./Tooltip-BEukUHQs.js";import"./PopoverPopup-Dd7ELU_i.js";import"./debounce-zud5xvpI.js";import"./useOsdkClient-SDPeNtQ5.js";import"./tick-CIrlrYqM.js";import"./DropdownField-Bykj9lDw.js";import"./isEqual-Cq-efSCm.js";import"./withOsdkMetrics-D8w7KGDl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
