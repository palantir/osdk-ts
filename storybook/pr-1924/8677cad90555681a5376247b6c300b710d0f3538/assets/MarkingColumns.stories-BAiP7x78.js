import{f as p,j as e}from"./iframe-CQyGqSJ2.js";import{O as i}from"./object-table-BWxi0zmX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ClClUiX7.js";import"./Table-Yn2naZit.js";import"./index-CTpVcWtj.js";import"./Dialog-CnwYTvBT.js";import"./cross-BWGdF31s.js";import"./svgIconContainer-Bbpye-X7.js";import"./useBaseUiId-B26AdHtG.js";import"./InternalBackdrop-DmLp5Gl4.js";import"./composite-C5TUu6hJ.js";import"./index-BW6-nEus.js";import"./index-D1lXuc4_.js";import"./index-B3kybnc3.js";import"./useEventCallback-CqxfjtdI.js";import"./SkeletonBar-B2QyIJUx.js";import"./LoadingCell-dQ7R5Hpj.js";import"./ColumnConfigDialog-BwS2PpVu.js";import"./DraggableList-f4GxRlGj.js";import"./search-x6pHaO-A.js";import"./Input-CCQVhRPw.js";import"./useControlled-B7OjwH49.js";import"./Button-BVydS5Yy.js";import"./small-cross-nxex0ZkC.js";import"./ActionButton-kDaP1zFI.js";import"./Checkbox-CKrVqXvH.js";import"./useValueChanged-DK0qo_26.js";import"./CollapsiblePanel-BSMYMTBM.js";import"./MultiColumnSortDialog-B18EqFte.js";import"./MenuTrigger-BPYWGQ03.js";import"./CompositeItem-BYWBWUfU.js";import"./ToolbarRootContext-C3_9j6Sh.js";import"./getDisabledMountTransitionStyles-3Vc1pogz.js";import"./getPseudoElementBounds-Cj_uTRK0.js";import"./chevron-down-C10qSii-.js";import"./index-BgtiYt9F.js";import"./error-DJLHZkng.js";import"./BaseCbacBanner-BRSfR0vr.js";import"./makeExternalStore-D5YfmHD0.js";import"./Tooltip-D0ez9myK.js";import"./PopoverPopup-8yoX8IlU.js";import"./debounce-BUg8UsLy.js";import"./useOsdkClient-DCaJw-IL.js";import"./tick-MOe4HZvJ.js";import"./DropdownField-CqsPWfQt.js";import"./isEqual-BmJmFeHQ.js";import"./withOsdkMetrics-LQabL3nD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
