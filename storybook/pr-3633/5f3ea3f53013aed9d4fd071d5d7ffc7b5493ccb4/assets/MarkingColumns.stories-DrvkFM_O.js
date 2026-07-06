import{f as n,j as t}from"./iframe-BEmkZ3ff.js";import{O as p}from"./object-table-DYO45OQE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNtzpMaq.js";import"./Table-Je3SEp2u.js";import"./index-C4UFfi4B.js";import"./Dialog-eafkmsdr.js";import"./cross-BKrU6WHy.js";import"./svgIconContainer-CNWOtq2C.js";import"./useBaseUiId-CEjFwGxk.js";import"./InternalBackdrop--KXUJK4E.js";import"./composite-Bwd1Pcuu.js";import"./index-e9UuKvsn.js";import"./index-DrahqdEN.js";import"./index-kHUKa1j8.js";import"./useEventCallback-BwTQRuKS.js";import"./SkeletonBar-DloO21sD.js";import"./LoadingCell-BjUMq4Um.js";import"./ColumnConfigDialog-cHI1kd7k.js";import"./DraggableList-CG1xvEmD.js";import"./search-D5PjLpCP.js";import"./Input-DOxL2DIQ.js";import"./useControlled-CWNAEnN0.js";import"./Button-Cyn2vX47.js";import"./small-cross-Bd1dbEmB.js";import"./ActionButton-DMqSXOaw.js";import"./Checkbox-DU0n8qoj.js";import"./useValueChanged-C_CCNgBW.js";import"./CollapsiblePanel-DdW7fN1H.js";import"./MultiColumnSortDialog-CGNk6ieD.js";import"./MenuTrigger-DQHeLVyl.js";import"./CompositeItem-CAYXJML2.js";import"./ToolbarRootContext-DTLub2Sz.js";import"./getDisabledMountTransitionStyles-DanMs1kO.js";import"./getPseudoElementBounds-yCJcZrSy.js";import"./chevron-down-BmFX2t00.js";import"./index-781EsoxY.js";import"./error-BhrLyymv.js";import"./BaseCbacBanner-DGkoZlDK.js";import"./makeExternalStore-BQ55cuhe.js";import"./Tooltip-CD_GRWQy.js";import"./PopoverPopup-VR3CRUDx.js";import"./toNumber-BTMR3Onr.js";import"./useOsdkClient-DAfjH6JP.js";import"./tick-fGYAmIPG.js";import"./DropdownField-BelqjVgs.js";import"./withOsdkMetrics-CAQDnSyn.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
