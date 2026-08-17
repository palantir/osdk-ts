import{f as p,j as e}from"./iframe-pDATnlNX.js";import{O as i}from"./object-table-BwO3U7J8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFiVFcjH.js";import"./Table-CsRZ8IOO.js";import"./index-B3g0maqG.js";import"./Dialog-C0I0Smxk.js";import"./cross-CyB8xMH6.js";import"./svgIconContainer-CW38pZFN.js";import"./useBaseUiId-Osovmaps.js";import"./InternalBackdrop-Blh6DplG.js";import"./composite-DJFOYfnE.js";import"./index-d3doyVb1.js";import"./index-B-TtPd4_.js";import"./index-CNUAJb2V.js";import"./useEventCallback-CZoT1331.js";import"./SkeletonBar-Bo_-tLfL.js";import"./LoadingCell-DlNNKt69.js";import"./ColumnConfigDialog-BaoIOSGL.js";import"./DraggableList-CLhhuMgw.js";import"./search-hwnvbWDr.js";import"./Input-B8KO9TSx.js";import"./useControlled-DkbNe0Ap.js";import"./Button-C4VVgNFo.js";import"./small-cross-CROYu8vY.js";import"./ActionButton-Cxl4Bem1.js";import"./Checkbox-8RpHLLU-.js";import"./useValueChanged-CEyEgIan.js";import"./CollapsiblePanel-CWOmA3Wc.js";import"./MultiColumnSortDialog-BUwFjiDf.js";import"./MenuTrigger-CespSAr5.js";import"./CompositeItem-DltsrA7v.js";import"./ToolbarRootContext-DHRs-5dn.js";import"./getDisabledMountTransitionStyles-C5TjX-bS.js";import"./getPseudoElementBounds-CqDNtjH4.js";import"./chevron-down-CPNZFTe4.js";import"./index-C-XHcvWq.js";import"./error-LFZeSfYk.js";import"./BaseCbacBanner-5sFcTZir.js";import"./makeExternalStore-DikQbg4p.js";import"./Tooltip-DRlm9Gqr.js";import"./PopoverPopup-BNyXadHB.js";import"./debounce-B-rTr2vW.js";import"./useOsdkClient-CWzkYDXS.js";import"./tick-D4zgp0M0.js";import"./DropdownField-Z2tqFm85.js";import"./isEqual-BiaP3eag.js";import"./withOsdkMetrics-Dldtv88a.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
