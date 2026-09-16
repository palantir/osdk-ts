import{f as p,j as e}from"./iframe-BOatYE2J.js";import{O as i}from"./object-table-B_GKwaoz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Chit4ifE.js";import"./Table-2wznzWpW.js";import"./index-BTbb2drj.js";import"./Dialog-BwPuGRRl.js";import"./cross-DZBv_JyD.js";import"./svgIconContainer-BIZPnmJE.js";import"./useBaseUiId-C3kAyh59.js";import"./InternalBackdrop-B0G1EUFd.js";import"./composite-Cutn8tDa.js";import"./index-CYDTlvor.js";import"./index-B1tLDNpR.js";import"./index-CxfJdBYp.js";import"./useEventCallback-CHJ8IA9Z.js";import"./SkeletonBar-DBIjsYWu.js";import"./LoadingCell-d-h7484d.js";import"./ColumnConfigDialog-rxN8c4np.js";import"./DraggableList-DJcegf_n.js";import"./search-DeiNtXAA.js";import"./Input-CNyJfF3s.js";import"./useControlled-Gz1ZIwEo.js";import"./Button-BPHruMxe.js";import"./small-cross-Cr4POQeq.js";import"./ActionButton-D0XX66qy.js";import"./Checkbox-Cy69mI4B.js";import"./useValueChanged-DaoI3wNN.js";import"./CollapsiblePanel-DuRPtwt5.js";import"./MultiColumnSortDialog-BTXotG44.js";import"./MenuTrigger-aW11Js_E.js";import"./CompositeItem-Cc_WknAx.js";import"./ToolbarRootContext-DP6Z5eRQ.js";import"./getDisabledMountTransitionStyles-C5-4kkSQ.js";import"./getPseudoElementBounds-D7Flotzx.js";import"./chevron-down-qv6CxIZl.js";import"./index-C7IRvIDp.js";import"./error-SJA0nUb8.js";import"./BaseCbacBanner-PumyHqdF.js";import"./makeExternalStore-uURBDsal.js";import"./Tooltip-BrfRi3aQ.js";import"./PopoverPopup-BHiQJeAc.js";import"./debounce-CCaPPTId.js";import"./useOsdkClient-DdxPj0N7.js";import"./tick-Dz18GSdv.js";import"./DropdownField-DbWikUpM.js";import"./isEqual-DbaqOO8-.js";import"./withOsdkMetrics-C8K4o6bx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
