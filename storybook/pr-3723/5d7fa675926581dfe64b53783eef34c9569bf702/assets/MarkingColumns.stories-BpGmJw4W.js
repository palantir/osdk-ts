import{f as p,j as e}from"./iframe-BKuJ3YK-.js";import{O as i}from"./object-table-DHaxzXV0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DYAnbvQu.js";import"./Table-Cih1Tdmn.js";import"./index-DOC-3Q2e.js";import"./Dialog-CZqNO7Eg.js";import"./cross-5zQYDp4L.js";import"./svgIconContainer-CO4uzBXb.js";import"./useBaseUiId-CmjMaZif.js";import"./InternalBackdrop-BZn_v4Ut.js";import"./composite-CMqWpSV4.js";import"./index-CyPxhMS0.js";import"./index-BL-28NIt.js";import"./index-BFx5rq6J.js";import"./useEventCallback-B2aBdiyc.js";import"./SkeletonBar-DXKKYns-.js";import"./LoadingCell-C_pgEUHE.js";import"./ColumnConfigDialog-BebTZ2cs.js";import"./DraggableList-Bhng7sIV.js";import"./search-C2R58gu2.js";import"./Input-BuPE6di9.js";import"./useControlled-Dgcubknr.js";import"./isEqual-Rmzr3cyu.js";import"./isObject-h0cx7wZc.js";import"./Button-KVWxQo2x.js";import"./ActionButton-CH1Ap5aa.js";import"./Checkbox-SaWrWDGR.js";import"./useValueChanged-C_zWLVba.js";import"./CollapsiblePanel-CwuQzP9G.js";import"./MultiColumnSortDialog-Dnx81jDn.js";import"./MenuTrigger-EiKSStXQ.js";import"./CompositeItem-Dhhm1Ue0.js";import"./ToolbarRootContext-Dcjq1toe.js";import"./getDisabledMountTransitionStyles-D27tB-TO.js";import"./getPseudoElementBounds-5nfaJR8T.js";import"./chevron-down-Qa4DBKkN.js";import"./index-D-Lytb1C.js";import"./error-xCvq0iiE.js";import"./BaseCbacBanner-YzGFCsRR.js";import"./makeExternalStore-CPmwp_9o.js";import"./Tooltip-DsFcxZJX.js";import"./PopoverPopup-DbASKmrn.js";import"./toNumber-C7IgeiT8.js";import"./useOsdkClient-D7rVmd37.js";import"./tick-DmvAo7xh.js";import"./DropdownField-8Usq9D88.js";import"./withOsdkMetrics-BsN0QIgz.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
