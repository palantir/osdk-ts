import{f as p,j as e}from"./iframe-Dig_Ahq7.js";import{O as i}from"./object-table-DRbn2KV9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Eyc3oojg.js";import"./Table-BH6VCbZL.js";import"./index-BAoTCyK2.js";import"./Dialog-DjeLPKul.js";import"./cross-BbZdDJWd.js";import"./svgIconContainer-Cx17DJom.js";import"./useBaseUiId-BXYV1Ucu.js";import"./InternalBackdrop-9xDhMp1X.js";import"./composite-GVV5HeYl.js";import"./index-r_flECQw.js";import"./index-BkAj4YFS.js";import"./index-C7_bCvO2.js";import"./useEventCallback-gJbpMQg7.js";import"./SkeletonBar-CsGbtXT3.js";import"./LoadingCell-DKZrjk97.js";import"./ColumnConfigDialog-BuTtQE3J.js";import"./DraggableList-tJf8F9Sb.js";import"./search-C4f4g9Ue.js";import"./Input-DERIfaLU.js";import"./useControlled-9l0-iUGA.js";import"./Button-Cg2kaI0u.js";import"./small-cross-DjUMZG4-.js";import"./ActionButton-CjCg9wAs.js";import"./Checkbox-J-o0L9Wo.js";import"./useValueChanged-vdnoKm5P.js";import"./CollapsiblePanel-KQrHcfGa.js";import"./MultiColumnSortDialog-Btfbxxyl.js";import"./MenuTrigger-94IZ7g5X.js";import"./CompositeItem-CjjvTweq.js";import"./ToolbarRootContext-5tRY-prW.js";import"./getDisabledMountTransitionStyles-D5dXOzgC.js";import"./getPseudoElementBounds-Br8tb0sy.js";import"./chevron-down-D5J97Xaa.js";import"./index-DZ8Usuwg.js";import"./error-D0UPEL3v.js";import"./BaseCbacBanner-BJEX1-t0.js";import"./makeExternalStore-CcSZq8Dl.js";import"./Tooltip-CTgBYqFc.js";import"./PopoverPopup-D98de9Kk.js";import"./debounce-BeGpfOBp.js";import"./useOsdkClient-CLewU869.js";import"./tick-CxynzRts.js";import"./DropdownField-BYx0xJl-.js";import"./isEqual-CbjpySH_.js";import"./withOsdkMetrics-hTvMF2O-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
