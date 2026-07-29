import{f as n,j as t}from"./iframe-Ig-Xmll2.js";import{O as p}from"./object-table-Cr0GQJ2C.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-0VGYt_BV.js";import"./Table-B3FF3qld.js";import"./index-BCdgtame.js";import"./Dialog-T8Zm1O8v.js";import"./cross-C9ArTj8m.js";import"./svgIconContainer-ClbntW1R.js";import"./useBaseUiId-D_-XLe0q.js";import"./InternalBackdrop-D6IsaRIN.js";import"./composite-CsiGE-b_.js";import"./index-Bc2nlUdm.js";import"./index-Bx2oSgam.js";import"./index-CjFIBlX3.js";import"./useEventCallback-DSDc1oFK.js";import"./SkeletonBar-C3XTeZ46.js";import"./LoadingCell-tykv-HS6.js";import"./ColumnConfigDialog-Bma-ECGc.js";import"./DraggableList-Bb_dp7Tw.js";import"./Input-DW56tUpB.js";import"./useControlled-CuXQBYHc.js";import"./Button-6KLFtYXn.js";import"./small-cross-U47ROJWI.js";import"./ActionButton-BsXb54vI.js";import"./Checkbox-CGGegHvE.js";import"./minus-BwDPojim.js";import"./useValueChanged-CGqNnArl.js";import"./caret-down-DUu5ZHLW.js";import"./CollapsiblePanel-CI2MScOP.js";import"./MultiColumnSortDialog-B6cCdnJD.js";import"./MenuTrigger-_wr2fsAh.js";import"./CompositeItem-CYLI_r_6.js";import"./ToolbarRootContext-DVZVGJUi.js";import"./getDisabledMountTransitionStyles-C-Wi3CK_.js";import"./getPseudoElementBounds-CPBP56Xn.js";import"./chevron-down-CufK2Y1w.js";import"./index-0LEg8Q4R.js";import"./error-CtMCeKqs.js";import"./BaseCbacBanner-BRe-_N3l.js";import"./makeExternalStore-COy1l2qQ.js";import"./Tooltip-C5LpRcf0.js";import"./PopoverPopup-BrgXq2w7.js";import"./toNumber-KSMdcaqe.js";import"./useOsdkClient-DRHTB-Mb.js";import"./DropdownField-CJAbkcAm.js";import"./withOsdkMetrics-BDMwgDqk.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
