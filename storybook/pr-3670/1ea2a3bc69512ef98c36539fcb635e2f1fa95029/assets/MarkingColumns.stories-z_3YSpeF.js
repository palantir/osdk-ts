import{f as n,j as t}from"./iframe-CpomApVZ.js";import{O as p}from"./object-table-h-lpPD96.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BH-Cl0Px.js";import"./Table-CWqwNV1D.js";import"./index-CGC6T-XZ.js";import"./Dialog-DIc-Otj5.js";import"./cross-zY1wytE-.js";import"./svgIconContainer-Be4HJW8v.js";import"./useBaseUiId-DfyKe6Rq.js";import"./InternalBackdrop-CJB_Jkbb.js";import"./composite-YQ6KkaFC.js";import"./index-025Ukm0g.js";import"./index-FygHMFtO.js";import"./index-C1zyx2Sb.js";import"./useEventCallback-FDMVWdrV.js";import"./SkeletonBar-Cy9F7ele.js";import"./LoadingCell-D0L81Ybj.js";import"./ColumnConfigDialog-BVEm-701.js";import"./DraggableList-2su4bhVb.js";import"./search-BQndk-Uq.js";import"./Input-BJIIc0U8.js";import"./useControlled-kFK3RP89.js";import"./Button-DyduBx6s.js";import"./small-cross-B1FteRDJ.js";import"./ActionButton-D3_iys5J.js";import"./Checkbox-B2T17thM.js";import"./useValueChanged-Crdw0YpT.js";import"./CollapsiblePanel-C0nZOj2u.js";import"./MultiColumnSortDialog-TjWk0ICe.js";import"./MenuTrigger-NMVCfVXP.js";import"./CompositeItem-CCUp6l13.js";import"./ToolbarRootContext-Cc1gKAra.js";import"./getDisabledMountTransitionStyles-BZ7M1FTj.js";import"./getPseudoElementBounds-DdoCGM3U.js";import"./chevron-down-BjAEWJUo.js";import"./index-DzfqdwdT.js";import"./error-C9Q2xxx3.js";import"./BaseCbacBanner-DsC8cwdT.js";import"./makeExternalStore-DP3Smuod.js";import"./Tooltip-Dau427Oy.js";import"./PopoverPopup-sMAQlRH9.js";import"./toNumber-CElMxY_5.js";import"./useOsdkClient-3vGePHIC.js";import"./tick-D2gU-ohR.js";import"./DropdownField-BQB8TNk3.js";import"./withOsdkMetrics-BeHwXWGO.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
