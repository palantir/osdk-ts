import{f as p,j as e}from"./iframe-CtuQhrts.js";import{O as i}from"./object-table-YlUjTc0K.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-E0wvFVRZ.js";import"./Table-BGrfSwce.js";import"./index-DG_eNmx1.js";import"./Dialog-faHULa3j.js";import"./cross-Bdk_6Gl1.js";import"./svgIconContainer-Bnw8yYHV.js";import"./useBaseUiId-CpQCHWr3.js";import"./InternalBackdrop-BospgbT8.js";import"./composite-rVwQZIBy.js";import"./index-BqjCm1NV.js";import"./index-U7XLybOO.js";import"./index-LE5ZN-pU.js";import"./useEventCallback-D_KcFdlG.js";import"./SkeletonBar-ZTa1S77e.js";import"./LoadingCell-CftHdyJQ.js";import"./ColumnConfigDialog-C7eWN8vR.js";import"./DraggableList-DgMfKVWn.js";import"./search-DiP8_a-2.js";import"./Input-CN20E0rX.js";import"./useControlled-rQPfFHM_.js";import"./Button-D7MvWHhh.js";import"./small-cross-CcRiv3Vk.js";import"./ActionButton-TUlJKdYX.js";import"./Checkbox-C-rEKxYr.js";import"./useValueChanged-BbSU7-N0.js";import"./CollapsiblePanel-Dec68hyl.js";import"./MultiColumnSortDialog-BvQQ1Agg.js";import"./MenuTrigger-DofhHtJd.js";import"./CompositeItem-BIxb8BdJ.js";import"./ToolbarRootContext-BcX0gFdV.js";import"./getDisabledMountTransitionStyles-DeAQV4pF.js";import"./getPseudoElementBounds-6SIsw25g.js";import"./chevron-down-COFpbhrT.js";import"./index-Bn7MWlIG.js";import"./error-DEuUm4lv.js";import"./BaseCbacBanner-CymnVS7Y.js";import"./makeExternalStore-hGhxk8h7.js";import"./Tooltip-CIXf8der.js";import"./PopoverPopup-Dh5q1nAE.js";import"./debounce-bY2G5y8x.js";import"./useOsdkClient-DnuRiMiS.js";import"./tick-CRwQwU7t.js";import"./DropdownField-D4yZkWIJ.js";import"./isEqual-fa-ZCL8Y.js";import"./withOsdkMetrics-mpxIImLJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
