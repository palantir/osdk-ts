import{f as n,j as t}from"./iframe-BBD6bIkP.js";import{O as p}from"./object-table-KyJmNTxr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DmRY_fIz.js";import"./Table-B2PPqS10.js";import"./index-zvr3wSif.js";import"./Dialog-Ca-ezjU2.js";import"./cross-CAbGq_ii.js";import"./svgIconContainer-B0U1dhGr.js";import"./useBaseUiId-CV9f4UcV.js";import"./InternalBackdrop-VV30i2fe.js";import"./composite-C1CC07n3.js";import"./index-D7MDcbvr.js";import"./index-CT9dnj7o.js";import"./index-CHkr6j26.js";import"./useEventCallback-kS3boXX6.js";import"./SkeletonBar-C6MPAFXs.js";import"./LoadingCell-BmMbbjl_.js";import"./ColumnConfigDialog-CzjcAr8O.js";import"./DraggableList-BjS2Nni4.js";import"./search-DrXL6KTp.js";import"./Input-CDFTBGX_.js";import"./useControlled-sz1tLZDG.js";import"./Button-CRkQd3Zo.js";import"./small-cross-DLE-CoMl.js";import"./ActionButton-B_y6ZBGx.js";import"./Checkbox-D3Cx23Qs.js";import"./useValueChanged-Bl0zILOm.js";import"./CollapsiblePanel-CpSxTzaa.js";import"./MultiColumnSortDialog-C5MZU-mZ.js";import"./MenuTrigger-L57rukAE.js";import"./CompositeItem-BSBnrNws.js";import"./ToolbarRootContext-DYiYc1pI.js";import"./getDisabledMountTransitionStyles-B-BMcVLv.js";import"./getPseudoElementBounds-BF-t2F8N.js";import"./chevron-down-COa_6JEf.js";import"./index-BKxxO53m.js";import"./error-D4sKUVrH.js";import"./BaseCbacBanner-CT4gemT-.js";import"./makeExternalStore-G3EdfFZw.js";import"./Tooltip-CsPoeVsb.js";import"./PopoverPopup-SK-0VeN9.js";import"./toNumber-COJYrtBw.js";import"./useOsdkClient-XNfrk1ch.js";import"./tick-CAocI1zf.js";import"./DropdownField-orAo1YNe.js";import"./withOsdkMetrics-BEG7gvuB.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
