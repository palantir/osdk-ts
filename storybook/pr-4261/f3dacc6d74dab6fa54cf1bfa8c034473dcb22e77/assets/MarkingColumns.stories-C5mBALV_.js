import{f as p,j as e}from"./iframe-Bgb2wSaw.js";import{O as i}from"./object-table-B0S9YS6J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CAyUgZKm.js";import"./Table-Dn1EHvQR.js";import"./index-Lnta--SZ.js";import"./Dialog-426aTfaL.js";import"./cross-BBwyRiM8.js";import"./svgIconContainer-DLn89RUi.js";import"./useBaseUiId-Cl3siqr8.js";import"./InternalBackdrop-PRRj70IN.js";import"./composite-BJNESzre.js";import"./index-DE8mIe1g.js";import"./index-CYHybnYf.js";import"./index-dezdEXRW.js";import"./useEventCallback-BpovZ0Ho.js";import"./SkeletonBar-CV5mZHb2.js";import"./LoadingCell-Ds62oVdJ.js";import"./ColumnConfigDialog-GH9qyALG.js";import"./DraggableList-DUD4w40C.js";import"./search-B8Q2SaYZ.js";import"./Input-CqMZoAkj.js";import"./useControlled-C5Efmt4q.js";import"./Button-ckHDf9dN.js";import"./small-cross-C_y-cV78.js";import"./ActionButton-BW0pCsIy.js";import"./Checkbox-C3tp-DrA.js";import"./useValueChanged-DciPxUCb.js";import"./CollapsiblePanel-DMdGItnd.js";import"./MultiColumnSortDialog-5vmbLhss.js";import"./MenuTrigger-PXVedLgF.js";import"./CompositeItem-D-n20gZA.js";import"./ToolbarRootContext-CPL7CHly.js";import"./getDisabledMountTransitionStyles-DQt5A1ew.js";import"./getPseudoElementBounds-BIQliNTO.js";import"./chevron-down-Lx8JbYiI.js";import"./index-D1daQUXJ.js";import"./error-4j4VkswI.js";import"./BaseCbacBanner-BUjt2BWO.js";import"./makeExternalStore-C86iDpxn.js";import"./Tooltip-LmdpxSyk.js";import"./PopoverPopup-CB4Z_i75.js";import"./debounce-BEqEgf8r.js";import"./useOsdkClient-jOrP_Hjl.js";import"./tick-BdYlxEi1.js";import"./DropdownField-CkS9IXqj.js";import"./isEqual-i8n36zat.js";import"./withOsdkMetrics-D_vYT_n9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
