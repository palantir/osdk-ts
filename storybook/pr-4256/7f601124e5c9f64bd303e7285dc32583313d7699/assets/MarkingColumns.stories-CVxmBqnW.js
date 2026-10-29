import{f as p,j as e}from"./iframe-CrBTuD2p.js";import{O as i}from"./object-table-BDOsjl3H.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BjNyA4Tc.js";import"./Table-DfU-WPNC.js";import"./index-CFzUVYi2.js";import"./Dialog-38LaSVwr.js";import"./cross-BBINy6sP.js";import"./svgIconContainer-DW2driag.js";import"./useBaseUiId-BBTk7qb4.js";import"./InternalBackdrop-LpC4w9ZO.js";import"./composite-BeVo3QMW.js";import"./index-BqULJUvL.js";import"./index-Bnr4tUfA.js";import"./index-9tkhxWIX.js";import"./useEventCallback-BD2d3Tx5.js";import"./SkeletonBar-TDIAZEL9.js";import"./LoadingCell-Dir1o8pZ.js";import"./ColumnConfigDialog-bxqWbjfW.js";import"./DraggableList-CqZXz4K3.js";import"./search-BDp0U2-N.js";import"./Input-7YuL0Mnz.js";import"./useControlled-D0EXlvvG.js";import"./Button-6cIUTGc1.js";import"./small-cross-5byDOqd6.js";import"./ActionButton-p2_uRokn.js";import"./Checkbox-X3n0Oiil.js";import"./useValueChanged-DxaEZlR0.js";import"./CollapsiblePanel-CWFpKLhQ.js";import"./MultiColumnSortDialog-C8s-Ldtr.js";import"./MenuTrigger-BkWLeJuv.js";import"./CompositeItem-BE6iDbTy.js";import"./ToolbarRootContext-BXCYOJCq.js";import"./getDisabledMountTransitionStyles-mgoiWsTQ.js";import"./getPseudoElementBounds-C9gmy0te.js";import"./chevron-down-BqX1E0HN.js";import"./index-CEtkH-ta.js";import"./error-D-C4TtvX.js";import"./BaseCbacBanner-BEXvhDBn.js";import"./makeExternalStore-Dq8QV5--.js";import"./Tooltip-BgSVMYpF.js";import"./PopoverPopup-Bg_xMHlt.js";import"./debounce-B2lGFotZ.js";import"./useOsdkClient-26AsuYNX.js";import"./tick-BM2LaoTy.js";import"./DropdownField-Qm8Rb_9y.js";import"./isEqual-Be5mRTEV.js";import"./withOsdkMetrics-BvGvy0SD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
