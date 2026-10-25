import{f as p,j as e}from"./iframe-8ifTlOPI.js";import{O as i}from"./object-table-ndrVNxgt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-qjA7iF_h.js";import"./Table-DYqI_6aW.js";import"./index-zP_CtKeM.js";import"./Dialog-Cf488IT9.js";import"./cross-CL785k1k.js";import"./svgIconContainer-D_TXE4Bb.js";import"./useBaseUiId-Cwh1jhj-.js";import"./InternalBackdrop-DcUvvNEJ.js";import"./composite-B4CIj8hm.js";import"./index-CoyaXW0G.js";import"./index-DwMFEFqg.js";import"./index-pH-MRX5y.js";import"./useEventCallback-DNuPjnYr.js";import"./SkeletonBar-CAFjcspr.js";import"./LoadingCell-BFD54Tcr.js";import"./ColumnConfigDialog-DiJLTN8d.js";import"./DraggableList-B5V2tPlo.js";import"./search-cZtZgUJN.js";import"./Input-CMGBsI9h.js";import"./useControlled-CyFBz6dn.js";import"./Button-CkeTq1uo.js";import"./small-cross-B646WFen.js";import"./ActionButton-CxCutMvr.js";import"./Checkbox-Bgh6nR7u.js";import"./useValueChanged-TYhdJ9yM.js";import"./CollapsiblePanel-Dr80mgLX.js";import"./MultiColumnSortDialog-DTt_dWd5.js";import"./MenuTrigger-P1EkmwDH.js";import"./CompositeItem-DP3maplG.js";import"./ToolbarRootContext-BVL9-YVY.js";import"./getDisabledMountTransitionStyles-CisZNLPx.js";import"./getPseudoElementBounds-BktluGq2.js";import"./chevron-down-BBwBJyH3.js";import"./index-DPyB-hEV.js";import"./error-CEWX4lms.js";import"./BaseCbacBanner-hOsFxdZf.js";import"./makeExternalStore-BjHpzMBx.js";import"./Tooltip-D1NVsbbj.js";import"./PopoverPopup-DyGtJCKe.js";import"./debounce-BDQ7N1x4.js";import"./useOsdkClient-CfP7K8UM.js";import"./tick-FRfoFGPl.js";import"./DropdownField-Bmo9g9ce.js";import"./isEqual-tZEY_fLF.js";import"./withOsdkMetrics-C5cd7yWV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
