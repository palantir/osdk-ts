import{f as p,j as e}from"./iframe-CDKj6riZ.js";import{O as i}from"./object-table-BkPo0DHn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2bCQFHut.js";import"./Table-D4FUUOFM.js";import"./index-DetP7shj.js";import"./Dialog-L7gFa3sH.js";import"./cross-BYAFUA7Y.js";import"./svgIconContainer-CbX48z79.js";import"./useBaseUiId-_WJi2oWJ.js";import"./InternalBackdrop-gfABYBaE.js";import"./composite-CqNHIi7L.js";import"./index-B2o7iGnK.js";import"./index-CjcUdmkL.js";import"./index-Crh_ASHH.js";import"./useEventCallback-CDEXMXWY.js";import"./SkeletonBar-Cssm9L3x.js";import"./LoadingCell-jX58PZqe.js";import"./ColumnConfigDialog-uoblqHBh.js";import"./DraggableList-DrMmkPtb.js";import"./search-DvJSVec5.js";import"./Input-BFZp6n3R.js";import"./useControlled-XE9pZf79.js";import"./Button-CG5FCWgZ.js";import"./small-cross-5rAHwMU9.js";import"./ActionButton-BkP-JJoD.js";import"./Checkbox-BKKr9Rzl.js";import"./useValueChanged-Coru2arj.js";import"./CollapsiblePanel-zQS1BJ72.js";import"./MultiColumnSortDialog-CPVFcEnW.js";import"./MenuTrigger-Dp2k6FuQ.js";import"./CompositeItem-B3wPzhHU.js";import"./ToolbarRootContext-BCzvZYHk.js";import"./getDisabledMountTransitionStyles-RTgAaaG2.js";import"./getPseudoElementBounds-DABSHmAT.js";import"./chevron-down-BsLIY-zC.js";import"./index-CMQpOErY.js";import"./error-RLt_WdpY.js";import"./BaseCbacBanner-DZgs1u-I.js";import"./makeExternalStore-jqVUK_Pp.js";import"./Tooltip-CWLV-0q5.js";import"./PopoverPopup-Cd1GWSO-.js";import"./debounce-BwcIUiDW.js";import"./useOsdkClient-DGLHrUME.js";import"./tick-DFRTfwJn.js";import"./DropdownField-CvpHFiWC.js";import"./isEqual-Du5KZsM4.js";import"./withOsdkMetrics-RKhA3pS2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
