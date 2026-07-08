import{f as n,j as t}from"./iframe-DLgN9t5v.js";import{O as p}from"./object-table-34w04hWF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GQQxIkh6.js";import"./Table-DzuQkSYt.js";import"./index-v3g8ifCJ.js";import"./Dialog-C-QgcqK3.js";import"./cross-CzHPX12u.js";import"./svgIconContainer-B6EElgGO.js";import"./useBaseUiId-Dpa6Beos.js";import"./InternalBackdrop-V04FIXgh.js";import"./composite-C2s2hLKa.js";import"./index-BM-l2K5c.js";import"./index-a1A_OxAE.js";import"./index-BwJAkJv1.js";import"./useEventCallback-o7YpFJsj.js";import"./SkeletonBar-CN0GwcLf.js";import"./LoadingCell-9GaZ4oJd.js";import"./ColumnConfigDialog-BiBtls34.js";import"./DraggableList-GC1TqFSn.js";import"./search-Jp1XmHuj.js";import"./Input-b1uAx6Zz.js";import"./useControlled-DT8eUeYS.js";import"./Button-BfnbSWIb.js";import"./small-cross-CVQt8Ks_.js";import"./ActionButton-D_N-OK6l.js";import"./Checkbox-DSsTRlNG.js";import"./useValueChanged-FPN9SdMx.js";import"./CollapsiblePanel-BPQFlcoS.js";import"./MultiColumnSortDialog-FXvq8cwQ.js";import"./MenuTrigger-B5hFoqfQ.js";import"./CompositeItem-Cn-Qie6A.js";import"./ToolbarRootContext-CHwAKDGY.js";import"./getDisabledMountTransitionStyles-DB0kxARq.js";import"./getPseudoElementBounds-BzJR15pk.js";import"./chevron-down-DnTpC6Sk.js";import"./index-l9c4hdaB.js";import"./error-DMFq-J5M.js";import"./BaseCbacBanner-CxWsWGOl.js";import"./makeExternalStore-5Xs92RZ7.js";import"./Tooltip-Ctk9N1Ub.js";import"./PopoverPopup-DR1if8FI.js";import"./toNumber-Dn2fLBdr.js";import"./useOsdkClient-CMy8NqZm.js";import"./tick-D9DlMsNC.js";import"./DropdownField-CgMc_rQC.js";import"./withOsdkMetrics-DBL8VqE1.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
