import{f as n,j as t}from"./iframe-Cx4Ki0JG.js";import{O as p}from"./object-table-KIYmD8vF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D2p_ObaP.js";import"./Table-DHg8T9nw.js";import"./index-HnQbfWf4.js";import"./Dialog-Dp3ul1Sg.js";import"./cross-DY4qmy__.js";import"./svgIconContainer-CsN3cDK3.js";import"./useBaseUiId-BUi4NF8Q.js";import"./InternalBackdrop-CRD_XdlA.js";import"./composite-B6vW5PwB.js";import"./index-BpfDO8te.js";import"./index-BqpatvoO.js";import"./index-DSOvRsd-.js";import"./useEventCallback-CFSMqNt0.js";import"./SkeletonBar-CnL4ia99.js";import"./LoadingCell-Bu6rJPe8.js";import"./ColumnConfigDialog-CllSb7SU.js";import"./DraggableList-C7jxuUyU.js";import"./search-epSbqOXw.js";import"./Input-DV3d6RQh.js";import"./useControlled-D7I_6zSS.js";import"./Button-CEafUq7E.js";import"./small-cross-C8hl4Qtf.js";import"./ActionButton-DdbmGvNS.js";import"./Checkbox-Cwq_CA04.js";import"./minus-a4vDQSG5.js";import"./tick-Db3KzbVe.js";import"./useValueChanged-Bx_jvtHU.js";import"./caret-down-DiFr3ifQ.js";import"./CollapsiblePanel-DDXTYfe5.js";import"./MultiColumnSortDialog-u8ImQsb0.js";import"./MenuTrigger-DXiN1CCF.js";import"./CompositeItem-C8Jrf0jR.js";import"./ToolbarRootContext-BirgvTm4.js";import"./getDisabledMountTransitionStyles-DZe9SMT8.js";import"./getPseudoElementBounds-BMfQuLdy.js";import"./chevron-down-CTViWNjd.js";import"./index-CdXFAStN.js";import"./error-DpG7omXV.js";import"./BaseCbacBanner-DTeY0Vse.js";import"./makeExternalStore-CWOgYEOJ.js";import"./Tooltip-BmniHvpm.js";import"./PopoverPopup-7_Mcfitl.js";import"./toNumber-Cyvuaxgc.js";import"./useOsdkClient-DCXVh-Td.js";import"./DropdownField-BwCLgZR6.js";import"./withOsdkMetrics-neHI8iGf.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
