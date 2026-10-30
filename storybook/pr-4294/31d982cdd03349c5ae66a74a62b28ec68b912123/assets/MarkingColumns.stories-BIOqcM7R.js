import{f as p,j as e}from"./iframe-Br8xONPm.js";import{O as i}from"./object-table-B6lx7_yi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQgVVB6U.js";import"./Table-D_n0BsEc.js";import"./index-B2krqAG0.js";import"./Dialog-Bl3S4dTf.js";import"./cross-DuxFWD_g.js";import"./svgIconContainer-CSQu9ec3.js";import"./useBaseUiId-BZnTNrwC.js";import"./InternalBackdrop-6cvjFa41.js";import"./composite-C9h1Nrh8.js";import"./index-D9czVAyf.js";import"./index-jHhc_U3n.js";import"./index-B-GeqWm0.js";import"./useEventCallback-C7zCd0lh.js";import"./SkeletonBar-PkMTMVi0.js";import"./LoadingCell-BaO-_6dK.js";import"./ColumnConfigDialog-Ba-IH8UZ.js";import"./DraggableList-9FAgnbX5.js";import"./search-DZd-hDvg.js";import"./Input-BHVdEi5Z.js";import"./useControlled-BLiUdu5J.js";import"./Button-CpiJCvHd.js";import"./small-cross-CeJ3wQjx.js";import"./ActionButton-z1YZZnng.js";import"./Checkbox-CQ0zEQKF.js";import"./useValueChanged-Dcm4p7P9.js";import"./CollapsiblePanel-CU3saAtT.js";import"./MultiColumnSortDialog-DXOGAuol.js";import"./MenuTrigger-BZdR-zpx.js";import"./CompositeItem-yj6TyWdn.js";import"./ToolbarRootContext-CI35CvFn.js";import"./getDisabledMountTransitionStyles-C2DvpNtJ.js";import"./getPseudoElementBounds-DYtuX3rf.js";import"./chevron-down-CG3ZsjCs.js";import"./index-6kzQ95ap.js";import"./error-5UgtcFK8.js";import"./BaseCbacBanner-CAzellM6.js";import"./makeExternalStore-N49v7_Hy.js";import"./Tooltip-BMqnNLGs.js";import"./PopoverPopup-CnuFOAXl.js";import"./debounce-B803r_X5.js";import"./useOsdkClient-CY-_x2aU.js";import"./tick-Dsc87XPT.js";import"./DropdownField-ryKhHmHs.js";import"./isEqual-7Eh_qRj1.js";import"./withOsdkMetrics-BaSLlHt7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
