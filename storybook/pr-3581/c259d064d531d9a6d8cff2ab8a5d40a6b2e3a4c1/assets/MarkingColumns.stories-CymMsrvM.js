import{f as n,j as t}from"./iframe-BjWdl7eN.js";import{O as p}from"./object-table-CokJXgDU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xIUqxmHY.js";import"./Table-cQ32uaL3.js";import"./index-DeR5W6NB.js";import"./Dialog-CGB8NEf-.js";import"./cross-B_OmxRPA.js";import"./svgIconContainer-BHzzOhuq.js";import"./useBaseUiId-yyPww2M4.js";import"./InternalBackdrop-C9EHNMb8.js";import"./composite-C_W_sT2N.js";import"./index-CU5u0Gsl.js";import"./index-UXopW9Hw.js";import"./index-D01QZJx1.js";import"./useEventCallback-_TD7Kv-c.js";import"./SkeletonBar-C-5sAa3J.js";import"./LoadingCell-D6cIBWxo.js";import"./ColumnConfigDialog-CLAlXkRx.js";import"./DraggableList-Duv3sTHu.js";import"./search-BEKwaNvj.js";import"./Input-xLHFo-Z8.js";import"./useControlled-CdWaWuZJ.js";import"./Button-CRMOn3ry.js";import"./small-cross-o6IGy9oA.js";import"./ActionButton-2TlumMos.js";import"./Checkbox-BSpoklJb.js";import"./minus-B6sR6Gj2.js";import"./tick-BhPVmm4E.js";import"./useValueChanged-E861r8R4.js";import"./caret-down-BGVbt0Mc.js";import"./CollapsiblePanel-DXhV6DpU.js";import"./MultiColumnSortDialog-BFO1eqb4.js";import"./MenuTrigger-DRQFuXxY.js";import"./CompositeItem-CIthROPJ.js";import"./ToolbarRootContext-klef80m0.js";import"./getDisabledMountTransitionStyles-BYcyJd8z.js";import"./getPseudoElementBounds-DJIxT154.js";import"./chevron-down-I-1bnp1I.js";import"./index-z-MdZvSO.js";import"./error-DZFuvltD.js";import"./BaseCbacBanner-Bz4FQHPM.js";import"./makeExternalStore-Cn7sRJ4k.js";import"./Tooltip-WKKnF80N.js";import"./PopoverPopup-C47-kIcb.js";import"./toNumber-C75hVpsM.js";import"./useOsdkClient-hK-AwCQa.js";import"./DropdownField-CDzZaxtd.js";import"./withOsdkMetrics-BLUOmapG.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
