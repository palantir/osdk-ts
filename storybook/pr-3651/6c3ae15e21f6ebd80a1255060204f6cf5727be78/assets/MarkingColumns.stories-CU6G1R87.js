import{f as n,j as t}from"./iframe-D6LppXIC.js";import{O as p}from"./object-table-Bx2u0Rqd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Xw5BUKDS.js";import"./Table-Bt_dncY2.js";import"./index-DsZIuXhx.js";import"./Dialog-DVgHZ2KB.js";import"./cross-BJkqWy7f.js";import"./svgIconContainer-MqRZ09_V.js";import"./useBaseUiId-VCJRl6vY.js";import"./InternalBackdrop-mMElmQXP.js";import"./composite-7hwSNArh.js";import"./index-BG5fCpyp.js";import"./index-CXm4l1ly.js";import"./index-CflgnpXX.js";import"./useEventCallback-Bd5MvVSc.js";import"./SkeletonBar-BOGUwr2W.js";import"./LoadingCell-DAMO2OWT.js";import"./ColumnConfigDialog-CTnvnO4S.js";import"./DraggableList-y7dpM4u2.js";import"./search-VSqqU_nb.js";import"./Input-CDpmfVIE.js";import"./useControlled--zDJdgut.js";import"./Button-07HtfNIy.js";import"./small-cross-DEV5SS6T.js";import"./ActionButton-5zTEsiYB.js";import"./Checkbox-DC70oVWe.js";import"./useValueChanged-B-jwimhj.js";import"./CollapsiblePanel-CIBVAJ69.js";import"./MultiColumnSortDialog-2eIcQ8_1.js";import"./MenuTrigger-DrIdbVu0.js";import"./CompositeItem-ClT8pN5y.js";import"./ToolbarRootContext-B7s4OP0L.js";import"./getDisabledMountTransitionStyles-BKxhPcFx.js";import"./getPseudoElementBounds-tD9gD0Yb.js";import"./chevron-down-CfICpT21.js";import"./index-fZ0re5SP.js";import"./error-CUJPO0AP.js";import"./BaseCbacBanner-B7MfrsTP.js";import"./makeExternalStore-DDp9HQ5i.js";import"./Tooltip-CnrsU9_z.js";import"./PopoverPopup-BYuQhioE.js";import"./toNumber-C_IGOufy.js";import"./useOsdkClient-Dk8G7huX.js";import"./tick-OgmCBH6C.js";import"./DropdownField-lA5RFBz-.js";import"./withOsdkMetrics-7qFi5qLQ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
