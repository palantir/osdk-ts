import{f as n,j as t}from"./iframe-BljDq4wR.js";import{O as p}from"./object-table-iRbLn6ux.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B_iYACo7.js";import"./Table-CSn-USZP.js";import"./index-DO-1ysPN.js";import"./Dialog-FzIWBzOw.js";import"./cross-Be1AVT1F.js";import"./svgIconContainer-CX8tMQQJ.js";import"./useBaseUiId-BMSny1Su.js";import"./InternalBackdrop-B88grtsy.js";import"./composite-D0yY90_T.js";import"./index-B7vgxTAj.js";import"./index-zpcgYgtG.js";import"./index-CubXdQ6D.js";import"./useEventCallback-BBhvHYMg.js";import"./SkeletonBar-BnK76L-A.js";import"./LoadingCell-CkduBL2D.js";import"./ColumnConfigDialog-B9oNJUhc.js";import"./DraggableList-ojLJIkst.js";import"./search-C4Ru-Hyi.js";import"./Input-BWn9wT_i.js";import"./useControlled-CPi6U7Vb.js";import"./Button-CP-k4xCy.js";import"./small-cross-C_eNneaR.js";import"./ActionButton-Bt-sXrd_.js";import"./Checkbox-DvUCAcbb.js";import"./useValueChanged-DrbuOY9i.js";import"./CollapsiblePanel-DBmZO5qU.js";import"./MultiColumnSortDialog-DjjvqZM4.js";import"./MenuTrigger-DLtav0WH.js";import"./CompositeItem-D_nptJWW.js";import"./ToolbarRootContext-C2oiM4f3.js";import"./getDisabledMountTransitionStyles-aBy-T-9N.js";import"./getPseudoElementBounds-C6at6wGp.js";import"./chevron-down-DyUKO2D2.js";import"./index-Dtm72hel.js";import"./error-BLpAp9wE.js";import"./BaseCbacBanner-B7yZJ_IB.js";import"./makeExternalStore-yIneejl0.js";import"./Tooltip-ocMNx7Rf.js";import"./PopoverPopup-ZXnB9BYu.js";import"./toNumber-BMeU4-aE.js";import"./useOsdkClient-yBDsvnQU.js";import"./tick-DcZbmWd6.js";import"./DropdownField-DnJgL-m6.js";import"./withOsdkMetrics-DCDCh1dh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
