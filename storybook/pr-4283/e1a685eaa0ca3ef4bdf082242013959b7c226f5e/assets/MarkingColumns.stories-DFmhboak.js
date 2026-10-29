import{f as p,j as e}from"./iframe-Dku1rot2.js";import{O as i}from"./object-table-Cr26mFUl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1jRvLNW.js";import"./Table-mlPYkczm.js";import"./index-CpbATsh6.js";import"./Dialog-CjxY1CgH.js";import"./cross-CYdU8q6K.js";import"./svgIconContainer--MRhEEk0.js";import"./useBaseUiId-BUKWDElb.js";import"./InternalBackdrop-Bv67AAf2.js";import"./composite-BePe6hVW.js";import"./index-rdZNlnOZ.js";import"./index--u9NxfUY.js";import"./index-CQ7Gwlen.js";import"./useEventCallback-DbRXf3-_.js";import"./SkeletonBar-PabXS6Px.js";import"./LoadingCell-5uF9WrXs.js";import"./ColumnConfigDialog-DFBdNJ63.js";import"./DraggableList-m6ykK22n.js";import"./search-UFTU3MKj.js";import"./Input-DJRIt2l4.js";import"./useControlled-DwMnSwB6.js";import"./Button-CGaTAwDT.js";import"./small-cross-QiwT5l_B.js";import"./ActionButton-D1LuQOA7.js";import"./Checkbox-BoLQIXFm.js";import"./useValueChanged-B2781QBM.js";import"./CollapsiblePanel-piFpbce9.js";import"./MultiColumnSortDialog-Cajh4z2b.js";import"./MenuTrigger-CNEa8F6o.js";import"./CompositeItem-BreNqiOh.js";import"./ToolbarRootContext-CXEqftjp.js";import"./getDisabledMountTransitionStyles-CDJ1MLHW.js";import"./getPseudoElementBounds-BpVmGFE2.js";import"./chevron-down-B4TAPheD.js";import"./index-DTheSZ4d.js";import"./error-setnCXRk.js";import"./BaseCbacBanner-BoCpQNO7.js";import"./makeExternalStore-rRh8-oZl.js";import"./Tooltip-Dwc5k9lz.js";import"./PopoverPopup-D-Gbzl8J.js";import"./debounce-CA9_8DL0.js";import"./useOsdkClient-DYuiBPOo.js";import"./tick-CVroU8tN.js";import"./DropdownField-Dhuq6WVc.js";import"./isEqual-chWnWDxq.js";import"./withOsdkMetrics-n7CfGLfD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
