import{f as n,j as t}from"./iframe-Ct5U6xeR.js";import{O as p}from"./object-table-C4CEy73m.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CdzdMHdl.js";import"./Table-DtpjcUKZ.js";import"./index-Dgl4nJuA.js";import"./Dialog-BpPNk_K9.js";import"./cross-CFO-dET5.js";import"./svgIconContainer-CTihE-cS.js";import"./useBaseUiId-nrauk7OM.js";import"./InternalBackdrop-CqYa4Zj9.js";import"./composite-ecDtriP6.js";import"./index-lLm2r21o.js";import"./index-mpVEuWzZ.js";import"./index-Buf32kd_.js";import"./useEventCallback-Cup2dSua.js";import"./SkeletonBar-DPNeUMO8.js";import"./LoadingCell-CEReogQ7.js";import"./ColumnConfigDialog-DdQjHdYv.js";import"./DraggableList-DLV9PqKm.js";import"./search-BvDZFYef.js";import"./Input-COl4G5TA.js";import"./useControlled-BAy3aki5.js";import"./Button-BTJJpdUb.js";import"./small-cross-BvyhBHw6.js";import"./ActionButton-g7HnpD2H.js";import"./Checkbox-CyTuxGX4.js";import"./useValueChanged-D1Qk2ZAB.js";import"./CollapsiblePanel-CZ1_7kXB.js";import"./MultiColumnSortDialog-BBZ2dCO2.js";import"./MenuTrigger-_GODd1Wl.js";import"./CompositeItem-BLgRRv78.js";import"./ToolbarRootContext-DWeXieT0.js";import"./getDisabledMountTransitionStyles-DZ35bsiT.js";import"./getPseudoElementBounds-8obCYOc_.js";import"./chevron-down-CRq_s3Fv.js";import"./index-BFmQGs5j.js";import"./error-u64wl0pz.js";import"./BaseCbacBanner-Dcz4VIIS.js";import"./makeExternalStore-CYKQyVfe.js";import"./Tooltip-DFzAB9dF.js";import"./PopoverPopup-6LcS2ubE.js";import"./toNumber-DaJf37vJ.js";import"./useOsdkClient-7RI6nSNr.js";import"./tick-CJqm_UsH.js";import"./DropdownField-D15cf4CJ.js";import"./withOsdkMetrics-B7UuXrPe.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
