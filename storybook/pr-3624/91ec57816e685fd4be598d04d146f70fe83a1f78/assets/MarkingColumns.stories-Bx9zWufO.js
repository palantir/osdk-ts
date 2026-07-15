import{f as n,j as t}from"./iframe-BwHy6jNp.js";import{O as p}from"./object-table-BG-pQzN8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-dGNyEUc1.js";import"./Table-Cj_Vtd40.js";import"./index-Dasdbcjr.js";import"./Dialog-D1Rspx1m.js";import"./cross-Db8iPSLr.js";import"./svgIconContainer-PLSPni8G.js";import"./useBaseUiId-qGsuF-jp.js";import"./InternalBackdrop-BgI185rB.js";import"./composite-BIdSyq5t.js";import"./index-txdT0O1n.js";import"./index-Jym9_uxM.js";import"./index-LfCWCjzB.js";import"./useEventCallback-SWcr-3hY.js";import"./SkeletonBar-3mEW9gz9.js";import"./LoadingCell-Dy-XNcGc.js";import"./ColumnConfigDialog-CeHwYZk_.js";import"./DraggableList-CozLqLST.js";import"./search-bdoPWgW8.js";import"./Input-CV2PF8aI.js";import"./useControlled-B-i-VBct.js";import"./Button-vyjTHj83.js";import"./small-cross-Buel5g-Z.js";import"./ActionButton-BYoI52YP.js";import"./Checkbox-t-Sv6Z0q.js";import"./useValueChanged-Bc5cy9TS.js";import"./CollapsiblePanel-DLhM4_ZT.js";import"./MultiColumnSortDialog-CRmpgfeF.js";import"./MenuTrigger--CMHp3e2.js";import"./CompositeItem-Dil8Emsp.js";import"./ToolbarRootContext-CmpaGdh2.js";import"./getDisabledMountTransitionStyles-C0V0LmnP.js";import"./getPseudoElementBounds-DbCk7dOz.js";import"./chevron-down-CPpQwi7c.js";import"./index-DDF4AR0S.js";import"./error-Be2nVXGI.js";import"./BaseCbacBanner-COpEXzaM.js";import"./makeExternalStore-Dpn2B5JC.js";import"./Tooltip-CULTI9UA.js";import"./PopoverPopup-5TO9FYFn.js";import"./toNumber-BzpenWP5.js";import"./useOsdkClient-CkSY-nvW.js";import"./tick-BEHQiPOw.js";import"./DropdownField-CeniV6tg.js";import"./withOsdkMetrics-koDwF7yx.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
