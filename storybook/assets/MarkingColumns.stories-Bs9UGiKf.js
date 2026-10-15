import{f as p,j as e}from"./iframe-D1DnRXYH.js";import{O as i}from"./object-table-DES2_u1T.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DmqLzT5l.js";import"./index-BOVyYsBB.js";import"./Dialog-BVX3oafM.js";import"./cross-CSUtUBCJ.js";import"./svgIconContainer-CThNxl0n.js";import"./useBaseUiId-BdlOppAL.js";import"./InternalBackdrop-CwDFLT3m.js";import"./composite-DS57evVk.js";import"./index-fjVXZ-V0.js";import"./index-eqepVRHL.js";import"./index-DxsfHjKY.js";import"./useEventCallback-Ca0KASNd.js";import"./SkeletonBar-DphPqPis.js";import"./LoadingCell-Bmf3DHQl.js";import"./ColumnConfigDialog-BBuwqElm.js";import"./DraggableList-QdJNJkWo.js";import"./search-BbGlGWkG.js";import"./Input-BXJLgeNm.js";import"./useControlled-BDwxO80n.js";import"./Button-7tq21DzM.js";import"./small-cross-B-R6m80e.js";import"./ActionButton-Bf99j7AG.js";import"./Checkbox-Das4oVA6.js";import"./useValueChanged-BH0A2zFp.js";import"./CollapsiblePanel-B-RyYn8y.js";import"./MultiColumnSortDialog-LhxyCZ9I.js";import"./MenuTrigger-B6EI5r-J.js";import"./CompositeItem-COpco4va.js";import"./ToolbarRootContext-B2fwojw5.js";import"./getDisabledMountTransitionStyles-DPsiGUxU.js";import"./getPseudoElementBounds-DM5-UIyf.js";import"./chevron-down-CE6TeLM9.js";import"./index-CRDubvT7.js";import"./error-PWaSqDvq.js";import"./BaseCbacBanner-DeWdVL1r.js";import"./makeExternalStore-RyYPhhMJ.js";import"./Tooltip-DQWisYIT.js";import"./PopoverPopup-CCyG4Nmv.js";import"./debounce-CV-5WpHu.js";import"./useOsdkClient-BcNSxg1j.js";import"./tick-thvbYd_R.js";import"./DropdownField-BddjJbE_.js";import"./isEqual-Bkx8zYSE.js";import"./withOsdkMetrics-BIY3fItA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
