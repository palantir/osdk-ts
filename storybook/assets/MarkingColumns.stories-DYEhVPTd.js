import{f as p,j as e}from"./iframe-BKkgtFSo.js";import{O as i}from"./object-table-BH4cY394.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-eE5th-G5.js";import"./index-Dvbp0kPd.js";import"./NonIdealState-CcUJbrpE.js";import"./Dialog-C2aH1HrO.js";import"./cross-5K119jUx.js";import"./svgIconContainer-Ce9VGxQH.js";import"./useBaseUiId-BfmvZ33T.js";import"./InternalBackdrop-BpRAUWPw.js";import"./composite-CVFofIE7.js";import"./index-CNoy-iis.js";import"./index-BDs07rBu.js";import"./index-1AbeELNr.js";import"./SkeletonBar-DCi4lVfd.js";import"./LoadingCell-Do8SUb-f.js";import"./ColumnConfigDialog-CTuntdU9.js";import"./DraggableList-ByCpmkMe.js";import"./search-VxZ7VsjM.js";import"./Input-ajiamWew.js";import"./useControlled-CiCRPIrb.js";import"./Button-D0Mtf1Wu.js";import"./small-cross-D5_9Jwec.js";import"./ActionButton-DkNjySCa.js";import"./Checkbox-BRVfPQgc.js";import"./useValueChanged-BVys5dm-.js";import"./CollapsiblePanel-BB19Mn1b.js";import"./MultiColumnSortDialog-BH0ZXCbZ.js";import"./MenuTrigger-B3ghwpLY.js";import"./CompositeItem-B3A9StDG.js";import"./ToolbarRootContext-CGelScnS.js";import"./getDisabledMountTransitionStyles-X8rUrkvt.js";import"./getPseudoElementBounds-C1szzxdu.js";import"./chevron-down-C5BYt7gU.js";import"./index-CVd367Vi.js";import"./error-DeWUfdBM.js";import"./BaseCbacBanner-DqJ_osEB.js";import"./makeExternalStore-Qrh_OJH6.js";import"./Tooltip-Br4k1WIE.js";import"./PopoverPopup-Dkt2NgPN.js";import"./Select-CQIz6wip.js";import"./useOsdkClient-DFktUr12.js";import"./tick-Ch6cMwoK.js";import"./DropdownField-DT-aa1rt.js";import"./useDebouncedCallback-BzoQ_1l9.js";import"./isEqual-COOSB5_T.js";import"./_baseIsEqual-D4aVuU6Y.js";import"./stableSerialize-D_7L0Ei9.js";import"./withOsdkMetrics-Bs5QRS3m.js";const ar={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ar as default};
