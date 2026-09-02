import{f as p,j as e}from"./iframe-B26-UX9b.js";import{O as i}from"./object-table-C9x2l5v3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qgH9prhH.js";import"./Table-DOMvSBP6.js";import"./index-gSzx-VKs.js";import"./Dialog-BBrF0zw7.js";import"./cross-4Wy1lzRG.js";import"./svgIconContainer-CNIysoPo.js";import"./useBaseUiId-BNFolbRL.js";import"./InternalBackdrop-6deiMnyZ.js";import"./composite-B5QPNFwO.js";import"./index-CvJGlMcY.js";import"./index-BdbeSUQe.js";import"./index-DrTJqFym.js";import"./useEventCallback-D-uUzVqw.js";import"./SkeletonBar-Df1XYI_J.js";import"./LoadingCell-CukOSP_9.js";import"./ColumnConfigDialog-C_xAQ7Wv.js";import"./DraggableList-DfKsY10n.js";import"./search-fQO_n2xV.js";import"./Input-SuAL17yL.js";import"./useControlled-BHqUi1Rr.js";import"./Button-BAa0NYG4.js";import"./small-cross-DiC_XmxI.js";import"./ActionButton-CZ5v5Gbt.js";import"./Checkbox-CO5YM7xz.js";import"./useValueChanged-IRSXffCV.js";import"./CollapsiblePanel-Cyh9zt9a.js";import"./MultiColumnSortDialog-CLlsXUoZ.js";import"./MenuTrigger-Brp4P9tg.js";import"./CompositeItem-CL1dJO-b.js";import"./ToolbarRootContext-Dav0NKZT.js";import"./getDisabledMountTransitionStyles-BqJTFbRl.js";import"./getPseudoElementBounds-ziTcDrkP.js";import"./chevron-down-CCwBQ-Op.js";import"./index-DrBipA26.js";import"./error-BBoH6WG4.js";import"./BaseCbacBanner-qXigIY7P.js";import"./makeExternalStore-B7jmTiXs.js";import"./Tooltip-sDanQ0l7.js";import"./PopoverPopup-D0TjUtq8.js";import"./debounce-CdsfP08y.js";import"./useOsdkClient-D7R-JaCT.js";import"./tick-DpLCRzEH.js";import"./DropdownField-Qb5LfBsz.js";import"./isEqual-DUwwd1cV.js";import"./withOsdkMetrics-uTMtOsB_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
