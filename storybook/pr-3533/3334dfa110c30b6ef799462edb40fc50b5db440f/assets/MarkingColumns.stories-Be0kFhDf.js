import{f as n,j as t}from"./iframe-CA-Jjb_4.js";import{O as p}from"./object-table-Drrgi5kP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dlg8xDbu.js";import"./Table-DOCna2dk.js";import"./index-Dyq1yN2P.js";import"./Dialog-CQdzJTme.js";import"./cross-nIVu7cIH.js";import"./svgIconContainer-4_T2DW_5.js";import"./useBaseUiId-GEkCbLBa.js";import"./InternalBackdrop-x5swkGiG.js";import"./composite-DkkadWpi.js";import"./index-h9yothYB.js";import"./index-IoaE0ABN.js";import"./index-BazR9_Vz.js";import"./useEventCallback-ciejQDaf.js";import"./SkeletonBar-nvRv2IsI.js";import"./LoadingCell-DDXdwUC3.js";import"./ColumnConfigDialog-BQlXFKxo.js";import"./DraggableList-Nhu5bqHk.js";import"./Input-D4Z6Ca-A.js";import"./useControlled-DNgMRgiK.js";import"./Button-BAILxeBw.js";import"./small-cross-BD54D7Y6.js";import"./ActionButton-CUxXKwb9.js";import"./Checkbox-DL9jdoDS.js";import"./minus-B-rGvElJ.js";import"./useValueChanged-DaajwA1Q.js";import"./caret-down-DWQ_CaDk.js";import"./CollapsiblePanel-DLNyGQ--.js";import"./MultiColumnSortDialog-BGi_bI7B.js";import"./MenuTrigger-xBbZeGp-.js";import"./CompositeItem-nLj1em87.js";import"./ToolbarRootContext-BGkdwiqh.js";import"./getDisabledMountTransitionStyles-BLkeUHBi.js";import"./getPseudoElementBounds-DSQvbWHW.js";import"./chevron-down-DtscOPHU.js";import"./index-OZkYm-sB.js";import"./error-3yVMcNOG.js";import"./BaseCbacBanner-kl4lJH79.js";import"./makeExternalStore-On9lnaHk.js";import"./Tooltip-IQN0eDi9.js";import"./PopoverPopup--hrqpxhS.js";import"./toNumber-_TjmtEZU.js";import"./useOsdkClient-D81JF1Wn.js";import"./DropdownField-TWFmldJV.js";import"./withOsdkMetrics-BKi74qF8.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
