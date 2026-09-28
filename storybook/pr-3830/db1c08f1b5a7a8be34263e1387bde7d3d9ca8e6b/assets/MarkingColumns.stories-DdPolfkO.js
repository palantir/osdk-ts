import{f as p,j as e}from"./iframe-BRm4vCFN.js";import{O as i}from"./object-table-D8m4l83f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B8qSzsyn.js";import"./Table-CaY8BvM5.js";import"./index-B7ENbfBC.js";import"./Dialog-btN0iOgg.js";import"./cross-DPDrF0U4.js";import"./svgIconContainer-OFMjb_Rs.js";import"./useBaseUiId-B7fRGxsO.js";import"./InternalBackdrop-BaGiZk1Y.js";import"./composite-wKCobVJO.js";import"./index-CnpvZLeY.js";import"./index-CpqlfQCh.js";import"./index-CWfM76cW.js";import"./useEventCallback-JHTQureV.js";import"./SkeletonBar-C6qn1HDI.js";import"./LoadingCell-Djw5Rm1L.js";import"./ColumnConfigDialog-DxbEr4NX.js";import"./DraggableList-I3NGg1TF.js";import"./search-ntbcNAhn.js";import"./Input-BpwNJM-I.js";import"./useControlled-CEOSMcVQ.js";import"./isEqual-C63Qhdu7.js";import"./isObject-CrHRd0xf.js";import"./Button-Bb-87jsh.js";import"./ActionButton-DD0zQbbI.js";import"./Checkbox-Dh5u6bQZ.js";import"./useValueChanged--EnHqbhq.js";import"./CollapsiblePanel-DWM-Z1Ph.js";import"./MultiColumnSortDialog-Bpnx2HZs.js";import"./MenuTrigger-BrBHYI-t.js";import"./CompositeItem-BNvDCPgA.js";import"./ToolbarRootContext-D1wgTrKR.js";import"./getDisabledMountTransitionStyles-D1IPv3z8.js";import"./getPseudoElementBounds-A6c4Mra_.js";import"./chevron-down-Cm7ysla1.js";import"./index-rovaKXjR.js";import"./error-BSqFGqFy.js";import"./BaseCbacBanner-CGSGQvZ8.js";import"./makeExternalStore-BzfExdb1.js";import"./Tooltip-CohfXHDn.js";import"./PopoverPopup-BggDBR68.js";import"./toNumber-DHFLqzDS.js";import"./useOsdkClient-BDarQYfA.js";import"./tick-bUP2FK1I.js";import"./DropdownField-Dgc_bssU.js";import"./withOsdkMetrics-B9Su6DFN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
