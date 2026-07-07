import{f as n,j as t}from"./iframe-B7gQcrb_.js";import{O as p}from"./object-table-FDKmTFHU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B22ifJX7.js";import"./Table-ByF7v6Vv.js";import"./index-DW0zwyvf.js";import"./Dialog-CgmqbWhu.js";import"./cross-CYsb_yLj.js";import"./svgIconContainer-D6sfD20p.js";import"./useBaseUiId-DCWAq4Sx.js";import"./InternalBackdrop-CoBelcOk.js";import"./composite-DEgIh3jn.js";import"./index-KNoJXyD0.js";import"./index-D1_nxY16.js";import"./index-DCBXSeqI.js";import"./useEventCallback-Bkg45hmY.js";import"./SkeletonBar-DXr8FCIm.js";import"./LoadingCell-W-4inPZQ.js";import"./ColumnConfigDialog-jHm4XRSg.js";import"./DraggableList-DOXyV1H-.js";import"./search-BULPq-dP.js";import"./Input-vMCMJnkw.js";import"./useControlled-CVbWaO1F.js";import"./Button-CC2MtQJZ.js";import"./small-cross-DMFWVIi1.js";import"./ActionButton-DoibFgtk.js";import"./Checkbox-Pezaqgco.js";import"./useValueChanged-BjJkHMPC.js";import"./CollapsiblePanel-Bkux71dZ.js";import"./MultiColumnSortDialog-CdW2R7Bh.js";import"./MenuTrigger-CSCa9b8I.js";import"./CompositeItem-CAlT67zS.js";import"./ToolbarRootContext-ub1eLBc8.js";import"./getDisabledMountTransitionStyles-D-VvmYB6.js";import"./getPseudoElementBounds-Be8Dh66N.js";import"./chevron-down-CWecwFos.js";import"./index-CISsqx9W.js";import"./error-E_X0j4XH.js";import"./BaseCbacBanner-3-Al3Euk.js";import"./makeExternalStore-BUojSKmM.js";import"./Tooltip-BCcRju5j.js";import"./PopoverPopup-DFF-zi-r.js";import"./toNumber-B2xpZRcK.js";import"./useOsdkClient-CwLsoUSZ.js";import"./tick-fsyiinm_.js";import"./DropdownField-DyEGrwid.js";import"./withOsdkMetrics-PuQmpE13.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
