import{f as p,j as e}from"./iframe-DzKgN3qu.js";import{O as i}from"./object-table-CtK_8iNA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bq44pRuA.js";import"./Table-Dq_QyDjJ.js";import"./index-BdOs7mw_.js";import"./Dialog-BhJBc9hc.js";import"./cross-qDkjCQ52.js";import"./svgIconContainer-XLXcJGX1.js";import"./useBaseUiId-Dv29B-pr.js";import"./InternalBackdrop-DTv9GrXy.js";import"./composite-CC7knVWa.js";import"./index-Gldmiip-.js";import"./index-C67GGcUR.js";import"./index-D_SumSez.js";import"./useEventCallback-99uro0ic.js";import"./SkeletonBar-Dfz2-rCc.js";import"./LoadingCell-DeR0iF42.js";import"./ColumnConfigDialog-DEMeT5_5.js";import"./DraggableList-jDIz54JI.js";import"./search-C4jktGRC.js";import"./Input-CzkZobpW.js";import"./useControlled-DrMtPDwW.js";import"./Button-M7h6gJdh.js";import"./small-cross-Bmj1XADt.js";import"./ActionButton-CBtqi0Iz.js";import"./Checkbox-CH2QnWUk.js";import"./useValueChanged-D1zVaC1g.js";import"./CollapsiblePanel-kVIjS7dE.js";import"./MultiColumnSortDialog-Ca2fIzUt.js";import"./MenuTrigger-CwWJZA0k.js";import"./CompositeItem-yqIim0nf.js";import"./ToolbarRootContext-CCsiwlz9.js";import"./getDisabledMountTransitionStyles-D5tdzTrF.js";import"./getPseudoElementBounds-C962SI_-.js";import"./chevron-down-vPjMV4aO.js";import"./index-DZ2KvGi_.js";import"./error-T16LD8HE.js";import"./BaseCbacBanner-zK1R8vcJ.js";import"./makeExternalStore-DmfOAvnN.js";import"./Tooltip-CA-Q7zym.js";import"./PopoverPopup-DvBaLRqn.js";import"./debounce-CygZGtiO.js";import"./useOsdkClient-DtuTQNsD.js";import"./tick-BFOPMsDc.js";import"./DropdownField-Dgeq7PS2.js";import"./isEqual-CVocfjt0.js";import"./withOsdkMetrics-CgGyBohZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
