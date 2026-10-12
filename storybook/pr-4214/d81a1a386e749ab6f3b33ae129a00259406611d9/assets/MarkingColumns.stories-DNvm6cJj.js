import{f as p,j as e}from"./iframe-Dm4_VxTL.js";import{O as i}from"./object-table-BRm1lHno.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CLzuKVE9.js";import"./Table-DfRe5ueh.js";import"./index-DPnE6q58.js";import"./Dialog-m-8WzSUm.js";import"./cross-DHCOcICo.js";import"./svgIconContainer-CxeeKywm.js";import"./useBaseUiId-D93ZS7uD.js";import"./InternalBackdrop-BS6ANn3h.js";import"./composite-BJxyUUdi.js";import"./index-BP8U4N-x.js";import"./index-T3ZNqMdJ.js";import"./index-Buyt4UOA.js";import"./useEventCallback-DBHwmb2c.js";import"./SkeletonBar-DhJDhcRv.js";import"./LoadingCell-4LcK7B3q.js";import"./ColumnConfigDialog-CDkZggGo.js";import"./DraggableList-BVEqvSFu.js";import"./search-D_26udtD.js";import"./Input-i9kUqoLh.js";import"./useControlled-B_aXLH8g.js";import"./Button-Bzv6XgGX.js";import"./small-cross-DkNS4-YY.js";import"./ActionButton-CYmCepXw.js";import"./Checkbox-CtXRJU5l.js";import"./useValueChanged-iV7bvjzs.js";import"./CollapsiblePanel-C06Pqxf1.js";import"./MultiColumnSortDialog-BKV7E77X.js";import"./MenuTrigger-0EKBwlog.js";import"./CompositeItem-CY6sGbtS.js";import"./ToolbarRootContext-BL7rYCZY.js";import"./getDisabledMountTransitionStyles-Bt69eCjx.js";import"./getPseudoElementBounds-BBXWE-v2.js";import"./chevron-down-CO8_Do7Y.js";import"./index-c6XPu-54.js";import"./error-D_jQgHrY.js";import"./BaseCbacBanner-BzTMdPsR.js";import"./makeExternalStore-C9EcSKlD.js";import"./Tooltip-uKlMJCx4.js";import"./PopoverPopup-CvZJgDeN.js";import"./debounce-C1x-2e5s.js";import"./useOsdkClient-CcArCLJk.js";import"./tick-CIiArSAU.js";import"./DropdownField-DsklnAii.js";import"./isEqual-CXek_UgW.js";import"./withOsdkMetrics-DBhVFgeV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
