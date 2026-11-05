import{f as p,j as e}from"./iframe-22sgaWxv.js";import{O as i}from"./object-table-Drof33nU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BCezGTuh.js";import"./index-BHBAGN-s.js";import"./Dialog-DLhbH3bQ.js";import"./cross-BCwFnrJl.js";import"./svgIconContainer-BsVzcm6E.js";import"./useBaseUiId-CUViOtvX.js";import"./InternalBackdrop-QEZTLwT8.js";import"./composite-BTcqQx01.js";import"./index-C-ayeZqv.js";import"./index-H6bUqLk6.js";import"./index-BCMcuhrC.js";import"./useEventCallback-C-98vcNs.js";import"./SkeletonBar-DOTAFrq-.js";import"./LoadingCell-DoU3qEW4.js";import"./ColumnConfigDialog-B3QGycQ2.js";import"./DraggableList-Vthwf9hx.js";import"./search-D5hLmpm3.js";import"./Input-kE2itjKl.js";import"./useControlled-9hZ525gD.js";import"./Button-Tlz3cekG.js";import"./small-cross-BwMnv4hk.js";import"./ActionButton-Boe4PNYh.js";import"./Checkbox-BEcD_rA7.js";import"./useValueChanged-Cvkbwiqt.js";import"./CollapsiblePanel-CUWh3so1.js";import"./MultiColumnSortDialog-D_SHrlea.js";import"./MenuTrigger-cTtpbi20.js";import"./CompositeItem-C3Np8qjM.js";import"./ToolbarRootContext-D1WVL4z4.js";import"./getDisabledMountTransitionStyles-p4mAODiY.js";import"./getPseudoElementBounds-BLk4lSoh.js";import"./chevron-down-BNxx7PXr.js";import"./index-DzYoB3O-.js";import"./error-DkFYgz--.js";import"./BaseCbacBanner-DPu0oi4D.js";import"./makeExternalStore-D5ROsNAp.js";import"./Tooltip-CX0Gi3dR.js";import"./isObject-DGvkKeJp.js";import"./debounce-ASo6GI3m.js";import"./useOsdkClient-B3I5yVwR.js";import"./tick-DS5XO6DI.js";import"./DropdownField-B0HjgQSf.js";import"./isEqual-0dAV4SyG.js";import"./_baseIsEqual-Da6PSZBn.js";import"./withOsdkMetrics-BykLiONE.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
