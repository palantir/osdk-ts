import{f as p,j as e}from"./iframe-CSMdLy_I.js";import{O as i}from"./object-table-DpGPH4ge.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BCwYmOqM.js";import"./Table-DfBtddzc.js";import"./index-DGS2fgyr.js";import"./Dialog-i8zsa85E.js";import"./cross-rRwDjGT0.js";import"./svgIconContainer-CrtGHbrd.js";import"./useBaseUiId-DtXDl3EO.js";import"./InternalBackdrop-BfeMZC_0.js";import"./composite-Cr1W43yt.js";import"./index-BhZRCTRM.js";import"./index-DLB3_ur9.js";import"./index-QJiueyA8.js";import"./useEventCallback-W8UKu-Ag.js";import"./SkeletonBar-C4tzn2dO.js";import"./LoadingCell-BJmc-ZNS.js";import"./ColumnConfigDialog-C2NzCes3.js";import"./DraggableList-CGE8lq2b.js";import"./search-WBNkBZFc.js";import"./Input-4tMRpSwt.js";import"./useControlled-gwPjRggQ.js";import"./Button-BsIC8U9B.js";import"./small-cross-BwgGFbKS.js";import"./ActionButton-CeW5NSaB.js";import"./Checkbox-CRfBxcXo.js";import"./useValueChanged-C8niT4lC.js";import"./CollapsiblePanel-rhXz0ewg.js";import"./MultiColumnSortDialog-BcEiz3VR.js";import"./MenuTrigger-jClvhzvb.js";import"./CompositeItem-CQ_4wlFD.js";import"./ToolbarRootContext-2k2UafpN.js";import"./getDisabledMountTransitionStyles-D6grOVXg.js";import"./getPseudoElementBounds-C6u0lb-d.js";import"./chevron-down-Cct1BoUi.js";import"./index-CWmnhREc.js";import"./error-Duh78PLb.js";import"./BaseCbacBanner-BkUrSOHZ.js";import"./makeExternalStore-ToHZ88Vl.js";import"./Tooltip-ccVO4Ah8.js";import"./isObject-C3_fL553.js";import"./debounce-Bv9TTPnt.js";import"./useOsdkClient-DQvQ58tC.js";import"./tick-DhgTEvaD.js";import"./DropdownField-DIrWqSq3.js";import"./isEqual-Bn8jYnsm.js";import"./_baseIsEqual-DB2r6boN.js";import"./withOsdkMetrics-DOaLQ3Zd.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
