import{f as n,j as t}from"./iframe-DLj-u7sS.js";import{O as p}from"./object-table-B9TgTuL1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bRsnZhqF.js";import"./Table-rgqxuWEr.js";import"./index-h5XaJsyy.js";import"./Dialog-RTh4oRWI.js";import"./cross-DW3w3_M4.js";import"./svgIconContainer-CkWeyV4d.js";import"./useBaseUiId-DJZ_QMRI.js";import"./InternalBackdrop-oiDdlGPm.js";import"./composite-8LaW7Fnq.js";import"./index-B6RSVgXo.js";import"./index-D_X9WQ-2.js";import"./index-B9ew3cMv.js";import"./useEventCallback-CQCCyP0N.js";import"./SkeletonBar-C78eZmb7.js";import"./LoadingCell-B5GPsouT.js";import"./ColumnConfigDialog-C2xolMsC.js";import"./DraggableList-BFiaGnPW.js";import"./search-CiN923r4.js";import"./Input-pFDM4UYb.js";import"./useControlled-Czn7Kpxn.js";import"./Button-CNjMzJ-P.js";import"./small-cross-jz53Ep-f.js";import"./ActionButton-CSlu1CrX.js";import"./Checkbox-BxzMY6WF.js";import"./useValueChanged-BJtDQmKV.js";import"./CollapsiblePanel-BudI77hX.js";import"./MultiColumnSortDialog-ClnA_AD6.js";import"./MenuTrigger-DR46uuVl.js";import"./CompositeItem-DyWvApu6.js";import"./ToolbarRootContext-C9gB3nbw.js";import"./getDisabledMountTransitionStyles-DdiroEam.js";import"./getPseudoElementBounds-DF2mnP4q.js";import"./chevron-down-B5fRmw-q.js";import"./index-BdAV1eXI.js";import"./error-DnltI_RQ.js";import"./BaseCbacBanner-p4VaYALf.js";import"./makeExternalStore-DPSBsFoK.js";import"./Tooltip-BBAmWwAm.js";import"./PopoverPopup-8mjkHoUg.js";import"./toNumber-CnC2nuvW.js";import"./useOsdkClient-DYYHN8co.js";import"./tick-I1D_hQ2M.js";import"./DropdownField-BgEt6js2.js";import"./withOsdkMetrics-BJfe6jhM.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
