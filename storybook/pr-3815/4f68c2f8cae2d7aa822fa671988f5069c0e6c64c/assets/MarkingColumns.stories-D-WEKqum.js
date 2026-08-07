import{f as p,j as e}from"./iframe-C-Y1wjJM.js";import{O as i}from"./object-table-Bx1crVHY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-b8tFyS_a.js";import"./Table-Bs_L9rAH.js";import"./index-palz5mvc.js";import"./Dialog-BQTFYCzy.js";import"./cross-jR8r3tka.js";import"./svgIconContainer-W7Zl3wV8.js";import"./useBaseUiId-CxDbvFq6.js";import"./InternalBackdrop-CpOky5e4.js";import"./composite-Cckq2u_r.js";import"./index-DKGXCLet.js";import"./index-C8gKOTgg.js";import"./index-DXnvpcJM.js";import"./useEventCallback-OK9Rben9.js";import"./SkeletonBar-BCZp7KCG.js";import"./LoadingCell-CIQYPwGZ.js";import"./ColumnConfigDialog-CKIq9CIu.js";import"./DraggableList-DPDslf4c.js";import"./search-DvmlRYay.js";import"./Input-m5wtd4u0.js";import"./useControlled-DwK6H2wz.js";import"./small-cross-DyaK5Iv6.js";import"./Button-DH9ybcSz.js";import"./ActionButton-Dge8xgOI.js";import"./Checkbox-Ca1WqOlC.js";import"./useValueChanged-OVehMJjp.js";import"./CollapsiblePanel-ficPLDYv.js";import"./MultiColumnSortDialog-CuAkxUhM.js";import"./MenuTrigger-DXU17Ywv.js";import"./CompositeItem-Uzh8PcHE.js";import"./ToolbarRootContext-BChtM849.js";import"./getDisabledMountTransitionStyles-D-PPI8Oc.js";import"./getPseudoElementBounds-CNui0wgJ.js";import"./chevron-down-BLSDTvXr.js";import"./index-CtCSipxk.js";import"./error-CD-IqKVS.js";import"./BaseCbacBanner-CCTpoFcl.js";import"./makeExternalStore-C-qCxaZl.js";import"./Tooltip-BMZxSNr-.js";import"./PopoverPopup-CiuIO-4c.js";import"./Combobox-BBgoyRWg.js";import"./useOsdkClient-iiSC6jpx.js";import"./tick-BY4Wojmn.js";import"./DropdownField-BDm2jd-y.js";import"./withOsdkMetrics-Dst4AoKO.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
