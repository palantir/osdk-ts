import{f as n,j as t}from"./iframe-Du7B45Ik.js";import{O as p}from"./object-table-CXdfXxSF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFjBN3PP.js";import"./Table-v_RUk4ki.js";import"./index-a-AKHUP8.js";import"./Dialog-mRFnsrNZ.js";import"./cross-1D9pygiU.js";import"./svgIconContainer-C7rSaTeo.js";import"./useBaseUiId-BJcFYXXK.js";import"./InternalBackdrop-Cl3f5nAi.js";import"./composite-DOwGNFOh.js";import"./index-8kRIe0yY.js";import"./index-BXioFopV.js";import"./index-uoFGTkM6.js";import"./useEventCallback-DbMgcFBJ.js";import"./SkeletonBar-B6LAwKFE.js";import"./LoadingCell-BMSzNMns.js";import"./ColumnConfigDialog-ba-3xvtH.js";import"./DraggableList-C3WyDaUH.js";import"./search-DUFMGEvk.js";import"./Input-CuUazxK9.js";import"./useControlled-Bci9bLU_.js";import"./Button-B5eJscor.js";import"./small-cross-BjNqAUTw.js";import"./ActionButton-BEBIYqUb.js";import"./Checkbox-Bdh1ILfu.js";import"./minus-Dk_X7BJH.js";import"./tick-XcqxHdUt.js";import"./useValueChanged-DLE_Ofyx.js";import"./caret-down-BWMEurn-.js";import"./CollapsiblePanel-Uxp17mh3.js";import"./MultiColumnSortDialog-BNb_7q4U.js";import"./MenuTrigger-a1aKLwq_.js";import"./CompositeItem-dIP_Fubd.js";import"./ToolbarRootContext-ynjtRvka.js";import"./getDisabledMountTransitionStyles-Db4I6H1R.js";import"./getPseudoElementBounds-CnFdOjGz.js";import"./chevron-down-CLwCKDQx.js";import"./index-xjgxRoIN.js";import"./error-BYGHGnQ1.js";import"./BaseCbacBanner-UcwuDB4K.js";import"./makeExternalStore-D8WRjztR.js";import"./Tooltip-FwWfjQ6y.js";import"./PopoverPopup-BFWxXyAz.js";import"./toNumber-BI1h_3Dt.js";import"./useOsdkClient-PwLoTnPn.js";import"./DropdownField-CMlNXqSj.js";import"./withOsdkMetrics-DwmOSY5G.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
