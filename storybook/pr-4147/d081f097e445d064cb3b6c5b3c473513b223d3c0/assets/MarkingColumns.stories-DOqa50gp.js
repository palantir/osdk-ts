import{f as p,j as e}from"./iframe-DYAom9bR.js";import{O as i}from"./object-table-Dc6CFDmu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-wH_b8k-5.js";import"./Table-26gDJzq2.js";import"./index-BDzI0DMF.js";import"./Dialog-CipKDG2b.js";import"./cross-C34zCmWz.js";import"./svgIconContainer-DlXjEWqk.js";import"./useBaseUiId-CEx3sHln.js";import"./InternalBackdrop-oAf4IP9a.js";import"./composite-BeIl570u.js";import"./index-6FSLs8PI.js";import"./index-CrUWvWSh.js";import"./index-CZVh1_T-.js";import"./useEventCallback-BU8ZD1u4.js";import"./SkeletonBar-wGn5kuO-.js";import"./LoadingCell-B0xvYzrR.js";import"./ColumnConfigDialog-BKNhCeCG.js";import"./DraggableList-la_3EMaN.js";import"./search-V7G9cPkI.js";import"./Input-OPGRVn8-.js";import"./useControlled-BCisCwEt.js";import"./Button-B95fuG8U.js";import"./small-cross-04PkP_DP.js";import"./ActionButton-Bf-Y4ACZ.js";import"./Checkbox-Di9zOXok.js";import"./useValueChanged-xixZlyWk.js";import"./CollapsiblePanel-D42XvXp9.js";import"./MultiColumnSortDialog-C3q2uSOk.js";import"./MenuTrigger-USgYIamM.js";import"./CompositeItem-fVngu3j_.js";import"./ToolbarRootContext-a__5SMe8.js";import"./getDisabledMountTransitionStyles-BrF1CFns.js";import"./getPseudoElementBounds-DoxjXqlD.js";import"./chevron-down-QO6dVwDP.js";import"./index-PnC5M3uF.js";import"./error-CX6Detdp.js";import"./BaseCbacBanner-uJgtnHA4.js";import"./makeExternalStore-CS6veLxB.js";import"./Tooltip-CXruGX6E.js";import"./PopoverPopup-DKy48gOt.js";import"./debounce-BiwqmQhi.js";import"./useOsdkClient-7x4bV1DV.js";import"./tick-Be40iFM6.js";import"./DropdownField-C1ueVugc.js";import"./isEqual-xgW26ERh.js";import"./withOsdkMetrics-BPYPoSmq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
