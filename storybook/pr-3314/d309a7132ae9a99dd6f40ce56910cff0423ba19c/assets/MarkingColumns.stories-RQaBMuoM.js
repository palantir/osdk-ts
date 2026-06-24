import{f as n,j as t}from"./iframe-Dl_Era9Y.js";import{O as p}from"./object-table-BtWfB_PX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFag9Tuc.js";import"./Table-CMNbLLzj.js";import"./index-DbhcZp7Q.js";import"./Dialog-Dmy5gN8M.js";import"./cross-BbMIqlmP.js";import"./svgIconContainer-DDYnlTok.js";import"./useBaseUiId-B79jbFjv.js";import"./InternalBackdrop-mL3oUfij.js";import"./composite-B5phMGTi.js";import"./index-Oaf4c6Ke.js";import"./index-BCievmfl.js";import"./index-BDAC5z8h.js";import"./useEventCallback-OFKE9_lV.js";import"./SkeletonBar-CsSUC_R6.js";import"./LoadingCell-DhKeiwXJ.js";import"./ColumnConfigDialog-eC3tLRei.js";import"./DraggableList-BneIFr0t.js";import"./Input-DXxky4I0.js";import"./useControlled-BcjJHBpM.js";import"./Button-CJlVL-LQ.js";import"./small-cross-DijxL1lN.js";import"./ActionButton-VzKq9Zpe.js";import"./Checkbox-Cjmc7n-G.js";import"./minus-CFMtXMwW.js";import"./useValueChanged-DAfMukKi.js";import"./caret-down-D6Fx85fm.js";import"./CollapsiblePanel-DVmakH95.js";import"./MultiColumnSortDialog-Z0zUaK1y.js";import"./MenuTrigger-DBglCDmZ.js";import"./CompositeItem-BK2L1FWL.js";import"./ToolbarRootContext-AQ2vyB7e.js";import"./getDisabledMountTransitionStyles-CoAv8Ap4.js";import"./getPseudoElementBounds-BwCNryjL.js";import"./chevron-down-C0-uGq65.js";import"./index-B25BmfRI.js";import"./error-CbuI9xiD.js";import"./BaseCbacBanner-CmyV4z-Q.js";import"./makeExternalStore-AmrGIbbG.js";import"./Tooltip-CVuis2Te.js";import"./PopoverPopup-C4HGymI3.js";import"./toNumber-D4UGOe4M.js";import"./useOsdkClient-7KidlrYw.js";import"./DropdownField-BSDDBPRO.js";import"./withOsdkMetrics-CcnVRrh_.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
