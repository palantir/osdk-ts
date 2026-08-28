import{f as p,j as e}from"./iframe-Cksi0ItS.js";import{O as i}from"./object-table-DPjrGFZw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C-I2JgY0.js";import"./index-4Cg-nFaV.js";import"./Dialog-YMFk7ys3.js";import"./cross-KCH3fUDA.js";import"./svgIconContainer-ugyIC0ZV.js";import"./useBaseUiId-CkaYEHZt.js";import"./InternalBackdrop-ByMWLH71.js";import"./composite-9gDjU4W9.js";import"./index-BLXqe3dF.js";import"./index-BGUbSh7o.js";import"./index-tKuUA6h2.js";import"./useEventCallback-C2_CRwBw.js";import"./SkeletonBar-DyOQJPdt.js";import"./LoadingCell-BaYlmIk1.js";import"./ColumnConfigDialog-C4JpXNTA.js";import"./DraggableList-CPIGyWGR.js";import"./search-CAR5_cMX.js";import"./Input-B1lOZjYh.js";import"./useControlled-DgHn0JqS.js";import"./Button-tLjrLZry.js";import"./small-cross-C4_36oX6.js";import"./ActionButton-iRTMwXlM.js";import"./Checkbox-Qi4pYDt8.js";import"./useValueChanged-hC6f2ZRi.js";import"./CollapsiblePanel-D0cMChIV.js";import"./MultiColumnSortDialog-B9s9dsad.js";import"./MenuTrigger-5x48j7vr.js";import"./CompositeItem-DGPROoar.js";import"./ToolbarRootContext-Br_vAgTK.js";import"./getDisabledMountTransitionStyles-DiStWca4.js";import"./getPseudoElementBounds-6sobnSc7.js";import"./chevron-down-BSLIpQnp.js";import"./index-Cya7fJ6D.js";import"./error-C-0hAT3N.js";import"./BaseCbacBanner-iBguVLxX.js";import"./makeExternalStore-DUwh_7mZ.js";import"./Tooltip-Bo6HRsNU.js";import"./PopoverPopup-B7OLzkIb.js";import"./debounce-4VVcQrZU.js";import"./useOsdkClient-CILic4ch.js";import"./tick-yMG_ar3H.js";import"./DropdownField-6g5GKP5i.js";import"./isEqual-BOe8UnNZ.js";import"./withOsdkMetrics-tZacdIUn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
