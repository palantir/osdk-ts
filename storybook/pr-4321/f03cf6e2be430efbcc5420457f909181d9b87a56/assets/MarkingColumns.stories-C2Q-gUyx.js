import{f as p,j as e}from"./iframe-CvOjOlaX.js";import{O as i}from"./object-table-DJxn76kw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CMIwN0Ht.js";import"./Table-DizCUzxK.js";import"./index-CrAKByIV.js";import"./Dialog-CWoS9tU-.js";import"./cross-DiBcry41.js";import"./svgIconContainer-CCgDAq3h.js";import"./useBaseUiId-2b2yWiLC.js";import"./InternalBackdrop-DV_lxe_-.js";import"./composite-DBq50y_B.js";import"./index-3CFeZz8S.js";import"./index-BfsFuLyL.js";import"./index-Dr1wgK35.js";import"./useEventCallback-C-ZadIlY.js";import"./SkeletonBar-DzLaCov9.js";import"./LoadingCell-CJ6LPRQM.js";import"./ColumnConfigDialog-Bkx7mFAh.js";import"./DraggableList-BcQmTe18.js";import"./search-C9_Jgha_.js";import"./Input-B3WzxSEN.js";import"./useControlled-Bk4S-y5O.js";import"./Button-VY6TA0Ac.js";import"./small-cross-Ckd7tyu3.js";import"./ActionButton-C7XwUYyd.js";import"./Checkbox-kXhRSsmr.js";import"./useValueChanged-Dv0LQJsd.js";import"./CollapsiblePanel-D-wmv3DK.js";import"./MultiColumnSortDialog-Bq5Tw4Li.js";import"./MenuTrigger-BXHUcTi3.js";import"./CompositeItem-CqY36BxB.js";import"./ToolbarRootContext-jTzvi3TC.js";import"./getDisabledMountTransitionStyles-DS8rYKRs.js";import"./getPseudoElementBounds-BnWyijzd.js";import"./chevron-down-DE6gjpOR.js";import"./index-hoOdhAdW.js";import"./error-BYaZivRW.js";import"./BaseCbacBanner-STYedUYE.js";import"./makeExternalStore-Bvn4jvir.js";import"./Tooltip-D2aVKWxO.js";import"./PopoverPopup-C2Gwi9qi.js";import"./debounce-BV_6a4Da.js";import"./useOsdkClient-uMKq4cOq.js";import"./tick-BMOBXLnC.js";import"./DropdownField-BRePIiwE.js";import"./isEqual-e7LVSkad.js";import"./withOsdkMetrics-BRorics0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
