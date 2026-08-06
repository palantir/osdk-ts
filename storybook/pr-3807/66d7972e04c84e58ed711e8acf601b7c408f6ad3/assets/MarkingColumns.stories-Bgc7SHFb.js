import{f as p,j as e}from"./iframe-C3I2vfo4.js";import{O as i}from"./object-table-CNxMFsoo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLCNI-aM.js";import"./Table-BfEzPA-4.js";import"./index-CjlbFBQF.js";import"./Dialog-YEsiM-8i.js";import"./cross-Czwo4Gbj.js";import"./svgIconContainer-DC10GU3T.js";import"./useBaseUiId-BEnwlPrh.js";import"./InternalBackdrop-BE8jPQGl.js";import"./composite-B0oGrJq8.js";import"./index-g756CyT3.js";import"./index-BdMtjuPw.js";import"./index-DCn6TNXA.js";import"./useEventCallback-DTE4BUoj.js";import"./SkeletonBar-D1HLaHAx.js";import"./LoadingCell-DNrKW53T.js";import"./ColumnConfigDialog-xPB403Xf.js";import"./DraggableList-DefRhOtC.js";import"./search-BST2d1n0.js";import"./Input-6iR3oUXP.js";import"./useControlled-DjF4xmFn.js";import"./isEqual-BOzcltHn.js";import"./small-cross-DlHkqmW6.js";import"./Button-BnGX5kZd.js";import"./ActionButton-9YMIe5Rm.js";import"./Checkbox-g-lWn9kI.js";import"./useValueChanged-BM7O54FO.js";import"./CollapsiblePanel-3AzlWUtH.js";import"./MultiColumnSortDialog-ZovN2HB3.js";import"./MenuTrigger-DiTj_CD0.js";import"./CompositeItem-BgzFMOjc.js";import"./ToolbarRootContext-Cedd7atY.js";import"./getDisabledMountTransitionStyles-CMmxYxZy.js";import"./getPseudoElementBounds-BDRhvVpc.js";import"./chevron-down-CFoIf__9.js";import"./index-BxuSZPx5.js";import"./error-C5kvUQcl.js";import"./BaseCbacBanner-DS1c9Igb.js";import"./makeExternalStore-BuO4JxRk.js";import"./Tooltip-CqZsEekV.js";import"./PopoverPopup-vTDqpR3e.js";import"./Combobox-DZX4VZJC.js";import"./useOsdkClient-CT4GjcCh.js";import"./tick-CFrcd2vE.js";import"./DropdownField-B1W_-qOM.js";import"./withOsdkMetrics-CzsfC_Tx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
