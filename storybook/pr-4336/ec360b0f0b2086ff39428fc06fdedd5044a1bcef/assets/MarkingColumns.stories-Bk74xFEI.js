import{f as p,j as e}from"./iframe-Dl_BVvAW.js";import{O as i}from"./object-table-BDyuzjHe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CoCSiyLk.js";import"./Table-Cg6d06Ds.js";import"./index-BCGo89vi.js";import"./Dialog-DoT1m57-.js";import"./cross-Bz7-buWb.js";import"./svgIconContainer-DBQRMjom.js";import"./useBaseUiId-C3O-rg1C.js";import"./InternalBackdrop-CzP1TDn8.js";import"./composite-4Jq0kXzk.js";import"./index-DjDfcFev.js";import"./index-DbV-fkKm.js";import"./index-mlQ_3NiE.js";import"./useEventCallback-BIPIgLC4.js";import"./SkeletonBar-CkZhiozq.js";import"./LoadingCell-CtF7-axq.js";import"./ColumnConfigDialog-DmTwLoDJ.js";import"./DraggableList-eYI9b4yQ.js";import"./search-DcMarGsx.js";import"./Input-B7ojI8Bn.js";import"./useControlled-Dp4z1YLv.js";import"./Button-6LB6U_zx.js";import"./small-cross-ylm6BbvG.js";import"./ActionButton-YXW6TfiH.js";import"./Checkbox-Bq3GWGsZ.js";import"./useValueChanged-BEGJF59V.js";import"./CollapsiblePanel-DzeHzdVK.js";import"./MultiColumnSortDialog-C1yu8aIu.js";import"./MenuTrigger-UmSIhiTA.js";import"./CompositeItem-CxQ8ZZ6u.js";import"./ToolbarRootContext-CvPGHntn.js";import"./getDisabledMountTransitionStyles-Cza0XV9J.js";import"./getPseudoElementBounds-CjBI2crg.js";import"./chevron-down-BnUWx6eY.js";import"./index-C3M7Abp4.js";import"./error-iTPjK_eI.js";import"./BaseCbacBanner-Db-QnP4F.js";import"./makeExternalStore-BEEUYNQZ.js";import"./Tooltip-C_bDdnEa.js";import"./PopoverPopup-BI4UjKoA.js";import"./debounce-DTEEbj35.js";import"./useOsdkClient-DMf9xJpa.js";import"./tick-hY0SSYQk.js";import"./DropdownField-bRExs2os.js";import"./isEqual-BJK4xPpC.js";import"./withOsdkMetrics-auuyIGEA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
