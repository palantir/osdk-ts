import{f as n,j as t}from"./iframe-DmCw4giF.js";import{O as p}from"./object-table-DkGVq2zd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BqMEmH-P.js";import"./Table-CwyQpoEA.js";import"./index-By5PjpkV.js";import"./Dialog-CMvNXpmm.js";import"./cross-C5gUbpJ8.js";import"./svgIconContainer-BGxGx4oi.js";import"./useBaseUiId-CMgGmprv.js";import"./InternalBackdrop-CTOyXC2J.js";import"./composite-SBWrYybR.js";import"./index-D7OuGC6M.js";import"./index-Cl_9RNwe.js";import"./index-DMn3axbQ.js";import"./useEventCallback-VtqApLju.js";import"./SkeletonBar-B0SBXBFN.js";import"./LoadingCell-BHNKzm22.js";import"./ColumnConfigDialog-Dj08jxeR.js";import"./DraggableList-I411jCsC.js";import"./search-BX5NV_IZ.js";import"./Input-D0tfRr17.js";import"./useControlled-CUsv9bVr.js";import"./Button-Bg11yYPT.js";import"./small-cross-CctzTCfJ.js";import"./ActionButton-CYsmhCxj.js";import"./Checkbox-CviTf8nv.js";import"./useValueChanged-L-C_U2yt.js";import"./CollapsiblePanel-dHNnScII.js";import"./MultiColumnSortDialog-fveWjSG6.js";import"./MenuTrigger-BFGZOH9z.js";import"./CompositeItem-CFe_vHTh.js";import"./ToolbarRootContext-DOoHomck.js";import"./getDisabledMountTransitionStyles-C-4maSRy.js";import"./getPseudoElementBounds-BqgYhusO.js";import"./chevron-down-CCFUjBzE.js";import"./index-DERODYr7.js";import"./error-BVtxD93c.js";import"./BaseCbacBanner-BFZyY8-L.js";import"./makeExternalStore-CTtM4SD7.js";import"./Tooltip-D_rqv0p4.js";import"./PopoverPopup-CVWJXKNo.js";import"./toNumber-Wq34DRdH.js";import"./useOsdkClient-DKGNHqRc.js";import"./tick-Cjy0B6im.js";import"./DropdownField-BKpFWQXk.js";import"./withOsdkMetrics-CQ_rVNLy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
