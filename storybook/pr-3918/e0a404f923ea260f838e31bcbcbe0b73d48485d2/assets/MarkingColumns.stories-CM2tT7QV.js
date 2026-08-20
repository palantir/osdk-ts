import{f as p,j as e}from"./iframe-9M9bsBp7.js";import{O as i}from"./object-table-DDnD0LEF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BM4z56U2.js";import"./Table-BKceQGeK.js";import"./index-Btt-Erli.js";import"./Dialog-Bku0utZc.js";import"./cross-DvXvrJje.js";import"./svgIconContainer-CoivixKV.js";import"./useBaseUiId-Cecht4K8.js";import"./InternalBackdrop-BuQOhnSQ.js";import"./composite-cToRjaCy.js";import"./index-B06OZyEr.js";import"./index-C09389ae.js";import"./index-CaAK8RE7.js";import"./useEventCallback-BxVQKK6u.js";import"./SkeletonBar-DKCIreol.js";import"./LoadingCell-LB1z4xG-.js";import"./ColumnConfigDialog-BnTBp42F.js";import"./DraggableList-B77NFbTe.js";import"./search-DEkxxSSE.js";import"./Input-C7jKYdT3.js";import"./useControlled-w4bpKx_N.js";import"./Button-B2MqrRbr.js";import"./small-cross-C1-2zuyF.js";import"./ActionButton-Z_LMZ47a.js";import"./Checkbox-DwDZuJ7K.js";import"./useValueChanged-BO1qKB30.js";import"./CollapsiblePanel-BGWSCfkH.js";import"./MultiColumnSortDialog-MZcHdsU0.js";import"./MenuTrigger-CN7QcYrc.js";import"./CompositeItem-BB1LLivk.js";import"./ToolbarRootContext-CZOvTlyr.js";import"./getDisabledMountTransitionStyles-jVmoLSfS.js";import"./getPseudoElementBounds-BmjLOFWn.js";import"./chevron-down-DZ9BB8z3.js";import"./index-C5SnP7CW.js";import"./error-p3mSXq-q.js";import"./BaseCbacBanner-D8B4w9Kg.js";import"./makeExternalStore-DWMnQhkI.js";import"./Tooltip-B6hOpv8p.js";import"./PopoverPopup-D0gRA-kc.js";import"./debounce-Uz0h7tBs.js";import"./useOsdkClient-NGrFWkeq.js";import"./tick-0BTgBl0v.js";import"./DropdownField-BBxZ-1T3.js";import"./isEqual-CuHdL2kt.js";import"./withOsdkMetrics-DfgPxehB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
