import{f as p,j as e}from"./iframe-BNfKFTwQ.js";import{O as i}from"./object-table-CAaU72U0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DcxZ55lb.js";import"./Table-Ckif-3P-.js";import"./index-DAFvvsPq.js";import"./Dialog-D2Rmh4sD.js";import"./cross-HH4wJUZw.js";import"./svgIconContainer-74CT1nDx.js";import"./useBaseUiId-CaxbLd3J.js";import"./InternalBackdrop-C7RqDA_u.js";import"./composite-BC8qF70z.js";import"./index-bdV_r4dW.js";import"./index-DXeJyDDl.js";import"./index-BzZahzsx.js";import"./useEventCallback-DEpsGOa3.js";import"./SkeletonBar-BTeWxew_.js";import"./LoadingCell-pHyTVOpD.js";import"./ColumnConfigDialog-BzhRSFeQ.js";import"./DraggableList-dyo4Og3o.js";import"./search-CwOYclZa.js";import"./Input-E0NWe4pC.js";import"./useControlled-Bu0wvWhJ.js";import"./Button-BnlzCXtA.js";import"./small-cross-D4OkGDzt.js";import"./ActionButton-CVvxUvnD.js";import"./Checkbox-EiVPEQxE.js";import"./useValueChanged-ozJJ4mlR.js";import"./CollapsiblePanel-gQlK7m0B.js";import"./MultiColumnSortDialog-BIxcpfsm.js";import"./MenuTrigger-qhvNYd-R.js";import"./CompositeItem-DTeaCrKp.js";import"./ToolbarRootContext-Bs5lRq7j.js";import"./getDisabledMountTransitionStyles-DlzHPGDE.js";import"./getPseudoElementBounds-DsMDFke9.js";import"./chevron-down-BMgxqa-T.js";import"./index-BYcE_cgH.js";import"./error-B-mlb-Oh.js";import"./BaseCbacBanner-DgfovizO.js";import"./makeExternalStore-CJ7wcEHs.js";import"./Tooltip-Co0bnHu5.js";import"./PopoverPopup-C_HbajH0.js";import"./debounce-Db6rsQgj.js";import"./useOsdkClient-CLsd_6uS.js";import"./tick-tCkSegKb.js";import"./DropdownField-5YYwz-Gk.js";import"./isEqual-B4kkNXI6.js";import"./withOsdkMetrics-aegz5loh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
