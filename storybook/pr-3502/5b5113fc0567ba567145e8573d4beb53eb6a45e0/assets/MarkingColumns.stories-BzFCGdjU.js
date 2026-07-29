import{f as n,j as t}from"./iframe-C6-ggXJp.js";import{O as p}from"./object-table-C2warSUj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1XKl6Iy.js";import"./Table-DWWfcwRh.js";import"./index-DsmK34Fr.js";import"./Dialog-BYiJ_0zR.js";import"./cross-CTcrTiMr.js";import"./svgIconContainer-x3aIBk_c.js";import"./useBaseUiId-nBlzr4HM.js";import"./InternalBackdrop-CO9JH9PR.js";import"./composite-L2393sS3.js";import"./index-fSq86_F1.js";import"./index-CjgI9bgd.js";import"./index-L5s49mKn.js";import"./useEventCallback-Bq3QnXN_.js";import"./SkeletonBar-CqNW05MO.js";import"./LoadingCell-ZutcCPQN.js";import"./ColumnConfigDialog-DFU5ybyc.js";import"./DraggableList-n1aSIq3c.js";import"./Input-CnVVFacM.js";import"./useControlled-v1qYhe-N.js";import"./Button-B271mLaY.js";import"./small-cross-BL5rE7Da.js";import"./ActionButton-BvXKgFqL.js";import"./Checkbox-1poNOdXg.js";import"./minus-CURtutgI.js";import"./useValueChanged-DY925blV.js";import"./caret-down-8FGwmF3m.js";import"./CollapsiblePanel-ut2_s6gV.js";import"./MultiColumnSortDialog-Dwr7n6ta.js";import"./MenuTrigger-CqrMA6cw.js";import"./CompositeItem-C954TFCK.js";import"./ToolbarRootContext-C7076u2f.js";import"./getDisabledMountTransitionStyles-DJyVeo5R.js";import"./getPseudoElementBounds-BQfcg7uD.js";import"./chevron-down-NMYS1Nku.js";import"./index-c4VmSpzl.js";import"./error-Cc-mG_MK.js";import"./BaseCbacBanner-8CeeT_4j.js";import"./makeExternalStore-D5ZXg_RS.js";import"./Tooltip-D9uJdax4.js";import"./PopoverPopup-kSKfZB1Z.js";import"./toNumber-Dd0xdGTU.js";import"./useOsdkClient-CaSctQPe.js";import"./DropdownField-CXL9XqST.js";import"./useStableShapeDefinition-Cwl5UkYI.js";import"./withOsdkMetrics-DKErgh06.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};
