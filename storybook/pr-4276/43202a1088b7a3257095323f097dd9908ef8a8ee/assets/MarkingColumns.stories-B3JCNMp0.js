import{f as p,j as e}from"./iframe-BeH6Kgtk.js";import{O as i}from"./object-table-C7FluA5B.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DIEhRyUP.js";import"./Table-D525YSUk.js";import"./index-DFSFBHkF.js";import"./Dialog-BCu81KDD.js";import"./cross-CX4SHNo3.js";import"./svgIconContainer-Bb-RAJkY.js";import"./useBaseUiId-CtZE3HDc.js";import"./InternalBackdrop-tGSxu3X-.js";import"./composite-oEq7yTUS.js";import"./index-Bi2hqiVi.js";import"./index-DgDaT3k8.js";import"./index-B83GxJH9.js";import"./useEventCallback-C6Ywg3fj.js";import"./SkeletonBar-Cef5YzUY.js";import"./LoadingCell-CQuJ0e2d.js";import"./ColumnConfigDialog-Dx1mF4-4.js";import"./DraggableList-vejvpVIl.js";import"./search-CAOX7A7K.js";import"./Input-RgiEvmaC.js";import"./useControlled-Bdo1gXa6.js";import"./Button-Cy9t27DN.js";import"./small-cross-BIL5QE4b.js";import"./ActionButton-Dn_I3vRk.js";import"./Checkbox-BnU9aEnD.js";import"./useValueChanged-GpyRtBxV.js";import"./CollapsiblePanel-DEBXY80q.js";import"./MultiColumnSortDialog-AOlm58uI.js";import"./MenuTrigger-pGKSNFFq.js";import"./CompositeItem-BFteZ_HC.js";import"./ToolbarRootContext-Dd5p2hpI.js";import"./getDisabledMountTransitionStyles-TI3kKTby.js";import"./getPseudoElementBounds-XJNejySA.js";import"./chevron-down-BQRyOpPG.js";import"./index-BxZQFTTq.js";import"./error-Dyg0hO9Y.js";import"./BaseCbacBanner-C7opKen9.js";import"./makeExternalStore-CtDF7lCi.js";import"./Tooltip-BqIx27JT.js";import"./isObject-raxYKDb4.js";import"./debounce-DQFTeh52.js";import"./useOsdkClient-8GVphyRP.js";import"./tick-CnxOlA-z.js";import"./DropdownField-BjkAOtL1.js";import"./isEqual-CkU-cJx5.js";import"./_baseIsEqual-BNTB2wLf.js";import"./withOsdkMetrics-Dy2obrep.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
