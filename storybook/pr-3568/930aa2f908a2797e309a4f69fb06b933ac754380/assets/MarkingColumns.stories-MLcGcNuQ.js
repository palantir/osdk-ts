import{f as n,j as t}from"./iframe-DNEXoeer.js";import{O as p}from"./object-table-DlrANLZs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Jn8sG95d.js";import"./Table-DjWNPthp.js";import"./index-BEofSLlc.js";import"./Dialog-CyIu53Qu.js";import"./cross-DXjHMq23.js";import"./svgIconContainer-D3j8o7X8.js";import"./useBaseUiId-KYMCvl8Q.js";import"./InternalBackdrop-BOJopDhG.js";import"./composite-DBM_-mux.js";import"./index-DHqw5lp6.js";import"./index-CbvGK0GC.js";import"./index-DRng74gs.js";import"./useEventCallback-DGUuNK2j.js";import"./SkeletonBar-BB_InBwH.js";import"./LoadingCell-JnVHlUXD.js";import"./ColumnConfigDialog-DlpupgEa.js";import"./DraggableList-7kazfaXe.js";import"./search-C6tTsP5I.js";import"./Input-C_rLILSM.js";import"./useControlled-CrZ8m48H.js";import"./Button-DbE8yzwJ.js";import"./small-cross-DD6j7egF.js";import"./ActionButton-SeJtVlHK.js";import"./Checkbox-DPwJBjOg.js";import"./minus-DZ9hqfUK.js";import"./tick-BrVY_ywf.js";import"./useValueChanged-CnP_pmLh.js";import"./caret-down-DSZKMFhv.js";import"./CollapsiblePanel-XMzYnZjh.js";import"./MultiColumnSortDialog-CFDJ4rgw.js";import"./MenuTrigger-C-n9LlVB.js";import"./CompositeItem-Ddc2UdGN.js";import"./ToolbarRootContext-C2EqUJvX.js";import"./getDisabledMountTransitionStyles-Cj7xudUZ.js";import"./getPseudoElementBounds-Oj_rVv4V.js";import"./chevron-down-BaCTdFdO.js";import"./index-Do1-DySI.js";import"./error-CxUo4vYl.js";import"./BaseCbacBanner-Cw9oE7K0.js";import"./makeExternalStore-JUOQRF9X.js";import"./Tooltip-B0O9YIot.js";import"./PopoverPopup-B_uapGyU.js";import"./toNumber-AJyOgagw.js";import"./useOsdkClient-BS8NCi32.js";import"./DropdownField-MbEpWA_S.js";import"./withOsdkMetrics-Cd3UTLRz.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
