import{f as p,j as e}from"./iframe-BVSi64oE.js";import{O as i}from"./object-table-BUfh-0cO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BU1z3h6W.js";import"./Table-ByCJSYQA.js";import"./index-CuytY3fR.js";import"./Dialog-DRQ9HBjw.js";import"./cross-BSD5cpOi.js";import"./svgIconContainer-DOaF4Z7d.js";import"./useBaseUiId-CqqBN_pD.js";import"./InternalBackdrop-VS02Mzpv.js";import"./composite-iCAL7ZoF.js";import"./index-XyA3IOnM.js";import"./index-De4RyO4Q.js";import"./index-DUkSDzym.js";import"./useEventCallback-BcINQZvV.js";import"./SkeletonBar-BTvQIWmF.js";import"./LoadingCell-B6ep17sU.js";import"./ColumnConfigDialog-DUAoYgYr.js";import"./DraggableList-DvSKYvbS.js";import"./search-DCcotSfq.js";import"./Input-9e4VYX3J.js";import"./useControlled-oPybVTav.js";import"./Button-BWzl1MwA.js";import"./small-cross-VuonqlHg.js";import"./ActionButton-B1cEW1Xi.js";import"./Checkbox-loiJC6ut.js";import"./useValueChanged-DLdh8GlI.js";import"./CollapsiblePanel-iyQmEFH5.js";import"./MultiColumnSortDialog-CORMbeTK.js";import"./MenuTrigger-CVT83sfS.js";import"./CompositeItem-D9Lav6h_.js";import"./ToolbarRootContext-nMjJNdxo.js";import"./getDisabledMountTransitionStyles-DOr5eM0I.js";import"./getPseudoElementBounds-m7eRXhrV.js";import"./chevron-down-B1I3Tews.js";import"./index-DhvfxU91.js";import"./error-DNoXedqp.js";import"./BaseCbacBanner-DnPVzRzm.js";import"./makeExternalStore-BZP7re_5.js";import"./Tooltip-qdMmTZin.js";import"./isObject-CZdk459R.js";import"./debounce-BY-7KZ0_.js";import"./useOsdkClient-D_sxubmW.js";import"./tick-Bve-lzI5.js";import"./DropdownField-BS4JU7i-.js";import"./isEqual-Dd4C4IGQ.js";import"./_baseIsEqual-B22c0qJi.js";import"./withOsdkMetrics-DG2TDFRU.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
