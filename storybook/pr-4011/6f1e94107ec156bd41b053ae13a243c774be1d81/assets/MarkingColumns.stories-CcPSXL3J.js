import{f as p,j as e}from"./iframe-CxIn-rG9.js";import{O as i}from"./object-table-BfEJJ2X7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-X6xNaBfi.js";import"./Table-CJ2ctgD3.js";import"./index-DFQNuVuF.js";import"./Dialog-UFtp53bO.js";import"./cross-TMn9ETj9.js";import"./svgIconContainer-c9igszEF.js";import"./useBaseUiId-B2Xt2brM.js";import"./InternalBackdrop-Du9CNWbl.js";import"./composite-BqqFykrE.js";import"./index-DDGK9wch.js";import"./index-CC8ad_XL.js";import"./index-Dk7lf_Pd.js";import"./useEventCallback-B1iES3kj.js";import"./SkeletonBar-BBK8X7z7.js";import"./LoadingCell-B3Ij3jGR.js";import"./ColumnConfigDialog-vcj3cdm_.js";import"./DraggableList-Bol2-xJB.js";import"./search-jqi3oncJ.js";import"./Input-DMEekJro.js";import"./useControlled-DojYWrxF.js";import"./Button-B9HFamKv.js";import"./small-cross-BY7zwxBs.js";import"./ActionButton-qIvloGNZ.js";import"./Checkbox-LMTBOVPC.js";import"./useValueChanged-Cykl9Has.js";import"./CollapsiblePanel-LVh3LC_t.js";import"./MultiColumnSortDialog-DEaQClJA.js";import"./MenuTrigger-CfZj9Quh.js";import"./CompositeItem-AwSF7S2C.js";import"./ToolbarRootContext-O9MvMR3V.js";import"./getDisabledMountTransitionStyles-DlmAc0el.js";import"./getPseudoElementBounds-8yyQ5dXu.js";import"./chevron-down-kODRI2uy.js";import"./index-K4d5SQDR.js";import"./error-LS_wz8gU.js";import"./BaseCbacBanner-Bo1wfMOY.js";import"./makeExternalStore-CFux59qT.js";import"./Tooltip-BY1oJx1C.js";import"./PopoverPopup-BndJ4L0f.js";import"./debounce-DN6pYKk6.js";import"./useOsdkClient-BIrOkiuO.js";import"./tick-DnpOCE6f.js";import"./DropdownField-e5290CV8.js";import"./isEqual-CGMN573Q.js";import"./withOsdkMetrics-Ci9E-Vmh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
