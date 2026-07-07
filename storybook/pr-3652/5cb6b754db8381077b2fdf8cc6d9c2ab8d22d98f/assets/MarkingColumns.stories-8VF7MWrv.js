import{f as n,j as t}from"./iframe-DlAjljC0.js";import{O as p}from"./object-table-8vVzJXWJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qM9rHgtE.js";import"./Table-BlbJunnq.js";import"./index-Mg2TGXTy.js";import"./Dialog-BI9KXEg5.js";import"./cross-CJWcF_W0.js";import"./svgIconContainer-BHhVW6zb.js";import"./useBaseUiId-BMQIEJ1D.js";import"./InternalBackdrop-B1Lh1cyI.js";import"./composite-C4Fq0xLo.js";import"./index-DXFrDNW6.js";import"./index-cp2LK2bn.js";import"./index-CWko2P3h.js";import"./useEventCallback-C3Is6FM6.js";import"./SkeletonBar-Doq4MMzv.js";import"./LoadingCell-DK0mBrRw.js";import"./ColumnConfigDialog-B7AlhhIX.js";import"./DraggableList-BY0s8Lv7.js";import"./search-CVyvDaT4.js";import"./Input-Cy4Rxry4.js";import"./useControlled-B5yElq7p.js";import"./Button-UAaeeS_0.js";import"./small-cross-BsOxa2ei.js";import"./ActionButton-DoyybYl2.js";import"./Checkbox-ZQq3Jua0.js";import"./useValueChanged-BZizANrj.js";import"./CollapsiblePanel-IC_-o2Kq.js";import"./MultiColumnSortDialog-DztaBBfV.js";import"./MenuTrigger-DBeLiW6N.js";import"./CompositeItem-BU_QHlMO.js";import"./ToolbarRootContext-DVfDCItW.js";import"./getDisabledMountTransitionStyles-DLQ5Q4Xh.js";import"./getPseudoElementBounds-1TMzqq0l.js";import"./chevron-down-D5cZouFY.js";import"./index-BSfAJcTr.js";import"./error---M2JlJ0.js";import"./BaseCbacBanner-CXkqhyJb.js";import"./makeExternalStore-0TiH5D2E.js";import"./Tooltip-Ya7HSKwo.js";import"./PopoverPopup-D3jPRwwZ.js";import"./toNumber-CQU81w4R.js";import"./useOsdkClient-CjO2LINr.js";import"./tick-BUzgGmyL.js";import"./DropdownField-BU4Rp2Ng.js";import"./withOsdkMetrics-DtsYymFj.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
