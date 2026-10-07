import{f as p,j as e}from"./iframe-Bs9Zqqf-.js";import{O as i}from"./object-table-BDbBPExr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cp9usskF.js";import"./Table-WIGkIWeG.js";import"./index-BDMfxNxX.js";import"./Dialog-CGb3DT5F.js";import"./cross-BNRY-s17.js";import"./svgIconContainer-aOhTN_D5.js";import"./useBaseUiId-9IsGojkB.js";import"./InternalBackdrop-BGL8gebb.js";import"./composite-Cqp0rQwX.js";import"./index-Dblp0HKE.js";import"./index-EMOKDP2T.js";import"./index-Cfs5giYo.js";import"./useEventCallback-CPnYLf1v.js";import"./SkeletonBar-D3b4PSYB.js";import"./LoadingCell-CyJKjezy.js";import"./ColumnConfigDialog-BJEn9MZc.js";import"./DraggableList-SExvNz1P.js";import"./search-D6HT7gEm.js";import"./Input-DFM7xw9J.js";import"./useControlled-DkY88gS_.js";import"./Button-DE9Fucz0.js";import"./small-cross-DrXs_-qZ.js";import"./ActionButton-BgsU4BKW.js";import"./Checkbox-CyS5WU7M.js";import"./useValueChanged-9Rhs99cV.js";import"./CollapsiblePanel-Uvb76fMO.js";import"./MultiColumnSortDialog-DHqlE6PI.js";import"./MenuTrigger-JgHvRvS2.js";import"./CompositeItem-ctTapvtZ.js";import"./ToolbarRootContext-ZHsiNOiv.js";import"./getDisabledMountTransitionStyles-B4RdPd8-.js";import"./getPseudoElementBounds-DSR0VlQK.js";import"./chevron-down-Dg71DAa4.js";import"./index-D6h7Nvb3.js";import"./error-EzQ0dI5s.js";import"./BaseCbacBanner-BFkGOdbB.js";import"./makeExternalStore-CdBELGf5.js";import"./Tooltip-Bdagy_hn.js";import"./PopoverPopup-BcfSdZdq.js";import"./debounce-CqWMxEN-.js";import"./useOsdkClient-B6joKZOa.js";import"./tick-CXdTppsu.js";import"./DropdownField-D9LMnY0i.js";import"./isEqual-OcM3daqL.js";import"./withOsdkMetrics-DDUrYl-m.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
