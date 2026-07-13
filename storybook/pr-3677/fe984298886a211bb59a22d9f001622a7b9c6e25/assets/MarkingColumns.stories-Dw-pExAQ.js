import{f as n,j as t}from"./iframe-D1FLdJFX.js";import{O as p}from"./object-table-Cvl_Mj85.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D8UXNF6a.js";import"./Table-BwYhNSU8.js";import"./index-t-W09BCn.js";import"./Dialog-ChlETMN_.js";import"./cross-DZ07usEw.js";import"./svgIconContainer-C84izAoh.js";import"./useBaseUiId-WRlxQ5RD.js";import"./InternalBackdrop-C2uK2c1c.js";import"./composite-DEyfO-kV.js";import"./index-De2ew-R0.js";import"./index-BwOaDxKo.js";import"./index-BF4GkvSD.js";import"./useEventCallback-DcMpxiOw.js";import"./SkeletonBar-B6kF-Htr.js";import"./LoadingCell-OodQ1hbN.js";import"./ColumnConfigDialog-_1aqA_4a.js";import"./DraggableList-BeLzlZ5l.js";import"./search-iN6UBSCr.js";import"./Input-CYnkefsr.js";import"./useControlled-C4fzz8t5.js";import"./Button-DRVzF9x_.js";import"./small-cross-Cia-QwLh.js";import"./ActionButton-DOxk_dCh.js";import"./Checkbox-CgykbTr-.js";import"./useValueChanged-Be0BFxhW.js";import"./CollapsiblePanel-CTPaoIT9.js";import"./MultiColumnSortDialog-0XdzFvHq.js";import"./MenuTrigger-Ba8dCoE0.js";import"./CompositeItem-suCocTvA.js";import"./ToolbarRootContext-DkkCxU9d.js";import"./getDisabledMountTransitionStyles-Cb3exwMN.js";import"./getPseudoElementBounds-Cm1G6-ea.js";import"./chevron-down-INdNM1cB.js";import"./index-CB-QCOPk.js";import"./error-CKevXRTg.js";import"./BaseCbacBanner-CbYAcmAl.js";import"./makeExternalStore-D4U5VuHp.js";import"./Tooltip-D56YRQVe.js";import"./PopoverPopup-C5fMLfnY.js";import"./toNumber-BGI9RSSt.js";import"./useOsdkClient-B1UTrpdD.js";import"./tick-CPe3jKcL.js";import"./DropdownField-CTVSJb7D.js";import"./withOsdkMetrics-BH7KI_Qj.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
