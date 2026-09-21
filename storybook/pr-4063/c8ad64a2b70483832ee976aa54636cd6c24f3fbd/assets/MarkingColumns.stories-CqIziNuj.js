import{f as p,j as e}from"./iframe-BMrwWMZ2.js";import{O as i}from"./object-table-XEkvxBmh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DoFjuVNT.js";import"./Table-CRbvCevp.js";import"./index-B-70XFhu.js";import"./Dialog-BvuaZoDt.js";import"./cross-xNU9IbBp.js";import"./svgIconContainer-kz6kEcEQ.js";import"./useBaseUiId-CWfKm3xo.js";import"./InternalBackdrop-DBtObWvw.js";import"./composite-BaT2Rrgm.js";import"./index-CSBMmUL0.js";import"./index-p-n9-sXg.js";import"./index-BRQVA_3N.js";import"./useEventCallback-BSd1E5Q2.js";import"./SkeletonBar-C0kfolP9.js";import"./LoadingCell-BkA0PgxK.js";import"./ColumnConfigDialog-DRHnAQpP.js";import"./DraggableList-DgMFDC-A.js";import"./search-BhHSPRHE.js";import"./Input-BMTygJUG.js";import"./useControlled-D483ZYKr.js";import"./Button-WcPNJQ9X.js";import"./small-cross-BrwfsXlZ.js";import"./ActionButton-eMUnEcf2.js";import"./Checkbox-CFXTKEnV.js";import"./useValueChanged-BW2KTtVu.js";import"./CollapsiblePanel-oxSGc6n5.js";import"./MultiColumnSortDialog-BsmgrK-w.js";import"./MenuTrigger-CRUUqyTc.js";import"./CompositeItem-Cr7Wo-Nu.js";import"./ToolbarRootContext-yILvKIp4.js";import"./getDisabledMountTransitionStyles-XH-VCXpg.js";import"./getPseudoElementBounds-Bfv7yUkE.js";import"./chevron-down-Cm6BVMO0.js";import"./index-CE_tjB-k.js";import"./error-ZGBsqwOl.js";import"./BaseCbacBanner-Cf-BajoY.js";import"./makeExternalStore-CVWgtyr5.js";import"./Tooltip-DglXCpHI.js";import"./PopoverPopup-Cs8tAGg3.js";import"./debounce-CcyW07a2.js";import"./useOsdkClient-DG-loGVw.js";import"./tick-B5oTJlX2.js";import"./DropdownField-Bk7MJDj2.js";import"./isEqual-CXrRfqJW.js";import"./withOsdkMetrics-fvKzM9Fz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
