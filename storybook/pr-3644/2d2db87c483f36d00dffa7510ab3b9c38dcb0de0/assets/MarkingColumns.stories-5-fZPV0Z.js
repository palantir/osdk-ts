import{f as n,j as t}from"./iframe-D1qwZgrw.js";import{O as p}from"./object-table-D0hox-oF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-y71pt7P7.js";import"./Table-UYujo_Sf.js";import"./index-B6BwVqaI.js";import"./Dialog-sNSiTlss.js";import"./cross-Cz-1Spna.js";import"./svgIconContainer-CXKKVeo3.js";import"./useBaseUiId-Dh6u135s.js";import"./InternalBackdrop-BGOrrUbE.js";import"./composite-BUDXSI_3.js";import"./index-Bbh0zUEq.js";import"./index-DMJ0QAck.js";import"./index-QADEbUop.js";import"./useEventCallback-BR2J7ELN.js";import"./SkeletonBar-ruJJlEAH.js";import"./LoadingCell-Bb4cWk_F.js";import"./ColumnConfigDialog-FgKXhOqx.js";import"./DraggableList-B7jGt7CK.js";import"./search-CbairpPD.js";import"./Input-C2dAsZUY.js";import"./useControlled-BpII9gYo.js";import"./Button-CAzs_x2n.js";import"./small-cross-sDP0XHk2.js";import"./ActionButton-CvsCYBkd.js";import"./Checkbox-BmhgzyjT.js";import"./useValueChanged-BtAOSrmu.js";import"./CollapsiblePanel-CRqKPIyw.js";import"./MultiColumnSortDialog-apJb0oHD.js";import"./MenuTrigger-Br0RfErh.js";import"./CompositeItem-C3OZXOGS.js";import"./ToolbarRootContext-CHgd-qRk.js";import"./getDisabledMountTransitionStyles-C34W7gIX.js";import"./getPseudoElementBounds-BwYoezgR.js";import"./chevron-down-ZKWIVMTe.js";import"./index-RkfjgeCt.js";import"./error-DdZD0Hny.js";import"./BaseCbacBanner-Bm3yTNM3.js";import"./makeExternalStore-BtFhiYDK.js";import"./Tooltip-DOrL1WrC.js";import"./PopoverPopup-F-BojOSx.js";import"./toNumber-6d-A7ZlC.js";import"./useOsdkClient-DUEpAKBi.js";import"./tick-DIX0hX5s.js";import"./DropdownField-DsCDsQyp.js";import"./withOsdkMetrics-DXqXSfKv.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
