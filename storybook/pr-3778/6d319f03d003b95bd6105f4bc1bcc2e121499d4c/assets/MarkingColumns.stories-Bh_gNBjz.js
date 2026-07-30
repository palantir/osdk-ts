import{f as p,j as e}from"./iframe-KU9UF-HD.js";import{O as i}from"./object-table-DrS3gL9T.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dqh0wZ2N.js";import"./Table-XdQgP9TG.js";import"./index-C_Sqgn7G.js";import"./Dialog-DblEXQa7.js";import"./cross-DKVxU0vG.js";import"./svgIconContainer-B9-V7dQw.js";import"./useBaseUiId-DoU6rO79.js";import"./InternalBackdrop-zwrZRiWG.js";import"./composite-CgL8wB-0.js";import"./index-COBeGTh1.js";import"./index-DvccYxK1.js";import"./index-CbFKn6SO.js";import"./useEventCallback-Xvi1rtsL.js";import"./SkeletonBar-CA3bHLco.js";import"./LoadingCell-D4mvPFrH.js";import"./ColumnConfigDialog-DzLGAe8w.js";import"./DraggableList-DoLFOuKy.js";import"./search-CM8qjOlV.js";import"./Input-D0hsZPVl.js";import"./useControlled-BFyqY8nn.js";import"./isEqual-C9E2_N5N.js";import"./isObject-CcQhopsJ.js";import"./Button-Dx_Hy474.js";import"./ActionButton-DuQolFVX.js";import"./Checkbox-ClqYZBVr.js";import"./useValueChanged-Bthc0dAB.js";import"./CollapsiblePanel-DPyCltIZ.js";import"./MultiColumnSortDialog-uAHUp7ML.js";import"./MenuTrigger-D3r6zpiC.js";import"./CompositeItem-CUcahBHg.js";import"./ToolbarRootContext-Dxnyr84z.js";import"./getDisabledMountTransitionStyles-DvWpsgyl.js";import"./getPseudoElementBounds-CivnY4w8.js";import"./chevron-down-CVXhBImd.js";import"./index-B-ApflCd.js";import"./error-6yDwFave.js";import"./BaseCbacBanner-DqeMmN8d.js";import"./makeExternalStore-_neCuudA.js";import"./Tooltip-DL_3VSwR.js";import"./PopoverPopup-8kqMbkfH.js";import"./toNumber-D60oT1WS.js";import"./useOsdkClient-BbbNdZZX.js";import"./tick-lXnSKMHf.js";import"./DropdownField-CSHkKzua.js";import"./withOsdkMetrics-CyPRFmfB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
