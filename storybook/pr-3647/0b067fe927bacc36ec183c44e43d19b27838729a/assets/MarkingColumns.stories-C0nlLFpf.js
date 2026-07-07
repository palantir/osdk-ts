import{f as n,j as t}from"./iframe-C6wqoJ-R.js";import{O as p}from"./object-table-natu-Ghw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-OsnfvNW6.js";import"./Table-Ds-52njJ.js";import"./index-DaWDiAIK.js";import"./Dialog--J4j8SwK.js";import"./cross-Cm_KLJ78.js";import"./svgIconContainer-CD_NxClA.js";import"./useBaseUiId-BzTh4cTk.js";import"./InternalBackdrop-ypJLiqJd.js";import"./composite-geLf6Q2O.js";import"./index-CTJU1FE2.js";import"./index-_lMY4yps.js";import"./index-Cr5QE0Pc.js";import"./useEventCallback-DMnEMMjb.js";import"./SkeletonBar-Dpdvd3_P.js";import"./LoadingCell-ieBh1bU2.js";import"./ColumnConfigDialog-KpvfChmk.js";import"./DraggableList-DInt4wNI.js";import"./search-yCRzKz8S.js";import"./Input-DC3FlLe_.js";import"./useControlled-DntN-GCd.js";import"./Button-CjvYY6NT.js";import"./small-cross-D-kilT6O.js";import"./ActionButton-BgHXr_wo.js";import"./Checkbox-Qi3GV99s.js";import"./useValueChanged-DjJ5w90R.js";import"./CollapsiblePanel-DE11m_DC.js";import"./MultiColumnSortDialog-CPGbZQXL.js";import"./MenuTrigger-BYblpOYh.js";import"./CompositeItem-DX6qVJ29.js";import"./ToolbarRootContext-DvgnNDKX.js";import"./getDisabledMountTransitionStyles-C7hchDcV.js";import"./getPseudoElementBounds-BCIA4FiZ.js";import"./chevron-down-sncvdbsk.js";import"./index-BClVvYb0.js";import"./error-DgGcq_Yr.js";import"./BaseCbacBanner-Dc3aar-E.js";import"./makeExternalStore-qlMqAvyH.js";import"./Tooltip-CAmFHXe3.js";import"./PopoverPopup-DLyk-zXA.js";import"./toNumber-DjtUct69.js";import"./useOsdkClient-BcaQ38hh.js";import"./tick-B5x66sMq.js";import"./DropdownField-DGmdTEWW.js";import"./withOsdkMetrics-CEMSMWLA.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
