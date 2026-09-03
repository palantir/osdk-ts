import{f as p,j as e}from"./iframe-j4hxb_Xi.js";import{O as i}from"./object-table-BI4xWz0u.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Do_lUb4H.js";import"./Table-BI73JjMi.js";import"./index-C2vlaWfk.js";import"./Dialog-C_3vuBpX.js";import"./cross-V5IOmaZQ.js";import"./svgIconContainer-ML2hE1ik.js";import"./useBaseUiId-D5s976C8.js";import"./InternalBackdrop-DGaRLsH3.js";import"./composite-8AKIVtYF.js";import"./index-BMB9qZtR.js";import"./index-C7oNg6UJ.js";import"./index-BsInuNtZ.js";import"./useEventCallback-BYH_LbXE.js";import"./SkeletonBar-B-YlJ_Tc.js";import"./LoadingCell-C_oDDOx4.js";import"./ColumnConfigDialog-Cr50Jo2W.js";import"./DraggableList-7T1t1X7E.js";import"./search-DCDkF9iN.js";import"./Input-D8fXhbo_.js";import"./useControlled-BmMzvKVf.js";import"./isEqual-Bfj0ieG6.js";import"./isObject-vOg4RMPu.js";import"./Button-GEQzl9-M.js";import"./ActionButton-CJmqd-UA.js";import"./Checkbox-DgnqXkSI.js";import"./useValueChanged-Bcv4gkmO.js";import"./CollapsiblePanel-BwNh9QZO.js";import"./MultiColumnSortDialog-BFva9vCq.js";import"./MenuTrigger-CR7CYImL.js";import"./CompositeItem-DUNLWbkZ.js";import"./ToolbarRootContext-DnOPaxZU.js";import"./getDisabledMountTransitionStyles-BgogkKAD.js";import"./getPseudoElementBounds-O7D4CDxi.js";import"./chevron-down-RSAghytU.js";import"./index-UqWZCDPB.js";import"./error-C23fB5PK.js";import"./BaseCbacBanner-CmEjL_8O.js";import"./makeExternalStore-BjQ810PL.js";import"./Tooltip-B9Z7ru36.js";import"./PopoverPopup-DZbQlYli.js";import"./toNumber-A7aHzW2i.js";import"./useOsdkClient-DpQS_r_L.js";import"./tick-G3Pq2ACj.js";import"./DropdownField-DqY3ktwA.js";import"./withOsdkMetrics-BYBtK9LJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
