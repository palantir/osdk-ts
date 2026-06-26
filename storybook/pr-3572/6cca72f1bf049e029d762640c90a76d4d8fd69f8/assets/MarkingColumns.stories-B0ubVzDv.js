import{f as n,j as t}from"./iframe-D5-_jy09.js";import{O as p}from"./object-table-DC4BzyvF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgvIWr_I.js";import"./Table-WTwKWCX_.js";import"./index-CLREQx8T.js";import"./Dialog-CCjh6x82.js";import"./cross-B1lOTmXy.js";import"./svgIconContainer-CwIkbtev.js";import"./useBaseUiId-BGyHAtoE.js";import"./InternalBackdrop-ZurCKQUO.js";import"./composite-Boyez49U.js";import"./index-D3tS8aAn.js";import"./index-8XF68AT5.js";import"./index-BNgD58P-.js";import"./useEventCallback-DWqCHkzZ.js";import"./SkeletonBar-B9s5sRXH.js";import"./LoadingCell-Ct8SuL4U.js";import"./ColumnConfigDialog-y2j8YCQg.js";import"./DraggableList-DEWv_3rv.js";import"./Input-pnnIeEBQ.js";import"./useControlled-C-I-tgrJ.js";import"./Button-BnKHRSu3.js";import"./small-cross-BFQssioR.js";import"./ActionButton-C0wSlG3l.js";import"./Checkbox-Da-KHtvX.js";import"./minus-D7YTXURx.js";import"./useValueChanged-DLx0_Fi5.js";import"./caret-down-C5aVhO_4.js";import"./CollapsiblePanel-CZWt383m.js";import"./MultiColumnSortDialog-CQgWGzme.js";import"./MenuTrigger-DVj5irWX.js";import"./CompositeItem-CAERi6bY.js";import"./ToolbarRootContext-Bj02rPEG.js";import"./getDisabledMountTransitionStyles-1kw5ObaN.js";import"./getPseudoElementBounds-6FH5bFCx.js";import"./chevron-down-0uSgH4pO.js";import"./index-D3NB0frZ.js";import"./error-Df9xot2l.js";import"./BaseCbacBanner-AHf4PCIN.js";import"./makeExternalStore-DoIGosWd.js";import"./Tooltip-Bg1ARYik.js";import"./PopoverPopup-DM6VY-Ke.js";import"./toNumber-CcjTYIph.js";import"./useOsdkClient-B3kcJ7B7.js";import"./DropdownField-CuH323m0.js";import"./withOsdkMetrics-BSLSWIkG.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
