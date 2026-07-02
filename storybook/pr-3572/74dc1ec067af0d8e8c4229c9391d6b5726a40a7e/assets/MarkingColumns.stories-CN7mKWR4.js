import{f as n,j as t}from"./iframe-kUcMDyOZ.js";import{O as p}from"./object-table-DEedDzqb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CS9s2vCa.js";import"./Table-DuTbRZNq.js";import"./index-FJ2youpc.js";import"./Dialog-Cu3il9AY.js";import"./cross-c4mj_P3J.js";import"./svgIconContainer-DzW5WdoJ.js";import"./useBaseUiId-DbVM3FPi.js";import"./InternalBackdrop-CeeRh4uO.js";import"./composite-D-QjwseR.js";import"./index-gAu7uQu6.js";import"./index-CIYAzXV_.js";import"./index-ak_yUTTm.js";import"./useEventCallback-C6GoxdcN.js";import"./SkeletonBar-cpHP5C5h.js";import"./LoadingCell-CWdFqm6e.js";import"./ColumnConfigDialog-DqmcGRZd.js";import"./DraggableList-_T6FBHs3.js";import"./search-CBpLo0-0.js";import"./Input-wK11acrz.js";import"./useControlled-NxEk_Brs.js";import"./Button-OM-mrDhp.js";import"./small-cross-uYE6vBrQ.js";import"./ActionButton-BKNsesPs.js";import"./Checkbox-DMcMukQI.js";import"./minus-CyGnRTFD.js";import"./tick-lOBqDaBW.js";import"./useValueChanged-olHN-cir.js";import"./caret-down-CcvPjreq.js";import"./CollapsiblePanel-IDPkCLEg.js";import"./MultiColumnSortDialog-1VXlZguN.js";import"./MenuTrigger-Di-NNhl5.js";import"./CompositeItem-Cj7qBh42.js";import"./ToolbarRootContext-RfLbxc0B.js";import"./getDisabledMountTransitionStyles-DdSblPWY.js";import"./getPseudoElementBounds-CuK5ubqo.js";import"./chevron-down-DzpiwSS8.js";import"./index-Nv01jUcM.js";import"./error-DO_gsA18.js";import"./BaseCbacBanner-CO3yHk0y.js";import"./makeExternalStore-B0Wxt013.js";import"./Tooltip-BgGALbXJ.js";import"./PopoverPopup-VFIs8jUI.js";import"./toNumber-CceV8pQE.js";import"./useOsdkClient-CwyBStJL.js";import"./DropdownField-DIfl5x2S.js";import"./withOsdkMetrics-DNRIXYGs.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
