import{f as p,j as e}from"./iframe-CmxH_uLC.js";import{O as i}from"./object-table-CRFfPVal.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BeAOyUTZ.js";import"./Table-C9kra6ek.js";import"./index-DJsCZSKi.js";import"./Dialog-BNKYMGHo.js";import"./cross-CyX8lMkj.js";import"./svgIconContainer-B8tcX66C.js";import"./useBaseUiId-C0ZMCIGl.js";import"./InternalBackdrop-CSQj2QiU.js";import"./composite-XJfPxJ_X.js";import"./index-xj8oWt_u.js";import"./index-YuGlXnUZ.js";import"./index-DI_hkYt2.js";import"./useEventCallback-UxifOB0d.js";import"./SkeletonBar-C1mRvl1J.js";import"./LoadingCell-COrKfPuv.js";import"./ColumnConfigDialog-Chmm0uAt.js";import"./DraggableList-D_zWYVFa.js";import"./search-TlKrCqYm.js";import"./Input-BKp843TN.js";import"./useControlled-Cmxg5Gb3.js";import"./Button-LKCq4LKF.js";import"./small-cross-CkLXIhPX.js";import"./ActionButton-DCJnOZsI.js";import"./Checkbox-Bv4SuPoI.js";import"./useValueChanged-CwV0eJfz.js";import"./CollapsiblePanel--w9tIzOo.js";import"./MultiColumnSortDialog-BWgone-Q.js";import"./MenuTrigger-BIoi-XB2.js";import"./CompositeItem-tCxULoej.js";import"./ToolbarRootContext-D7pkAdai.js";import"./getDisabledMountTransitionStyles-CMPEQ-kf.js";import"./getPseudoElementBounds-lcY7pLtV.js";import"./chevron-down-CyKsjkJ5.js";import"./index-CT0RUWXc.js";import"./error-Dd4yTEqY.js";import"./BaseCbacBanner-DnGU3imV.js";import"./makeExternalStore-BlDQytTU.js";import"./Tooltip-Dgrr9UmS.js";import"./PopoverPopup-DJbVIXOK.js";import"./debounce-uG06-Bnl.js";import"./useOsdkClient-CKlsW0yh.js";import"./tick-BOd_PXKl.js";import"./DropdownField-FhNn2H0Y.js";import"./isEqual-uZqrEjav.js";import"./withOsdkMetrics-087Wob4c.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
