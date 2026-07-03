import{f as n,j as t}from"./iframe-BiAp7qlL.js";import{O as p}from"./object-table-D8xtoIyK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-JVo6734q.js";import"./Table-B80EZTGr.js";import"./index-CQcFOWil.js";import"./Dialog-CM8GlOfz.js";import"./cross-BOGPXBcz.js";import"./svgIconContainer-COEsHZDV.js";import"./useBaseUiId-CjAQKvu1.js";import"./InternalBackdrop-BzKJjLof.js";import"./composite-p19Fe2tx.js";import"./index-BqaYgD8L.js";import"./index-D0zp2Plk.js";import"./index-yrFjgCRh.js";import"./useEventCallback-CkBg-6aA.js";import"./SkeletonBar-Dq3M7K3u.js";import"./LoadingCell-D6o9NgZ0.js";import"./ColumnConfigDialog-BiQuAFEq.js";import"./DraggableList-CNxive6o.js";import"./search-BYg1Y9fB.js";import"./Input-C8B9L3eu.js";import"./useControlled-B36afOR9.js";import"./Button-Cy-uz3uQ.js";import"./small-cross-tCMYz_-P.js";import"./ActionButton-Bq9ssLJ4.js";import"./Checkbox-CfiBipi9.js";import"./minus-fB-_tNDC.js";import"./tick-Dt2L0mnJ.js";import"./useValueChanged-DdifQwZ2.js";import"./caret-down-BUPe1ViV.js";import"./CollapsiblePanel-jdlracNY.js";import"./MultiColumnSortDialog-CyWN-Ds5.js";import"./MenuTrigger-zPXSAXQm.js";import"./CompositeItem-CI_PM_Hq.js";import"./ToolbarRootContext-CcrZckfO.js";import"./getDisabledMountTransitionStyles-yCMseeK4.js";import"./getPseudoElementBounds-C_QP4e6o.js";import"./chevron-down-5c5dpeJJ.js";import"./index-B_GaAJkw.js";import"./error-uDToQwnv.js";import"./BaseCbacBanner-d-_BLKbx.js";import"./makeExternalStore-BD9yZY-5.js";import"./Tooltip-ChAC9gbR.js";import"./PopoverPopup-Ba504MJH.js";import"./toNumber-B82BrZRW.js";import"./useOsdkClient-BBcVhbC6.js";import"./DropdownField-CM0pet39.js";import"./withOsdkMetrics-Bq8nKD0e.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
