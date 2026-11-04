import{f as p,j as e}from"./iframe-CSosjOmv.js";import{O as i}from"./object-table-k0Pd3U0J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C-gjDSXJ.js";import"./Table-D1ovXRRz.js";import"./index-DzdecULf.js";import"./Dialog-fffMjTb5.js";import"./cross-CBsOArVe.js";import"./svgIconContainer-C8vg2tag.js";import"./useBaseUiId-B_aLw92E.js";import"./InternalBackdrop-BxW846uB.js";import"./composite-CFm1NNj3.js";import"./index-BvXFeSY8.js";import"./index-C7NVW3nO.js";import"./index-CfZcDCWD.js";import"./useEventCallback-DOvtzK6I.js";import"./SkeletonBar-CbLIOtic.js";import"./LoadingCell-DaoBTPNn.js";import"./ColumnConfigDialog-WGiHcGK1.js";import"./DraggableList-BWfhlxg0.js";import"./search-1vXjOjjG.js";import"./Input-BYDbWdB8.js";import"./useControlled-DcuHztpz.js";import"./Button-CXkasH7A.js";import"./small-cross-DoPihXaf.js";import"./ActionButton-C_1ovufb.js";import"./Checkbox-DaMXtAIo.js";import"./useValueChanged-DnGO4l1i.js";import"./CollapsiblePanel-CDB1SVVs.js";import"./MultiColumnSortDialog-BcsfvTRY.js";import"./MenuTrigger-Cofu7USV.js";import"./CompositeItem-CDrUmRrI.js";import"./ToolbarRootContext-DYXzz-gp.js";import"./getDisabledMountTransitionStyles-DIK2usmu.js";import"./getPseudoElementBounds-DlEj5IwE.js";import"./chevron-down-C05xfaFU.js";import"./index-qg2om6Py.js";import"./error-C8uWSFuO.js";import"./BaseCbacBanner-BkrhTTig.js";import"./makeExternalStore-C3SFvB3D.js";import"./Tooltip-BMDob29c.js";import"./PopoverPopup-BSZvkPJG.js";import"./debounce-BzCw0aaH.js";import"./useOsdkClient-p2uvl16R.js";import"./tick-DgeixQ7I.js";import"./DropdownField-CLwVEV16.js";import"./isEqual-C9GwESqS.js";import"./withOsdkMetrics-DObV_URP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
