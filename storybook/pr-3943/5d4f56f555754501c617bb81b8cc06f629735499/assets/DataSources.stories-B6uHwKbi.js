import{j as r}from"./iframe-C8eg2aVK.js";import{O as b}from"./object-table-qoW5Qq7z.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DAKUgsqh.js";import{u as g}from"./useOsdkClient-CxRWx5of.js";import"./preload-helper-C2CvTlen.js";import"./Table-Dv1QU8Gh.js";import"./index-DwPFzsZq.js";import"./Dialog-B2Rbvbrg.js";import"./cross-DP1qntav.js";import"./svgIconContainer-DyXK-o1P.js";import"./useBaseUiId-DXPA-GsQ.js";import"./InternalBackdrop-C9EG6YtE.js";import"./composite-CEgtyNx-.js";import"./index-C0Un304-.js";import"./index-ZVVJNOJS.js";import"./index-B8vZrbzE.js";import"./useEventCallback-CQ6nFGrm.js";import"./SkeletonBar-Cnk-BAJn.js";import"./LoadingCell-D_arR6jU.js";import"./ColumnConfigDialog-DkYfQF_p.js";import"./DraggableList-DpXEDyP4.js";import"./search-CbO7NZxO.js";import"./Input-C8xPJvAo.js";import"./useControlled-DVBJV2vy.js";import"./Button-CHkJdegF.js";import"./small-cross-GhLdprnj.js";import"./ActionButton-BHr0ILkQ.js";import"./Checkbox-CDsSsvHY.js";import"./useValueChanged-QHxo1YSZ.js";import"./CollapsiblePanel-jbwQyiaf.js";import"./MultiColumnSortDialog-Ddpi_1qm.js";import"./MenuTrigger-L3qhVa3P.js";import"./CompositeItem-6_9MUd5U.js";import"./ToolbarRootContext-CvBB5dRJ.js";import"./getDisabledMountTransitionStyles-C8_atirw.js";import"./getPseudoElementBounds-cb4sJS9G.js";import"./chevron-down-UzOgz9cR.js";import"./index-CBQZe3n0.js";import"./error-U6-2l1WQ.js";import"./BaseCbacBanner-BfHXlN_7.js";import"./makeExternalStore-C7CnX90v.js";import"./Tooltip-D5MpYEr-.js";import"./PopoverPopup-DfHmD2Xb.js";import"./debounce-C7dCSXck.js";import"./tick-B8UVtEGY.js";import"./DropdownField-C-BLWb4q.js";import"./isEqual-CIsuS3iH.js";import"./withOsdkMetrics-BHO_8kDg.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
