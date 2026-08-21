import{f as p,j as e}from"./iframe-G2sFBblw.js";import{O as i}from"./object-table-CqB2fZjZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CqRVpl7F.js";import"./Table-BmKnkTaq.js";import"./index-Bf1a_w2A.js";import"./Dialog-D-JPJzBj.js";import"./cross-Cgrm_e1P.js";import"./svgIconContainer-C-G74yOn.js";import"./useBaseUiId-PA0X9Hzc.js";import"./InternalBackdrop-Brf5EOJv.js";import"./composite-Cs5FDNG8.js";import"./index-DQ-VFjK8.js";import"./index-Bz_02AKc.js";import"./index-BGQX8i9w.js";import"./useEventCallback-CGijwG5g.js";import"./SkeletonBar-CsgUPv3i.js";import"./LoadingCell-BSnxDL-9.js";import"./ColumnConfigDialog-DZz228E4.js";import"./DraggableList-Br4xD-0y.js";import"./search-X8OElP0v.js";import"./Input-Bdut2c0i.js";import"./useControlled-D6ZpKCy4.js";import"./Button-DwEHPhHn.js";import"./small-cross-fshzj5mN.js";import"./ActionButton-CI4V1Bp5.js";import"./Checkbox-BGUfbAs3.js";import"./useValueChanged-a00kAoAh.js";import"./CollapsiblePanel-Bt8YdGxn.js";import"./MultiColumnSortDialog-Bt5Yk7aK.js";import"./MenuTrigger-DcqCa7Eb.js";import"./CompositeItem-CDdPDuOE.js";import"./ToolbarRootContext-CKE9jd6d.js";import"./getDisabledMountTransitionStyles-BT5SUph6.js";import"./getPseudoElementBounds-D9lEJUlp.js";import"./chevron-down-eR29A_up.js";import"./index-BOFiGVt1.js";import"./error-DaCdYUUn.js";import"./BaseCbacBanner-CuKGJeVA.js";import"./makeExternalStore-pUJlIKix.js";import"./Tooltip-Ck0lRHyJ.js";import"./PopoverPopup-AM786urk.js";import"./debounce-CKEE8qyw.js";import"./useOsdkClient-DKZLLXCr.js";import"./tick-ySxfpAjM.js";import"./DropdownField-CS4TsSCM.js";import"./isEqual-BQZBvx39.js";import"./withOsdkMetrics-vEES6Ay5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
