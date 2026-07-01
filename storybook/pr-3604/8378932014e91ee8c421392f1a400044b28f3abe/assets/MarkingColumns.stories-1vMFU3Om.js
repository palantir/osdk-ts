import{f as n,j as t}from"./iframe-DJLCfr4f.js";import{O as p}from"./object-table-DWE0ewNP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpagtCf2.js";import"./Table-BqRYEAnU.js";import"./index-D4IE3gNI.js";import"./Dialog-DqVFniHM.js";import"./cross-BxHgtQzu.js";import"./svgIconContainer-RYJm0FsG.js";import"./useBaseUiId-mPnrHgef.js";import"./InternalBackdrop-w6yJm_XK.js";import"./composite-WH4q331F.js";import"./index-Bi6UFZeo.js";import"./index-B9j4W-bs.js";import"./index-BkDZ3uou.js";import"./useEventCallback-CeiGPcLo.js";import"./SkeletonBar-XMLipmdc.js";import"./LoadingCell-tWumEk4H.js";import"./ColumnConfigDialog-C1n0Kil6.js";import"./DraggableList-CM1_kd8U.js";import"./search-Cuy61ubn.js";import"./Input-BGq0Lo3d.js";import"./useControlled-BYFtKtxD.js";import"./Button-C4cfPyjV.js";import"./small-cross-CPLgGFhr.js";import"./ActionButton-CsOf1rhz.js";import"./Checkbox-C3_3E7l4.js";import"./minus-rc1h5CgO.js";import"./tick-BPFArNJC.js";import"./useValueChanged-D-bvF7b5.js";import"./caret-down-63AqjceN.js";import"./CollapsiblePanel-CIts1qZB.js";import"./MultiColumnSortDialog-DOmVpXzF.js";import"./MenuTrigger-CER7BqoT.js";import"./CompositeItem-RoymjbRG.js";import"./ToolbarRootContext-Pl6BjqXh.js";import"./getDisabledMountTransitionStyles-DW6HEoz6.js";import"./getPseudoElementBounds-D3gr2No4.js";import"./chevron-down-BCTFTdUl.js";import"./index-IP7NxQqP.js";import"./error-Ci8d6I91.js";import"./BaseCbacBanner-B5NFfZtp.js";import"./makeExternalStore-5qNfikfb.js";import"./Tooltip-CRcpwnbh.js";import"./PopoverPopup-BYG9acpc.js";import"./toNumber-DQ5HVbip.js";import"./useOsdkClient-BKqb6fak.js";import"./DropdownField-DyK0KsbA.js";import"./withOsdkMetrics-D22DKovY.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
