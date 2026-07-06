import{f as n,j as t}from"./iframe-CFh3-JCM.js";import{O as p}from"./object-table-oUD36VcH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DL4VrRXH.js";import"./Table-BVRt9wST.js";import"./index-D1oJrahl.js";import"./Dialog-CMhxTWUI.js";import"./cross-Bz6JUH3g.js";import"./svgIconContainer-DecEMNPN.js";import"./useBaseUiId-BS4BwdWN.js";import"./InternalBackdrop-WkAtvzpT.js";import"./composite-CrLiFvyr.js";import"./index-CEpC6BUy.js";import"./index-CXUWnWak.js";import"./index-COWsdP8I.js";import"./useEventCallback-CThKL076.js";import"./SkeletonBar-BTt3UpRZ.js";import"./LoadingCell--wEznmee.js";import"./ColumnConfigDialog-DxX8F2QQ.js";import"./DraggableList-C8i-sVz1.js";import"./search-BywwsUpb.js";import"./Input-Co3H1Pkd.js";import"./useControlled-DSY4fqOM.js";import"./Button-CODM8oW8.js";import"./small-cross-DcnaoSsU.js";import"./ActionButton-Ci0mazPi.js";import"./Checkbox-DDDoj2z4.js";import"./useValueChanged-BGMj8Oua.js";import"./CollapsiblePanel-CZZX_Rns.js";import"./MultiColumnSortDialog-BD8Hy8t4.js";import"./MenuTrigger-DxTTQDLK.js";import"./CompositeItem-sg-r3ns5.js";import"./ToolbarRootContext-C0iUfkX1.js";import"./getDisabledMountTransitionStyles-C2B0vENW.js";import"./getPseudoElementBounds-CyHv5Qa9.js";import"./chevron-down-DgtHkiFM.js";import"./index-1vULKbLA.js";import"./error-DyeJdnJE.js";import"./BaseCbacBanner-B7v94h8O.js";import"./makeExternalStore-9bC9w86u.js";import"./Tooltip-ChAOyq7j.js";import"./PopoverPopup--XGzXKJI.js";import"./toNumber-B_xKacox.js";import"./useOsdkClient-CxL44FOx.js";import"./tick-wCGVXlep.js";import"./DropdownField-PIQOqwoN.js";import"./withOsdkMetrics-ob1fw8qL.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
