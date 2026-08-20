import{f as p,j as e}from"./iframe-D5rHaRYI.js";import{O as i}from"./object-table-D6o8iS4P.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gGgdcVSI.js";import"./Table-BmW-MXkH.js";import"./index-ue2T5dve.js";import"./Dialog-D5rWxqCJ.js";import"./cross-tQgaE3wF.js";import"./svgIconContainer-BdHsWNaY.js";import"./useBaseUiId-BazUPCkp.js";import"./InternalBackdrop-CE-So33P.js";import"./composite-D7Nu2T_E.js";import"./index-AIpwznod.js";import"./index-DfxgWUtW.js";import"./index-DnYB0A4y.js";import"./useEventCallback-CiPjA_gS.js";import"./SkeletonBar-CjG6OaBt.js";import"./LoadingCell-Bw8gQhPx.js";import"./ColumnConfigDialog-B4Ki-hr0.js";import"./DraggableList-D68QyVqL.js";import"./search-BwM1R0ZS.js";import"./Input-Dlx4X-uM.js";import"./useControlled-B8vB9SF0.js";import"./Button-CIrXEDiW.js";import"./small-cross-Ddvwp2ZN.js";import"./ActionButton-CzNhuO_z.js";import"./Checkbox-CA1k2VZo.js";import"./useValueChanged-CoYa5TxM.js";import"./CollapsiblePanel-4SI1lhlK.js";import"./MultiColumnSortDialog-BrFsZdDA.js";import"./MenuTrigger-Bn989o8m.js";import"./CompositeItem-RLNz4WVT.js";import"./ToolbarRootContext-D4BSaJiN.js";import"./getDisabledMountTransitionStyles-DAQHPmPU.js";import"./getPseudoElementBounds-CaseLu2O.js";import"./chevron-down-k1GVYLCT.js";import"./index-CvK2Swrc.js";import"./error-CSPAQ9Pw.js";import"./BaseCbacBanner-HGQI-gli.js";import"./makeExternalStore-D6mpUf8a.js";import"./Tooltip-P7YTeqYd.js";import"./PopoverPopup-BFmgaf30.js";import"./debounce-D6uuEO4U.js";import"./useOsdkClient-BEH1fdfR.js";import"./tick-DzQoXvq2.js";import"./DropdownField-CcLvyEmm.js";import"./isEqual-DtAnoOPo.js";import"./withOsdkMetrics-Dw564kRS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
