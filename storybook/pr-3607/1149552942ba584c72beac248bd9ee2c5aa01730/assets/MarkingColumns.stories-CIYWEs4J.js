import{f as n,j as t}from"./iframe-C8dlgqYY.js";import{O as p}from"./object-table-C6HAUx1N.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CWbhagD0.js";import"./Table-BHXGSUdv.js";import"./index-CnQA6rQ3.js";import"./Dialog-DziKORdL.js";import"./cross-CMsZxCOM.js";import"./svgIconContainer-D3qOb3Wv.js";import"./useBaseUiId-_6FFW2OV.js";import"./InternalBackdrop-Cf89t07G.js";import"./composite-04XSjFBl.js";import"./index-Sgo8BhwG.js";import"./index-Bi9bkNdn.js";import"./index-Df-S4x1d.js";import"./useEventCallback-Djt81amQ.js";import"./SkeletonBar-D0yzLi4Y.js";import"./LoadingCell-CnZoLKfZ.js";import"./ColumnConfigDialog-bQrONJZ1.js";import"./DraggableList-BRd-MHVC.js";import"./search-Tg9h_Dc7.js";import"./Input-BUkQZb9J.js";import"./useControlled-BCmr5ykD.js";import"./Button-BIdJBxoe.js";import"./small-cross-CJLqZ3S1.js";import"./ActionButton-CpUbUAm-.js";import"./Checkbox-BXoTqHDb.js";import"./minus-BMIvb8R1.js";import"./tick-_7cvZFdY.js";import"./useValueChanged-D6WURY3S.js";import"./caret-down-CPAXwWhu.js";import"./CollapsiblePanel-DoxqnTWo.js";import"./MultiColumnSortDialog-0YMnvgpN.js";import"./MenuTrigger-C4SLPWHd.js";import"./CompositeItem-JtbuSoSZ.js";import"./ToolbarRootContext-oy1tnWyM.js";import"./getDisabledMountTransitionStyles-s_lRcTkT.js";import"./getPseudoElementBounds-y0GJ-1B1.js";import"./chevron-down-CjubnvJD.js";import"./index-kxOa3iJi.js";import"./error-CnsD_CBJ.js";import"./BaseCbacBanner-CP659fP0.js";import"./makeExternalStore-DYcIJLnt.js";import"./Tooltip-CvUoiTAb.js";import"./PopoverPopup-jTUumGlb.js";import"./toNumber-CPEsKopV.js";import"./useOsdkClient-QsYr8jaX.js";import"./DropdownField-D11GCxsi.js";import"./withOsdkMetrics-uNG63cyk.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
