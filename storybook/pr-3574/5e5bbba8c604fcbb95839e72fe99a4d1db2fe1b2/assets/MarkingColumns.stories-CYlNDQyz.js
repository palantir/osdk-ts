import{f as n,j as t}from"./iframe-ze6JErKo.js";import{O as p}from"./object-table-BgCCvQQ0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DS_iGLkb.js";import"./Table-B1zjLOvS.js";import"./index-B5u6Brpy.js";import"./Dialog-Dk8NRl8I.js";import"./cross-DI5j8eLi.js";import"./svgIconContainer-DGCjPM9q.js";import"./useBaseUiId-B5MU88id.js";import"./InternalBackdrop-BqUOZoSz.js";import"./composite-BEE0FYVF.js";import"./index-DAQPWFr2.js";import"./index-DNJB-usE.js";import"./index-DDHYdtsp.js";import"./useEventCallback-Cl1lsXCn.js";import"./SkeletonBar-36ndc2Kj.js";import"./LoadingCell-DT-6giSe.js";import"./ColumnConfigDialog-DkrRXiUn.js";import"./DraggableList-BwAdZC5p.js";import"./search-DO35-Aev.js";import"./Input-Diw1Icia.js";import"./useControlled-D9slw4Au.js";import"./Button-CJ3GEhv1.js";import"./small-cross-Dq5ZHHkJ.js";import"./ActionButton-C-YYuFJL.js";import"./Checkbox-yiyJgpxi.js";import"./minus-YdC1t4ce.js";import"./tick-BLuY4AKA.js";import"./useValueChanged-AtGYcy8N.js";import"./caret-down-Cku-i4_H.js";import"./CollapsiblePanel-CIxLrmeq.js";import"./MultiColumnSortDialog-BHTrvpco.js";import"./MenuTrigger-7-RX-Nb_.js";import"./CompositeItem-Bhm16n8y.js";import"./ToolbarRootContext-CBfSL9vs.js";import"./getDisabledMountTransitionStyles-TFq9cCGI.js";import"./getPseudoElementBounds-CpuTFzGd.js";import"./chevron-down-AMA2AExy.js";import"./index-gyv_Co2r.js";import"./error-CQ5KiYGe.js";import"./BaseCbacBanner-B_FyKVrz.js";import"./makeExternalStore-CgPxTind.js";import"./Tooltip-DD1c56L-.js";import"./PopoverPopup-wKVNT4CS.js";import"./toNumber-fCkSoydb.js";import"./useOsdkClient-CfdX_RCJ.js";import"./DropdownField-BDN9vrPx.js";import"./withOsdkMetrics-C0_tSz5A.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
