import{f as p,j as e}from"./iframe-KFmuHpi6.js";import{O as i}from"./object-table-Ci6iHK5H.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DA3sodJk.js";import"./Table-Ctn2BHK_.js";import"./index-CBTTDR05.js";import"./Dialog-DXD3Yb-U.js";import"./cross-BxqJFApi.js";import"./svgIconContainer-D_AfyEve.js";import"./useBaseUiId-CrXnmgW5.js";import"./InternalBackdrop-CHvDuBxy.js";import"./composite-Bv5M65D9.js";import"./index-BkMhET5E.js";import"./index-Di_4vTer.js";import"./index-D41spogg.js";import"./useEventCallback-CjOHxRvH.js";import"./SkeletonBar-BMkWU_25.js";import"./LoadingCell-DhiN6Nif.js";import"./ColumnConfigDialog-CEXFOadJ.js";import"./DraggableList-BzrmwoQC.js";import"./search-Bq4-27c_.js";import"./Input-B-ppJqtJ.js";import"./useControlled-D9mNQgHG.js";import"./Button-CS75p-oM.js";import"./small-cross-D9wsbyzz.js";import"./ActionButton-NpNjrugw.js";import"./Checkbox-BTxxH2kF.js";import"./useValueChanged-YKfipK9M.js";import"./CollapsiblePanel-TR3Y0YZC.js";import"./MultiColumnSortDialog-BE5wOz1H.js";import"./MenuTrigger-BdBfvPxr.js";import"./CompositeItem-BqmVxYgk.js";import"./ToolbarRootContext-DPZQ9O-r.js";import"./getDisabledMountTransitionStyles-v24lbGuZ.js";import"./getPseudoElementBounds-CCT63s9j.js";import"./chevron-down-BDNkXUjZ.js";import"./index-tH9oz2kR.js";import"./error-BbvMlxw1.js";import"./BaseCbacBanner-CwkjYwzX.js";import"./makeExternalStore-C27aCTGI.js";import"./Tooltip-CBzWZ40Q.js";import"./PopoverPopup-oWKBQoRn.js";import"./debounce-JwfeVHKk.js";import"./useOsdkClient-jK4jvHg5.js";import"./tick-yLHvFrbb.js";import"./DropdownField-CGz7tZKd.js";import"./isEqual-BObLPwl5.js";import"./withOsdkMetrics-BaXo7wYf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
