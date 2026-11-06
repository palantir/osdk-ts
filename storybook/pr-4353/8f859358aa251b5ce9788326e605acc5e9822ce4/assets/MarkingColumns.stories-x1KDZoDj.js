import{f as p,j as e}from"./iframe-BS0M2hwP.js";import{O as i}from"./object-table-7WjT7lpV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C0HkGCdU.js";import"./Table-B88OXfMx.js";import"./index-CPPTt-fG.js";import"./Dialog-BP0H6HGJ.js";import"./cross-DzypzeyC.js";import"./svgIconContainer-NUXlWCmy.js";import"./useBaseUiId-77uYocVy.js";import"./InternalBackdrop-hDcB9FVt.js";import"./composite-Dtpk2934.js";import"./index-C8CN-2yF.js";import"./index-CnbN8-s2.js";import"./index-Cd_-CKig.js";import"./useEventCallback-CgXNOiJD.js";import"./SkeletonBar-D1-iix8R.js";import"./LoadingCell-BFik17i5.js";import"./ColumnConfigDialog-CGpO-jVp.js";import"./DraggableList-CKhydpzb.js";import"./search-DzKPAVbq.js";import"./Input-C2-Y_50j.js";import"./useControlled-C2cZAxJ2.js";import"./Button-Ba1VM7tv.js";import"./small-cross-DmunPPRL.js";import"./ActionButton-B-OGv12r.js";import"./Checkbox-KsdEkqmQ.js";import"./useValueChanged-DN5r-FMv.js";import"./CollapsiblePanel-BCL9LE3M.js";import"./MultiColumnSortDialog-BrDCJ6OQ.js";import"./MenuTrigger-TfSdmOH4.js";import"./CompositeItem-BonvX_5i.js";import"./ToolbarRootContext-3PBXuwUh.js";import"./getDisabledMountTransitionStyles-B7XR0ec5.js";import"./getPseudoElementBounds-CEDHgaG-.js";import"./chevron-down-OJJdZYcx.js";import"./index-CEsGU-7z.js";import"./error-B91-GI1R.js";import"./BaseCbacBanner-DXyM0xsn.js";import"./makeExternalStore-BO2WwozP.js";import"./Tooltip-D4cxOObb.js";import"./PopoverPopup-DpckpHOT.js";import"./debounce-DAswCS-u.js";import"./useOsdkClient-BxlQ8pCq.js";import"./tick-B7id9DB4.js";import"./DropdownField-BSb2qsUX.js";import"./isEqual-DhYjGK75.js";import"./withOsdkMetrics-DDHgU96d.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
