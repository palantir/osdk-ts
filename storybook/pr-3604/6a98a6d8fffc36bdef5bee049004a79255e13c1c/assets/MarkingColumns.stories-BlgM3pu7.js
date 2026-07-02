import{f as n,j as t}from"./iframe-B03pBIP_.js";import{O as p}from"./object-table-COZYArnj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gyb1dP88.js";import"./Table-CukZ8CL8.js";import"./index-DOlmMWJv.js";import"./Dialog-2xLShn-C.js";import"./cross-Cf9O7ZTc.js";import"./svgIconContainer-CBDwWJ-g.js";import"./useBaseUiId-gsDYtBVr.js";import"./InternalBackdrop-yl_keGNd.js";import"./composite-DrF6Nb3j.js";import"./index-DS4A6C0_.js";import"./index-D7XpCzA_.js";import"./index-Fe0UwQG3.js";import"./useEventCallback-DdtCXYoF.js";import"./SkeletonBar-BIi6dbxy.js";import"./LoadingCell-26omNO3o.js";import"./ColumnConfigDialog-Do9NN0wU.js";import"./DraggableList-C5lhleEj.js";import"./search-D9VwIbx3.js";import"./Input-B1-Pqqi2.js";import"./useControlled-CyF-1we-.js";import"./Button-BZvMcfYH.js";import"./small-cross-UCu68clh.js";import"./ActionButton-B0i4YA5l.js";import"./Checkbox-aN60FYjN.js";import"./minus-CTFBdCT0.js";import"./tick-DsMeXgb8.js";import"./useValueChanged-DFriZxiv.js";import"./caret-down-vOG65R0M.js";import"./CollapsiblePanel-CpThTnNv.js";import"./MultiColumnSortDialog-vOy4jjpt.js";import"./MenuTrigger-CG7KL_3-.js";import"./CompositeItem-BqysQxF3.js";import"./ToolbarRootContext-t8zgJmVn.js";import"./getDisabledMountTransitionStyles-KwlYyPco.js";import"./getPseudoElementBounds-CWxm2NDI.js";import"./chevron-down-BlE15hp5.js";import"./index-BJv_deJk.js";import"./error-C-cZSYMq.js";import"./BaseCbacBanner-DnqlpnKz.js";import"./makeExternalStore-C-cVcDZS.js";import"./Tooltip-h4wqg_gN.js";import"./PopoverPopup-DiJrps8x.js";import"./toNumber-CORI8LBd.js";import"./useOsdkClient-BRAPKBmD.js";import"./DropdownField-B5OldI9i.js";import"./withOsdkMetrics-tgdMVltJ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
