import{j as r}from"./iframe-h1qnQQVx.js";import{O as b}from"./object-table-CCB2sUYl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BgDvNIWs.js";import{u as g}from"./useOsdkClient-D3paodEw.js";import"./preload-helper-ADovFD1C.js";import"./Table-BgITRHQ7.js";import"./index-DD5KPom6.js";import"./Dialog-D_qB_2bQ.js";import"./cross-D4ej-8wY.js";import"./svgIconContainer-Ca3ASY3c.js";import"./useBaseUiId-hqOZCtk1.js";import"./InternalBackdrop-DzsQOQ6H.js";import"./composite-DEzICmec.js";import"./index-YrVkhqd3.js";import"./index-XQODY1Mp.js";import"./index-bgANXVO3.js";import"./useEventCallback-CAa8wROE.js";import"./SkeletonBar-CZuoXFeA.js";import"./LoadingCell-Dlk9LDgi.js";import"./ColumnConfigDialog--b3u250j.js";import"./DraggableList-DCSYf_a_.js";import"./search-DcazpnHi.js";import"./Input-Cf0RIFeN.js";import"./useControlled-BQy-u6tQ.js";import"./Button-dm1NzbtL.js";import"./small-cross-FuKyHVfD.js";import"./ActionButton-NhxG-Rd-.js";import"./Checkbox-CAMoMPDw.js";import"./useValueChanged-Bp8vrCQO.js";import"./CollapsiblePanel-BDa3QWHs.js";import"./MultiColumnSortDialog-DqDflPY8.js";import"./MenuTrigger-fV8ObzjY.js";import"./CompositeItem-CTw2DdEJ.js";import"./ToolbarRootContext-BYONpLtc.js";import"./getDisabledMountTransitionStyles-M7Lz_Jwx.js";import"./getPseudoElementBounds-25R6sRkV.js";import"./chevron-down-CivjtU0i.js";import"./index-BlgrCeK6.js";import"./error-DJpMatiu.js";import"./BaseCbacBanner-8PJVPI9r.js";import"./makeExternalStore-NEI1OBmX.js";import"./Tooltip-B55QNhDI.js";import"./PopoverPopup-CrYZUhxY.js";import"./debounce-7u23BgIJ.js";import"./tick-CkX4BKXY.js";import"./DropdownField-CCAidc8X.js";import"./isEqual-CoPuQcQe.js";import"./withOsdkMetrics-DQ_0oDdX.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
