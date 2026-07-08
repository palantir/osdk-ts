import{f as n,j as t}from"./iframe-CbJwn7sB.js";import{O as p}from"./object-table-Cm6-TSPL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DYI2LtmH.js";import"./Table-B8x2geeg.js";import"./index-CNby0dnV.js";import"./Dialog-CcpPlaLA.js";import"./cross-BW2hGTBj.js";import"./svgIconContainer-eMTMOVoV.js";import"./useBaseUiId-CdQ4PgHY.js";import"./InternalBackdrop-FZUWyKx1.js";import"./composite-DcOenC0U.js";import"./index-DYJsUG8q.js";import"./index-f1laDMmt.js";import"./index-DqZK_dpm.js";import"./useEventCallback-CW7oqEhq.js";import"./SkeletonBar-HLzVqgxq.js";import"./LoadingCell-mrx7Dg7g.js";import"./ColumnConfigDialog-cAgTKR7Z.js";import"./DraggableList-CVQsQyKB.js";import"./search-D3H1qgWh.js";import"./Input-t0mhF6ze.js";import"./useControlled-Crckcthq.js";import"./Button-TICmbo5h.js";import"./small-cross-DFbdSikU.js";import"./ActionButton-CAVkkVm7.js";import"./Checkbox-DTyThcyU.js";import"./useValueChanged-CsfGn39a.js";import"./CollapsiblePanel-DN1K8WUc.js";import"./MultiColumnSortDialog-D1ZYNRd7.js";import"./MenuTrigger-BTpjKS0F.js";import"./CompositeItem-wPytHsEV.js";import"./ToolbarRootContext-BoAAMLC4.js";import"./getDisabledMountTransitionStyles-DiL0RFeo.js";import"./getPseudoElementBounds-Dxu4-TM3.js";import"./chevron-down-Cx5Bq08W.js";import"./index-CO0foM5g.js";import"./error-eYsSxcCf.js";import"./BaseCbacBanner-B1XmFVaG.js";import"./makeExternalStore-ChZxrvMP.js";import"./Tooltip-zf5xKpIA.js";import"./PopoverPopup-qq_9PFVd.js";import"./toNumber-DOqT9Uew.js";import"./useOsdkClient-9dczK9ue.js";import"./tick-0RIDpGmU.js";import"./DropdownField-BNOJGWLM.js";import"./withOsdkMetrics-Bu6EFUqn.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
