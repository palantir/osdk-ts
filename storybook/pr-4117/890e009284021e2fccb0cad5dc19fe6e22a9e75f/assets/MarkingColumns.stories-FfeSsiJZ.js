import{f as p,j as e}from"./iframe-BNXnxiJa.js";import{O as i}from"./object-table-Cb1oSNVI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CT8T0PJp.js";import"./Table-CH4uKdSM.js";import"./index-Ch-h42fp.js";import"./Dialog-CKvDjFCt.js";import"./cross-DNfPdLmM.js";import"./svgIconContainer-T3xea5l3.js";import"./useBaseUiId-BjmHkgmf.js";import"./InternalBackdrop-PmKOV69k.js";import"./composite-Cinouu0K.js";import"./index-rjvuha_2.js";import"./index-CUNAUHwV.js";import"./index-KZulTNIE.js";import"./useEventCallback-BmB9ehFQ.js";import"./SkeletonBar-C4SZgVA_.js";import"./LoadingCell-BfBhkylv.js";import"./ColumnConfigDialog-C9bO7pUK.js";import"./DraggableList-DKJFkDus.js";import"./search-DQwSGm2k.js";import"./Input-BQdVPwVd.js";import"./useControlled-DBRd_jSA.js";import"./Button-CDesYXNY.js";import"./small-cross-r42AjjlG.js";import"./ActionButton-CuFNzu9O.js";import"./Checkbox-1jAc03ff.js";import"./useValueChanged-BMp_-0Ka.js";import"./CollapsiblePanel-BKAENuDp.js";import"./MultiColumnSortDialog-D3Ok2AK3.js";import"./MenuTrigger-_gElmUn1.js";import"./CompositeItem-Ch_wyKgR.js";import"./ToolbarRootContext-B1FX1tpV.js";import"./getDisabledMountTransitionStyles-TqKYti97.js";import"./getPseudoElementBounds-C28IzjDZ.js";import"./chevron-down-CLu6_2JJ.js";import"./index-Be-Y0iQr.js";import"./error-BMUe0AWc.js";import"./BaseCbacBanner-DWO6AJ4A.js";import"./makeExternalStore-C77jTvWN.js";import"./Tooltip-Depdrqez.js";import"./PopoverPopup-C9jn2tje.js";import"./debounce-Dw0w9syk.js";import"./useOsdkClient-CKYOKSIJ.js";import"./tick-DtOuh9ys.js";import"./DropdownField-7JT5lhAG.js";import"./isEqual-BSNPV3Xn.js";import"./withOsdkMetrics-CGp4DYy1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
