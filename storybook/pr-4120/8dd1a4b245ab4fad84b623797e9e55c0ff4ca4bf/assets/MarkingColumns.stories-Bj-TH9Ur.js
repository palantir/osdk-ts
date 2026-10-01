import{f as p,j as e}from"./iframe-ixnzYDJA.js";import{O as i}from"./object-table-FxZET0rZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DTj6niTD.js";import"./Table-DE-2Aep2.js";import"./index-CeyubrU3.js";import"./Dialog-BdjFtPMP.js";import"./cross-diJiZoAA.js";import"./svgIconContainer-CiY4wot1.js";import"./useBaseUiId-DzzMqJTn.js";import"./InternalBackdrop-Ck1Tk9Tq.js";import"./composite-CG-xrg6X.js";import"./index-DDQRM4oh.js";import"./index-Dha3uIo_.js";import"./index-EMWBONkK.js";import"./useEventCallback-PB3EUD-p.js";import"./SkeletonBar-DgekIIC1.js";import"./LoadingCell-Bt4RlXdb.js";import"./ColumnConfigDialog-BilUJCsd.js";import"./DraggableList-w52Xvsop.js";import"./search-BrEKKbX6.js";import"./Input-DVH5-_db.js";import"./useControlled-h88iCaOy.js";import"./Button-CvHMYUNQ.js";import"./small-cross-CeiH6pcZ.js";import"./ActionButton-Cht9C36-.js";import"./Checkbox-DeaULkFg.js";import"./useValueChanged-C2vQ6K14.js";import"./CollapsiblePanel-Df0hOccA.js";import"./MultiColumnSortDialog-BMQfLjDo.js";import"./MenuTrigger-ByZbYkPi.js";import"./CompositeItem-DpqiGqIY.js";import"./ToolbarRootContext-CnuOChH-.js";import"./getDisabledMountTransitionStyles-Bd-l4l0c.js";import"./getPseudoElementBounds-De5Rm4GT.js";import"./chevron-down-BsEexgTp.js";import"./index-DmvJAinh.js";import"./error-BPUNwXPy.js";import"./BaseCbacBanner-Bx1q06vG.js";import"./makeExternalStore-B3h5af1n.js";import"./Tooltip-DHz1HFpz.js";import"./PopoverPopup-p0xBFcZz.js";import"./debounce-CeVCi1dD.js";import"./useOsdkClient-BYHlAdtz.js";import"./tick-BZwA7raU.js";import"./DropdownField-Cr6FDOVB.js";import"./isEqual-B1OBGbvK.js";import"./withOsdkMetrics-6vyCE_R0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
