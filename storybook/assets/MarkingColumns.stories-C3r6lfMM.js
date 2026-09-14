import{f as p,j as e}from"./iframe-8JOFoP6w.js";import{O as i}from"./object-table-Bpoz7acy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-De2QC20j.js";import"./index-DVXlafOG.js";import"./Dialog-CgZPGdtx.js";import"./cross-Ba_aocLO.js";import"./svgIconContainer-Bc52btQW.js";import"./useBaseUiId-DJOFV3yl.js";import"./InternalBackdrop-BC0u02pm.js";import"./composite-Dacbrp7D.js";import"./index-DABUx9II.js";import"./index-DIPLjPoi.js";import"./index-DydTQsmK.js";import"./useEventCallback-RYf_Rpw0.js";import"./SkeletonBar-DviTtz4R.js";import"./LoadingCell-BjoaI82Y.js";import"./ColumnConfigDialog-KJ4u-4ae.js";import"./DraggableList-BL0RmeUx.js";import"./search-ld6lzdhI.js";import"./Input-B80vLCMJ.js";import"./useControlled-EfqR38x7.js";import"./Button-BowFr5Gg.js";import"./small-cross-_0ChGPYI.js";import"./ActionButton-BBgXQWJV.js";import"./Checkbox-DKwxEkJA.js";import"./useValueChanged-6-LufgCy.js";import"./CollapsiblePanel-B36mIUJ8.js";import"./MultiColumnSortDialog-DXtYuqFl.js";import"./MenuTrigger-Cnbw05Jv.js";import"./CompositeItem-DOhO0oM7.js";import"./ToolbarRootContext-5xRdL1EJ.js";import"./getDisabledMountTransitionStyles-OPbP8IPW.js";import"./getPseudoElementBounds-CjsOipTW.js";import"./chevron-down-dUDP5SOr.js";import"./index-DTTaRHwW.js";import"./error-BLfUwIjQ.js";import"./BaseCbacBanner-ZBYP9bYo.js";import"./makeExternalStore-ZHAkzHUN.js";import"./Tooltip-o0yaOQGv.js";import"./PopoverPopup-fb6R-GhK.js";import"./debounce-CYBn2EID.js";import"./useOsdkClient-D2545i5_.js";import"./tick-C65V9PGT.js";import"./DropdownField-BGIt2m0K.js";import"./isEqual-CdgPAtY7.js";import"./withOsdkMetrics-DErVVM0k.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
