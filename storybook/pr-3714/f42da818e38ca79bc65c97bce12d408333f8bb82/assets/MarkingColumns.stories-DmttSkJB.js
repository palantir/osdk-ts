import{f as p,j as e}from"./iframe-CJA1xNbf.js";import{O as i}from"./object-table-p5zSmE9I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2luW4zJ.js";import"./Table-DoSKpfQD.js";import"./index-C-8NmWLG.js";import"./Dialog-BOl7KEAj.js";import"./cross-CQqjvK9t.js";import"./svgIconContainer-CbX6k65p.js";import"./useBaseUiId-BvJ2qcSN.js";import"./InternalBackdrop-CFtyIHF7.js";import"./composite-DOttNt49.js";import"./index-DnzCeTgw.js";import"./index-COLkTz0A.js";import"./index-6fmeW7-6.js";import"./useEventCallback-BYhwn4pa.js";import"./SkeletonBar-DshquNDl.js";import"./LoadingCell-DmCyIN3R.js";import"./ColumnConfigDialog-DHP7XzNA.js";import"./DraggableList-C-5K3eKq.js";import"./search-BEFnIjoY.js";import"./Input-BEw3OBGr.js";import"./useControlled-Cw0VkJXd.js";import"./Button-vRCY7Tct.js";import"./small-cross-CJKlltL0.js";import"./ActionButton-Brl7quwo.js";import"./Checkbox-CrY7RfHX.js";import"./useValueChanged-B4sZueCD.js";import"./CollapsiblePanel-BnuzOBv2.js";import"./MultiColumnSortDialog-DjBNMJbv.js";import"./MenuTrigger-BM22BcfG.js";import"./CompositeItem-DEmGmvGp.js";import"./ToolbarRootContext-sfA9hU9w.js";import"./getDisabledMountTransitionStyles-DxG_dub5.js";import"./getPseudoElementBounds-LXwOsv9_.js";import"./chevron-down-CisS9nHL.js";import"./index-CoZeC-uo.js";import"./error-BRaZ14N8.js";import"./BaseCbacBanner-qP8CyVJW.js";import"./makeExternalStore-C0IKfOCn.js";import"./Tooltip-DfQvNW_E.js";import"./PopoverPopup-B5BKr__5.js";import"./debounce-BuqRMN8y.js";import"./useOsdkClient-BfQQJQSe.js";import"./tick-C06BStMP.js";import"./DropdownField-CzOk54o3.js";import"./isEqual-jR_iTTD8.js";import"./withOsdkMetrics-CqtplnYL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
