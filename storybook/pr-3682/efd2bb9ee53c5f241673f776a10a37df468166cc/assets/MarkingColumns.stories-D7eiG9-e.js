import{f as n,j as t}from"./iframe-DLyBDx3h.js";import{O as p}from"./object-table-Db2wcjHY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKNCYEID.js";import"./Table-B7MuyP2K.js";import"./index-BRmpjKp2.js";import"./Dialog-DUm6uV-s.js";import"./cross-Bh6H6DPs.js";import"./svgIconContainer-DVZM5xMa.js";import"./useBaseUiId-IYhLH06n.js";import"./InternalBackdrop-D3Cv3PwY.js";import"./composite-BIVZP6PR.js";import"./index-DvVaFH5g.js";import"./index-BTa31zA-.js";import"./index-CXbHJn-x.js";import"./useEventCallback-Db-FuhF2.js";import"./SkeletonBar-D1NwoMoD.js";import"./LoadingCell-BKI5Bfgi.js";import"./ColumnConfigDialog-BAeJWqsO.js";import"./DraggableList-BJQsVCbm.js";import"./search-BVn9FoEm.js";import"./Input-CinFTlV8.js";import"./useControlled-DpfXDhaf.js";import"./Button-DjLWKs3R.js";import"./small-cross-DrqYOPgZ.js";import"./ActionButton-BbQknL27.js";import"./Checkbox-DJWIgXWI.js";import"./useValueChanged-CAstpGgB.js";import"./CollapsiblePanel-CYQvMl_S.js";import"./MultiColumnSortDialog-VLDnzYfM.js";import"./MenuTrigger-D3TO_haV.js";import"./CompositeItem-CxupW6TJ.js";import"./ToolbarRootContext-5TbsYr-c.js";import"./getDisabledMountTransitionStyles-DKLQgRGi.js";import"./getPseudoElementBounds-DIBF_b2a.js";import"./chevron-down-DLGOy9MM.js";import"./index-D4ofTFbf.js";import"./error-URqFYrIM.js";import"./BaseCbacBanner-DAC_GW8f.js";import"./makeExternalStore-ByO5vKW6.js";import"./Tooltip-DEYEofw6.js";import"./PopoverPopup-Bm0ScESd.js";import"./toNumber-Bbn0EaST.js";import"./useOsdkClient-C6oUu_ww.js";import"./tick-DgcC4VCP.js";import"./DropdownField-Cb-5KNlF.js";import"./withOsdkMetrics-Du-o1FGV.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
