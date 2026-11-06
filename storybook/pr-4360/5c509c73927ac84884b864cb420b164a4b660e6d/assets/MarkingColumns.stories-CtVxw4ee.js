import{f as p,j as e}from"./iframe-BXxdMdy7.js";import{O as i}from"./object-table-CNkhkpH_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CzdKpJOA.js";import"./Table-C2G7jwul.js";import"./index-BD4H0T12.js";import"./Dialog-DRHeSsTe.js";import"./cross-IC7VDHMx.js";import"./svgIconContainer-Cxa1Q93_.js";import"./useBaseUiId-CWV-_dal.js";import"./InternalBackdrop-DlV4ogxj.js";import"./composite-D8jBtBX-.js";import"./index-CHD8ML8j.js";import"./index-Bnop5Sxj.js";import"./index-C1UlsJzQ.js";import"./useEventCallback-B6HVMKXw.js";import"./SkeletonBar-wwZqpQeQ.js";import"./LoadingCell-D2ajqtvp.js";import"./ColumnConfigDialog-CPQQZ7e-.js";import"./DraggableList-DFo1VqJq.js";import"./search-BBZ4C5jZ.js";import"./Input-CqSjd8ip.js";import"./useControlled-BP-Dvf9O.js";import"./Button--SPNZNsz.js";import"./small-cross-D4fjM2kv.js";import"./ActionButton-ILi5qKYn.js";import"./Checkbox-92mH5DWz.js";import"./useValueChanged-CsAG0mUs.js";import"./CollapsiblePanel-DueIufvn.js";import"./MultiColumnSortDialog-lOlNrxYg.js";import"./MenuTrigger-6So7C7lu.js";import"./CompositeItem-DWha1o73.js";import"./ToolbarRootContext-CIB517xc.js";import"./getDisabledMountTransitionStyles-DvVBqQ0t.js";import"./getPseudoElementBounds-By8aQjXl.js";import"./chevron-down-CYALw_cH.js";import"./index-DS2LC4Xn.js";import"./error-xwnNQugq.js";import"./BaseCbacBanner-CdVh5FXB.js";import"./makeExternalStore-BdrikpT6.js";import"./Tooltip-BqajjhQu.js";import"./isObject-FTD3a_NI.js";import"./debounce-B5PrGahk.js";import"./useOsdkClient-9NpW0bp7.js";import"./tick-BiqOz0tA.js";import"./DropdownField-B_3SnluF.js";import"./isEqual-LLnZruSB.js";import"./_baseIsEqual-DfBqWpeE.js";import"./withOsdkMetrics-LqvHVeDk.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
