import{f as n,j as t}from"./iframe-Cj5kRxtc.js";import{O as p}from"./object-table-CcQV0xix.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gv4OSTpO.js";import"./Table-D3x_-EBg.js";import"./index-h3U-6pk3.js";import"./Dialog-yFGiOgkk.js";import"./cross-BG55D_WO.js";import"./svgIconContainer-Cf4A2tFb.js";import"./useBaseUiId-DLWDq50N.js";import"./InternalBackdrop-DrKtgehN.js";import"./composite-cykJJ9WN.js";import"./index-DS9u3jBh.js";import"./index-a0FCqlaX.js";import"./index-DzAVE_hB.js";import"./useEventCallback-CzMnlFTg.js";import"./SkeletonBar-JczedoyL.js";import"./LoadingCell-Zn2tHYwb.js";import"./ColumnConfigDialog-DNxjOrJk.js";import"./DraggableList-DOB9ODad.js";import"./search-CmTqx7Sz.js";import"./Input-CkR9HP68.js";import"./useControlled-D0OderS4.js";import"./Button-wcLol09e.js";import"./small-cross-BKBXy0_v.js";import"./ActionButton-BkkPghA9.js";import"./Checkbox-BweQyyPe.js";import"./useValueChanged-dJbjOK5H.js";import"./CollapsiblePanel-D9nFR4He.js";import"./MultiColumnSortDialog-BxLlxg0X.js";import"./MenuTrigger-B8c-Gwjp.js";import"./CompositeItem-BLdfQxuH.js";import"./ToolbarRootContext-BWrS8Fbo.js";import"./getDisabledMountTransitionStyles-DtO3OzMa.js";import"./getPseudoElementBounds-BpOs4OtK.js";import"./chevron-down-qz7KlM0E.js";import"./index-CSR_UVHA.js";import"./error-CXDLgeUT.js";import"./BaseCbacBanner-Dy_BkQMU.js";import"./makeExternalStore-CxvPzi28.js";import"./Tooltip-CXe0dR9G.js";import"./PopoverPopup-DqWAJO1x.js";import"./toNumber-llLqEBkP.js";import"./useOsdkClient-doCtaKNi.js";import"./tick-D2XfOyTn.js";import"./DropdownField-D54eTit_.js";import"./withOsdkMetrics-Dx0BBnsy.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
