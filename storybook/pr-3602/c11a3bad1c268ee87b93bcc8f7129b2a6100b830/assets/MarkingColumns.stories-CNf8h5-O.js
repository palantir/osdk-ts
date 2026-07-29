import{f as n,j as t}from"./iframe-BfAHjPGf.js";import{O as p}from"./object-table-DsMqfjwg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDZ-cUvQ.js";import"./Table-siAu9dlP.js";import"./index-DG2p6Sd4.js";import"./Dialog-GujKXg2o.js";import"./cross-CotgEkuy.js";import"./svgIconContainer-BBdvvMPo.js";import"./useBaseUiId-DGVbTCcE.js";import"./InternalBackdrop-DoROMICp.js";import"./composite-BUNybKLT.js";import"./index-D2a2NtcU.js";import"./index-D_8m8W-J.js";import"./index-PLKxXXxc.js";import"./useEventCallback-BB3OH07V.js";import"./SkeletonBar-CXGC1Wyq.js";import"./LoadingCell-C9fzPL15.js";import"./ColumnConfigDialog-DxiKXWQy.js";import"./DraggableList-CcF5SJO7.js";import"./search-CNcscxpo.js";import"./Input-DFhmC3LO.js";import"./useControlled-Cl7EmgCF.js";import"./Button-BdCGxi6G.js";import"./small-cross-Cd7eM4_4.js";import"./ActionButton-B71OfOhX.js";import"./Checkbox-t04BTiPb.js";import"./minus-D6QLdQgL.js";import"./tick-p8jKcwR1.js";import"./useValueChanged-cR3I6g86.js";import"./caret-down-CoxPAkd7.js";import"./CollapsiblePanel-CJSQrRdw.js";import"./MultiColumnSortDialog-C1qMfzVD.js";import"./MenuTrigger-CbE85xfv.js";import"./CompositeItem-5aOlao6S.js";import"./ToolbarRootContext-D7F5EGiG.js";import"./getDisabledMountTransitionStyles-CkNA_V27.js";import"./getPseudoElementBounds-BqQvrthz.js";import"./chevron-down-Ds2-hpaT.js";import"./index-C3fLuNUq.js";import"./error-BzqA9U8Y.js";import"./BaseCbacBanner-DXkQQnLr.js";import"./makeExternalStore-VhHKzDTZ.js";import"./Tooltip-Coo19qUk.js";import"./PopoverPopup-DqgTvrMC.js";import"./toNumber-3e-2Tz4L.js";import"./useOsdkClient-CRARELAm.js";import"./DropdownField-BbHrKq6r.js";import"./withOsdkMetrics-C8gorUNk.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
