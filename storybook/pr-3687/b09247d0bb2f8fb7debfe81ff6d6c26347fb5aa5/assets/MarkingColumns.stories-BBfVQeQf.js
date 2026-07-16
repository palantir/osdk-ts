import{f as n,j as t}from"./iframe-CrHOx1Q8.js";import{O as p}from"./object-table-RwJUlJj5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CXayWngK.js";import"./Table-DAhQuSsY.js";import"./index-DMCG3xvS.js";import"./Dialog-Coi0j6Ap.js";import"./cross-uK5bFuWa.js";import"./svgIconContainer-BKZ-ijoV.js";import"./useBaseUiId-DArlA0u-.js";import"./InternalBackdrop-BFYP_SHG.js";import"./composite-DFN3xlZh.js";import"./index-CTyGD713.js";import"./index-4uRgCZRg.js";import"./index-By-KVKLv.js";import"./useEventCallback-BkeqwXpK.js";import"./SkeletonBar-CajVKhKo.js";import"./LoadingCell-TgZjixCq.js";import"./ColumnConfigDialog-fbl3uZdu.js";import"./DraggableList-BzmMDrKR.js";import"./search-qTaTsUfJ.js";import"./Input-BAmvIJ-v.js";import"./useControlled-B9N8AMtZ.js";import"./Button-DaCY62TH.js";import"./small-cross-DZNQBMiL.js";import"./ActionButton-BZYL7QFT.js";import"./Checkbox-BxMeSLxC.js";import"./useValueChanged-RgI68jZg.js";import"./CollapsiblePanel-CARaR_I_.js";import"./MultiColumnSortDialog-DtGlt4DM.js";import"./MenuTrigger-rG5SGjrn.js";import"./CompositeItem-DspzOklw.js";import"./ToolbarRootContext-DDfVXNE2.js";import"./getDisabledMountTransitionStyles-DhoUGkoN.js";import"./getPseudoElementBounds-BiXjuEe9.js";import"./chevron-down-DEWPOpLL.js";import"./index-6M1Fb5iF.js";import"./error-KJx9m7U_.js";import"./BaseCbacBanner-BvjDrMck.js";import"./makeExternalStore-B-Jy2vDJ.js";import"./Tooltip-CNMi5z8T.js";import"./PopoverPopup-DHZOhof6.js";import"./toNumber-CADkHWIf.js";import"./useOsdkClient-BMoajR4u.js";import"./tick-DwlyEraD.js";import"./DropdownField-VtiBNT7b.js";import"./withOsdkMetrics-DgOo0yPz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
