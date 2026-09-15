import{f as p,j as e}from"./iframe-SCQrgHSr.js";import{O as i}from"./object-table-B617jB-3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ruFAjrX8.js";import"./Table-DkDB8z-y.js";import"./index-BUtIlNP3.js";import"./Dialog-CXnN9hQo.js";import"./cross-RzKZrUkh.js";import"./svgIconContainer-PYczuJwB.js";import"./useBaseUiId-BR-Fy_C2.js";import"./InternalBackdrop-CVssRVAp.js";import"./composite-Dt5lUk_W.js";import"./index--0Ld1SF2.js";import"./index-w54i75Ov.js";import"./index-CT5e1oGB.js";import"./useEventCallback-C4za5yjU.js";import"./SkeletonBar-DuD90zQc.js";import"./LoadingCell-DgbcSV4w.js";import"./ColumnConfigDialog-DypaZEDp.js";import"./DraggableList-Dug4fsy0.js";import"./search-Dm4EdHL9.js";import"./Input-CnPO-APv.js";import"./useControlled-Cz7FsEHc.js";import"./Button-CuEtz6jx.js";import"./small-cross-Bw4zLqUD.js";import"./ActionButton-Czv-I_yU.js";import"./Checkbox-b815pw-1.js";import"./useValueChanged-B1QwrseW.js";import"./CollapsiblePanel-DkamSJ2Z.js";import"./MultiColumnSortDialog-BZC_LUEx.js";import"./MenuTrigger-DZ_gD7BR.js";import"./CompositeItem-Co12UxPz.js";import"./ToolbarRootContext-BfCeEs7c.js";import"./getDisabledMountTransitionStyles-BTvGlHNw.js";import"./getPseudoElementBounds-BmOO-M7r.js";import"./chevron-down-CgTNl4cy.js";import"./index-ZLSkTGBP.js";import"./error-bDXyKJC8.js";import"./BaseCbacBanner-pRZs5Dex.js";import"./makeExternalStore-CUOtWXW6.js";import"./Tooltip-BR8Gpg6Y.js";import"./PopoverPopup-Be5JEcOd.js";import"./debounce-BzGmHbO5.js";import"./useOsdkClient-osmLaNC1.js";import"./tick-D-DSVTdq.js";import"./DropdownField-C7QjeZet.js";import"./isEqual-tncELNRj.js";import"./withOsdkMetrics-tKMMAYTA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
