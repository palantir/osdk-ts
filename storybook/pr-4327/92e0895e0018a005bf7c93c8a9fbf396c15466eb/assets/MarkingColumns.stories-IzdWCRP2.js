import{f as p,j as e}from"./iframe-BJUxpguS.js";import{O as i}from"./object-table-BoMBFXNC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CcPnSf_d.js";import"./Table-SjKZWein.js";import"./index-DaIWjini.js";import"./Dialog-BO-pnz8v.js";import"./cross-CF3gkRQt.js";import"./svgIconContainer-DFZK57uZ.js";import"./useBaseUiId-CUsRHIZ_.js";import"./InternalBackdrop-D_jiv0BX.js";import"./composite-fRasBjEb.js";import"./index-CRptwoO3.js";import"./index-CqveWGS6.js";import"./index-DM_u1KSh.js";import"./useEventCallback-BdXNRzTJ.js";import"./SkeletonBar-Dx6k6i1c.js";import"./LoadingCell-DF0g9G0l.js";import"./ColumnConfigDialog-BpGsYJSX.js";import"./DraggableList-C-XFZCOA.js";import"./search-82BfoOmm.js";import"./Input-JPeJu_Ok.js";import"./useControlled-CV2ikSFn.js";import"./Button-D6-FRmxX.js";import"./small-cross-EomOHUA5.js";import"./ActionButton-DgVSwbQq.js";import"./Checkbox-TQ-A7mqx.js";import"./useValueChanged-C99NUcrN.js";import"./CollapsiblePanel-CqwlYKwl.js";import"./MultiColumnSortDialog-fgaaPMWx.js";import"./MenuTrigger-BYN6WcMd.js";import"./CompositeItem-DC6J7O9B.js";import"./ToolbarRootContext-96Mx370G.js";import"./getDisabledMountTransitionStyles-oGlN2umk.js";import"./getPseudoElementBounds-DSYHNq3I.js";import"./chevron-down-D_Er5Djl.js";import"./index-DJciXKq6.js";import"./error-GeJDXztf.js";import"./BaseCbacBanner-Ccl4dO1s.js";import"./makeExternalStore-CsEdzCsV.js";import"./Tooltip-B80-nJEh.js";import"./PopoverPopup-BETux0X9.js";import"./debounce-BHhTV7Zm.js";import"./useOsdkClient-mJtFvI3C.js";import"./tick-DBILgLMj.js";import"./DropdownField-C6X6tb8E.js";import"./isEqual-BDUZntms.js";import"./withOsdkMetrics-CmE_vyV8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
