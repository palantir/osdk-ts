import{f as p,j as e}from"./iframe-Y7AblKoo.js";import{O as i}from"./object-table-BTivezdX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CK7oVkVW.js";import"./Table-B6ebySOQ.js";import"./index-D2h1-o7T.js";import"./Dialog-B4i6LldK.js";import"./cross-EOw4MIdf.js";import"./svgIconContainer-DrxH4qgx.js";import"./useBaseUiId-BuabQztq.js";import"./InternalBackdrop-H9HqFIS2.js";import"./composite-DhLfKT7-.js";import"./index-BVzBDJE3.js";import"./index-CAOvocee.js";import"./index-BH7XzZTW.js";import"./useEventCallback-DWticQIx.js";import"./SkeletonBar-RBq0mpfB.js";import"./LoadingCell-DgRp_Wka.js";import"./ColumnConfigDialog-C6nAn6NS.js";import"./DraggableList-CoNVEYuB.js";import"./search-DtmxDMt7.js";import"./Input-CJLZHe4E.js";import"./useControlled-kT-I11in.js";import"./Button-DCccMYap.js";import"./small-cross-tPJDy73P.js";import"./ActionButton-Bt0BBh48.js";import"./Checkbox-CdP8MlRw.js";import"./useValueChanged-DqMWnrli.js";import"./CollapsiblePanel-DN3ZprZ0.js";import"./MultiColumnSortDialog-C5wBEcVl.js";import"./MenuTrigger-DY79qoZy.js";import"./CompositeItem-DBKT_2ic.js";import"./ToolbarRootContext-Dcch5f3c.js";import"./getDisabledMountTransitionStyles-DHnmC01T.js";import"./getPseudoElementBounds-7Teyr0Nw.js";import"./chevron-down-CwpvKa_6.js";import"./index-buXngsZU.js";import"./error-G0IfSF5E.js";import"./BaseCbacBanner-CPCPnZC6.js";import"./makeExternalStore-CPSblPES.js";import"./Tooltip-DcDIeYDv.js";import"./isObject-DheuFrAG.js";import"./debounce-Isp2HaEB.js";import"./useOsdkClient-Dq_ItsJG.js";import"./tick-HfDmvRCv.js";import"./DropdownField-BMfgbVSv.js";import"./isEqual-Cooqb3we.js";import"./_baseIsEqual-8yhurgMZ.js";import"./withOsdkMetrics-DpuFL858.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
