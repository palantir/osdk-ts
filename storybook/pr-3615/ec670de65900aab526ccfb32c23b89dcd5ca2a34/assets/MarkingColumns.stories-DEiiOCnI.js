import{f as n,j as t}from"./iframe-D6Qvt5o6.js";import{O as p}from"./object-table-Clx0vu0Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-QAaNPy0I.js";import"./Table-Do8kD29r.js";import"./index-C-eYbqq8.js";import"./Dialog-kHTXB39K.js";import"./cross-G0YOU9UV.js";import"./svgIconContainer-CpbVpwSo.js";import"./useBaseUiId-DjH16UDN.js";import"./InternalBackdrop-BUDWqSzP.js";import"./composite-BC5bcyjw.js";import"./index-BdN5mkbW.js";import"./index-DVBCImRO.js";import"./index-C-DxhCBl.js";import"./useEventCallback-B5SJa53v.js";import"./SkeletonBar-BG0hY9XC.js";import"./LoadingCell-cNqExAsD.js";import"./ColumnConfigDialog-CnX-spGF.js";import"./DraggableList-CKkFtNxd.js";import"./search-Bc8iOYXo.js";import"./Input-DBEbfhOm.js";import"./useControlled-DLFDxyY4.js";import"./Button-Cg2spKPD.js";import"./small-cross-rvQjYgDJ.js";import"./ActionButton-C73QVJ7G.js";import"./Checkbox-BJxDIEdo.js";import"./minus-DxWHAqVO.js";import"./tick-D1E41VPT.js";import"./useValueChanged-C4Il4jlf.js";import"./caret-down-DUqFqFU8.js";import"./CollapsiblePanel-D0NgPst4.js";import"./MultiColumnSortDialog-1s1Q4idn.js";import"./MenuTrigger-LKFE2fuc.js";import"./CompositeItem-D_5JtvMI.js";import"./ToolbarRootContext-Db9FG9FP.js";import"./getDisabledMountTransitionStyles-D_RUFlGu.js";import"./getPseudoElementBounds-DYmWQeY5.js";import"./chevron-down-CD4LGGid.js";import"./index-C-IH5MZr.js";import"./error-CekgsEbM.js";import"./BaseCbacBanner-D9yFkYoH.js";import"./makeExternalStore-DrM1RPrH.js";import"./Tooltip-D0afHLEG.js";import"./PopoverPopup-DWO8SumQ.js";import"./toNumber-BkCwvFvO.js";import"./useOsdkClient-BBYWIzQJ.js";import"./DropdownField-Dbm78TmP.js";import"./withOsdkMetrics-BwVxwrKk.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
