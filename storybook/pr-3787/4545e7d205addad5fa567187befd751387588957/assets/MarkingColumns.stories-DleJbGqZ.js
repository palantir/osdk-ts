import{f as p,j as e}from"./iframe-B0NustTp.js";import{O as i}from"./object-table-CpOACIfS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D4xsKj5c.js";import"./Table-Dngre3Mp.js";import"./index-DOiiFchC.js";import"./Dialog-pKUPB7lj.js";import"./cross-CEKjUhQ8.js";import"./svgIconContainer-CQZXj9xe.js";import"./useBaseUiId-B_TDEKwC.js";import"./InternalBackdrop-gNpxJOls.js";import"./composite-C2jjYn_P.js";import"./index-Coc0zFCs.js";import"./index-Bmw4N7qN.js";import"./index-BOapOVcJ.js";import"./useEventCallback-C1UfN3c0.js";import"./SkeletonBar-D-eBex8a.js";import"./LoadingCell-B25SV7uj.js";import"./ColumnConfigDialog-Dh6Or5Xn.js";import"./DraggableList-CfyNkyex.js";import"./search-DXHhLrb0.js";import"./Input-DcsvwHOE.js";import"./useControlled-CLhhg_Fr.js";import"./isEqual-BScB_ut0.js";import"./isObject-CGVzGjp9.js";import"./Button-CJxqsXBF.js";import"./ActionButton-hgrjU-94.js";import"./Checkbox-CoEmBael.js";import"./useValueChanged-tZnZZkJ5.js";import"./CollapsiblePanel-B_IVgKA_.js";import"./MultiColumnSortDialog-Bc89SxU8.js";import"./MenuTrigger-CCG3EJZU.js";import"./CompositeItem-D6h2F2k9.js";import"./ToolbarRootContext-jsU1d9Wb.js";import"./getDisabledMountTransitionStyles-BTOFa9ac.js";import"./getPseudoElementBounds-CnUhEVKz.js";import"./chevron-down-TEcuG9YK.js";import"./index-B_huBhV_.js";import"./error-CAUo2CNB.js";import"./BaseCbacBanner-COfmPXcb.js";import"./makeExternalStore-G48Ly8TF.js";import"./Tooltip-DvNEqzAy.js";import"./PopoverPopup-C8XVSsho.js";import"./toNumber-N05UxMUO.js";import"./useOsdkClient-Do6CKeml.js";import"./tick-D3zzyNoI.js";import"./DropdownField-Dnqb6MRw.js";import"./withOsdkMetrics-BPDf5M2B.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
