import{f as p,j as e}from"./iframe-DTR6D-RF.js";import{O as i}from"./object-table-Bjfm0_ZT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-a_j-25GL.js";import"./Table-B0acF-0Q.js";import"./index-D7jWhYyZ.js";import"./Dialog-DqgJLJgO.js";import"./cross-DUXytXdv.js";import"./svgIconContainer-CTdZIA2H.js";import"./useBaseUiId-CSnUW2G1.js";import"./InternalBackdrop-CY4cyQPU.js";import"./composite-DubVH8wK.js";import"./index-CIoynBUP.js";import"./index-CeaWSZor.js";import"./index-DwZqbG9c.js";import"./useEventCallback-CPGNRTIC.js";import"./SkeletonBar-DG2N76Ak.js";import"./LoadingCell-Dk35W7vs.js";import"./ColumnConfigDialog-CF6C06HS.js";import"./DraggableList-CjhpS4Hz.js";import"./search-CA4ezTkI.js";import"./Input-BfVNpYWX.js";import"./useControlled-BQyYOX0S.js";import"./Button-B369yMXX.js";import"./small-cross-_n8UDI8I.js";import"./ActionButton-odMXA6JR.js";import"./Checkbox-C4M9YdoL.js";import"./useValueChanged-uq3nMm5M.js";import"./CollapsiblePanel-Cb8omPWi.js";import"./MultiColumnSortDialog-COoHnAmD.js";import"./MenuTrigger-BPyZedSc.js";import"./CompositeItem-DiX4k7Pe.js";import"./ToolbarRootContext-CUq0HOW2.js";import"./getDisabledMountTransitionStyles-sZ7HosF-.js";import"./getPseudoElementBounds-Bk-aKJSe.js";import"./chevron-down-D061nHxl.js";import"./index-DOZx46pQ.js";import"./error-ComocNo0.js";import"./BaseCbacBanner-CYKrO8dC.js";import"./makeExternalStore-HP359Ggt.js";import"./Tooltip-M1ezUcrB.js";import"./isObject-BdCdgIbL.js";import"./debounce-C9Yqr-CS.js";import"./useOsdkClient-s4ovKcdr.js";import"./tick-MViIMcR9.js";import"./DropdownField-pISV7PG6.js";import"./isEqual-CGllARYm.js";import"./_baseIsEqual-Ds4CNB4I.js";import"./withOsdkMetrics-BM7BKbHu.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
