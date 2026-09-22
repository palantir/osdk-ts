import{f as p,j as e}from"./iframe-D6GK-HvP.js";import{O as i}from"./object-table-c5-yuc1V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFH31g1G.js";import"./Table-KaTG4LsG.js";import"./index-B8Opp0Aq.js";import"./Dialog-BMlaZ5OW.js";import"./cross-Dd2BFVFf.js";import"./svgIconContainer-CSrNgshe.js";import"./useBaseUiId-8c0vpIbF.js";import"./InternalBackdrop-HHAKufKS.js";import"./composite-CrjUHFOu.js";import"./index-P8xupo9q.js";import"./index-BJnCsIvw.js";import"./index-BnURt9pi.js";import"./useEventCallback-SOIvlHLC.js";import"./SkeletonBar-F48-D9OO.js";import"./LoadingCell-CnqEJ9mH.js";import"./ColumnConfigDialog-DC09W4dG.js";import"./DraggableList-pqCMT3mz.js";import"./search-BIJa8P83.js";import"./Input-CEqlI-vi.js";import"./useControlled-DuFMSGQq.js";import"./Button-oq6XXTdR.js";import"./small-cross-poVqs8u3.js";import"./ActionButton-Bub0N-0E.js";import"./Checkbox-CyQO4MFp.js";import"./useValueChanged-re7ueQpT.js";import"./CollapsiblePanel-Cj9OvKAd.js";import"./MultiColumnSortDialog-uinvQw2f.js";import"./MenuTrigger-2Gpj1hX5.js";import"./CompositeItem-XBxLSQGB.js";import"./ToolbarRootContext-DGSqIy6x.js";import"./getDisabledMountTransitionStyles-CPvJg8iL.js";import"./getPseudoElementBounds-DSxspgXt.js";import"./chevron-down-B7x3jao1.js";import"./index-C08EsZev.js";import"./error-CecGBnpf.js";import"./BaseCbacBanner-BVqhNcwk.js";import"./makeExternalStore-DeRAagV9.js";import"./Tooltip-xOoakjaD.js";import"./PopoverPopup-YhXneox5.js";import"./debounce-Cn0q10eM.js";import"./useOsdkClient-B41IHrdM.js";import"./tick-BvUp_jCe.js";import"./DropdownField-BocBrIvP.js";import"./isEqual-BDeh4Ts9.js";import"./withOsdkMetrics-D368-fbW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
