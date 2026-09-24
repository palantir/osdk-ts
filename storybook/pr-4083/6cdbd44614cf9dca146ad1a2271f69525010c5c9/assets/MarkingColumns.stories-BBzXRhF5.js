import{f as p,j as e}from"./iframe-BJHh5Vyz.js";import{O as i}from"./object-table-BFTqu4WB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BEOBDvBb.js";import"./Table-D77tsv7z.js";import"./index-C19RBoJu.js";import"./Dialog-LkqoZs6q.js";import"./cross-BcEML_Ki.js";import"./svgIconContainer-Oo_WGWgj.js";import"./useBaseUiId-eHvFwl9q.js";import"./InternalBackdrop-BqbazbcZ.js";import"./composite-CQHPO_Bw.js";import"./index-FPDQ-3J4.js";import"./index-DuAaKh8Z.js";import"./index-BcNome8U.js";import"./useEventCallback-SQylOg7X.js";import"./SkeletonBar-CpykcO5g.js";import"./LoadingCell-N8DCjfL3.js";import"./ColumnConfigDialog-B2i8eMF1.js";import"./DraggableList-BVbG2XdD.js";import"./search-CygATN7t.js";import"./Input-DhkgM9Ni.js";import"./useControlled-DRblTyuY.js";import"./Button-XY8oXyEd.js";import"./small-cross-BcJCT5oZ.js";import"./ActionButton-UaUebUqN.js";import"./Checkbox-D6YisCtG.js";import"./useValueChanged-CIPyPD3s.js";import"./CollapsiblePanel-CGqwtuWj.js";import"./MultiColumnSortDialog-C1LikW-A.js";import"./MenuTrigger-Bfj3uIwZ.js";import"./CompositeItem-6AqsuMkJ.js";import"./ToolbarRootContext-CNIddhOS.js";import"./getDisabledMountTransitionStyles-D3dYUIEg.js";import"./getPseudoElementBounds-CT0X_ePj.js";import"./chevron-down-g5IBPJxD.js";import"./index-DB7oCP_Q.js";import"./error-D2VhnADa.js";import"./BaseCbacBanner-D-J85zOv.js";import"./makeExternalStore-nf7wa3ij.js";import"./Tooltip-BJV71zjW.js";import"./PopoverPopup-fac766Lw.js";import"./debounce-Gc9yJQdi.js";import"./useOsdkClient-BZwIY2z4.js";import"./tick-CjnLz9Ic.js";import"./DropdownField-DEchhT8v.js";import"./isEqual-D_7g9xzJ.js";import"./withOsdkMetrics-DZ9Y5lOn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
