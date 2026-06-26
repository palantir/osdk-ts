import{f as n,j as t}from"./iframe-M5p883ea.js";import{O as p}from"./object-table-DgHjbFz_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B9WvtZce.js";import"./Table-B0hf57KV.js";import"./index-DvxWdzGJ.js";import"./Dialog-DHAidr5o.js";import"./cross-CAnA-e4x.js";import"./svgIconContainer-Ctf7sYtI.js";import"./useBaseUiId-CbBT4KRm.js";import"./InternalBackdrop-D7MjV7ep.js";import"./composite-DoeLWjvw.js";import"./index-Co-suz8o.js";import"./index-oxy6ElBp.js";import"./index-D1Gq9F6u.js";import"./useEventCallback-BENPahaK.js";import"./SkeletonBar-Bmzny3n5.js";import"./LoadingCell-DQaioIrY.js";import"./ColumnConfigDialog-VRpZUxn_.js";import"./DraggableList-uLFQGM-h.js";import"./Input-Cu12jXBh.js";import"./useControlled-D9jCqU_U.js";import"./Button-7GX5URsY.js";import"./small-cross-BEeVzM9y.js";import"./ActionButton-C3afOiCv.js";import"./Checkbox-CCZjX8-6.js";import"./minus-C-eiwEI2.js";import"./useValueChanged-89_Fv0Uo.js";import"./caret-down-DIZqL56h.js";import"./CollapsiblePanel-CS4Plr7E.js";import"./MultiColumnSortDialog-BzOsNI34.js";import"./MenuTrigger-CBQgJ2El.js";import"./CompositeItem-BMs9tTzB.js";import"./ToolbarRootContext-6ELveliq.js";import"./getDisabledMountTransitionStyles-B6edNftj.js";import"./getPseudoElementBounds-D9oByHcc.js";import"./chevron-down-WqdumIAq.js";import"./index-Bq_sSt6c.js";import"./error-Bc9LxTCw.js";import"./BaseCbacBanner-l8iCpifo.js";import"./makeExternalStore-Drp100dE.js";import"./Tooltip-N3iNqpAC.js";import"./PopoverPopup-go2avdsl.js";import"./toNumber-DM-4aLw-.js";import"./useOsdkClient-CwGSYCwz.js";import"./DropdownField-CPcEi0O3.js";import"./withOsdkMetrics-BClkdzTb.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
