import{f as p,j as e}from"./iframe-DxocSyIf.js";import{O as i}from"./object-table-CaKnpQ-i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D56zqST7.js";import"./Table-QSI8GlCw.js";import"./index-DfYEtxmC.js";import"./Dialog-d3R0xLoE.js";import"./cross-CVx988bJ.js";import"./svgIconContainer-Bj1sIzvv.js";import"./useBaseUiId--lgIG0_P.js";import"./InternalBackdrop-Cut_mBk7.js";import"./composite-Cghpi3uk.js";import"./index-02gWXqYk.js";import"./index-_cAiPY8y.js";import"./index-BEy5XIjA.js";import"./useEventCallback-DXHICVTo.js";import"./SkeletonBar-BaBNWfHB.js";import"./LoadingCell-Dpv0fPFj.js";import"./ColumnConfigDialog-xCBQCsG2.js";import"./DraggableList-Dk0oOAyq.js";import"./search-CQuVvSo7.js";import"./Input-Bw3XbqGk.js";import"./useControlled-BTWGqHDE.js";import"./Button-wSc2Yx62.js";import"./small-cross-hL-3WDGp.js";import"./ActionButton-CpdJTM7K.js";import"./Checkbox-DJoKfBe-.js";import"./useValueChanged-g_jUR8Y4.js";import"./CollapsiblePanel-Cy7Zihw3.js";import"./MultiColumnSortDialog-DUKtaUYS.js";import"./MenuTrigger-C_-OPkFs.js";import"./CompositeItem-idLXSPQh.js";import"./ToolbarRootContext-B-Vz0eah.js";import"./getDisabledMountTransitionStyles-RTvY0Tj_.js";import"./getPseudoElementBounds-DVmQFPdP.js";import"./chevron-down-myOLqEz6.js";import"./index-DNErSg1e.js";import"./error-CCnxuUsF.js";import"./BaseCbacBanner-C98-EIkC.js";import"./makeExternalStore-C5-_T4ZS.js";import"./Tooltip-CAu8kBHh.js";import"./PopoverPopup-YsdX51sf.js";import"./debounce-CCWQ0KNo.js";import"./useOsdkClient-BXG88ARm.js";import"./tick-CWU5bp-x.js";import"./DropdownField-Db8DvsDi.js";import"./isEqual-Bo2wP0vA.js";import"./withOsdkMetrics-CH0zpjho.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
