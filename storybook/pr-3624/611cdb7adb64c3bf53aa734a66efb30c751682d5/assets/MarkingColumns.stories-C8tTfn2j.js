import{f as n,j as t}from"./iframe-CV7oxMAA.js";import{O as p}from"./object-table-OPBbETOF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CkuiwHds.js";import"./Table-oR6U1bNQ.js";import"./index-C_nnM2jx.js";import"./Dialog-BDhaVKBh.js";import"./cross-B3R0YG-c.js";import"./svgIconContainer-kYrCvsi7.js";import"./useBaseUiId-Cg8u4ZfO.js";import"./InternalBackdrop-CVKwJw6U.js";import"./composite-BhUOxeqc.js";import"./index-CQ7rwZE6.js";import"./index-zTmSyAXD.js";import"./index-3s7A5X5P.js";import"./useEventCallback-CyJb3TYw.js";import"./SkeletonBar-C0bvqCd2.js";import"./LoadingCell-CyqqtWTe.js";import"./ColumnConfigDialog-MbXu1Uhl.js";import"./DraggableList-BkMsRiYP.js";import"./search-BgXA6lwn.js";import"./Input-HITKfqWe.js";import"./useControlled-HualhFdM.js";import"./Button-hkPpZDNU.js";import"./small-cross-B97w65mA.js";import"./ActionButton-B4wNnoKU.js";import"./Checkbox-CIm155Z7.js";import"./useValueChanged-C7ngI6ZZ.js";import"./CollapsiblePanel-BPK2uCr9.js";import"./MultiColumnSortDialog-BzYfD1Aw.js";import"./MenuTrigger-COLK3l6J.js";import"./CompositeItem-DAPrQVEb.js";import"./ToolbarRootContext-Bm3KSKaB.js";import"./getDisabledMountTransitionStyles-CbaSU0ea.js";import"./getPseudoElementBounds-B810rAf2.js";import"./chevron-down-BM_z1ri0.js";import"./index-C5ddOBQi.js";import"./error-BEEZg5s0.js";import"./BaseCbacBanner-DZPF5KJy.js";import"./makeExternalStore-CW2Jq-I3.js";import"./Tooltip-C6SE2zwF.js";import"./PopoverPopup-C4kHdZEl.js";import"./toNumber-DwXevbGr.js";import"./useOsdkClient-B6lIXgT3.js";import"./tick-C_7IeST8.js";import"./DropdownField-DtsLqx98.js";import"./withOsdkMetrics-DsYJAIL0.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
