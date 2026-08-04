import{f as p,j as e}from"./iframe-Chf_oTGA.js";import{O as i}from"./object-table-DfZxQv0Z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CDTIXXks.js";import"./Table-A1ezYdFI.js";import"./index-xJnBoHwJ.js";import"./Dialog-BcgX0pie.js";import"./cross-CrnBFQH-.js";import"./svgIconContainer-BH22RWVr.js";import"./useBaseUiId-hHX-f39p.js";import"./InternalBackdrop-CwX4t6qu.js";import"./composite-BoSTtwUc.js";import"./index-CxjHweEz.js";import"./index-BtccUsyA.js";import"./index-CWVms5Tp.js";import"./useEventCallback-BRqteG3d.js";import"./SkeletonBar-Djz_uQ63.js";import"./LoadingCell-6VEM_Qe8.js";import"./ColumnConfigDialog-CGaIoYIj.js";import"./DraggableList-IqnZskH8.js";import"./search-ygVixVNd.js";import"./Input-BFq9F5ks.js";import"./useControlled-VvgXxcWd.js";import"./isEqual-D1Q6ZEcL.js";import"./isObject--uK95e87.js";import"./Button-DKdaKz-_.js";import"./ActionButton-B0Pm9-CH.js";import"./Checkbox-Csz8M_77.js";import"./useValueChanged-BklgFBNq.js";import"./CollapsiblePanel-CUBqE99N.js";import"./MultiColumnSortDialog-xah2tayR.js";import"./MenuTrigger-BsfExqdA.js";import"./CompositeItem-C_RDCmWm.js";import"./ToolbarRootContext-GVFBeBA6.js";import"./getDisabledMountTransitionStyles-VZ9bw_0R.js";import"./getPseudoElementBounds-BkgIVNoQ.js";import"./chevron-down-BETM3MrF.js";import"./index-CMwyLjyb.js";import"./error-DgN3iPqH.js";import"./BaseCbacBanner-vCizbw2T.js";import"./makeExternalStore-BetVxvym.js";import"./Tooltip-C5E6djBP.js";import"./PopoverPopup-Crk7RKNj.js";import"./toNumber-aBr24n79.js";import"./useOsdkClient-VQg3IU_U.js";import"./tick-6ldMfmE5.js";import"./DropdownField-BdLbEKPf.js";import"./withOsdkMetrics-C4p6K-5h.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
