import{f as p,j as e}from"./iframe-DaG_CcyR.js";import{O as i}from"./object-table-CAwIAc9q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fLmgAqZC.js";import"./Table-D_3f6Cnq.js";import"./index-C2NmqeV8.js";import"./Dialog-Cr9cP_TA.js";import"./cross-CBdyBq1j.js";import"./svgIconContainer-DJ0pmdAm.js";import"./useBaseUiId-BfCzIxwR.js";import"./InternalBackdrop-Xfh57IbA.js";import"./composite-DNA29nNr.js";import"./index-BC4OQi8j.js";import"./index-BRmwEG4U.js";import"./index-DTO5Sk8o.js";import"./useEventCallback-DbVVChUJ.js";import"./SkeletonBar-Bde_r25-.js";import"./LoadingCell-Bk_9YcjT.js";import"./ColumnConfigDialog-D43GInSE.js";import"./DraggableList-97mhnMvH.js";import"./search-C70hm_cR.js";import"./Input-B0e0EOXI.js";import"./useControlled-CiDIFyuy.js";import"./Button-BJNxKAu7.js";import"./small-cross-C40mmEcZ.js";import"./ActionButton-ColeB5wb.js";import"./Checkbox-CxZvxvMQ.js";import"./useValueChanged-CemEV-be.js";import"./CollapsiblePanel-BYNa9rT6.js";import"./MultiColumnSortDialog-D9X6OCW7.js";import"./MenuTrigger-Z1aY7CnD.js";import"./CompositeItem-BBL8fhGk.js";import"./ToolbarRootContext-D3JANhpq.js";import"./getDisabledMountTransitionStyles-BMXryHBN.js";import"./getPseudoElementBounds-BPw6WX_a.js";import"./chevron-down-D4cFhIOL.js";import"./index-DZsXV9bE.js";import"./error-Cof-i4TZ.js";import"./BaseCbacBanner-B0FW0Tpc.js";import"./makeExternalStore-BWD8JKLV.js";import"./Tooltip-zVk-Ezfu.js";import"./PopoverPopup-DeS6RrmG.js";import"./debounce-DfSAoJ4z.js";import"./useOsdkClient-CcDhxIX1.js";import"./tick-XdOXkQOZ.js";import"./DropdownField-D9Cmijub.js";import"./isEqual-DANNBGVZ.js";import"./withOsdkMetrics-CplHDg7O.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
