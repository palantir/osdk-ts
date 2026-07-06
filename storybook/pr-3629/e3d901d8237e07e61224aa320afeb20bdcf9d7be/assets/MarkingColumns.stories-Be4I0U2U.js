import{f as n,j as t}from"./iframe-CS4uInNs.js";import{O as p}from"./object-table-DRzIZ7LQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJbiWg0J.js";import"./Table-CD9_iLEO.js";import"./index-Mo7NaMAc.js";import"./Dialog-zVUd41rH.js";import"./cross-BjOhv1Ii.js";import"./svgIconContainer-BcZVA4m2.js";import"./useBaseUiId-DmeLcsx8.js";import"./InternalBackdrop-48_45n9a.js";import"./composite-CZDWh6fZ.js";import"./index-Dn8izZ7b.js";import"./index-B9D3MW7f.js";import"./index-Bk2F0NsR.js";import"./useEventCallback-CG0Bk5Ij.js";import"./SkeletonBar-BBIF6j-q.js";import"./LoadingCell-C6tRtutt.js";import"./ColumnConfigDialog-Cm0ZWsLU.js";import"./DraggableList-DJXlkHk3.js";import"./search-C2vneXVH.js";import"./Input-BJASKMpQ.js";import"./useControlled-HOGSaRNJ.js";import"./Button-CRGIRpju.js";import"./small-cross-C4Ds-b-A.js";import"./ActionButton-ySAFd6Oh.js";import"./Checkbox-D8ntgg_R.js";import"./useValueChanged-BLEcRSuA.js";import"./CollapsiblePanel-Dw6zStVy.js";import"./MultiColumnSortDialog-DL4JMF1r.js";import"./MenuTrigger-hszqNc-n.js";import"./CompositeItem-CMg-qIJ6.js";import"./ToolbarRootContext-B6_w_oot.js";import"./getDisabledMountTransitionStyles-BqUHr_KI.js";import"./getPseudoElementBounds-DxfeFpbb.js";import"./chevron-down-Bzytuh9J.js";import"./index-AO9C5vmj.js";import"./error-Bl0z0l3a.js";import"./BaseCbacBanner-pDueZ2GB.js";import"./makeExternalStore-B5Sbxl5a.js";import"./Tooltip-hmGCeVJd.js";import"./PopoverPopup-CY4qX-zx.js";import"./toNumber-DUsB0pCA.js";import"./useOsdkClient-D9w-rdhZ.js";import"./tick-B-3Cv4go.js";import"./DropdownField-DpuivjWs.js";import"./withOsdkMetrics-DNx8DpSS.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
