import{f as p,j as e}from"./iframe-B8RO62N_.js";import{O as i}from"./object-table-CbgO89ol.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DsZdGcRf.js";import"./Table-B3r40lxL.js";import"./index-B9o8TN_g.js";import"./Dialog-D7_0d8_8.js";import"./cross-CcdrUkI0.js";import"./svgIconContainer-IlfBd6hB.js";import"./useBaseUiId-B264urwS.js";import"./InternalBackdrop-yKApGwSP.js";import"./composite-BD3vthMy.js";import"./index-lV5AmHS7.js";import"./index-BvEMXlP9.js";import"./index-BLSJds7S.js";import"./useEventCallback-DVcq19df.js";import"./SkeletonBar-vRd-fnM3.js";import"./LoadingCell-DlXv5aJ7.js";import"./ColumnConfigDialog-mn0Q-S3k.js";import"./DraggableList-CEB-SAwr.js";import"./search-T5RtviOr.js";import"./Input-riFqtKQ3.js";import"./useControlled-Bz4rBUe9.js";import"./isEqual-C4QYwlDG.js";import"./small-cross-BrDhhRIu.js";import"./Button-FowIH9YL.js";import"./ActionButton-DTqBZ6ik.js";import"./Checkbox-CLCbchPT.js";import"./useValueChanged-D5kRxH40.js";import"./CollapsiblePanel-BUa_jE3V.js";import"./MultiColumnSortDialog-C9dSET6x.js";import"./MenuTrigger-C0EkcB63.js";import"./CompositeItem-1sK8GXCR.js";import"./ToolbarRootContext-DHATwrwM.js";import"./getDisabledMountTransitionStyles-Dib2YDpa.js";import"./getPseudoElementBounds-BlxI1kmV.js";import"./chevron-down-BuLKigFK.js";import"./index-CNxWP85l.js";import"./error-CHWCyOLY.js";import"./BaseCbacBanner-LJOrVojz.js";import"./makeExternalStore-ComoOgEU.js";import"./Tooltip-K_Qxl82p.js";import"./PopoverPopup-B3WIFAst.js";import"./Combobox-z1zMG8qL.js";import"./useOsdkClient-D-sqsQvp.js";import"./tick-CRkG4WWb.js";import"./DropdownField-C4GPEJr2.js";import"./withOsdkMetrics-VStPp8O8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
