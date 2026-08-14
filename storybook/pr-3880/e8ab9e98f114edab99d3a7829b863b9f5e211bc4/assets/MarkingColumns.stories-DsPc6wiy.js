import{f as p,j as e}from"./iframe-tKy6APGZ.js";import{O as i}from"./object-table-CXOQ5-Bt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-TkRVYpGj.js";import"./Table-aVr-cm8e.js";import"./index-xL2dF_iL.js";import"./Dialog-_HKqoJi0.js";import"./cross-CZNxjxTb.js";import"./svgIconContainer-Fm0Itt8L.js";import"./useBaseUiId-D4LRJH62.js";import"./InternalBackdrop-JtePeB2n.js";import"./composite-CQXmhBC2.js";import"./index-tz8HT03m.js";import"./index-DPumkzsB.js";import"./index-BURy5Q0k.js";import"./useEventCallback-BPZsErWH.js";import"./SkeletonBar-DKA6QS3d.js";import"./LoadingCell-C4FlmSc0.js";import"./ColumnConfigDialog-1wLW7wAA.js";import"./DraggableList-DzkYxRiU.js";import"./search-D28QZpbg.js";import"./Input-CNh3fqAG.js";import"./useControlled-DKIul1JY.js";import"./Button-CO7TuWo7.js";import"./small-cross-B57Jo-iY.js";import"./ActionButton-CH2f-vaq.js";import"./Checkbox-i1pzXO7M.js";import"./useValueChanged-Btmb51LF.js";import"./CollapsiblePanel-BBg5V9Fw.js";import"./MultiColumnSortDialog-VCNdJIc8.js";import"./MenuTrigger-JZuFOHD6.js";import"./CompositeItem-CPH8rcqG.js";import"./ToolbarRootContext-BNp90vCd.js";import"./getDisabledMountTransitionStyles--YjRI_nH.js";import"./getPseudoElementBounds-oj5UDNKB.js";import"./chevron-down-Dz9066r5.js";import"./index-BY_Q76g3.js";import"./error-DeDVZ0qI.js";import"./BaseCbacBanner-Ce6XNrpU.js";import"./makeExternalStore-C4vMnOBy.js";import"./Tooltip-3YSWsEh-.js";import"./PopoverPopup-CzPcYQbn.js";import"./debounce-DlATweo8.js";import"./useOsdkClient-DffW2GNh.js";import"./tick-Hrp6Yd74.js";import"./DropdownField-CPXyhYMx.js";import"./isEqual-OqbIOAu3.js";import"./withOsdkMetrics-D45euEFz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
