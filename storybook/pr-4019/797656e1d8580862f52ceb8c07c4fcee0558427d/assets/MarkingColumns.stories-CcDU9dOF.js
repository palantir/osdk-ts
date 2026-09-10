import{f as p,j as e}from"./iframe-CI-n1SDT.js";import{O as i}from"./object-table-DRpU5_9A.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Mdgc8Ktj.js";import"./Table-Cvtx98HI.js";import"./index-DS4RSAQC.js";import"./Dialog-CpGVPRTu.js";import"./cross-CG9JNs7m.js";import"./svgIconContainer-C5J3XXoW.js";import"./useBaseUiId-D17iYZZP.js";import"./InternalBackdrop-CwiCBdb3.js";import"./composite-BKY77e-J.js";import"./index-BCo1buGM.js";import"./index-CgpiMQTM.js";import"./index-ap0UOzMs.js";import"./useEventCallback-DRfi-_TS.js";import"./SkeletonBar-ClCYHDwh.js";import"./LoadingCell-CZ1WtYGd.js";import"./ColumnConfigDialog-ChDOmYKl.js";import"./DraggableList-Dsm2hTH5.js";import"./search-BJLPlObb.js";import"./Input-CU7LnIit.js";import"./useControlled-DqjHOya_.js";import"./Button-BU0hCYOg.js";import"./small-cross-DHjfMPnD.js";import"./ActionButton-CEbPtw0Y.js";import"./Checkbox-B_-OJpAe.js";import"./useValueChanged-C_2Ifi7m.js";import"./CollapsiblePanel-ChN3dRbg.js";import"./MultiColumnSortDialog-Cbm_p0DI.js";import"./MenuTrigger-D4mel33g.js";import"./CompositeItem-OcKtL5Oh.js";import"./ToolbarRootContext-3jcFlcdQ.js";import"./getDisabledMountTransitionStyles-smLfI-jR.js";import"./getPseudoElementBounds-CG3xD5lD.js";import"./chevron-down-BMoNsHmj.js";import"./index-Bh2eKMSj.js";import"./error-BExaNGVy.js";import"./BaseCbacBanner-qIi9rFzM.js";import"./makeExternalStore-Dfr5mI6y.js";import"./Tooltip-c4HEDOZ7.js";import"./PopoverPopup-CVmvu6W-.js";import"./debounce-C6Db4ohX.js";import"./useOsdkClient-Cy_JiOUl.js";import"./tick-DU5k7Rwc.js";import"./DropdownField-CUeqsysl.js";import"./isEqual-DwJvLym-.js";import"./withOsdkMetrics-aN9WoVVm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
