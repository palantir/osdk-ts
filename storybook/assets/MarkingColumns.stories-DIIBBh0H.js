import{f as p,j as e}from"./iframe-DlEUhHi7.js";import{O as i}from"./object-table-DzZUmoft.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CBMbmU_2.js";import"./index-BdObmdSk.js";import"./Dialog-BRxuTM7c.js";import"./cross-qXDV-79n.js";import"./svgIconContainer-Bju_1rFh.js";import"./useBaseUiId-tb0rTi4h.js";import"./InternalBackdrop-Dj4rbrk1.js";import"./composite-C8IR1RxG.js";import"./index-BZc9O5Mh.js";import"./index-BetcjBuf.js";import"./index-LGLGISh5.js";import"./useEventCallback-qQtofjUs.js";import"./SkeletonBar-DVU3TCkY.js";import"./LoadingCell-D9sJxZss.js";import"./ColumnConfigDialog-BWyNlDY6.js";import"./DraggableList-Dofm2fFK.js";import"./search-DpAuH-Nq.js";import"./Input-LD__uDdD.js";import"./useControlled-DUY1KYlM.js";import"./Button-B-c1jfrq.js";import"./small-cross-CReZphMa.js";import"./ActionButton-DcjyntQn.js";import"./Checkbox-D0qtxLN5.js";import"./useValueChanged-D-FJ2lNx.js";import"./CollapsiblePanel-BGvjwfhf.js";import"./MultiColumnSortDialog-VYovGg0N.js";import"./MenuTrigger-DUnIRnsx.js";import"./CompositeItem-Ds-80rJN.js";import"./ToolbarRootContext-B2EyZNnQ.js";import"./getDisabledMountTransitionStyles-COXtAQgb.js";import"./getPseudoElementBounds-Ca9OCr_g.js";import"./chevron-down-DMneEgPP.js";import"./index-BpuBCpUI.js";import"./error-CpjEBkuC.js";import"./BaseCbacBanner-Cdn9GJ3S.js";import"./makeExternalStore-CQqAo0Kp.js";import"./Tooltip-B7ze2o3f.js";import"./PopoverPopup-CmFEZPXr.js";import"./Select-CRKcgbl8.js";import"./useOsdkClient-RXiRMbJA.js";import"./tick-554cqJa-.js";import"./DropdownField-Et1bzqkY.js";import"./useDebouncedCallback-1RUstQeW.js";import"./isEqual-CK8CnT9X.js";import"./_baseIsEqual-B3kSfXIp.js";import"./stableSerialize-5WUigpEg.js";import"./withOsdkMetrics-CgnK2w0k.js";const ar={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ar as default};
