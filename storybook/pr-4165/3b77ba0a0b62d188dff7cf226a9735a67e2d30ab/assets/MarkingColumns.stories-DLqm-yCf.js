import{f as p,j as e}from"./iframe-DX49BiZ-.js";import{O as i}from"./object-table-DrKTDrO6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9LHBCYVI.js";import"./Table-CZuWcrXt.js";import"./index-DxuHGCjB.js";import"./Dialog-C-cL_0Cq.js";import"./cross-CauetHLv.js";import"./svgIconContainer-B548BSI_.js";import"./useBaseUiId-DI7HJ1sZ.js";import"./InternalBackdrop-arkfzs0p.js";import"./composite-BTvCmLum.js";import"./index-Ygr_7AWn.js";import"./index-C4WszJy1.js";import"./index-Bdq2wKWL.js";import"./useEventCallback-GV-Pgizz.js";import"./SkeletonBar-MYvuqKYn.js";import"./LoadingCell-BYFPeWHn.js";import"./ColumnConfigDialog-DUpqOCt6.js";import"./DraggableList-CW6BC225.js";import"./search-D15_q6tD.js";import"./Input-BQDPJQM6.js";import"./useControlled-C31TKFPE.js";import"./Button-RYY6ZBF7.js";import"./small-cross-DOgxSwsw.js";import"./ActionButton-fCGjoV2h.js";import"./Checkbox-C5arZxQh.js";import"./useValueChanged-oS_NGm3B.js";import"./CollapsiblePanel-CofaTKq1.js";import"./MultiColumnSortDialog-CiE6ARBo.js";import"./MenuTrigger-slTfosOo.js";import"./CompositeItem-1DFf-U3D.js";import"./ToolbarRootContext-BkXM-WhV.js";import"./getDisabledMountTransitionStyles-DM4O4Z57.js";import"./getPseudoElementBounds-Dk11viJV.js";import"./chevron-down-CPeorV8q.js";import"./index-DxqztkoM.js";import"./error-DKDHu63B.js";import"./BaseCbacBanner-D1_WKzx0.js";import"./makeExternalStore-Ckt0eied.js";import"./Tooltip-CokKdHnx.js";import"./PopoverPopup-CcyqtV2P.js";import"./debounce-Bmue7bGU.js";import"./useOsdkClient-DE7ajC3A.js";import"./tick-kBh_PFVS.js";import"./DropdownField-iEi1_u7m.js";import"./isEqual-DQRNTvNf.js";import"./withOsdkMetrics-DxWj1HC0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
