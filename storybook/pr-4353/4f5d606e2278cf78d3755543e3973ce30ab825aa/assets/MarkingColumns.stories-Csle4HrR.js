import{f as p,j as e}from"./iframe-DpQxl-G6.js";import{O as i}from"./object-table-BroIEPvU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-mRXziM39.js";import"./Table-Bpr2S1M2.js";import"./index-Cujp3sVp.js";import"./Dialog-BAHkjLoo.js";import"./cross-dB1xiAz0.js";import"./svgIconContainer-DamXBWaI.js";import"./useBaseUiId-Cl9-toeq.js";import"./InternalBackdrop-UGKYLNqj.js";import"./composite-wCOpmCUF.js";import"./index-CrIwRE1J.js";import"./index-BGKSJQgI.js";import"./index-LqhCF_-F.js";import"./useEventCallback-7bghjhj3.js";import"./SkeletonBar-BlfHbAVT.js";import"./LoadingCell-Cebj5wsq.js";import"./ColumnConfigDialog-CqwuMV7d.js";import"./DraggableList-CcpFjV0I.js";import"./search-n4OQKLJh.js";import"./Input-D2U-2W4H.js";import"./useControlled-TG9q_V2m.js";import"./Button-BpP7RQEd.js";import"./small-cross-C1Iw8DgY.js";import"./ActionButton-fbLg4xtm.js";import"./Checkbox-uYPQv9Df.js";import"./useValueChanged-CwTmp6si.js";import"./CollapsiblePanel-CWN4zyln.js";import"./MultiColumnSortDialog-CTML89JK.js";import"./MenuTrigger-B_XNeRPS.js";import"./CompositeItem-DSQrNM-7.js";import"./ToolbarRootContext-D4KBNeKS.js";import"./getDisabledMountTransitionStyles-BUxjZvDR.js";import"./getPseudoElementBounds-11Yqxgjp.js";import"./chevron-down-D-RM0tZ4.js";import"./index-DttXp8FH.js";import"./error-DzvIefMA.js";import"./BaseCbacBanner-BPjZ85cS.js";import"./makeExternalStore-BUiRNREx.js";import"./Tooltip-DE5PnA7D.js";import"./PopoverPopup-DzI_buys.js";import"./debounce-CJywBWC4.js";import"./useOsdkClient-0Dxy99AS.js";import"./tick-bXhfM5-a.js";import"./DropdownField-BRSWnnTy.js";import"./isEqual-DHjK3ILE.js";import"./withOsdkMetrics-C9oeFlqw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
