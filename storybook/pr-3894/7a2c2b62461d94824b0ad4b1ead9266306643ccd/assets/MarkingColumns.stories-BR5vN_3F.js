import{f as p,j as e}from"./iframe-jUDVu-oB.js";import{O as i}from"./object-table-Cx9tm_Pd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CyYr8U1Q.js";import"./Table-CEAaeBiQ.js";import"./index-1Q0hWWGI.js";import"./Dialog-CmmS098x.js";import"./cross-B3EYIFf_.js";import"./svgIconContainer-ChyWwrvo.js";import"./useBaseUiId-C6WGvNek.js";import"./InternalBackdrop-Cv--M4Jq.js";import"./composite-Bu0UeckM.js";import"./index-DVDzZTIb.js";import"./index-C9oucRDg.js";import"./index-mIO2g3nC.js";import"./useEventCallback-w_ctU8j3.js";import"./SkeletonBar-BqIPwENF.js";import"./LoadingCell-MwY8x3Ok.js";import"./ColumnConfigDialog-BuQ4fhX6.js";import"./DraggableList-Cxf06e0j.js";import"./search-DqQGZnw2.js";import"./Input-BcTAE4rO.js";import"./useControlled-CjWxurNp.js";import"./Button-B3_hL6UU.js";import"./small-cross-3dACuLGo.js";import"./ActionButton-B73Vppck.js";import"./Checkbox-BxR9euFz.js";import"./useValueChanged-CsZ0uGxH.js";import"./CollapsiblePanel-DnM3o2Gi.js";import"./MultiColumnSortDialog-CPT8sh5J.js";import"./MenuTrigger-C8i0-fFA.js";import"./CompositeItem-DIufQebI.js";import"./ToolbarRootContext-DhXolmDg.js";import"./getDisabledMountTransitionStyles-3YgE9QJa.js";import"./getPseudoElementBounds-Gpw7pplD.js";import"./chevron-down-DSRlwyRr.js";import"./index-DTDaFG3C.js";import"./error-ekMkFCMM.js";import"./BaseCbacBanner-CP6xIIrj.js";import"./makeExternalStore-BbZ23pca.js";import"./Tooltip-CLOOUvQK.js";import"./PopoverPopup-BMShbDJ0.js";import"./debounce-C6jjJgFF.js";import"./useOsdkClient-BXvZlVT3.js";import"./tick-CgyCojcZ.js";import"./DropdownField-mH-K4cC2.js";import"./isEqual-CNT7U_na.js";import"./withOsdkMetrics-Cv-kz2_6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
