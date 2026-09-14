import{f as p,j as e}from"./iframe-DWUqeI24.js";import{O as i}from"./object-table-BBQC_911.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CmhaJZKB.js";import"./Table-DJ-8h0Ue.js";import"./index-BTzXT2fz.js";import"./Dialog-DUPFYJmG.js";import"./cross-BB5wWstC.js";import"./svgIconContainer-CMAH9PXj.js";import"./useBaseUiId-doo5xxPr.js";import"./InternalBackdrop-CaSxUhcq.js";import"./composite-ZAPDDfKz.js";import"./index-Dx1vPjnd.js";import"./index-DMdejw5x.js";import"./index-DbIaKji_.js";import"./useEventCallback-D0l5hp3N.js";import"./SkeletonBar-qhYaU4np.js";import"./LoadingCell-CfUNbjuO.js";import"./ColumnConfigDialog-CRIZxLkc.js";import"./DraggableList-CZXLwsne.js";import"./search-D4gR5Cv7.js";import"./Input-Bgk_NfQE.js";import"./useControlled-DQPmnWCX.js";import"./Button-2G_MsyZd.js";import"./small-cross-BukaMN3V.js";import"./ActionButton-CJrSAwg7.js";import"./Checkbox-CiRepsyd.js";import"./useValueChanged-DZKLN3ln.js";import"./CollapsiblePanel-Bovk3gQ8.js";import"./MultiColumnSortDialog-DlEeC5so.js";import"./MenuTrigger-Cjqb2Zcx.js";import"./CompositeItem-Dli-qKbZ.js";import"./ToolbarRootContext-CY7Utxgx.js";import"./getDisabledMountTransitionStyles-CS1MQ6DV.js";import"./getPseudoElementBounds-CMWVvTL2.js";import"./chevron-down-B3eOykDC.js";import"./index-yBL9LV9H.js";import"./error-Zui98JXp.js";import"./BaseCbacBanner-Dc9_JOJQ.js";import"./makeExternalStore-rBHUiwcS.js";import"./Tooltip-CreZ18hV.js";import"./PopoverPopup-6iL55eGG.js";import"./debounce-D8IMDa7u.js";import"./useOsdkClient-CwrvHIMC.js";import"./tick-kx78m2XG.js";import"./DropdownField-BdJgqSaf.js";import"./isEqual-CPmXXs5q.js";import"./withOsdkMetrics-cXHP5nhH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
