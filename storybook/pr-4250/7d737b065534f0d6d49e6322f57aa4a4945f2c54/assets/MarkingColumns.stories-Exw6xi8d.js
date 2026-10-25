import{f as p,j as e}from"./iframe-C9eTmg5F.js";import{O as i}from"./object-table-BFJt_XBe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-MBuTZogN.js";import"./Table-BD6TclSS.js";import"./index-Cl06-CY3.js";import"./Dialog-B4YghQDZ.js";import"./cross-BNf72m15.js";import"./svgIconContainer-B8-j9zbf.js";import"./useBaseUiId-CarAhcX4.js";import"./InternalBackdrop-CEAB_Tl8.js";import"./composite-BG0FW9Gv.js";import"./index-DawaRm_6.js";import"./index-UInLMRBx.js";import"./index-2Dxqnc05.js";import"./useEventCallback-CaSNRWxA.js";import"./SkeletonBar-jvvHiVWk.js";import"./LoadingCell-DCMe2S9E.js";import"./ColumnConfigDialog-Pa_A63wu.js";import"./DraggableList-DD40pty3.js";import"./search-BBX0widz.js";import"./Input-RYWRwt9M.js";import"./useControlled-D63t172P.js";import"./Button-CrIJmJlm.js";import"./small-cross-BTCn6zZs.js";import"./ActionButton-VZlfdBm7.js";import"./Checkbox-78UKRuuo.js";import"./useValueChanged-BVHy35zR.js";import"./CollapsiblePanel-B1UPkWfl.js";import"./MultiColumnSortDialog-DpJo-55X.js";import"./MenuTrigger-KK_Dd5KH.js";import"./CompositeItem-QTP5J2AO.js";import"./ToolbarRootContext-MN-0Ldxt.js";import"./getDisabledMountTransitionStyles-BTqLOmVB.js";import"./getPseudoElementBounds-CgTJwG5C.js";import"./chevron-down-BJBNlRqs.js";import"./index--xwF9EYW.js";import"./error-BYbnYzlx.js";import"./BaseCbacBanner-DokTRe_s.js";import"./makeExternalStore-CAiiZnZr.js";import"./Tooltip-qg3PMoFt.js";import"./PopoverPopup-D9bH8toe.js";import"./debounce-C6FqpP08.js";import"./useOsdkClient-CNiGT0YI.js";import"./tick-CF6J7PUl.js";import"./DropdownField-Cf4e64fv.js";import"./isEqual-BPwaLeUQ.js";import"./withOsdkMetrics-Dy0OWLdL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
