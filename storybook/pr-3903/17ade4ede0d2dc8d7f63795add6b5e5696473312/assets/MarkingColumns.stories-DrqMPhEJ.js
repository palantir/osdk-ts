import{f as p,j as e}from"./iframe-Co4qWrtI.js";import{O as i}from"./object-table-BMTteqB4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CLLjQro7.js";import"./Table-BjVcsb4-.js";import"./index-DEzmk0WZ.js";import"./Dialog-CxRahfUX.js";import"./cross-SEs1k_Kd.js";import"./svgIconContainer-DaajecJ9.js";import"./useBaseUiId-BAgt3F1o.js";import"./InternalBackdrop-BwGu3z4c.js";import"./composite-DHfKBQ5i.js";import"./index-C2z4NjHs.js";import"./index-CqKJ3sPz.js";import"./index-C_-wbz46.js";import"./useEventCallback-OwSlM4ZE.js";import"./SkeletonBar-DfHQ4TSe.js";import"./LoadingCell-C1t0UbO6.js";import"./ColumnConfigDialog-5bij5Oc4.js";import"./DraggableList-WMBuZ8JT.js";import"./search-DLItUO9A.js";import"./Input-oSQlsB7a.js";import"./useControlled-BInZf-2P.js";import"./Button-sQ3dXKZH.js";import"./small-cross-iZ4ErZEa.js";import"./ActionButton-BLbkXCDW.js";import"./Checkbox-BaktbOjr.js";import"./useValueChanged-XMocqPgo.js";import"./CollapsiblePanel-DO0IOgEL.js";import"./MultiColumnSortDialog-tQ5ixUGv.js";import"./MenuTrigger-HYmZnr0U.js";import"./CompositeItem-DaLiwHmB.js";import"./ToolbarRootContext-DBPxppp8.js";import"./getDisabledMountTransitionStyles-BNu5cLid.js";import"./getPseudoElementBounds-DiLEPQDo.js";import"./chevron-down-CqSMzTaF.js";import"./index-C0XVZZRD.js";import"./error-DAul4oNM.js";import"./BaseCbacBanner-aSfqa7u8.js";import"./makeExternalStore-BVlyj7sn.js";import"./Tooltip-DQKyQxoY.js";import"./PopoverPopup-D4KihDvW.js";import"./debounce-DOmcCNrq.js";import"./useOsdkClient-gLFbYCUi.js";import"./tick-D00iMxE3.js";import"./DropdownField-D_sH1kdW.js";import"./isEqual-CNxbKZsb.js";import"./withOsdkMetrics-CtjXLxVF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
