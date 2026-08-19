import{f as p,j as e}from"./iframe-DFpZdgNU.js";import{O as i}from"./object-table-BzZFLfSB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BiKApNs9.js";import"./Table-CC9Camr0.js";import"./index-DlVDHp89.js";import"./Dialog-CJ3HaTy4.js";import"./cross-BHvoIDr_.js";import"./svgIconContainer-Bn3Ri9oc.js";import"./useBaseUiId-0zduKOPk.js";import"./InternalBackdrop-DRGhJgBK.js";import"./composite-CM1n6GcK.js";import"./index-DMpyqEyR.js";import"./index-CZjMLcuo.js";import"./index-Cq3lo4z7.js";import"./useEventCallback-YkuA_1L6.js";import"./SkeletonBar-eYoNq5WF.js";import"./LoadingCell-BnTfQ31G.js";import"./ColumnConfigDialog-pw8oR0pV.js";import"./DraggableList-x5sgzpnu.js";import"./search-B6WVYs54.js";import"./Input-BpHQpMpf.js";import"./useControlled-hOadE75D.js";import"./Button-BHbgtEyL.js";import"./small-cross-D42tWcxj.js";import"./ActionButton-CDJ_DkbP.js";import"./Checkbox-BdJ__OMn.js";import"./useValueChanged-BqSpbqAV.js";import"./CollapsiblePanel-BtVU-N7R.js";import"./MultiColumnSortDialog-uOASletb.js";import"./MenuTrigger-hRi5Jjk9.js";import"./CompositeItem-CHtvYS6F.js";import"./ToolbarRootContext-BYbbUH6Y.js";import"./getDisabledMountTransitionStyles-wG4lhnAQ.js";import"./getPseudoElementBounds-DyopGY8r.js";import"./chevron-down-DGAHgV3w.js";import"./index-CP7LKd11.js";import"./error-DAvK-lhg.js";import"./BaseCbacBanner-Qoz9aZU3.js";import"./makeExternalStore-CAJutcEV.js";import"./Tooltip-DXygPOKv.js";import"./PopoverPopup-D8Q_qkL_.js";import"./debounce-BCq9jsqw.js";import"./useOsdkClient-BVnzibDe.js";import"./tick-C1HKmB3O.js";import"./DropdownField-BWCkuBcO.js";import"./isEqual-Bcz7pOKA.js";import"./withOsdkMetrics-vWdfyIwO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
