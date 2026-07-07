import{f as n,j as t}from"./iframe-D3CKr5be.js";import{O as p}from"./object-table-C73X4Niz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5awx7sB.js";import"./Table-rEdzDcim.js";import"./index-DT_OOulh.js";import"./Dialog-5Jjnb1Kv.js";import"./cross-DBwblYeB.js";import"./svgIconContainer-LyTG78IX.js";import"./useBaseUiId-BB2zq_sK.js";import"./InternalBackdrop-DcTW3i7d.js";import"./composite-GGrmPfDF.js";import"./index-B7l8vleV.js";import"./index-kbn_uatS.js";import"./index-DOPAj6Pf.js";import"./useEventCallback-DH42YdLM.js";import"./SkeletonBar-DE93TETx.js";import"./LoadingCell-CfU54RzQ.js";import"./ColumnConfigDialog-BEd47vI8.js";import"./DraggableList-C28II7Bk.js";import"./search-OpReGLSF.js";import"./Input-CE27sVF9.js";import"./useControlled-BYRQcG_V.js";import"./Button-PqUdWvif.js";import"./small-cross-C4_Afz7d.js";import"./ActionButton-DLVeoIbt.js";import"./Checkbox-DMFY6wfg.js";import"./useValueChanged-BsTr-LSG.js";import"./CollapsiblePanel-MV0gSwfB.js";import"./MultiColumnSortDialog-Bs6b7CNF.js";import"./MenuTrigger-z9qHBpoU.js";import"./CompositeItem-vhDEoWF0.js";import"./ToolbarRootContext-BtDfLObj.js";import"./getDisabledMountTransitionStyles-CL81uosM.js";import"./getPseudoElementBounds-bT7gRGrt.js";import"./chevron-down-Dd-yNw3n.js";import"./index-BKki-K1q.js";import"./error-G5Oywtmt.js";import"./BaseCbacBanner-CbcKGfZP.js";import"./makeExternalStore-CB7b6DBP.js";import"./Tooltip-BWkYmzK5.js";import"./PopoverPopup-BgeHzA5W.js";import"./toNumber-BQON2aln.js";import"./useOsdkClient-CtGZkqG4.js";import"./tick-BcgEqq7R.js";import"./DropdownField-DwRpUs9t.js";import"./withOsdkMetrics-C90IKuPC.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
