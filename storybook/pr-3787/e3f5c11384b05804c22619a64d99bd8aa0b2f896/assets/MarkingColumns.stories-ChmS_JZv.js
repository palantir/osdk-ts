import{f as p,j as e}from"./iframe-BAKEq5ES.js";import{O as i}from"./object-table-Ddwo7DKX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hQV8mcMW.js";import"./Table-DbimKmt7.js";import"./index-CeH782l-.js";import"./Dialog-Bpsn0GLy.js";import"./cross-Dt1bkvKA.js";import"./svgIconContainer-Dld9ETuT.js";import"./useBaseUiId-Brauy9uT.js";import"./InternalBackdrop-NRUCG-Md.js";import"./composite-O5N4yrKG.js";import"./index-DYnXO_K1.js";import"./index-PP-_CbbK.js";import"./index-BDWn8ZeD.js";import"./useEventCallback-BDdj97xr.js";import"./SkeletonBar-B00BTsTN.js";import"./LoadingCell-DnX7Bc7N.js";import"./ColumnConfigDialog-Dyp7TOc-.js";import"./DraggableList-D_5qh-dT.js";import"./search-DZax2fsM.js";import"./Input-BCff3WUP.js";import"./useControlled-C2UCFEFv.js";import"./isEqual-XRwfgd-m.js";import"./isObject-BZwXx0fx.js";import"./Button-BLWiXJyw.js";import"./ActionButton-3nDneS0_.js";import"./Checkbox-ooMD5k0t.js";import"./useValueChanged-BHOBEpWe.js";import"./CollapsiblePanel-DdLf54qL.js";import"./MultiColumnSortDialog-MvZfwoN0.js";import"./MenuTrigger-CICrC1Rd.js";import"./CompositeItem-B-aPUg7M.js";import"./ToolbarRootContext-yZJwFATi.js";import"./getDisabledMountTransitionStyles-BaT6iZCs.js";import"./getPseudoElementBounds-odxOPIS-.js";import"./chevron-down-DfHSBo5l.js";import"./index-Bqra-U7q.js";import"./error-BY45CvKu.js";import"./BaseCbacBanner-25jzrQhL.js";import"./makeExternalStore-DSwBTdjj.js";import"./Tooltip-bjnxpKvh.js";import"./PopoverPopup-DzJnb2E8.js";import"./toNumber-CtHLA5nh.js";import"./useOsdkClient-CAYIjkz_.js";import"./tick-CQsbinFG.js";import"./DropdownField-zarVigm0.js";import"./withOsdkMetrics-DsMB6nls.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
