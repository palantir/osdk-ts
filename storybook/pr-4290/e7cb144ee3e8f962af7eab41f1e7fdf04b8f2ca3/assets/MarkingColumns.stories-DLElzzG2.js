import{f as p,j as e}from"./iframe-hXrfBBL8.js";import{O as i}from"./object-table-C0YMY3Ns.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bqy1uZtT.js";import"./Table-BWXLjcTk.js";import"./index-uBLz7gbD.js";import"./Dialog-vNuJGZov.js";import"./cross-EKOWl3qR.js";import"./svgIconContainer-DT9-fJuD.js";import"./useBaseUiId-DXzMJ9Pu.js";import"./InternalBackdrop-4YTQPE1w.js";import"./composite-rXoGJEtm.js";import"./index-B5iR3PxV.js";import"./index-BwEWCMrj.js";import"./index-BUEqptTm.js";import"./useEventCallback-HWvI9hEC.js";import"./SkeletonBar-zDOwBpUy.js";import"./LoadingCell-CcBnQKNf.js";import"./ColumnConfigDialog-C2ZbTePE.js";import"./DraggableList-BJA6cYhp.js";import"./search-ClLVbiXV.js";import"./Input-DskUev2S.js";import"./useControlled-BMHl3Ney.js";import"./Button-DA1M1QLW.js";import"./small-cross-CSwTYwFN.js";import"./ActionButton-Bc_lN9oE.js";import"./Checkbox-CoxybKEI.js";import"./useValueChanged-BRdsuTQj.js";import"./CollapsiblePanel-BURgI4Vv.js";import"./MultiColumnSortDialog-DXpa6jZR.js";import"./MenuTrigger-DhfRIRA4.js";import"./CompositeItem-CXVgDan9.js";import"./ToolbarRootContext-emE-minV.js";import"./getDisabledMountTransitionStyles-D-elqNz5.js";import"./getPseudoElementBounds-BQB0gaFo.js";import"./chevron-down-CbQ2WyOf.js";import"./index-DJPBx90d.js";import"./error-TXsyVqhB.js";import"./BaseCbacBanner-B_hAJbzu.js";import"./makeExternalStore-WYwpKCNb.js";import"./Tooltip-DboKux0-.js";import"./PopoverPopup-BWLtTrxm.js";import"./debounce-C77Azx16.js";import"./useOsdkClient-De86JThJ.js";import"./tick-CmQh1iFq.js";import"./DropdownField-eX2NPP_w.js";import"./isEqual-CTkxv8mT.js";import"./withOsdkMetrics-DSKv7sJY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
