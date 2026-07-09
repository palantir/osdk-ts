import{f as n,j as t}from"./iframe-CeWnsIVU.js";import{O as p}from"./object-table-DGfumgmG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CAYenRhz.js";import"./Table-C46GQBlH.js";import"./index-C_PBaTq4.js";import"./Dialog-nCGX7mZH.js";import"./cross-zVaou9ZX.js";import"./svgIconContainer-DJeVMly8.js";import"./useBaseUiId-DVX42A46.js";import"./InternalBackdrop-DrmMQMNw.js";import"./composite-B8sMdsar.js";import"./index-BYQz6UTe.js";import"./index-DcUymPp1.js";import"./index-DrlPhP0H.js";import"./useEventCallback-fWcjokXm.js";import"./SkeletonBar-nXpGTKff.js";import"./LoadingCell-CYOLzfJf.js";import"./ColumnConfigDialog-meQEcyl0.js";import"./DraggableList-BwDOhJUV.js";import"./search-B1QWSoPr.js";import"./Input-BuOhp1aA.js";import"./useControlled-Lzs3Xe3I.js";import"./Button-DmiYrxec.js";import"./small-cross-CxEPvkq6.js";import"./ActionButton-ClOdTZKe.js";import"./Checkbox-D97nHVJi.js";import"./useValueChanged-C8LOxTZz.js";import"./CollapsiblePanel-B5ANQJxp.js";import"./MultiColumnSortDialog-d0XT0oeF.js";import"./MenuTrigger-BaYysjsy.js";import"./CompositeItem-B3fNvpZt.js";import"./ToolbarRootContext-VC6o6PlY.js";import"./getDisabledMountTransitionStyles-bs6SO0U6.js";import"./getPseudoElementBounds-Ckq71MEk.js";import"./chevron-down-C0ffFM-j.js";import"./index-DTly_hdc.js";import"./error-D4XFpaXQ.js";import"./BaseCbacBanner-DpcPxYR1.js";import"./makeExternalStore-MnW_cPUk.js";import"./Tooltip-WCDcF-kG.js";import"./PopoverPopup-BL-2qcaA.js";import"./toNumber-DK_zX_wV.js";import"./useOsdkClient-Cw0a9zkl.js";import"./tick-C6SCTlvh.js";import"./DropdownField-Btk6bGjM.js";import"./withOsdkMetrics-BgL9JuO_.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
