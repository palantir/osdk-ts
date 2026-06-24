import{f as n,j as t}from"./iframe-vQ9z-HFg.js";import{O as p}from"./object-table-CkWfXwhT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-TZPTAljU.js";import"./Table-DeWZWUf2.js";import"./index-D5V8RJcf.js";import"./Dialog-BlhQB-HZ.js";import"./cross-B0ls2j_-.js";import"./svgIconContainer-DRb8z1Rx.js";import"./useBaseUiId-Cl3JX7gj.js";import"./InternalBackdrop-Chh5ODOb.js";import"./composite-CkNHErD4.js";import"./index-BGtpL9pr.js";import"./index-BMcIHxvG.js";import"./index-CUC70KEI.js";import"./useEventCallback-DbYezrtG.js";import"./SkeletonBar-DUz2wsHL.js";import"./LoadingCell-CJh3FBvM.js";import"./ColumnConfigDialog-BsuYzc0a.js";import"./DraggableList-BU4RHCyq.js";import"./Input-DBgbx5mS.js";import"./useControlled-Yf3rA-4A.js";import"./Button-rlGqijKx.js";import"./small-cross-CCgJzdEs.js";import"./ActionButton-elx94Tak.js";import"./Checkbox-RAPDviOo.js";import"./minus-B3AGVoBZ.js";import"./useValueChanged-CkO8yvio.js";import"./caret-down-xA0ebGWp.js";import"./CollapsiblePanel-fYNPmlAj.js";import"./MultiColumnSortDialog-CQlzD6EW.js";import"./MenuTrigger-LelgicN3.js";import"./CompositeItem-Cfrd37DA.js";import"./ToolbarRootContext-DiW8PML4.js";import"./getDisabledMountTransitionStyles-Dm9Is92d.js";import"./getPseudoElementBounds-hwTiUUiw.js";import"./chevron-down-6TRSx4Bv.js";import"./index-N_BZE77G.js";import"./error-Dhm8bknf.js";import"./BaseCbacBanner-pa9LmLVl.js";import"./makeExternalStore-DUD3NL_e.js";import"./Tooltip-Cdaxx_Uh.js";import"./PopoverPopup-CAzo830r.js";import"./toNumber-D5OQtJbp.js";import"./useOsdkClient-7SNiwl77.js";import"./DropdownField-jAFG96Dw.js";import"./withOsdkMetrics-C1YimZEA.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
