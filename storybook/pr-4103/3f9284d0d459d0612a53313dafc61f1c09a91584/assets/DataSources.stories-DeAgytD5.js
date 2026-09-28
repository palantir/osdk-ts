import{j as r}from"./iframe-DWfJ7zGz.js";import{O as b}from"./object-table-ifnqVfK_.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-mZSvPldC.js";import{u as g}from"./useOsdkClient-BrdUMoba.js";import"./preload-helper-BLrTx2bV.js";import"./Table-DOkpSLD4.js";import"./index-gWYSOhKn.js";import"./Dialog-Dx95N8v8.js";import"./cross-osdHHFE1.js";import"./svgIconContainer-DSpgm6ur.js";import"./useBaseUiId-R5Nwqwa3.js";import"./InternalBackdrop-D1mFfPjU.js";import"./composite-CRrOsq3D.js";import"./index-CjmeahRK.js";import"./index-B26u0c0l.js";import"./index-SCL8CoE2.js";import"./useEventCallback-Cb-N_Op1.js";import"./SkeletonBar-C6g6-rvc.js";import"./LoadingCell-XgZ7JSq_.js";import"./ColumnConfigDialog-C922l1BR.js";import"./DraggableList-C-LbpFb3.js";import"./search-tI2FUc7S.js";import"./Input-nyG97nhE.js";import"./useControlled-x_cvzMnI.js";import"./Button-D-n8pDY3.js";import"./small-cross-D0wotoyp.js";import"./ActionButton-dHwh91E3.js";import"./Checkbox-B1O25Qci.js";import"./useValueChanged-6sg9t9oG.js";import"./CollapsiblePanel-DvipQVw5.js";import"./MultiColumnSortDialog-HHS7Y2AU.js";import"./MenuTrigger-DzPNPZYw.js";import"./CompositeItem-Db-3OHhb.js";import"./ToolbarRootContext-Dw2-n8FY.js";import"./getDisabledMountTransitionStyles-Ckgs-zFo.js";import"./getPseudoElementBounds-CH6esPuI.js";import"./chevron-down-B0X1iKQC.js";import"./index-1zb5OrbF.js";import"./error-DqCKC8-V.js";import"./BaseCbacBanner-DglM1_JI.js";import"./makeExternalStore-BbdjnJds.js";import"./Tooltip-D5kCXUrq.js";import"./PopoverPopup-DzxcpTZ2.js";import"./debounce-D-xnc5gC.js";import"./tick-B7MxtGy7.js";import"./DropdownField-BX_-W0jL.js";import"./isEqual-Dymixah0.js";import"./withOsdkMetrics-CuePKHJA.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
