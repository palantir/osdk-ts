import{f as p,j as e}from"./iframe-BHS5QR3O.js";import{O as i}from"./object-table-Cvrzj8fP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B6H2Wl85.js";import"./Table-BDJ4x66s.js";import"./index-CH7AKy7m.js";import"./Dialog-wENiLeEQ.js";import"./cross-Mi6Tu3Er.js";import"./svgIconContainer-ByRaFEc-.js";import"./useBaseUiId-CEIcjkwP.js";import"./InternalBackdrop-7oHYmudj.js";import"./composite-BnqLBLhy.js";import"./index-BdTUVSMf.js";import"./index-DBgZeADq.js";import"./index-BnZ04Iwl.js";import"./useEventCallback-CB1YPgva.js";import"./SkeletonBar-BMo0RH1C.js";import"./LoadingCell-5FzEYM_J.js";import"./ColumnConfigDialog-CNeCC88S.js";import"./DraggableList-xSBVFf99.js";import"./search-Cocmm-uk.js";import"./Input-Bi2WpDJH.js";import"./useControlled-C-rES6CU.js";import"./Button-B_4Pa7GX.js";import"./small-cross-CJe3aCZN.js";import"./ActionButton-6_o3cOTE.js";import"./Checkbox-BbFETg2J.js";import"./useValueChanged-BcjxKkFq.js";import"./CollapsiblePanel-PYwkqFiV.js";import"./MultiColumnSortDialog-Db4Us-lU.js";import"./MenuTrigger-6R4hruBY.js";import"./CompositeItem-Bo2SIyrT.js";import"./ToolbarRootContext-lCFihwdU.js";import"./getDisabledMountTransitionStyles-DcIeUQNN.js";import"./getPseudoElementBounds-B8DlXmSD.js";import"./chevron-down-pY5pxMvg.js";import"./index-AnCCDamT.js";import"./error-BGQaSzzV.js";import"./BaseCbacBanner-DKquDkZs.js";import"./makeExternalStore-ByWm5-Ku.js";import"./Tooltip-CRgmKc4d.js";import"./PopoverPopup-Dx7_6wqW.js";import"./debounce-DyCRQAnF.js";import"./useOsdkClient-DsttTZje.js";import"./tick-Bt8cnFFd.js";import"./DropdownField-D43erCwJ.js";import"./isEqual-BE06Fp2_.js";import"./withOsdkMetrics-BuisztQB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
