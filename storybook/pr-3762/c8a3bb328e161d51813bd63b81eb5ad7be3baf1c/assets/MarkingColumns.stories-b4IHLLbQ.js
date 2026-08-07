import{f as p,j as e}from"./iframe-MMW7dAwl.js";import{O as i}from"./object-table-Dgt1ZBxM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0ldkDPT.js";import"./Table-CdvMaQRE.js";import"./index-Bsiwb6dc.js";import"./Dialog-BdywO4X-.js";import"./cross-Cwg16VXF.js";import"./svgIconContainer-C6Uusp65.js";import"./useBaseUiId-HrNAgH2Y.js";import"./InternalBackdrop-0Uby9gaG.js";import"./composite-D2ldOjEm.js";import"./index-DB82zLXB.js";import"./index-C7Hp3s63.js";import"./index-D8BO4rXm.js";import"./useEventCallback-DLFdmovf.js";import"./SkeletonBar-CqhfCaj7.js";import"./LoadingCell-pf5zHAth.js";import"./ColumnConfigDialog-CIFV5N9M.js";import"./DraggableList-Clicz9dW.js";import"./search-9a9jkQTY.js";import"./Input-CNsR-Nss.js";import"./useControlled-BCMHUgBa.js";import"./isEqual-Ih5cTHZu.js";import"./isObject-DSXrQIzp.js";import"./Button-CTqxWZbn.js";import"./ActionButton-Cq4L4xrS.js";import"./Checkbox-BVAhjTaX.js";import"./useValueChanged-CvjF7j3z.js";import"./CollapsiblePanel-BfMo-BHq.js";import"./MultiColumnSortDialog-Bmn6qLGE.js";import"./MenuTrigger-DBsleKge.js";import"./CompositeItem--prBu0t1.js";import"./ToolbarRootContext-C9oTADe7.js";import"./getDisabledMountTransitionStyles-DJDJDpp2.js";import"./getPseudoElementBounds-QIVbBUrC.js";import"./chevron-down-CE52ay4J.js";import"./index-BbTzuwcU.js";import"./error-BMLkI-Ib.js";import"./BaseCbacBanner-DWoXo0sK.js";import"./makeExternalStore-CkcVg9cu.js";import"./Tooltip-RUhOEPf4.js";import"./PopoverPopup-XsYEH1Hz.js";import"./toNumber-BniOij62.js";import"./useOsdkClient-CYb4YJag.js";import"./tick-B_RImugy.js";import"./DropdownField-DxdJvq24.js";import"./withOsdkMetrics-CLxjdcRk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
