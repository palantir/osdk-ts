import{f as p,j as e}from"./iframe-BPW75i9n.js";import{O as i}from"./object-table-B0ScVXu7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-a9fOHNzQ.js";import"./Table-DfjLiupT.js";import"./index-CvyyfkHF.js";import"./Dialog-mut58aOg.js";import"./cross-pajyLa9G.js";import"./svgIconContainer-Dn5PDua5.js";import"./useBaseUiId-BskbZTX7.js";import"./InternalBackdrop-DkH7cpcS.js";import"./composite-DOgbsbPD.js";import"./index-CZgk2iR4.js";import"./index-CpaVcYAE.js";import"./index-DaSb3oWd.js";import"./useEventCallback-DY5lK-td.js";import"./SkeletonBar-DDJ2BNxZ.js";import"./LoadingCell-Cv8pkMeY.js";import"./ColumnConfigDialog-BULFEt8z.js";import"./DraggableList-DMbfFhQZ.js";import"./search-CE2Gzn1t.js";import"./Input-BS3fT59v.js";import"./useControlled-DpyeG9JO.js";import"./Button-BtJ38CWb.js";import"./small-cross-CU1xwLoD.js";import"./ActionButton-DDSIjAJm.js";import"./Checkbox-BmUiXmJW.js";import"./useValueChanged-Cn93vlbX.js";import"./CollapsiblePanel-BNZ-hzTi.js";import"./MultiColumnSortDialog-D9vkQpxm.js";import"./MenuTrigger-n4-uf8sJ.js";import"./CompositeItem-CF5_8-vA.js";import"./ToolbarRootContext-DTxcajEt.js";import"./getDisabledMountTransitionStyles-78X03ELi.js";import"./getPseudoElementBounds-DTCBrtzp.js";import"./chevron-down-BSmURfPK.js";import"./index-DXJbf77F.js";import"./error-BRhZWJA2.js";import"./BaseCbacBanner-y1T2wwQ7.js";import"./makeExternalStore-DcLh29q-.js";import"./Tooltip-CvhMlFuZ.js";import"./PopoverPopup-DY0LcGcs.js";import"./debounce-DaEjldS8.js";import"./useOsdkClient-B9pJ8mJX.js";import"./tick-B92vo0mZ.js";import"./DropdownField-Doe0OcpJ.js";import"./isEqual-CaE8yrSi.js";import"./withOsdkMetrics-CPmfqFkZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
