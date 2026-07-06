import{f as n,j as t}from"./iframe-DcDxDXPh.js";import{O as p}from"./object-table-Diie1dUd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJ_iPk25.js";import"./Table-CufYny3h.js";import"./index-CEdBBQfQ.js";import"./Dialog-uf0Hkf_Z.js";import"./cross-DLkj6s4G.js";import"./svgIconContainer-DmQcC8TZ.js";import"./useBaseUiId-CJV4f8ir.js";import"./InternalBackdrop-bLOqdFA0.js";import"./composite-BV8flE8-.js";import"./index-Bo7bFw7e.js";import"./index-Bd2fH6T1.js";import"./index-rnDS6JuP.js";import"./useEventCallback-D4vRBzVu.js";import"./SkeletonBar-4V2qsMpO.js";import"./LoadingCell-8kNCdR14.js";import"./ColumnConfigDialog-CoinOv4o.js";import"./DraggableList-_eNgIQ1M.js";import"./search-BIJAhPAv.js";import"./Input-C74RgTJ1.js";import"./useControlled-BOSZXyc3.js";import"./Button-x-QMq-Ld.js";import"./small-cross-QpcQcsBN.js";import"./ActionButton-2kaK6vOe.js";import"./Checkbox-CzyWDEiz.js";import"./useValueChanged-Dk8yNpd3.js";import"./CollapsiblePanel-BwuvB16x.js";import"./MultiColumnSortDialog-CPQ9KF9X.js";import"./MenuTrigger-BphmZFAA.js";import"./CompositeItem-EY_8vSU6.js";import"./ToolbarRootContext-DuPFC5xg.js";import"./getDisabledMountTransitionStyles-Cr6igIIA.js";import"./getPseudoElementBounds-wV-qD_HN.js";import"./chevron-down-GHr7mfww.js";import"./index-CQYalOHm.js";import"./error-BoT5VSIl.js";import"./BaseCbacBanner-mSp5NL2W.js";import"./makeExternalStore-CdCSrcFn.js";import"./Tooltip-BcbgnN6W.js";import"./PopoverPopup-B0jh_TSh.js";import"./toNumber--BCa706p.js";import"./useOsdkClient-4IHPzbi4.js";import"./tick-DYchyi13.js";import"./DropdownField-DGveOHEx.js";import"./withOsdkMetrics-4iii51WK.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
