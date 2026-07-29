import{f as n,j as t}from"./iframe-BQLDwnYS.js";import{O as p}from"./object-table-CiK00j02.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DrYcjSID.js";import"./Table-39N7hKFI.js";import"./index-C1Y5AWrw.js";import"./Dialog-BcylHAZC.js";import"./cross-BwP0gjCc.js";import"./svgIconContainer-Dm2wCbyW.js";import"./useBaseUiId-BmyAjBD4.js";import"./InternalBackdrop-CoW5ayVh.js";import"./composite-DO2M4lPA.js";import"./index-Bwp8y7R4.js";import"./index-vNuHTMxc.js";import"./index-DQoyM81Q.js";import"./useEventCallback-tpYRyOos.js";import"./SkeletonBar-D08ug57N.js";import"./LoadingCell-CYR3A6wl.js";import"./ColumnConfigDialog-BI5bvEmf.js";import"./DraggableList-DpC9TOx3.js";import"./search-DJ9ja1DT.js";import"./Input-BSFiHdyo.js";import"./useControlled-AOt-_DXq.js";import"./Button-BJ0OLq1S.js";import"./small-cross-CZoDFuCq.js";import"./ActionButton-DzOL_DSi.js";import"./Checkbox-Pzbxjy4i.js";import"./minus-DFg9Ebm5.js";import"./tick-MskXhkUM.js";import"./useValueChanged-DxvYCI11.js";import"./caret-down-Dp47fQLJ.js";import"./CollapsiblePanel-BGZgqils.js";import"./MultiColumnSortDialog-D6GsvYfQ.js";import"./MenuTrigger-CKpvMl9S.js";import"./CompositeItem-Ca06aqdO.js";import"./ToolbarRootContext-1yW1bLAK.js";import"./getDisabledMountTransitionStyles-DYnR0Bkc.js";import"./getPseudoElementBounds-C1EUm1wS.js";import"./chevron-down-Dacr4Tgv.js";import"./index-DpFgnV-t.js";import"./error-xOyZOf-R.js";import"./BaseCbacBanner-DIDHLDjY.js";import"./makeExternalStore-DNKGCL3m.js";import"./Tooltip-B5DVSsqB.js";import"./PopoverPopup-nA5qKkd7.js";import"./toNumber-CTlQZHTU.js";import"./useOsdkClient-C-nulLpb.js";import"./DropdownField-C0U6-mTz.js";import"./withOsdkMetrics-DFy95XQr.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
