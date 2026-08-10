import{f as p,j as e}from"./iframe-85l92LuF.js";import{O as i}from"./object-table-C0GnWyPt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DoBjmup7.js";import"./Table-BnDs73HF.js";import"./index-BnAHZs62.js";import"./Dialog-C4vZ3GgX.js";import"./cross-DZhpzTXU.js";import"./svgIconContainer-9VtSpFHF.js";import"./useBaseUiId-CGJCIeBX.js";import"./InternalBackdrop-DbM0HmsH.js";import"./composite-CaqHqJ_a.js";import"./index-zU9OYY3O.js";import"./index-OfsSx2G7.js";import"./index-DM4Gegry.js";import"./useEventCallback-DXmG8K1Y.js";import"./SkeletonBar-CWeveXAy.js";import"./LoadingCell-B3KBO1t6.js";import"./ColumnConfigDialog-C5kNLuT3.js";import"./DraggableList-DYFgJu_P.js";import"./search-HhZWfkPx.js";import"./Input-Bs9FOxx_.js";import"./useControlled-D-3f0MFO.js";import"./isEqual-DSvlbf0L.js";import"./isObject-Doo8UJXv.js";import"./Button-C177onMO.js";import"./ActionButton-DRuDmXXC.js";import"./Checkbox-Cf9AR_dN.js";import"./useValueChanged-KsIwXjTG.js";import"./CollapsiblePanel-726yqMtN.js";import"./MultiColumnSortDialog-psYjQqrg.js";import"./MenuTrigger-u-yWNfeM.js";import"./CompositeItem-B2i1pVuI.js";import"./ToolbarRootContext-Bi6RhBRT.js";import"./getDisabledMountTransitionStyles-BaxpKOOx.js";import"./getPseudoElementBounds-DyArnjjm.js";import"./chevron-down-UflpNh7y.js";import"./index-BPWj9FJk.js";import"./error-Cj2vyR90.js";import"./BaseCbacBanner-g8nywgDC.js";import"./makeExternalStore-WSruEEDk.js";import"./Tooltip-cHdPf_B7.js";import"./PopoverPopup-CG85ep_B.js";import"./toNumber-Cs7eH4rR.js";import"./useOsdkClient-C2cGCo7o.js";import"./tick-BCKGptbI.js";import"./DropdownField-BpqvP_BY.js";import"./withOsdkMetrics-SMjq4TP8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
