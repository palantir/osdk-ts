import{f as p,j as e}from"./iframe-D8AA8tZ5.js";import{O as i}from"./object-table-CUTwSbYW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BH6-9HD1.js";import"./Table-DjXGvDTg.js";import"./index-CukSKf6K.js";import"./Dialog-BSmb9RPZ.js";import"./cross-hRHI0Bet.js";import"./svgIconContainer-M2XD2W51.js";import"./useBaseUiId-DoN4Gm5G.js";import"./InternalBackdrop-Cf7I9NhM.js";import"./composite-BXcEZn4p.js";import"./index-BngeOfUA.js";import"./index-Beb-N8jB.js";import"./index-B03lQs5E.js";import"./useEventCallback-C9xuvvfm.js";import"./SkeletonBar-C33imfSE.js";import"./LoadingCell-CDMvjUON.js";import"./ColumnConfigDialog-X57iMmwI.js";import"./DraggableList-CFcAs5JA.js";import"./search-g_GQHQvF.js";import"./Input-CB7rgA9u.js";import"./useControlled-B43d18Tf.js";import"./Button-DM4RbJ0A.js";import"./small-cross-BPpJlDWz.js";import"./ActionButton-0Dyhpxhu.js";import"./Checkbox-BxtIZFPA.js";import"./useValueChanged-DNIrywMU.js";import"./CollapsiblePanel-BDhpShGL.js";import"./MultiColumnSortDialog-KIiGluw1.js";import"./MenuTrigger-CsnyxN3G.js";import"./CompositeItem-DyTH_2rH.js";import"./ToolbarRootContext-BfpPUsVU.js";import"./getDisabledMountTransitionStyles-tQXpWGZy.js";import"./getPseudoElementBounds-CD0IqPws.js";import"./chevron-down-CUVA2CdW.js";import"./index-DdNWZRPv.js";import"./error-CvnJxzc0.js";import"./BaseCbacBanner-BMTvQ5dO.js";import"./makeExternalStore-CuMj3UXB.js";import"./Tooltip-DaRA4zwN.js";import"./PopoverPopup-B5uG5joS.js";import"./debounce-DEqKAPEE.js";import"./useOsdkClient-F0ZDWn2o.js";import"./tick-vp302nI_.js";import"./DropdownField-BB9zKVZW.js";import"./isEqual-CR-tYD22.js";import"./withOsdkMetrics-BRgNGg7P.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
