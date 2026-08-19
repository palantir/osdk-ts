import{f as p,j as e}from"./iframe-6GPNG9Xi.js";import{O as i}from"./object-table-DWgQyALO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CL7bvEdV.js";import"./index-BLLT78dd.js";import"./Dialog-XqrTNsLI.js";import"./cross-CDqWfoJU.js";import"./svgIconContainer-BdQnszdm.js";import"./useBaseUiId-N7eZ68O9.js";import"./InternalBackdrop-CFXrjmmF.js";import"./composite-BYxN19ZW.js";import"./index-DZlFhs1y.js";import"./index-BHQMMX4F.js";import"./index-DLivmPlx.js";import"./useEventCallback-Cpzpgr_n.js";import"./SkeletonBar-DghLNx4Z.js";import"./LoadingCell-H7l3Xd-N.js";import"./ColumnConfigDialog-CugdJqDq.js";import"./DraggableList-BBaW8GD-.js";import"./search-BbrW5BKI.js";import"./Input-DQenBszh.js";import"./useControlled-DGTBEOub.js";import"./Button-vhjBY76J.js";import"./small-cross-CPEpmVAr.js";import"./ActionButton-DaCDaB0L.js";import"./Checkbox-CM1vw9Zg.js";import"./useValueChanged-DZ0NFAW9.js";import"./CollapsiblePanel-BMTWBF66.js";import"./MultiColumnSortDialog-JxflHR-S.js";import"./MenuTrigger-DWk9Woo3.js";import"./CompositeItem-BOpE1HX7.js";import"./ToolbarRootContext-qHXZhovw.js";import"./getDisabledMountTransitionStyles-B5Kb1i5L.js";import"./getPseudoElementBounds-BxPGNRwH.js";import"./chevron-down-Dnhw5Ae_.js";import"./index-DXeIJDVP.js";import"./error-DBj4FgTN.js";import"./BaseCbacBanner-C5ddbdsN.js";import"./makeExternalStore-BTPDRRuj.js";import"./Tooltip-D9qeKbHO.js";import"./PopoverPopup-BrKaTwlD.js";import"./debounce-D7aOU_II.js";import"./useOsdkClient-CFj73qoH.js";import"./tick-DY1Ho6fU.js";import"./DropdownField-DLs5QjN0.js";import"./isEqual-DF4zAEzU.js";import"./withOsdkMetrics-DeEkmlIV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
