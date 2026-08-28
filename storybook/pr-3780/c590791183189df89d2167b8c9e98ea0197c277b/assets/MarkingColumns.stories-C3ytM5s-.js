import{f as p,j as e}from"./iframe-BZATJdBl.js";import{O as i}from"./object-table--pr_SZMY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BVfEAMh5.js";import"./Table-BSYnIaMJ.js";import"./index-BeDf9ptc.js";import"./Dialog-FZKelXwe.js";import"./cross-nok40gDW.js";import"./svgIconContainer-NoIJiYrj.js";import"./useBaseUiId-Z8K4HKfz.js";import"./InternalBackdrop-CYBXQb2P.js";import"./composite-P4bAAMDx.js";import"./index-XwTUwDpB.js";import"./index-CoEA7CVQ.js";import"./index-C59TsRZT.js";import"./useEventCallback-CUrsDJxK.js";import"./SkeletonBar-9B_vAWDx.js";import"./LoadingCell-DuUkJxz0.js";import"./ColumnConfigDialog-D6vMbmg7.js";import"./DraggableList-COPo4Mt-.js";import"./search-BVSZkFup.js";import"./Input-DEFEDUlG.js";import"./useControlled-CxH-Pm8q.js";import"./Button-NS3-hSgq.js";import"./small-cross-BXlzLQWB.js";import"./ActionButton-l5xHGsjV.js";import"./Checkbox-CTpOLrND.js";import"./useValueChanged-7MvwWlc1.js";import"./CollapsiblePanel-mfZGtD1p.js";import"./MultiColumnSortDialog-BbQi3aFj.js";import"./MenuTrigger-DK5e9JTM.js";import"./CompositeItem-CaX5c1ho.js";import"./ToolbarRootContext-CQ2TQyf5.js";import"./getDisabledMountTransitionStyles-DuQrfMvW.js";import"./getPseudoElementBounds-CtjWpK6C.js";import"./chevron-down-CrGAJBeU.js";import"./index-CmoMq8YN.js";import"./error-p84hxrGR.js";import"./BaseCbacBanner-DVjXQZ88.js";import"./makeExternalStore-DwSzgSOC.js";import"./Tooltip-BjgP057t.js";import"./PopoverPopup-CEXobH7N.js";import"./debounce-DDZCEkLF.js";import"./useOsdkClient-CGBvXPC0.js";import"./tick-B46Qzoeg.js";import"./DropdownField-DH9_Dn7d.js";import"./isEqual-DDkLnefP.js";import"./withOsdkMetrics-DkVKm51c.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
