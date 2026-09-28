import{f as p,j as e}from"./iframe-vWRqqmX-.js";import{O as i}from"./object-table-804WIQTK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rcEVmD-8.js";import"./Table-BIMKxZRx.js";import"./index-CHsUa7_U.js";import"./Dialog-DWTZ77Co.js";import"./cross-BIItHWLB.js";import"./svgIconContainer-B_rEL3k8.js";import"./useBaseUiId-DqVebmsP.js";import"./InternalBackdrop-Bj_asFWJ.js";import"./composite-D97u5UoY.js";import"./index-CoSoVngB.js";import"./index-B1eqFRL5.js";import"./index-sVUrmcsW.js";import"./useEventCallback-DMVnoZ3z.js";import"./SkeletonBar-CqBoYZ8U.js";import"./LoadingCell-qD_P_fRR.js";import"./ColumnConfigDialog-yWt_y5TP.js";import"./DraggableList-ZdW5g8dr.js";import"./search-C9O70xSJ.js";import"./Input-CDZCyUSS.js";import"./useControlled-C4H7EWzs.js";import"./Button-C6bK3SUF.js";import"./small-cross-DgmUASg5.js";import"./ActionButton-BPD_E_Z-.js";import"./Checkbox-Bk6kGgLm.js";import"./useValueChanged-aefsk5NO.js";import"./CollapsiblePanel-2hkcDRMt.js";import"./MultiColumnSortDialog-B5Vn8yrA.js";import"./MenuTrigger-C65re9Vs.js";import"./CompositeItem-C9y1P_Q2.js";import"./ToolbarRootContext-DpnDbVh3.js";import"./getDisabledMountTransitionStyles-C2Knmcgg.js";import"./getPseudoElementBounds-B9pvaRUu.js";import"./chevron-down-CgEqRVri.js";import"./index-DzR_Swb2.js";import"./error-C1w4OL1G.js";import"./BaseCbacBanner-C-Vru3Z4.js";import"./makeExternalStore-D3utWwkK.js";import"./Tooltip-BADmUJIy.js";import"./PopoverPopup-D7-JPOKG.js";import"./debounce-UXxVW676.js";import"./useOsdkClient-B6lrTeDC.js";import"./tick-BtAbSo2V.js";import"./DropdownField-DfFvOzAq.js";import"./isEqual-DxBRoLuF.js";import"./withOsdkMetrics-CfKbJ4sV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
