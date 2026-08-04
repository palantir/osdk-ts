import{f as p,j as e}from"./iframe-TwL9Rdcu.js";import{O as i}from"./object-table-DOmpi9ec.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dtd1x7f0.js";import"./Table-D157Dw9p.js";import"./index-B37Vkn7p.js";import"./Dialog-BPOvzZvq.js";import"./cross-DEXmuJ6S.js";import"./svgIconContainer-Cn5jlibP.js";import"./useBaseUiId-CA6_Pr4t.js";import"./InternalBackdrop-CxDNG576.js";import"./composite-Aws6OWjh.js";import"./index-DiSmLK3F.js";import"./index-BzhMbvob.js";import"./index-Oca42Qm_.js";import"./useEventCallback-DT0sCX5x.js";import"./SkeletonBar-CSWMLadG.js";import"./LoadingCell-Ck4mXGmE.js";import"./ColumnConfigDialog-DqZvcT84.js";import"./DraggableList-DXDZhqMb.js";import"./search-M01QHkXX.js";import"./Input-D1m7PFdq.js";import"./useControlled-Ee5pocfV.js";import"./isEqual-S7BEPodu.js";import"./isObject-D04Zr0Ej.js";import"./Button-93iZ1g0B.js";import"./ActionButton-Bl3Bz7Yc.js";import"./Checkbox-7MnoqMPv.js";import"./useValueChanged-BMITbowe.js";import"./CollapsiblePanel-GG2tw--5.js";import"./MultiColumnSortDialog-jEPlSRTE.js";import"./MenuTrigger-UQ3lmTDq.js";import"./CompositeItem-DDQiXXk3.js";import"./ToolbarRootContext-3L1WJeQb.js";import"./getDisabledMountTransitionStyles-CnFJwfEc.js";import"./getPseudoElementBounds-DtKiTUz6.js";import"./chevron-down-CfEskrRU.js";import"./index-ClR5kgm1.js";import"./error-3oWabdkP.js";import"./BaseCbacBanner-O7P0tRBU.js";import"./makeExternalStore-BX0FhRjZ.js";import"./Tooltip-BKi7jcww.js";import"./PopoverPopup-DMOPdfl-.js";import"./toNumber-BZugkDQH.js";import"./useOsdkClient-BcYS5GMf.js";import"./tick-vtzmVJ8o.js";import"./DropdownField-CyncprO9.js";import"./withOsdkMetrics-DF9gmOzI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
