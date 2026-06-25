import{f as n,j as t}from"./iframe-BcY103pq.js";import{O as p}from"./object-table-MmXmLPq0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJP2zoNP.js";import"./Table-epjG4XNw.js";import"./index-DA-g1Ciy.js";import"./Dialog-BdePHsVy.js";import"./cross-CM51o3Of.js";import"./svgIconContainer-WUryhlJd.js";import"./useBaseUiId-BoZrpPzk.js";import"./InternalBackdrop-CiW8cBjI.js";import"./composite-CLV6W6dc.js";import"./index-B1zie9Yb.js";import"./index-Cf6-jKZO.js";import"./index-DLoXvQUY.js";import"./useEventCallback-BkIp0-FI.js";import"./SkeletonBar-CRG7gb8h.js";import"./LoadingCell-rpLp5Ga9.js";import"./ColumnConfigDialog-Dgaop-Px.js";import"./DraggableList-CGI9CxKt.js";import"./Input-PTZNblo7.js";import"./useControlled-AOm1PlVZ.js";import"./Button-DGjow146.js";import"./small-cross-B8QI1y16.js";import"./ActionButton-CKICTav8.js";import"./Checkbox-DRcGotXQ.js";import"./minus-iLMQbXok.js";import"./useValueChanged-DskkBt9T.js";import"./caret-down-vjk_OpRE.js";import"./CollapsiblePanel-g_G-z8Ul.js";import"./MultiColumnSortDialog-BpM1nDIy.js";import"./MenuTrigger-DVhyzWYb.js";import"./CompositeItem-FyK97BZ9.js";import"./ToolbarRootContext-tHrQMUDQ.js";import"./getDisabledMountTransitionStyles-2W0eiVYv.js";import"./getPseudoElementBounds-CcD0GPdU.js";import"./chevron-down-B6g8Iii5.js";import"./index-HsmHBn9G.js";import"./error-GFWyuojU.js";import"./BaseCbacBanner-FQIAG65f.js";import"./makeExternalStore-BqdcM3fH.js";import"./Tooltip-B5iALqTg.js";import"./PopoverPopup-B2-oEIU5.js";import"./toNumber-CaJHY1Gr.js";import"./useOsdkClient-B-kDOsEl.js";import"./DropdownField-Dat0nMWG.js";import"./withOsdkMetrics-DHoq9PvA.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
