import{j as r}from"./iframe-YKgGYsAZ.js";import{O as b}from"./object-table-BnMQXkv0.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D9gOtfHa.js";import{u as g}from"./useOsdkClient-Dvvaf_S-.js";import"./preload-helper-DOUBWnCG.js";import"./Table-0BWYUg2X.js";import"./index-BSQIesNv.js";import"./Dialog-_bR5w0vP.js";import"./cross-Cy7yMOlh.js";import"./svgIconContainer-DjwSFEoB.js";import"./useBaseUiId-C9tw97PK.js";import"./InternalBackdrop-Beq4RY-j.js";import"./composite-9jEqfl-8.js";import"./index-Ckuqz5sJ.js";import"./index-Emhhftp8.js";import"./index-cwiYAG6F.js";import"./useEventCallback-epULuBlX.js";import"./SkeletonBar-D8RHKcwS.js";import"./LoadingCell-Jdekc-d0.js";import"./ColumnConfigDialog-BlLVglAQ.js";import"./DraggableList-SIkC03jl.js";import"./search-COrqTZFe.js";import"./Input-B20zbLtE.js";import"./useControlled-CMH4CusX.js";import"./isEqual-Brjs4Y_c.js";import"./isObject-DuvZSH3l.js";import"./Button-BYswp3H9.js";import"./ActionButton-Dl5vgnot.js";import"./Checkbox-BhgBtNGD.js";import"./useValueChanged-CBqj8w_B.js";import"./CollapsiblePanel-TiLuoxuM.js";import"./MultiColumnSortDialog-JK6Dm8Kk.js";import"./MenuTrigger-kRrWjUtP.js";import"./CompositeItem-D_aoMV-r.js";import"./ToolbarRootContext-C4AwY0JT.js";import"./getDisabledMountTransitionStyles-CxTm3pXi.js";import"./getPseudoElementBounds-wNQUm_MB.js";import"./chevron-down-e9aVtt1A.js";import"./index-DF281wZ_.js";import"./error-BF8Ij9Ca.js";import"./BaseCbacBanner-DPfQm9Xw.js";import"./makeExternalStore-B3R7PPWc.js";import"./Tooltip-CFc8dJ2d.js";import"./PopoverPopup-MHezIPJm.js";import"./toNumber-DFnR15ML.js";import"./tick-C_9SKsFa.js";import"./DropdownField-CpZTqGJh.js";import"./withOsdkMetrics-4LWIzNT1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
