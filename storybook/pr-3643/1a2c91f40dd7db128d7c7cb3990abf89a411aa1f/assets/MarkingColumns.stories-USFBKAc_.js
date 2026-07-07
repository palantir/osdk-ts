import{f as n,j as t}from"./iframe-DyXIXGAR.js";import{O as p}from"./object-table-Co4kK50Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DPUGA4_w.js";import"./Table-0Hnv4J3y.js";import"./index-D_z_GSL5.js";import"./Dialog-CJHUoHH0.js";import"./cross-DcoLII47.js";import"./svgIconContainer-CyG8huw5.js";import"./useBaseUiId-Bex4jiwR.js";import"./InternalBackdrop-ChBg2eR-.js";import"./composite-BlnldHGd.js";import"./index-BK-KP2l0.js";import"./index-BNyU16np.js";import"./index-6EKWPOn3.js";import"./useEventCallback-CNgDOaNc.js";import"./SkeletonBar-BSq_7v8a.js";import"./LoadingCell-B5heaUkH.js";import"./ColumnConfigDialog-Bj4uS0JN.js";import"./DraggableList-CaPoJ5pe.js";import"./search-gYTl5Wxg.js";import"./Input-Dyc_Hx0U.js";import"./useControlled-DiZvw_qP.js";import"./Button-C3GbEyJU.js";import"./small-cross-BYPmH78T.js";import"./ActionButton-B0mdGVC-.js";import"./Checkbox-BIQrMqU2.js";import"./useValueChanged-wlHHBhZr.js";import"./CollapsiblePanel-UFQ1fzNO.js";import"./MultiColumnSortDialog-B_9HTeoq.js";import"./MenuTrigger-CyQojLO2.js";import"./CompositeItem-BDWwkTG_.js";import"./ToolbarRootContext-Bgq9ZztY.js";import"./getDisabledMountTransitionStyles-kgqqXkpt.js";import"./getPseudoElementBounds-FjKlWPr5.js";import"./chevron-down-CKmtchEU.js";import"./index-CcvHXuEm.js";import"./error-BXWdOUIw.js";import"./BaseCbacBanner-BnVAtHMp.js";import"./makeExternalStore-CX4MZXW6.js";import"./Tooltip-BaeCa8F8.js";import"./PopoverPopup-B9i6H3Qc.js";import"./toNumber-BdBFt-nB.js";import"./useOsdkClient-M10W2c5_.js";import"./tick-DaelROt4.js";import"./DropdownField-DcaaeQ_9.js";import"./withOsdkMetrics-Hrkwbp5U.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
