import{f as p,j as e}from"./iframe-dxrUGHlK.js";import{O as i}from"./object-table-hg5iYLBs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B9qIDFMl.js";import"./Table-BDJVErev.js";import"./index-DPQcu4-a.js";import"./Dialog-BdAvzbRZ.js";import"./cross-Dj8MH7yM.js";import"./svgIconContainer-D-3aEKZU.js";import"./useBaseUiId-BsvKb-r1.js";import"./InternalBackdrop-DlhtBUyp.js";import"./composite-Dw-SYZmG.js";import"./index-C0ofq-ja.js";import"./index-BY143isZ.js";import"./index-D5-q3DyH.js";import"./useEventCallback-ayjMMOqN.js";import"./SkeletonBar-C2WYuCYy.js";import"./LoadingCell-C3rYW6d3.js";import"./ColumnConfigDialog-C1UbL8k6.js";import"./DraggableList-C3qnRuj_.js";import"./search-CVhjqWpu.js";import"./Input-C2FrKznv.js";import"./useControlled-D5pah6Ut.js";import"./Button-v2rih8HU.js";import"./small-cross-DrUhNudg.js";import"./ActionButton-TJz4kjAm.js";import"./Checkbox-CaAY45uN.js";import"./useValueChanged-BsqSHN0m.js";import"./CollapsiblePanel-BHW3YOjn.js";import"./MultiColumnSortDialog-DJR1GnhR.js";import"./MenuTrigger-BpOuL8ih.js";import"./CompositeItem-BLdzDdC9.js";import"./ToolbarRootContext-Cm84R3Vn.js";import"./getDisabledMountTransitionStyles-6BSbBO0S.js";import"./getPseudoElementBounds-B_zagfDH.js";import"./chevron-down-Ci5voemn.js";import"./index-BZzuVaIM.js";import"./error-DiHcLZ6r.js";import"./BaseCbacBanner-ebOZnzxu.js";import"./makeExternalStore-DsTmi0Ui.js";import"./Tooltip-BsaNTiq4.js";import"./PopoverPopup-BA5CaoZf.js";import"./debounce-DSygVot5.js";import"./useOsdkClient-CDGZBRrB.js";import"./tick-BnzW6v2L.js";import"./DropdownField-B_Tlb7nO.js";import"./isEqual-DVT4JLDM.js";import"./withOsdkMetrics-C48cTPuA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
