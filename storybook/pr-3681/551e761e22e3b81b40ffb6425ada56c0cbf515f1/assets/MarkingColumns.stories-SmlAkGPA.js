import{f as n,j as t}from"./iframe-BQv7n_vV.js";import{O as p}from"./object-table-DgeNqs5C.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEVig5aK.js";import"./Table-swSxDHsx.js";import"./index-BcN-U8CC.js";import"./Dialog-DU2VXEh6.js";import"./cross-C1zSmiXC.js";import"./svgIconContainer-BBgMyLyq.js";import"./useBaseUiId-DPVfkf9G.js";import"./InternalBackdrop-aq-sUZ4V.js";import"./composite-CRej-fZo.js";import"./index-C7TmdYI1.js";import"./index-CQWwpl2a.js";import"./index-MggB6RF8.js";import"./useEventCallback-ClSw2lgj.js";import"./SkeletonBar-GzAjIr8x.js";import"./LoadingCell-lK-Um7T5.js";import"./ColumnConfigDialog-CwCXfARO.js";import"./DraggableList-DCGEnyP5.js";import"./search-CdAz0L_I.js";import"./Input-N3OSKqBO.js";import"./useControlled-Dar1laVH.js";import"./Button-DDAxgBEA.js";import"./small-cross-CsRRbIiW.js";import"./ActionButton-TR0dycsd.js";import"./Checkbox-DJiKy0Hy.js";import"./useValueChanged-TfV_fVpJ.js";import"./CollapsiblePanel-BV8Xl6V1.js";import"./MultiColumnSortDialog-DoKw-IN5.js";import"./MenuTrigger-nMmpDkYT.js";import"./CompositeItem-2NdUk1U5.js";import"./ToolbarRootContext-CjG6N3wE.js";import"./getDisabledMountTransitionStyles-DGZD2UYk.js";import"./getPseudoElementBounds-7ehiqtE7.js";import"./chevron-down-BsaukfyV.js";import"./index-D6idOZm7.js";import"./error-wI3sUvOo.js";import"./BaseCbacBanner-lRphsLyH.js";import"./makeExternalStore-DmjCbjCh.js";import"./Tooltip-DPaYtk06.js";import"./PopoverPopup-DP7V4iSE.js";import"./toNumber-BJe3MC1w.js";import"./useOsdkClient-dVYWFEob.js";import"./tick-zAsf_tSh.js";import"./DropdownField-DXO710QY.js";import"./withOsdkMetrics-C9EWKsra.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
