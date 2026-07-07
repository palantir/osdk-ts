import{f as n,j as t}from"./iframe-CYWi8529.js";import{O as p}from"./object-table-q3lC3v3R.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CnVGLtiW.js";import"./Table-CEl6cLCw.js";import"./index-Boz0HyVi.js";import"./Dialog-ClGq_gCI.js";import"./cross-Qkz6a47_.js";import"./svgIconContainer-2BpJRjLB.js";import"./useBaseUiId-OjXTId7w.js";import"./InternalBackdrop-BgwUJwLH.js";import"./composite-zxSbM7jj.js";import"./index-DXeq8Ruf.js";import"./index-DRUMM71a.js";import"./index-CRziKqtw.js";import"./useEventCallback-pXrRpkMU.js";import"./SkeletonBar-B2p0K3kO.js";import"./LoadingCell-CgmLqrVH.js";import"./ColumnConfigDialog-Cm0yyhtU.js";import"./DraggableList-DNEES7hw.js";import"./search-GsWk45Z7.js";import"./Input-wMXy-EBj.js";import"./useControlled-svv9BGfV.js";import"./Button-Bp2GEtN5.js";import"./small-cross-CJm59QlJ.js";import"./ActionButton-DCS1uxt3.js";import"./Checkbox-8gyYxKup.js";import"./useValueChanged-D010i_jJ.js";import"./CollapsiblePanel-SYLJL_rB.js";import"./MultiColumnSortDialog-DPvNER1A.js";import"./MenuTrigger-BHVzsU77.js";import"./CompositeItem-DfhDrK4I.js";import"./ToolbarRootContext-CLHdEoxs.js";import"./getDisabledMountTransitionStyles-DwEz26t0.js";import"./getPseudoElementBounds-C_c7jfrP.js";import"./chevron-down-HCWc7zXS.js";import"./index-7zhNQOzu.js";import"./error-BLwzgwyq.js";import"./BaseCbacBanner-2T4BqL2e.js";import"./makeExternalStore-DHI2g7Fp.js";import"./Tooltip-C_F6s6f6.js";import"./PopoverPopup-DTbuWzuz.js";import"./toNumber-BhWFSzjF.js";import"./useOsdkClient-BtnWy8nv.js";import"./tick-CIUN0mxL.js";import"./DropdownField-CZwYfcs5.js";import"./withOsdkMetrics-CEol_Vfs.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
