import{f as n,j as t}from"./iframe-5hUGPGFG.js";import{O as p}from"./object-table-COZjRyCg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJdwYBXx.js";import"./Table-BbQdodnm.js";import"./index-DLcCUbn1.js";import"./Dialog-V6nYoHZJ.js";import"./cross-U1SWpnoO.js";import"./svgIconContainer-B5Jyq-Wg.js";import"./useBaseUiId-DJajkDSm.js";import"./InternalBackdrop-BtrFxQf_.js";import"./composite-_LrboIJk.js";import"./index-BiaN8C24.js";import"./index-CQiTfYP_.js";import"./index-KQkGOchM.js";import"./useEventCallback-BCOGUPbA.js";import"./SkeletonBar-DHgYZJOe.js";import"./LoadingCell--Bp3Qael.js";import"./ColumnConfigDialog-Ex4azvu5.js";import"./DraggableList-BurtO9cD.js";import"./search-B42e95Ec.js";import"./Input-DKvYXO_W.js";import"./useControlled-B2g2UBH_.js";import"./Button-BaWfHYRR.js";import"./small-cross-BY9h7Qe_.js";import"./ActionButton-CXEvEX1s.js";import"./Checkbox-CaLwATSS.js";import"./useValueChanged-C300BAoU.js";import"./CollapsiblePanel-Cbas-oCb.js";import"./MultiColumnSortDialog-CjbAUeNx.js";import"./MenuTrigger-D28CUOqm.js";import"./CompositeItem-gDdBu88z.js";import"./ToolbarRootContext-CO-RKzZj.js";import"./getDisabledMountTransitionStyles-Bwp3qJr4.js";import"./getPseudoElementBounds-2uX0E92Z.js";import"./chevron-down-CdGGh6rq.js";import"./index-DLqXMb-q.js";import"./error-B87B4TKS.js";import"./BaseCbacBanner-ChCTjNHa.js";import"./makeExternalStore-qHOfLjNT.js";import"./Tooltip-Cv3jUOjq.js";import"./PopoverPopup-BkSNjqmS.js";import"./toNumber-YFCt8XiA.js";import"./useOsdkClient-tszG82Md.js";import"./tick-BHAzlyxW.js";import"./DropdownField-CBhFA2us.js";import"./withOsdkMetrics-Kwe1rYAM.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
