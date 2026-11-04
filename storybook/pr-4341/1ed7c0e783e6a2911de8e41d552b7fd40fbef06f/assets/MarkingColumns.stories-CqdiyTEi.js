import{f as p,j as e}from"./iframe-6oxuiw9Z.js";import{O as i}from"./object-table-3jbSUztS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BTY9tSHX.js";import"./Table-pqx_radf.js";import"./index-DDLC59ec.js";import"./Dialog-Cd7a1III.js";import"./cross-DFvXSKDO.js";import"./svgIconContainer-CCWfPmIE.js";import"./useBaseUiId-CTF0uA8q.js";import"./InternalBackdrop-DBmGsDdc.js";import"./composite-D6aR9WOy.js";import"./index-CgONBqcV.js";import"./index-5k16yjvX.js";import"./index-DVdku0Wi.js";import"./useEventCallback-BVuP13gs.js";import"./SkeletonBar-DzVrK6Gn.js";import"./LoadingCell-Ba_zo3cu.js";import"./ColumnConfigDialog-BoWl1kOd.js";import"./DraggableList-Ddn41pRq.js";import"./search-CEhUV7Cx.js";import"./Input-CFCgD2F3.js";import"./useControlled-Dfn-KuCH.js";import"./Button-BYfKNsB1.js";import"./small-cross-vimEE2_z.js";import"./ActionButton-IYlq4mb0.js";import"./Checkbox-CW5-sfvR.js";import"./useValueChanged-CP--SvLi.js";import"./CollapsiblePanel-CO8uQTa1.js";import"./MultiColumnSortDialog-ZV2q-T8B.js";import"./MenuTrigger-BFKWshZl.js";import"./CompositeItem-CxzD_nac.js";import"./ToolbarRootContext-Cg1szVJV.js";import"./getDisabledMountTransitionStyles-DTLBovES.js";import"./getPseudoElementBounds-B_PMHS6a.js";import"./chevron-down-D5GnK5oF.js";import"./index-Buj0z2vt.js";import"./error-CCmYgvH-.js";import"./BaseCbacBanner-DaxLSJFu.js";import"./makeExternalStore-C5lUPI7i.js";import"./Tooltip-XVfngFaQ.js";import"./PopoverPopup-BcnCQgbT.js";import"./debounce-DF-eexkr.js";import"./useOsdkClient-B4tnXDgL.js";import"./tick-CaZ2jGqn.js";import"./DropdownField-B7TAl7Ih.js";import"./isEqual-DzVGf6G7.js";import"./withOsdkMetrics-DqypzTOB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
