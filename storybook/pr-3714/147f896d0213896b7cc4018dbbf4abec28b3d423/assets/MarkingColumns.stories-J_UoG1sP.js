import{f as p,j as e}from"./iframe-BSifmcVk.js";import{O as i}from"./object-table-DKmmrjUP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVMAG18C.js";import"./Table-DkA4sIRB.js";import"./index-st0q4RoU.js";import"./Dialog-BGTjbFoM.js";import"./cross-DtUxBPT6.js";import"./svgIconContainer-CxUaEimp.js";import"./useBaseUiId-CpWLPULh.js";import"./InternalBackdrop-CeH086xI.js";import"./composite-IeMIDoM7.js";import"./index-DeMvH6kN.js";import"./index-xZryAjRG.js";import"./index-DX8lv5jY.js";import"./useEventCallback-CqljEom0.js";import"./SkeletonBar-hY9eSZBd.js";import"./LoadingCell-Dwy_GmrN.js";import"./ColumnConfigDialog-Ca-DeiWk.js";import"./DraggableList-CkNmAXZg.js";import"./search-Dj6xnLC7.js";import"./Input-Cq8S2xQC.js";import"./useControlled-DF0sXW0s.js";import"./isEqual-moNqE_If.js";import"./isObject-Ds2yKFI9.js";import"./Button-DXGQ07LV.js";import"./ActionButton-UE2H2jZ7.js";import"./Checkbox-C9dr3May.js";import"./useValueChanged-Cra7GySa.js";import"./CollapsiblePanel-CoT0h3JZ.js";import"./MultiColumnSortDialog-CZnGEQ8u.js";import"./MenuTrigger-HHsPQ3Hl.js";import"./CompositeItem-Xoq0cONq.js";import"./ToolbarRootContext-BJ4u2SIV.js";import"./getDisabledMountTransitionStyles-DMErhwac.js";import"./getPseudoElementBounds-DpeXWKZv.js";import"./chevron-down-4OBhYoLd.js";import"./index-szwaSOAB.js";import"./error-CL7low_w.js";import"./BaseCbacBanner-XQSjlqj-.js";import"./makeExternalStore-B_REPPMn.js";import"./Tooltip-axatK9O2.js";import"./PopoverPopup-Bx-V2EgX.js";import"./toNumber-BoTrHgLZ.js";import"./useOsdkClient-Dn_U9-Sj.js";import"./tick-BdtrcJ-0.js";import"./DropdownField-DMLIkq2P.js";import"./withOsdkMetrics-BmxutiwK.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
