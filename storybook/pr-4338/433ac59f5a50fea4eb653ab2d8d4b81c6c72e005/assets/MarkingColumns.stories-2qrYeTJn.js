import{f as p,j as e}from"./iframe-CeUrNeS8.js";import{O as i}from"./object-table-Bpteb8FA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-kClf85ts.js";import"./Table-Dt77VVkm.js";import"./index-CNUBLdqm.js";import"./Dialog-d0Za69Wy.js";import"./cross-DWoJVskS.js";import"./svgIconContainer-Zj5VM8lV.js";import"./useBaseUiId-B6MLv2cX.js";import"./InternalBackdrop-UqnCaGVN.js";import"./composite-JSaF2J1s.js";import"./index-CIe6uhG7.js";import"./index-UtGuVeZo.js";import"./index-BzC6OjRU.js";import"./useEventCallback-Q2vk9PCY.js";import"./SkeletonBar-CgVsJVv3.js";import"./LoadingCell-A8k2lNO5.js";import"./ColumnConfigDialog-Ct6f0_e0.js";import"./DraggableList-BlJ4l4bX.js";import"./search-D1UF5EaJ.js";import"./Input-C4TGes2g.js";import"./useControlled-BdXF-8vf.js";import"./Button-BKP5ADZQ.js";import"./small-cross-D8svfqd3.js";import"./ActionButton-quaqHEPu.js";import"./Checkbox-D93Gj_vX.js";import"./useValueChanged-0avqLTHA.js";import"./CollapsiblePanel-DMLIpAbb.js";import"./MultiColumnSortDialog-DSV2K4Vg.js";import"./MenuTrigger-BcS9EnKj.js";import"./CompositeItem-BTE8y1pl.js";import"./ToolbarRootContext-U-LssyxT.js";import"./getDisabledMountTransitionStyles-C3IU8gic.js";import"./getPseudoElementBounds-BDhnbV4R.js";import"./chevron-down-DI7a3Uf5.js";import"./index-RhUwFwFJ.js";import"./error-BARMDzUn.js";import"./BaseCbacBanner-AwORgCyR.js";import"./makeExternalStore-BahKFFla.js";import"./Tooltip-1n8j-V5F.js";import"./PopoverPopup-DK71HW__.js";import"./debounce-CVh5FHmf.js";import"./useOsdkClient-CtzBUCwK.js";import"./tick-1CibzV_P.js";import"./DropdownField-Dgc8ONCk.js";import"./isEqual-BIAko7LF.js";import"./withOsdkMetrics-BcIRH2mN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
