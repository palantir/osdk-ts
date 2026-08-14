import{f as p,j as e}from"./iframe-CRVmTQY5.js";import{O as i}from"./object-table-C-CPNALr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-COtteTaQ.js";import"./Table-DOs4kb3e.js";import"./index-Dw_-9fsS.js";import"./Dialog-AGuJ7asO.js";import"./cross-BTxRvC3_.js";import"./svgIconContainer-dBFN_To1.js";import"./useBaseUiId-D67cR8AP.js";import"./InternalBackdrop-CFo60NBG.js";import"./composite-BzmHlTbJ.js";import"./index-CQe3SKlh.js";import"./index-ASaPE2Ya.js";import"./index-BCE70X_-.js";import"./useEventCallback-DCb6bcgR.js";import"./SkeletonBar-BtVEI4Pu.js";import"./LoadingCell-be2SCVst.js";import"./ColumnConfigDialog-DiilIE8B.js";import"./DraggableList-fDNclTmJ.js";import"./search-DNHDuEbV.js";import"./Input-H1MlkSJg.js";import"./useControlled-BqiQYi-d.js";import"./Button-W6OP53wY.js";import"./small-cross-CHuR5Heg.js";import"./ActionButton-yYXJfxZv.js";import"./Checkbox-D7Fc3wdH.js";import"./useValueChanged-CvCQSXar.js";import"./CollapsiblePanel-BaG84gug.js";import"./MultiColumnSortDialog-CSyVQdsn.js";import"./MenuTrigger-C-FcvPeh.js";import"./CompositeItem-U_R9UZKK.js";import"./ToolbarRootContext-DwYXvC-Y.js";import"./getDisabledMountTransitionStyles-Bvrk1gjH.js";import"./getPseudoElementBounds-BT0xqbyg.js";import"./chevron-down-CNBvsY8h.js";import"./index-DlWFsW2l.js";import"./error-BhsW8xEv.js";import"./BaseCbacBanner-QzBezdS9.js";import"./makeExternalStore-CzFcgJvi.js";import"./Tooltip-C68sT4dG.js";import"./PopoverPopup-FpD1DxdK.js";import"./debounce-ypv0Ae7P.js";import"./useOsdkClient-ClCBM1r0.js";import"./tick-DIcVjwb8.js";import"./DropdownField-DyiAO7Yl.js";import"./isEqual-oWzSeSqP.js";import"./withOsdkMetrics-0XIdQxec.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
