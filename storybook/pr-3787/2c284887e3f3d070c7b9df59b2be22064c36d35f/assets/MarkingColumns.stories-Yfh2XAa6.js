import{f as p,j as e}from"./iframe-COpzlCaB.js";import{O as i}from"./object-table-DJ92aS6o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BkdBjdKP.js";import"./Table-B_uNBNPU.js";import"./index-C84ec9Pj.js";import"./Dialog-CxYLECuh.js";import"./cross-5K3lKZgy.js";import"./svgIconContainer-CIaQ8xsd.js";import"./useBaseUiId-DFFRH3M1.js";import"./InternalBackdrop-BGR9QnKp.js";import"./composite-D23jvVzu.js";import"./index-B9im3oSs.js";import"./index-BRjWtFt3.js";import"./index-Dc7tlAZa.js";import"./useEventCallback-DBecqAz1.js";import"./SkeletonBar-BTUNJLvy.js";import"./LoadingCell-BloyYvyP.js";import"./ColumnConfigDialog-KmMC_kSL.js";import"./DraggableList-D5KaB0DV.js";import"./search-N-S2SVsa.js";import"./Input-C6sS8Woo.js";import"./useControlled-CbqA1NEj.js";import"./isEqual-DNTJKOQe.js";import"./isObject-B1hsr0CW.js";import"./Button-DI3ND7oX.js";import"./ActionButton-CuQ7ojxa.js";import"./Checkbox-DM3ynsaz.js";import"./useValueChanged-Cdfs0bfp.js";import"./CollapsiblePanel-B9zex5wE.js";import"./MultiColumnSortDialog-CrKVXV03.js";import"./MenuTrigger-CYdE5rJl.js";import"./CompositeItem-dCINd5Kj.js";import"./ToolbarRootContext-q4CS8Gcs.js";import"./getDisabledMountTransitionStyles-BRgnArrH.js";import"./getPseudoElementBounds-CMpcS53e.js";import"./chevron-down-BLPE-Xtj.js";import"./index-q7IUoNRd.js";import"./error-DyfqkQ_Z.js";import"./BaseCbacBanner-OBrHu_gM.js";import"./makeExternalStore-BOVYqmIl.js";import"./Tooltip-0w7WZ6Hp.js";import"./PopoverPopup-P_j5iR6u.js";import"./toNumber-B-aiQ8lU.js";import"./useOsdkClient-BVs-JKNI.js";import"./tick-CjyMGD25.js";import"./DropdownField-JhM8pWuv.js";import"./withOsdkMetrics-Dr6Y0hve.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
