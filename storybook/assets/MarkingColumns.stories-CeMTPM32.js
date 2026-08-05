import{f as p,j as e}from"./iframe-Cw9nAJHw.js";import{O as i}from"./object-table-BTJE2d_z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cm4tfeS3.js";import"./index-C9NZ706V.js";import"./Dialog-D7WzKEzK.js";import"./cross-DC9OR73d.js";import"./svgIconContainer-BeQlV-NB.js";import"./useBaseUiId-BdmbP2Th.js";import"./InternalBackdrop-CK0wKi04.js";import"./composite-DfioEurU.js";import"./index-DL9w9at2.js";import"./index-B4WhUvaf.js";import"./index-CVJos0W2.js";import"./useEventCallback-DAxvqkXx.js";import"./SkeletonBar-0GgQkvb9.js";import"./LoadingCell-BHM0aeRj.js";import"./ColumnConfigDialog-vSSf2O5I.js";import"./DraggableList-Cx4s9dS9.js";import"./search-EiPBjO7o.js";import"./Input-BP-w5iIg.js";import"./useControlled-DpXUPY6h.js";import"./isEqual-Vn8OofP_.js";import"./isObject-CO7kU0cE.js";import"./Button-BXdkJeBS.js";import"./ActionButton-Bctr3vAg.js";import"./Checkbox-D4VPML9t.js";import"./useValueChanged-CgvW3tg7.js";import"./CollapsiblePanel-B-eCrTZT.js";import"./MultiColumnSortDialog-BkGsvrrm.js";import"./MenuTrigger-Bv_KdwkL.js";import"./CompositeItem-CFzVlRYW.js";import"./ToolbarRootContext-BhufIJhp.js";import"./getDisabledMountTransitionStyles-CHZVbsAp.js";import"./getPseudoElementBounds-DadvNQNH.js";import"./chevron-down-wb7CIeFV.js";import"./index-D7Y8Yzf2.js";import"./error-B4eMuMy9.js";import"./BaseCbacBanner-sHr4rcXe.js";import"./makeExternalStore-pQyd7T6K.js";import"./Tooltip-Bgma1C54.js";import"./PopoverPopup-CwYnHNuG.js";import"./toNumber-DFrCctYK.js";import"./useOsdkClient-Cw7OsHD5.js";import"./tick-CJVTH0Sl.js";import"./DropdownField-WnvUjuJL.js";import"./withOsdkMetrics-C4R0qJmr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
