import{f as p,j as e}from"./iframe-DfRsO-W_.js";import{O as i}from"./object-table-CP9JoLqJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1nnBqyx.js";import"./Table-x1N0vMog.js";import"./index-CQkS0c9h.js";import"./Dialog-CQuuouNU.js";import"./cross-CBNkzS8W.js";import"./svgIconContainer-DgyEbBbg.js";import"./useBaseUiId-t6nqxOAa.js";import"./InternalBackdrop-DexqjegU.js";import"./composite-BNASiMUs.js";import"./index-0fIzBmZ6.js";import"./index-COUiLxiP.js";import"./index-DAMwa_zH.js";import"./useEventCallback-B9H6hou4.js";import"./SkeletonBar-C4TEZaxd.js";import"./LoadingCell-jyJlJ8rZ.js";import"./ColumnConfigDialog-DuyPqMVs.js";import"./DraggableList-da0sxfAo.js";import"./search-DnesuR3u.js";import"./Input-BeFyt6Zg.js";import"./useControlled-DwMJ2aka.js";import"./Button-PGajkELE.js";import"./small-cross-BD6x5MXv.js";import"./ActionButton-DjurcGej.js";import"./Checkbox-L7hCldyi.js";import"./useValueChanged-CQ6Yx7cq.js";import"./CollapsiblePanel-DUX-GqzR.js";import"./MultiColumnSortDialog-fqDZVUuC.js";import"./MenuTrigger-DdmOX4vv.js";import"./CompositeItem-C6hDdpH4.js";import"./ToolbarRootContext-BRXAevlR.js";import"./getDisabledMountTransitionStyles-B2AXI69J.js";import"./getPseudoElementBounds-Ck1GK_Vt.js";import"./chevron-down-Cdf065g5.js";import"./index-DkHZL3b5.js";import"./error-3c9XVh4b.js";import"./BaseCbacBanner-CwLmqWu7.js";import"./makeExternalStore-C23Jsp2C.js";import"./Tooltip-1SCODkG_.js";import"./PopoverPopup-De149wyZ.js";import"./debounce-BAkgb8RS.js";import"./useOsdkClient-Da6wTJ7N.js";import"./tick-CjE9NPay.js";import"./DropdownField-CgS_exM3.js";import"./isEqual-BnnGO8J7.js";import"./withOsdkMetrics-D1y4-r1W.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
