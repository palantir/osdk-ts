import{f as p,j as e}from"./iframe-CzgnuvEu.js";import{O as i}from"./object-table-DZE1yhi9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BOIiyEUV.js";import"./Table-C0r4YIFX.js";import"./index-DzE9qOqD.js";import"./Dialog-C6gIzk-X.js";import"./cross-BZ8qiqH7.js";import"./svgIconContainer-CqjF4WdJ.js";import"./useBaseUiId-BVmKyOEj.js";import"./InternalBackdrop-DI2I7eRR.js";import"./composite-DYp9sm2c.js";import"./index-CK7PizA2.js";import"./index-8D7uARHg.js";import"./index-pus3Iuu0.js";import"./useEventCallback-DP5etoNb.js";import"./SkeletonBar-tfdRWGle.js";import"./LoadingCell-BVnynEjd.js";import"./ColumnConfigDialog-CyH8mLNb.js";import"./DraggableList-DqCHPyso.js";import"./search-Cwa3Up2s.js";import"./Input-ZYnWFBEZ.js";import"./useControlled-C5aZuSIZ.js";import"./Button-NdiRMwUB.js";import"./small-cross-DSTYA1K8.js";import"./ActionButton-C6BBrtRh.js";import"./Checkbox-C0KN_mwH.js";import"./useValueChanged-CqEHKFBa.js";import"./CollapsiblePanel-O0DPlNmM.js";import"./MultiColumnSortDialog-B3d2ZrNN.js";import"./MenuTrigger-CT9JPRp9.js";import"./CompositeItem-D17OeXfK.js";import"./ToolbarRootContext-DRsejA9Q.js";import"./getDisabledMountTransitionStyles-DxBJ1NRq.js";import"./getPseudoElementBounds-Dyuhd565.js";import"./chevron-down-CcjtSJSE.js";import"./index-D4tXRR6m.js";import"./error-Dn-b8Fhc.js";import"./BaseCbacBanner-COsXYVNU.js";import"./makeExternalStore-b-3Eu4Hx.js";import"./Tooltip-B2E5uvSu.js";import"./PopoverPopup-Cftbj8pR.js";import"./debounce-DvL0klkp.js";import"./useOsdkClient-BHaXbtia.js";import"./tick-DwhgM6ss.js";import"./DropdownField-Bkj49_ok.js";import"./isEqual-BuQ-7_wX.js";import"./withOsdkMetrics-4RonxvLU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
