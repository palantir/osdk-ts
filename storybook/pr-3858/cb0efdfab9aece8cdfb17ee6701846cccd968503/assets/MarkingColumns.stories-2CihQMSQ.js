import{f as p,j as e}from"./iframe-Ct_LTQ93.js";import{O as i}from"./object-table-BjpLJk-N.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DHNJcgM4.js";import"./Table-BUnG-MNj.js";import"./index-CjWY7hqr.js";import"./Dialog-CEaWvMaV.js";import"./cross-BMcPCyGb.js";import"./svgIconContainer-D_GmqO65.js";import"./useBaseUiId-BDRI1jLy.js";import"./InternalBackdrop-BSWQCnA5.js";import"./composite-APUMWHCt.js";import"./index-mm_jw7Xo.js";import"./index-9R-_TKRE.js";import"./index-kI2DKCg6.js";import"./useEventCallback-C35WzWzm.js";import"./SkeletonBar-CP1CBn37.js";import"./LoadingCell-BKc_rCRP.js";import"./ColumnConfigDialog-DQiVRSY-.js";import"./DraggableList-BaNTueOA.js";import"./search-CNF4ePSc.js";import"./Input-BZ7vEK6X.js";import"./useControlled-BcWumCfO.js";import"./Button-BbozFPaz.js";import"./small-cross-C7igDgRw.js";import"./ActionButton-B0vdmru0.js";import"./Checkbox-Da4cP95T.js";import"./useValueChanged-DSn7N3P8.js";import"./CollapsiblePanel-CDP6sO-o.js";import"./MultiColumnSortDialog-nOaBMayw.js";import"./MenuTrigger-BGg02pB-.js";import"./CompositeItem-BWQS8Cwe.js";import"./ToolbarRootContext-CUntK8-H.js";import"./getDisabledMountTransitionStyles-lPIcIbkl.js";import"./getPseudoElementBounds-gA8sF9Xl.js";import"./chevron-down-BRMAFES-.js";import"./index-BEQyGiD3.js";import"./error-BEzuwBxE.js";import"./BaseCbacBanner-CPqW-ZZQ.js";import"./makeExternalStore-DCOlRUS1.js";import"./Tooltip-CI3Mtqz5.js";import"./PopoverPopup-C5_b-GPn.js";import"./debounce-CqGuf8Za.js";import"./useOsdkClient-D0JiDnls.js";import"./tick-CV01Z0Xq.js";import"./DropdownField-CvbC-XSP.js";import"./isEqual-Bk4NXlAm.js";import"./withOsdkMetrics-BxODEj1w.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
