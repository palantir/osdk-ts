import{j as r}from"./iframe-D1LXFBxc.js";import{O as b}from"./object-table-Dc6kWb2K.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BtTIEjft.js";import{u as g}from"./useOsdkClient-CH0NV-pV.js";import"./preload-helper-BMGLbfqy.js";import"./Table-D0crwwGg.js";import"./index-1OI0nGkQ.js";import"./Dialog-5n5dGO1_.js";import"./cross-fpuOrCid.js";import"./svgIconContainer-bswbKgoA.js";import"./useBaseUiId-ps7HY4-v.js";import"./InternalBackdrop-DEpP5i29.js";import"./composite-DuREibPe.js";import"./index-BkZOFAl2.js";import"./index-DHKG1l8R.js";import"./index-CvkHqUxC.js";import"./useEventCallback-BzJZUjXz.js";import"./SkeletonBar-BEUy3yco.js";import"./LoadingCell-BuWFA09M.js";import"./ColumnConfigDialog-DkTHJgbS.js";import"./DraggableList-BFZHGTf-.js";import"./search-DbOA3UnO.js";import"./Input-Dcr7sH0u.js";import"./useControlled-BkSZr9vP.js";import"./Button-DQBtx8tI.js";import"./small-cross-dlZFFK_z.js";import"./ActionButton-Bn6Tlxi1.js";import"./Checkbox-BHZPfKNt.js";import"./useValueChanged-B2y-z1AW.js";import"./CollapsiblePanel-C5zeXEPd.js";import"./MultiColumnSortDialog-BWl5XeOe.js";import"./MenuTrigger-DNQaot3C.js";import"./CompositeItem-TBc75DhR.js";import"./ToolbarRootContext-BWtsBung.js";import"./getDisabledMountTransitionStyles-CUYWOYI-.js";import"./getPseudoElementBounds-D052xtfe.js";import"./chevron-down-BcP7YmhL.js";import"./index-BilF2CpV.js";import"./error-CxJnkhM-.js";import"./BaseCbacBanner-Dw8cKDh4.js";import"./makeExternalStore-BkL46d6x.js";import"./Tooltip-CXZWn5vA.js";import"./isObject-3yusRZvo.js";import"./debounce-CrOoXB7G.js";import"./tick-Dln8NHKp.js";import"./DropdownField-PSQxNdU1.js";import"./isEqual-DdJdcAmR.js";import"./_baseIsEqual-BvBA96bH.js";import"./withOsdkMetrics-BQyS4Ebn.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
