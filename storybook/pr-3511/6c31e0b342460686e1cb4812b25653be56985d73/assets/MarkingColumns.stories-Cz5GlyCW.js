import{f as n,j as t}from"./iframe-Bo5lRVN5.js";import{O as p}from"./object-table-PlYzin-H.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DBkxsbrs.js";import"./Table-j53sgYyE.js";import"./index-DMfP8pVa.js";import"./Dialog-CcflGE10.js";import"./cross-CRTpuhUJ.js";import"./svgIconContainer-pD3wZNFz.js";import"./useBaseUiId-C3S6x9mV.js";import"./InternalBackdrop-DUYq4AE6.js";import"./composite-QEhFIcfy.js";import"./index-BJJQE5E4.js";import"./index-BFlMYbFl.js";import"./index-WqPnIDoV.js";import"./useEventCallback-D75AaXFT.js";import"./SkeletonBar-s6-Kwqis.js";import"./LoadingCell-DYqcb74o.js";import"./ColumnConfigDialog-DWyuo462.js";import"./DraggableList-DI6zVTRg.js";import"./Input-DqFMiayj.js";import"./useControlled-D2Q6nlGH.js";import"./Button-D06YhiDm.js";import"./small-cross-D-ePDnbA.js";import"./ActionButton-Cw8bkuIt.js";import"./Checkbox-CkzQqF0w.js";import"./minus-BYokkUaO.js";import"./useValueChanged-CTE0LZOb.js";import"./caret-down-Dg1ElZ7I.js";import"./CollapsiblePanel-Dc5pkp6Y.js";import"./MultiColumnSortDialog-8CHrQNPw.js";import"./MenuTrigger-B6AZp0GO.js";import"./CompositeItem-Bp7RHjw2.js";import"./ToolbarRootContext-7kYaw8z4.js";import"./getDisabledMountTransitionStyles-BcjiwXMy.js";import"./getPseudoElementBounds-CvGif61P.js";import"./chevron-down-DzhEnJmA.js";import"./index-BTDX2hEC.js";import"./error-Bk-h6nHQ.js";import"./BaseCbacBanner-DkgSapTG.js";import"./makeExternalStore-BAOp2Dwr.js";import"./Tooltip-BEh7TS93.js";import"./PopoverPopup-D361jq_V.js";import"./toNumber-9-8zWRVH.js";import"./useOsdkClient-DVl8SytJ.js";import"./DropdownField-BTZ5q4je.js";import"./withOsdkMetrics-B5ZVfLVM.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
