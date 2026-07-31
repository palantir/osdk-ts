import{f as p,j as e}from"./iframe-MF63RCUZ.js";import{O as i}from"./object-table-B1Ypexgb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvQeEzbA.js";import"./Table-BWL-PW0S.js";import"./index-BsS8Ad6v.js";import"./Dialog-CBu8QmP7.js";import"./cross-C5H7VazR.js";import"./svgIconContainer-CzxYuxa2.js";import"./useBaseUiId-D7wMMgsQ.js";import"./InternalBackdrop-qC9vW87x.js";import"./composite-CBfzCsM2.js";import"./index-B1tq7kv6.js";import"./index-B06jfM7c.js";import"./index-BrI0R_vY.js";import"./useEventCallback-DOmeJx8A.js";import"./SkeletonBar-DU19Vxbe.js";import"./LoadingCell-DyARQyNi.js";import"./ColumnConfigDialog-HoXD5K7J.js";import"./DraggableList-CIawcaEC.js";import"./search-4dF9BFi8.js";import"./Input-B6hVPh5g.js";import"./useControlled-TaG5JPxa.js";import"./isEqual-LCBqTXxA.js";import"./isObject-1fyQf0iO.js";import"./Button-Bzl-gWe6.js";import"./ActionButton-Bjwv3Unh.js";import"./Checkbox-Bj0ZVhBK.js";import"./useValueChanged-DTIerqn2.js";import"./CollapsiblePanel-DpUXh9Ij.js";import"./MultiColumnSortDialog-Cxua4UI-.js";import"./MenuTrigger-DSBNJCan.js";import"./CompositeItem-ChERQduX.js";import"./ToolbarRootContext-BoLp0fCS.js";import"./getDisabledMountTransitionStyles-BqGXZg34.js";import"./getPseudoElementBounds-CFon9szC.js";import"./chevron-down-qOKU7sUg.js";import"./index-HZptSSoa.js";import"./error-CctGQP8r.js";import"./BaseCbacBanner-DF0iWHIL.js";import"./makeExternalStore-wceSjJpr.js";import"./Tooltip-Bdp1aQB1.js";import"./PopoverPopup-AmaOsHTk.js";import"./toNumber-Bn5OpuVG.js";import"./useOsdkClient-BEI3rOfS.js";import"./tick-6v28SiNQ.js";import"./DropdownField-C5RPpEqs.js";import"./withOsdkMetrics-Bxcv8v2w.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
