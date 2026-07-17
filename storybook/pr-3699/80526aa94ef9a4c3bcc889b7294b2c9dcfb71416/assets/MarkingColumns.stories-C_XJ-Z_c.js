import{f as n,j as t}from"./iframe-DYnAafHC.js";import{O as p}from"./object-table-Di1JEOrz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DxzTJo3W.js";import"./Table-D9coRyNK.js";import"./index-BVBrlxI_.js";import"./Dialog-BuOEnKCb.js";import"./cross-wz_XfbtT.js";import"./svgIconContainer-B6xn5S7Z.js";import"./useBaseUiId-C30UVm3u.js";import"./InternalBackdrop-_jCpyAQQ.js";import"./composite-DvSsc2iv.js";import"./index-DRLt0VWN.js";import"./index-Bg-fPd7k.js";import"./index-CurmKf7E.js";import"./useEventCallback-BB-iFnZ7.js";import"./SkeletonBar-DG9xpAVj.js";import"./LoadingCell-CC9AvzKG.js";import"./ColumnConfigDialog-4dRT1Ljv.js";import"./DraggableList-giVtIujx.js";import"./search-DYOcRf0h.js";import"./Input-p8qmxPVX.js";import"./useControlled-D5p76dJm.js";import"./Button-ChSbeVDk.js";import"./small-cross-IC35-HcE.js";import"./ActionButton-BKunTr0_.js";import"./Checkbox-BhdN81HQ.js";import"./useValueChanged-BZ0OTvnQ.js";import"./CollapsiblePanel-BivIIKlJ.js";import"./MultiColumnSortDialog-D556NEeD.js";import"./MenuTrigger-CWvDOQk6.js";import"./CompositeItem-C15RAxHz.js";import"./ToolbarRootContext-1tPnZKjL.js";import"./getDisabledMountTransitionStyles-BV8MTAqu.js";import"./getPseudoElementBounds-vjqlx92n.js";import"./chevron-down-DaZ61-db.js";import"./index-BgaFvTkb.js";import"./error-B1scN5MD.js";import"./BaseCbacBanner-C3GBbYTn.js";import"./makeExternalStore-DRaP3Ol2.js";import"./Tooltip-hXN1CV7X.js";import"./PopoverPopup-BLg6IJl7.js";import"./toNumber-C_36ykUr.js";import"./useOsdkClient-C8tudZEX.js";import"./tick-Bd-53SJj.js";import"./DropdownField-Bwg4ozql.js";import"./withOsdkMetrics-CYwW5Ya9.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
