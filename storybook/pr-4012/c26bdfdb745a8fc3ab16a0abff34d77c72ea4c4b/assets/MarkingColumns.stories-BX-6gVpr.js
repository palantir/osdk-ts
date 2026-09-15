import{f as p,j as e}from"./iframe-D6uAV5TU.js";import{O as i}from"./object-table-BwnIPp8Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DgVxICfb.js";import"./Table-CRx6JA84.js";import"./index-CY-pWkIE.js";import"./Dialog-CfZC9tap.js";import"./cross-C1qbDIAe.js";import"./svgIconContainer-to51jCpQ.js";import"./useBaseUiId-Cm0jnEPf.js";import"./InternalBackdrop-NL9DIBlB.js";import"./composite-BEzxj37g.js";import"./index-bpYghXGo.js";import"./index-JG_tkU8g.js";import"./index-ByXvVmI6.js";import"./useEventCallback-DVHh9L01.js";import"./SkeletonBar-DKDnh7uJ.js";import"./LoadingCell-CDILZwUZ.js";import"./ColumnConfigDialog-CKly1pAJ.js";import"./DraggableList-siYf0BWh.js";import"./search-BkhC58qY.js";import"./Input-DgviHqP4.js";import"./useControlled-CNCN21-B.js";import"./Button-D1LcAXjL.js";import"./small-cross-BlyS8cCD.js";import"./ActionButton-Dm6zTNT-.js";import"./Checkbox-DA-cZczo.js";import"./useValueChanged-C6SY9C02.js";import"./CollapsiblePanel-DQG7EOif.js";import"./MultiColumnSortDialog-Dkd3iv5n.js";import"./MenuTrigger-oX_QBijd.js";import"./CompositeItem-BovdAW9J.js";import"./ToolbarRootContext-Cj-ulQf0.js";import"./getDisabledMountTransitionStyles-C4AOWP0V.js";import"./getPseudoElementBounds-CI3G1dnv.js";import"./chevron-down-y6Dx4H3i.js";import"./index-CF_buGa8.js";import"./error-AQL_lZl-.js";import"./BaseCbacBanner-DRF4wjkH.js";import"./makeExternalStore-DWEUTaD3.js";import"./Tooltip-BDskuAWO.js";import"./PopoverPopup-CoRD32O0.js";import"./debounce-Cf7XEzCl.js";import"./useOsdkClient-o-471cIP.js";import"./tick-CJVi8Uyj.js";import"./DropdownField-Dza8gOA9.js";import"./isEqual-N7cPq6Z7.js";import"./withOsdkMetrics-C88Xzccf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
