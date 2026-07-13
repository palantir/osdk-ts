import{f as n,j as t}from"./iframe-CX-sP4Tv.js";import{O as p}from"./object-table-DTMLO3FR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BzgZvTLk.js";import"./Table-aDO1MhZs.js";import"./index-BlSa73HA.js";import"./Dialog-CCnPGMRE.js";import"./cross-D7XIgIX-.js";import"./svgIconContainer-CEDLAgmv.js";import"./useBaseUiId-DD5z2hLn.js";import"./InternalBackdrop-DIUkUgEq.js";import"./composite-CaFP9Fxm.js";import"./index-Do4gF6AI.js";import"./index-Pzjslykk.js";import"./index-BYK9bIug.js";import"./useEventCallback-Lgp858sM.js";import"./SkeletonBar-DvvhBTRQ.js";import"./LoadingCell-CqNZp_zD.js";import"./ColumnConfigDialog-CRID9nVk.js";import"./DraggableList-8R7RVU2U.js";import"./search-DtfJWnKA.js";import"./Input-BaqWZUGz.js";import"./useControlled-CYkygGyb.js";import"./Button-vqs6okwn.js";import"./small-cross-BvYDc7xg.js";import"./ActionButton-BJfIP0sH.js";import"./Checkbox-6-A-U20Z.js";import"./useValueChanged-Lz3EPJ71.js";import"./CollapsiblePanel-O1Dm-HvM.js";import"./MultiColumnSortDialog-BDExBsB0.js";import"./MenuTrigger-BgIVNH5h.js";import"./CompositeItem-CZmRyaee.js";import"./ToolbarRootContext-Cb1sWF7-.js";import"./getDisabledMountTransitionStyles-L6OXdL-d.js";import"./getPseudoElementBounds-DEVgEVYg.js";import"./chevron-down-B-YXbf_u.js";import"./index-CBrE2CXF.js";import"./error-7XeQ4j0i.js";import"./BaseCbacBanner-DowNtIMZ.js";import"./makeExternalStore-DcZ_RkV8.js";import"./Tooltip-CioVlZYm.js";import"./PopoverPopup-DVDArRZ4.js";import"./toNumber-U_EQUtyr.js";import"./useOsdkClient-Dz9KwXwT.js";import"./tick-D9y1Ssyj.js";import"./DropdownField-D8HK2cUA.js";import"./withOsdkMetrics-DxmmVtDF.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
