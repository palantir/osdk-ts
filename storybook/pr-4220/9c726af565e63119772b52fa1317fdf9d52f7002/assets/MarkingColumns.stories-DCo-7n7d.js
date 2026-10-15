import{f as p,j as e}from"./iframe-C35uGTor.js";import{O as i}from"./object-table-BMvG9R9k.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-F3EFc52l.js";import"./Table-SEATd5pV.js";import"./index-Dc24XYXq.js";import"./Dialog-Dq6arkge.js";import"./cross-C0_UaP8E.js";import"./svgIconContainer-BAWtvYDY.js";import"./useBaseUiId-D-k3osuz.js";import"./InternalBackdrop-Bs1cpNOT.js";import"./composite-C_6udYfh.js";import"./index-DRW9cQCp.js";import"./index-Dgf1QELO.js";import"./index-Ca4jpz09.js";import"./useEventCallback-Cf-0ooWK.js";import"./SkeletonBar-CPo4uDcQ.js";import"./LoadingCell-Cnax0wEX.js";import"./ColumnConfigDialog-BP1UEYm7.js";import"./DraggableList-Dr_uKQUn.js";import"./search-Omk4RfaQ.js";import"./Input-CtTyrSxh.js";import"./useControlled-jxUnEnFw.js";import"./Button-BAtng8PD.js";import"./small-cross-93J9MDZj.js";import"./ActionButton-DHb-zf9N.js";import"./Checkbox-v-LG2738.js";import"./useValueChanged-Cx6EL_oM.js";import"./CollapsiblePanel-sHrc_PW6.js";import"./MultiColumnSortDialog-vnZWR3AB.js";import"./MenuTrigger-9YjlyO6G.js";import"./CompositeItem-Cst7sX19.js";import"./ToolbarRootContext-Do8xptiZ.js";import"./getDisabledMountTransitionStyles-Cd_D1FIL.js";import"./getPseudoElementBounds-BSTYbltd.js";import"./chevron-down-CyTbMtgy.js";import"./index-CQ0b7fbb.js";import"./error-BP_tygeo.js";import"./BaseCbacBanner-CN7_0G8f.js";import"./makeExternalStore-ROa8cnCZ.js";import"./Tooltip-cI_3eo19.js";import"./PopoverPopup-BOg0baOJ.js";import"./debounce-Csr1B-r9.js";import"./useOsdkClient-DCbEGB5n.js";import"./tick-CP39Td_J.js";import"./DropdownField-DItTqqK3.js";import"./isEqual-BmCMSC_D.js";import"./withOsdkMetrics-BEBYlr-F.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
