import{f as n,j as t}from"./iframe-CnOefK-5.js";import{O as p}from"./object-table-D7aSOS3W.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BejuJ81E.js";import"./Table-DTnGAarM.js";import"./index-E94A3ff2.js";import"./Dialog-SYbAF_Io.js";import"./cross-DT0SMijZ.js";import"./svgIconContainer-DO8BkQTj.js";import"./useBaseUiId-C2d4bE4n.js";import"./InternalBackdrop-CgAw4IDY.js";import"./composite-DmzoJsxG.js";import"./index-Z_XwUXDu.js";import"./index-DnebXR8d.js";import"./index-V4yz01-X.js";import"./useEventCallback-m1G7juPE.js";import"./SkeletonBar-B-pzjyh_.js";import"./LoadingCell-nRYSPt-J.js";import"./ColumnConfigDialog-DsW9_Www.js";import"./DraggableList-Dq8cI_nL.js";import"./search-DHhMSbgK.js";import"./Input-B_YvQWj6.js";import"./useControlled-CROLlR0c.js";import"./Button-HmiOJfM7.js";import"./small-cross-C1cKemHX.js";import"./ActionButton-JjTqE8jD.js";import"./Checkbox-DV_gGmhK.js";import"./useValueChanged-Dvb3uVv8.js";import"./CollapsiblePanel-BaZzAxdv.js";import"./MultiColumnSortDialog-CDhaQx4S.js";import"./MenuTrigger-BnMi5TLM.js";import"./CompositeItem-Czvm_wmz.js";import"./ToolbarRootContext-DVRYRJ1i.js";import"./getDisabledMountTransitionStyles-SMMsCG3L.js";import"./getPseudoElementBounds-BgqqHLEH.js";import"./chevron-down-Bad43Icm.js";import"./index-CXUgI3x9.js";import"./error-CyRWISwJ.js";import"./BaseCbacBanner-CnvDSr8H.js";import"./makeExternalStore-GqYkByi5.js";import"./Tooltip-ByRzStfR.js";import"./PopoverPopup-DP-OEzbm.js";import"./toNumber-CoClxZAz.js";import"./useOsdkClient-BZRIEfWJ.js";import"./tick-DNgiGhLG.js";import"./DropdownField-DL5B05ZO.js";import"./withOsdkMetrics-Ie5qsKmF.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
