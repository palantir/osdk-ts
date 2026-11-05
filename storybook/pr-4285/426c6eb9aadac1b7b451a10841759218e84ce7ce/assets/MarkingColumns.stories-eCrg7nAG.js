import{f as p,j as e}from"./iframe-DGqz47MG.js";import{O as i}from"./object-table-Bd4xscwF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cim2rGXh.js";import"./Table-BZiQqcrs.js";import"./index-Bd9LEkTw.js";import"./Dialog-CCWLfNS3.js";import"./cross-CEq_GdMU.js";import"./svgIconContainer-DOG7DxQy.js";import"./useBaseUiId-DUXwyBKc.js";import"./InternalBackdrop-CG21yzEz.js";import"./composite-Ba00gyVa.js";import"./index-D5J1M6Rk.js";import"./index-8Cs0qfIH.js";import"./index-CsvfS9SY.js";import"./useEventCallback-DSfQYw-a.js";import"./SkeletonBar-D8Tdd3Oo.js";import"./LoadingCell-CGAj37sN.js";import"./ColumnConfigDialog-DFDPI9aH.js";import"./DraggableList-C-osdfZa.js";import"./search-DRqVXkuQ.js";import"./Input-74xcLqWb.js";import"./useControlled-CzYzgIWX.js";import"./Button-BbcMUrJ0.js";import"./small-cross-DxaBc40t.js";import"./ActionButton-DTp5BPtP.js";import"./Checkbox-B49l5BI7.js";import"./useValueChanged-DHjlJWOI.js";import"./CollapsiblePanel-D3JnwVn4.js";import"./MultiColumnSortDialog-B2P3ZuoZ.js";import"./MenuTrigger-Dt6SVdup.js";import"./CompositeItem-DkRqlbxr.js";import"./ToolbarRootContext-CVWObsgJ.js";import"./getDisabledMountTransitionStyles-BhKGK1Dz.js";import"./getPseudoElementBounds-VHie68sa.js";import"./chevron-down-oASCfusG.js";import"./index-BsG8g24_.js";import"./error-CYx8FmP-.js";import"./BaseCbacBanner-CPVJF_5N.js";import"./makeExternalStore-B0og1Ieq.js";import"./Tooltip-BkDKAHSO.js";import"./isObject-lTxslFZd.js";import"./debounce-xenDYozX.js";import"./useOsdkClient-DMdK1qJo.js";import"./tick-CRlk3QC6.js";import"./DropdownField-Boby63HI.js";import"./isEqual-B6aP3hJm.js";import"./_baseIsEqual-Cf3-PdSX.js";import"./withOsdkMetrics-6EClZ-2k.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
