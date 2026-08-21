import{j as r}from"./iframe-G2sFBblw.js";import{O as b}from"./object-table-CqB2fZjZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bk26tqZa.js";import{u as g}from"./useOsdkClient-DKZLLXCr.js";import"./preload-helper-CqRVpl7F.js";import"./Table-BmKnkTaq.js";import"./index-Bf1a_w2A.js";import"./Dialog-D-JPJzBj.js";import"./cross-Cgrm_e1P.js";import"./svgIconContainer-C-G74yOn.js";import"./useBaseUiId-PA0X9Hzc.js";import"./InternalBackdrop-Brf5EOJv.js";import"./composite-Cs5FDNG8.js";import"./index-DQ-VFjK8.js";import"./index-Bz_02AKc.js";import"./index-BGQX8i9w.js";import"./useEventCallback-CGijwG5g.js";import"./SkeletonBar-CsgUPv3i.js";import"./LoadingCell-BSnxDL-9.js";import"./ColumnConfigDialog-DZz228E4.js";import"./DraggableList-Br4xD-0y.js";import"./search-X8OElP0v.js";import"./Input-Bdut2c0i.js";import"./useControlled-D6ZpKCy4.js";import"./Button-DwEHPhHn.js";import"./small-cross-fshzj5mN.js";import"./ActionButton-CI4V1Bp5.js";import"./Checkbox-BGUfbAs3.js";import"./useValueChanged-a00kAoAh.js";import"./CollapsiblePanel-Bt8YdGxn.js";import"./MultiColumnSortDialog-Bt5Yk7aK.js";import"./MenuTrigger-DcqCa7Eb.js";import"./CompositeItem-CDdPDuOE.js";import"./ToolbarRootContext-CKE9jd6d.js";import"./getDisabledMountTransitionStyles-BT5SUph6.js";import"./getPseudoElementBounds-D9lEJUlp.js";import"./chevron-down-eR29A_up.js";import"./index-BOFiGVt1.js";import"./error-DaCdYUUn.js";import"./BaseCbacBanner-CuKGJeVA.js";import"./makeExternalStore-pUJlIKix.js";import"./Tooltip-Ck0lRHyJ.js";import"./PopoverPopup-AM786urk.js";import"./debounce-CKEE8qyw.js";import"./tick-ySxfpAjM.js";import"./DropdownField-CS4TsSCM.js";import"./isEqual-BQZBvx39.js";import"./withOsdkMetrics-vEES6Ay5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
