import{f as p,j as e}from"./iframe-C8eg2aVK.js";import{O as i}from"./object-table-qoW5Qq7z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2CvTlen.js";import"./Table-Dv1QU8Gh.js";import"./index-DwPFzsZq.js";import"./Dialog-B2Rbvbrg.js";import"./cross-DP1qntav.js";import"./svgIconContainer-DyXK-o1P.js";import"./useBaseUiId-DXPA-GsQ.js";import"./InternalBackdrop-C9EG6YtE.js";import"./composite-CEgtyNx-.js";import"./index-C0Un304-.js";import"./index-ZVVJNOJS.js";import"./index-B8vZrbzE.js";import"./useEventCallback-CQ6nFGrm.js";import"./SkeletonBar-Cnk-BAJn.js";import"./LoadingCell-D_arR6jU.js";import"./ColumnConfigDialog-DkYfQF_p.js";import"./DraggableList-DpXEDyP4.js";import"./search-CbO7NZxO.js";import"./Input-C8xPJvAo.js";import"./useControlled-DVBJV2vy.js";import"./Button-CHkJdegF.js";import"./small-cross-GhLdprnj.js";import"./ActionButton-BHr0ILkQ.js";import"./Checkbox-CDsSsvHY.js";import"./useValueChanged-QHxo1YSZ.js";import"./CollapsiblePanel-jbwQyiaf.js";import"./MultiColumnSortDialog-Ddpi_1qm.js";import"./MenuTrigger-L3qhVa3P.js";import"./CompositeItem-6_9MUd5U.js";import"./ToolbarRootContext-CvBB5dRJ.js";import"./getDisabledMountTransitionStyles-C8_atirw.js";import"./getPseudoElementBounds-cb4sJS9G.js";import"./chevron-down-UzOgz9cR.js";import"./index-CBQZe3n0.js";import"./error-U6-2l1WQ.js";import"./BaseCbacBanner-BfHXlN_7.js";import"./makeExternalStore-C7CnX90v.js";import"./Tooltip-D5MpYEr-.js";import"./PopoverPopup-DfHmD2Xb.js";import"./debounce-C7dCSXck.js";import"./useOsdkClient-CxRWx5of.js";import"./tick-B8UVtEGY.js";import"./DropdownField-C-BLWb4q.js";import"./isEqual-CIsuS3iH.js";import"./withOsdkMetrics-BHO_8kDg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
