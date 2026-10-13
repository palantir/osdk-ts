import{f as p,j as e}from"./iframe-BLF6zRqG.js";import{O as i}from"./object-table-C0cdKhB3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDaxV4R2.js";import"./Table-CeE5JrDd.js";import"./index-BLFrbzvg.js";import"./Dialog-n73yCmVX.js";import"./cross-BA9FjJ9G.js";import"./svgIconContainer-B1hh76l8.js";import"./useBaseUiId-Zjs0lNV0.js";import"./InternalBackdrop-CyIeJrcr.js";import"./composite-CcKV35Kr.js";import"./index-CLYhFphF.js";import"./index-ByFfno_8.js";import"./index-Bl_HIsRn.js";import"./useEventCallback-DH0i-Vx2.js";import"./SkeletonBar-C1CYbmJA.js";import"./LoadingCell-Cm0bxSxn.js";import"./ColumnConfigDialog-BTqcioDF.js";import"./DraggableList-CsjHVdfB.js";import"./search-9jU6Q1us.js";import"./Input-CCDmeNBI.js";import"./useControlled-CoQlBX4R.js";import"./Button-9qWiKKY-.js";import"./small-cross-BqECmGEj.js";import"./ActionButton-DbZE13mN.js";import"./Checkbox-Bu0FH9eh.js";import"./useValueChanged-BKw1I0EK.js";import"./CollapsiblePanel-Dda8YuQy.js";import"./MultiColumnSortDialog-C9HqTSZt.js";import"./MenuTrigger-XxylOScL.js";import"./CompositeItem-DtwY3yqS.js";import"./ToolbarRootContext-2-p_DBQP.js";import"./getDisabledMountTransitionStyles-ARetRnAA.js";import"./getPseudoElementBounds-4DmUh_rK.js";import"./chevron-down-D3B34KT6.js";import"./index-ccXt1NIS.js";import"./error-CBG8l0PN.js";import"./BaseCbacBanner-Bxx3iju9.js";import"./makeExternalStore-GX9DdVy4.js";import"./Tooltip-8Jei4W6Q.js";import"./PopoverPopup-B7UZBa1s.js";import"./debounce-B91OJyBP.js";import"./useOsdkClient-1axdfMxV.js";import"./tick-28tjcfUj.js";import"./DropdownField-D-l1iVFe.js";import"./isEqual-DXHdtgab.js";import"./withOsdkMetrics-CRvkKsTN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
