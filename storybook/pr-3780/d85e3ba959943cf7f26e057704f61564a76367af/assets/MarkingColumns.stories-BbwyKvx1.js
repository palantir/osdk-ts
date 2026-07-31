import{f as p,j as e}from"./iframe-nm7eIgX9.js";import{O as i}from"./object-table-B6mNHRMH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xnNK-q7j.js";import"./Table-yFRUIBYc.js";import"./index-CL6V_FJD.js";import"./Dialog-D1YDlBya.js";import"./cross-CH8L4sxq.js";import"./svgIconContainer-C62k5sq7.js";import"./useBaseUiId-DBJaT0Wa.js";import"./InternalBackdrop-7d0XW0Cg.js";import"./composite-ClirUg7p.js";import"./index-ClI1wKdU.js";import"./index-C9RhWig-.js";import"./index-D7PRq_DM.js";import"./useEventCallback-BgBKpXww.js";import"./SkeletonBar-fq6nNB61.js";import"./LoadingCell-DvFlUa2I.js";import"./ColumnConfigDialog-Cue7xcis.js";import"./DraggableList-DqOpTakn.js";import"./search-CLOlj8c_.js";import"./Input-cZWR-4H8.js";import"./useControlled-BGjTzEiM.js";import"./isEqual-e9TZvkud.js";import"./isObject-D2gBWA7W.js";import"./Button-BEdWrE0m.js";import"./ActionButton-YFxN7Dhh.js";import"./Checkbox-DrR4uRxm.js";import"./useValueChanged-BWtlsxVl.js";import"./CollapsiblePanel-DnkSQ8qM.js";import"./MultiColumnSortDialog-qA4xo1Ms.js";import"./MenuTrigger-x3aXd9J2.js";import"./CompositeItem-yDyDoF89.js";import"./ToolbarRootContext-7ilHDKSN.js";import"./getDisabledMountTransitionStyles-Cps7_QV-.js";import"./getPseudoElementBounds-er0igS0G.js";import"./chevron-down-CWzDP1O4.js";import"./index-CHK_BJAR.js";import"./error-BXtnxwmG.js";import"./BaseCbacBanner-C8IkGo1W.js";import"./makeExternalStore-Cl341ALS.js";import"./Tooltip-DuL7FNde.js";import"./PopoverPopup-DPv6nHd9.js";import"./toNumber-DaDCBP4c.js";import"./useOsdkClient-B4QMJphH.js";import"./tick-6fv99-OX.js";import"./DropdownField-B_uTfwAo.js";import"./withOsdkMetrics-NfqQgt5n.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
