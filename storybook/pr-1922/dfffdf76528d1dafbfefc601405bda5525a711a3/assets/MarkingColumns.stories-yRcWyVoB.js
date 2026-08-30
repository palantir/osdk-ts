import{f as p,j as e}from"./iframe-CpMx7Aup.js";import{O as i}from"./object-table-CQ9NHIze.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CoTSq2F1.js";import"./Table-D070iMiq.js";import"./index-CxmY32cc.js";import"./Dialog-CKQoeaGr.js";import"./cross-TTsfy-0d.js";import"./svgIconContainer-CuSLG6cZ.js";import"./useBaseUiId-BekKaTSH.js";import"./InternalBackdrop-BxzT_GXx.js";import"./composite-BGRmFTC1.js";import"./index-CwBRzy5n.js";import"./index-DLO22dOn.js";import"./index-Bo6mI2yo.js";import"./useEventCallback-BONFFk7M.js";import"./SkeletonBar-CHgFWFkJ.js";import"./LoadingCell-Ba5LJYpB.js";import"./ColumnConfigDialog-Dj6kTDTV.js";import"./DraggableList-CJSICoS0.js";import"./search-DT0Xyteo.js";import"./Input-DsbvGidK.js";import"./useControlled-wTvX_DQ4.js";import"./Button-BDW79Pmx.js";import"./small-cross-Cu-Pzvda.js";import"./ActionButton-hedLhO3x.js";import"./Checkbox-BxJY3Vfd.js";import"./useValueChanged-KVTl21Rk.js";import"./CollapsiblePanel-DYNCNbyF.js";import"./MultiColumnSortDialog-5fG9yuAQ.js";import"./MenuTrigger-BMZyb9jf.js";import"./CompositeItem-Bh3v2N_o.js";import"./ToolbarRootContext-BxbNKn3r.js";import"./getDisabledMountTransitionStyles-CuE4vLcj.js";import"./getPseudoElementBounds-C2W2CV61.js";import"./chevron-down-Dvd8o3b0.js";import"./index-B9i6lMRF.js";import"./error-Cj7z7_gc.js";import"./BaseCbacBanner-DgjfwfFe.js";import"./makeExternalStore-BjX6ObK7.js";import"./Tooltip-BbITICOb.js";import"./PopoverPopup-B8EGxqrk.js";import"./debounce-DD2I4-Hh.js";import"./useOsdkClient-B61ahtGb.js";import"./tick-B27PtLKc.js";import"./DropdownField-ZSaIODjv.js";import"./isEqual-BekYRNr0.js";import"./withOsdkMetrics-DmITN5ju.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
