import{f as n,j as t}from"./iframe-BxhNzdCJ.js";import{O as p}from"./object-table-tAO4IS1e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ci3X22NU.js";import"./Table-BwtjkK5y.js";import"./index-fanh_WPF.js";import"./Dialog-ca0PmxFE.js";import"./cross-BOHizEE7.js";import"./svgIconContainer-CXD-puPH.js";import"./useBaseUiId-CTbNHlSx.js";import"./InternalBackdrop-B3Mf8s8D.js";import"./composite-sISphl_D.js";import"./index-CXR4AaOd.js";import"./index-BGjCYo6U.js";import"./index-gzUvqnxz.js";import"./useEventCallback-nVJPfxxX.js";import"./SkeletonBar-CAsANZTJ.js";import"./LoadingCell-BlwGn9qz.js";import"./ColumnConfigDialog-BUx2itHP.js";import"./DraggableList-Bo2TvcAz.js";import"./search-B_J-Ls4Z.js";import"./Input-Db5psvur.js";import"./useControlled-DvKCh5A7.js";import"./Button-Cxe4C__-.js";import"./small-cross-ClNuFQ5x.js";import"./ActionButton-Cl6qrblv.js";import"./Checkbox-BDXpw27p.js";import"./useValueChanged-iTNuMqYd.js";import"./CollapsiblePanel-DAu5Jb9J.js";import"./MultiColumnSortDialog-C7BUF2sq.js";import"./MenuTrigger-Cat9N4D4.js";import"./CompositeItem-jiPXxB8m.js";import"./ToolbarRootContext-VBUgETwl.js";import"./getDisabledMountTransitionStyles-DiN1cA4V.js";import"./getPseudoElementBounds-AtJgKmst.js";import"./chevron-down-AE2xmaec.js";import"./index-DxXXqXtC.js";import"./error-DR34QZtV.js";import"./BaseCbacBanner-BGAwM8iz.js";import"./makeExternalStore-D-dfFmaH.js";import"./Tooltip-DlAh04ya.js";import"./PopoverPopup--wiRngg0.js";import"./toNumber-blj0y3rl.js";import"./useOsdkClient-DDp9zlyg.js";import"./tick-CxaWKoWf.js";import"./DropdownField-Br4eaa0F.js";import"./withOsdkMetrics-Cm3IXA24.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
