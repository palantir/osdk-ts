import{f as n,j as t}from"./iframe-Ezmn3SpD.js";import{O as p}from"./object-table-jkITdLt1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1sYuYBN.js";import"./Table-DQJoOAmw.js";import"./index-Dvdston6.js";import"./Dialog-wiu3zspj.js";import"./cross-DSxhrQdq.js";import"./svgIconContainer-D8jweW8c.js";import"./useBaseUiId-DpAA4MUF.js";import"./InternalBackdrop-CPmZM3DF.js";import"./composite-BJqFUzwo.js";import"./index-Cka30kGH.js";import"./index-D74pndlv.js";import"./index-CwbpdQqh.js";import"./useEventCallback-SPCUyqSn.js";import"./SkeletonBar-1qffMjRv.js";import"./LoadingCell-qeFxWN0E.js";import"./ColumnConfigDialog-B_Z7CU6Y.js";import"./DraggableList-B1aMCaHM.js";import"./search-BuE3nooh.js";import"./Input-mfyhe4pd.js";import"./useControlled-CyVTukR4.js";import"./Button-DHPNKO3h.js";import"./small-cross-C_p6btAG.js";import"./ActionButton-Dw2TvSwZ.js";import"./Checkbox-DC_XMr11.js";import"./useValueChanged-Drcgmxk4.js";import"./CollapsiblePanel-Cd39eH2_.js";import"./MultiColumnSortDialog-ewQoQt_o.js";import"./MenuTrigger-DPd2HAYL.js";import"./CompositeItem-BryZKdtO.js";import"./ToolbarRootContext-BKo8VDoh.js";import"./getDisabledMountTransitionStyles-lYQ5Tu-y.js";import"./getPseudoElementBounds-DM2qIU3_.js";import"./chevron-down-rI_3aJAm.js";import"./index-DInb5O-C.js";import"./error-kPlzrDKd.js";import"./BaseCbacBanner-D9ywO_q4.js";import"./makeExternalStore-CHWv51JV.js";import"./Tooltip-DGvqjDv3.js";import"./PopoverPopup-BanAwc_9.js";import"./toNumber-BFhbbpeU.js";import"./useOsdkClient-DiDAub41.js";import"./tick-Bq_imMdP.js";import"./DropdownField-CTo4OggT.js";import"./withOsdkMetrics--KcbetR1.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
