import{f as n,j as t}from"./iframe-DMczly9y.js";import{O as p}from"./object-table-C30t99RS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--MTjbHr9.js";import"./Table-CWt3ZIKu.js";import"./index-Bkh435fV.js";import"./Dialog-Dnje1hYC.js";import"./cross-DJDSZb9x.js";import"./svgIconContainer-B0onUOf2.js";import"./useBaseUiId-GPSmMHjO.js";import"./InternalBackdrop-DctmzPFD.js";import"./composite-Da_TEeE3.js";import"./index-BvNyxsvF.js";import"./index-D-g0-3Wt.js";import"./index-R_sWW-OM.js";import"./useEventCallback-Babl0J3q.js";import"./SkeletonBar-BnBcZnZp.js";import"./LoadingCell-DnOftXTp.js";import"./ColumnConfigDialog-CKNgNJyY.js";import"./DraggableList-C41nIekc.js";import"./search-CMZ9-Ov6.js";import"./Input-0vu4-5sX.js";import"./useControlled-Dgcw26YK.js";import"./Button-DRWvgaAt.js";import"./small-cross-DNeqYqsf.js";import"./ActionButton-Bt3Eh-Pg.js";import"./Checkbox-CrFnlA3M.js";import"./useValueChanged-BG1hVX12.js";import"./CollapsiblePanel-CmC32Mii.js";import"./MultiColumnSortDialog-E-iVylvO.js";import"./MenuTrigger-C57AO-xj.js";import"./CompositeItem-DFx7eN5O.js";import"./ToolbarRootContext-9muea_6F.js";import"./getDisabledMountTransitionStyles-bmCMgUB6.js";import"./getPseudoElementBounds-CflPg6Wh.js";import"./chevron-down-CD6IwESQ.js";import"./index-FexXw7Td.js";import"./error-D1elG5xT.js";import"./BaseCbacBanner-CIhW7Gcp.js";import"./makeExternalStore-DRTEK6Li.js";import"./Tooltip-B__mOJ3o.js";import"./PopoverPopup-dsEatF6R.js";import"./toNumber-BR-NKOdX.js";import"./useOsdkClient-DOC2KjQl.js";import"./tick-C1jMnw3-.js";import"./DropdownField-BzdRNkWU.js";import"./withOsdkMetrics-DQGwsIbO.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
