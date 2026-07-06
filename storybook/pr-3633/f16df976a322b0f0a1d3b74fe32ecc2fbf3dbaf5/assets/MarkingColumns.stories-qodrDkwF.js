import{f as n,j as t}from"./iframe-DfJhIhu_.js";import{O as p}from"./object-table-xCAVpKIb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BiiVQhZ9.js";import"./Table-CUyR3W18.js";import"./index-D_m2ASIi.js";import"./Dialog-CF0BYHyx.js";import"./cross-B1BuAWDS.js";import"./svgIconContainer-qAimi4Lj.js";import"./useBaseUiId-BMs10Hh5.js";import"./InternalBackdrop-CyXJGG4w.js";import"./composite-C_3MGNYL.js";import"./index-D3S5E9oN.js";import"./index-Wqk8veWD.js";import"./index-DuwB9olH.js";import"./useEventCallback-C0OTycXo.js";import"./SkeletonBar-DbzNz_L0.js";import"./LoadingCell-BGxW2zIF.js";import"./ColumnConfigDialog-BRZzOBO1.js";import"./DraggableList-lIji_oDo.js";import"./search-BpqAmkpd.js";import"./Input-BHEqfEgo.js";import"./useControlled-Bo4-eIoG.js";import"./Button-BjHErpMY.js";import"./small-cross-CXw_NTFM.js";import"./ActionButton-Cg4BDK05.js";import"./Checkbox-91ZDLkca.js";import"./useValueChanged-Dk18M5aN.js";import"./CollapsiblePanel-B0C4JoL_.js";import"./MultiColumnSortDialog-BgItkpK4.js";import"./MenuTrigger-CrWb-69y.js";import"./CompositeItem-C2KYvISR.js";import"./ToolbarRootContext-MU20rXUI.js";import"./getDisabledMountTransitionStyles-C9V3hcRU.js";import"./getPseudoElementBounds-DVf_ZVX9.js";import"./chevron-down-COgGFCkV.js";import"./index-DJPcQfe5.js";import"./error-CrZDmH0I.js";import"./BaseCbacBanner-DL7xhm3h.js";import"./makeExternalStore-DMymaRlN.js";import"./Tooltip-D4n99nQH.js";import"./PopoverPopup-Baz4Wv0H.js";import"./toNumber-Dqd6pr--.js";import"./useOsdkClient-BxNcnXUU.js";import"./tick-BsCI-nA_.js";import"./DropdownField-Dg7RQ9OF.js";import"./withOsdkMetrics-iLNwKQ_p.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
