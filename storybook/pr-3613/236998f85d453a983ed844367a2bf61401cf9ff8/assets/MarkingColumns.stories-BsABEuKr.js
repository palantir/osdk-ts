import{f as n,j as t}from"./iframe-Gp0duaQJ.js";import{O as p}from"./object-table-6jPA_buE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C8FqFtAx.js";import"./Table-CYqn34pK.js";import"./index-bq86hwmc.js";import"./Dialog-BnLpA2zX.js";import"./cross-Dq6w5dEP.js";import"./svgIconContainer-BRpGttjJ.js";import"./useBaseUiId-DnOoKEwn.js";import"./InternalBackdrop-02HJxnSs.js";import"./composite-2259NXTL.js";import"./index-D9e8Dvqo.js";import"./index-UtAZgLJH.js";import"./index-2-cHECvM.js";import"./useEventCallback-5C2V3iQM.js";import"./SkeletonBar-CUdRYX4Q.js";import"./LoadingCell-DysQtYrP.js";import"./ColumnConfigDialog-B4rNPbqM.js";import"./DraggableList-D_logTuZ.js";import"./search-DCiLhOC3.js";import"./Input-ffUWAK2l.js";import"./useControlled-CQL1v0td.js";import"./Button-jIclGle0.js";import"./small-cross-CiNg-f6N.js";import"./ActionButton-BGhiqI3l.js";import"./Checkbox-B2cYy1R2.js";import"./useValueChanged-Cs-tf9NG.js";import"./CollapsiblePanel-Dy04LYCk.js";import"./MultiColumnSortDialog-rRUnbal0.js";import"./MenuTrigger-BkvnKem0.js";import"./CompositeItem-DXbnT35K.js";import"./ToolbarRootContext-CNHQa9f8.js";import"./getDisabledMountTransitionStyles-DipB2tkm.js";import"./getPseudoElementBounds-Fk5xJQ5T.js";import"./chevron-down-CoN8oxZE.js";import"./index-De-Ywklz.js";import"./error-Bh1Sjwhe.js";import"./BaseCbacBanner-BFHXb_2G.js";import"./makeExternalStore-hYBLAuzZ.js";import"./Tooltip-BW1GqZmS.js";import"./PopoverPopup-CwxBeVFZ.js";import"./toNumber-Dte9-3OU.js";import"./useOsdkClient-DN8BwLM_.js";import"./tick-4gxWCN1g.js";import"./DropdownField-DJjGm-xb.js";import"./withOsdkMetrics-BMTREDZc.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
