import{f as p,j as e}from"./iframe-qTpzqqub.js";import{O as i}from"./object-table-Q8zTruBQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dn-jOWjK.js";import"./Table-DcXvOPbL.js";import"./index-BOmnG_lN.js";import"./Dialog-Da5O5d0y.js";import"./cross-CnNHuvcS.js";import"./svgIconContainer-Bm8Tr4gZ.js";import"./useBaseUiId-DOsGlG1_.js";import"./InternalBackdrop-ObeoxtxS.js";import"./composite-qaT37KGA.js";import"./index-BVtfFrKv.js";import"./index-JoLmhLbC.js";import"./index-Dkd9PCQh.js";import"./useEventCallback-B_IWet6b.js";import"./SkeletonBar-0MAnKgp-.js";import"./LoadingCell-9bEekYTj.js";import"./ColumnConfigDialog-Bng4q24v.js";import"./DraggableList-BtzQ-KSv.js";import"./search-MdoZShsS.js";import"./Input-DUA3RXYY.js";import"./useControlled-B4JMLJpk.js";import"./Button-DEMuzBDP.js";import"./small-cross-Bjzoktng.js";import"./ActionButton-58YsK2KW.js";import"./Checkbox-DpyKZMI-.js";import"./useValueChanged-25t35zoP.js";import"./CollapsiblePanel-C78dnGmq.js";import"./MultiColumnSortDialog-D2JFrppZ.js";import"./MenuTrigger-DwCvegK_.js";import"./CompositeItem-6iO3e1lI.js";import"./ToolbarRootContext-BKny703T.js";import"./getDisabledMountTransitionStyles-CWddHoMT.js";import"./getPseudoElementBounds-DamjYshO.js";import"./chevron-down-B3fo8V2O.js";import"./index-CXH_UxOS.js";import"./error-Bf3H-zmd.js";import"./BaseCbacBanner-CfqblCC-.js";import"./makeExternalStore-DYaXh9WX.js";import"./Tooltip-CjimaI3D.js";import"./PopoverPopup-DSP2J700.js";import"./debounce-CiWxqlGN.js";import"./useOsdkClient-CXvIaCu6.js";import"./tick-CV3XYpGq.js";import"./DropdownField-nRjqNqNr.js";import"./isEqual-CZ0PM3VD.js";import"./withOsdkMetrics-C5EFq8dH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
