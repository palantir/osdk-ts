import{f as p,j as e}from"./iframe-PKQ9ibCT.js";import{O as i}from"./object-table--_rmj4Gv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BH7VrshK.js";import"./Table-BJvAxL9J.js";import"./index-ukVfuTjT.js";import"./Dialog-CHWnBS4i.js";import"./cross-DOJWIjq5.js";import"./svgIconContainer-YhegbL54.js";import"./useBaseUiId-DQlvSzSU.js";import"./InternalBackdrop-Cbkxpzju.js";import"./composite-tTdBmFM9.js";import"./index-BW8rGv1i.js";import"./index-DZmTL9O1.js";import"./index-DXRERb0v.js";import"./useEventCallback-TWSuTLFf.js";import"./SkeletonBar-BF2BXcUQ.js";import"./LoadingCell-BVRDgM_6.js";import"./ColumnConfigDialog-BWy13dE9.js";import"./DraggableList-NBRwcHk8.js";import"./search-DepRLaUT.js";import"./Input-D53UkdCo.js";import"./useControlled-CfOLBN9x.js";import"./isEqual-iwtzR--9.js";import"./isObject-Cj31Npi1.js";import"./Button-BRBjJXY9.js";import"./ActionButton-Dl0Sk01f.js";import"./Checkbox-D5gIBGDH.js";import"./useValueChanged-BMw49Xi8.js";import"./CollapsiblePanel-BttWpDAT.js";import"./MultiColumnSortDialog-ecqwI8o-.js";import"./MenuTrigger-CNRwb14Q.js";import"./CompositeItem-UPE06Smm.js";import"./ToolbarRootContext-B_pApPm-.js";import"./getDisabledMountTransitionStyles-BMnba74s.js";import"./getPseudoElementBounds-B-OF6H-7.js";import"./chevron-down-DK_Kvmib.js";import"./index-9HCV6PI6.js";import"./error-65-LfMMs.js";import"./BaseCbacBanner-BbayeaCd.js";import"./makeExternalStore-DsmTBrFd.js";import"./Tooltip-PkTE7Sf1.js";import"./PopoverPopup-Cj0NKnZI.js";import"./toNumber-D7LIoV4L.js";import"./useOsdkClient-C4aV9s_N.js";import"./tick-Df1xv9KR.js";import"./DropdownField-Tne5HCqs.js";import"./withOsdkMetrics-CcQyqJG6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
