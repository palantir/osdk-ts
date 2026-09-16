import{j as r}from"./iframe-CUQ6pW6f.js";import{O as b}from"./object-table-BY2xmCUc.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Y1Yh9beF.js";import{u as g}from"./useOsdkClient-98hCJrJL.js";import"./preload-helper-R0VkCi4m.js";import"./Table-B9k0d-uf.js";import"./index-h-DI9Lrm.js";import"./Dialog-SZ9zV0cP.js";import"./cross-DBScoIN6.js";import"./svgIconContainer-DgxjXUVD.js";import"./useBaseUiId-io2D7EyL.js";import"./InternalBackdrop-DeOAfNuf.js";import"./composite-DVURSZ_Q.js";import"./index-sOt4flAH.js";import"./index-B1pgXqxk.js";import"./index-BwGZQTcg.js";import"./useEventCallback-CBHs8zKc.js";import"./SkeletonBar-BRdyWD8N.js";import"./LoadingCell-GiHphTDn.js";import"./ColumnConfigDialog-BO_mXVOj.js";import"./DraggableList-hV8CyFWc.js";import"./search-NIM10vXd.js";import"./Input-BeRbTOIW.js";import"./useControlled-zbqpEGsi.js";import"./Button-C1Q3ab7J.js";import"./small-cross-IXjjZnoD.js";import"./ActionButton-fmMUa4gl.js";import"./Checkbox-CmojO_tp.js";import"./useValueChanged-DLbw96lb.js";import"./CollapsiblePanel-DptBjV9D.js";import"./MultiColumnSortDialog-R9mxJ5MY.js";import"./MenuTrigger-k5HlBQvB.js";import"./CompositeItem-BFFGDsSt.js";import"./ToolbarRootContext-Bu39Qel7.js";import"./getDisabledMountTransitionStyles-CQIeX0Ub.js";import"./getPseudoElementBounds-Ei-zDx44.js";import"./chevron-down-s1tgkNuZ.js";import"./index-DF9wOV2c.js";import"./error-hc0pOP7n.js";import"./BaseCbacBanner-Dg3AdP8h.js";import"./makeExternalStore-Bm8o0kSK.js";import"./Tooltip-Fo__1c0c.js";import"./PopoverPopup-D70TLWQP.js";import"./debounce-BSpE_UgL.js";import"./tick-Bde80KdX.js";import"./DropdownField-OJ4m5ByP.js";import"./isEqual-DUoNzBVM.js";import"./withOsdkMetrics-C6sVCQ7L.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
