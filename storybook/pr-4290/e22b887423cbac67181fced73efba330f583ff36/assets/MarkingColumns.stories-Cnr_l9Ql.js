import{f as p,j as e}from"./iframe-CWg4NKfU.js";import{O as i}from"./object-table-CUaJVOeo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CbUGxpFK.js";import"./Table-DGz9J2_I.js";import"./index-BqvDfMBr.js";import"./Dialog-C5eQeW5b.js";import"./cross-C4B5H0O1.js";import"./svgIconContainer-CfhV0gWc.js";import"./useBaseUiId-DspZ6BgH.js";import"./InternalBackdrop-DmUAlLlN.js";import"./composite-BZR9RT0J.js";import"./index-BwmCKmIG.js";import"./index-Dcq7c99I.js";import"./index-Du_LEjCQ.js";import"./useEventCallback-DypMXnSj.js";import"./SkeletonBar-CQQLBMCI.js";import"./LoadingCell-C225-QxH.js";import"./ColumnConfigDialog-DSdc2ZQ0.js";import"./DraggableList-B4wpIJV9.js";import"./search-Csa8UJRl.js";import"./Input-CkLJO43y.js";import"./useControlled-CxeE38RI.js";import"./Button-BMAG39_Z.js";import"./small-cross-BOD3G0f7.js";import"./ActionButton-B764oDl2.js";import"./Checkbox-DHMyW384.js";import"./useValueChanged-BTUZT3Bs.js";import"./CollapsiblePanel-BTrc7yy9.js";import"./MultiColumnSortDialog-Dx3bgxMC.js";import"./MenuTrigger-CxYsElt9.js";import"./CompositeItem-B-7NNP1P.js";import"./ToolbarRootContext-DB3lOv4Z.js";import"./getDisabledMountTransitionStyles-CEpea57p.js";import"./getPseudoElementBounds-gNG5aSRj.js";import"./chevron-down-GiI9wTRT.js";import"./index-BRlDD1gT.js";import"./error-DpR2m3gK.js";import"./BaseCbacBanner-Bqfi7D06.js";import"./makeExternalStore-PjLZ2rt4.js";import"./Tooltip-Dc8Bmckm.js";import"./PopoverPopup-DhNWwJ6-.js";import"./debounce-gYlsUq6V.js";import"./useOsdkClient-DkhSPEoO.js";import"./tick-CXe62fkm.js";import"./DropdownField-D5fuGTjd.js";import"./isEqual-Baxfuxdj.js";import"./withOsdkMetrics-Cl-t5p_W.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
