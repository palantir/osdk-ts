import{f as n,j as t}from"./iframe-BYt9UAqA.js";import{O as p}from"./object-table-D0lBCRPM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-yIviZ9L6.js";import"./Table-DpF6Sed-.js";import"./index-BC6Pjr27.js";import"./Dialog-ZHmY3isx.js";import"./cross-CKRZSi7q.js";import"./svgIconContainer-DKmscGn9.js";import"./useBaseUiId-CX-DJsYz.js";import"./InternalBackdrop-BcbrgLRw.js";import"./composite-CRwy05TL.js";import"./index-Vcxx2LcZ.js";import"./index-D39wjJst.js";import"./index-Dqfu3JNW.js";import"./useEventCallback-BJtRi63z.js";import"./SkeletonBar-DOajSTIY.js";import"./LoadingCell-Bs9U4TtP.js";import"./ColumnConfigDialog-CDlQ-mkr.js";import"./DraggableList-BCuTcNJ5.js";import"./search-BD6zxTta.js";import"./Input-C67re26D.js";import"./useControlled-DiqM8TqM.js";import"./Button-DlbDHCxX.js";import"./small-cross-BfD3h5Up.js";import"./ActionButton-DMe9TZqV.js";import"./Checkbox-B-QhnA2B.js";import"./useValueChanged-0WQtC8-8.js";import"./CollapsiblePanel-CIp0gf-9.js";import"./MultiColumnSortDialog-aS7xv6QR.js";import"./MenuTrigger-baiNWk4_.js";import"./CompositeItem-DlwscB2S.js";import"./ToolbarRootContext-cmhAQD8Q.js";import"./getDisabledMountTransitionStyles-C74p4X1r.js";import"./getPseudoElementBounds-CK8i0NsR.js";import"./chevron-down-DYvqUoHK.js";import"./index-CWLjiktv.js";import"./error-BHuFHr_-.js";import"./BaseCbacBanner-D8Bq-Cdv.js";import"./makeExternalStore-CuKd-Tw9.js";import"./Tooltip-DeT3ybxV.js";import"./PopoverPopup-CHe4abbK.js";import"./toNumber-nLVE6-ev.js";import"./useOsdkClient-dUAETn1o.js";import"./tick-CjSDs1IH.js";import"./DropdownField-Ogsfnohj.js";import"./withOsdkMetrics-Dk4rTGU7.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
