import{f as p,j as e}from"./iframe-CI9rENOr.js";import{O as i}from"./object-table-CAxgCc-0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C65H2kRp.js";import"./Table-EHNGcZrz.js";import"./index-BaGMdRan.js";import"./Dialog-Ce3Y_ozd.js";import"./cross-DbBPFO7V.js";import"./svgIconContainer-BcUTFG9y.js";import"./useBaseUiId-sOlDVMc5.js";import"./InternalBackdrop-BeCVxxfg.js";import"./composite-DmfEV9z-.js";import"./index-DgVrz3v8.js";import"./index-2mtmcLVe.js";import"./index-B9k7nzsO.js";import"./useEventCallback-DONfxHkp.js";import"./SkeletonBar-DyVv9MEu.js";import"./LoadingCell-Dq1hVZcx.js";import"./ColumnConfigDialog-C7Ca5yIB.js";import"./DraggableList-BMHfoMK5.js";import"./search-C3IyHFqm.js";import"./Input-DVQjs6N1.js";import"./useControlled-Cem_rLXf.js";import"./Button-DhFEEkGk.js";import"./small-cross-CAdXuenP.js";import"./ActionButton-sBlmA4ya.js";import"./Checkbox-BiUdICo7.js";import"./useValueChanged-B6kyVGgr.js";import"./CollapsiblePanel-C5gNOdt3.js";import"./MultiColumnSortDialog-CrNi1rXh.js";import"./MenuTrigger-BvjuuXCg.js";import"./CompositeItem-C1H6xqvv.js";import"./ToolbarRootContext-ZE_LxgeM.js";import"./getDisabledMountTransitionStyles-DLh69aYy.js";import"./getPseudoElementBounds-Coe-9CHL.js";import"./chevron-down-CcfRnQgG.js";import"./index-C7fkS1TJ.js";import"./error-DGU8szJe.js";import"./BaseCbacBanner-CAd-xBRe.js";import"./makeExternalStore-BWkGDDsC.js";import"./Tooltip-BRvvJEEZ.js";import"./PopoverPopup-CdXPv9sE.js";import"./debounce-r7EOKfq-.js";import"./useOsdkClient-D_P69Zxs.js";import"./tick-DYP7mVbi.js";import"./DropdownField-BtgmtoFd.js";import"./isEqual-Cy550gAP.js";import"./withOsdkMetrics-DCX_NY4O.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
