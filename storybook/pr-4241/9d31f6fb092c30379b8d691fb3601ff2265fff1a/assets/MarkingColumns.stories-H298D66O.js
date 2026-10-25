import{f as p,j as e}from"./iframe-nl_vu0vo.js";import{O as i}from"./object-table-CU0V_I6a.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dj6yhN1L.js";import"./Table-Bel8UQqy.js";import"./index-Bw4Di_Av.js";import"./Dialog-BscngXRU.js";import"./cross-BwLhOV3t.js";import"./svgIconContainer-dVj22x2p.js";import"./useBaseUiId-BIN8dWsl.js";import"./InternalBackdrop-BwYnyTy7.js";import"./composite-BrMY9sNC.js";import"./index-DbGOmI0j.js";import"./index-Bt64noRU.js";import"./index-B_91enxX.js";import"./useEventCallback-Clb2jbe4.js";import"./SkeletonBar-Cf0WHzle.js";import"./LoadingCell-FEWscMZb.js";import"./ColumnConfigDialog-DcAdSA97.js";import"./DraggableList-DRUU_dLr.js";import"./search-Cx3JC5DT.js";import"./Input-DsULXrnF.js";import"./useControlled-BwxmcO0L.js";import"./Button-B0tw-VeI.js";import"./small-cross-qF70xz6k.js";import"./ActionButton-DNw29PFB.js";import"./Checkbox-03YMgAog.js";import"./useValueChanged-D8sRyeVl.js";import"./CollapsiblePanel-CIkexinm.js";import"./MultiColumnSortDialog-BDuMndbx.js";import"./MenuTrigger-CR9XRxYf.js";import"./CompositeItem-ylAvuyxw.js";import"./ToolbarRootContext-C4XGK6eV.js";import"./getDisabledMountTransitionStyles-CTsc8Cvf.js";import"./getPseudoElementBounds-Dgz0mXJB.js";import"./chevron-down-Cg1zW2dH.js";import"./index-CvPJeLDe.js";import"./error-CXoZGWHU.js";import"./BaseCbacBanner-BUySb7tJ.js";import"./makeExternalStore-lr4yKVc-.js";import"./Tooltip-BDbtIfcD.js";import"./PopoverPopup-ClK3uhCd.js";import"./debounce-DmK_7Xqg.js";import"./useOsdkClient-D5Z564TK.js";import"./tick-C_3Us6Ua.js";import"./DropdownField-BU9E5XBo.js";import"./isEqual-BowIumRw.js";import"./withOsdkMetrics-DScTmPNl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
