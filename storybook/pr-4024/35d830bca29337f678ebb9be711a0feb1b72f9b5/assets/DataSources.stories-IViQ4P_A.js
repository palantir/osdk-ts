import{j as r}from"./iframe-DSG-Gahl.js";import{O as b}from"./object-table-CP439Oap.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-1vKpyZXy.js";import{u as g}from"./useOsdkClient-0TCUTiK2.js";import"./preload-helper-DD3-CUB8.js";import"./Table-EV18WJO-.js";import"./index-4o4hAzg4.js";import"./Dialog-DrDKTUSB.js";import"./cross-DzIvG2rT.js";import"./svgIconContainer-CkL2iDb7.js";import"./useBaseUiId-Br7wSVRu.js";import"./InternalBackdrop-CYQOhGhx.js";import"./composite-WUh_Mv2U.js";import"./index-BRRswYIi.js";import"./index-CphGNIJN.js";import"./index-XAVsYiFD.js";import"./useEventCallback-QoQzxgWp.js";import"./SkeletonBar-D83dsI7U.js";import"./LoadingCell-csM7bcRN.js";import"./ColumnConfigDialog-Ohev5im7.js";import"./DraggableList-CtWzFhxX.js";import"./search-Cif2ZQOV.js";import"./Input-DBWCKen9.js";import"./useControlled-BS70aI_K.js";import"./Button-DCXgUJWi.js";import"./small-cross-CqhPSG41.js";import"./ActionButton-CuCH1v84.js";import"./Checkbox-BMKyb1ND.js";import"./useValueChanged-B-UgLZ_R.js";import"./CollapsiblePanel-VPfhnzag.js";import"./MultiColumnSortDialog-DVhDYf3L.js";import"./MenuTrigger-Qvpr5ZEC.js";import"./CompositeItem-spSeCvAe.js";import"./ToolbarRootContext-B8oHTFsm.js";import"./getDisabledMountTransitionStyles-W0Uyfg0E.js";import"./getPseudoElementBounds-DDNjc80p.js";import"./chevron-down-CBanfjsL.js";import"./index-DaTFX0DM.js";import"./error-DgA6RGKH.js";import"./BaseCbacBanner-1IdyAyi-.js";import"./makeExternalStore-eZw-8kVK.js";import"./Tooltip-Ci09cpDJ.js";import"./PopoverPopup-B_5MQfps.js";import"./debounce-MyXx4KSr.js";import"./tick-DEJdcIdx.js";import"./DropdownField-CjqZMfYC.js";import"./isEqual-Bvjp7-nb.js";import"./withOsdkMetrics-CBCC75vt.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
