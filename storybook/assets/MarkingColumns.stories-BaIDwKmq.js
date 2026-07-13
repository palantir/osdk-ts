import{f as n,j as t}from"./iframe-ChzR6EVC.js";import{O as p}from"./object-table-7wX8Y6fD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BTwBX-2r.js";import"./index-Cn1hQvlV.js";import"./Dialog-CsUl5gcG.js";import"./cross-DBnzcNv7.js";import"./svgIconContainer-DYQ-SYjk.js";import"./useBaseUiId-BsL2agaP.js";import"./InternalBackdrop-CmCxRQtD.js";import"./composite-8zYYWnNF.js";import"./index-CXAQlbfj.js";import"./index-Dl2h0rkd.js";import"./index-w4jFW3p4.js";import"./useEventCallback-B3iCYVYw.js";import"./SkeletonBar-CIhac103.js";import"./LoadingCell-DQMXtj3m.js";import"./ColumnConfigDialog-DdmDa5y7.js";import"./DraggableList-xOeyraKH.js";import"./search-C8I1aszc.js";import"./Input-C6RJf1GZ.js";import"./useControlled-_LNvV6S5.js";import"./Button-D0YlxXk7.js";import"./small-cross-Vt3VAmuS.js";import"./ActionButton-BNsjatIW.js";import"./Checkbox-BCFG68m7.js";import"./useValueChanged-VlpQKfxy.js";import"./CollapsiblePanel-DY9VG5Cy.js";import"./MultiColumnSortDialog-B2EwzITH.js";import"./MenuTrigger-BsMXnV1J.js";import"./CompositeItem-tssO9pUU.js";import"./ToolbarRootContext-B0rq4szH.js";import"./getDisabledMountTransitionStyles-nWgEb3TZ.js";import"./getPseudoElementBounds-BqkQSabD.js";import"./chevron-down-zucsOjC7.js";import"./index-CoH0-Nst.js";import"./error-Cjw6l58M.js";import"./BaseCbacBanner-4hof0e8U.js";import"./makeExternalStore-C5Yt7kIe.js";import"./Tooltip-BWOLigsX.js";import"./PopoverPopup-BIsZ1wqJ.js";import"./toNumber-DXIZ9khY.js";import"./useOsdkClient-DizZ68YQ.js";import"./tick-ncrXq5dK.js";import"./DropdownField-CDpB1k41.js";import"./withOsdkMetrics-q2D2P-r0.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
