import{j as r}from"./iframe-nlmHRzbs.js";import{O as b}from"./object-table-DOQUbULy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BTB34smg.js";import{u as g}from"./useOsdkClient-upaDZFfa.js";import"./preload-helper-Bb4XP1JR.js";import"./Table-Iflxq4LK.js";import"./index-BgU0BklA.js";import"./Dialog-B--HyOFO.js";import"./cross-BQ8TIcPZ.js";import"./svgIconContainer-DS8QHuIj.js";import"./useBaseUiId-BvXBgh7R.js";import"./InternalBackdrop-CEbVru8y.js";import"./composite-9JvUOFhV.js";import"./index-BBKiIpPq.js";import"./index-DrPWGN5f.js";import"./index-BvyZUx7D.js";import"./useEventCallback-DdbGqZSc.js";import"./SkeletonBar-CecNAbci.js";import"./LoadingCell-BR6nn8z5.js";import"./ColumnConfigDialog-CsSbs-RH.js";import"./DraggableList-CgQsJlL7.js";import"./search-KdHomzFH.js";import"./Input-C_WMBA0h.js";import"./useControlled-CL-2sXEB.js";import"./Button-u5u7l_L-.js";import"./small-cross-BOjbtokm.js";import"./ActionButton-DjrG6zzQ.js";import"./Checkbox-CNVwyFF7.js";import"./useValueChanged-Ct9fu7Wh.js";import"./CollapsiblePanel-CY5PmDvT.js";import"./MultiColumnSortDialog-C9_8osWy.js";import"./MenuTrigger-0I9U1fuS.js";import"./CompositeItem-DKy9HSNC.js";import"./ToolbarRootContext-C84AlWji.js";import"./getDisabledMountTransitionStyles-BPlx4jy3.js";import"./getPseudoElementBounds-CbqeOO0o.js";import"./chevron-down-DrD3cVw1.js";import"./index-B9KsoBHZ.js";import"./error-D0sD9myM.js";import"./BaseCbacBanner-rlX41YP5.js";import"./makeExternalStore-CDFtpytl.js";import"./Tooltip-h8u3LTdZ.js";import"./PopoverPopup-Cv6VjVH2.js";import"./debounce-tbCf9dd0.js";import"./tick-jNCOjvIC.js";import"./DropdownField-CYPegbUm.js";import"./isEqual-CLpN-Ztb.js";import"./withOsdkMetrics-CYPNcnBx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
