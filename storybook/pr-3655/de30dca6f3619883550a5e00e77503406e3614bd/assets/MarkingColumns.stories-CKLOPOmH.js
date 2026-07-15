import{f as n,j as t}from"./iframe-DWzCX6-u.js";import{O as p}from"./object-table-B6JBP5lr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bs5f62Fj.js";import"./Table-CAvSA7OO.js";import"./index-olyefH4j.js";import"./Dialog-CSciZBIA.js";import"./cross-Ba2KcsSF.js";import"./svgIconContainer-Cei3XUPp.js";import"./useBaseUiId-DwbVetPl.js";import"./InternalBackdrop-B3wubLEm.js";import"./composite-Bu4Kb6op.js";import"./index-BweUTSSM.js";import"./index-BxBdE1lP.js";import"./index-CFxsS7p4.js";import"./useEventCallback-dqR8Kvrx.js";import"./SkeletonBar-DCfUsF2R.js";import"./LoadingCell-B4q5uFKe.js";import"./ColumnConfigDialog-v97jH0hL.js";import"./DraggableList-hh95Po1l.js";import"./search-B_4Qd157.js";import"./Input-DU8RlMQy.js";import"./useControlled-DZa9xgJF.js";import"./Button-CCcd_o0O.js";import"./small-cross-RYPdEO1J.js";import"./ActionButton-jZLIATZw.js";import"./Checkbox-DO2WI8HQ.js";import"./useValueChanged-DXNrg4b0.js";import"./CollapsiblePanel-9jMHH2lT.js";import"./MultiColumnSortDialog-CSze0t6c.js";import"./MenuTrigger-CH5Sn9K_.js";import"./CompositeItem-DIcJ9YLb.js";import"./ToolbarRootContext-IwK3YXju.js";import"./getDisabledMountTransitionStyles-CFKQxgrf.js";import"./getPseudoElementBounds-DBe-hi8x.js";import"./chevron-down-CXhUHAc-.js";import"./index-BULJ_7AJ.js";import"./error-FXATP8Qk.js";import"./BaseCbacBanner-RA7hfInc.js";import"./makeExternalStore-DSrWS5Uq.js";import"./Tooltip-O8od385D.js";import"./PopoverPopup-PsSoVdzH.js";import"./toNumber-BFHe0Rjl.js";import"./useOsdkClient-CpwJLGE-.js";import"./tick-JiDtWQVc.js";import"./DropdownField-DyhBRemz.js";import"./withOsdkMetrics-DoMBRpSv.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
