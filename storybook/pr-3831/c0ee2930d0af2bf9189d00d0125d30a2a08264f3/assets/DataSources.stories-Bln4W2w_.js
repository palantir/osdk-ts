import{j as r}from"./iframe-Dwq9wrDt.js";import{O as b}from"./object-table-C0ojvj8Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Cj6_l3XQ.js";import{u as g}from"./useOsdkClient-Cr99Bnja.js";import"./preload-helper-B1owdDsL.js";import"./Table-x4X088dP.js";import"./index-DH5QrWNc.js";import"./Dialog-Da6AXT6s.js";import"./cross-bOMperPh.js";import"./svgIconContainer-D0D9W8JM.js";import"./useBaseUiId-B7nN8GdQ.js";import"./InternalBackdrop-BIJmIlb_.js";import"./composite-CEGLGHiv.js";import"./index-D7NxJNil.js";import"./index-CP796jUP.js";import"./index-eQsJMTxi.js";import"./useEventCallback-B19JLpmu.js";import"./SkeletonBar-Dy6nnuXU.js";import"./LoadingCell-DjTJg32u.js";import"./ColumnConfigDialog-DCbw1UJH.js";import"./DraggableList-Z-EWa3FS.js";import"./search-BMSwG6Z-.js";import"./Input-Cx88AEdI.js";import"./useControlled-Fc1Z38Dl.js";import"./Button-D7JoiY-s.js";import"./small-cross-j8rJd5Xm.js";import"./ActionButton-Dr4qYGQO.js";import"./Checkbox-C4c4w8i1.js";import"./useValueChanged-CN4VeO_p.js";import"./CollapsiblePanel-CBIF_eeh.js";import"./MultiColumnSortDialog-B_xMJUsx.js";import"./MenuTrigger-DidvGjJV.js";import"./CompositeItem-C4EX3fG2.js";import"./ToolbarRootContext-D7rqNdCo.js";import"./getDisabledMountTransitionStyles-DLK9eHUM.js";import"./getPseudoElementBounds-DO-6sdCU.js";import"./chevron-down-BvKwnLh6.js";import"./index-C3biqhR2.js";import"./error-OKwjq5IS.js";import"./BaseCbacBanner-DinZMws6.js";import"./makeExternalStore-CaAgBHnr.js";import"./Tooltip-BzDmJOWp.js";import"./PopoverPopup-CV_eEi5d.js";import"./debounce-C4VhubKr.js";import"./tick-ARaqt1U4.js";import"./DropdownField-CQYHMIv6.js";import"./isEqual-FoUaro_7.js";import"./withOsdkMetrics-DWFHC7AK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
