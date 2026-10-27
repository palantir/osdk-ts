import{f as p,j as e}from"./iframe-DT3_qYOR.js";import{O as i}from"./object-table-LeF75zYv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJcbeZXn.js";import"./Table-BWmN6ZfU.js";import"./index-Bms-eX8O.js";import"./Dialog-BHjZE2PD.js";import"./cross-DsVapprp.js";import"./svgIconContainer-Dzwe0jqD.js";import"./useBaseUiId-Btj_fTu8.js";import"./InternalBackdrop-MxsP_9qP.js";import"./composite-CY9Hfsj0.js";import"./index-BgPwEE_0.js";import"./index-BqtCGU3q.js";import"./index-6H1C3WRO.js";import"./useEventCallback-BU0W5FVD.js";import"./SkeletonBar-CnPcaADz.js";import"./LoadingCell-BMGhiq8R.js";import"./ColumnConfigDialog-Boj7YVRE.js";import"./DraggableList-B9sEl1bX.js";import"./search-mMYnAHur.js";import"./Input-Lzcgvy8p.js";import"./useControlled-CTkDHUnO.js";import"./Button-URBwxfkh.js";import"./small-cross-BRV7Mx-Q.js";import"./ActionButton-CoR5hB92.js";import"./Checkbox-oqjzBYx8.js";import"./useValueChanged-ObbzXgJ2.js";import"./CollapsiblePanel-DspifK_d.js";import"./MultiColumnSortDialog-BUGPwUx0.js";import"./MenuTrigger-vOKFNsqw.js";import"./CompositeItem-DAx93KY8.js";import"./ToolbarRootContext-DRepvQNE.js";import"./getDisabledMountTransitionStyles-DjG_Q61Q.js";import"./getPseudoElementBounds-BwMDZbAq.js";import"./chevron-down-CQZ2GZcC.js";import"./index-kKFIJm10.js";import"./error-CfEF0UDB.js";import"./BaseCbacBanner-DyYO5GA-.js";import"./makeExternalStore-xyuIW0T9.js";import"./Tooltip-DwSDVBmI.js";import"./PopoverPopup-Dx9-HY9B.js";import"./debounce-CFakeUey.js";import"./useOsdkClient-CznSanA6.js";import"./tick-B8N-pAWH.js";import"./DropdownField-B0T5PFQN.js";import"./isEqual-BcnN0Wjy.js";import"./withOsdkMetrics-pibb9djU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
