import{j as r}from"./iframe-Brg_cLQb.js";import{O as b}from"./object-table-BWs_VCv5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DBFKYXyf.js";import{u as g}from"./useOsdkClient-Cmb6R8ID.js";import"./preload-helper-Y5XS6iK1.js";import"./Table-CXKxbRro.js";import"./index-CrF7Hfnz.js";import"./Dialog-CnyvFr3p.js";import"./cross-BM6OYU6g.js";import"./svgIconContainer-BRGYtCeZ.js";import"./useBaseUiId-DK5umTF8.js";import"./InternalBackdrop-BAArTL5Y.js";import"./composite-DXwrVJ8Z.js";import"./index-C82d9Hjp.js";import"./index-DAYKTTDO.js";import"./index-DWIdoxig.js";import"./useEventCallback-PcLKrdMT.js";import"./SkeletonBar-iXiA43LF.js";import"./LoadingCell-BxTPh0WF.js";import"./ColumnConfigDialog-CAvK7YVH.js";import"./DraggableList-DVewDeMa.js";import"./search-C4E6Jgg1.js";import"./Input-an-oiaSC.js";import"./useControlled-CT2yj4iv.js";import"./isEqual-D49SKO9i.js";import"./isObject-DS2RQay5.js";import"./Button-c0xcWgk4.js";import"./ActionButton-DohSud9u.js";import"./Checkbox-Dkcqx__k.js";import"./useValueChanged-Bm0RcCoh.js";import"./CollapsiblePanel-B3RKaBfX.js";import"./MultiColumnSortDialog-Tlv0fYfn.js";import"./MenuTrigger-CHlGD6Wx.js";import"./CompositeItem-0SA-C97C.js";import"./ToolbarRootContext-DJMC0sxm.js";import"./getDisabledMountTransitionStyles-6mhoIfPT.js";import"./getPseudoElementBounds-YNsuRSMp.js";import"./chevron-down-BdWX5g2Q.js";import"./index-BAbnckoF.js";import"./error-DhNgpSfu.js";import"./BaseCbacBanner-C9uPqEEi.js";import"./makeExternalStore-BTtAbm94.js";import"./Tooltip-CGc_VbY3.js";import"./PopoverPopup-BZFhHUwT.js";import"./debounce-BiADBLNL.js";import"./tick-m0A6XvMW.js";import"./DropdownField-Cj3eFEyH.js";import"./withOsdkMetrics-p9hMVxev.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
