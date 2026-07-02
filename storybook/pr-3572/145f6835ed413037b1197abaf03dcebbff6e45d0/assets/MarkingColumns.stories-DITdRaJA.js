import{f as n,j as t}from"./iframe-CF2-Sj3u.js";import{O as p}from"./object-table-D-9dfsCF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGiL_0YC.js";import"./Table-D5cZPvIc.js";import"./index-Di6vk80_.js";import"./Dialog-DneW6gao.js";import"./cross-DovANZKV.js";import"./svgIconContainer-Eu_OnahF.js";import"./useBaseUiId-DnMjxbKf.js";import"./InternalBackdrop-Dc8B1tjA.js";import"./composite-ozsOFMJN.js";import"./index-B1Ce7KrJ.js";import"./index-DbSzIC9m.js";import"./index-Q0yV-jk7.js";import"./useEventCallback-CR7__PSV.js";import"./SkeletonBar-DNrk08YG.js";import"./LoadingCell-BrDcRP63.js";import"./ColumnConfigDialog-BJjBF2Xa.js";import"./DraggableList-D3frEl9E.js";import"./search-CO3O3W7D.js";import"./Input-DNRQ_uyR.js";import"./useControlled-C2elAlNO.js";import"./Button-D2M1A0dK.js";import"./small-cross-BEhouiho.js";import"./ActionButton-cYrzvlHk.js";import"./Checkbox-DZ7FSXRm.js";import"./minus-C2Q4EcYx.js";import"./tick-Dngje7AH.js";import"./useValueChanged-Blvtj1na.js";import"./caret-down-D8GRaOiX.js";import"./CollapsiblePanel-D8mD9U6B.js";import"./MultiColumnSortDialog-D0GW8XBQ.js";import"./MenuTrigger-Circ_f3U.js";import"./CompositeItem-Dtsy8NtD.js";import"./ToolbarRootContext-BO6LBivU.js";import"./getDisabledMountTransitionStyles-BT30iXD2.js";import"./getPseudoElementBounds-BSP39vYn.js";import"./chevron-down-CC6GeuYy.js";import"./index-DdqxCR7f.js";import"./error-C2rzVhaz.js";import"./BaseCbacBanner-B36dg4_6.js";import"./makeExternalStore-CjotNSjE.js";import"./Tooltip-CRbx97MV.js";import"./PopoverPopup-1OuglnAz.js";import"./toNumber-DOnmS6H9.js";import"./useOsdkClient-Cbyr9xhF.js";import"./DropdownField-B8snf_lP.js";import"./withOsdkMetrics-B_gFNDRY.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
