import{f as p,j as e}from"./iframe-Bq5j5aAZ.js";import{O as i}from"./object-table-ZojhhHH8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cst-Jesr.js";import"./Table-CE6HqXij.js";import"./index-DWEhBHOg.js";import"./Dialog-BGHulRq-.js";import"./cross-CbyP9ICU.js";import"./svgIconContainer-D0zN2PvM.js";import"./useBaseUiId-BdQXYMbQ.js";import"./InternalBackdrop-uO_2LS-x.js";import"./composite-DrF_ejyf.js";import"./index-B_vCnOWE.js";import"./index-3GM7jxUo.js";import"./index-CjgMCQgf.js";import"./useEventCallback-CNtWd_Oy.js";import"./SkeletonBar-DRyfQFdJ.js";import"./LoadingCell-CJOAjMEt.js";import"./ColumnConfigDialog-OCSVdCgT.js";import"./DraggableList-CO-Jk5DR.js";import"./search-BjMKeiC8.js";import"./Input-BUcGQGwq.js";import"./useControlled-Bh97BPxb.js";import"./isEqual-C_CB3hcX.js";import"./isObject-CURaav_D.js";import"./Button-BDOsP3IO.js";import"./ActionButton-CWSaKj2F.js";import"./Checkbox-Dzs9FB__.js";import"./useValueChanged-ClV7qo_d.js";import"./CollapsiblePanel-zpIsHYl_.js";import"./MultiColumnSortDialog-DkloPuH0.js";import"./MenuTrigger-BzOQUDhL.js";import"./CompositeItem-D-DPXVET.js";import"./ToolbarRootContext-2btfoOPA.js";import"./getDisabledMountTransitionStyles-Ddgt0Mbu.js";import"./getPseudoElementBounds-DXUdX6lB.js";import"./chevron-down-Cyd20nPd.js";import"./index-XfaAXuD0.js";import"./error-BfeMGEzt.js";import"./BaseCbacBanner-CWdVryss.js";import"./makeExternalStore-DAAwZ8ri.js";import"./Tooltip-DDKYKaKZ.js";import"./PopoverPopup-Bli66F0P.js";import"./toNumber-BsCpXwUh.js";import"./useOsdkClient-Q-jj7O9w.js";import"./tick-CqpcZgXj.js";import"./DropdownField-Ct14Ku7e.js";import"./withOsdkMetrics-Dh460Fmw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
