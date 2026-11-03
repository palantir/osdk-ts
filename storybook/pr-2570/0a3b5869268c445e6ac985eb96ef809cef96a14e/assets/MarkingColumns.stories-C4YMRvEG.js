import{f as p,j as e}from"./iframe-mxG0bqmN.js";import{O as i}from"./object-table-WFIM5xuM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNw17NEq.js";import"./Table-CAKdzfmG.js";import"./index-29oGgzLZ.js";import"./Dialog-CzGl0n2S.js";import"./cross-D6Tl4R1E.js";import"./svgIconContainer-rUf9sgj2.js";import"./useBaseUiId-B0pa-b1P.js";import"./InternalBackdrop-CGuoD2YW.js";import"./composite-CT4w3sd4.js";import"./index-LiG5jLj1.js";import"./index-xs8nS-0V.js";import"./index-CxXsu0GI.js";import"./useEventCallback-L-Hi9oaa.js";import"./SkeletonBar-BCvv_Y3s.js";import"./LoadingCell-wIgPXJ0i.js";import"./ColumnConfigDialog-BW87yl2t.js";import"./DraggableList-BhkR4Rp6.js";import"./search-D0vl5yax.js";import"./Input-DAYbAIy1.js";import"./useControlled-CwpY0gyY.js";import"./Button-CoXV5wZD.js";import"./small-cross-B4Qofj2m.js";import"./ActionButton-Cf-j963P.js";import"./Checkbox-8pM9UbcC.js";import"./useValueChanged-pIGQFkB0.js";import"./CollapsiblePanel-BCX6O8yN.js";import"./MultiColumnSortDialog-C30X4qHV.js";import"./MenuTrigger-CUh0N47S.js";import"./CompositeItem-CqN63eX8.js";import"./ToolbarRootContext-fx2tIRtZ.js";import"./getDisabledMountTransitionStyles-9AH5tTIW.js";import"./getPseudoElementBounds-Bb4Xtmeq.js";import"./chevron-down-BPLfSvEY.js";import"./index-yPM4gYG7.js";import"./error-C0pmiaE9.js";import"./BaseCbacBanner-CesOwNkt.js";import"./makeExternalStore-DsBTIsva.js";import"./Tooltip-z0kTVIGb.js";import"./PopoverPopup-Cs7h6BtC.js";import"./debounce-CTavI0VY.js";import"./useOsdkClient-D60YQHAg.js";import"./tick-jAHr_TTi.js";import"./DropdownField-DDaAL4R3.js";import"./isEqual-C7XaR8KZ.js";import"./withOsdkMetrics-BccI-HLw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
