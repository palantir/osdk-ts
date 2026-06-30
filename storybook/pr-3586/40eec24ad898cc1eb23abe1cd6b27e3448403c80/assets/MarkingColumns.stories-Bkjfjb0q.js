import{f as n,j as t}from"./iframe-DZZHFJmw.js";import{O as p}from"./object-table-BkjRexJF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJceTJ8d.js";import"./Table-BAYVWW9f.js";import"./index-VITHv6a3.js";import"./Dialog-BgNxXvy0.js";import"./cross-4GtN4qRa.js";import"./svgIconContainer-TzyOOZKZ.js";import"./useBaseUiId-C69MfeSb.js";import"./InternalBackdrop-B6ZavwqF.js";import"./composite-CljN3DGi.js";import"./index-BfnbsDzj.js";import"./index-5noR99D-.js";import"./index-BHPoMziH.js";import"./useEventCallback-q9omur47.js";import"./SkeletonBar-BmAdGYUM.js";import"./LoadingCell-BkwUV2Zo.js";import"./ColumnConfigDialog-O3QnNEyr.js";import"./DraggableList-DvpZ4ylf.js";import"./search-DL3c18ql.js";import"./Input-BJPxEvRk.js";import"./useControlled-G_Xvx-vc.js";import"./Button-D3DZb9qu.js";import"./small-cross-C7BJRpjG.js";import"./ActionButton-B9Z1gBfw.js";import"./Checkbox-sM_K8pru.js";import"./minus-CT8TcW8v.js";import"./tick-DPCWaP02.js";import"./useValueChanged-CbVIBtOR.js";import"./caret-down-D_MiTw9X.js";import"./CollapsiblePanel-Bo-md_Z5.js";import"./MultiColumnSortDialog-BPeh5vpF.js";import"./MenuTrigger-D5C0x9fI.js";import"./CompositeItem-BmlizI67.js";import"./ToolbarRootContext-ChGde8zf.js";import"./getDisabledMountTransitionStyles-DYRZ940R.js";import"./getPseudoElementBounds-DYh-oxP2.js";import"./chevron-down-BpvjPXmx.js";import"./index-DWUp4-rj.js";import"./error-90e_qXyW.js";import"./BaseCbacBanner-CRMJUSux.js";import"./makeExternalStore-BZQNpYye.js";import"./Tooltip-DkrH2ebZ.js";import"./PopoverPopup-Cltg3aYX.js";import"./toNumber-3zy__6vg.js";import"./useOsdkClient-Cl80hZ4I.js";import"./DropdownField-B9KQ3Ew_.js";import"./withOsdkMetrics-Dh6FTXUA.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
