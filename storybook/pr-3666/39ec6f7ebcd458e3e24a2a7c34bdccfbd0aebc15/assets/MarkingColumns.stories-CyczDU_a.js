import{f as n,j as t}from"./iframe-BhnINO4e.js";import{O as p}from"./object-table-BBHPoUcH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Btob_6a7.js";import"./Table-BozqUdgW.js";import"./index-BCs216IN.js";import"./Dialog-9SmfN-ep.js";import"./cross-JOd8z0MY.js";import"./svgIconContainer-qoCiNjam.js";import"./useBaseUiId-DfXxSOr4.js";import"./InternalBackdrop-CZhr_bNJ.js";import"./composite-C6UQpI1w.js";import"./index-DBDuuWp4.js";import"./index-EBTsre-T.js";import"./index-B0ddTdj_.js";import"./useEventCallback-zkxswS2C.js";import"./SkeletonBar-NBejptPP.js";import"./LoadingCell-D3_skdBU.js";import"./ColumnConfigDialog-uORu_o14.js";import"./DraggableList-IxUtcvyG.js";import"./search-4hHFLBiv.js";import"./Input-22ZvK9e6.js";import"./useControlled-C-H5nWhD.js";import"./Button-CmpsHaRG.js";import"./small-cross-DV-Bdy7H.js";import"./ActionButton-c2FAkdXQ.js";import"./Checkbox-CB2OQk9S.js";import"./useValueChanged-DxD-b-Ps.js";import"./CollapsiblePanel-Br2yaUim.js";import"./MultiColumnSortDialog-CKAC-0bz.js";import"./MenuTrigger-ZIItONTS.js";import"./CompositeItem-a0psnQ2u.js";import"./ToolbarRootContext-BzKw37iN.js";import"./getDisabledMountTransitionStyles-D4cXitY6.js";import"./getPseudoElementBounds-BlPgyiQ4.js";import"./chevron-down-BThcgbEe.js";import"./index-CVFFvWtS.js";import"./error-DdF7WtTH.js";import"./BaseCbacBanner-Bent9Tne.js";import"./makeExternalStore-DJaVwCYK.js";import"./Tooltip-DxepfwSx.js";import"./PopoverPopup-C-Qsntu3.js";import"./toNumber-1UBaHJ8R.js";import"./useOsdkClient-BzPA9l3P.js";import"./tick-naeoiAsd.js";import"./DropdownField-Dju8H7LX.js";import"./withOsdkMetrics-CIueimwg.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
