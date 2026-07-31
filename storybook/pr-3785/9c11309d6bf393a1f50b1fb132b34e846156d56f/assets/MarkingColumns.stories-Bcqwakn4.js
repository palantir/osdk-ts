import{f as p,j as e}from"./iframe-ISHOQfc5.js";import{O as i}from"./object-table-8OpgWczO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvlVZRRW.js";import"./Table-CNtXhTM3.js";import"./index-DIh3jcjT.js";import"./Dialog-s5jYdQqX.js";import"./cross-CBjHcWLp.js";import"./svgIconContainer-DtuqW3jd.js";import"./useBaseUiId-uKaeTVeA.js";import"./InternalBackdrop-B4gO3MAw.js";import"./composite-B80WA38w.js";import"./index-D_YubaQ1.js";import"./index-Dqqtt2Iv.js";import"./index-BdKImVAr.js";import"./useEventCallback-DhwLiGkC.js";import"./SkeletonBar-DsWVYjaC.js";import"./LoadingCell-DI_k5VVW.js";import"./ColumnConfigDialog-CERMBd90.js";import"./DraggableList-Dneae-u-.js";import"./search-CMnUBHZ2.js";import"./Input-DdoFIUV_.js";import"./useControlled-CINon2aU.js";import"./isEqual-COeaYAD1.js";import"./isObject-Zv09roRs.js";import"./Button-DhvUcPPD.js";import"./ActionButton-BJk4oTw0.js";import"./Checkbox-CLXvGtwi.js";import"./useValueChanged-CHSNItn1.js";import"./CollapsiblePanel-hryjGiZW.js";import"./MultiColumnSortDialog-BODt7BHr.js";import"./MenuTrigger-M2awlbrt.js";import"./CompositeItem-Bo1P1gWs.js";import"./ToolbarRootContext-Dob_jToB.js";import"./getDisabledMountTransitionStyles-CJQTx1_6.js";import"./getPseudoElementBounds-CcbfbqiH.js";import"./chevron-down-DhII4Rpq.js";import"./index-BZc_8tWb.js";import"./error-DUcOx40G.js";import"./BaseCbacBanner-CNa1yrZi.js";import"./makeExternalStore-V0faKrRY.js";import"./Tooltip-B6GjTRqL.js";import"./PopoverPopup-DZ4RScjh.js";import"./toNumber-DTzRCPAH.js";import"./useOsdkClient-DahZKVKk.js";import"./tick-CFcRW_8j.js";import"./DropdownField-QAs5n16T.js";import"./withOsdkMetrics-Bw8tRnT9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
