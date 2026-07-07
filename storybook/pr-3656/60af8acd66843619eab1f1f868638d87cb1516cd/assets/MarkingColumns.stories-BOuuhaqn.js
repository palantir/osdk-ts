import{f as n,j as t}from"./iframe-BSUZxh-9.js";import{O as p}from"./object-table-DsMFXnDg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BhicQgxj.js";import"./Table-h5Nl6TkD.js";import"./index-PZ02iCA_.js";import"./Dialog-CgjNKwCt.js";import"./cross-C18nhb5p.js";import"./svgIconContainer-DjMnKwvc.js";import"./useBaseUiId-CDKqUQr4.js";import"./InternalBackdrop-BLr6OFX_.js";import"./composite-DEKiG8Z3.js";import"./index-k6doTGvs.js";import"./index-DmJ1u2c6.js";import"./index-B4BBm_bI.js";import"./useEventCallback-pVn6_HIX.js";import"./SkeletonBar-D8IS6cum.js";import"./LoadingCell-Co1XtM6o.js";import"./ColumnConfigDialog-NTaRfLA9.js";import"./DraggableList-XNqkbyKL.js";import"./search-CZUb2qBT.js";import"./Input-BpSByKf4.js";import"./useControlled-CoF5fTAt.js";import"./Button-IuSyIF4u.js";import"./small-cross-BPEb-CXj.js";import"./ActionButton-DEXLIQwI.js";import"./Checkbox-BXgVPqk5.js";import"./useValueChanged-Dub4Fd2O.js";import"./CollapsiblePanel-BUceK6DN.js";import"./MultiColumnSortDialog-8kEzXZAU.js";import"./MenuTrigger-B0GmK9X-.js";import"./CompositeItem-CdjXHz2a.js";import"./ToolbarRootContext-BHZuK8Kw.js";import"./getDisabledMountTransitionStyles-DZQchHTO.js";import"./getPseudoElementBounds-50h8EpUJ.js";import"./chevron-down-DOiBGOW0.js";import"./index-BTU-MtEl.js";import"./error-95LyalOl.js";import"./BaseCbacBanner-eJhBqKD5.js";import"./makeExternalStore-BlYL4sto.js";import"./Tooltip-X7jk9v54.js";import"./PopoverPopup-BSzQMGhm.js";import"./toNumber-DYcIL89m.js";import"./useOsdkClient-CRdPpGRB.js";import"./tick-BR7TmUHI.js";import"./DropdownField-CeNacCYx.js";import"./withOsdkMetrics-CxSOL3gI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
