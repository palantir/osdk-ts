import{f as n,j as t}from"./iframe-D-LDqwFV.js";import{O as p}from"./object-table-Cgb6lv6L.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQgjpoET.js";import"./Table-BWYgNYHH.js";import"./index-CDUltvKd.js";import"./Dialog-BfL_mXoF.js";import"./cross-CglMTmlH.js";import"./svgIconContainer-Dil5nr73.js";import"./useBaseUiId-IB9AIj0E.js";import"./InternalBackdrop-31qkVWL2.js";import"./composite-DcNZJmK6.js";import"./index-D2AFFczo.js";import"./index-BOBRfhg4.js";import"./index-DkKhN_Ou.js";import"./useEventCallback-CsaUHiOM.js";import"./SkeletonBar-D7H6O_5a.js";import"./LoadingCell-ohQoDaJO.js";import"./ColumnConfigDialog-CAdENlxm.js";import"./DraggableList-BSkDBDLN.js";import"./search-ujkrvjg4.js";import"./Input-9ImZUvVS.js";import"./useControlled-CqgLyap4.js";import"./Button-Cf09MQ3n.js";import"./small-cross-DA_9rcKW.js";import"./ActionButton--EqVUHGY.js";import"./Checkbox-K9EywQHS.js";import"./useValueChanged-CKDuijgO.js";import"./CollapsiblePanel-DdnIAGif.js";import"./MultiColumnSortDialog-CxuLHB52.js";import"./MenuTrigger-By4Th-BX.js";import"./CompositeItem-BwEwnpvu.js";import"./ToolbarRootContext-DabkRgUu.js";import"./getDisabledMountTransitionStyles-O0Rtl36Q.js";import"./getPseudoElementBounds-C9zJCLRB.js";import"./chevron-down-cBxLir_w.js";import"./index-nLq2NWR7.js";import"./error-C0LfW5Cp.js";import"./BaseCbacBanner-CKKPDZZN.js";import"./makeExternalStore-CwOQofhM.js";import"./Tooltip-W2QSXUEY.js";import"./PopoverPopup-DxitMFqS.js";import"./toNumber-E10t2HF5.js";import"./useOsdkClient-BpdDW5BI.js";import"./tick-DqCtZR8d.js";import"./DropdownField-CGa5NZsq.js";import"./withOsdkMetrics-Dt7kn6iD.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
