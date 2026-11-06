import{j as r}from"./iframe-CwWTpKqE.js";import{O as b}from"./object-table-zJLOk_40.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Crl6yO4e.js";import{u as g}from"./useOsdkClient-DMY5woQL.js";import"./preload-helper-B09VY0AV.js";import"./Table-BNWhTBV5.js";import"./index-ibAAsAIP.js";import"./Dialog-DZNa0wWF.js";import"./cross-DKdi2fit.js";import"./svgIconContainer-BQKxLrqz.js";import"./useBaseUiId-KfzYfEP4.js";import"./InternalBackdrop-Dn9iyTJK.js";import"./composite-BQxf11e7.js";import"./index-nzJ3ZmYt.js";import"./index-lXeJxgff.js";import"./index-DffI0gsz.js";import"./useEventCallback-D71N8cWx.js";import"./SkeletonBar-B52QORjF.js";import"./LoadingCell-Dl2kEIxe.js";import"./ColumnConfigDialog-CI6VqC0f.js";import"./DraggableList-C2W-z-be.js";import"./search-sqlqxwkc.js";import"./Input-Chlp8aHK.js";import"./useControlled-Bv0Nsxvt.js";import"./Button-CRkFmj-6.js";import"./small-cross-DyjyycKa.js";import"./ActionButton-CdyawS6Q.js";import"./Checkbox-DioX5sYb.js";import"./useValueChanged-KkTgGyCA.js";import"./CollapsiblePanel-ClyaxKWN.js";import"./MultiColumnSortDialog-DwtkYdDu.js";import"./MenuTrigger-CUjXgFgf.js";import"./CompositeItem-DdcfEsM9.js";import"./ToolbarRootContext-BpNk0gzp.js";import"./getDisabledMountTransitionStyles-C2q5byKc.js";import"./getPseudoElementBounds-COKxlhPa.js";import"./chevron-down-CndDBIBA.js";import"./index-Cf9g6rai.js";import"./error-DLpjz71D.js";import"./BaseCbacBanner-BpDeusrL.js";import"./makeExternalStore-BCW3G7rA.js";import"./Tooltip-DZcs6cWK.js";import"./isObject-CkJtIVIY.js";import"./debounce-BydD4alG.js";import"./tick-Dt7zelIm.js";import"./DropdownField-D0XUXnSf.js";import"./isEqual-1SZ4U_aG.js";import"./_baseIsEqual-BHFmemS8.js";import"./withOsdkMetrics-CfTZp6DM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
