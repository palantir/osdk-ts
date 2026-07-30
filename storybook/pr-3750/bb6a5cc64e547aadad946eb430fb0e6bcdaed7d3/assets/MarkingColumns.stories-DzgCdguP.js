import{f as p,j as e}from"./iframe-CDdobGVl.js";import{O as i}from"./object-table-B8SkHDHc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fzUqsnoB.js";import"./Table-1FYsJVtN.js";import"./index-UG7IPa_e.js";import"./Dialog-LmovP1r_.js";import"./cross-DCH_An2W.js";import"./svgIconContainer-CgDgIgq2.js";import"./useBaseUiId-DRnSBJCG.js";import"./InternalBackdrop-Dek1E__h.js";import"./composite-B7TSCQsg.js";import"./index-DuK41-3i.js";import"./index-DsQcLISu.js";import"./index-FQSBGRBE.js";import"./useEventCallback-Ci8wYTua.js";import"./SkeletonBar-aDjTru-v.js";import"./LoadingCell-DJLYTkxA.js";import"./ColumnConfigDialog-Bjj8AdKZ.js";import"./DraggableList-DRKr8B2k.js";import"./search-DhR-FEPU.js";import"./Input-B8c3wvNn.js";import"./useControlled-y0BuUqJ1.js";import"./isEqual-BrP0-CPc.js";import"./isObject-D1v0OFvi.js";import"./Button-DV2ka0Gf.js";import"./ActionButton-DAf9MUci.js";import"./Checkbox-BHRvrbWl.js";import"./useValueChanged-DqSkUFAq.js";import"./CollapsiblePanel-BLrbSiDi.js";import"./MultiColumnSortDialog-BQJL_SCe.js";import"./MenuTrigger-C9rAEmNL.js";import"./CompositeItem-BV2a_jIB.js";import"./ToolbarRootContext-eacV9sqC.js";import"./getDisabledMountTransitionStyles-DBakWkTZ.js";import"./getPseudoElementBounds-DjYJBVJl.js";import"./chevron-down-D3adfjjO.js";import"./index-Dtnd9Ao8.js";import"./error-CWlEyLzu.js";import"./BaseCbacBanner-DjgfQF4B.js";import"./makeExternalStore-BwTsluQv.js";import"./Tooltip-BUI5QaZR.js";import"./PopoverPopup-BVSi0AGn.js";import"./toNumber-BUnY8e99.js";import"./useOsdkClient-D640BFrj.js";import"./tick-D6gnufEx.js";import"./DropdownField-BRXshMDt.js";import"./withOsdkMetrics-B9eQL1mQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
