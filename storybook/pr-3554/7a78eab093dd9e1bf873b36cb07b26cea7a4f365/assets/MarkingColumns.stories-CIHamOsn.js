import{f as n,j as t}from"./iframe-BoXiqhwy.js";import{O as p}from"./object-table-jbhqishM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWTyC609.js";import"./Table-xSq8-Ux5.js";import"./index-DOwGMV-Y.js";import"./Dialog-BkL6WhS6.js";import"./cross-BvSzX8p0.js";import"./svgIconContainer-Bsr3VABI.js";import"./useBaseUiId-K37S8rBv.js";import"./InternalBackdrop-CuIFwbiJ.js";import"./composite-Y7mmQywv.js";import"./index-C3Qd_ZJ4.js";import"./index-Dx4ZeSrf.js";import"./index-B6m-jVvw.js";import"./useEventCallback-BmYYO3oo.js";import"./SkeletonBar-BKE6rQwn.js";import"./LoadingCell-DCYspAWc.js";import"./ColumnConfigDialog-BscAIp2m.js";import"./DraggableList-D7KGR9QN.js";import"./Input-viEGs0AL.js";import"./useControlled-BpN1g3W7.js";import"./Button-Bk5Vf9Rh.js";import"./small-cross-DpOEr4rq.js";import"./ActionButton-B5SnyCR1.js";import"./Checkbox-GR_7xqvE.js";import"./minus-yatQGqfu.js";import"./useValueChanged-jmUC9n0L.js";import"./caret-down-CgJhFV5b.js";import"./CollapsiblePanel-BtPcLwiL.js";import"./MultiColumnSortDialog-CZzjTVUb.js";import"./MenuTrigger-DMRCc6J6.js";import"./CompositeItem-BOIiHTFr.js";import"./ToolbarRootContext-ChlR9rCg.js";import"./getDisabledMountTransitionStyles-Chqo7vdJ.js";import"./getPseudoElementBounds-BZwFHlV3.js";import"./chevron-down-B1EYrTV4.js";import"./index-BUPfeXYP.js";import"./error-xlX0Od5Z.js";import"./BaseCbacBanner-Coj-RVFV.js";import"./makeExternalStore-Ct2ooPqb.js";import"./Tooltip-Dh9luqIA.js";import"./PopoverPopup-CCb2E6NJ.js";import"./toNumber-BXcFX9vw.js";import"./useOsdkClient-BLt1xUCu.js";import"./DropdownField-BWMwji8B.js";import"./withOsdkMetrics--vVwYJ_J.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
