import{f as n,j as t}from"./iframe-CNeLbKR0.js";import{O as p}from"./object-table-Dq_9LDhY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-t6i53lZY.js";import"./Table-CweYi1DH.js";import"./index-8cQwkJos.js";import"./Dialog-DU0uDqGo.js";import"./cross-CBV_IYC3.js";import"./svgIconContainer-BZaeorZI.js";import"./useBaseUiId-DIhe_FS8.js";import"./InternalBackdrop-CtrCM3Nw.js";import"./composite-C-XAEXGU.js";import"./index-Ds4ML4jl.js";import"./index-7euDZAsg.js";import"./index-D5kHiwHU.js";import"./useEventCallback-ItVUyazS.js";import"./SkeletonBar-CPPhJVSG.js";import"./LoadingCell-Bn_XkVu1.js";import"./ColumnConfigDialog-B0jo3WhG.js";import"./DraggableList-Fe-9Iy-Q.js";import"./search-BHuH4UT5.js";import"./Input-BgnrhhXf.js";import"./useControlled-DDWfgMvb.js";import"./Button-Bk9cUjq4.js";import"./small-cross-BnJQuN1A.js";import"./ActionButton-iLDHmZ0i.js";import"./Checkbox-EeHuuSTo.js";import"./minus-DPOXvMeN.js";import"./tick-BrkQyvqG.js";import"./useValueChanged-tizwmzr9.js";import"./caret-down-B4mmkM1f.js";import"./CollapsiblePanel-vthxulNQ.js";import"./MultiColumnSortDialog-loZgDEZ9.js";import"./MenuTrigger-CtbVfHkL.js";import"./CompositeItem-njWh5NE4.js";import"./ToolbarRootContext-BVIcN7p5.js";import"./getDisabledMountTransitionStyles-DmqgBKm9.js";import"./getPseudoElementBounds-Dy3M3vCL.js";import"./chevron-down-DFSDxaLc.js";import"./index-CI27Aptl.js";import"./error-liY-14PA.js";import"./BaseCbacBanner-DyTgz13d.js";import"./makeExternalStore-BurdIEcc.js";import"./Tooltip-DU3ybuZN.js";import"./PopoverPopup-CiG_Uniw.js";import"./toNumber-DQW_pIUl.js";import"./useOsdkClient-Ci3rcIet.js";import"./DropdownField-C9qfiJKP.js";import"./withOsdkMetrics-vMOAMzjU.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
