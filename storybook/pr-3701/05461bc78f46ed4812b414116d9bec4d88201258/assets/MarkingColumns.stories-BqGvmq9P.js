import{f as n,j as t}from"./iframe-DsOkoFr5.js";import{O as p}from"./object-table-DGQO2njT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDrF1arX.js";import"./Table-QN4-4rfk.js";import"./index-DOsDpS7O.js";import"./Dialog-BIVqxqlX.js";import"./cross-CzTMhPQH.js";import"./svgIconContainer-CkZLof82.js";import"./useBaseUiId-BE5v2SQN.js";import"./InternalBackdrop-UujSzfYa.js";import"./composite-Dlz3RSxv.js";import"./index-BVf5_tEx.js";import"./index-INnzLx9r.js";import"./index-BxwFaPKy.js";import"./useEventCallback-B4eWyJkU.js";import"./SkeletonBar-DEHq6d8l.js";import"./LoadingCell-CLD_iXK3.js";import"./ColumnConfigDialog-Cf-TsQ1X.js";import"./DraggableList-X-LyVwxG.js";import"./search-DPhlC-LZ.js";import"./Input-CCC1W81Y.js";import"./useControlled-BkLrjPfa.js";import"./Button-Cd51dD9e.js";import"./small-cross-D9OSEBRO.js";import"./ActionButton-BGuLCs2C.js";import"./Checkbox-DFUyRqCh.js";import"./useValueChanged-mrRr6V_9.js";import"./CollapsiblePanel-BfXVRRzN.js";import"./MultiColumnSortDialog-Dacl2QsP.js";import"./MenuTrigger-Bu6UUxOR.js";import"./CompositeItem-DrB_SG8W.js";import"./ToolbarRootContext-CmI7MhD0.js";import"./getDisabledMountTransitionStyles-C3txD8gj.js";import"./getPseudoElementBounds-DSONGU5M.js";import"./chevron-down-dLcXnj71.js";import"./index-7T-2Bfvx.js";import"./error-DPCGqoet.js";import"./BaseCbacBanner-BS9jdnse.js";import"./makeExternalStore-C3CfdmAs.js";import"./Tooltip-CcNHa6m1.js";import"./PopoverPopup-CkhiRoSh.js";import"./toNumber-05hFypft.js";import"./useOsdkClient-DHwQxHlH.js";import"./tick-C4_eiIe9.js";import"./DropdownField-Zj60x6fj.js";import"./withOsdkMetrics-6xBHFVw9.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
