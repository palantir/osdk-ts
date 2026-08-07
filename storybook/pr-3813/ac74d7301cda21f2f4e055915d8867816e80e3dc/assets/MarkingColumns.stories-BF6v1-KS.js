import{f as p,j as e}from"./iframe-BN9OJAgN.js";import{O as i}from"./object-table-BtXg9Jt9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DTgW9lTk.js";import"./Table-Bm6ShkKY.js";import"./index-L-2VxvDT.js";import"./Dialog-BX2TIW55.js";import"./cross-ByA-dAnm.js";import"./svgIconContainer-hHjG4XJm.js";import"./useBaseUiId-CFnH6spW.js";import"./InternalBackdrop-C4trdGf5.js";import"./composite-B_FYTcr6.js";import"./index-XU0FUMPK.js";import"./index-BVudBLeJ.js";import"./index-CEvXZPz0.js";import"./useEventCallback--6m9_KS5.js";import"./SkeletonBar-C4QQNdI-.js";import"./LoadingCell-CCeFVwer.js";import"./ColumnConfigDialog-CjJ-0VBU.js";import"./DraggableList-616ntRZ-.js";import"./search-BpHAJh9z.js";import"./Input-BRu8vzsZ.js";import"./useControlled-CD4tqtci.js";import"./isEqual-DBlDHhPX.js";import"./isObject-BcXP8hna.js";import"./Button-DF2G5VEF.js";import"./ActionButton-ChDdKwqd.js";import"./Checkbox-tcCMRhRc.js";import"./useValueChanged-B2FQR58s.js";import"./CollapsiblePanel-DPsWFXth.js";import"./MultiColumnSortDialog-Bxpec3cA.js";import"./MenuTrigger-DyQXTKfV.js";import"./CompositeItem-3je88er8.js";import"./ToolbarRootContext-D9x68E4s.js";import"./getDisabledMountTransitionStyles-7a1Vlybt.js";import"./getPseudoElementBounds-DZodAcaj.js";import"./chevron-down-DEEy7cZJ.js";import"./index-BIb_aCOQ.js";import"./error-ViRMI7b4.js";import"./BaseCbacBanner-DkAgQMFT.js";import"./makeExternalStore-DH_VyjIn.js";import"./Tooltip-DNViEkQt.js";import"./PopoverPopup-DZCedgbo.js";import"./toNumber-4vsy98Eg.js";import"./useOsdkClient-DYpWW1q8.js";import"./tick-D_c2nCc1.js";import"./DropdownField-BEVlwcvm.js";import"./withOsdkMetrics-D2gdZo_l.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
