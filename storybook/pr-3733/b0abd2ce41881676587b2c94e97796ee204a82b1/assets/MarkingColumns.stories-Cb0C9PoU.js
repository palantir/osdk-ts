import{f as p,j as e}from"./iframe-oormcqx9.js";import{O as i}from"./object-table-4jf6Eq2_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CeHU7rtX.js";import"./Table-BLvC4fWX.js";import"./index-DCXq5JH0.js";import"./Dialog-BRzlDNz3.js";import"./cross-H7XCkeCD.js";import"./svgIconContainer-CyP2LCr5.js";import"./useBaseUiId-BcGNqjed.js";import"./InternalBackdrop-DpxGYyDq.js";import"./composite-BHe_EgOO.js";import"./index-COGZ48XL.js";import"./index-DogEXY-D.js";import"./index-BHdHKlzU.js";import"./useEventCallback--dP_uxEo.js";import"./SkeletonBar-Dq2SiCUP.js";import"./LoadingCell-Bh7ntqai.js";import"./ColumnConfigDialog-DiAZXusV.js";import"./DraggableList-CHIagkDU.js";import"./search-CZYIhkOA.js";import"./Input-DMGdYTGk.js";import"./useControlled-DWm7-ZpP.js";import"./isEqual-CyGfiYdM.js";import"./isObject-DgI6tbTt.js";import"./Button-DU1T6ytp.js";import"./ActionButton-DDjbYHah.js";import"./Checkbox-B2CNlgAC.js";import"./useValueChanged-UVyQuc-4.js";import"./CollapsiblePanel-BfoIRfM_.js";import"./MultiColumnSortDialog-DYkGjZtJ.js";import"./MenuTrigger-iJ3LWieb.js";import"./CompositeItem-D5MBeLAi.js";import"./ToolbarRootContext-Bo-Cqcm4.js";import"./getDisabledMountTransitionStyles-BiE_7I5f.js";import"./getPseudoElementBounds-B_d2HgH3.js";import"./chevron-down-DcIDMGw-.js";import"./index-D7-W961b.js";import"./error-BAesG39E.js";import"./BaseCbacBanner-Bnps_Ygw.js";import"./makeExternalStore-DyXOF0Nw.js";import"./Tooltip-C721TSLJ.js";import"./PopoverPopup-NLWwp6SF.js";import"./toNumber-Bzi2NnDB.js";import"./useOsdkClient-CD5YQMi3.js";import"./tick-DVDtcXSn.js";import"./DropdownField-CX5_jjd1.js";import"./withOsdkMetrics-SBAUy0ec.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
