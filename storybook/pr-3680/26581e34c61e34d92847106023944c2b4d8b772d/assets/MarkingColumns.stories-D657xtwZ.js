import{f as n,j as t}from"./iframe-CTWtvW7G.js";import{O as p}from"./object-table-B_3mREKc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-1oxodiua.js";import"./Table-BdSkWfLG.js";import"./index-B5ZJn9Gm.js";import"./Dialog-BHpsFgur.js";import"./cross-DemFdpt3.js";import"./svgIconContainer-BmXJ4UZQ.js";import"./useBaseUiId-DaDRlDBy.js";import"./InternalBackdrop-Dsy70PHm.js";import"./composite-ChO4tO4T.js";import"./index-C7xMDZy7.js";import"./index-B-Gs1YNk.js";import"./index-BpiC_Az2.js";import"./useEventCallback-BUjhumMB.js";import"./SkeletonBar-2J5ZlZqG.js";import"./LoadingCell-BmFeLSi-.js";import"./ColumnConfigDialog-DaQ9CGwC.js";import"./DraggableList-dI-Uagza.js";import"./search-f_eDtzuq.js";import"./Input-Cyrr3EQP.js";import"./useControlled-Bb_4e2wz.js";import"./Button-CNLRkRTL.js";import"./small-cross-DGNbASsx.js";import"./ActionButton-CTmSX-Ar.js";import"./Checkbox-BoUG1HTj.js";import"./useValueChanged-BP2D4ODY.js";import"./CollapsiblePanel-BUNLf30L.js";import"./MultiColumnSortDialog-CgAFTARu.js";import"./MenuTrigger-CH7gRLYS.js";import"./CompositeItem-ByNmV234.js";import"./ToolbarRootContext-B4vVlVeR.js";import"./getDisabledMountTransitionStyles-memSlMK7.js";import"./getPseudoElementBounds-BgtJ_nId.js";import"./chevron-down-BEj-V-2_.js";import"./index-CFiZgKoS.js";import"./error-C-PnV0Ll.js";import"./BaseCbacBanner-B3MmGPxJ.js";import"./makeExternalStore-DSL-ADyx.js";import"./Tooltip-BJ2MNQOV.js";import"./PopoverPopup-BrAFaZYq.js";import"./toNumber-DuoDGiJo.js";import"./useOsdkClient-BiL_1Cwd.js";import"./tick-BugpwW7l.js";import"./DropdownField-CDHGj596.js";import"./withOsdkMetrics-B9XS-cmH.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
