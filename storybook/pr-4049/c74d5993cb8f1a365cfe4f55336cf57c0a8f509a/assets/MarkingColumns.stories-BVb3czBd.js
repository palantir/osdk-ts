import{f as p,j as e}from"./iframe-Dqi9AKQ4.js";import{O as i}from"./object-table-CNNKh8-j.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bt4Y1gaG.js";import"./Table-CHeMyKlI.js";import"./index-DUzHQ-g1.js";import"./Dialog-CVEvTvZF.js";import"./cross-CViy1YB1.js";import"./svgIconContainer-DBFNWjmD.js";import"./useBaseUiId-D9DZyJv1.js";import"./InternalBackdrop-9H6yZA48.js";import"./composite-BrE87LEg.js";import"./index-BTd5eHZp.js";import"./index-B4xagMAY.js";import"./index-jzpzYf-A.js";import"./useEventCallback-CSNxuTtP.js";import"./SkeletonBar-BPH_PiMF.js";import"./LoadingCell-Dq5OHt88.js";import"./ColumnConfigDialog-WqlkhbFV.js";import"./DraggableList-Cf08_d1z.js";import"./search-DGlyxpi9.js";import"./Input-Bbb9NzYy.js";import"./useControlled-Bofva4ix.js";import"./Button-qQ4ULf31.js";import"./small-cross-INTfkl0O.js";import"./ActionButton-BQpCJoEa.js";import"./Checkbox-wgB5kSQc.js";import"./useValueChanged-Cj0uRmyX.js";import"./CollapsiblePanel-B5Y_UxJj.js";import"./MultiColumnSortDialog-BBVd7IxF.js";import"./MenuTrigger-BSzyIYxi.js";import"./CompositeItem-D9oAX4d7.js";import"./ToolbarRootContext-D53iOUwp.js";import"./getDisabledMountTransitionStyles-CMb5T3sE.js";import"./getPseudoElementBounds-B6ybVaQm.js";import"./chevron-down-B-x5XAQs.js";import"./index-CJftUKPV.js";import"./error-Bfb1Ifz6.js";import"./BaseCbacBanner-DBu6XfxN.js";import"./makeExternalStore-Ckysxwb8.js";import"./Tooltip-B6UHjEmR.js";import"./PopoverPopup-BpgdYdCn.js";import"./debounce-dbUkf27z.js";import"./useOsdkClient-DJCPaoyl.js";import"./tick-C57Pc5oH.js";import"./DropdownField-DVa_ve9-.js";import"./isEqual-C5ITjuih.js";import"./withOsdkMetrics-B-BQZlvM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
