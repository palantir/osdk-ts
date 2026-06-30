import{f as n,j as t}from"./iframe-CJBaWBDv.js";import{O as p}from"./object-table-Dtr8ntrf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BWI1AJ3q.js";import"./Table-zpFTbFuH.js";import"./index-CMledsxy.js";import"./Dialog-DBKcyCmd.js";import"./cross-49LfIgF0.js";import"./svgIconContainer-BLorCNBT.js";import"./useBaseUiId-CoBsL_SE.js";import"./InternalBackdrop-BNacSiOS.js";import"./composite-BADN5REh.js";import"./index-C5e1qggc.js";import"./index-mtO4_tCj.js";import"./index-DNeP-dq5.js";import"./useEventCallback-BBcddvBe.js";import"./SkeletonBar-CZdmbEO1.js";import"./LoadingCell-RV7Z45DX.js";import"./ColumnConfigDialog-CknWk8Dl.js";import"./DraggableList-C6ZXpamz.js";import"./search-DjRbLZYR.js";import"./Input-hgK_yrrQ.js";import"./useControlled-OTZ1QGTe.js";import"./Button-C4T61Ci8.js";import"./small-cross-D9V9xmZD.js";import"./ActionButton-Bb_1E8iC.js";import"./Checkbox-B8GMsrtn.js";import"./minus-jEQVeEYW.js";import"./tick-B0cU4U32.js";import"./useValueChanged-DNx_b-Bs.js";import"./caret-down-Dxz7FsQm.js";import"./CollapsiblePanel-Civ_92E5.js";import"./MultiColumnSortDialog-CUBabrBs.js";import"./MenuTrigger-CZQ7sq_e.js";import"./CompositeItem-Ce5546Sm.js";import"./ToolbarRootContext-CaePn4Tj.js";import"./getDisabledMountTransitionStyles-BUI8zp0j.js";import"./getPseudoElementBounds-Cg2Feh6b.js";import"./chevron-down-RgggEZkL.js";import"./index-BSLfY8jl.js";import"./error-DSt-zVpr.js";import"./BaseCbacBanner-_A7EQZRm.js";import"./makeExternalStore-BOZIxHKI.js";import"./Tooltip-DfOMkdna.js";import"./PopoverPopup-BunQNOZr.js";import"./toNumber-D64YTzpk.js";import"./useOsdkClient-DJslRNmH.js";import"./DropdownField-ZpJBfFov.js";import"./withOsdkMetrics-C-E-7zTk.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
