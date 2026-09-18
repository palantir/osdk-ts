import{f as p,j as e}from"./iframe-B9azDZlz.js";import{O as i}from"./object-table-QQXxCQbo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bm0hX83b.js";import"./Table-BcdhfCUI.js";import"./index-Gnn4IAPK.js";import"./Dialog-BL5Xt88J.js";import"./cross-DH7Phj5l.js";import"./svgIconContainer-BSqh8zzQ.js";import"./useBaseUiId-B5AQ3HFN.js";import"./InternalBackdrop-CVYwGey5.js";import"./composite-DG0rNHFY.js";import"./index-DG7p6B41.js";import"./index-D0fYYncd.js";import"./index-0NY8KgBX.js";import"./useEventCallback-CKNYTi7U.js";import"./SkeletonBar-QxJNYOQi.js";import"./LoadingCell-CkafHKo1.js";import"./ColumnConfigDialog-CmRx7Ibx.js";import"./DraggableList-Oqv7j_Rf.js";import"./search-D-Pd3u3n.js";import"./Input-6Xi2oRl5.js";import"./useControlled-CIIQ6AdN.js";import"./Button-ByY1VR_F.js";import"./small-cross-BErTRTeO.js";import"./ActionButton-CtxrjN50.js";import"./Checkbox-COQa-sEG.js";import"./useValueChanged-YxrolQP8.js";import"./CollapsiblePanel-BWH5sgwq.js";import"./MultiColumnSortDialog-d0_k3Eoy.js";import"./MenuTrigger-BAknza5f.js";import"./CompositeItem-23Xg-PrO.js";import"./ToolbarRootContext-H0Ylxwtf.js";import"./getDisabledMountTransitionStyles-D26pQLY4.js";import"./getPseudoElementBounds-DOsvVJTW.js";import"./chevron-down-CDhI7Cg9.js";import"./index-BqVQ5c0B.js";import"./error-B89KPxvz.js";import"./BaseCbacBanner-C61KBizI.js";import"./makeExternalStore-Sb074CVY.js";import"./Tooltip-BiRF5TgT.js";import"./PopoverPopup-BoIWrT_I.js";import"./debounce-B2RJoylZ.js";import"./useOsdkClient-DfxUO55U.js";import"./tick-BDEOlM-s.js";import"./DropdownField-B0WGKaAs.js";import"./isEqual-CcChNOPP.js";import"./withOsdkMetrics-BCygmhUI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
