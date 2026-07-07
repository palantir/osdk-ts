import{f as n,j as t}from"./iframe-lfDwPe1R.js";import{O as p}from"./object-table-BExrZi97.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C07-se9M.js";import"./Table-CY38JfHW.js";import"./index-DwITW8La.js";import"./Dialog-lfadYgKD.js";import"./cross-JpU8ZimE.js";import"./svgIconContainer-CfrqUz1g.js";import"./useBaseUiId-B5ut6wPO.js";import"./InternalBackdrop-VaVTXDjZ.js";import"./composite-DPTAr_Hx.js";import"./index-ZzXxc5x8.js";import"./index-9tsP-8Uz.js";import"./index-CaW5dSAO.js";import"./useEventCallback-DzBEjBfu.js";import"./SkeletonBar-DY0vK8w2.js";import"./LoadingCell-BHuIc8Oz.js";import"./ColumnConfigDialog-BD__wHID.js";import"./DraggableList-B7HvQdsv.js";import"./search-C7XZlnTh.js";import"./Input-Df7RWKG4.js";import"./useControlled-BHVA0Lvh.js";import"./Button-DGcYA5iG.js";import"./small-cross-BfrE7p_Y.js";import"./ActionButton-ZWtdnfS8.js";import"./Checkbox-CZHQ_0HJ.js";import"./useValueChanged-p3xIPBX5.js";import"./CollapsiblePanel-CAjcYhvT.js";import"./MultiColumnSortDialog-tleiyIVS.js";import"./MenuTrigger-C0Uz7_Gs.js";import"./CompositeItem-B_jfHLzk.js";import"./ToolbarRootContext-as9SDGsf.js";import"./getDisabledMountTransitionStyles-CUZbCQK6.js";import"./getPseudoElementBounds-BOkrstiV.js";import"./chevron-down-BxE3vSQT.js";import"./index-CAOdoGk2.js";import"./error-DM8B4lS2.js";import"./BaseCbacBanner-DRrbi3lb.js";import"./makeExternalStore-D_AztOJB.js";import"./Tooltip-adwRxMxM.js";import"./PopoverPopup-BdD8whWG.js";import"./toNumber-JaOGbHRr.js";import"./useOsdkClient-1VtSXugF.js";import"./tick-DEVwqROk.js";import"./DropdownField-B1-BM8Vr.js";import"./withOsdkMetrics-Bv8GEkpY.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
