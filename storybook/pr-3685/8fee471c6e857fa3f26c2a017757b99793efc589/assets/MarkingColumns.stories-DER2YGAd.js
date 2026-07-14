import{f as n,j as t}from"./iframe-BV4cbUlE.js";import{O as p}from"./object-table-C9g9NqVr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rc11-G4k.js";import"./Table-Q__Bt9rB.js";import"./index-DXyrG5tp.js";import"./Dialog-DFl1HZtZ.js";import"./cross-COlLkHCW.js";import"./svgIconContainer-Dr7oGvpm.js";import"./useBaseUiId--8KmZa2_.js";import"./InternalBackdrop-D6IOegyZ.js";import"./composite-D3vh-suo.js";import"./index-RFLA8vEX.js";import"./index-DM_IWwPy.js";import"./index-CMs9oSwV.js";import"./useEventCallback-Dc-T_T8Q.js";import"./SkeletonBar-6r-uwrKR.js";import"./LoadingCell-7dgxxIXU.js";import"./ColumnConfigDialog-4ho3ENne.js";import"./DraggableList-CHwbyyIr.js";import"./search-BJZCsFkW.js";import"./Input-BrSfdZoS.js";import"./useControlled-Geq2FNof.js";import"./Button-CjFiJqEg.js";import"./small-cross-BK_fcA3U.js";import"./ActionButton-DRWoPCsq.js";import"./Checkbox-CIN_hk_R.js";import"./useValueChanged-C1rYMtt6.js";import"./CollapsiblePanel-B4Hsv5FC.js";import"./MultiColumnSortDialog-D6ZKaO6W.js";import"./MenuTrigger-Djitk654.js";import"./CompositeItem-Cabmgwfx.js";import"./ToolbarRootContext-DTX7Ze30.js";import"./getDisabledMountTransitionStyles-D0c2WvgE.js";import"./getPseudoElementBounds-jIzGDApe.js";import"./chevron-down-B6tzQXyN.js";import"./index-CQRRvGff.js";import"./error-B70U4E8b.js";import"./BaseCbacBanner-BxUhci3E.js";import"./makeExternalStore-CtIL_ulF.js";import"./Tooltip-UuLfMgrv.js";import"./PopoverPopup-BCa6SNwK.js";import"./toNumber-CFUMrPnY.js";import"./useOsdkClient-DaXXvU5X.js";import"./tick-icTzWNpu.js";import"./DropdownField-MFqJ_Uq0.js";import"./withOsdkMetrics-hmq2OmN3.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
