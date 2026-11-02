import{f as p,j as e}from"./iframe-DpkDs-j9.js";import{O as i}from"./object-table-qHXZVdv7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJT4uFVz.js";import"./Table-M8rJDnV8.js";import"./index-BfXl5P7F.js";import"./Dialog-CFkLUvdo.js";import"./cross-CySzb61z.js";import"./svgIconContainer-0YWxOZfe.js";import"./useBaseUiId-BRApLhFH.js";import"./InternalBackdrop-DC1ctXr5.js";import"./composite-CYXI2UHT.js";import"./index-CXFl5eQh.js";import"./index-g8PO-kx8.js";import"./index-NMIlAdCq.js";import"./useEventCallback-BPE_ThAx.js";import"./SkeletonBar-CxtJcPP9.js";import"./LoadingCell-DaxbBC-P.js";import"./ColumnConfigDialog-Ca3Me8kg.js";import"./DraggableList-Bt-2hyGV.js";import"./search-9Dh1YH6c.js";import"./Input-xEESwrVF.js";import"./useControlled-Z-gfVngv.js";import"./Button-DUyzdMzu.js";import"./small-cross-TQik36_V.js";import"./ActionButton-CMt3pcys.js";import"./Checkbox-ClD25Fhc.js";import"./useValueChanged-HHJBGoHs.js";import"./CollapsiblePanel-DEhHFVMb.js";import"./MultiColumnSortDialog-m5T-8CWC.js";import"./MenuTrigger-BwLriEBa.js";import"./CompositeItem-BWOALM-p.js";import"./ToolbarRootContext-BtylWzdM.js";import"./getDisabledMountTransitionStyles-CXfJ9VyR.js";import"./getPseudoElementBounds-BrH_UC6z.js";import"./chevron-down-_hw012xs.js";import"./index-tOaH1qey.js";import"./error-CJpmyc4X.js";import"./BaseCbacBanner-DrLRu2Wj.js";import"./makeExternalStore-DVFvu1DO.js";import"./Tooltip-D5NnoavJ.js";import"./PopoverPopup-4S9R5K2E.js";import"./debounce-D7fYvY9R.js";import"./useOsdkClient-CQh8Mqca.js";import"./tick-BPyaXYcz.js";import"./DropdownField-DHNplSVP.js";import"./isEqual-BF2u6U9o.js";import"./withOsdkMetrics-D7yY5fd-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
