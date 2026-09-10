import{f as p,j as e}from"./iframe-DBsN32YB.js";import{O as i}from"./object-table-DjeIQPag.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D8tz-Fbl.js";import"./Table-DPyHXa7-.js";import"./index-nhJVH1tz.js";import"./Dialog-DQ_Uwa09.js";import"./cross-DPk5SIsZ.js";import"./svgIconContainer-X_dBFOT2.js";import"./useBaseUiId-CSOklioX.js";import"./InternalBackdrop-DYY9GSmo.js";import"./composite-BNtgV9XE.js";import"./index-vWZxRhPY.js";import"./index-Cf_xmn3O.js";import"./index-BWmQuch2.js";import"./useEventCallback-BDGHapFp.js";import"./SkeletonBar-OO5fv2aQ.js";import"./LoadingCell-DY05omvW.js";import"./ColumnConfigDialog-DWZ3wkpR.js";import"./DraggableList-CjGeHf5D.js";import"./search-rD_BABVw.js";import"./Input-DkxwhWbl.js";import"./useControlled-BvDU6EbQ.js";import"./Button-CQwlNKu1.js";import"./small-cross-Cim7XK7q.js";import"./ActionButton-koQGMFye.js";import"./Checkbox-DCWuLRNR.js";import"./useValueChanged-NXrJU1s1.js";import"./CollapsiblePanel-U9o9y0a2.js";import"./MultiColumnSortDialog-Dqm-9n9T.js";import"./MenuTrigger-8jSKQYx3.js";import"./CompositeItem-Dfbl7Tdw.js";import"./ToolbarRootContext-6JBun5UY.js";import"./getDisabledMountTransitionStyles-OsqmWLyJ.js";import"./getPseudoElementBounds-Bc1_ckMu.js";import"./chevron-down-eJT7_Kub.js";import"./index-eEgfn-we.js";import"./error-C3JCbj1L.js";import"./BaseCbacBanner-CgR4_YV5.js";import"./makeExternalStore-DbaTP8FP.js";import"./Tooltip-BjuL9DjV.js";import"./PopoverPopup-0gvGwbx8.js";import"./debounce-DaYdPsaE.js";import"./useOsdkClient-0ECQxVY2.js";import"./tick-DsjN0rWO.js";import"./DropdownField-II4e2JLl.js";import"./isEqual-lRAD_Git.js";import"./withOsdkMetrics-1oll6lxC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
