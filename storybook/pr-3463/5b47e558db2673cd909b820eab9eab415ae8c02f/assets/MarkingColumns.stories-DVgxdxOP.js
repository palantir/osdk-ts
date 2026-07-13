import{f as n,j as t}from"./iframe-BI2BvdSn.js";import{O as p}from"./object-table-5UFs14ib.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp7OlpU-.js";import"./Table-Cvo8_PGV.js";import"./index-BIWK-oDl.js";import"./Dialog-bUBcUYkq.js";import"./cross-C6K3Vij4.js";import"./svgIconContainer-Dv0B_rwA.js";import"./useBaseUiId-cKcVT06J.js";import"./InternalBackdrop-Dx4__PEN.js";import"./composite-CEeOlS1-.js";import"./index-B8RX0TAT.js";import"./index-BTjFp-Bp.js";import"./index-CZt6g497.js";import"./useEventCallback-PtWEDgxW.js";import"./SkeletonBar-B2G3ijUw.js";import"./LoadingCell-DP2jkdWt.js";import"./ColumnConfigDialog-DDfGeoEP.js";import"./DraggableList-zTTv8vxK.js";import"./search-DLNQ0f47.js";import"./Input-DoP09scN.js";import"./useControlled-FtZVcRbK.js";import"./Button-BeEEXMwF.js";import"./small-cross-CMN8Wugs.js";import"./ActionButton-CkU0dUKS.js";import"./Checkbox-BZuC3KUc.js";import"./useValueChanged-DkllqS6w.js";import"./CollapsiblePanel-BP1wEsk5.js";import"./MultiColumnSortDialog-CPT0UGkM.js";import"./MenuTrigger-DSLkwEax.js";import"./CompositeItem-B8IS25xa.js";import"./ToolbarRootContext-B7EklFh7.js";import"./getDisabledMountTransitionStyles-DMe9itzl.js";import"./getPseudoElementBounds-DHKivReb.js";import"./chevron-down-CgnTIL0S.js";import"./index-CMvDzfLR.js";import"./error-CmZ7CLV6.js";import"./BaseCbacBanner-BbFbM-VG.js";import"./makeExternalStore-DLVI6Pro.js";import"./Tooltip-BsvfDB8I.js";import"./PopoverPopup-DMqdRfaa.js";import"./toNumber-DLK6PeXz.js";import"./useOsdkClient-8ElrZ5ZV.js";import"./tick-DmvogLOo.js";import"./DropdownField-BEyXsPMf.js";import"./withOsdkMetrics-D9EoHykR.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
