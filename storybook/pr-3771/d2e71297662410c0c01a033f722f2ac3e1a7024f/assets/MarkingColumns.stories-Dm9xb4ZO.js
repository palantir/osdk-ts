import{f as p,j as e}from"./iframe-B7YfKj_r.js";import{O as i}from"./object-table-MNwgz7c9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-zLh7gNhX.js";import"./Table-CVOmZ436.js";import"./index-CbJ6-D60.js";import"./Dialog-BXtqyTtu.js";import"./cross-0p6Vac4C.js";import"./svgIconContainer-Cz-PKCx4.js";import"./useBaseUiId-BdhKr30W.js";import"./InternalBackdrop-wAKazhys.js";import"./composite-DPXSfqsf.js";import"./index-BnfXHeb4.js";import"./index-s7UAVR_E.js";import"./index-CP1mkO19.js";import"./useEventCallback-x5Alg8Rl.js";import"./SkeletonBar-CoteejN9.js";import"./LoadingCell-KZnN3LUF.js";import"./ColumnConfigDialog-BiK-7kVu.js";import"./DraggableList-F7dQobt1.js";import"./search-Gvi_C_xs.js";import"./Input-CH_xkTTH.js";import"./useControlled-n47txmPS.js";import"./isEqual-B3yB_zqx.js";import"./isObject-HAXozI9M.js";import"./Button-OvcAa909.js";import"./ActionButton-DTC4pJjC.js";import"./Checkbox-BcQmQvKM.js";import"./useValueChanged-dNqqBU5J.js";import"./CollapsiblePanel-BxW4Hb4X.js";import"./MultiColumnSortDialog-CmowWdqV.js";import"./MenuTrigger-C9VeEY2O.js";import"./CompositeItem-DCU6fW8B.js";import"./ToolbarRootContext-BNxVHquj.js";import"./getDisabledMountTransitionStyles-ceQ6Bpps.js";import"./getPseudoElementBounds-BCdtuT11.js";import"./chevron-down-CEfOWXYF.js";import"./index-DO5HNGTZ.js";import"./error-CsyKVqOH.js";import"./BaseCbacBanner-BpD5Op_I.js";import"./makeExternalStore-qy5hPVIr.js";import"./Tooltip-D1b-uI4u.js";import"./PopoverPopup-Dbeile-5.js";import"./toNumber-lfnzEnWR.js";import"./useOsdkClient-DPaJk8c1.js";import"./tick-CAGbRlL2.js";import"./DropdownField-CUs6cqrJ.js";import"./withOsdkMetrics-C_jrvusq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
