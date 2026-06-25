import{f as n,j as t}from"./iframe-D6mqFBTT.js";import{O as p}from"./object-table-DMtw019s.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BqiXGVGp.js";import"./Table-Dgqe0IDk.js";import"./index-IKJBAM9t.js";import"./Dialog-B5q7sPg2.js";import"./cross-jsK5yfay.js";import"./svgIconContainer-CGVVByNY.js";import"./useBaseUiId-KNerzZ5H.js";import"./InternalBackdrop-DxpuqSHn.js";import"./composite-BRPPGdt9.js";import"./index-fKrhMdSH.js";import"./index-B3qQ6cz9.js";import"./index-BMHndIiP.js";import"./useEventCallback-Ch_cFxP3.js";import"./SkeletonBar-yjzLBug0.js";import"./LoadingCell-qab6ItU1.js";import"./ColumnConfigDialog-BAPPRnxc.js";import"./DraggableList-BGSmRoW9.js";import"./Input-BeS2LIyW.js";import"./useControlled-B5HZUnFY.js";import"./Button-BB6SUvpu.js";import"./small-cross-_ghQN--q.js";import"./ActionButton-DN3TPtfp.js";import"./Checkbox-3D39SiNQ.js";import"./minus-D-TnOxBE.js";import"./useValueChanged-DVslp9WU.js";import"./caret-down-DXTVIqEQ.js";import"./CollapsiblePanel-XB6zv3eq.js";import"./MultiColumnSortDialog--SE2SwwP.js";import"./MenuTrigger-BLxGzBfJ.js";import"./CompositeItem-nNi23CSW.js";import"./ToolbarRootContext-DIcBmQKQ.js";import"./getDisabledMountTransitionStyles-DD5XPuvQ.js";import"./getPseudoElementBounds-BgOXoDB7.js";import"./chevron-down-DKrENz--.js";import"./index-HninNHLY.js";import"./error-BggPY48E.js";import"./BaseCbacBanner-BF_nD0Df.js";import"./makeExternalStore-CwLM2YVT.js";import"./Tooltip-DKOb3CGc.js";import"./PopoverPopup-BSDb3cN4.js";import"./toNumber-CFYMnE41.js";import"./useOsdkClient-CJOOE_mO.js";import"./DropdownField-D6e-ZalF.js";import"./withOsdkMetrics-BTWjxjI9.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
