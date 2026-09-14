import{f as p,j as e}from"./iframe-B5oWllHx.js";import{O as i}from"./object-table-B05mEt7M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AL0pxeKM.js";import"./Table-Bu8O3QIa.js";import"./index-E8TGJhq9.js";import"./Dialog-BOG2Z9MM.js";import"./cross-D0UFXm2L.js";import"./svgIconContainer-DmiPRoPR.js";import"./useBaseUiId-B80HrYnI.js";import"./InternalBackdrop-DKUVP1zM.js";import"./composite-CxNKGIFj.js";import"./index-DpBh8txy.js";import"./index-1oTvxXM7.js";import"./index-jVYij_3i.js";import"./useEventCallback-DSNFNTa2.js";import"./SkeletonBar-BNUNe2WU.js";import"./LoadingCell-BEklDdAr.js";import"./ColumnConfigDialog-Qb7pdXIY.js";import"./DraggableList-mKUTAiS3.js";import"./search-CweXIS3_.js";import"./Input-CHGFhXTJ.js";import"./useControlled-C1shr7sK.js";import"./Button-DESnIp7_.js";import"./small-cross-BVwuTZcs.js";import"./ActionButton-CdO9nLoY.js";import"./Checkbox-zZ0CLjot.js";import"./useValueChanged-DRZa34Nq.js";import"./CollapsiblePanel-CZdxwGFg.js";import"./MultiColumnSortDialog-Bq1IcXrp.js";import"./MenuTrigger-BWSxRSdS.js";import"./CompositeItem-CBT7H_tD.js";import"./ToolbarRootContext-CY1iwJN5.js";import"./getDisabledMountTransitionStyles-v16MeVM9.js";import"./getPseudoElementBounds-CYSv1bOf.js";import"./chevron-down-843gHNxT.js";import"./index-DKR3YkoY.js";import"./error-FAfGOJk1.js";import"./BaseCbacBanner-D2yf72Cs.js";import"./makeExternalStore-4UJfUQkh.js";import"./Tooltip-DRnqt9Qa.js";import"./PopoverPopup-DZrQF8FG.js";import"./debounce-D3faGUE7.js";import"./useOsdkClient-BfV2im4Z.js";import"./tick-B3M0MzLY.js";import"./DropdownField-emaGDLLt.js";import"./isEqual-BV--_VPI.js";import"./withOsdkMetrics-Ct5oqpuP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
