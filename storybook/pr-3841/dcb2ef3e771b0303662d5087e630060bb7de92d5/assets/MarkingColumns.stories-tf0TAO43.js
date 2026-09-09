import{f as p,j as e}from"./iframe-BYf_OhJ0.js";import{O as i}from"./object-table-NEoJVSjw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CMb40c8b.js";import"./Table-BNhjkCw_.js";import"./index-D24vcPYb.js";import"./Dialog-C2jKXI3g.js";import"./cross-937OAABn.js";import"./svgIconContainer-CLNhy3XP.js";import"./useBaseUiId-BV6TRjLb.js";import"./InternalBackdrop-C9IU7SA-.js";import"./composite-Czk5304D.js";import"./index-Cfn6IIi-.js";import"./index-C0REXx9G.js";import"./index-BUkZX9cq.js";import"./useEventCallback-B4MxpH1S.js";import"./SkeletonBar-hbjfgvT2.js";import"./LoadingCell-BSv2ov2l.js";import"./ColumnConfigDialog-JMRVff0D.js";import"./DraggableList-Dw0_e9Nv.js";import"./search-CG-g63hT.js";import"./Input-jGJDNg7d.js";import"./useControlled-D82M4IV8.js";import"./Button-HH_9r5OW.js";import"./small-cross-DiOHh5rF.js";import"./ActionButton-Deb6A0x0.js";import"./Checkbox-B8FrTbPR.js";import"./useValueChanged-D_qKRuH6.js";import"./CollapsiblePanel-BS-j2JIg.js";import"./MultiColumnSortDialog-CteiIVyV.js";import"./MenuTrigger-Bv0LSSPW.js";import"./CompositeItem-CptL6v0D.js";import"./ToolbarRootContext-U6rUTj3k.js";import"./getDisabledMountTransitionStyles-Dbvx_1LF.js";import"./getPseudoElementBounds-DTEyIocp.js";import"./chevron-down-BFyWQHOE.js";import"./index-DGCG5Etv.js";import"./error-IoYBerAI.js";import"./BaseCbacBanner-DBesyPHX.js";import"./makeExternalStore-xpSL_Msm.js";import"./Tooltip-C2Ov1JFy.js";import"./PopoverPopup-DKUxgHWp.js";import"./debounce-Cx3iNRX1.js";import"./useOsdkClient-BLIl6zwO.js";import"./tick-C0Y_aYcJ.js";import"./DropdownField-CKAAt-ca.js";import"./isEqual-BoWnJhtt.js";import"./withOsdkMetrics-D932jFv2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
