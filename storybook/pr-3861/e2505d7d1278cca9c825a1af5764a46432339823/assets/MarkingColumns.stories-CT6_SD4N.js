import{f as p,j as e}from"./iframe-BI8s_LEM.js";import{O as i}from"./object-table-CL0BkB0n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2UIxwTHe.js";import"./Table-BmRYdzGD.js";import"./index-Cdoej1rc.js";import"./Dialog-D_9xz-Le.js";import"./cross-BMpmO8GH.js";import"./svgIconContainer-BP-rj0xG.js";import"./useBaseUiId-BeAhLVth.js";import"./InternalBackdrop-DhaouQlo.js";import"./composite-DBRFQf_M.js";import"./index-BYp5baBX.js";import"./index-D73snmm6.js";import"./index-Hn1Gkz3-.js";import"./useEventCallback-DSgoeTO5.js";import"./SkeletonBar-Qw-6NH1E.js";import"./LoadingCell-B0ZdTOu4.js";import"./ColumnConfigDialog-h9w9BMXO.js";import"./DraggableList-DFgK7wxZ.js";import"./search-Du5SutCf.js";import"./Input-BsZHTTke.js";import"./useControlled-C9KhyXIr.js";import"./Button-CleaIGAw.js";import"./small-cross-DqUYI6od.js";import"./ActionButton-BDTQjYJK.js";import"./Checkbox-3OUMqCMb.js";import"./useValueChanged-B0lFUv3p.js";import"./CollapsiblePanel-AqkBPfsf.js";import"./MultiColumnSortDialog-CMRqJAHC.js";import"./MenuTrigger-AzYhSgWT.js";import"./CompositeItem-LJzGPuj_.js";import"./ToolbarRootContext-DK00e0CZ.js";import"./getDisabledMountTransitionStyles-BaieG3-u.js";import"./getPseudoElementBounds-BQKwbblt.js";import"./chevron-down-C-PF6_L5.js";import"./index-A6vp9cHu.js";import"./error-BKT0KUzG.js";import"./BaseCbacBanner-B1-7JbJW.js";import"./makeExternalStore-CASfG9zJ.js";import"./Tooltip-zQvEcTLq.js";import"./PopoverPopup-Bj-c1PFc.js";import"./debounce-CKraKVTC.js";import"./useOsdkClient-C2fsiA5n.js";import"./tick-BswIpFNK.js";import"./DropdownField-DIawgDE5.js";import"./isEqual-Dt2hEEhg.js";import"./withOsdkMetrics-BNQD1U6q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
