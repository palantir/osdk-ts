import{j as r}from"./iframe-KgHs4zat.js";import{O as b}from"./object-table-DV5y26_M.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BR3jvd8x.js";import{u as g}from"./useOsdkClient-DCQJMlbA.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-74UoGiwT.js";import"./index-4vqX9qxC.js";import"./Dialog-BpGjciNF.js";import"./cross-DhFqeu01.js";import"./svgIconContainer-DQnAfD0o.js";import"./useBaseUiId-DalgrHe6.js";import"./InternalBackdrop-DViNfjhE.js";import"./composite-IhPVrKNo.js";import"./index-sG7sensQ.js";import"./index-C8wkzaSL.js";import"./index-Cvi9YUqR.js";import"./useEventCallback-k4xeUSxb.js";import"./SkeletonBar-Bf7e_vZS.js";import"./LoadingCell-DKEWteEU.js";import"./ColumnConfigDialog-CbKTIPgu.js";import"./DraggableList-89OxstIM.js";import"./search-EITjVgXy.js";import"./Input-a2sXSpjj.js";import"./useControlled-CxaIzWVI.js";import"./Button-Dpxg_r7U.js";import"./small-cross-D0RxxQjs.js";import"./ActionButton-C50xJeW0.js";import"./Checkbox-DrjqhFVh.js";import"./useValueChanged-BFs6pXAE.js";import"./CollapsiblePanel-Z924RNew.js";import"./MultiColumnSortDialog-mu_PjvZK.js";import"./MenuTrigger-BpEoVlQn.js";import"./CompositeItem-7z4K7NB3.js";import"./ToolbarRootContext-D2FvLITL.js";import"./getDisabledMountTransitionStyles-NJe8la4r.js";import"./getPseudoElementBounds-BZaAPVEY.js";import"./chevron-down-CkShUoKE.js";import"./index-Dtd5pHFd.js";import"./error-DM5-tWgF.js";import"./BaseCbacBanner-D7M6Q2cB.js";import"./makeExternalStore-CgubNTuf.js";import"./Tooltip-DgoYnTNF.js";import"./PopoverPopup-DrtPa-a0.js";import"./debounce-CDJ8NUNV.js";import"./tick-9dKwtDHQ.js";import"./DropdownField-TNE9D_Wl.js";import"./isEqual-DtaZ63Yd.js";import"./withOsdkMetrics-fRmXbymy.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
