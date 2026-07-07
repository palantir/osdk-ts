import{f as n,j as t}from"./iframe-awsZ7j26.js";import{O as p}from"./object-table-BrFHZzen.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C31Oofbf.js";import"./Table-sRDJBXsw.js";import"./index-BDgD4bs2.js";import"./Dialog-B5Z7Dgzz.js";import"./cross-EBBS3MG8.js";import"./svgIconContainer-BAAbCsQC.js";import"./useBaseUiId-CgonoKnK.js";import"./InternalBackdrop-CLYaKWm3.js";import"./composite-CSiPE20u.js";import"./index-DEu9X8Hu.js";import"./index-ZCe7kmTE.js";import"./index-tXI39jOV.js";import"./useEventCallback-CpZxy_W7.js";import"./SkeletonBar-B5mlMqe7.js";import"./LoadingCell-D50gQGLi.js";import"./ColumnConfigDialog-CNxnzfPe.js";import"./DraggableList-DG27oqBV.js";import"./search-DChalUEi.js";import"./Input-_ntxGUu6.js";import"./useControlled-BI5xpB4b.js";import"./Button-UFiaVGXl.js";import"./small-cross-4Jcp1N9p.js";import"./ActionButton-DxTqG0FD.js";import"./Checkbox-Bm0WvgM2.js";import"./useValueChanged-CQARB578.js";import"./CollapsiblePanel-DCXArSEX.js";import"./MultiColumnSortDialog--yyoAUaq.js";import"./MenuTrigger-DUDdL3e5.js";import"./CompositeItem-BGM-5pfK.js";import"./ToolbarRootContext-CZvk9_-f.js";import"./getDisabledMountTransitionStyles-Dw0Ouyrt.js";import"./getPseudoElementBounds-CTvcPfB1.js";import"./chevron-down-Bh11S4NC.js";import"./index-C6uB2sma.js";import"./error-jay4KjIn.js";import"./BaseCbacBanner-kT-SWwmY.js";import"./makeExternalStore-CkHWFA6D.js";import"./Tooltip-DPiqKuLX.js";import"./PopoverPopup-CPHvamwt.js";import"./toNumber-BMd6CcYS.js";import"./useOsdkClient-UoaU_-fQ.js";import"./tick-QKQ6diQn.js";import"./DropdownField-CEnBUsg5.js";import"./withOsdkMetrics-EoQkqQF-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
