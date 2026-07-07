import{f as n,j as t}from"./iframe-jd4Px1O2.js";import{O as p}from"./object-table-DTeZL4qc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DIuEQ6t2.js";import"./Table-DeZfOHK_.js";import"./index-CsSiLkax.js";import"./Dialog-JBB26kLX.js";import"./cross-BxImFyCX.js";import"./svgIconContainer-CpUasSR5.js";import"./useBaseUiId-R1vsz3eJ.js";import"./InternalBackdrop-Ca2s__Al.js";import"./composite--DckC5o-.js";import"./index-CcCjcq9f.js";import"./index-D9a7isYl.js";import"./index-DhruHuJ4.js";import"./useEventCallback-D7t-9upw.js";import"./SkeletonBar-V9I2vvpe.js";import"./LoadingCell-C_nEeDvW.js";import"./ColumnConfigDialog-Bk6MqSjW.js";import"./DraggableList-DPGu3_OC.js";import"./search-CrZw4GtA.js";import"./Input-DKWFM1Jz.js";import"./useControlled-B8hu7sVk.js";import"./Button-DYyLfOFR.js";import"./small-cross-BvB9NA7d.js";import"./ActionButton-C3w2KboU.js";import"./Checkbox-D03GD9nt.js";import"./useValueChanged-Bjp3YQ_4.js";import"./CollapsiblePanel-CwN9Kpyg.js";import"./MultiColumnSortDialog-DtuoLHTf.js";import"./MenuTrigger-D2SQIqRy.js";import"./CompositeItem-BJx7uuXs.js";import"./ToolbarRootContext-CkIkhTCP.js";import"./getDisabledMountTransitionStyles-Cu-Om2FC.js";import"./getPseudoElementBounds-ClOr-rd7.js";import"./chevron-down-Dk2idsm5.js";import"./index-BI00Z6TB.js";import"./error-DN-1RvPM.js";import"./BaseCbacBanner-Cmo1br1d.js";import"./makeExternalStore-Xeg4gZrq.js";import"./Tooltip-CAfweb9S.js";import"./PopoverPopup-DXAblba5.js";import"./toNumber-0OZ3TLUk.js";import"./useOsdkClient-C17UYkCK.js";import"./tick-CVX6QK4V.js";import"./DropdownField-CDTPJrH2.js";import"./withOsdkMetrics-MuC8WW3b.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
