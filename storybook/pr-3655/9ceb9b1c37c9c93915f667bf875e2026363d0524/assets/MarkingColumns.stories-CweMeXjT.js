import{f as n,j as t}from"./iframe-BQbGwNJm.js";import{O as p}from"./object-table-BognDTfg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZhVWGpL.js";import"./Table-Dyy12RoJ.js";import"./index-c-KUwE8v.js";import"./Dialog-DAsx1ved.js";import"./cross-1e7sKJ3H.js";import"./svgIconContainer-Bkd6Vdtd.js";import"./useBaseUiId-GT7f3Dl5.js";import"./InternalBackdrop-CIefoPyf.js";import"./composite-CXqMHlaT.js";import"./index-BwjBTWX5.js";import"./index-N7hAlELw.js";import"./index-CbWwUOkp.js";import"./useEventCallback-CAV2-487.js";import"./SkeletonBar-CK50ZYqu.js";import"./LoadingCell-BZdUw99S.js";import"./ColumnConfigDialog-DfjYbH1W.js";import"./DraggableList-0g-g5Ly1.js";import"./search-7Vs1LIzt.js";import"./Input-WeXDQawZ.js";import"./useControlled-DWqy833M.js";import"./Button-DIIydijW.js";import"./small-cross-BAgD33WR.js";import"./ActionButton-D6oe6z6v.js";import"./Checkbox-DXJIDB_i.js";import"./useValueChanged-BVXDdxok.js";import"./CollapsiblePanel-cFj0uu4h.js";import"./MultiColumnSortDialog-BDUUy0a7.js";import"./MenuTrigger-W5gm63Uc.js";import"./CompositeItem-DQ9TTb0x.js";import"./ToolbarRootContext-B__DhFIx.js";import"./getDisabledMountTransitionStyles-DWv_AR3l.js";import"./getPseudoElementBounds-Cm1LUEI-.js";import"./chevron-down-Bq756dsS.js";import"./index-BME3csC7.js";import"./error-Ds75ijE9.js";import"./BaseCbacBanner-DjlVE0Y-.js";import"./makeExternalStore-CVg3iLKT.js";import"./Tooltip-DlWEzy-7.js";import"./PopoverPopup-DRyQfEr-.js";import"./toNumber-DoezqP53.js";import"./useOsdkClient-83mNAUCk.js";import"./tick-13iDrFvx.js";import"./DropdownField-D7w2jCoh.js";import"./withOsdkMetrics-rD9P4-Mu.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
