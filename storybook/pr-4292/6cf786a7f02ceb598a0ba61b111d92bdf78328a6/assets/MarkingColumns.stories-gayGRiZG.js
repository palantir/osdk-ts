import{f as p,j as e}from"./iframe-yzha5v0q.js";import{O as i}from"./object-table-7QNEleDy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-8FAAW5.js";import"./Table-1KtfhII5.js";import"./index-60EGa8qT.js";import"./Dialog-C5JPUXP6.js";import"./cross-BlwLOBUQ.js";import"./svgIconContainer-C44iOk89.js";import"./useBaseUiId-BbIMkHOG.js";import"./InternalBackdrop-Tn-t9TYq.js";import"./composite-BDH9_dFX.js";import"./index-O5EAmeT1.js";import"./index-BVrkRt64.js";import"./index-C1kDTagr.js";import"./useEventCallback-DsjWVVDr.js";import"./SkeletonBar-aZ1R4mdC.js";import"./LoadingCell-BQBa2JlH.js";import"./ColumnConfigDialog-CVF6mbu9.js";import"./DraggableList-Blt51KXd.js";import"./search-gm56Xs7t.js";import"./Input-EyuyzT2W.js";import"./useControlled-D0bVi2TG.js";import"./Button-BiUOfKuO.js";import"./small-cross-Cm5dK0ec.js";import"./ActionButton-DTkeL8Lj.js";import"./Checkbox-tgD1qeBp.js";import"./useValueChanged-B6X9c3a_.js";import"./CollapsiblePanel-DOlyQkQE.js";import"./MultiColumnSortDialog-S4FDUM3S.js";import"./MenuTrigger-CuI3s9S9.js";import"./CompositeItem-ha9gBhOi.js";import"./ToolbarRootContext-D2IbjqCY.js";import"./getDisabledMountTransitionStyles-IE49pSF5.js";import"./getPseudoElementBounds-DPNIWnqr.js";import"./chevron-down-DLVlSQ8P.js";import"./index-DbIozRF2.js";import"./error-B0YQBao9.js";import"./BaseCbacBanner-DjcIjJbq.js";import"./makeExternalStore-DbXaKl2K.js";import"./Tooltip-DPFg4mPg.js";import"./PopoverPopup-C3DSbH4l.js";import"./debounce-X5gf-7Uy.js";import"./useOsdkClient-Bxqh4Bcm.js";import"./tick-DY8FjhzJ.js";import"./DropdownField-Dw87S1et.js";import"./isEqual-BwFhy3Dl.js";import"./withOsdkMetrics-DqbCp-LC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
