import{f as n,j as t}from"./iframe-DxRo3sD6.js";import{O as p}from"./object-table-dVcJG4cc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bPZbOV5q.js";import"./Table-Ch9ENo5t.js";import"./index-DZ8vSuQh.js";import"./Dialog-CxXIOQvh.js";import"./cross-DOmHlQK3.js";import"./svgIconContainer-Bdzo1L10.js";import"./useBaseUiId-DjaFKFQv.js";import"./InternalBackdrop-1fUXEFDK.js";import"./composite-CMAzK-Ek.js";import"./index-of6p6uv9.js";import"./index-ki8fUDKa.js";import"./index-DNg6UYAs.js";import"./useEventCallback-DRgW7cKQ.js";import"./SkeletonBar-DQyArHhy.js";import"./LoadingCell-DZ8fIDBx.js";import"./ColumnConfigDialog-CyAVnaQo.js";import"./DraggableList-DwPWCHaH.js";import"./Input-Bh7Elsv1.js";import"./useControlled-TG2Cxp8w.js";import"./Button-BJ5nfj7f.js";import"./small-cross-gDWgYYc7.js";import"./ActionButton-CJrCUU54.js";import"./Checkbox-Mv2QOhLZ.js";import"./minus-yUL54Um2.js";import"./useValueChanged-CjQN1q8R.js";import"./caret-down-CscgXrvz.js";import"./CollapsiblePanel-CdOxZ_so.js";import"./MultiColumnSortDialog-CfpybSjO.js";import"./MenuTrigger-CE4pH33e.js";import"./CompositeItem-BoE56Oxq.js";import"./ToolbarRootContext-CdPg_jD3.js";import"./getDisabledMountTransitionStyles-BaC7YVsh.js";import"./getPseudoElementBounds-D5VLPTDr.js";import"./chevron-down-DAt1sh2b.js";import"./index-CsypsuGg.js";import"./error-DZhvmQkp.js";import"./BaseCbacBanner-UAMAvY0Q.js";import"./makeExternalStore-DjQQrxlV.js";import"./Tooltip-CYmNK4Kx.js";import"./PopoverPopup-BYPnZpV6.js";import"./toNumber-DRoJU6iZ.js";import"./useOsdkClient-DHruX_4Z.js";import"./DropdownField-Cdy6KcX0.js";import"./withOsdkMetrics--aTVBuzR.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
