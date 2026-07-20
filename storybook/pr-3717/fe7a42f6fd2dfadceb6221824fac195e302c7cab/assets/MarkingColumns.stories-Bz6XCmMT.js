import{f as p,j as e}from"./iframe-kEXttPrj.js";import{O as i}from"./object-table-0MIo_6Sc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJYrSKst.js";import"./Table-I_3QcKU9.js";import"./index-DMqv5uwI.js";import"./Dialog-DOe7j3Sx.js";import"./cross-CbZpIeeo.js";import"./svgIconContainer-CCezkQSK.js";import"./useBaseUiId-DK-jOoPS.js";import"./InternalBackdrop-D3ZvJAJz.js";import"./composite-Csa0CmWK.js";import"./index-C0DdVeXZ.js";import"./index-B2GAgXCG.js";import"./index-CW-Fm-5S.js";import"./useEventCallback-VaHJRmXc.js";import"./SkeletonBar-CjXdDZfC.js";import"./LoadingCell-BfSwA2o7.js";import"./ColumnConfigDialog-BApoVLRn.js";import"./DraggableList-DgPFEf9J.js";import"./search-C15Jk0fn.js";import"./Input-BZuor96n.js";import"./useControlled-3Mte2FdL.js";import"./isEqual-DmyfgjcA.js";import"./isObject-BI_ppbPO.js";import"./Button-CenD0bzg.js";import"./ActionButton-DF8mIS_c.js";import"./Checkbox-TscXg7Pq.js";import"./useValueChanged-DZg1QFEW.js";import"./CollapsiblePanel-B1vu12kO.js";import"./MultiColumnSortDialog-NOqwcBJS.js";import"./MenuTrigger-BFWjx5xE.js";import"./CompositeItem-D1ks_FDg.js";import"./ToolbarRootContext-Dfgo4ZFi.js";import"./getDisabledMountTransitionStyles-VQYjUlYt.js";import"./getPseudoElementBounds-BTzCvEd1.js";import"./chevron-down-DDhDIBpv.js";import"./index-D7SejJKZ.js";import"./error-B8yv3Sxe.js";import"./BaseCbacBanner-hSgTL9TS.js";import"./makeExternalStore-bAuKHDUj.js";import"./Tooltip-BtidPf63.js";import"./PopoverPopup-0rjXswB5.js";import"./toNumber-BMvwO_Tb.js";import"./useOsdkClient-QIryAGdw.js";import"./tick-ix1uygb2.js";import"./DropdownField-qu2AnMlj.js";import"./withOsdkMetrics-DjZwTYaT.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
