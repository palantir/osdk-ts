import{f as n,j as t}from"./iframe-ByebNF9G.js";import{O as p}from"./object-table-DkY5Eam7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BLJ5nm8q.js";import"./Table-CzupOnnl.js";import"./index-DrYCJTcF.js";import"./Dialog-DjgGOx1l.js";import"./cross-B9Ul-EiI.js";import"./svgIconContainer-CyQgdri1.js";import"./useBaseUiId-BSJ3fRaN.js";import"./InternalBackdrop-DklVG8lc.js";import"./composite-D85XRieF.js";import"./index-gnCQ8zpE.js";import"./index-n0aiGAK9.js";import"./index-D7fCb9_B.js";import"./useEventCallback-gTx1a_be.js";import"./SkeletonBar-CRh_ESKK.js";import"./LoadingCell-DBpSkPqE.js";import"./ColumnConfigDialog-CF_rP4wu.js";import"./DraggableList-DE05-CQ-.js";import"./search-C7zAZ54L.js";import"./Input-C5LuyW3N.js";import"./useControlled-oOiLPaN4.js";import"./Button-CZzSrRkZ.js";import"./small-cross-q31CaUCX.js";import"./ActionButton-CcqVTL0u.js";import"./Checkbox-B5a0FXxR.js";import"./minus-DxmSfAi7.js";import"./tick-D4g9sOY0.js";import"./useValueChanged-Dwl_cdjL.js";import"./caret-down-DfDUhgIs.js";import"./CollapsiblePanel-B4GQo-hS.js";import"./MultiColumnSortDialog-Cba0Gj5Z.js";import"./MenuTrigger-BIT1Eune.js";import"./CompositeItem-Df4No_Tk.js";import"./ToolbarRootContext-C9vRlfBp.js";import"./getDisabledMountTransitionStyles-DiXGk51e.js";import"./getPseudoElementBounds-OAjD6b0x.js";import"./chevron-down-DsIawkVT.js";import"./index-D7xtWs7d.js";import"./error-6QLkq3Wr.js";import"./BaseCbacBanner-BRHYH2cM.js";import"./makeExternalStore--YX2KV2I.js";import"./Tooltip-Dc7FX3ej.js";import"./PopoverPopup-DUNpZx8b.js";import"./toNumber-CTpi8Q5A.js";import"./useOsdkClient-CNngy1Vb.js";import"./DropdownField-BB_0Nrdl.js";import"./withOsdkMetrics-bYymsQI_.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
