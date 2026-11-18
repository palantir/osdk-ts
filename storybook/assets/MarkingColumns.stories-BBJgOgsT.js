import{f as p,j as e}from"./iframe-A3cFOKcN.js";import{O as i}from"./object-table-D6T5wWQI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CxGinnZh.js";import"./index-BdisvGQs.js";import"./Dialog-IrmETrAM.js";import"./cross-BpCzBhcu.js";import"./svgIconContainer-Cx_x83Vw.js";import"./useBaseUiId-f8SNshup.js";import"./InternalBackdrop-CLQ76qla.js";import"./composite-CO4egJyo.js";import"./index-iwijohJb.js";import"./index-DC_i6GYR.js";import"./index-CwbCFpmW.js";import"./useEventCallback-DcGGf58T.js";import"./SkeletonBar-CFR5RV76.js";import"./LoadingCell-B-isKo1Q.js";import"./ColumnConfigDialog-C_I9U-JL.js";import"./DraggableList-eFQXa4c_.js";import"./search-CjzZlMWT.js";import"./Input-D8Sxy-AW.js";import"./useControlled-lPa7KKsj.js";import"./Button-BioOQfQu.js";import"./small-cross-E1MTPWPe.js";import"./ActionButton-D1a6Sq8f.js";import"./Checkbox-4H9IL8Qq.js";import"./useValueChanged-BSJmwQff.js";import"./CollapsiblePanel-kcqrPygQ.js";import"./MultiColumnSortDialog-D8ycB0c4.js";import"./MenuTrigger-tCW2Oivw.js";import"./CompositeItem-Brp6gpS6.js";import"./ToolbarRootContext-iK84Y3hB.js";import"./getDisabledMountTransitionStyles-CrBoc_TZ.js";import"./getPseudoElementBounds-DaGoMVcW.js";import"./chevron-down-BNVc1UKn.js";import"./index-C28TVULp.js";import"./error-oGpxxWLn.js";import"./BaseCbacBanner-BlxyISp5.js";import"./makeExternalStore-1BwNCmLf.js";import"./Tooltip-CdI3maSw.js";import"./PopoverPopup-DVMbRx4R.js";import"./Select-DHseJ8-J.js";import"./useOsdkClient-BpfPkxQE.js";import"./tick-DnihwVHh.js";import"./DropdownField-D-Vqq6xe.js";import"./useDebouncedCallback-BP589r5j.js";import"./isEqual-DQ5slpiQ.js";import"./_baseIsEqual-BLEcImby.js";import"./stableSerialize-Ck0v-oQz.js";import"./withOsdkMetrics-BHdLGHRT.js";const ar={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ar as default};
