import{f as p,j as e}from"./iframe-Dw2PjeaI.js";import{O as i}from"./object-table-BoFh6vVh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJaT6ZDB.js";import"./Table-CdXn9lIp.js";import"./index-0M7994Y_.js";import"./Dialog-DLQ1SkNP.js";import"./cross-CLda9Fo1.js";import"./svgIconContainer-CeXRiZtW.js";import"./useBaseUiId-0TtGgIAG.js";import"./InternalBackdrop-DJ2aMJ5Y.js";import"./composite-DWecAK_E.js";import"./index-BPb9j9HY.js";import"./index-CGb9o7qe.js";import"./index-COYYs5y4.js";import"./useEventCallback-CctUb2O0.js";import"./SkeletonBar-PF5whjmA.js";import"./LoadingCell-Cu18aVq6.js";import"./ColumnConfigDialog-D_kDucuk.js";import"./DraggableList-BEUABJjc.js";import"./search-ClBN3Er-.js";import"./Input-DbWveyeA.js";import"./useControlled-Cz_GJLGD.js";import"./Button-DVN9BG7e.js";import"./small-cross-DnafLtCp.js";import"./ActionButton-BioyY_id.js";import"./Checkbox-CZdSeNLj.js";import"./useValueChanged-B-pgRub2.js";import"./CollapsiblePanel-CK9cXofW.js";import"./MultiColumnSortDialog-IUz5Mdml.js";import"./MenuTrigger-Bh8vjRh6.js";import"./CompositeItem-CeRclahQ.js";import"./ToolbarRootContext-DgoSljlg.js";import"./getDisabledMountTransitionStyles-Cttf6bUS.js";import"./getPseudoElementBounds-C3FmlhF8.js";import"./chevron-down-C1e4s47j.js";import"./index-B5gfVMUt.js";import"./error-DeMrwFkF.js";import"./BaseCbacBanner-Df5GPEYT.js";import"./makeExternalStore-DXns2UQ6.js";import"./Tooltip-CAM98dk7.js";import"./PopoverPopup-Dg_qhS7v.js";import"./debounce-B2VXBB9P.js";import"./useOsdkClient-C1y4H3RM.js";import"./tick-vpRHL3-c.js";import"./DropdownField-pycu6fvL.js";import"./isEqual-CQnWIsqc.js";import"./withOsdkMetrics-C5Psz1d4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
