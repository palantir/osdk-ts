import{f as p,j as e}from"./iframe-BfP11NvA.js";import{O as i}from"./object-table-CjugmRYR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ar0nMGVE.js";import"./Table-Bi1LYgVR.js";import"./index-BtDjnjzp.js";import"./Dialog-DonJtVW6.js";import"./cross-COrWa_24.js";import"./svgIconContainer-CxA6KOQ9.js";import"./useBaseUiId-B7gorTvD.js";import"./InternalBackdrop-BznIiDAT.js";import"./composite-_14HkfA4.js";import"./index-Yx7vvy63.js";import"./index-BimT9-xO.js";import"./index-DJx2-acM.js";import"./useEventCallback-Bo3zAIbr.js";import"./SkeletonBar-CrHwtUgt.js";import"./LoadingCell-CRN4ygui.js";import"./ColumnConfigDialog-BP_I0gCY.js";import"./DraggableList-CMWiB7CB.js";import"./search-NB8ZSPAF.js";import"./Input-RCL9WojW.js";import"./useControlled-CHjSEWNF.js";import"./isEqual-CCeuNt0t.js";import"./isObject-DIwwZTdB.js";import"./Button-C9Ik4Jdr.js";import"./ActionButton-BY8jrqFK.js";import"./Checkbox-2-ftotcm.js";import"./useValueChanged-DbFPx7-x.js";import"./CollapsiblePanel-DznffW2m.js";import"./MultiColumnSortDialog-BBf8tKOg.js";import"./MenuTrigger-DHt7BKIE.js";import"./CompositeItem-D36geE3c.js";import"./ToolbarRootContext-DH5dsK8B.js";import"./getDisabledMountTransitionStyles-Ozz7nPdo.js";import"./getPseudoElementBounds-CrpflqmA.js";import"./chevron-down-DZOqnKTY.js";import"./index-x1DBPJSn.js";import"./error-CCCFoFwU.js";import"./BaseCbacBanner-2OfszpKN.js";import"./makeExternalStore-D_R0EHxO.js";import"./Tooltip-BS7vvywK.js";import"./PopoverPopup-DO9cZa8-.js";import"./toNumber-D9oDVyIB.js";import"./useOsdkClient-Uu_9Pssb.js";import"./tick-D1Eh9Wqu.js";import"./DropdownField-9gIH2QfH.js";import"./withOsdkMetrics-kOUFMrtB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
