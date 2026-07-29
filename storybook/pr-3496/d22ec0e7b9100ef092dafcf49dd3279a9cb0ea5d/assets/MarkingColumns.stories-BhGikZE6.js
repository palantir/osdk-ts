import{f as n,j as t}from"./iframe-CSv4fsmn.js";import{O as p}from"./object-table-B_cGFUC8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BQj0eB2I.js";import"./Table-DoLa6X01.js";import"./index-BE-whNRA.js";import"./Dialog-BVqlF-5l.js";import"./cross-ChO7d5el.js";import"./svgIconContainer-DkmhJI17.js";import"./useBaseUiId-DesniMHJ.js";import"./InternalBackdrop-e5sdvOU4.js";import"./composite-DQCNq2IS.js";import"./index-D5kf7_UZ.js";import"./index-CW8NF73c.js";import"./index-DIih-l5f.js";import"./useEventCallback-Cb0fLCIt.js";import"./SkeletonBar-AqwIrR_u.js";import"./LoadingCell-BtkD_zoQ.js";import"./ColumnConfigDialog-Drwgqft8.js";import"./DraggableList-DNVvf6wo.js";import"./Input-oqkuNLJn.js";import"./useControlled-_jd58WTc.js";import"./Button-Dz33Hx5F.js";import"./small-cross-BT9peSM0.js";import"./ActionButton-Bg0ypBw_.js";import"./Checkbox-B03vbF19.js";import"./minus-BE_E3tvR.js";import"./useValueChanged-BGOWsOJn.js";import"./caret-down-CyKixBl8.js";import"./CollapsiblePanel-DoKA2jgz.js";import"./MultiColumnSortDialog-Gi9IDJFs.js";import"./MenuTrigger-Boc5HxXz.js";import"./CompositeItem-DlMpB8Zb.js";import"./ToolbarRootContext-CpHp2HWk.js";import"./getDisabledMountTransitionStyles-usSJHKVB.js";import"./getPseudoElementBounds-vldNdDey.js";import"./chevron-down-CiDb3tQG.js";import"./index-Cs7raReD.js";import"./error-CrLVp0Mu.js";import"./BaseCbacBanner-Cnjq77EH.js";import"./makeExternalStore-C2PAuITx.js";import"./Tooltip-Vd4TmJuS.js";import"./PopoverPopup-DnIvamYy.js";import"./toNumber-CPTEgwp6.js";import"./useOsdkClient-Bnrm2Svm.js";import"./DropdownField-C4PfGBjV.js";import"./withOsdkMetrics-qjgH15uq.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
