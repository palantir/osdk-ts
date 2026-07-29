import{f as n,j as t}from"./iframe-3kuQPU8S.js";import{O as p}from"./object-table-BZDWMwDp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BUvCftxI.js";import"./Table-DF9RxlF7.js";import"./index-BXJoDn_D.js";import"./Dialog-CLP2jCcM.js";import"./cross-dwCS9F2a.js";import"./svgIconContainer-azv5KHsA.js";import"./useBaseUiId-CqIpRaUh.js";import"./InternalBackdrop-DuXopd5r.js";import"./composite-BraebSd2.js";import"./index-BiPZcyfs.js";import"./index-BDuhy2nu.js";import"./index-DgYn_TKd.js";import"./useEventCallback-DE3eHJIb.js";import"./SkeletonBar-aKwfUvWk.js";import"./LoadingCell-BXPT1jL9.js";import"./ColumnConfigDialog-CbUo5E_T.js";import"./DraggableList-Co_YLnII.js";import"./Input-xOAawrTY.js";import"./useControlled-D-I8tcoy.js";import"./Button-Cpa6DHKS.js";import"./small-cross-Z2-J862N.js";import"./ActionButton-DbN9lJKW.js";import"./Checkbox-zoSKNWBN.js";import"./minus-CyarjVU6.js";import"./useValueChanged-BvChDTCw.js";import"./caret-down-DwP0-0r3.js";import"./CollapsiblePanel-mzsSz0Tq.js";import"./MultiColumnSortDialog-D3GLQzhH.js";import"./MenuTrigger-8Uyx9KUF.js";import"./CompositeItem-FrA_Bb2K.js";import"./ToolbarRootContext-C_y_UTEF.js";import"./getDisabledMountTransitionStyles-BJtrwu57.js";import"./getPseudoElementBounds-DKIpxsRV.js";import"./chevron-down-zwNVFBBC.js";import"./index-CvmEH9gm.js";import"./error-DgHRKez_.js";import"./BaseCbacBanner-C_Xle0yY.js";import"./makeExternalStore-BY_0_bTV.js";import"./Tooltip-NCyEs8uE.js";import"./PopoverPopup-CXXvP_zg.js";import"./toNumber-H_digNis.js";import"./useOsdkClient-CWDyM1Yg.js";import"./DropdownField-BN0fmGt1.js";import"./withOsdkMetrics-DeiioIqi.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
