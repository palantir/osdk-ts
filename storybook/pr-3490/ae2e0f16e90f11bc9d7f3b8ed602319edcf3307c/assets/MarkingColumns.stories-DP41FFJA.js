import{f as n,j as t}from"./iframe-ByRLXg_K.js";import{O as p}from"./object-table-Cu4p3tov.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B9o9dbA3.js";import"./Table-DciI2tfK.js";import"./index-6DQxkngE.js";import"./Dialog-B1_ncRpd.js";import"./cross-BV00GXyW.js";import"./svgIconContainer-iCZbsdKy.js";import"./useBaseUiId-Vb3wSn5E.js";import"./InternalBackdrop-C5X0wVWr.js";import"./composite-BjDF8i_V.js";import"./index-Dnjs-kP1.js";import"./index-dAChcYjg.js";import"./index-Ch9AbIeq.js";import"./useEventCallback-CtfYpFUr.js";import"./SkeletonBar-BVsVxOyN.js";import"./LoadingCell-B1FFO4g2.js";import"./ColumnConfigDialog--gANkaR3.js";import"./DraggableList-BcaUWpJf.js";import"./Input-Bu3yo5gA.js";import"./useControlled-CsgMl02n.js";import"./Button-CFzFzrge.js";import"./small-cross-BAGF377L.js";import"./ActionButton-Dx6_77V1.js";import"./Checkbox-D_N-dLpz.js";import"./minus-Ct7nshk-.js";import"./useValueChanged-CqxOkpZ-.js";import"./caret-down-BzKT_0_V.js";import"./CollapsiblePanel-C5KPVkOe.js";import"./MultiColumnSortDialog-Cl_dDJ1p.js";import"./MenuTrigger-BHQspf_D.js";import"./CompositeItem-D5iYG59B.js";import"./ToolbarRootContext-DwlgndzH.js";import"./getDisabledMountTransitionStyles-Ng7Y0YJF.js";import"./getPseudoElementBounds-CCH0pHvr.js";import"./chevron-down-C-_kUFOm.js";import"./index-M_dmSSfQ.js";import"./error-Dx2CkjrT.js";import"./BaseCbacBanner-eIIlgfr-.js";import"./makeExternalStore-C9tUNzx6.js";import"./Tooltip-BkaBo6YT.js";import"./PopoverPopup-CnMAiF2K.js";import"./toNumber-DNTvr_TO.js";import"./useOsdkClient-DPnMgBkS.js";import"./DropdownField-G23wfSqu.js";import"./withOsdkMetrics-Dwg-E4ZE.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
