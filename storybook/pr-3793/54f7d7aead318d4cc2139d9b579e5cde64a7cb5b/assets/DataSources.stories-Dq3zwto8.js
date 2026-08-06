import{j as r}from"./iframe-DHvAViPR.js";import{O as b}from"./object-table-D-9flvkC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BL2HFJsV.js";import{u as g}from"./useOsdkClient-CHv6FTUh.js";import"./preload-helper-Dr0qt1Io.js";import"./Table-FpwJusy2.js";import"./index-Bu8HbTmD.js";import"./Dialog-CW9JkQdy.js";import"./cross-jMdHsiQa.js";import"./svgIconContainer-DlMS91CX.js";import"./useBaseUiId-DC8JngT2.js";import"./InternalBackdrop-DocgtOsD.js";import"./composite-BqPomtbs.js";import"./index-C-uf0j7T.js";import"./index-BK9f1euG.js";import"./index-C0SFg9My.js";import"./useEventCallback-Mkp6eG4i.js";import"./SkeletonBar-CWpkfD4i.js";import"./LoadingCell-zT2gHZcw.js";import"./ColumnConfigDialog-BtvhjzuN.js";import"./DraggableList-CSoZ-IJ0.js";import"./search-CslhogKf.js";import"./Input-BahMzRfS.js";import"./useControlled-DhJY5-ob.js";import"./isEqual-BF6ez8mI.js";import"./isObject-DN-_A1Sa.js";import"./Button-CRVZcrRv.js";import"./ActionButton-C21ouRUL.js";import"./Checkbox-DwtHAgLP.js";import"./useValueChanged-BPn_zts2.js";import"./CollapsiblePanel-oahSC77k.js";import"./MultiColumnSortDialog-CCYfQtt4.js";import"./MenuTrigger-BS7gNlfS.js";import"./CompositeItem-DFHh1YHK.js";import"./ToolbarRootContext-D6av5NKs.js";import"./getDisabledMountTransitionStyles-Cm1DkgqH.js";import"./getPseudoElementBounds-BVHhalps.js";import"./chevron-down-m5ZtkVRt.js";import"./index-CFJ8T4c9.js";import"./error-ChBbUgez.js";import"./BaseCbacBanner-Dp4nf7jM.js";import"./makeExternalStore-hiekBPtY.js";import"./Tooltip-D-DaL636.js";import"./PopoverPopup-CQo59VTy.js";import"./toNumber-DrkGwxOv.js";import"./tick-CdE1sA9u.js";import"./DropdownField-KeSCUBSh.js";import"./withOsdkMetrics-CU3cEKz5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
