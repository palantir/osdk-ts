import{f as n,j as t}from"./iframe-ChVPmkYp.js";import{O as p}from"./object-table-D06CgsYN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-jbV1HaAE.js";import"./Table-BT0SebxY.js";import"./index-Dfx1UfXH.js";import"./Dialog-DBcPFuJj.js";import"./cross-AMwzmsFp.js";import"./svgIconContainer-BmCqI7gA.js";import"./useBaseUiId-RI_mTyEl.js";import"./InternalBackdrop-DDa70aCC.js";import"./composite-uKN5GTPZ.js";import"./index-BIQEV1z8.js";import"./index-Ct8PPI2V.js";import"./index-BaEd0kFC.js";import"./useEventCallback-DUdvfY8o.js";import"./SkeletonBar-pU7OA31c.js";import"./LoadingCell-s2_s5Lu8.js";import"./ColumnConfigDialog-CQq6TO6q.js";import"./DraggableList-DCsee0ok.js";import"./search-BsrdhH6y.js";import"./Input-3RD0Ojm7.js";import"./useControlled-CeVHUzb6.js";import"./Button-BsTIeQ16.js";import"./small-cross-DZIz93WJ.js";import"./ActionButton-3GHwkKhs.js";import"./Checkbox--BWQNCOT.js";import"./useValueChanged-CK3sRrR9.js";import"./CollapsiblePanel-CZnfRHhR.js";import"./MultiColumnSortDialog-CVmkiudm.js";import"./MenuTrigger-CIwkoBYe.js";import"./CompositeItem-BRVs3V1O.js";import"./ToolbarRootContext-BkI8pu11.js";import"./getDisabledMountTransitionStyles-BlM0kqhl.js";import"./getPseudoElementBounds-Dwx1pfIS.js";import"./chevron-down-DD8cifJj.js";import"./index-CMHuiwLz.js";import"./error-JTe4qU1R.js";import"./BaseCbacBanner-B0zzEdNC.js";import"./makeExternalStore-Bfbb1GZW.js";import"./Tooltip-CWx41uQd.js";import"./PopoverPopup-CK-_Kr0i.js";import"./toNumber-D97_Fil0.js";import"./useOsdkClient-TgsHZR2S.js";import"./tick-C8ZFboh2.js";import"./DropdownField-B8UYXklh.js";import"./withOsdkMetrics-Ck8R0SUE.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
