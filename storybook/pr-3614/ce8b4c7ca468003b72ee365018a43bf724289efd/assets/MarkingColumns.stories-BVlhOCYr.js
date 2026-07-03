import{f as n,j as t}from"./iframe-BrOKmODa.js";import{O as p}from"./object-table-D7-UYGKJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-LVFYmmqi.js";import"./Table-CvHDjZwx.js";import"./index-CywMtbWN.js";import"./Dialog-NJZb6mOf.js";import"./cross-DPeARh2U.js";import"./svgIconContainer-CvMgkZOH.js";import"./useBaseUiId-BIiWUYx5.js";import"./InternalBackdrop-KCapQ7f9.js";import"./composite-BlwcPmpK.js";import"./index-BUd79eaR.js";import"./index-BpN8QY9F.js";import"./index-B36SE3jy.js";import"./useEventCallback-ahTNcn10.js";import"./SkeletonBar-CeTXzQbH.js";import"./LoadingCell-DkJLlazV.js";import"./ColumnConfigDialog-DoQwDGi-.js";import"./DraggableList-X-bM3tSd.js";import"./search-CLz6HOHb.js";import"./Input-ddkTPuWd.js";import"./useControlled-CMMICR1z.js";import"./Button-BxtDJ6Vc.js";import"./small-cross-C434u2fL.js";import"./ActionButton-CiwtPBXv.js";import"./Checkbox-rvKXpG-l.js";import"./useValueChanged-CZkJhvQH.js";import"./CollapsiblePanel-B1JzgwSZ.js";import"./MultiColumnSortDialog-CHP7j_6q.js";import"./MenuTrigger-BWYXwrtv.js";import"./CompositeItem-CO4rFP1Q.js";import"./ToolbarRootContext-QdJBmK1o.js";import"./getDisabledMountTransitionStyles-Dpll7ooK.js";import"./getPseudoElementBounds-YTPD5vDg.js";import"./chevron-down-DUz6wnwR.js";import"./index-B2Dh176u.js";import"./error-CdXFPQ-w.js";import"./BaseCbacBanner-DuVfMiix.js";import"./makeExternalStore-NvzB80jV.js";import"./Tooltip-D3cWBz9_.js";import"./PopoverPopup-C44eY4Lb.js";import"./toNumber-uf0mOlQc.js";import"./useOsdkClient-DoKw_F63.js";import"./tick-DHkQ1h51.js";import"./DropdownField-DiUnG5ov.js";import"./withOsdkMetrics-Z-YaIuf_.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
