import{f as p,j as e}from"./iframe-BgteeNK7.js";import{O as i}from"./object-table-DEZ1G1NL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1QQRU4G.js";import"./Table-Ceo-XjXx.js";import"./index-Dh7VeDie.js";import"./Dialog-CeeYLjv-.js";import"./cross-DvJO6axF.js";import"./svgIconContainer-DMbES6r9.js";import"./useBaseUiId-Du-nzkw5.js";import"./InternalBackdrop-dEKlbFqb.js";import"./composite-Bw2x2Ls7.js";import"./index-D7D5AllY.js";import"./index-jEkUh6V5.js";import"./index-BwP8hvLS.js";import"./useEventCallback-D18102OR.js";import"./SkeletonBar-BQ-GEFTk.js";import"./LoadingCell-j33UUAJu.js";import"./ColumnConfigDialog-CYzqvnKo.js";import"./DraggableList-M5zgoLyw.js";import"./search-DnqpkQaz.js";import"./Input-BLKefb3k.js";import"./useControlled-DtLnayup.js";import"./Button-CTMGDM5U.js";import"./small-cross-CkykJveX.js";import"./ActionButton-D8GwUeFP.js";import"./Checkbox-C46TaKtu.js";import"./useValueChanged-Dxi0cZCL.js";import"./CollapsiblePanel-BVTc-BUt.js";import"./MultiColumnSortDialog-ZRpALFdX.js";import"./MenuTrigger-gK17DS2n.js";import"./CompositeItem-DbN5tfcI.js";import"./ToolbarRootContext-D9ylwIx5.js";import"./getDisabledMountTransitionStyles-BGJEt7yH.js";import"./getPseudoElementBounds-BUgENUZ_.js";import"./chevron-down-BazaCq4r.js";import"./index--nUSuqMP.js";import"./error-CHdhKpK1.js";import"./BaseCbacBanner-CP1G2zWQ.js";import"./makeExternalStore-D3iXBhr4.js";import"./Tooltip-BI_M7upB.js";import"./PopoverPopup-BdINBgGh.js";import"./debounce-DB2j4UjQ.js";import"./useOsdkClient-CV4JlL1O.js";import"./tick-Btid1QgJ.js";import"./DropdownField-N1dBIw-4.js";import"./isEqual-Dv0rflGl.js";import"./withOsdkMetrics-BGKMncSr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
