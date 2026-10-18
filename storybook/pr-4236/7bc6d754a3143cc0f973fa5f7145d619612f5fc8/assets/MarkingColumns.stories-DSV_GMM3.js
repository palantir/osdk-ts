import{f as p,j as e}from"./iframe-D826lLui.js";import{O as i}from"./object-table-B_uBeT-f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CGkAb-Wu.js";import"./Table-BUFGUybT.js";import"./index-DxNlvLAd.js";import"./Dialog-BOe-rnhW.js";import"./cross-9ZGBzaem.js";import"./svgIconContainer-BjuGxCIz.js";import"./useBaseUiId-CcA6f0Di.js";import"./InternalBackdrop-D8CCCsk7.js";import"./composite-D5SkMTiw.js";import"./index-e93ICMyG.js";import"./index-Dt4QZQ1m.js";import"./index-BjybkpAS.js";import"./useEventCallback-Ef5EfyWq.js";import"./SkeletonBar-DI4OC7oE.js";import"./LoadingCell-DfPckAF8.js";import"./ColumnConfigDialog-wVrsPA1W.js";import"./DraggableList-FEYECt2n.js";import"./search-BEeF_4Rd.js";import"./Input-D8Q7l-gb.js";import"./useControlled-D2sq1Iv_.js";import"./Button-DOLHRrn6.js";import"./small-cross-Dy0HqjGX.js";import"./ActionButton-BGwu0aco.js";import"./Checkbox-Ba70wUOE.js";import"./useValueChanged-D4utz3wv.js";import"./CollapsiblePanel-B3fFT0gn.js";import"./MultiColumnSortDialog-DgVM5Z_C.js";import"./MenuTrigger-f-DXw5qg.js";import"./CompositeItem-DW0wn-NB.js";import"./ToolbarRootContext-DY8S7jf3.js";import"./getDisabledMountTransitionStyles-CWVYXsPM.js";import"./getPseudoElementBounds-DvlgftUk.js";import"./chevron-down-C1HuiRtn.js";import"./index-T95LEHG2.js";import"./error-DNLlyci1.js";import"./BaseCbacBanner-DtsQhcu9.js";import"./makeExternalStore-B82ZGGVu.js";import"./Tooltip-DJDeXhNg.js";import"./PopoverPopup-B6kEvXUf.js";import"./debounce-cNU0CJPI.js";import"./useOsdkClient-Bbo5pAbB.js";import"./tick-DxttFOXl.js";import"./DropdownField-JiLo16C6.js";import"./isEqual-DIp8qzW1.js";import"./withOsdkMetrics--xMNvw5Y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
