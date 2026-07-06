import{f as n,j as t}from"./iframe-S-S35fcE.js";import{O as p}from"./object-table-DOiYneCY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CT1kVNSx.js";import"./Table-CDM2Klvw.js";import"./index-DUrVKU7m.js";import"./Dialog-GMlfRYN1.js";import"./cross-DaNvVRMx.js";import"./svgIconContainer-BKSkLAbU.js";import"./useBaseUiId-BKTBBGoR.js";import"./InternalBackdrop-D3lT_l2q.js";import"./composite-CQ8R1KzH.js";import"./index-D5szr8JT.js";import"./index-BCD83pAH.js";import"./index-DuBanHZk.js";import"./useEventCallback-hr0hLGpG.js";import"./SkeletonBar-BAc1EkFs.js";import"./LoadingCell-CT_Fr1dh.js";import"./ColumnConfigDialog-C1TDQUKg.js";import"./DraggableList-DoXu0Hie.js";import"./search-D-lJ1XmY.js";import"./Input-CkIrXkc4.js";import"./useControlled-dgRJ7b5E.js";import"./Button-ITY-d-__.js";import"./small-cross-BRk6lYjC.js";import"./ActionButton-d1hHkWx4.js";import"./Checkbox-D-X83yno.js";import"./useValueChanged-C6BawGRm.js";import"./CollapsiblePanel-R3blTcEW.js";import"./MultiColumnSortDialog-D0aHtarD.js";import"./MenuTrigger-DgrOPtnx.js";import"./CompositeItem-AhBoEDd7.js";import"./ToolbarRootContext-QWi51hJp.js";import"./getDisabledMountTransitionStyles-C5iyfMxT.js";import"./getPseudoElementBounds-DNOFvfMF.js";import"./chevron-down-BoduqA9e.js";import"./index-CEtPANoY.js";import"./error-CtKC4NLO.js";import"./BaseCbacBanner-_0HsQtQJ.js";import"./makeExternalStore-BzbsKIu-.js";import"./Tooltip-7la5MPvf.js";import"./PopoverPopup-C_z2cQRf.js";import"./toNumber-B54Az32A.js";import"./useOsdkClient-EB7VUf5R.js";import"./tick-b6f9iaKC.js";import"./DropdownField-Dcifq0ZZ.js";import"./withOsdkMetrics-Cvrism1A.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
