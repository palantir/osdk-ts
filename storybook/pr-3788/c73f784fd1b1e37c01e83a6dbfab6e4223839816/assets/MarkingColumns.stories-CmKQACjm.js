import{f as p,j as e}from"./iframe-Da9MDiTI.js";import{O as i}from"./object-table-hvAUoQlk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dd6abAIO.js";import"./Table-D9w8xY2h.js";import"./index-Bjs-izmB.js";import"./Dialog-BMLbot9J.js";import"./cross-Ddpno7b6.js";import"./svgIconContainer-BJth7iyz.js";import"./useBaseUiId-BayoovkJ.js";import"./InternalBackdrop-CzcHRs0y.js";import"./composite-BaDdnoh8.js";import"./index-DcIVUlGH.js";import"./index-DKfY6EcW.js";import"./index-BABJwW4T.js";import"./useEventCallback-BUPM0wCF.js";import"./SkeletonBar-BA89NcKp.js";import"./LoadingCell-BvG1pWNr.js";import"./ColumnConfigDialog-DgtSL3SL.js";import"./DraggableList-BLkSctgh.js";import"./search-CZHusTi7.js";import"./Input-BgILf_TN.js";import"./useControlled-3ADGh7jp.js";import"./isEqual-BrsKUsje.js";import"./isObject-DOueF4aQ.js";import"./Button-g9bDBW5N.js";import"./ActionButton-BqLgMeMC.js";import"./Checkbox-Dp74PQJD.js";import"./useValueChanged-CL6nsKU1.js";import"./CollapsiblePanel-OzU7gzyb.js";import"./MultiColumnSortDialog-CSCWSXUH.js";import"./MenuTrigger-B8eDG6ju.js";import"./CompositeItem-C0Jbe1ov.js";import"./ToolbarRootContext-Dc0wNS2-.js";import"./getDisabledMountTransitionStyles-BmSIApxN.js";import"./getPseudoElementBounds-C4CJm2lO.js";import"./chevron-down-CY9Oj2p3.js";import"./index-CBjdGpQ-.js";import"./error-D7APwBuJ.js";import"./BaseCbacBanner-DDOuDFv6.js";import"./makeExternalStore-BEHro4Nx.js";import"./Tooltip-B_NdwVxI.js";import"./PopoverPopup-Cs_ntUEj.js";import"./toNumber-j5nLiGs_.js";import"./useOsdkClient-C-zfD-7k.js";import"./tick-Bhyac6W7.js";import"./DropdownField-Dhg5kbhU.js";import"./withOsdkMetrics-B9D4iGy_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
