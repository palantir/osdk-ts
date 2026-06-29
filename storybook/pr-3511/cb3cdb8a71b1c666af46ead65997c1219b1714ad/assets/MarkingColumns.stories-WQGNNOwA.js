import{f as n,j as t}from"./iframe-BiaK4n54.js";import{O as p}from"./object-table-Bmk11RGy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CU06Hx_H.js";import"./Table-8MOP530F.js";import"./index-D3adZ3g-.js";import"./Dialog-DI2LfNhU.js";import"./cross-MQP2DxLM.js";import"./svgIconContainer-CyEWxphT.js";import"./useBaseUiId-DYUuNT23.js";import"./InternalBackdrop-D3T4p53o.js";import"./composite-CGE7SHh3.js";import"./index-C36q6vv9.js";import"./index-C7L2FoPM.js";import"./index-BBzAJBrK.js";import"./useEventCallback-BH07vTyF.js";import"./SkeletonBar-CP85lWCE.js";import"./LoadingCell-DK_iykh7.js";import"./ColumnConfigDialog-lf9VRZDc.js";import"./DraggableList-CilQp0me.js";import"./search-Di6IYbI8.js";import"./Input-BmmbP7Xg.js";import"./useControlled-Boq-hwJu.js";import"./Button-PaRuc5oI.js";import"./small-cross-DPBwCvDl.js";import"./ActionButton-qmzsDoCF.js";import"./Checkbox-CYhGLard.js";import"./minus-CE475K11.js";import"./tick-Bo6V2EZa.js";import"./useValueChanged-pXn_Dfqp.js";import"./caret-down-BGrW2Iu8.js";import"./CollapsiblePanel-BMeNwePM.js";import"./MultiColumnSortDialog-a79zsxab.js";import"./MenuTrigger-DvOnUiZp.js";import"./CompositeItem-Cu5i8zaW.js";import"./ToolbarRootContext-Clf1l3G4.js";import"./getDisabledMountTransitionStyles-WoGAMclp.js";import"./getPseudoElementBounds-D5Hpp1mP.js";import"./chevron-down-CSTS4xkp.js";import"./index-BsH4YHDs.js";import"./error-BUTFbX5Q.js";import"./BaseCbacBanner-vptqSA15.js";import"./makeExternalStore-8ty7R3l4.js";import"./Tooltip-2-xGAdEb.js";import"./PopoverPopup-DW3FaL6m.js";import"./toNumber-jBurGWSq.js";import"./useOsdkClient-grHNeG4C.js";import"./DropdownField-DpGRE1tm.js";import"./withOsdkMetrics-BtCKf7d8.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
