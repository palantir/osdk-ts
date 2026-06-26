import{f as n,j as t}from"./iframe-6SOAcKwt.js";import{O as p}from"./object-table-CF9XPCTM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQG0j-BK.js";import"./Table-BmUYjKPc.js";import"./index-3H5erHsx.js";import"./Dialog-Cqgrh8cd.js";import"./cross-C0t4QVaC.js";import"./svgIconContainer-CH_vOsUc.js";import"./useBaseUiId-Czxfo8IM.js";import"./InternalBackdrop-FUgA445z.js";import"./composite-B0giZZNp.js";import"./index-CZqSyQ75.js";import"./index-DTzKTStT.js";import"./index-BRpSDsTW.js";import"./useEventCallback-DVB3Tr-X.js";import"./SkeletonBar-C_Zlhop6.js";import"./LoadingCell-BPg6H0yQ.js";import"./ColumnConfigDialog-C7fwfuDI.js";import"./DraggableList-DI331cme.js";import"./search-CBP8cJDC.js";import"./Input-qUkjXRhl.js";import"./useControlled-DuP52GWw.js";import"./Button-BrCyLpls.js";import"./small-cross-DAjMOIxU.js";import"./ActionButton-Dd-tcsdW.js";import"./Checkbox-6p8xTU07.js";import"./minus-Byiza8_y.js";import"./tick-BVtweADP.js";import"./useValueChanged-DsNaeqFc.js";import"./caret-down-Ba0czr7X.js";import"./CollapsiblePanel-3FjAfanB.js";import"./MultiColumnSortDialog-CIeCx3LO.js";import"./MenuTrigger-UU73kDM9.js";import"./CompositeItem-Cxtn-smO.js";import"./ToolbarRootContext-Chwnb97Z.js";import"./getDisabledMountTransitionStyles-aCGQhW_Q.js";import"./getPseudoElementBounds-MjrtkUY3.js";import"./chevron-down-C7GDvBPP.js";import"./index-CFANrC0c.js";import"./error-C4COkSXz.js";import"./BaseCbacBanner-CaNRxnbr.js";import"./makeExternalStore-YpLwnLlQ.js";import"./Tooltip-CymZ-stg.js";import"./PopoverPopup-B_Kvcyti.js";import"./toNumber-DAtbZWxX.js";import"./useOsdkClient-CxXnA402.js";import"./DropdownField-CdFfIAxn.js";import"./withOsdkMetrics-C22T0HVQ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
