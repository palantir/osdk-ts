import{f as p,j as e}from"./iframe-BM7Q-dMJ.js";import{O as i}from"./object-table-NvF7n7Aj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BWjcCog8.js";import"./Table-f9tZwlQt.js";import"./index-BybuAuux.js";import"./Dialog-BHcxcl7j.js";import"./cross-1-TnP1TT.js";import"./svgIconContainer-Bht8VzUd.js";import"./useBaseUiId-CwUHdvwv.js";import"./InternalBackdrop-FFPxO1CT.js";import"./composite-Lv4sNU4L.js";import"./index-SuuHTDz0.js";import"./index-B_WLJNqi.js";import"./index-Du6jQDOr.js";import"./useEventCallback-J2mmsqLg.js";import"./SkeletonBar-BRy64cL1.js";import"./LoadingCell-DK8QEcVo.js";import"./ColumnConfigDialog-CX7YBb96.js";import"./DraggableList-JJisodgs.js";import"./search-Ddrt0Hct.js";import"./Input-DfRNBHCu.js";import"./useControlled-BQdmVz8X.js";import"./Button-DPCu3lFK.js";import"./small-cross-D_EyLeAZ.js";import"./ActionButton-DKLtWYLa.js";import"./Checkbox-BZbxyuBv.js";import"./useValueChanged-CXXrYUtJ.js";import"./CollapsiblePanel-CohDmxSC.js";import"./MultiColumnSortDialog-tEraLFii.js";import"./MenuTrigger-DrVwrahJ.js";import"./CompositeItem-DlNVx4-v.js";import"./ToolbarRootContext-DKuunDH_.js";import"./getDisabledMountTransitionStyles-CFh0GbMr.js";import"./getPseudoElementBounds-CBaa1JSS.js";import"./chevron-down-DxXNwnvG.js";import"./index-D84UhGg8.js";import"./error-o6sSvsT-.js";import"./BaseCbacBanner-DO6cEyI9.js";import"./makeExternalStore-6NEmzi49.js";import"./Tooltip-BfJ9ISA3.js";import"./PopoverPopup-DLsBFnzx.js";import"./debounce-CKCnpvnv.js";import"./useOsdkClient-C9TzfZod.js";import"./tick-BbU13DjE.js";import"./DropdownField-DLHpxYXi.js";import"./isEqual-TDqzKxzH.js";import"./withOsdkMetrics-DNVP_GMx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
