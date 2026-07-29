import{f as n,j as t}from"./iframe-BPlyPXiZ.js";import{O as p}from"./object-table-BScV5lCa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVn2ue9b.js";import"./Table-BS_leXaG.js";import"./index-Ddo5UG0H.js";import"./Dialog-D2zrtvf2.js";import"./cross-B2S6uBur.js";import"./svgIconContainer-BZdLsghv.js";import"./useBaseUiId-X-OXSAal.js";import"./InternalBackdrop-dhha9xyF.js";import"./composite-IGurVqQn.js";import"./index-BZ5Z-Qo0.js";import"./index-vSWwSHiI.js";import"./index-Dd7lSRWv.js";import"./useEventCallback-DS73g9BV.js";import"./SkeletonBar-TyIbhwv-.js";import"./LoadingCell-DNZmMnHL.js";import"./ColumnConfigDialog-CBG_bc8N.js";import"./DraggableList-CsR8OFri.js";import"./search-j4xQ6zka.js";import"./Input-CQD2pGYW.js";import"./useControlled-CIhLO8zV.js";import"./Button-DZ7USJIZ.js";import"./small-cross-ygVboZgp.js";import"./ActionButton-Djen2TBF.js";import"./Checkbox-B5CE-Q6Y.js";import"./useValueChanged-Dp6LKhLA.js";import"./CollapsiblePanel-D-Yow7GK.js";import"./MultiColumnSortDialog-BRjdiilQ.js";import"./MenuTrigger-BKGX7oO6.js";import"./CompositeItem-CiEDn4l-.js";import"./ToolbarRootContext-DnS0zku0.js";import"./getDisabledMountTransitionStyles-CG52k8sM.js";import"./getPseudoElementBounds-BZgnJ_yx.js";import"./chevron-down-C6-r-URf.js";import"./index-Da31hJ2m.js";import"./error-8ZIwvoQk.js";import"./BaseCbacBanner-Bi066NJ7.js";import"./makeExternalStore-B4hfq0qd.js";import"./Tooltip-C5FXW2EN.js";import"./PopoverPopup-BqTvT1Am.js";import"./toNumber-gNvKM7GV.js";import"./useOsdkClient-BE8gY3FP.js";import"./tick-Bmz4UTdt.js";import"./DropdownField-crORuWaU.js";import"./withOsdkMetrics-ByKEirKO.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
