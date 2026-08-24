import{f as p,j as e}from"./iframe-DOCCiOHb.js";import{O as i}from"./object-table-B0uLTA8o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEzHRj9g.js";import"./Table-J8qOn0Hc.js";import"./index-DFEU0Jwo.js";import"./Dialog-BhmkZryF.js";import"./cross-CovJ-Ed5.js";import"./svgIconContainer-YIAf9TsP.js";import"./useBaseUiId-CmMkAyyf.js";import"./InternalBackdrop-Q7qmqEtO.js";import"./composite-BMmhh7vl.js";import"./index-N99qDbDS.js";import"./index-Bzy6XCyL.js";import"./index-CXkfJFVw.js";import"./useEventCallback-BzaGM4MH.js";import"./SkeletonBar-BhSZuKxj.js";import"./LoadingCell-CdVpnYtm.js";import"./ColumnConfigDialog-BB4El2Oj.js";import"./DraggableList-C327NS2l.js";import"./search-jcgG9auT.js";import"./Input-DWi-pbfP.js";import"./useControlled-BoZB2Z05.js";import"./Button-hwj6n_zT.js";import"./small-cross-7N7OEMcX.js";import"./ActionButton-B_DrTRR5.js";import"./Checkbox-D7RN9NDz.js";import"./useValueChanged-CW1n9jex.js";import"./CollapsiblePanel-BwQQQfcz.js";import"./MultiColumnSortDialog-lHb0H5EV.js";import"./MenuTrigger-jNL57hY0.js";import"./CompositeItem-CJrNoZr7.js";import"./ToolbarRootContext-P0D27WeH.js";import"./getDisabledMountTransitionStyles-BrQ12pz7.js";import"./getPseudoElementBounds-C34O99e7.js";import"./chevron-down-mVjqXGxr.js";import"./index-B_3m-f6U.js";import"./error-i9ATQSBy.js";import"./BaseCbacBanner-B_wA-DIw.js";import"./makeExternalStore-BqzO6RPd.js";import"./Tooltip-CNQ2W6HW.js";import"./PopoverPopup-D-Z3Cy_4.js";import"./debounce-CFnyKU3r.js";import"./useOsdkClient-B5sy_4Oo.js";import"./tick-Dn82gyrG.js";import"./DropdownField-rPN4VZoE.js";import"./isEqual-CGrVjf68.js";import"./withOsdkMetrics-DDYX4AYy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
