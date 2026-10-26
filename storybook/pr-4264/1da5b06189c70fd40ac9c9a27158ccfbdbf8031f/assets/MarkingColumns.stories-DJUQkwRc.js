import{f as p,j as e}from"./iframe-BX9a9lIA.js";import{O as i}from"./object-table-C9_bf-JA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BlXb_Vg9.js";import"./Table-DoTBy3cy.js";import"./index-DU3Z-NO3.js";import"./Dialog-BHtEZgzi.js";import"./cross-DuBsq8tA.js";import"./svgIconContainer-UHOj5M6P.js";import"./useBaseUiId-rZTTYrCD.js";import"./InternalBackdrop-D0pdeOz1.js";import"./composite-BZsQ_ZE_.js";import"./index-Xkcqocgf.js";import"./index-Cmn1GPS_.js";import"./index-BGOtK9pW.js";import"./useEventCallback-BewJa_r1.js";import"./SkeletonBar-CvROekkE.js";import"./LoadingCell-CCxJlqw1.js";import"./ColumnConfigDialog-e0j7wZ87.js";import"./DraggableList-B6Z0nOYU.js";import"./search-D5VPbQqk.js";import"./Input-R8AltOJ3.js";import"./useControlled-D1C6STzO.js";import"./Button-nhugV28E.js";import"./small-cross-CEZM1_xp.js";import"./ActionButton-FmCiWWCn.js";import"./Checkbox-D8zEtcjh.js";import"./useValueChanged-jvisKX1J.js";import"./CollapsiblePanel-CKvjIGAx.js";import"./MultiColumnSortDialog-DvmjnIY_.js";import"./MenuTrigger-DyrwgVGJ.js";import"./CompositeItem-h-F_V8Zb.js";import"./ToolbarRootContext-CfpoMHoy.js";import"./getDisabledMountTransitionStyles-GzpTE14B.js";import"./getPseudoElementBounds-DTY5_p4Y.js";import"./chevron-down-Baa_eZBL.js";import"./index-CGQ8sj2I.js";import"./error-BEhn7utC.js";import"./BaseCbacBanner-D1vQrPhP.js";import"./makeExternalStore-BYhN6o4S.js";import"./Tooltip-DIBDL7CT.js";import"./PopoverPopup-B82LsnQc.js";import"./debounce-BV21oJOA.js";import"./useOsdkClient-Bh-oR6BU.js";import"./tick-BulTBCV9.js";import"./DropdownField-aWbBYl77.js";import"./isEqual-BvwvV_z2.js";import"./withOsdkMetrics-C7fLYswC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
