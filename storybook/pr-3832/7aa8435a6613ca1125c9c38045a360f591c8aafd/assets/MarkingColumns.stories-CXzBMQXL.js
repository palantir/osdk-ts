import{f as p,j as e}from"./iframe-BxC0rnVf.js";import{O as i}from"./object-table-BtjJwEQU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CsqKNXT4.js";import"./Table-Cm_ZXCAG.js";import"./index-CB930e5x.js";import"./Dialog-CrdwlqVW.js";import"./cross-BpFLUEKb.js";import"./svgIconContainer-BuuNAr0U.js";import"./useBaseUiId-BRpjjaal.js";import"./InternalBackdrop-PILmt-GV.js";import"./composite-sAiFlK1Y.js";import"./index-Bdkgurn2.js";import"./index-FGHPo6lI.js";import"./index-D-NcnYmU.js";import"./useEventCallback-mLxVut11.js";import"./SkeletonBar-Bv-CCVUB.js";import"./LoadingCell-BKIjSPo4.js";import"./ColumnConfigDialog-CZ1m7UHv.js";import"./DraggableList-zdckpiAS.js";import"./search-BeNbtvpq.js";import"./Input-BynHcsMQ.js";import"./useControlled-DC01SbDU.js";import"./isEqual-lrapgCCQ.js";import"./isObject-ClysUrYf.js";import"./Button-BNu5fBU0.js";import"./ActionButton-Dd3qspII.js";import"./Checkbox-CbvmOXOW.js";import"./useValueChanged-hoJa7UO_.js";import"./CollapsiblePanel-BNDP3zSw.js";import"./MultiColumnSortDialog-DefXQB-g.js";import"./MenuTrigger-CRpAfNkz.js";import"./CompositeItem-DAic8xZX.js";import"./ToolbarRootContext-CX0irP5X.js";import"./getDisabledMountTransitionStyles-D4oIwPK9.js";import"./getPseudoElementBounds-DSBZWeu7.js";import"./chevron-down-BU_rocIF.js";import"./index-UDAhzYMP.js";import"./error-CKn6N_jF.js";import"./BaseCbacBanner-CtX7U5Ls.js";import"./makeExternalStore-DurDWx8y.js";import"./Tooltip-paEHixY4.js";import"./PopoverPopup-CfOUkERU.js";import"./toNumber-CqWtRKov.js";import"./useOsdkClient-DcDbgTWT.js";import"./tick-DFNHUkMm.js";import"./DropdownField-DIx8k6z5.js";import"./withOsdkMetrics-CS2XIluR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
