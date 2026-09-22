import{f as p,j as e}from"./iframe-CNVlK6B5.js";import{O as i}from"./object-table-cMgtOXr7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6U9hvSn.js";import"./Table-BrEIPw8j.js";import"./index-BIcFjsCk.js";import"./Dialog-DQ8SwEYJ.js";import"./cross-Cd5yBkhc.js";import"./svgIconContainer-CkEgUKYH.js";import"./useBaseUiId-oIpQHClg.js";import"./InternalBackdrop-BLlX82gh.js";import"./composite-9AJkVSIl.js";import"./index-CRgut8Os.js";import"./index-CRWNiz7H.js";import"./index-bx27PV2G.js";import"./useEventCallback-BYr5JJCz.js";import"./SkeletonBar-C22W37Hx.js";import"./LoadingCell-BMwD9iUu.js";import"./ColumnConfigDialog-EM-7EP-h.js";import"./DraggableList-BlaJIbqd.js";import"./search-CqRM5I4x.js";import"./Input-BcMyy9hm.js";import"./useControlled-CIn-ajlC.js";import"./Button-BTD6ABzp.js";import"./small-cross-DbE0dAvf.js";import"./ActionButton-CeSKu1lp.js";import"./Checkbox-DfJtmB8Q.js";import"./useValueChanged-COVZ159z.js";import"./CollapsiblePanel-Di-Gvidl.js";import"./MultiColumnSortDialog-D5X3n1eV.js";import"./MenuTrigger-d-w37dUG.js";import"./CompositeItem-DhWvIZCc.js";import"./ToolbarRootContext-B65PxelA.js";import"./getDisabledMountTransitionStyles-BQG1c3sQ.js";import"./getPseudoElementBounds-DOWcaHQH.js";import"./chevron-down-D3H5NEc0.js";import"./index-_ZOs9p_u.js";import"./error-Cf_L3Bxv.js";import"./BaseCbacBanner-LGOURMWm.js";import"./makeExternalStore-AThIzlcn.js";import"./Tooltip-BydjewTb.js";import"./PopoverPopup-B9T3QljB.js";import"./debounce-LvB1QRts.js";import"./useOsdkClient-DSUKa8VK.js";import"./tick-hJyc2tqL.js";import"./DropdownField-JZsjxyDw.js";import"./isEqual-CT1fOhI5.js";import"./withOsdkMetrics-oHno8_nm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
