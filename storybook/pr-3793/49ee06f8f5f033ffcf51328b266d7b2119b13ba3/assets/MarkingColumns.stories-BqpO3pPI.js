import{f as p,j as e}from"./iframe-B_yUu-cX.js";import{O as i}from"./object-table-BaXjLQRs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DcvxkMkX.js";import"./Table-BUBz74Aj.js";import"./index-XbE7DXxD.js";import"./Dialog-J2Svzxv6.js";import"./cross-C_lKmFAq.js";import"./svgIconContainer-DK4T2FGf.js";import"./useBaseUiId-B0dhadue.js";import"./InternalBackdrop-CvqXaCs7.js";import"./composite-ATDhx_ec.js";import"./index-CYicsPED.js";import"./index-Ct6MB3Hz.js";import"./index-hv5w3w6e.js";import"./useEventCallback-B5Mj_AiL.js";import"./SkeletonBar-CyqgIe6R.js";import"./LoadingCell-yLfxuT3F.js";import"./ColumnConfigDialog-BJLVGbGu.js";import"./DraggableList-B631PcPT.js";import"./search-CKP8uFrx.js";import"./Input-CiACNLL0.js";import"./useControlled-BZUXCsnn.js";import"./isEqual-DGvw4j76.js";import"./isObject-B5MSRvat.js";import"./Button-BYTNbaL9.js";import"./ActionButton-Bc9WEdCL.js";import"./Checkbox-BdldxRYp.js";import"./useValueChanged-B3OJyAcf.js";import"./CollapsiblePanel-e4u0SMbU.js";import"./MultiColumnSortDialog-BHeomoox.js";import"./MenuTrigger-BwtcDAUn.js";import"./CompositeItem-D2vovJ6U.js";import"./ToolbarRootContext-B_rfO5vo.js";import"./getDisabledMountTransitionStyles-BUo3ak9a.js";import"./getPseudoElementBounds-Bz6nmggm.js";import"./chevron-down-Dw25Lm-O.js";import"./index-q0iON3Ea.js";import"./error-BSusmaAF.js";import"./BaseCbacBanner-Beqx_Fwp.js";import"./makeExternalStore-CwdAeWiC.js";import"./Tooltip-tkp8oS-A.js";import"./PopoverPopup-Dp7-Ury3.js";import"./toNumber-L5F8Lvmb.js";import"./useOsdkClient-DoDbRZ-A.js";import"./tick-VhUAs6z-.js";import"./DropdownField-r7zk0GKI.js";import"./withOsdkMetrics-sJj72yX2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
