import{j as r}from"./iframe-pYM9Kle3.js";import{O as b}from"./object-table-Dg8X1YLC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Xmyw2AlE.js";import{u as g}from"./useOsdkClient-BD1XYN6K.js";import"./preload-helper-D5KvRmWw.js";import"./Table-r_TjHfFz.js";import"./index-aGm8-TAF.js";import"./Dialog-DL97wxmD.js";import"./cross-BnBrW-eg.js";import"./svgIconContainer-C_8arsQh.js";import"./useBaseUiId-RIZ0yVnd.js";import"./InternalBackdrop-DIPX0H2i.js";import"./composite-sTRtyjQk.js";import"./index-W-KSUEkN.js";import"./index-BOW_h0zx.js";import"./index-05AG5g9M.js";import"./useEventCallback-D8yjtfXj.js";import"./SkeletonBar-BK9B7HSX.js";import"./LoadingCell-CN61tLvp.js";import"./ColumnConfigDialog-CURzWvFL.js";import"./DraggableList-pKSWkaE1.js";import"./search-DhM0Kz_K.js";import"./Input-CwD97Qzu.js";import"./useControlled-BncmKvh2.js";import"./isEqual-3I2_tgp7.js";import"./isObject-CgQKXRFD.js";import"./Button-CU-ddK4J.js";import"./ActionButton-BKxfDdu4.js";import"./Checkbox-CZptYZXi.js";import"./useValueChanged-CWxRqVfZ.js";import"./CollapsiblePanel-o9ZfF3wl.js";import"./MultiColumnSortDialog-B89-LTwa.js";import"./MenuTrigger-6lJzNeVm.js";import"./CompositeItem-Cx5UxeIi.js";import"./ToolbarRootContext-B9CW3s9P.js";import"./getDisabledMountTransitionStyles-RZdmxJEf.js";import"./getPseudoElementBounds-D-2Wx9v7.js";import"./chevron-down-BISeLNQR.js";import"./index-CS1mNa9j.js";import"./error-BxZYQlfA.js";import"./BaseCbacBanner-Dfp89-qt.js";import"./makeExternalStore-BkiGOiIS.js";import"./Tooltip-XQHWhF0b.js";import"./PopoverPopup-BJDqIkbD.js";import"./toNumber-BgnxX0iA.js";import"./tick-BiUS3pKu.js";import"./DropdownField-BFRZdytN.js";import"./withOsdkMetrics-DOlv4fq5.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
