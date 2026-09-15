import{f as p,j as e}from"./iframe-ClXV96ol.js";import{O as i}from"./object-table-CDlU6gyI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GIvq9Fgh.js";import"./Table-Bibtya0A.js";import"./index-BS_93M16.js";import"./Dialog-B1iIak_-.js";import"./cross-DTt9RaJo.js";import"./svgIconContainer-BzIt4vSD.js";import"./useBaseUiId-CeQ_TKpW.js";import"./InternalBackdrop-BOzPpyjM.js";import"./composite-C0Fpedst.js";import"./index-Bkk5ODU2.js";import"./index-CLBh2Emm.js";import"./index-BLOk9I5e.js";import"./useEventCallback-CSmRluI9.js";import"./SkeletonBar-uZMzevzj.js";import"./LoadingCell-DzMkXgiz.js";import"./ColumnConfigDialog-6XQXVFz4.js";import"./DraggableList-Be7V3q25.js";import"./search-C1vc_KSz.js";import"./Input-CzDuGki_.js";import"./useControlled-Bvg52cep.js";import"./Button-DpTMspMt.js";import"./small-cross-DI0ePjHj.js";import"./ActionButton-dXKws96p.js";import"./Checkbox-5mv4ru67.js";import"./useValueChanged-BOSK5wJR.js";import"./CollapsiblePanel-YRb-6JkX.js";import"./MultiColumnSortDialog-sM5RqFSy.js";import"./MenuTrigger-5DVlRwvj.js";import"./CompositeItem-UA3lXUwr.js";import"./ToolbarRootContext-dOFs4mME.js";import"./getDisabledMountTransitionStyles-Dzb55fqZ.js";import"./getPseudoElementBounds-Y4TxrJ4m.js";import"./chevron-down-BtcKUO_9.js";import"./index-BEQyJeIH.js";import"./error-JR-fCQaz.js";import"./BaseCbacBanner-Cw-Inebf.js";import"./makeExternalStore-CMtJRYT9.js";import"./Tooltip-Cp6NNLht.js";import"./PopoverPopup-BfnU-QCF.js";import"./debounce-DTKHa4Ak.js";import"./useOsdkClient-ptfwTLa8.js";import"./tick-CPeibzQx.js";import"./DropdownField-Cf9jSBwq.js";import"./isEqual-D5sVeEdH.js";import"./withOsdkMetrics-CY10LFb-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
