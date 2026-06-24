import{f as n,j as t}from"./iframe-DVX-iFxA.js";import{O as p}from"./object-table-D6kf4eOA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-0vGU7s_D.js";import"./Table-BVSTf5g2.js";import"./index-Cn2uYV9E.js";import"./Dialog-Dfg5Uj0g.js";import"./cross-AKBZlCYC.js";import"./svgIconContainer-DIvvaSR0.js";import"./useBaseUiId-gG8bMQPn.js";import"./InternalBackdrop-DJ1ZwoZ6.js";import"./composite-MKnWREQg.js";import"./index-Bl00HuKQ.js";import"./index-CZtUkVEM.js";import"./index-dChBiCSh.js";import"./useEventCallback-DxP4NF1J.js";import"./SkeletonBar-2PIz6m3b.js";import"./LoadingCell-yihQBEOG.js";import"./ColumnConfigDialog-Bt-NO7rA.js";import"./DraggableList-BY7AGQqY.js";import"./Input-B_-bU7zr.js";import"./useControlled-N-Q3L4ZY.js";import"./Button-BWp2sCa_.js";import"./small-cross-BNNMdKZh.js";import"./ActionButton-CC7eO7K8.js";import"./Checkbox-BUW1YE8z.js";import"./useValueChanged-uNHW8YGZ.js";import"./CollapsiblePanel-DCcd11Gq.js";import"./MultiColumnSortDialog-ChKshzfC.js";import"./MenuTrigger-C6UGHtt2.js";import"./CompositeItem-K4e5xRVi.js";import"./ToolbarRootContext-Dm77GgFm.js";import"./getDisabledMountTransitionStyles-Cu8RrX42.js";import"./getPseudoElementBounds-DAkMEehU.js";import"./chevron-down-DOZ4R2pO.js";import"./index-CtKd7cJN.js";import"./error-CaTMSZaC.js";import"./BaseCbacBanner-_DIX43be.js";import"./makeExternalStore-DajWivXx.js";import"./Tooltip-BnE5RYhX.js";import"./PopoverPopup-gZAJMDwT.js";import"./toNumber-B_H3upUv.js";import"./useOsdkClient-s2ZrGdV3.js";import"./DropdownField-Bf4IbhSa.js";import"./withOsdkMetrics-BmY_UP3P.js";const rr={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var e,o,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const tr=["MarkingColumns"];export{r as MarkingColumns,tr as __namedExportsOrder,rr as default};
