import{f as p,j as e}from"./iframe-1EZc9Vvz.js";import{O as i}from"./object-table-F4LOopU4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CLuirsTV.js";import"./Table-CnSb0lhx.js";import"./index-BNjxneHe.js";import"./Dialog-CfNkR8cT.js";import"./cross-D233-9JU.js";import"./svgIconContainer-DddMQ667.js";import"./useBaseUiId-C0l4a2Ks.js";import"./InternalBackdrop-DC_5-L4z.js";import"./composite-DZuvf2CH.js";import"./index-wo0YcWBb.js";import"./index-GxQ4mgfe.js";import"./index-kMGF4pB_.js";import"./useEventCallback-CZdhbhrn.js";import"./SkeletonBar-Dp4ro8ef.js";import"./LoadingCell-zWNXnzaU.js";import"./ColumnConfigDialog-BmyLHU72.js";import"./DraggableList-DBWveP6P.js";import"./search-B7Z28YY3.js";import"./Input-CfmhHq2c.js";import"./useControlled-B4wso0gz.js";import"./Button-CyGBEuY5.js";import"./small-cross-C9WXcI7t.js";import"./ActionButton-0NE2jdyP.js";import"./Checkbox-DtYZgvl2.js";import"./useValueChanged-CpaHtHLE.js";import"./CollapsiblePanel-kRaCp6lQ.js";import"./MultiColumnSortDialog-C6n7GJqR.js";import"./MenuTrigger-D-uh_MYz.js";import"./CompositeItem-BEhpKQGd.js";import"./ToolbarRootContext-Dy97HIXP.js";import"./getDisabledMountTransitionStyles-CkQXgYap.js";import"./getPseudoElementBounds-BKtB6fyV.js";import"./chevron-down-x8-eEnGm.js";import"./index-yOGSpXNC.js";import"./error-DEyOyWdk.js";import"./BaseCbacBanner-C1xBi6T7.js";import"./makeExternalStore-QJC4cEbR.js";import"./Tooltip-DbozeTXw.js";import"./PopoverPopup-CM-aTsvn.js";import"./debounce-COI3MFvy.js";import"./useOsdkClient-CT0P5DcQ.js";import"./tick-DfyQF2qS.js";import"./DropdownField-OVJum9EQ.js";import"./isEqual-BxB9S4Ii.js";import"./withOsdkMetrics-4lDw3Mk4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
