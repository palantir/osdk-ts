import{f as p,j as e}from"./iframe-BhDMRuCM.js";import{O as i}from"./object-table-BcZq9KiG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-L4oI3E3x.js";import"./Table-Bs84qWgC.js";import"./index-DBdWVfZr.js";import"./Dialog-C1YcdSal.js";import"./cross-B8g5lC7t.js";import"./svgIconContainer-DvnFME-C.js";import"./useBaseUiId-DsydWgv8.js";import"./InternalBackdrop-BhWEQZmU.js";import"./composite-D7bHzIxr.js";import"./index-DO7zbhCL.js";import"./index-DbLkd8ga.js";import"./index-DqjKS_CZ.js";import"./useEventCallback-CyRRrF3x.js";import"./SkeletonBar-BtXVrziY.js";import"./LoadingCell-Ck5vmbXI.js";import"./ColumnConfigDialog-Cm1OyTA0.js";import"./DraggableList-wstUa1B_.js";import"./search-B2ohHoFm.js";import"./Input-DwhP00hs.js";import"./useControlled-BwLkCqLj.js";import"./Button-CqxlV9z0.js";import"./small-cross-CD_34XFY.js";import"./ActionButton-CeCQyXSo.js";import"./Checkbox-De7MjfoN.js";import"./useValueChanged-BkQAOqLx.js";import"./CollapsiblePanel-4GkiMrTG.js";import"./MultiColumnSortDialog-CGjENZPh.js";import"./MenuTrigger-C0XPDMSP.js";import"./CompositeItem-BUYvwABx.js";import"./ToolbarRootContext-DcA5VE7P.js";import"./getDisabledMountTransitionStyles-CM0ztPZS.js";import"./getPseudoElementBounds-BmSKtFW_.js";import"./chevron-down-CJ-s6D7k.js";import"./index-AAIJN6Ah.js";import"./error-Dy988hUQ.js";import"./BaseCbacBanner-04fZ3ODA.js";import"./makeExternalStore-Bbk8Brxu.js";import"./Tooltip-okrVPvXT.js";import"./isObject-B1y-rg-V.js";import"./debounce-B52DysiE.js";import"./useOsdkClient-BjgYjtiw.js";import"./tick-Dp3tm096.js";import"./DropdownField-BgP4Cuvb.js";import"./isEqual-DnPJMYFH.js";import"./_baseIsEqual-pcV0WeiE.js";import"./withOsdkMetrics-BI0vBwDP.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
