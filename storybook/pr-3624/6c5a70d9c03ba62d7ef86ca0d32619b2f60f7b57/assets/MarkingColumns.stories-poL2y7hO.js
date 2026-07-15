import{f as n,j as t}from"./iframe-VqOYBpiT.js";import{O as p}from"./object-table-ClEhNoqJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CatpkaTg.js";import"./Table-cpTlKEGL.js";import"./index-qCYDZjxA.js";import"./Dialog-DN6yKxFd.js";import"./cross-YMZyLxkb.js";import"./svgIconContainer-CzVf3Ft2.js";import"./useBaseUiId-DH1vvoHz.js";import"./InternalBackdrop-C4e4Qw66.js";import"./composite-387RyXo2.js";import"./index-DT_rKFyd.js";import"./index-74MgD2Pp.js";import"./index-BA1hQaiJ.js";import"./useEventCallback-DlRiXzvg.js";import"./SkeletonBar-Dp4CBUcX.js";import"./LoadingCell-BvDoLCPn.js";import"./ColumnConfigDialog-Dx_hvP8y.js";import"./DraggableList-BjoTfjAE.js";import"./search-DOIgsObl.js";import"./Input-Br3ESkJT.js";import"./useControlled-m_CDe32a.js";import"./Button-DjBK7AmD.js";import"./small-cross-Cl1ZW84O.js";import"./ActionButton-Dl8TpWwZ.js";import"./Checkbox-DRcxTIfZ.js";import"./useValueChanged-g8KEQeu_.js";import"./CollapsiblePanel-3c7uJaRV.js";import"./MultiColumnSortDialog-Chad4vJF.js";import"./MenuTrigger-C7OBOXU8.js";import"./CompositeItem-C719kOFT.js";import"./ToolbarRootContext-D4jJY08o.js";import"./getDisabledMountTransitionStyles-CIk8QCC4.js";import"./getPseudoElementBounds-DWITJKMj.js";import"./chevron-down-D7HIqLdr.js";import"./index-CAdcIpuX.js";import"./error-DFogRlMx.js";import"./BaseCbacBanner-BM_5fwhF.js";import"./makeExternalStore-DTyZ-BTP.js";import"./Tooltip-BZ5mMHHm.js";import"./PopoverPopup-hfo4qVvc.js";import"./toNumber-Dc6QqdlM.js";import"./useOsdkClient-sEFgjGs3.js";import"./tick-DobqsDNZ.js";import"./DropdownField-C40mhXX2.js";import"./withOsdkMetrics-fYlINsqq.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
