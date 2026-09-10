import{j as r}from"./iframe-CpcWMsh2.js";import{O as b}from"./object-table-CoyGYxq-.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dr_L3SqT.js";import{u as g}from"./useOsdkClient-Bf3Wfvs3.js";import"./preload-helper-CN3GQMjz.js";import"./Table-BgONAB3g.js";import"./index-Crz8jB-9.js";import"./Dialog-BhB2EVK-.js";import"./cross-BGaRJcvO.js";import"./svgIconContainer-Huh63JJu.js";import"./useBaseUiId-DXzATXKT.js";import"./InternalBackdrop-9c6OTDK9.js";import"./composite-CtH7isvm.js";import"./index-BBtYj7J3.js";import"./index-doObrpzR.js";import"./index-DJLjrcri.js";import"./useEventCallback-BGZ2MJrW.js";import"./SkeletonBar-Cx2Gs9qW.js";import"./LoadingCell-TZC5cUR_.js";import"./ColumnConfigDialog-D2vG7jTz.js";import"./DraggableList-WEV7a9Jj.js";import"./search-BprxbqFd.js";import"./Input-BdQWVtdR.js";import"./useControlled-nerw9-6R.js";import"./Button-CUMMFBAM.js";import"./small-cross-5mwwvKLt.js";import"./ActionButton-BHZtYOuv.js";import"./Checkbox-DEm2cTN7.js";import"./useValueChanged-W8zfC5hp.js";import"./CollapsiblePanel-DfsLMHyx.js";import"./MultiColumnSortDialog-ebFoK4Ku.js";import"./MenuTrigger-DyhEEdzn.js";import"./CompositeItem-Bm31Wr9o.js";import"./ToolbarRootContext-nw5M_EUa.js";import"./getDisabledMountTransitionStyles-UM54dXw7.js";import"./getPseudoElementBounds-BytC3tPt.js";import"./chevron-down-ByJuuwk-.js";import"./index-BbnSTWOo.js";import"./error-Cea5AChJ.js";import"./BaseCbacBanner-CdrCSqf6.js";import"./makeExternalStore-6VRmQlrr.js";import"./Tooltip-DshyWHE3.js";import"./PopoverPopup-BmebcJ3w.js";import"./debounce-B90qMA3e.js";import"./tick-DWjjoXoQ.js";import"./DropdownField-BHTMsNk1.js";import"./isEqual-C99oM3wL.js";import"./withOsdkMetrics-CnzpNQ91.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
