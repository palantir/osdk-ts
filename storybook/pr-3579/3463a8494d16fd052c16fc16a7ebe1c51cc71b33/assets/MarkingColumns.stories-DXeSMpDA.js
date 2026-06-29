import{f as n,j as t}from"./iframe-CLma6GnG.js";import{O as p}from"./object-table-CtNrcGD-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DuFez-XM.js";import"./Table-b85YcRG7.js";import"./index-CtnOIv8z.js";import"./Dialog-YkT8uzgO.js";import"./cross-BCn-YWcU.js";import"./svgIconContainer-BepN7zFg.js";import"./useBaseUiId-ZlNcHrjV.js";import"./InternalBackdrop-BqQkYps2.js";import"./composite-CypO4Vu6.js";import"./index-DQXASA6z.js";import"./index-r17fB8ht.js";import"./index-DN-MaDZ3.js";import"./useEventCallback-C_Htv9J5.js";import"./SkeletonBar-DIGiSmp0.js";import"./LoadingCell-Gl2dc7ci.js";import"./ColumnConfigDialog-Cl1p9_VL.js";import"./DraggableList-DaQiBBWR.js";import"./search-DO7DmXbG.js";import"./Input-NSyklMj1.js";import"./useControlled-CuV3rZtb.js";import"./Button-D7NBjKdb.js";import"./small-cross-CW6IcFCm.js";import"./ActionButton-B9EOHITR.js";import"./Checkbox-WWDSVQgT.js";import"./minus-CzhAaF2L.js";import"./tick-Cx2_LTH0.js";import"./useValueChanged-Bxs5gPK-.js";import"./caret-down-BiIZdnIz.js";import"./CollapsiblePanel-CGkO2fVG.js";import"./MultiColumnSortDialog-CR080OjE.js";import"./MenuTrigger-BTU6-rcM.js";import"./CompositeItem-CZ039icn.js";import"./ToolbarRootContext-BuxeuB76.js";import"./getDisabledMountTransitionStyles-DitthjS8.js";import"./getPseudoElementBounds-D1FJhB_H.js";import"./chevron-down-C2JzP2di.js";import"./index-DzXxrZmX.js";import"./error-BS6_AadE.js";import"./BaseCbacBanner-EPU6Ynrw.js";import"./makeExternalStore-C7YMfgMF.js";import"./Tooltip-CzmBmZTG.js";import"./PopoverPopup-Ct9vju32.js";import"./toNumber-3ywl-IXR.js";import"./useOsdkClient-De3fu4ff.js";import"./DropdownField-BJhyO7Ek.js";import"./withOsdkMetrics-5qqcaGjf.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
