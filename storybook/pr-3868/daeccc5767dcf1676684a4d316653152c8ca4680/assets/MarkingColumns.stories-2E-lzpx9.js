import{f as p,j as e}from"./iframe-BWtbK-6e.js";import{O as i}from"./object-table-BeG3Fp0X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-SpX73X.js";import"./Table-DZGatbGL.js";import"./index-BJRZeoAy.js";import"./Dialog-BEPd95YN.js";import"./cross-BbOW2-LY.js";import"./svgIconContainer-tYWwIhLy.js";import"./useBaseUiId-p9hIi61X.js";import"./InternalBackdrop-BzojnLK2.js";import"./composite-O3B6JlFs.js";import"./index-DiSQQItY.js";import"./index-D3iqlyMR.js";import"./index-DHGG6V2S.js";import"./useEventCallback-DddqoMx1.js";import"./SkeletonBar-kaCc09Tm.js";import"./LoadingCell-ShKZoh7z.js";import"./ColumnConfigDialog-DQraDrLD.js";import"./DraggableList-BuwDh5HR.js";import"./search-BR8rsC3q.js";import"./Input-BPHe4LBr.js";import"./useControlled-C9p9N_86.js";import"./Button-B0i6dGlw.js";import"./small-cross-DWeilFPO.js";import"./ActionButton-BnuYZXjr.js";import"./Checkbox-CoRA8Ex9.js";import"./useValueChanged-CJvIonTN.js";import"./CollapsiblePanel-DtJGVwEB.js";import"./MultiColumnSortDialog-BeLdjw16.js";import"./MenuTrigger-Bbwd1Fl8.js";import"./CompositeItem-14mpYRhD.js";import"./ToolbarRootContext-DLdfgRBt.js";import"./getDisabledMountTransitionStyles-CFautW_r.js";import"./getPseudoElementBounds-B_KVOqfv.js";import"./chevron-down-D1Mpjl8C.js";import"./index-CDa_2TTR.js";import"./error-kr-jwrPU.js";import"./BaseCbacBanner-CTh-qVwr.js";import"./makeExternalStore-1AVtHYwG.js";import"./Tooltip-BUTgCb4R.js";import"./PopoverPopup-Cxt_nQB5.js";import"./debounce-BB2MUM9s.js";import"./useOsdkClient-BiSLEIke.js";import"./tick-IhvTufAd.js";import"./DropdownField-vBIsoJCc.js";import"./isEqual-BRdqoqrQ.js";import"./withOsdkMetrics-DQ89NQ44.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
