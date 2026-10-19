import{f as p,j as e}from"./iframe-3DYs7LO7.js";import{O as i}from"./object-table-BfsItrmr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDRkpYDH.js";import"./Table-s5fahLWh.js";import"./index-Dksq0QWW.js";import"./Dialog-BmuFHVtK.js";import"./cross-BiEQYoFR.js";import"./svgIconContainer-E5ErPZjm.js";import"./useBaseUiId-CeE4102D.js";import"./InternalBackdrop-CPdSJMpf.js";import"./composite-BCO-9Moa.js";import"./index-Bg_CqW7M.js";import"./index-DNpL3p8G.js";import"./index-CJTVlVv5.js";import"./useEventCallback-DwsRMbJG.js";import"./SkeletonBar-BfJniFPr.js";import"./LoadingCell-C8da80wj.js";import"./ColumnConfigDialog-CYE3ysbI.js";import"./DraggableList-C9SO0dZm.js";import"./search-D5yGPAlT.js";import"./Input-Bbtubjan.js";import"./useControlled-LDymMyjQ.js";import"./Button-Co786LuF.js";import"./small-cross-DdM0FPfO.js";import"./ActionButton-Cbyc9XzM.js";import"./Checkbox-BStnP9ea.js";import"./useValueChanged-BQpMrMLa.js";import"./CollapsiblePanel-DVs4UHLN.js";import"./MultiColumnSortDialog-Bvn13wQo.js";import"./MenuTrigger-BFaeTz7M.js";import"./CompositeItem-D-tb1HU0.js";import"./ToolbarRootContext-CEG1pZ6f.js";import"./getDisabledMountTransitionStyles-CfKy3gzP.js";import"./getPseudoElementBounds-RIT9EOF5.js";import"./chevron-down-DLvTPfQ9.js";import"./index-HJUPOpns.js";import"./error-B7nnIe8L.js";import"./BaseCbacBanner-Bopiba_z.js";import"./makeExternalStore-DOhtyVO-.js";import"./Tooltip-RwDgrf4M.js";import"./PopoverPopup-BfUZB0MB.js";import"./debounce-Dx93VxJF.js";import"./useOsdkClient-CWVCE7e7.js";import"./tick-lA4emHrS.js";import"./DropdownField-BfdPwUa1.js";import"./isEqual-DsvzyOCy.js";import"./withOsdkMetrics-Dte6-FPa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
