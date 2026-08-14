import{f as p,j as e}from"./iframe-C9dvvK0s.js";import{O as i}from"./object-table-DaHHjOXS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-iV6YG4Aw.js";import"./Table-BLfd7O6r.js";import"./index-CCl1SyK9.js";import"./Dialog-0kQYGq6h.js";import"./cross-DoooZe2s.js";import"./svgIconContainer-DzOculqA.js";import"./useBaseUiId-Br_MFpl1.js";import"./InternalBackdrop-CY6nwryu.js";import"./composite-C5a4BBeY.js";import"./index-R2ywC05c.js";import"./index-CkMTtaTO.js";import"./index-BPDZ_eNv.js";import"./useEventCallback-nJzbHflb.js";import"./SkeletonBar-BMLWORuN.js";import"./LoadingCell-CoPu1qnX.js";import"./ColumnConfigDialog-468qWQtg.js";import"./DraggableList-Dr7qvY_0.js";import"./search-t3Hkw5qC.js";import"./Input-VMFQEfqY.js";import"./useControlled-N1u5Cna7.js";import"./Button-yjOlms4F.js";import"./small-cross-Ci6IDqJ5.js";import"./ActionButton-DTtodqv-.js";import"./Checkbox-Blnnfp9K.js";import"./useValueChanged-DmetHvwJ.js";import"./CollapsiblePanel-ND7ZCoK2.js";import"./MultiColumnSortDialog-ED6hIEfv.js";import"./MenuTrigger-eYIaD5Ue.js";import"./CompositeItem-Bcug-Hhc.js";import"./ToolbarRootContext-B-a5UJLi.js";import"./getDisabledMountTransitionStyles-Ozj0mzgv.js";import"./getPseudoElementBounds-Bdrnt6aT.js";import"./chevron-down-Cc5gCW9T.js";import"./index-DdkJNkIB.js";import"./error-QUoX6T23.js";import"./BaseCbacBanner-B4CqUt8g.js";import"./makeExternalStore-DRTRnKjE.js";import"./Tooltip-CZkWbmpg.js";import"./PopoverPopup-Cj3n7Ars.js";import"./debounce-Z8v5BBST.js";import"./useOsdkClient-Cyoc-pgH.js";import"./tick-B8uN_Iao.js";import"./DropdownField-DOA4KkgG.js";import"./isEqual-Cpll-d8H.js";import"./withOsdkMetrics-dCYtoeio.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
