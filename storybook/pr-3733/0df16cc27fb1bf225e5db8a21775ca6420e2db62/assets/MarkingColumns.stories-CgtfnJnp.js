import{f as n,j as t}from"./iframe-DnNKUWcg.js";import{O as p}from"./object-table-BsQWHquv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQWKcrj2.js";import"./Table-BRaUvk9s.js";import"./index-GGLs1M5x.js";import"./Dialog-DnbSATsI.js";import"./cross-DpxJh_Rf.js";import"./svgIconContainer-B2CJaZ6n.js";import"./useBaseUiId-CKvMB-OE.js";import"./InternalBackdrop-cPAK-l8b.js";import"./composite-DTBZTdo5.js";import"./index-DoSif8t7.js";import"./index-CNrPxP1k.js";import"./index-DEeIND04.js";import"./useEventCallback-Bl1n9dXG.js";import"./SkeletonBar-CMr8yhKe.js";import"./LoadingCell-C7yIAwo-.js";import"./ColumnConfigDialog-B_0GBQ3g.js";import"./DraggableList-BNOPjEF7.js";import"./search-DLe85fa9.js";import"./Input-DtUtcfYN.js";import"./useControlled-DhCfBTTh.js";import"./Button-DHDhp2xt.js";import"./small-cross-DCXcLfEz.js";import"./ActionButton-B9YCCGPf.js";import"./Checkbox-YEeCPkVf.js";import"./useValueChanged-Dm02INJo.js";import"./CollapsiblePanel-CKiciOmf.js";import"./MultiColumnSortDialog-GQY1Z_Ct.js";import"./MenuTrigger-C7jriYKc.js";import"./CompositeItem-BaQsrHVB.js";import"./ToolbarRootContext-B0YLwdfY.js";import"./getDisabledMountTransitionStyles-Bz8sHGq1.js";import"./getPseudoElementBounds-DkksLvcd.js";import"./chevron-down-CZAj-qSf.js";import"./index-BiJvZYLB.js";import"./error-D2asl-Ti.js";import"./BaseCbacBanner-Bm4EpVSS.js";import"./makeExternalStore-BXOD0Kmg.js";import"./Tooltip-DX3QBsyx.js";import"./PopoverPopup-m03WX-mm.js";import"./toNumber-Cwu7D7ix.js";import"./useOsdkClient-BH9IEc8j.js";import"./tick-ClPMLU2O.js";import"./DropdownField-Bf-sp3Ya.js";import"./withOsdkMetrics-BWmd9N4i.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
