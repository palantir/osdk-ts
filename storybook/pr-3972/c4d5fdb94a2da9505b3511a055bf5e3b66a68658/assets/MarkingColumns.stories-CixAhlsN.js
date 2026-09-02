import{f as p,j as e}from"./iframe-DZOL1fAY.js";import{O as i}from"./object-table-SSJOUKzl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-3H1iqF3g.js";import"./Table-B62G5e17.js";import"./index-Dn4isnDY.js";import"./Dialog-cPcGwNln.js";import"./cross-86m0rjnN.js";import"./svgIconContainer-B6vD6Ghc.js";import"./useBaseUiId-Cvxi0iS7.js";import"./InternalBackdrop-DYc2T3en.js";import"./composite-T0X3QkXF.js";import"./index-C11ji0i2.js";import"./index-DZ_Yay9Y.js";import"./index-DFd2jDKC.js";import"./useEventCallback-ItCAOyRH.js";import"./SkeletonBar-LYReqkUo.js";import"./LoadingCell-D05YBGhE.js";import"./ColumnConfigDialog-BKBMAzyi.js";import"./DraggableList-Dhhz3Grx.js";import"./search-B2NPYcqq.js";import"./Input-VXijC7GT.js";import"./useControlled-DRhy3GQv.js";import"./Button-DsiRqDn-.js";import"./small-cross-BoSvEJri.js";import"./ActionButton-BsaHD9YU.js";import"./Checkbox-D9uKkogi.js";import"./useValueChanged-DcZiCWMF.js";import"./CollapsiblePanel-fLJD7V0z.js";import"./MultiColumnSortDialog-BWc9Kkx2.js";import"./MenuTrigger-CsR5DxY2.js";import"./CompositeItem-BqTSWS-d.js";import"./ToolbarRootContext-BSvTmWDd.js";import"./getDisabledMountTransitionStyles-BhFC88vd.js";import"./getPseudoElementBounds-Ba8N0Q3i.js";import"./chevron-down-BzBCSFbA.js";import"./index-COxjItVW.js";import"./error-DjEgQQ85.js";import"./BaseCbacBanner-CRUr-lWy.js";import"./makeExternalStore-BS_yphcb.js";import"./Tooltip-DHwsWy8-.js";import"./PopoverPopup-ZYkmOrRT.js";import"./debounce-DZH3gqyd.js";import"./useOsdkClient-eW2Kmz8P.js";import"./tick-D-SuASFY.js";import"./DropdownField-Sc-mwTM2.js";import"./isEqual-DNKlfwvT.js";import"./withOsdkMetrics-2IcQnEf1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
