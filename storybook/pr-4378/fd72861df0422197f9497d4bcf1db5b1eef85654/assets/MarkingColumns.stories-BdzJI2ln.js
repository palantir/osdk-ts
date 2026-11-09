import{f as p,j as e}from"./iframe-3OlCtOnX.js";import{O as i}from"./object-table-BvyHghk7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DmXfM5jO.js";import"./Table-WM1LRRuU.js";import"./index-yHmphh38.js";import"./Dialog-BnYZSNWW.js";import"./cross-BDST6L4k.js";import"./svgIconContainer-BDwLYbew.js";import"./useBaseUiId-DF4e_SYr.js";import"./InternalBackdrop-DdQOJpo0.js";import"./composite-U0WuYJlx.js";import"./index-BIyck5Eo.js";import"./index-Dkb2coF2.js";import"./index-ByPauzBu.js";import"./useEventCallback-D7je9L3S.js";import"./SkeletonBar-BXcGfT3d.js";import"./LoadingCell-BG8BLS5r.js";import"./ColumnConfigDialog-Chy4GVeW.js";import"./DraggableList-CVZrPSkM.js";import"./search-DDk_kDx9.js";import"./Input-Du0sMknh.js";import"./useControlled-D4KKpMBk.js";import"./Button-DvYWHdUE.js";import"./small-cross-Q6V4ucxv.js";import"./ActionButton-X9C3Amb_.js";import"./Checkbox-CFLZGIxk.js";import"./useValueChanged-BmFaeCuB.js";import"./CollapsiblePanel-Cq5Vusdc.js";import"./MultiColumnSortDialog-B613juMG.js";import"./MenuTrigger-BwhUQFuO.js";import"./CompositeItem-CpBBjcG8.js";import"./ToolbarRootContext-DhJDeVBv.js";import"./getDisabledMountTransitionStyles-BR9XCEFs.js";import"./getPseudoElementBounds-BX9nOk-V.js";import"./chevron-down-CgI6LlJc.js";import"./index-DLQ0415V.js";import"./error-CWwoWVCq.js";import"./BaseCbacBanner-C08fTxVd.js";import"./makeExternalStore-C_bh9nYT.js";import"./Tooltip-BN6uj7yR.js";import"./isObject-UhbsXXcU.js";import"./debounce-ger8MaPs.js";import"./useOsdkClient--TOQCL4r.js";import"./tick-JCXFlbLf.js";import"./DropdownField-BIODsSJB.js";import"./isEqual-CtwCO3Wt.js";import"./_baseIsEqual-Cx8-OPaz.js";import"./withOsdkMetrics-CFm1sTgg.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
