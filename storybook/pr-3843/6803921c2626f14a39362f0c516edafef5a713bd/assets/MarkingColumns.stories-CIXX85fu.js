import{f as p,j as e}from"./iframe-CBr1o5iR.js";import{O as i}from"./object-table-CuJQ117O.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C74Zs9Qj.js";import"./Table-Cwim2QE1.js";import"./index-BUnoFm4T.js";import"./Dialog-XfW09A5R.js";import"./cross-COUmmIjR.js";import"./svgIconContainer-BfpQZBbK.js";import"./useBaseUiId-B-WY1xvV.js";import"./InternalBackdrop-BK9t79dJ.js";import"./composite-CjSMUHiF.js";import"./index-Bl6CdKL7.js";import"./index-D63as4vf.js";import"./index-BJUK4yUC.js";import"./useEventCallback-C1Y3Qpyp.js";import"./SkeletonBar-C0jy6f_e.js";import"./LoadingCell-B3zo1-Lq.js";import"./ColumnConfigDialog-DmwsYXZH.js";import"./DraggableList-DwIvpdSM.js";import"./search-DiTFA1qk.js";import"./Input-80YhWUbK.js";import"./useControlled-BvEl2Zx8.js";import"./isEqual-BLVz25eK.js";import"./isObject-D-X-xMro.js";import"./Button-BATNsIkC.js";import"./ActionButton-BfnSKlp2.js";import"./Checkbox-LYqyex1v.js";import"./useValueChanged-CYqSlkeM.js";import"./CollapsiblePanel-BQKTqvEi.js";import"./MultiColumnSortDialog-DAM3B_eA.js";import"./MenuTrigger-BddPBcWL.js";import"./CompositeItem-Bzks3A9T.js";import"./ToolbarRootContext-CAjQ8J-W.js";import"./getDisabledMountTransitionStyles-xPcadgCj.js";import"./getPseudoElementBounds-DhFt5lJS.js";import"./chevron-down-CeEcx8XI.js";import"./index-QEFR3hOZ.js";import"./error-BUZq3IDN.js";import"./BaseCbacBanner-Bomh_2PN.js";import"./makeExternalStore-B8_1tONR.js";import"./Tooltip-DhBv5yUJ.js";import"./PopoverPopup-D1AQ-qyT.js";import"./toNumber-ClLyCc0o.js";import"./useOsdkClient-DdlXi9P2.js";import"./tick-Cz1Ojot5.js";import"./DropdownField-DkcmVDs6.js";import"./withOsdkMetrics-BvV4fjpx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
