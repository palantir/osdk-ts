import{f as n,j as t}from"./iframe-BRQa0yJh.js";import{O as p}from"./object-table-C4sQY6Ms.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DkcWFbSF.js";import"./Table-Nz57MCH1.js";import"./index-CJjzCJcD.js";import"./Dialog-HQe_DX-E.js";import"./cross-v--ZjJum.js";import"./svgIconContainer-C_PMf2ER.js";import"./useBaseUiId-Dv6-UfJB.js";import"./InternalBackdrop-BsBA6dsL.js";import"./composite-DUzaCl7x.js";import"./index-B5ikEC_r.js";import"./index-DHwRVCnM.js";import"./index-Dxa0dVJb.js";import"./useEventCallback-lgt6fhC_.js";import"./SkeletonBar-Dfh20UwP.js";import"./LoadingCell-DLquXdc2.js";import"./ColumnConfigDialog-o8nSTyTk.js";import"./DraggableList-Bvmd0UKt.js";import"./search-pGAVZxYY.js";import"./Input-wmletC5x.js";import"./useControlled-BE2AqAWm.js";import"./Button-BdYV5pk2.js";import"./small-cross-CiTrH6pS.js";import"./ActionButton-De34iVxa.js";import"./Checkbox-DHEOw_fk.js";import"./useValueChanged-3fN26B97.js";import"./CollapsiblePanel-cssLcYfw.js";import"./MultiColumnSortDialog-Du4Qrq_S.js";import"./MenuTrigger-De_K2SiC.js";import"./CompositeItem-fOfgY2KX.js";import"./ToolbarRootContext-DysqcYFh.js";import"./getDisabledMountTransitionStyles-DJgOI3QB.js";import"./getPseudoElementBounds-D2wrxaMh.js";import"./chevron-down-Deo6cULd.js";import"./index-CMd-9mvt.js";import"./error-CgTW8QR3.js";import"./BaseCbacBanner-CfeEhDwO.js";import"./makeExternalStore-DOnubkZt.js";import"./Tooltip-DLojs4oK.js";import"./PopoverPopup-DNqkjfpI.js";import"./toNumber-CX4FMUBr.js";import"./useOsdkClient-BYz38UF9.js";import"./tick-kXgiakXS.js";import"./DropdownField-COcx92m2.js";import"./withOsdkMetrics-Cq7sTkiI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
