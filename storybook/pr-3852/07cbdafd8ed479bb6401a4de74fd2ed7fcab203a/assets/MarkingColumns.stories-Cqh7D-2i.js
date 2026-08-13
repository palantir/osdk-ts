import{f as p,j as e}from"./iframe-Ct3jhQ3b.js";import{O as i}from"./object-table-DcoD00Uh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-COHmdbwf.js";import"./Table-DTuKtZkW.js";import"./index-CgPM3gA5.js";import"./Dialog-gEwPqwK4.js";import"./cross-He-PHYhY.js";import"./svgIconContainer-DvsmJFgi.js";import"./useBaseUiId-CJ7H8A6B.js";import"./InternalBackdrop-CUWmOGHP.js";import"./composite-vVcQOeOT.js";import"./index-CCZpef3e.js";import"./index-C89TlbH2.js";import"./index-CDi56eog.js";import"./useEventCallback-B6cGOJ6l.js";import"./SkeletonBar-xKpo9Z1Z.js";import"./LoadingCell-DOixDFMt.js";import"./ColumnConfigDialog-BGhaL0oB.js";import"./DraggableList-kARAxkem.js";import"./search-DmHt-KVR.js";import"./Input-hJWV4A37.js";import"./useControlled-CrEjWPz9.js";import"./isEqual-m4kELLk6.js";import"./isObject-BedEVD4j.js";import"./Button-BDlShN-U.js";import"./ActionButton-C4F15PRz.js";import"./Checkbox-4csc6eJV.js";import"./useValueChanged-BCXDfKlq.js";import"./CollapsiblePanel-9yNoItXE.js";import"./MultiColumnSortDialog-agoS4Ejo.js";import"./MenuTrigger-DsmfFaf8.js";import"./CompositeItem-B3RwG7sH.js";import"./ToolbarRootContext-CAsR0ulO.js";import"./getDisabledMountTransitionStyles-BGm_GsgA.js";import"./getPseudoElementBounds-BYnhVZJr.js";import"./chevron-down-Cr-g2sf1.js";import"./index-DyYuYiTt.js";import"./error-DbtsfcJt.js";import"./BaseCbacBanner-DvPWyofK.js";import"./makeExternalStore-B7M8VDNS.js";import"./Tooltip-BRvtEqVQ.js";import"./PopoverPopup-Xa7WFA5W.js";import"./toNumber-fhQmxxZE.js";import"./useOsdkClient-DDGUV8GT.js";import"./tick-Cr1zVoZU.js";import"./DropdownField-CqA69UfO.js";import"./withOsdkMetrics-fRAXYRw-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
