import{f as n,j as t}from"./iframe-LgxWIvAh.js";import{O as p}from"./object-table-BFg660tq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKTxyjMX.js";import"./Table-hsiDr8Iu.js";import"./index-jVQz_y1l.js";import"./Dialog-BsQqfM1P.js";import"./cross-BmrQP5kf.js";import"./svgIconContainer-C4LlDx6S.js";import"./useBaseUiId-B0JyaV1q.js";import"./InternalBackdrop-BqNyqvBG.js";import"./composite-X3e3esOg.js";import"./index-6NU5zT2x.js";import"./index-aRK4Hsgt.js";import"./index-C3CwG81C.js";import"./useEventCallback-CRWCCZfC.js";import"./SkeletonBar-zVCwDn-w.js";import"./LoadingCell-GecFMksB.js";import"./ColumnConfigDialog-CHpi_f0c.js";import"./DraggableList-DhFW50Iy.js";import"./search-QryvcXV_.js";import"./Input-DSuaLQwi.js";import"./useControlled-BnUeF2hJ.js";import"./Button-DCWDV2eA.js";import"./small-cross-C_V7eeNC.js";import"./ActionButton-rYHZ04kC.js";import"./Checkbox-avMRRqVL.js";import"./minus-DyqblHDT.js";import"./tick-BCtGjsjJ.js";import"./useValueChanged-D8AI1hQb.js";import"./caret-down-BLQIBKY7.js";import"./CollapsiblePanel-A2oh8V26.js";import"./MultiColumnSortDialog-BsFmexQw.js";import"./MenuTrigger-DmK_fzSi.js";import"./CompositeItem-DotNC9t1.js";import"./ToolbarRootContext-DgJAa3hM.js";import"./getDisabledMountTransitionStyles-vdDCKDAv.js";import"./getPseudoElementBounds-DwkHoVxt.js";import"./chevron-down-DUJVW_to.js";import"./index-DPpg187b.js";import"./error-DiWpnJ3I.js";import"./BaseCbacBanner-CQ--Jo3U.js";import"./makeExternalStore-Bz-MMEvb.js";import"./Tooltip-VZAJDVgp.js";import"./PopoverPopup-R9G0vBQ6.js";import"./toNumber-D-rou-je.js";import"./useOsdkClient-C3KWVWRV.js";import"./DropdownField-CTNk2jql.js";import"./withOsdkMetrics-Bb7B8tU3.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
