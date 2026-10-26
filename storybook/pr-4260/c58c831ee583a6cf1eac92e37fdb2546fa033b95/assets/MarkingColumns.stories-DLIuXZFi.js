import{f as p,j as e}from"./iframe-BC4WuJqp.js";import{O as i}from"./object-table-oOquejpx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAlIbckl.js";import"./Table-154Fyxjs.js";import"./index-B64lxDBz.js";import"./Dialog-k0Ije6H7.js";import"./cross-6e8uCbEq.js";import"./svgIconContainer-CtvZ0OgY.js";import"./useBaseUiId-BVMrMyXc.js";import"./InternalBackdrop-BZc_LEAU.js";import"./composite-DeP2Ikxo.js";import"./index-BUFQlA2h.js";import"./index-eKZRvGXM.js";import"./index-BhHb9YgN.js";import"./useEventCallback-Ds74rybS.js";import"./SkeletonBar-DqiJ0KmM.js";import"./LoadingCell-ClF_w2Fd.js";import"./ColumnConfigDialog-vjRm2gUc.js";import"./DraggableList-CzeeMf1J.js";import"./search-CZ3TYav-.js";import"./Input-CzEl6QGc.js";import"./useControlled-Bs5VhBCJ.js";import"./Button-DHdZg685.js";import"./small-cross-CZLtYA5e.js";import"./ActionButton-C8vwMbni.js";import"./Checkbox-B3I0XikT.js";import"./useValueChanged-CxYsqBM1.js";import"./CollapsiblePanel-BoiujEbx.js";import"./MultiColumnSortDialog-Bsaqrv5P.js";import"./MenuTrigger-CD0FBspH.js";import"./CompositeItem-B3C6p1hy.js";import"./ToolbarRootContext-c4Ndu606.js";import"./getDisabledMountTransitionStyles-Dtsx70hN.js";import"./getPseudoElementBounds-D1ccQnN_.js";import"./chevron-down-Cl_Af1LQ.js";import"./index-Cd4zCzRN.js";import"./error-GVs8VSV-.js";import"./BaseCbacBanner-DVAbPDy9.js";import"./makeExternalStore-DmNapAQ9.js";import"./Tooltip-vRgEuTXd.js";import"./PopoverPopup-ULbHIXSs.js";import"./debounce-iB-UnFsI.js";import"./useOsdkClient-BzNLqqlE.js";import"./tick-vowPK7v2.js";import"./DropdownField-BQyQM-0q.js";import"./isEqual-3vsRtdOf.js";import"./withOsdkMetrics-D1wQc1Iv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
