import{f as p,j as e}from"./iframe-Csm-gXDM.js";import{O as i}from"./object-table-qsvVYomC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2pQoQF5.js";import"./Table-HXI6QEIq.js";import"./index-DSOkxNmo.js";import"./Dialog-CckVRK8t.js";import"./cross-D5yi1h_k.js";import"./svgIconContainer-D8CdVdTF.js";import"./useBaseUiId-BvtcsR9k.js";import"./InternalBackdrop-PYXL4FuF.js";import"./composite-Cd3ThWKg.js";import"./index-D8ourLLB.js";import"./index-DK8dF11E.js";import"./index-Bz_Scb7W.js";import"./useEventCallback-C21WKomU.js";import"./SkeletonBar-ExHoWVim.js";import"./LoadingCell-BCEMfVaW.js";import"./ColumnConfigDialog-C39UVoTn.js";import"./DraggableList-Ccj7NtyF.js";import"./search-BWu2Apub.js";import"./Input-CmyNmn-U.js";import"./useControlled-DlN8ExsH.js";import"./Button-D7cNt94b.js";import"./small-cross-TUSxa0rW.js";import"./ActionButton-D_Y5O8mn.js";import"./Checkbox-a5A6rPqQ.js";import"./useValueChanged-ARdcJoaj.js";import"./CollapsiblePanel-BL19iTTX.js";import"./MultiColumnSortDialog-B-vdD6yG.js";import"./MenuTrigger-B6OZlMQ0.js";import"./CompositeItem-BGdHymE8.js";import"./ToolbarRootContext-6VqAIkkQ.js";import"./getDisabledMountTransitionStyles-f3cbN-9y.js";import"./getPseudoElementBounds-DF7dHhi1.js";import"./chevron-down-K33gEoQm.js";import"./index-VPVf3Zil.js";import"./error-ptWpun4u.js";import"./BaseCbacBanner-CVh7jwjd.js";import"./makeExternalStore-DYZ91XmC.js";import"./Tooltip-CYtmaZF0.js";import"./PopoverPopup-CN55iEhH.js";import"./debounce-BWlbUKap.js";import"./useOsdkClient-D66R8lyo.js";import"./tick-D0oIP5GF.js";import"./DropdownField-C6s4GoHW.js";import"./isEqual-Cc-7thO7.js";import"./withOsdkMetrics-BGSXyq-B.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
