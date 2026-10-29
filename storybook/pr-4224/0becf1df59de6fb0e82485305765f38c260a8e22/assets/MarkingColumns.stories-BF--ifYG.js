import{f as p,j as e}from"./iframe-civNld3i.js";import{O as i}from"./object-table-BkNygl9T.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGob3pd3.js";import"./Table-D3QmnDSd.js";import"./index-Bkk9aIG7.js";import"./Dialog-Veq-I3ha.js";import"./cross-Bl6bAFo8.js";import"./svgIconContainer-Cbt7mtvH.js";import"./useBaseUiId-DfebwqrC.js";import"./InternalBackdrop-BDeg4tmF.js";import"./composite-C8tN05lQ.js";import"./index-BcfoxrgG.js";import"./index-C2RAlQU3.js";import"./index-BU14isbu.js";import"./useEventCallback-BbngQcPL.js";import"./SkeletonBar-ePOHNcXa.js";import"./LoadingCell-DBRxFXJW.js";import"./ColumnConfigDialog-B23L06qv.js";import"./DraggableList-Byy1kqEA.js";import"./search-ulrdH098.js";import"./Input-CzHf5EpN.js";import"./useControlled-DSRlTv1D.js";import"./Button-_66b78aL.js";import"./small-cross-DpA5lC9j.js";import"./ActionButton-D27VwrOt.js";import"./Checkbox-ONjswOP3.js";import"./useValueChanged-BjzJCsWw.js";import"./CollapsiblePanel--7f6zkon.js";import"./MultiColumnSortDialog-DB-aGVTk.js";import"./MenuTrigger-DsBkVnjM.js";import"./CompositeItem-CyFsxOTP.js";import"./ToolbarRootContext-CpIc7UTm.js";import"./getDisabledMountTransitionStyles-CoXeXbxe.js";import"./getPseudoElementBounds-BeYCQidE.js";import"./chevron-down-Cc8MdjVP.js";import"./index-Bz_nIjTo.js";import"./error-9MfXm3EE.js";import"./BaseCbacBanner-RPuZIvbI.js";import"./makeExternalStore-2tdSo-BF.js";import"./Tooltip-BBz15K44.js";import"./PopoverPopup-mFug3adh.js";import"./debounce-_kg4QHxF.js";import"./useOsdkClient-CDLe6B2D.js";import"./tick-wP3FdKpg.js";import"./DropdownField-C-J6dPze.js";import"./isEqual-CzH2I0wQ.js";import"./withOsdkMetrics-VkQ2PjHN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
