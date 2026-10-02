import{f as p,j as e}from"./iframe-826Gs96o.js";import{O as i}from"./object-table-Thljzijj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dy1PefeT.js";import"./Table-DCXP7kJp.js";import"./index-DxFbtAl2.js";import"./Dialog-BlwK3Qsn.js";import"./cross-CGVnPFvE.js";import"./svgIconContainer-C9llsudM.js";import"./useBaseUiId-Dg5t7t_V.js";import"./InternalBackdrop-xUOOm_9M.js";import"./composite-CfFzeQqA.js";import"./index-CjQrbWNq.js";import"./index-DuT9KNdT.js";import"./index-Bs21FMkz.js";import"./useEventCallback-BJHP1M_f.js";import"./SkeletonBar-B0AWztU4.js";import"./LoadingCell-B_nwXWP8.js";import"./ColumnConfigDialog-B9ixCZfi.js";import"./DraggableList-s-AQ20Te.js";import"./search-BZHAnhvn.js";import"./Input-DI6TXQQJ.js";import"./useControlled-BpCUWNpJ.js";import"./Button-DNoJUNAB.js";import"./small-cross-C8UmW7Hs.js";import"./ActionButton-DDJP6dlY.js";import"./Checkbox-I9jrKPP8.js";import"./useValueChanged-DENmBLV7.js";import"./CollapsiblePanel-DuQd7Yzu.js";import"./MultiColumnSortDialog-D0tYMKqS.js";import"./MenuTrigger-gSFbsB9W.js";import"./CompositeItem-CcW3IcXa.js";import"./ToolbarRootContext-CHa8QnRi.js";import"./getDisabledMountTransitionStyles-DGBLiCd8.js";import"./getPseudoElementBounds-K8yHl1as.js";import"./chevron-down-DTD0XUuq.js";import"./index-BpqO_0Z6.js";import"./error-BRJ8RgcR.js";import"./BaseCbacBanner-BD75tGsg.js";import"./makeExternalStore-vPmU5su8.js";import"./Tooltip-1a4YvbvY.js";import"./PopoverPopup-CAuY5cHw.js";import"./debounce-R32f75fq.js";import"./useOsdkClient-CAEYuMrw.js";import"./tick-Cz6w76NV.js";import"./DropdownField-D4QNZQ_M.js";import"./isEqual-nMBzRr3Z.js";import"./withOsdkMetrics-BKsd8iS7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
