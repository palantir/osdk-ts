import{j as r}from"./iframe-Bw-Agif6.js";import{O as b}from"./object-table-CTJAZJUm.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-vDr5XPht.js";import{u as g}from"./useOsdkClient-jaVoMXOI.js";import"./preload-helper-wHYoTEvY.js";import"./Table-YHJ1nC5C.js";import"./index-DNmIinQa.js";import"./Dialog-D6n9iA1R.js";import"./cross-D63pv_qh.js";import"./svgIconContainer-D0FLeaRo.js";import"./useBaseUiId-BkzXSrg6.js";import"./InternalBackdrop-DlvukuPB.js";import"./composite-B_WicqqA.js";import"./index-ByJX6_Sx.js";import"./index-CAIuwcNw.js";import"./index-ByTvDRwc.js";import"./useEventCallback-C1jTj680.js";import"./SkeletonBar-D3kOzCQe.js";import"./LoadingCell-rqLUXNzU.js";import"./ColumnConfigDialog-D7ROuj86.js";import"./DraggableList-rHucen_L.js";import"./search-B0cSkiVa.js";import"./Input-BrcHuaTL.js";import"./useControlled-kEo0k7Py.js";import"./isEqual-D8Ika_FF.js";import"./isObject-C-20wa_z.js";import"./Button-DHc-O6ds.js";import"./ActionButton-D-ZUAS07.js";import"./Checkbox-tUW5bxQD.js";import"./useValueChanged-Dx-JN9io.js";import"./CollapsiblePanel-DFCeMXeo.js";import"./MultiColumnSortDialog-D5O3P0b1.js";import"./MenuTrigger-RUVJ72u2.js";import"./CompositeItem-5WZPpFtM.js";import"./ToolbarRootContext-Cf0AzzGI.js";import"./getDisabledMountTransitionStyles-mJwhDS-c.js";import"./getPseudoElementBounds-Dqwkk5Q-.js";import"./chevron-down-Dngh-QRN.js";import"./index-B5NpxPBP.js";import"./error-Rg-jn8n4.js";import"./BaseCbacBanner-D2cg6kX3.js";import"./makeExternalStore-Bbb3TB_2.js";import"./Tooltip-BDXQSKX4.js";import"./PopoverPopup-BxLXkzKe.js";import"./toNumber-bloY9kc_.js";import"./tick-BPugKlpA.js";import"./DropdownField-RW9yBtlE.js";import"./withOsdkMetrics-C6Xz7eXL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
