import{f as n,j as t}from"./iframe-Byan9OCz.js";import{O as p}from"./object-table-DHfrWVso.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Blt6KWnb.js";import"./Table-ZAOj5wL_.js";import"./index-DansedCt.js";import"./Dialog-CR5TjXK2.js";import"./cross-BYkiE-wJ.js";import"./svgIconContainer-DzLGR14K.js";import"./useBaseUiId-D-UFJa1l.js";import"./InternalBackdrop-Y6GpCi40.js";import"./composite-BibZA6Dj.js";import"./index-C58GA46D.js";import"./index-BYqJx_lU.js";import"./index-lIr_mc2c.js";import"./useEventCallback-DCOoyXtd.js";import"./SkeletonBar-DBBRe-ay.js";import"./LoadingCell-CKvtif2L.js";import"./ColumnConfigDialog-CLWUE3bO.js";import"./DraggableList-CCgOQYr0.js";import"./search-C0JOVvqu.js";import"./Input-CI_0PN8e.js";import"./useControlled-CwWA7GGu.js";import"./Button-B638KosM.js";import"./small-cross-GpArFC55.js";import"./ActionButton-DxKK44-w.js";import"./Checkbox-CxywLRZv.js";import"./useValueChanged-BtfFgYG3.js";import"./CollapsiblePanel-dm7yvm7p.js";import"./MultiColumnSortDialog-BfV5xU7o.js";import"./MenuTrigger-DBQ_nmoB.js";import"./CompositeItem-9SBEe_t9.js";import"./ToolbarRootContext-DeIqE3or.js";import"./getDisabledMountTransitionStyles-DAKmvZuM.js";import"./getPseudoElementBounds-CtetFaD3.js";import"./chevron-down-m2cDlEUU.js";import"./index-DUJjuYqu.js";import"./error-Ck_NR84Y.js";import"./BaseCbacBanner-B1KpdBpV.js";import"./makeExternalStore-BO613PYK.js";import"./Tooltip-CX-tiABu.js";import"./PopoverPopup-CLybE8nn.js";import"./toNumber-MUq-kE_S.js";import"./useOsdkClient-BxfXiOgZ.js";import"./tick-OQeOZKkF.js";import"./DropdownField-p7Crmj2r.js";import"./withOsdkMetrics-VyL31iRu.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
