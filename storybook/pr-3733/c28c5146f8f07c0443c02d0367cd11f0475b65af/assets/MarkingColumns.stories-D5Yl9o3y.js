import{f as n,j as t}from"./iframe-CgBhvtiX.js";import{O as p}from"./object-table-bZItLYAc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ce-3X9_r.js";import"./Table-BmZog_gj.js";import"./index-CErsZJsL.js";import"./Dialog-B0g1ACpB.js";import"./cross-J-95C9iK.js";import"./svgIconContainer-DoRBy_eO.js";import"./useBaseUiId-Cl60-lLj.js";import"./InternalBackdrop-C_6iD2Ev.js";import"./composite-BmhUh40j.js";import"./index-B2xVVrZs.js";import"./index-DamNHVTk.js";import"./index-CppQxuXC.js";import"./useEventCallback-BOLEsii5.js";import"./SkeletonBar-DkKpNRsz.js";import"./LoadingCell-CgfA-2m8.js";import"./ColumnConfigDialog-CsIhmQYf.js";import"./DraggableList-Cbf_AN4w.js";import"./search-ByPt1vVP.js";import"./Input-mWhgRxxc.js";import"./useControlled-C73eTAWd.js";import"./Button-BWJv3Y7c.js";import"./small-cross-DM-Yp6Cv.js";import"./ActionButton-CIgVfSDI.js";import"./Checkbox-DtE7H5Qr.js";import"./useValueChanged-DM2HHQPM.js";import"./CollapsiblePanel-Caj0pBe9.js";import"./MultiColumnSortDialog-jn0dB4Wx.js";import"./MenuTrigger-Cl2WUI2X.js";import"./CompositeItem-w3oM7rnI.js";import"./ToolbarRootContext-C-CsPSkf.js";import"./getDisabledMountTransitionStyles-0xfwTzhf.js";import"./getPseudoElementBounds-Cn6CFhh0.js";import"./chevron-down-jybOUjLp.js";import"./index-DN_8H0Vb.js";import"./error-BhaEYYIw.js";import"./BaseCbacBanner-Bsbq8HzN.js";import"./makeExternalStore-CWSz6Stw.js";import"./Tooltip-DI61WzRq.js";import"./PopoverPopup-C5Chc9oD.js";import"./toNumber-C2fvWlMA.js";import"./useOsdkClient-C3DNJN1r.js";import"./tick-CSxxZ-Oy.js";import"./DropdownField-DVNda91q.js";import"./withOsdkMetrics-BAt_kpFa.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
