import{f as n,j as t}from"./iframe-Bdo2Di7r.js";import{O as p}from"./object-table-BKv79kcT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B15x2S9q.js";import"./Table-BC2_4q45.js";import"./index-BdqDAckw.js";import"./Dialog-CsuwZu7C.js";import"./cross-CzBgvdiS.js";import"./svgIconContainer-Cv1BdOht.js";import"./useBaseUiId-Bi1WURGV.js";import"./InternalBackdrop-BHCFzCwP.js";import"./composite-B6AQIM1z.js";import"./index-BAVX2Eg5.js";import"./index-GVK2X5FZ.js";import"./index-CUsHopsA.js";import"./useEventCallback-_vyLgHXX.js";import"./SkeletonBar-BbdMKpku.js";import"./LoadingCell-eDitSB8a.js";import"./ColumnConfigDialog-MlALCRHT.js";import"./DraggableList-DYKQaxzi.js";import"./search-DEYIpsf_.js";import"./Input-DXGGFzVW.js";import"./useControlled-DHUJClmm.js";import"./Button-Bwp5yWEl.js";import"./small-cross-DHpfRRFe.js";import"./ActionButton-DTxv_v0p.js";import"./Checkbox-BLDFI16X.js";import"./minus-2GBm80LR.js";import"./tick-DCnAG0Kc.js";import"./useValueChanged-B-za9cGu.js";import"./caret-down-XGfgYBFP.js";import"./CollapsiblePanel-DKHFrFAW.js";import"./MultiColumnSortDialog-D2GuKRCN.js";import"./MenuTrigger-DdHdL1-q.js";import"./CompositeItem-B2GuXSMq.js";import"./ToolbarRootContext-C-Lj4Taw.js";import"./getDisabledMountTransitionStyles-BIimCZjE.js";import"./getPseudoElementBounds-Dvse4gv_.js";import"./chevron-down-D67R2oZA.js";import"./index-CQkhqH3A.js";import"./error-Cha-oVGp.js";import"./BaseCbacBanner-D22cPiMK.js";import"./makeExternalStore-DaUtM8qt.js";import"./Tooltip-CxH1rknr.js";import"./PopoverPopup-EI_5lSgH.js";import"./toNumber-B1eLxWqg.js";import"./useOsdkClient-BgmGbDu0.js";import"./DropdownField-7C4q1h8_.js";import"./withOsdkMetrics-4YWdMVFl.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
