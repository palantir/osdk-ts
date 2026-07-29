import{f as p,j as e}from"./iframe-D8OemlW9.js";import{O as i}from"./object-table-CijJklQ8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C63OMMoY.js";import"./index-CiF4zylQ.js";import"./Dialog-BjkAmFh4.js";import"./cross-DpXB_Ps1.js";import"./svgIconContainer-BU7OxppY.js";import"./useBaseUiId-Bh3moove.js";import"./InternalBackdrop-BF88OrKs.js";import"./composite-BBE6Lj1u.js";import"./index-CPBLZVtg.js";import"./index-tbQAWs3B.js";import"./index-BBRJlR8B.js";import"./useEventCallback-BbiqIkkJ.js";import"./SkeletonBar-CC0n8ZoQ.js";import"./LoadingCell-DzbbgWn1.js";import"./ColumnConfigDialog-ueTvAbkU.js";import"./DraggableList-CgKQoc-e.js";import"./search-7u3ddEhN.js";import"./Input-CGLEj01j.js";import"./useControlled-C4eqeGIw.js";import"./isEqual-B1bTncD3.js";import"./isObject-DNycWRhs.js";import"./Button-BaF7ht4j.js";import"./ActionButton-CkoeN1pa.js";import"./Checkbox-i_5tznLe.js";import"./useValueChanged-DUWzN1g_.js";import"./CollapsiblePanel-GdDFCM0d.js";import"./MultiColumnSortDialog-BJZGOxxf.js";import"./MenuTrigger-BPEoXRuf.js";import"./CompositeItem-DZtRWtLO.js";import"./ToolbarRootContext-FqIVkw-A.js";import"./getDisabledMountTransitionStyles-B4hVK4i0.js";import"./getPseudoElementBounds-W-ok6oZ5.js";import"./chevron-down-yj-Bk-PK.js";import"./index-DcTul6uP.js";import"./error-B7GqCXyt.js";import"./BaseCbacBanner-DF1DQmum.js";import"./makeExternalStore-DrpoL1n0.js";import"./Tooltip-j0H6DC9r.js";import"./PopoverPopup-DZ4-fkZw.js";import"./toNumber-JxYKBDCm.js";import"./useOsdkClient-BpAeP9F7.js";import"./tick-D6yWpjCG.js";import"./DropdownField-v9OtvE1M.js";import"./withOsdkMetrics-xS-Om8wD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
