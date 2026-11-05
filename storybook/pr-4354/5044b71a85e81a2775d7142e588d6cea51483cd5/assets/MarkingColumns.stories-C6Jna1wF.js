import{f as p,j as e}from"./iframe-CAg-JriM.js";import{O as i}from"./object-table-C-ApABTH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BUvKDxEU.js";import"./Table-i_e6H7xl.js";import"./index-c30BwpEp.js";import"./Dialog-BdVph2yq.js";import"./cross-f26_pld4.js";import"./svgIconContainer-DADUTguq.js";import"./useBaseUiId-BRS8U626.js";import"./InternalBackdrop-dVZjC2Aj.js";import"./composite-CQrdmEmC.js";import"./index-ZJoCPfq8.js";import"./index-BKL1ls47.js";import"./index-oQ8-uGIT.js";import"./useEventCallback-BWy4tScF.js";import"./SkeletonBar-BxCdHceQ.js";import"./LoadingCell-C-LbupCq.js";import"./ColumnConfigDialog-BkpF_5fM.js";import"./DraggableList-DPp-whoe.js";import"./search-iyFeBtu2.js";import"./Input-DRHJ-rvA.js";import"./useControlled-Ceb76xwT.js";import"./Button-Cl3foSbn.js";import"./small-cross-BOoOGXKD.js";import"./ActionButton-Bzha9uO_.js";import"./Checkbox-V5AP2cHu.js";import"./useValueChanged-3kHQoBsE.js";import"./CollapsiblePanel-COo9-GCD.js";import"./MultiColumnSortDialog-CHNEVY8-.js";import"./MenuTrigger-Bu5HVYuz.js";import"./CompositeItem-D7GSS8Td.js";import"./ToolbarRootContext-CdDSSu6d.js";import"./getDisabledMountTransitionStyles-CZGWVUEY.js";import"./getPseudoElementBounds-D5B51_gi.js";import"./chevron-down-CsfLCkc3.js";import"./index-B-69obD4.js";import"./error-1JJ1PBi7.js";import"./BaseCbacBanner-MWnGpk0a.js";import"./makeExternalStore-sIngp_if.js";import"./Tooltip-BaUV5B5y.js";import"./isObject-Cga3o-qK.js";import"./debounce-8AUJtK1E.js";import"./useOsdkClient-DA4RLwcd.js";import"./tick-BF0KiDZu.js";import"./DropdownField-azDKl2Hy.js";import"./isEqual-DEFCBL8A.js";import"./_baseIsEqual-vKOwFDyn.js";import"./withOsdkMetrics-CHGqLnXT.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
