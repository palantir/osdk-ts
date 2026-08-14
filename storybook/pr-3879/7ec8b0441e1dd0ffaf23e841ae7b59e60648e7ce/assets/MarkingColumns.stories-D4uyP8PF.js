import{f as p,j as e}from"./iframe-Brg8J0Ke.js";import{O as i}from"./object-table-hZeo6LTs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-COdZ72nO.js";import"./Table-BA7Eukxq.js";import"./index-COQGlG7M.js";import"./Dialog-Dpe3KvI5.js";import"./cross-Dp_9NLmV.js";import"./svgIconContainer-CyLntXpn.js";import"./useBaseUiId-CrEPTlGa.js";import"./InternalBackdrop-CBy9ibFR.js";import"./composite-DMhIOFCK.js";import"./index-CsKHzp-V.js";import"./index-BFTo3SXS.js";import"./index-5K_31Uqj.js";import"./useEventCallback-CqQAX7QT.js";import"./SkeletonBar-B-Br-cAJ.js";import"./LoadingCell-Cv1tKHkq.js";import"./ColumnConfigDialog-nf2k-ETq.js";import"./DraggableList-CEgOhlWZ.js";import"./search-DHxEqs_E.js";import"./Input-DQYgvQ0f.js";import"./useControlled-fDswUz3Y.js";import"./isEqual-CBqNX-fs.js";import"./isObject-g0d4C94m.js";import"./Button-BOmasYpo.js";import"./ActionButton-BoL1Ad6J.js";import"./Checkbox-B5T3IccL.js";import"./useValueChanged-BYytUOjM.js";import"./CollapsiblePanel-CjSF9Vu7.js";import"./MultiColumnSortDialog-DiJobGuY.js";import"./MenuTrigger-CZinzVD5.js";import"./CompositeItem-6pHUtZM5.js";import"./ToolbarRootContext-UDxMOJnp.js";import"./getDisabledMountTransitionStyles-D--Cx6cu.js";import"./getPseudoElementBounds-m3pFiWCe.js";import"./chevron-down-WgnX3I4t.js";import"./index-2yQ9AWXN.js";import"./error-DsaiNbdM.js";import"./BaseCbacBanner-DyTn3oZP.js";import"./makeExternalStore-B_s6eB60.js";import"./Tooltip-8riLFYLa.js";import"./PopoverPopup-CL5hQeyv.js";import"./toNumber-6L-Q2eKa.js";import"./useOsdkClient-CxAGnIHh.js";import"./tick-BE21jO5W.js";import"./DropdownField-BZE4mokC.js";import"./withOsdkMetrics-D_xYxDWs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
