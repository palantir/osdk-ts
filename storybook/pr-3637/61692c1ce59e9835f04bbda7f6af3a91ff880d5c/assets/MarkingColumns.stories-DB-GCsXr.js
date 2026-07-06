import{f as n,j as t}from"./iframe-BD1MEMRl.js";import{O as p}from"./object-table-C4DJI72D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFouLAkd.js";import"./Table-CnG4GV8W.js";import"./index-sFVy8NqN.js";import"./Dialog-Dd-hVv8T.js";import"./cross-C_Zco2FN.js";import"./svgIconContainer-Dbg64RB4.js";import"./useBaseUiId-C6VUj_Wo.js";import"./InternalBackdrop-CFzcYmsX.js";import"./composite-DAwmvh4E.js";import"./index-Bi_O5ToU.js";import"./index-DJRVJ4qh.js";import"./index-BFtmC4i8.js";import"./useEventCallback-lUu7SJ_f.js";import"./SkeletonBar-DTUF0wxB.js";import"./LoadingCell-ByTDUvLw.js";import"./ColumnConfigDialog-tjsJmrum.js";import"./DraggableList-xex0V4x2.js";import"./search-pFjymYek.js";import"./Input-DtFEVn4t.js";import"./useControlled-Beqkb8BT.js";import"./Button-C-_7Zup6.js";import"./small-cross-3SKSquHU.js";import"./ActionButton-CqWep9X8.js";import"./Checkbox-CtA1kWtm.js";import"./useValueChanged-D9QM6SwH.js";import"./CollapsiblePanel-DoLDuFqo.js";import"./MultiColumnSortDialog-Cwaazm8H.js";import"./MenuTrigger-BxFUcpWU.js";import"./CompositeItem-CNoQbRW6.js";import"./ToolbarRootContext-hpi9LUbr.js";import"./getDisabledMountTransitionStyles-BTxM3LtW.js";import"./getPseudoElementBounds-Btg4Yep0.js";import"./chevron-down-p-OqQdTE.js";import"./index-Bhql2vLt.js";import"./error-Bkh3cooZ.js";import"./BaseCbacBanner-B175XRUY.js";import"./makeExternalStore-R6DoBrXa.js";import"./Tooltip-CQZQT9ZR.js";import"./PopoverPopup-D2zdM8Xj.js";import"./toNumber-skGbjp9v.js";import"./useOsdkClient-DPR92EKT.js";import"./tick-D6R-JvNg.js";import"./DropdownField-BXlZiCoN.js";import"./withOsdkMetrics-D-wPyKJ2.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
