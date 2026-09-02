import{f as p,j as e}from"./iframe-C1V-jMWZ.js";import{O as i}from"./object-table-Bjyuc22o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJz78Ui1.js";import"./Table-CMEtmKXI.js";import"./index-XvzsJt6X.js";import"./Dialog-3bWW0NjF.js";import"./cross-DeZPYttd.js";import"./svgIconContainer-DtEZy4uz.js";import"./useBaseUiId-CpkLkrsv.js";import"./InternalBackdrop-BnvKha4W.js";import"./composite-CHf1Zuon.js";import"./index-BxNUxb4e.js";import"./index-dKWUfAZT.js";import"./index-BwhYThVP.js";import"./useEventCallback-Bd_7eACD.js";import"./SkeletonBar-B6frXfeY.js";import"./LoadingCell-CFJNO3hd.js";import"./ColumnConfigDialog-BTm2ZS9L.js";import"./DraggableList-DXjfHO4P.js";import"./search-DDETT7aQ.js";import"./Input-JJCAZvBE.js";import"./useControlled-DOOaGi2X.js";import"./Button-B_XFbB5W.js";import"./small-cross-CvxomOO6.js";import"./ActionButton-eephJdo4.js";import"./Checkbox-CNuXvPoN.js";import"./useValueChanged-Dmqe1Ovy.js";import"./CollapsiblePanel-NwiHp10r.js";import"./MultiColumnSortDialog-DM98o6zQ.js";import"./MenuTrigger-Q7yK5Wz0.js";import"./CompositeItem-CJ-8czWx.js";import"./ToolbarRootContext-ChsX3fpL.js";import"./getDisabledMountTransitionStyles-Budio66N.js";import"./getPseudoElementBounds-5RQPQhG8.js";import"./chevron-down-BByq1bS3.js";import"./index-nUVRiP22.js";import"./error-BvMD1TOJ.js";import"./BaseCbacBanner-CNgYyNul.js";import"./makeExternalStore-RQ5jibpo.js";import"./Tooltip-Cw_JuZjL.js";import"./PopoverPopup-kQgVAtEr.js";import"./debounce-Ci2ufMQt.js";import"./useOsdkClient-GDIak-vt.js";import"./tick-B97Q10mL.js";import"./DropdownField-D_ZzXFne.js";import"./isEqual-D2Eks9zi.js";import"./withOsdkMetrics-BO4tQ83f.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
