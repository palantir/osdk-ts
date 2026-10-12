import{f as p,j as e}from"./iframe-DmE1XkBG.js";import{O as i}from"./object-table-BBDX0JK-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CXlVQXKb.js";import"./Table-3USI4T48.js";import"./index-kStVVneq.js";import"./Dialog-U7sno35Q.js";import"./cross-DJt4HA-N.js";import"./svgIconContainer-BYLHbmus.js";import"./useBaseUiId-BBFoTCwh.js";import"./InternalBackdrop-CiHjM1hr.js";import"./composite-Dj1kIl2K.js";import"./index-ks1cIWqU.js";import"./index-DXBXi0eZ.js";import"./index-BSV59ZpO.js";import"./useEventCallback-vgEMvYMu.js";import"./SkeletonBar-CEiG_Olh.js";import"./LoadingCell-DDr20pG6.js";import"./ColumnConfigDialog-Ce0P5zkg.js";import"./DraggableList-IbXSuFDv.js";import"./search-DLAneuKN.js";import"./Input-BwNWBTCC.js";import"./useControlled-Ceu9BId1.js";import"./Button-CjFhiXn4.js";import"./small-cross-CdTrWr6f.js";import"./ActionButton-D7gNEyrg.js";import"./Checkbox-BS40cc6q.js";import"./useValueChanged-CEMHgm4B.js";import"./CollapsiblePanel-F_JsFxPB.js";import"./MultiColumnSortDialog-DljV5krj.js";import"./MenuTrigger-_nCOMuwK.js";import"./CompositeItem-C3J_zDNM.js";import"./ToolbarRootContext-CmqDJjBa.js";import"./getDisabledMountTransitionStyles-C0PIglyQ.js";import"./getPseudoElementBounds-BdUsSKfU.js";import"./chevron-down-Dg6DJkU-.js";import"./index-BVlwO6Du.js";import"./error-B3TY1Brr.js";import"./BaseCbacBanner-7AxfkGHq.js";import"./makeExternalStore-C84QYiDy.js";import"./Tooltip-Bn2W5oJX.js";import"./PopoverPopup-D4DXdieW.js";import"./debounce-DVfO0w3J.js";import"./useOsdkClient-COMtbyLT.js";import"./tick-BV927XEn.js";import"./DropdownField-DYMCaG07.js";import"./isEqual-WGLF_XWC.js";import"./withOsdkMetrics-DXKPSTbY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
