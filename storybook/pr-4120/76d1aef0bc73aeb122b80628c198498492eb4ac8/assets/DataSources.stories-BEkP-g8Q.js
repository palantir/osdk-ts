import{j as r}from"./iframe-CvsBQ7Bv.js";import{O as b}from"./object-table-Bva39EkY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DGjbc6Z1.js";import{u as g}from"./useOsdkClient-Gme28oz4.js";import"./preload-helper-DlzqvSUq.js";import"./Table-Bk_Xiy1O.js";import"./index-zqvYW4SU.js";import"./Dialog-Dj7AJSDy.js";import"./cross-BBfoUyvH.js";import"./svgIconContainer-BICOG3-Z.js";import"./useBaseUiId-DJie0QLa.js";import"./InternalBackdrop-CgJA0r_O.js";import"./composite-tQAENqA9.js";import"./index-DWqMtX_5.js";import"./index-pktwAYcd.js";import"./index-CgcrBJpo.js";import"./useEventCallback-ama7zC7l.js";import"./SkeletonBar-BDtygrLN.js";import"./LoadingCell-DiJJdD0Z.js";import"./ColumnConfigDialog-DVeFw9Fz.js";import"./DraggableList--QPMrdfM.js";import"./search-DMySM0K3.js";import"./Input-CyAWOOQt.js";import"./useControlled-BMRWc9HY.js";import"./Button--C8rvOfU.js";import"./small-cross-CJHhyVum.js";import"./ActionButton-B4IV8DDr.js";import"./Checkbox-PtMaFLOi.js";import"./useValueChanged-MiAVaZ_u.js";import"./CollapsiblePanel-C7BP8ZD3.js";import"./MultiColumnSortDialog-DpCfKP_b.js";import"./MenuTrigger-D72mL9sH.js";import"./CompositeItem-CgFodWwZ.js";import"./ToolbarRootContext-CUoJwkVG.js";import"./getDisabledMountTransitionStyles-BYd2AM5Z.js";import"./getPseudoElementBounds-C1BIyYMV.js";import"./chevron-down-pfssoNn9.js";import"./index-CGIOcGM5.js";import"./error-D7W27UGH.js";import"./BaseCbacBanner-BS-G6SnX.js";import"./makeExternalStore-CoY10B_2.js";import"./Tooltip-BEj0KtXz.js";import"./PopoverPopup-ICSjS-3E.js";import"./debounce-B8ADmp8k.js";import"./tick-Cx1M9Q22.js";import"./DropdownField-Dkea7y5N.js";import"./isEqual-zwoTdbaf.js";import"./withOsdkMetrics-B_Zhux1x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
