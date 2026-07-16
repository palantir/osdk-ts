import{f as n,j as t}from"./iframe-2P5rSZYB.js";import{O as p}from"./object-table-DBZYYZ7V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUMBN1oE.js";import"./Table-tGI-RqsB.js";import"./index-CAoow5Tc.js";import"./Dialog-BqCkGum9.js";import"./cross-C8buVPN_.js";import"./svgIconContainer-BuLz4yUd.js";import"./useBaseUiId-DkVMBaZu.js";import"./InternalBackdrop-CWIMTXlO.js";import"./composite-wSp6B-w9.js";import"./index-Sbnqq9EV.js";import"./index-ZhrmGNEl.js";import"./index-DwuIiRHv.js";import"./useEventCallback-CuYb76_M.js";import"./SkeletonBar-cwSOP0v3.js";import"./LoadingCell-QdSu1e8-.js";import"./ColumnConfigDialog-Civ2cvhV.js";import"./DraggableList-9xmZqlTG.js";import"./search-BlAQj842.js";import"./Input-DzG-mEdZ.js";import"./useControlled-Cwm3UgkD.js";import"./Button-DgF_AxYC.js";import"./small-cross-RsorBwtB.js";import"./ActionButton-BUSQ8b9F.js";import"./Checkbox-BrBLynVL.js";import"./useValueChanged-B-o5hxCd.js";import"./CollapsiblePanel-CQUtIe1d.js";import"./MultiColumnSortDialog-NsaE_5cz.js";import"./MenuTrigger-DreGP4Mx.js";import"./CompositeItem-Bwok9D42.js";import"./ToolbarRootContext-D7fp9PDG.js";import"./getDisabledMountTransitionStyles-D_gtUdu-.js";import"./getPseudoElementBounds-BYwi6ks8.js";import"./chevron-down-DhT9HmUD.js";import"./index-KpZvxqHP.js";import"./error-pihzJHIB.js";import"./BaseCbacBanner-CKLdKt3Y.js";import"./makeExternalStore-Bn6vdpUB.js";import"./Tooltip-Cp8615gS.js";import"./PopoverPopup-CE0q6tnn.js";import"./toNumber-QdXTmCBs.js";import"./useOsdkClient-D8RwzEZe.js";import"./tick-D6AyEnNR.js";import"./DropdownField-n4Kv9KFR.js";import"./withOsdkMetrics-DoJyDwoq.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
