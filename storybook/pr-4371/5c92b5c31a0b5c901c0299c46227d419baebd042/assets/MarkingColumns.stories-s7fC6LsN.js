import{f as p,j as e}from"./iframe-BTjo4hoa.js";import{O as i}from"./object-table-COqd_imt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GDbQ32hR.js";import"./Table-BgnMVoEe.js";import"./index-DzoGtTYW.js";import"./Dialog-BRtSRW0Z.js";import"./cross-C7uzIn7X.js";import"./svgIconContainer-Ci_Sec47.js";import"./useBaseUiId-DiKKztfj.js";import"./InternalBackdrop-C3VRyl9V.js";import"./composite-DnWT1pj_.js";import"./index-DzKvpZVF.js";import"./index-B2_XxYKv.js";import"./index-CoDC80rb.js";import"./useEventCallback-C_wT4v2Q.js";import"./SkeletonBar-Been06Cr.js";import"./LoadingCell-D7jqLojg.js";import"./ColumnConfigDialog-Db1F5W2r.js";import"./DraggableList-D8um3vjp.js";import"./search-CK191Oob.js";import"./Input-C7imWp_z.js";import"./useControlled-DrQ-vlJr.js";import"./Button-BcNFr6aW.js";import"./small-cross-Brkvg0Wi.js";import"./ActionButton-tTZpGoIh.js";import"./Checkbox-w9B-XeGE.js";import"./useValueChanged-CDlZmnEp.js";import"./CollapsiblePanel-CEseDnp9.js";import"./MultiColumnSortDialog-DMotawsh.js";import"./MenuTrigger-CwoMUaEm.js";import"./CompositeItem-DqO_c0k8.js";import"./ToolbarRootContext-BmwV-jMO.js";import"./getDisabledMountTransitionStyles-ClFFQye4.js";import"./getPseudoElementBounds-DsfXOZwR.js";import"./chevron-down-Ca_e0izc.js";import"./index-Dnr1AQ4b.js";import"./error-D2oiLEA6.js";import"./BaseCbacBanner-fgj6pUDq.js";import"./makeExternalStore-Ch7iFOMP.js";import"./Tooltip-BPmE3Z94.js";import"./isObject-aHdVZCJ4.js";import"./debounce-mxu17zY-.js";import"./useOsdkClient-BVjPnTI9.js";import"./tick-B6UzXqFV.js";import"./DropdownField-R4jwd9Zw.js";import"./isEqual-BWdJtmMa.js";import"./_baseIsEqual-D9LRnwMe.js";import"./withOsdkMetrics-DsZGAGfW.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
