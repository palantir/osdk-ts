import{f as p,j as e}from"./iframe-ohJVZKOW.js";import{O as i}from"./object-table-BQf4gSPe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C1R0P_VY.js";import"./Table-DHhtMo4h.js";import"./index-C4DoG2f-.js";import"./Dialog-hp52T4ga.js";import"./cross-Bfip_FoZ.js";import"./svgIconContainer-DzjVEjGe.js";import"./useBaseUiId-LmdhvU1h.js";import"./InternalBackdrop-CGIgSFQ4.js";import"./composite-DQx9kvkN.js";import"./index-BnE2PvA_.js";import"./index-DW2zHBPJ.js";import"./index-BBGAx8RY.js";import"./useEventCallback-zsHSeYCI.js";import"./SkeletonBar-gFkpuj06.js";import"./LoadingCell-ChUx_zUn.js";import"./ColumnConfigDialog-Du02Nzwe.js";import"./DraggableList-Dc-sxHhv.js";import"./search-BG9SxdnF.js";import"./Input-Drh9HzXR.js";import"./useControlled-ClfC2jv8.js";import"./isEqual-BJL22rN0.js";import"./isObject-IFnXNPKD.js";import"./Button-CsxMEHMa.js";import"./ActionButton-6tpCH2WS.js";import"./Checkbox-BInzSkBA.js";import"./useValueChanged-DsZbiuI8.js";import"./CollapsiblePanel-CDuCRfTD.js";import"./MultiColumnSortDialog--rdOM0mO.js";import"./MenuTrigger-Cmh-HMwy.js";import"./CompositeItem-DRccTLFK.js";import"./ToolbarRootContext-BclOg9vJ.js";import"./getDisabledMountTransitionStyles-B_LH_dlj.js";import"./getPseudoElementBounds-CI1x8v8B.js";import"./chevron-down-B-OZmB_2.js";import"./index-Bdc5AnYd.js";import"./error-BoH5SAwj.js";import"./BaseCbacBanner-iflnoL7j.js";import"./makeExternalStore-C5RAotff.js";import"./Tooltip-BJh6oCPg.js";import"./PopoverPopup-Cw_qMkyL.js";import"./toNumber-g7Jojpxk.js";import"./useOsdkClient-BCwpDIbF.js";import"./tick-QFxu5a3T.js";import"./DropdownField-BkXQZJoe.js";import"./withOsdkMetrics-CxazBpkT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
