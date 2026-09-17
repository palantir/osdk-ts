import{f as p,j as e}from"./iframe-DI00rnMc.js";import{O as i}from"./object-table-DCV7k42M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bhha9UTp.js";import"./Table-xysYXERX.js";import"./index-Brq0evln.js";import"./Dialog-BGKWvYKg.js";import"./cross-6J7bJBxX.js";import"./svgIconContainer-DP5UNNJ5.js";import"./useBaseUiId-6U9MPwLo.js";import"./InternalBackdrop-5T5xbc5h.js";import"./composite-UOsa0WMB.js";import"./index-Chs62TH6.js";import"./index-Dd09UFHP.js";import"./index-BaR9V_cz.js";import"./useEventCallback-DlKWHTb3.js";import"./SkeletonBar-BMhplOL3.js";import"./LoadingCell-Cy3018Z9.js";import"./ColumnConfigDialog-CbzSqC-H.js";import"./DraggableList-CXvW5fS_.js";import"./search-D078c5Qn.js";import"./Input-5eKJv0PC.js";import"./useControlled-C2-apkIG.js";import"./Button-7EKbW6_f.js";import"./small-cross-W27oLZuH.js";import"./ActionButton-C53buHAy.js";import"./Checkbox-BuPcyFtO.js";import"./useValueChanged-Drw-qmtO.js";import"./CollapsiblePanel-DWSPG8Q_.js";import"./MultiColumnSortDialog-BRpxFD4d.js";import"./MenuTrigger-DY6AZSH4.js";import"./CompositeItem-PKIDUwep.js";import"./ToolbarRootContext-BVNpcmSf.js";import"./getDisabledMountTransitionStyles-DEsnJVLy.js";import"./getPseudoElementBounds-CdI2GVpp.js";import"./chevron-down-ihi9Dc4D.js";import"./index-D6jwq80D.js";import"./error-CCbSqJWm.js";import"./BaseCbacBanner-DPXH0tTQ.js";import"./makeExternalStore-qZ-zko2S.js";import"./Tooltip-ZhOYcscf.js";import"./PopoverPopup-DVqDwMCW.js";import"./debounce-DshZgGYh.js";import"./useOsdkClient-D1SRiVtj.js";import"./tick-Da1rXlTd.js";import"./DropdownField-uqgsMlJj.js";import"./isEqual-BbwTjB3b.js";import"./withOsdkMetrics-DT1mwdZ-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
