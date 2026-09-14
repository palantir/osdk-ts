import{f as p,j as e}from"./iframe-DIZ-Bu8w.js";import{O as i}from"./object-table-DXEf7QZp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BCeaJvSh.js";import"./Table-CpSGMOkR.js";import"./index-U9LN2Bz3.js";import"./Dialog-DRlRU3T4.js";import"./cross-DxgTLWiz.js";import"./svgIconContainer-IKodGSm3.js";import"./useBaseUiId-CBNbS5zc.js";import"./InternalBackdrop-yM8Okk6y.js";import"./composite-g9iDGAQe.js";import"./index-C_o4DvqR.js";import"./index-C_qvm4WD.js";import"./index-gGnzolpv.js";import"./useEventCallback-BDzfSq7p.js";import"./SkeletonBar-C61w2HiA.js";import"./LoadingCell-DjxUE7vP.js";import"./ColumnConfigDialog-CK0v3LgS.js";import"./DraggableList-DzoglXEc.js";import"./search-DmtLA8wB.js";import"./Input-CIeGAlok.js";import"./useControlled-CLVHgJsp.js";import"./Button-B1ALhdFr.js";import"./small-cross-CRaqECGa.js";import"./ActionButton-Dlu16gsr.js";import"./Checkbox-YrU0nqcl.js";import"./useValueChanged-CGUyZDFO.js";import"./CollapsiblePanel-DPTmyULg.js";import"./MultiColumnSortDialog-DqqrwBbG.js";import"./MenuTrigger-DEfP1V7x.js";import"./CompositeItem-BtZ6x-gO.js";import"./ToolbarRootContext-BVSgixiH.js";import"./getDisabledMountTransitionStyles-CQ2DPXAp.js";import"./getPseudoElementBounds-BUnDKKdE.js";import"./chevron-down-DSfB9wHE.js";import"./index-CkInxViu.js";import"./error-uSSd40F1.js";import"./BaseCbacBanner-Qx6E67Bb.js";import"./makeExternalStore-DE0i2YSI.js";import"./Tooltip-BMr-3bqI.js";import"./PopoverPopup-DYZGNom1.js";import"./debounce-C3kkqtjg.js";import"./useOsdkClient-BScEIiCr.js";import"./tick-BgvY-8AZ.js";import"./DropdownField-qfJaQs7S.js";import"./isEqual-luc_zc0m.js";import"./withOsdkMetrics-CD3VlAOg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
