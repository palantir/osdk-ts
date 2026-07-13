import{f as n,j as t}from"./iframe-DSXXK9ry.js";import{O as p}from"./object-table-BqaM-26H.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dmy7KmTb.js";import"./index-BLfmppkP.js";import"./Dialog-Bm2MsVOX.js";import"./cross-BKiGnt2y.js";import"./svgIconContainer-Db6mLLA4.js";import"./useBaseUiId-DVrjiokY.js";import"./InternalBackdrop-1oCmQolD.js";import"./composite-Dw9cnuQF.js";import"./index-C1mA0BVO.js";import"./index-DgE5owWV.js";import"./index-DVr6FuT6.js";import"./useEventCallback-CHHkDI_M.js";import"./SkeletonBar-CcKOl6Qe.js";import"./LoadingCell-CN0IElMI.js";import"./ColumnConfigDialog-Dklxze3_.js";import"./DraggableList-B3nP9x_c.js";import"./search-Tcwj5nHq.js";import"./Input-BTsoeB1X.js";import"./useControlled-BNp0JE7f.js";import"./Button-ZlZC0ijy.js";import"./small-cross-YFO1e4B1.js";import"./ActionButton-C3ddu0oN.js";import"./Checkbox-CuK6oRAj.js";import"./useValueChanged-B83lwOzW.js";import"./CollapsiblePanel-BqnavrKK.js";import"./MultiColumnSortDialog-CBk279Xb.js";import"./MenuTrigger-DtfMiAxZ.js";import"./CompositeItem-dShEfX7Q.js";import"./ToolbarRootContext-fozDRqMP.js";import"./getDisabledMountTransitionStyles-GhTyZ9RS.js";import"./getPseudoElementBounds-Chmn5JhO.js";import"./chevron-down-7ro0SSz_.js";import"./index-BleiAz0O.js";import"./error-nGhhG5OL.js";import"./BaseCbacBanner-BCa7fgac.js";import"./makeExternalStore-Rp2wgwyK.js";import"./Tooltip-Cg1ThzJm.js";import"./PopoverPopup-xlfEGBMu.js";import"./toNumber-C4wB9kBT.js";import"./useOsdkClient-BwjyvIvZ.js";import"./tick-9A-SdkRi.js";import"./DropdownField-CvfHYl8Y.js";import"./withOsdkMetrics-Ca3HcGIG.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
