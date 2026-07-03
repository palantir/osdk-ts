import{f as n,j as t}from"./iframe-CcCf_wKO.js";import{O as p}from"./object-table-D-UOMoTc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B3Lqtz2W.js";import"./Table-BqIfJMJJ.js";import"./index-CxR8oD69.js";import"./Dialog-BMjN9cJ0.js";import"./cross-B3pT6_uV.js";import"./svgIconContainer-B-gYQYPR.js";import"./useBaseUiId-Dgwp8Euj.js";import"./InternalBackdrop-Cp7-m9eb.js";import"./composite-BFPvVuIt.js";import"./index-ZU0gYkdk.js";import"./index-DHmwyqoP.js";import"./index-DClU7-3g.js";import"./useEventCallback-DvMB_nLu.js";import"./SkeletonBar-DUYp2iwo.js";import"./LoadingCell-jC9yOoHk.js";import"./ColumnConfigDialog-Bp4M_zFO.js";import"./DraggableList-D4scTJXW.js";import"./search-rcT4YYai.js";import"./Input-CMcFL7wW.js";import"./useControlled-2omoOCnz.js";import"./Button-DjvOhLp5.js";import"./small-cross-Cz6lQP2o.js";import"./ActionButton-CotI2LC3.js";import"./Checkbox-BKJrIzcx.js";import"./useValueChanged-DAyStsyg.js";import"./CollapsiblePanel-JYDO9LuS.js";import"./MultiColumnSortDialog-DrqZ7b4y.js";import"./MenuTrigger-B9YxGt5v.js";import"./CompositeItem-BMz51-mh.js";import"./ToolbarRootContext-BaxbK6xh.js";import"./getDisabledMountTransitionStyles-hPvpc5cL.js";import"./getPseudoElementBounds-DJ2nR5x9.js";import"./chevron-down-34yZBxnl.js";import"./index-BAjOAchP.js";import"./error-B3ug_ULp.js";import"./BaseCbacBanner-Bl0f4Nxf.js";import"./makeExternalStore-B8YzKIqE.js";import"./Tooltip-CqdSfWQ2.js";import"./PopoverPopup--PKDnL30.js";import"./toNumber-cYum0i0C.js";import"./useOsdkClient-DZHA5AWe.js";import"./tick-r0KBDd3G.js";import"./DropdownField-BJ3NhRHw.js";import"./withOsdkMetrics-MsbOjnAt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
