import{f as p,j as e}from"./iframe--ZIBZMJQ.js";import{O as i}from"./object-table-KNrTILkI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BiE66roc.js";import"./Table-CR1ZY04U.js";import"./index-BYKsb6nS.js";import"./Dialog-BxHRHbYX.js";import"./cross-QLCI-etH.js";import"./svgIconContainer-11XNL8gH.js";import"./useBaseUiId-BfJLJwpt.js";import"./InternalBackdrop-z1APkrkS.js";import"./composite-DjX-WyFk.js";import"./index-3A3ZgJ7o.js";import"./index-DTFWeURW.js";import"./index-DJ0hEfax.js";import"./useEventCallback-nes60B0x.js";import"./SkeletonBar-C9ghf2W8.js";import"./LoadingCell-DsEnrI5y.js";import"./ColumnConfigDialog-BgHsIhTT.js";import"./DraggableList-C8jgXyiw.js";import"./search-BetwMOQy.js";import"./Input-wMnSWKve.js";import"./useControlled-CuA5uTC4.js";import"./Button-BVMM1AFw.js";import"./small-cross-AEvgNgh3.js";import"./ActionButton-CSQNhKKa.js";import"./Checkbox-BGlo_J32.js";import"./useValueChanged-B8quW5n_.js";import"./CollapsiblePanel-Cjhv8Ewx.js";import"./MultiColumnSortDialog-Cx4hmGkX.js";import"./MenuTrigger-DVt0mbBR.js";import"./CompositeItem-DMbKryF9.js";import"./ToolbarRootContext-Ca6p-z_B.js";import"./getDisabledMountTransitionStyles-BCrSG_ZI.js";import"./getPseudoElementBounds-CVaq16Fi.js";import"./chevron-down-DEwAc30E.js";import"./index-B5Q5H9tI.js";import"./error-5Bj03CYI.js";import"./BaseCbacBanner-DEoNC6xQ.js";import"./makeExternalStore-LwZ_z8rF.js";import"./Tooltip-Cs5IS7F_.js";import"./PopoverPopup-Br6iExL7.js";import"./debounce-DbrfhfA3.js";import"./useOsdkClient-CZI38WK0.js";import"./tick-D8AASSmE.js";import"./DropdownField-C0LKkg1n.js";import"./isEqual-DKftO1kp.js";import"./withOsdkMetrics-CK4M-mJV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
