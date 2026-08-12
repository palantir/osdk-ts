import{j as r}from"./iframe-CFVb3Ps1.js";import{O as b}from"./object-table-JJpjSfXj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BuSs3Fy6.js";import{u as g}from"./useOsdkClient-SiBep89O.js";import"./preload-helper-DUoBkcgp.js";import"./Table-C2qgkEda.js";import"./index-j_9_-Knb.js";import"./Dialog-u29b7JHZ.js";import"./cross-F64g4juI.js";import"./svgIconContainer-BIq4W7rh.js";import"./useBaseUiId-CYUQh1eE.js";import"./InternalBackdrop-C3_T0t_S.js";import"./composite-jNoK6z7Q.js";import"./index-PnPL-ngj.js";import"./index-BCwpvRKP.js";import"./index-MQFZGLtj.js";import"./useEventCallback-DfWEp3Qi.js";import"./SkeletonBar-DsIQ6u2E.js";import"./LoadingCell-Brtw5k8F.js";import"./ColumnConfigDialog-DCfB-Yy2.js";import"./DraggableList-BHy4YGXC.js";import"./search-dFaASQnw.js";import"./Input-DrcYzl24.js";import"./useControlled-DrQ2fT0v.js";import"./isEqual-DZJ5fEd6.js";import"./isObject-B_0v44vx.js";import"./Button-YOYPucvk.js";import"./ActionButton-DsjiNWUu.js";import"./Checkbox-CvxuqX69.js";import"./useValueChanged-u72R6kQz.js";import"./CollapsiblePanel-BVLs8nbx.js";import"./MultiColumnSortDialog-DkRJeCZc.js";import"./MenuTrigger-DYapyQQR.js";import"./CompositeItem-DCUGYySc.js";import"./ToolbarRootContext-AlgrHhlC.js";import"./getDisabledMountTransitionStyles-hPO0FBhu.js";import"./getPseudoElementBounds-DbAHztz7.js";import"./chevron-down-Bq_Zi3-5.js";import"./index-Chak816X.js";import"./error-BTpRUOI6.js";import"./BaseCbacBanner-Djq95ilw.js";import"./makeExternalStore-D5L1QyPs.js";import"./Tooltip-Cy4QqDmK.js";import"./PopoverPopup-Bkp1GJEw.js";import"./toNumber-BkArYVYP.js";import"./tick-BEPEfegi.js";import"./DropdownField-D_0so34u.js";import"./withOsdkMetrics-BZU3mB8s.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
