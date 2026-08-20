import{f as p,j as e}from"./iframe-DmXP0LlD.js";import{O as i}from"./object-table-BjMOKbCg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Jf9pG1wK.js";import"./Table-Y9GfFRHB.js";import"./index-CZJiQUDL.js";import"./Dialog-CVsym47h.js";import"./cross-BrUjdQ5Z.js";import"./svgIconContainer-B-RvFu1q.js";import"./useBaseUiId-E5ZPLTjy.js";import"./InternalBackdrop-ChZQi1ES.js";import"./composite-DJUOEQiI.js";import"./index-DOc2Q07X.js";import"./index-CLUklD_q.js";import"./index-DJxwbR4M.js";import"./useEventCallback-Bja2Ayv3.js";import"./SkeletonBar-BFpqVqU_.js";import"./LoadingCell-CBmyY9EE.js";import"./ColumnConfigDialog-DEw4qskw.js";import"./DraggableList-Crfi2BHG.js";import"./search-Cd_hr6P9.js";import"./Input-nRL7PDkG.js";import"./useControlled-DVwcpHQh.js";import"./Button-CsgASgcA.js";import"./small-cross-BwaFhREm.js";import"./ActionButton-Dv0Ng1hy.js";import"./Checkbox-CPNQrtye.js";import"./useValueChanged-CmWjf2b_.js";import"./CollapsiblePanel-DyjWRvYh.js";import"./MultiColumnSortDialog-IJrMRGR8.js";import"./MenuTrigger-BU378CbM.js";import"./CompositeItem-BpyDnYwk.js";import"./ToolbarRootContext-CexR2eUf.js";import"./getDisabledMountTransitionStyles-C5aF-19e.js";import"./getPseudoElementBounds-BJekTzuW.js";import"./chevron-down-IhoHRVVT.js";import"./index-kI9ab8J3.js";import"./error-BhRfzKmP.js";import"./BaseCbacBanner-B31x1InM.js";import"./makeExternalStore-SUGo_pfp.js";import"./Tooltip-gfc1TfD5.js";import"./PopoverPopup-8idE2mCI.js";import"./debounce-Dr04tHtc.js";import"./useOsdkClient-u9eb-Osv.js";import"./tick-BsfBlrl4.js";import"./DropdownField-D4q_CFxC.js";import"./isEqual-GVkQHx_o.js";import"./withOsdkMetrics-ChE2bbpo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
